import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
import { EllipsisText, Form } from 'dt-react-component';

import { getMockPerformanceData } from './data';

export default () => {
    const [form] = Form.useForm();

    const [loading, setLoading] = useState(false);
    const [validating, setValidating] = useState(false);

    const [rowKeys, setRowKeys] = useState<React.Key[]>([]);

    const getData = () => {
        setLoading(true);
        getMockPerformanceData()
            .then((values) => {
                form.setFieldValue('data', values);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSubmit = () => {
        setValidating(true);
        window.setTimeout(() => {
            form.validateFields()
                .then((values) => {
                    message.success('校验成功');
                    console.log('values:', values);
                })
                .finally(() => {
                    setValidating(false);
                });
        }, 1000);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Form form={form} layout="vertical">
            <Form.Table
                name="data"
                loading={loading}
                rowSelection={{
                    selectedRowKeys: rowKeys,
                    onChange: setRowKeys,
                }}
                footer={() => {
                    return (
                        <Button ghost loading={validating} type="primary" onClick={handleSubmit}>
                            submit
                        </Button>
                    );
                }}
                virtual
                scroll={{
                    y: 600,
                }}
                columns={[
                    { key: 'index', title: '序号', render: (_, index) => index },
                    {
                        key: 'name',
                        title: 'Name',
                        dataIndex: 'name',
                        required: true,
                        rules: [
                            {
                                required: true,
                                message: 'Please Input Name!',
                            },
                            {
                                min: 6,
                                message: 'Input Name must be at least 6 characters',
                            },
                        ],
                        render: () => <Input placeholder="Name" />,
                    },
                    {
                        key: 'gender',
                        title: 'gender',
                        dataIndex: 'gender',
                        render: () => <EllipsisText maxWidth="95%" />,
                    },
                    {
                        key: 'address',
                        title: 'Address',
                        dataIndex: 'address',
                        render: () => <Input placeholder="Address" />,
                    },
                    {
                        key: 'company',
                        title: 'Company',
                        dataIndex: 'company',
                        render: () => <Input placeholder="Company" />,
                    },
                ]}
            />
        </Form>
    );
};
