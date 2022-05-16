import type { TableProps, FormItemProps, FormProps } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/lib/table';

export interface ItemProps {
    /**
     * 类型
    */
    type: string;
    /**
     * 默认数据
    */
    dataSource?: Record<string, any>[];
    /**
     * 元素配置项
    */
    childrenOption?: Record<string, any>;
    /**
     * FormItem配置项
    */
    itemOption?: FormItemProps;
    /**
     * 自定义组件渲染
    */
    customRender?: FormItemProps<any>['children'];
}

export interface BtnProps {
    /**
     * 类型
    */
    type?: string;
    /**
     * 默认数据
    */
    dataSource?: Record<string, any>[];
    /**
     * 元素配置项
    */
    childrenOption?: Record<string, any>;
    /**
     * FormItem配置项
    */
    itemOption?: FormItemProps;
}

export interface HeaderProps {
    /**
     * 自定义样式
    */
    styles?: React.CSSProperties;
    /**
     * 初始化数据
    */
    initialValues?: Record<string, any>;
    /**
     * 元素数组
    */
    itemList?: ItemProps[];
    /**
     * 按钮数组
    */
    btnList?: BtnProps[];
    /**
     * 是否隐藏搜索按钮
    */
    hideSearch?: boolean;
    /**
     * 是否隐藏重置按钮
    */
    hideReset?: boolean;
    /**
     * 提交事件
    */
    onSubmit?: (value: Record<string, any>) => void;
    /**
     * Form组件配置项
    */
    formOption?: FormProps;
}

export interface ContentProps {
    /**
     * 等待
    */
    loading?: boolean;
    /**
     * 自定义样式
    */
    styles?: React.CSSProperties;
     /**
    * 表格数据
    */
    dataSource?: TableProps<any>['dataSource'];
    /**
    * 表格的列表项
    */
    columns: ColumnsType;
    /**
     * 页面展示条数
     */
    pageSize?: number;
    /**
     * 表格页数
     */
    current?: number;
    /**
     * 表格请求时的自定义参数
     */
    otherParams?: Record<string, any>;
    /**
     * 分页的配置项
     */
    pagination?: TablePaginationConfig;
    /**
     * 请求数据
     */
    request?: (
        valuse: Record<string, any>
    ) => Promise<{ data: Record<string, any>[]; total: number } | void>;
    /**
     * 请求数据后的回调方法
     */
    requestCallback?: (val?: any) => void ;
}

export interface FooterProps {
    /**
     * 自定义样式
     */
    styles?: React.CSSProperties;
}
