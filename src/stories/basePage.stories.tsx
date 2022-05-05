import React from 'react'
import { DatePicker, Form } from 'antd';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import BasePage from '../components/basePage';
import Circle, { CicleType } from '../components/circle';
import ExampleContainer from './components/exampleCode';

import './style/easySelect.scss';

const stories = storiesOf('BasePage 模板页面', module);

stories.addDecorator(withKnobs);

const propDefinitions = [{
    property: 'prefix',
    propType: 'string',
    required: false,
    description: '应用前缀',
    defaultValue: '""'
}]
const otherDependencies = `import { BasePage } from 'dt-react-component';`
const code1 = `<p className="strory-dt_easy_select_p">1、基础使用（带有搜索功能的表格页面）</p>
<div className="strory-dt_global_loading_div">
    <BasePage
        header={{
            itemList: [
                {
                    type: 'input',
                    itemOption: {
                        name: 'table',
                        label: '表'
                    },
                    childrenOption: {
                        style: { width: 220 },
                        allowClear: true,
                        placeholder: '请输入任务名称'
                    }
                }, {
                    type: 'select',
                    itemOption: {
                        name: 'project',
                        label: '项目'
                    },
                    childrenOption: {
                        dataSource: [{ value: 1, label: '测试项目1' }, { value: 2, label: '测试项目2' }],
                        style: { width: 220 },
                        allowClear: true,
                        placeholder: '请选择负责人'
                    }
                }
            ]
        }}
        content={{
            dataSource: [
                {
                    table: 'test1',
                    project: '测试项目1',
                    status: 'finished',
                    id: 1
                },
                {
                    table: 'test2',
                    project: '测试项目2',
                    status: 'fail',
                    id: 2
                }
            ],
            columns: [
                {
                    title: '表',
                    dataIndex: 'table',
                    key: 'table'
                },
                {
                    title: '项目',
                    dataIndex: 'project',
                    key: 'project'
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                    render: (val: CicleType) => {
                        let text = '';
                        switch (val) {
                            case 'finished':
                                text = '成功'
                                break;
                            case 'fail':
                                text = '失败'
                                break;
                            default:
                                break;
                        }
                        return (
                            <div>
                                <Circle type={val}></Circle>&nbsp;
                                <span style={{ color: '#666' }}>{text}</span>
                            </div>
                        )
                    }
                }
            ]
        }}
    />
</div>`
const code2 = ` <p className="strory-dt_easy_select_p">2、带有操作功能、筛选功能的表格页面</p>
<div className="strory-dt_global_loading_div">
    <BasePage
        header={{
            itemList: [
                {
                    type: 'input',
                    itemOption: {
                        name: 'table',
                        label: '表'
                    },
                    childrenOption: {
                        style: { width: 220 },
                        allowClear: true,
                        placeholder: '请输入任务名称'
                    }
                }, {
                    type: 'select',
                    itemOption: {
                        name: 'project',
                        label: '项目'
                    },
                    childrenOption: {
                        dataSource: [{ value: 1, label: '测试项目1' }, { value: 2, label: '测试项目2' }],
                        style: { width: 220 },
                        allowClear: true,
                        placeholder: '请选择负责人'
                    }
                }, {
                    type: 'custom',
                    customRender: (
                        <Form.Item name="startTime" label="开始时间" >
                            <DatePicker style={{ width: 220 }} />
                        </Form.Item>
                    )
                }
            ]
        }}
        content={{
            dataSource: [
                {
                    table: 'test1',
                    project: '测试项目1',
                    status: 'finished',
                    id: 1
                },
                {
                    table: 'test2',
                    project: '测试项目2',
                    status: 'fail',
                    id: 2
                }
            ],
            columns: [
                {
                    title: '表',
                    dataIndex: 'table',
                    key: 'table'
                },
                {
                    title: '项目',
                    dataIndex: 'project',
                    key: 'project'
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                    render: (val: CicleType) => {
                        let text = '';
                        switch (val) {
                            case 'finished':
                                text = '成功'
                                break;
                            case 'fail':
                                text = '失败'
                                break;
                            default:
                                break;
                        }
                        return (
                            <div>
                                <Circle type={val}></Circle>&nbsp;
                                <span style={{ color: '#666' }}>{text}</span>
                            </div>
                        )
                    }
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: () => <a>Delete</a>
                }
            ]
        }}
    />
</div>`
stories.add('basePage', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>当页面只有顶部筛选部分、内容区域为Table形式呈现时，选择该组件作为模板进行页面渲染</p>
        <h2>示例</h2>
        <ExampleContainer otherDependencies={otherDependencies} code={code1} hasCodeSandBox={true}>
            <p className="strory-dt_easy_select_p">1、基础使用（带有搜索功能的表格页面）</p>
            <div className="strory-dt_base_page_div">
                <BasePage
                    header={{
                        itemList: [
                            {
                                type: 'input',
                                itemOption: {
                                    name: 'table',
                                    label: '表'
                                },
                                childrenOption: {
                                    style: { width: 220 },
                                    allowClear: true,
                                    placeholder: '请输入任务名称'
                                }
                            }, {
                                type: 'select',
                                itemOption: {
                                    name: 'project',
                                    label: '项目'
                                },
                                childrenOption: {
                                    dataSource: [{ value: 1, label: '测试项目1' }, { value: 2, label: '测试项目2' }],
                                    style: { width: 220 },
                                    allowClear: true,
                                    placeholder: '请选择负责人'
                                }
                            }
                        ]
                    }}
                    content={{
                        dataSource: [
                            {
                                table: 'test1',
                                project: '测试项目1',
                                status: 'finished',
                                id: 1
                            },
                            {
                                table: 'test2',
                                project: '测试项目2',
                                status: 'fail',
                                id: 2
                            }
                        ],
                        columns: [
                            {
                                title: '表',
                                dataIndex: 'table',
                                key: 'table'
                            },
                            {
                                title: '项目',
                                dataIndex: 'project',
                                key: 'project'
                            },
                            {
                                title: '状态',
                                dataIndex: 'status',
                                key: 'status',
                                render: (val: CicleType) => {
                                    let text = '';
                                    switch (val) {
                                        case 'finished':
                                            text = '成功'
                                            break;
                                        case 'fail':
                                            text = '失败'
                                            break;
                                        default:
                                            break;
                                    }
                                    return (
                                        <div>
                                            <Circle type={val}></Circle>&nbsp;
                                            <span style={{ color: '#666' }}>{text}</span>
                                        </div>
                                    )
                                }
                            }
                        ]
                    }}
                />
            </div>
        </ExampleContainer>
        <ExampleContainer otherDependencies={otherDependencies} code={code2} hasCodeSandBox={true}>
            <p className="strory-dt_easy_select_p">2、带有操作功能、筛选功能的表格页面</p>
            <div>
                <BasePage
                    header={{
                        itemList: [
                            {
                                type: 'input',
                                itemOption: {
                                    name: 'table',
                                    label: '表'
                                },
                                childrenOption: {
                                    style: { width: 220 },
                                    allowClear: true,
                                    placeholder: '请输入任务名称'
                                }
                            }, {
                                type: 'select',
                                itemOption: {
                                    name: 'project',
                                    label: '项目'
                                },
                                childrenOption: {
                                    dataSource: [{ value: 1, label: '测试项目1' }, { value: 2, label: '测试项目2' }],
                                    style: { width: 220 },
                                    allowClear: true,
                                    placeholder: '请选择负责人'
                                }
                            }, {
                                type: 'custom',
                                customRender: (
                                    <Form.Item name="startTime" label="开始时间" >
                                        <DatePicker style={{ width: 220 }} />
                                    </Form.Item>
                                )
                            }
                        ]
                    }}
                    content={{
                        dataSource: [
                            {
                                table: 'test1',
                                project: '测试项目1',
                                status: 'finished',
                                id: 1
                            },
                            {
                                table: 'test2',
                                project: '测试项目2',
                                status: 'fail',
                                id: 2
                            }
                        ],
                        columns: [
                            {
                                title: '表',
                                dataIndex: 'table',
                                key: 'table'
                            },
                            {
                                title: '项目',
                                dataIndex: 'project',
                                key: 'project'
                            },
                            {
                                title: '状态',
                                dataIndex: 'status',
                                key: 'status',
                                render: (val: CicleType) => {
                                    let text = '';
                                    switch (val) {
                                        case 'finished':
                                            text = '成功'
                                            break;
                                        case 'fail':
                                            text = '失败'
                                            break;
                                        default:
                                            break;
                                    }
                                    return (
                                        <div>
                                            <Circle type={val}></Circle>&nbsp;
                                            <span style={{ color: '#666' }}>{text}</span>
                                        </div>
                                    )
                                }
                            },
                            {
                                title: '操作',
                                dataIndex: 'operation',
                                key: 'operation',
                                render: () => <a>Delete</a>
                            }
                        ]
                    }}
                />
            </div>
        </ExampleContainer>
    </div>
), {
    info: {
        text: `
            代码示例：
            ~~~js
            // 1、传递参数prefix和loadingTitle，同时自定义样式
            <GlobalLoading
                prefix='DtStack'
                loadingTitle='BatchWorks · 离线开发'
                mainBackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                titleColor="#eee"
                circleBackground="#eee"
            >
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
});
