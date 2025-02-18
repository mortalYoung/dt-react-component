"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[570],{51024:function(a,t,n){n.r(t),n.d(t,{demos:function(){return o}});var d=n(75271),o={"src-use-typing-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(332),n.e(7826),n.e(2038),n.e(2761),n.e(1622),n.e(478),n.e(2920),n.e(8434),n.e(7291),n.e(5681),n.e(301),n.e(115),n.e(2870),n.e(4183),n.e(27),n.e(7524),n.e(7280),n.e(4940),n.e(7955),n.e(4240),n.e(9732),n.e(2433)]).then(n.bind(n,13224))})),asset:{type:"BLOCK",id:"src-use-typing-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(70484).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},80924:function(a,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u9700\u8981\u6253\u5B57\u673A\u8F93\u5165",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"onTyping",paraId:1,tocIndex:5},{value:"\u6253\u5B57\u8F93\u5165\u4E2D\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:5},{value:"(post:string) => void",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"isTyping",paraId:2,tocIndex:6},{value:"\u662F\u5426\u5728\u6253\u5B57\u4E2D",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"start",paraId:2,tocIndex:6},{value:"\u5F00\u542F\u6253\u5B57",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"push",paraId:2,tocIndex:6},{value:"\u8F93\u5165\u6587\u6848",paraId:2,tocIndex:6},{value:"(post:string) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"close",paraId:2,tocIndex:6},{value:"\u5173\u95ED\u6253\u5B57",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"stop",paraId:2,tocIndex:6},{value:"\u7ACB\u5373\u5173\u95ED\u6253\u5B57",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6}]},70484:function(a,t){t.Z=`import React, { useState } from 'react';
import { Button } from 'antd';
import { useTyping } from 'dt-react-component';

export default () => {
    const [text, setText] = useState('');
    const typing = useTyping({
        onTyping(post) {
            setText(post);
        },
    });

    const handleStart = () => {
        typing.start();
        typing.push('\u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57');
        window.setTimeout(() => {
            typing.push('\u8FD9\u662F\u4E00\u6BB5\u5EF6\u8FDF\u4E00\u79D2\u6D4B\u8BD5\u6587\u5B57');
            typing.close();
        }, 1000);
    };

    return (
        <div>
            <Button type="primary" onClick={handleStart}>
                \u5F00\u59CB\u8F93\u5165
            </Button>
            \u6253\u5B57\u4E2D\uFF1A{typing.isTyping ? '\u662F' : '\u5426'}
            <p>\u6587\u6848\uFF1A{text}</p>
        </div>
    );
};
`}}]);
