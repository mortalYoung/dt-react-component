"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4503],{61439:function(u,d,n){n.r(d),n.d(d,{demos:function(){return I}});var s=n(90228),m=n.n(s),v=n(87999),i=n.n(v),c=n(75271),I={"contextmenu-demo-0":{component:c.memo(c.lazy(i()(m()().mark(function y(){var x,t,r,l,f,a;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return x=e.sent,t=x.default,e.next=6,Promise.all([n.e(5959),n.e(3517),n.e(1270),n.e(7826),n.e(2761),n.e(1622),n.e(478),n.e(7291),n.e(7128),n.e(7524),n.e(7228),n.e(734),n.e(3086),n.e(5275),n.e(6341)]).then(n.bind(n,16341));case 6:return r=e.sent,l=r.Tree,e.next=10,Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(332),n.e(7826),n.e(2038),n.e(2761),n.e(1622),n.e(478),n.e(2920),n.e(8434),n.e(7291),n.e(5681),n.e(301),n.e(7128),n.e(115),n.e(2870),n.e(9520),n.e(4183),n.e(27),n.e(8705),n.e(7524),n.e(7280),n.e(4569),n.e(7228),n.e(4940),n.e(4935),n.e(1698),n.e(6458),n.e(9732),n.e(7066)]).then(n.bind(n,50184));case 10:return f=e.sent,a=f.ContextMenu,e.abrupt("return",{default:function(){return t.createElement("div",{style:{position:"relative"}},t.createElement(l,{defaultExpandAll:!0},t.createElement(l.TreeNode,{key:"0-0",title:t.createElement(a,{data:[{key:"create",text:"\u65B0\u5EFA\u4EFB\u52A1",cb:function(){}},{key:"createFolder",text:"\u65B0\u5EFA\u6587\u4EF6\u5939",cb:function(){}},{key:"edit",text:"\u7F16\u8F91",cb:function(){}},{key:"remove",text:"\u5220\u9664",confirm:!0,confirmProps:{title:"\u786E\u5B9A\u5220\u9664\u8FD9\u4E2A\u8D44\u6E90\u5417",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){console.log("\u5220\u9664")}}}]},"folder"),className:"anchor-experiment-root"},t.createElement(l.TreeNode,{key:"0-0-0",title:t.createElement(a,{data:[{key:"edit",text:"\u7F16\u8F91",cb:function(){}},{key:"clone",text:"\u514B\u9686",cb:function(){}},{key:"remove",text:"\u5220\u9664",cb:function(){}}]},"file1"),className:"anchor-experiment-file"}),t.createElement(l.TreeNode,{key:"0-0-1",title:t.createElement(a,{data:[]},"file2"),className:"anchor-experiment-file"}))))}});case 13:case"end":return e.stop()}},y)})))),asset:{type:"BLOCK",id:"contextmenu-demo-0",refAtomIds:["contextMenu"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'antd';
import { ContextMenu } from 'dt-react-component';

export default () => {
    return (
        <div style={{ position: 'relative' }}>
            <Tree defaultExpandAll>
                <Tree.TreeNode
                    key="0-0"
                    title={
                        <ContextMenu
                            data={[
                                {
                                    key: 'create',
                                    text: '\u65B0\u5EFA\u4EFB\u52A1',
                                    cb: () => {},
                                },
                                {
                                    key: 'createFolder',
                                    text: '\u65B0\u5EFA\u6587\u4EF6\u5939',
                                    cb: () => {},
                                },
                                {
                                    key: 'edit',
                                    text: '\u7F16\u8F91',
                                    cb: () => {},
                                },
                                {
                                    key: 'remove',
                                    text: '\u5220\u9664',
                                    confirm: true,
                                    confirmProps: {
                                        title: '\u786E\u5B9A\u5220\u9664\u8FD9\u4E2A\u8D44\u6E90\u5417',
                                        okText: '\u786E\u5B9A',
                                        cancelText: '\u53D6\u6D88',
                                        onConfirm: () => {
                                            console.log('\u5220\u9664');
                                        },
                                    },
                                },
                            ]}
                        >
                            folder
                        </ContextMenu>
                    }
                    className="anchor-experiment-root"
                >
                    <Tree.TreeNode
                        key="0-0-0"
                        title={
                            <ContextMenu
                                data={[
                                    {
                                        key: 'edit',
                                        text: '\u7F16\u8F91',
                                        cb: () => {},
                                    },
                                    {
                                        key: 'clone',
                                        text: '\u514B\u9686',
                                        cb: () => {},
                                    },
                                    {
                                        key: 'remove',
                                        text: '\u5220\u9664',
                                        cb: () => {},
                                    },
                                ]}
                            >
                                file1
                            </ContextMenu>
                        }
                        className="anchor-experiment-file"
                    />
                    <Tree.TreeNode
                        key="0-0-1"
                        title={<ContextMenu data={[]}>file2</ContextMenu>}
                        className="anchor-experiment-file"
                    />
                </Tree.TreeNode>
            </Tree>
        </div>
    );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.jsx"},context:void 0,renderOpts:void 0}}},44770:function(u,d,n){n.r(d),n.d(d,{texts:function(){return s}});const s=[{value:"\u4EFB\u52A1\u680F\u53F3\u952E\u83DC\u5355\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"data",paraId:1,tocIndex:2},{value:"\u83DC\u5355\u9879\u914D\u7F6E",paraId:1,tocIndex:2},{value:"IMenuProps[]",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"wrapperClassName",paraId:1,tocIndex:2},{value:"\u5916\u5C42\u7EC4\u4EF6\u7684 class \u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u5176\u4F59\u5C5E\u6027\u53C2\u8003 ant-design \u7684 Dropdown \u7EC4\u4EF6",paraId:2}]}}]);
