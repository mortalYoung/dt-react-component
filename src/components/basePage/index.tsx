import React, { useState } from 'react'
import { 
    Card,
    Form,
    Table,
    Radio,
    Input,
    Button,
    Checkbox,
    DatePicker
 } from 'antd';
 import EasySelect from '../easySelect';
 import {
     ItemProps,
     HeaderProps,
     FooterProps,
     ContentProps
 } from './types';

const { Item } = Form
const { RangePicker } = DatePicker;

interface IGetItemList {
    (groups: any): React.ReactElement // or JSX.Element[]
  }

export interface basePageProps extends ContentProps {
    header?: HeaderProps,
    footer?: FooterProps
}

export default function BasePage (props: basePageProps){
    const [ form ] = Form.useForm();
    const {
        header,
        columns,
        request,
        dataSource,
        pagination = {}
    } = props;
    const {
        styles,
        btnList,
        itemList,
        hideReset,
        formOption,
        hideSearch,
        initialValues,
    } = header;
    const { pageSize, page, ...other } = pagination;
    const [ nextPageSize, setPageSize ] = useState(pageSize || 10);
    const [ current, setCurrent ] = useState(page || 1);
    const [ data, setData ] = useState(dataSource || []);
    const [ total, setTotal ] = useState(0);

    const getTableData = (values: Record<string, any>) => {
        request({
            ...values,
            pageSize: nextPageSize,
            current
        })
            .then((res: { data: Record<string, any>[]; total: number }) => {
                const { data : tableData, total: newTotal } = res
                setData(tableData);
                newTotal && setTotal(newTotal);
            })
    }

    const onSearch = async () => {
        try {
            const values = await form.validateFields();
            getTableData(values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    }
    const onCancel = () => {
        getTableData({})
    }

    const renderFormItemByType:IGetItemList = (item: Record<string, any>) => {
        const { type, itemOption, childrenOption = {}, customRender } = item;
        switch (type) {
            case 'input':
                return (
                    <Item key={itemOption.label || type} {...itemOption}>
                        <Input
                            placeholder="请输入"
                            {...childrenOption}
                        />
                    </Item>)
            case 'select':
                return (
                    <Item key={ itemOption.label || type} {...itemOption}>
                        <EasySelect
                            placeholder="请选择"
                            {...childrenOption}
                        />
                    </Item>)
            case 'datePicker':
                return (
                    <Item key={itemOption.label || type} {...itemOption}>
                        <DatePicker
                            format="YYYY-MM-DD"
                            placeholder="请选择"
                            {...childrenOption}
                        />
                    </Item>)
            case 'rangePicker':
                return (
                    <Item key={itemOption.label || type} {...itemOption}>
                        <RangePicker
                            {...childrenOption}
                        />
                    </Item>)
            case 'radio':
                return (
                    <Item key={itemOption.label || type} {...itemOption}>
                        <Radio.Group
                            {...childrenOption}
                        />
                    </Item>)
            case 'checkbox':
                return (
                    <Item key={itemOption.label || type} {...itemOption}>
                        <Checkbox
                            
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
    }

    return (
        <Card className="dtc-basePage">
            <div
                className="dtc-basePage_header"
                style={styles}
            >
                {(itemList.length || btnList.length) && <Form
                    layout="inline"
                    initialValues={initialValues}
                    autoComplete="off"
                    {...formOption}
                    form={form}
                >
                    {
                        itemList.length && itemList.map((item: ItemProps) => {
                            return renderFormItemByType(item);
                        })
                    }
                    {!hideSearch && <Item label="">
                        <Button type="primary" htmlType="submit" onClick={onSearch}>
                            查询
                        </Button>
                    </Item>}
                    {!hideReset && <Item label="">
                        <Button htmlType="reset" onClick={onCancel}>
                            重置
                        </Button>
                    </Item>}
                </Form>}
            </div>
            <div
                className="dtc-basePage_content"
                style={styles}
            >
                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={{
                        ...other,
                        current,
                        pageSize,
                        total
                    }}
                />
            </div>
            {/* { footer && <Footer {...footer} /> } */}
        </Card>
    )
}
