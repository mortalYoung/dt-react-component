"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[9309],{93928:function(d,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={"fullscreen-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(2761),n.e(7128),n.e(9957),n.e(5048)]).then(n.bind(n,51080))})),asset:{type:"BLOCK",id:"fullscreen-demo-basic",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(64530).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},context:void 0,renderOpts:void 0},"fullscreen-demo-theme":{component:t.memo(t.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(2761),n.e(7128),n.e(9957),n.e(5048)]).then(n.bind(n,72662))})),asset:{type:"BLOCK",id:"fullscreen-demo-theme",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(37335).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u4E3B\u9898\u5207\u6362"},context:void 0,renderOpts:void 0},"fullscreen-demo-local":{component:t.memo(t.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(2761),n.e(7128),n.e(9957),n.e(5048)]).then(n.bind(n,73967))})),asset:{type:"BLOCK",id:"fullscreen-demo-local",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(31460).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u5C40\u90E8\u5168\u5C4F"},context:void 0,renderOpts:void 0},"fullscreen-demo-custom":{component:t.memo(t.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(2761),n.e(7128),n.e(9957),n.e(5048)]).then(n.bind(n,90206))})),asset:{type:"BLOCK",id:"fullscreen-demo-custom",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(21808).Z},react:{type:"NPM",value:"18.3.1"},"@ant-design/icons":{type:"NPM",value:"4.8.3"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u5168\u5C4F\u56FE\u6807"},context:void 0,renderOpts:void 0}}},91300:function(d,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u5168\u5C4F\u5207\u6362\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"target",paraId:1,tocIndex:7},{value:"\u5168\u5C40\u64CD\u4F5C\u4F5C\u7528\u4E8E\u6307\u5B9A\u76EE\u6807\u5BF9\u8C61",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"themeDark",paraId:1,tocIndex:7},{value:"\u662F\u5426\u4F7F\u7528\u6697\u9ED1\u4E3B\u9898\u6A21\u5F0F",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"false",paraId:1,tocIndex:7},{value:"iconStyle",paraId:1,tocIndex:7},{value:"\u56FE\u6807\u5143\u7D20\u6837\u5F0F",paraId:1,tocIndex:7},{value:"CSSProperties",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"fullIcon",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u5168\u5C4F\u56FE\u6807",paraId:1,tocIndex:7},{value:"React.ReactNode",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"exitFullIcon",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u9000\u51FA\u5168\u5C4F\u56FE\u6807",paraId:1,tocIndex:7},{value:"React.ReactNode",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7}]},64530:function(d,e){e.Z=`import React from 'react';
import { Fullscreen } from 'dt-react-component';

export default () => {
    return <Fullscreen />;
};
`},21808:function(d,e){e.Z=`import React from 'react';
import { ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Fullscreen } from 'dt-react-component';

export default () => {
    const iconStyle = {
        width: 12,
        height: 12,
        marginRight: 5,
    };

    return (
        <Fullscreen
            iconStyle={iconStyle}
            fullIcon={
                <div style={{ cursor: 'pointer' }}>
                    <ArrowsAltOutlined />
                    \u5168\u5C4F
                </div>
            }
            exitFullIcon={
                <div style={{ cursor: 'pointer' }}>
                    <ShrinkOutlined />
                    \u9000\u51FA\u5168\u5C4F
                </div>
            }
        />
    );
};
`},31460:function(d,e){e.Z=`import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Fullscreen } from 'dt-react-component';

export default () => {
    const [targetKey, setTargetKey] = useState('');

    useEffect(() => {
        setTargetKey('localContainer');
    }, []);

    return (
        <Card id={targetKey} style={{ background: '#fafafa' }}>
            <Fullscreen target={targetKey} />
            <div style={{ margin: '10px 0', textAlign: 'center' }}>Fullscreen in this</div>
        </Card>
    );
};
`},37335:function(d,e){e.Z=`import React, { useState } from 'react';
import { Switch } from 'antd';
import { Fullscreen } from 'dt-react-component';

export default () => {
    const [themeDark, setThemeDark] = useState(false);
    const changeTheme = (value: boolean) => {
        setThemeDark(value);
    };
    return (
        <>
            <Switch
                checked={themeDark}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <br />
            <br />
            <Fullscreen themeDark={themeDark} />
        </>
    );
};
`}}]);
