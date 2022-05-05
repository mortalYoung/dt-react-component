import React from 'react';
import { Form, Input, Button } from 'antd';
import EasySelect from '../easySelect';
import { HeaderProps, ItemProps } from './types';

const { Item } = Form
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
                        const { type, itemOption = {}, childrenOption = {}, customRender } = item;
                        switch (type) {
                            case 'input':
                                return (
                                    <Item {...itemOption}>
                                        <Input
                                            {...childrenOption}
                                        />
                                    </Item>)
                            case 'select':
                                return (
                                    <Item {...itemOption}>
                                        <EasySelect
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
