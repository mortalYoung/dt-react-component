import React, { ReactNode, useMemo, useRef } from 'react';
import { Utils } from '@dtinsight/dt-utils';
import { Form, type FormListFieldData, Table, type TableProps } from 'antd';
import type { FormItemProps, FormListProps, Rule, RuleObject, RuleRender } from 'antd/lib/form';
import type { ColumnsType, ColumnType as TableColumnType } from 'antd/lib/table';
import Schema from 'async-validator';
import classnames from 'classnames';
import { VList } from 'virtuallist-antd';

import './index.scss';

type NotNullRowSelection = NonNullable<TableProps<any>['rowSelection']>;
/**
 * Override NamePath parameters type
 */
type OverrideParameters = (string | number)[];
type RcFormInstance = Parameters<RuleRender>[0];

type RawPanelRender = NonNullable<TableProps<any>['footer']>;
/**
 * Override PanelRender type
 */
type PanelRenderFunc = (
    ...args: Parameters<FormListProps['children']>
) => ReturnType<RawPanelRender>;

/**
 * Form.Table 组件类型
 */
export interface IFormTableProps
    /**
     * Support all FormListProps except children for which is re-defined in this component
     * and prefixCls for which is not expected to be supported
     */
    extends Pick<FormListProps, 'name' | 'rules' | 'initialValue'>,
        /**
         * Support all TableProps except
         * - re-define columns and re-defined rowSelection
         * - and pagination which is expect to be not supported in Form.Table
         * - and className which is renamed to tableClassName
         * - and rowKey, dataSource for which are defined and not allowed to be modified
         * - and footer, title, summary for which are re-defined to pass form's operation
         */
        Omit<
            TableProps<any>,
            | 'columns'
            | 'rowSelection'
            | 'pagination'
            | 'className'
            | 'dataSource'
            | 'footer'
            | 'title'
            | 'summary'
        > {
    /**
     * 表格列的配置描述
     */
    columns?: ColumnType[] | ((...args: Parameters<FormListProps['children']>) => ColumnType[]);
    /**
     * Table 的 className
     */
    tableClassName?: TableProps<any>['className'];
    /**
     * 表格行是否可选择
     */
    rowSelection?: Omit<NotNullRowSelection, 'getCheckboxProps'> & {
        getCheckboxProps?: (
            field: FormListFieldData
        ) => ReturnType<NonNullable<NotNullRowSelection['getCheckboxProps']>>;
    };
    virtual?: boolean;
    title?: PanelRenderFunc;
    footer?: PanelRenderFunc;
    summary?: PanelRenderFunc;
}

export interface ColumnType
    /**
     * Support all FormItemProps, and re-defined `rules` and `dependencies`
     */
    extends Omit<FormItemProps, 'rules' | 'dependencies' | 'prefixCls' | 'children'>,
        /**
         * Support all TableColumnType, and re-defined `render`
         */
        Omit<TableColumnType<FormListFieldData>, 'render'> {
    /**
     * 设置依赖字段, 支持通过回调函数获取当前字段名
     */
    dependencies?:
        | ((namePath: OverrideParameters) => FormItemProps['dependencies'])
        | FormItemProps['dependencies'];
    /**
     * 校验规则，设置字段的校验逻辑，支持通过回调函数获取当前字段名
     */
    rules?: (RuleObject | ((form: RcFormInstance, namePath: OverrideParameters) => RuleObject))[];
    /**
     * 渲染函数
     * @param formInstance 只有在设置了 `dependencies` 的情况下才有该参数
     */
    render?: (
        record: FormListFieldData,
        namePath: OverrideParameters,
        formInstance?: RcFormInstance
    ) => ReactNode;
}

const className = 'dtc-form__table';

export default function InternalTable({
    name,
    rules,
    virtual,
    rowKey,
    initialValue,
    ...tableProps
}: IFormTableProps) {
    const form = Form.useFormInstance();
    const table = useRef<HTMLDivElement>(null);
    const {
        tableClassName,
        columns: rawColumns,
        // override title, footer, summary
        title,
        footer,
        summary,
        ...restProps
    } = tableProps;

    // 每一列对应的 rules
    const colRules = useRef<Map<ColumnType, Rule[] | undefined>>(new Map());

    const convertRawToTableCol = (raw?: ColumnType[]): ColumnsType<FormListFieldData> => {
        if (!raw?.length) return [];
        return raw.map((col) => {
            const {
                noStyle,
                style,
                className,
                id,
                hasFeedback,
                validateStatus,
                required,
                hidden,
                initialValue,
                messageVariables,
                tooltip,
                dependencies,
                rules: rawRules,
                render,
                ...cols
            } = col;
            const formItemProps = {
                noStyle,
                style,
                className,
                id,
                hasFeedback,
                validateStatus,
                required,
                hidden,
                initialValue,
                messageVariables,
                tooltip,
            };

            const isRequired =
                required || rawRules?.some((rule) => typeof rule === 'object' && rule.required);

            return {
                ...cols,
                title: (
                    <>
                        {isRequired && <span className="dtc-form__table__column--required" />}
                        {cols.title}
                    </>
                ),
                render(_, record) {
                    const currentNamePath = [record.name, cols.dataIndex]
                        .filter(Utils.checkExist)
                        .flat() as OverrideParameters;

                    const rules: Rule[] | undefined = rawRules?.map((rule) =>
                        typeof rule === 'function' ? (form) => rule(form, currentNamePath) : rule
                    );

                    if (!colRules.current.has(col)) {
                        colRules.current.set(col, rules);
                    }

                    if (dependencies) {
                        return (
                            <Form.Item
                                noStyle
                                dependencies={
                                    typeof dependencies === 'function'
                                        ? dependencies(currentNamePath)
                                        : dependencies
                                }
                            >
                                {(formInstance) => (
                                    <Form.Item
                                        name={currentNamePath}
                                        rules={rules}
                                        {...formItemProps}
                                    >
                                        {render?.(record, currentNamePath, formInstance)}
                                    </Form.Item>
                                )}
                            </Form.Item>
                        );
                    }

                    return (
                        <Form.Item name={currentNamePath} rules={rules} {...formItemProps}>
                            {render?.(record, currentNamePath)}
                        </Form.Item>
                    );
                },
            };
        });
    };

    const columns = useMemo(() => {
        if (typeof rawColumns === 'function') return rawColumns;
        return convertRawToTableCol(rawColumns);
    }, [rawColumns]);

    const virtualComponents = useMemo(() => {
        if (!restProps.scroll?.y) {
            console.warn(
                `You Should specify a clear value of scroll.y for virtual table. but got ${restProps.scroll?.y}`
            );
            return undefined;
        }
        return VList({
            height: restProps.scroll.y,
            resetTopWhenDataChange: false,
        });
    }, []);

    const listRules = useMemo(() => {
        if (!virtual) return rules;
        const res = rules || [];
        // 用于 antd 的 validateFields 方法只校验渲染出 dom 的数据，所以针对开启了虚拟滚动的表单，需要手动校验所有数据
        res.push({
            validator: (_, value) => {
                const descriptors = Array.from(colRules.current.entries()).reduce<
                    Record<string, any>
                >((acc, [col, rules]) => {
                    if (!rules) return acc;
                    acc[col.dataIndex as string] = rules.reduce(
                        (acc, cur) => ({ ...acc, ...cur }),
                        {}
                    );
                    return acc;
                }, {});
                // 开启了虚拟滚动的表单默认启用 scrollToFirstError 并且第一个失败时停止后续数据的校验
                return createPromise(value, descriptors)
                    .then(() => {
                        console.log('success');
                    })
                    .catch((err) => {
                        if (Array.isArray(err) && err.length) {
                            const { index } = err[0];
                            window.requestAnimationFrame(() => {
                                const overflowContainer =
                                    table.current?.querySelector('.virtuallist')?.parentElement;
                                if (!overflowContainer) return;
                                const lineHeight =
                                    overflowContainer
                                        .querySelector('.ant-table-row')
                                        ?.getBoundingClientRect().height || 0;
                                const top = index * lineHeight;
                                overflowContainer.addEventListener(
                                    'scrollend',
                                    () => {
                                        const names = err.map((i) =>
                                            [name, i.index, i.field].flat()
                                        );
                                        form.validateFields(names);
                                    },
                                    { once: true }
                                );
                                // 当需要移动的距离超过 5000 时, 不使用平滑滚动，防止距离过大导致连续空白页面
                                const duration = Math.abs(overflowContainer.scrollTop - top);
                                overflowContainer.scrollTo({
                                    top,
                                    behavior: duration > 5000 ? 'auto' : 'smooth',
                                });
                            });
                        }
                        return Promise.reject(err);
                    });
            },
        });
        return res;
    }, [virtual, rules]);

    return (
        <Form.List name={name} rules={listRules} initialValue={initialValue}>
            {(fields, ope, meta) => (
                <Table<FormListFieldData>
                    className={classnames(className, tableClassName)}
                    ref={table}
                    rowKey={rowKey || 'key'}
                    dataSource={fields}
                    pagination={false}
                    columns={
                        typeof columns === 'function'
                            ? convertRawToTableCol(columns(fields, ope, meta))
                            : columns
                    }
                    components={virtual ? virtualComponents : undefined}
                    footer={footer ? () => footer(fields, ope, meta) : undefined}
                    title={title ? () => title(fields, ope, meta) : undefined}
                    summary={summary ? () => summary(fields, ope, meta) : undefined}
                    {...restProps}
                />
            )}
        </Form.List>
    );
}

/**
 * 创建一个失败即返回的 Promise
 */
function createPromise(value: any[], descriptors: any) {
    const validator = new Schema(descriptors);

    function validate(index: number) {
        return new Promise<void>((resolve, reject) => {
            validator.validate(value[index], (errors: any) => {
                if (errors) {
                    return reject(errors.map((i: any) => ({ ...i, index })));
                }
                resolve();
            });
        });
    }

    async function* createAsyncGenerator() {
        for (let index = 0; index < value.length; index++) {
            yield await validate(index);
        }
    }

    const asyncGenerator = createAsyncGenerator();
    async function chain(): Promise<void> {
        try {
            let res = await asyncGenerator.next();
            while (!res.done) {
                res = await asyncGenerator.next();
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    return chain();
}
