import React from 'react';
import { Form, Input, Button, Radio, DatePicker, Checkbox } from 'antd';
import EasySelect from '../easySelect';
import { HeaderProps, ItemProps } from './types';

const { Item } = Form
const { RangePicker } = DatePicker;
export default function Header (props: HeaderProps) {
    const {
        styles, itemList, btnList,
        initialValues, hideSearch, hideReset, formOption
    } = props;
    return (
        <div
            className="dtc-basePage_header"
            style={styles}
        >
            {(itemList.length || btnList.length) && <Form
                layout="inline"
                initialValues={initialValues}
                {...formOption}
            >
                {
                    itemList.length && itemList.map((item: ItemProps) => {
                        const { type, itemOption = { label: '' }, childrenOption = {}, customRender } = item;
                        switch (type) {
                            case 'input':
                                return (
                                    <Item {...itemOption}>
                                        <Input
                                            key={itemOption.label as string || type}
                                            placeholder="请输入"
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'select':
                                return (
                                    <Item {...itemOption}>
                                        <EasySelect
                                            key={itemOption.label as string || type}
                                            placeholder="请选择"
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'datePicker':
                                return (
                                    <Item {...itemOption}>
                                        <DatePicker
                                            key={itemOption.label as string || type}
                                            format="YYYY-MM-DD"
                                            placeholder="请选择"
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'rangePicker':
                                return (
                                    <Item {...itemOption}>
                                        <RangePicker
                                            key={itemOption.label as string || type}
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'radio':
                                return (
                                    <Item {...itemOption}>
                                        <Radio.Group
                                            key={itemOption.label as string || type}
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'checkbox':
                                return (
                                    <Item {...itemOption}>
                                        <Checkbox
                                            key={itemOption.label as string || type}
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'custom':
                                return customRender
                            default:
                                return customRender || (
                                    <Item {...itemOption}>
                                        <Input
                                            {...childrenOption}
                                        />
                                    </Item>)
                        }
                    })
                }
                {!hideSearch && <Item>
                    <Button type="primary" htmlType="submit">
                        查询
                    </Button>
                </Item>}
                {!hideReset && <Item>
                    <Button htmlType="reset">
                        重置
                    </Button>
                </Item>}
            </Form>}

        </div>
    )
}
