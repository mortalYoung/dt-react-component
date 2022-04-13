import React from 'react'
import { DatePicker, Form } from 'antd';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import BasePage from '../components/basePage';
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
const otherDependencies = `import { GlobalLoading } from 'dt-react-component';`
const code = `<p className="strory-dt_easy_select_p">1、传递参数prefix和loadingTitle，同时自定义样式</p>
            <div className="strory-dt_global_loading_div">
                <GlobalLoading
                    prefix='DtStack'
                    loadingTitle='BatchWorks · 离线开发'
                    mainBackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                    titleColor="#eee"
                    circleBackground="#eee"
                />
            </div>`

stories.add('basePage', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>应用等待加载时使用，可自定义样式。(PS：宽度和高度均为100%，所以其大小基于其父级)</p>
        <h2>示例</h2>
        <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox={true}>
            <p className="strory-dt_easy_select_p">1、传递参数prefix和loadingTitle，同时自定义样式</p>
            <div className="strory-dt_global_loading_div">
                <BasePage
                    header={{
                        itemList: [
                            {
                                type: 'input',
                                itemOption: {
                                    name: 'Name',
                                    label: '任务名称'
                                },
                                childrenOption: {
                                    style: { width: 220 },
                                    allowClear: true,
                                    placeholder: '请输入任务名称'
                                }
                            }, {
                                type: 'select',
                                itemOption: {
                                    name: 'owner',
                                    label: '负责人'
                                },
                                childrenOption: {
                                    dataSource: [{ value: 1, label: '张三' }, { value: 2, label: '李四' }],
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
