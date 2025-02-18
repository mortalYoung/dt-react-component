"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8974],{17481:function(D,i,t){t.r(i),t.d(i,{demos:function(){return c}});var j=t(90228),h=t.n(j),$=t(48305),R=t.n($),z=t(87999),P=t.n(z),f=t(75271),c={"empty-demo-0":{component:f.memo(f.lazy(P()(h()().mark(function x(){var o,n,m,l,d,a,I,e,s,y;return h()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return o=v.sent,n=o.default,m=o.useState,v.next=7,Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(7128),t.e(115),t.e(2870),t.e(9520),t.e(4183),t.e(27),t.e(8705),t.e(7524),t.e(7280),t.e(4569),t.e(7228),t.e(4940),t.e(4935),t.e(1698),t.e(6458),t.e(9732),t.e(7066)]).then(t.bind(t,50184));case 7:return l=v.sent,d=l.Empty,v.next=11,Promise.all([t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(1622),t.e(478),t.e(7291),t.e(7128),t.e(7524),t.e(7228),t.e(734),t.e(3086),t.e(5275),t.e(6341)]).then(t.bind(t,16341));case 11:return a=v.sent,I=a.Radio,e=a.Space,s=[{label:"default",value:"default"},{label:"project",value:"project"},{label:"chart",value:"chart"},{label:"search",value:"search"},{label:"permission",value:"permission"},{label:"overview",value:"overview"}],y=function(p){switch(p){case"default":return n.createElement(d,{type:"default"});case"project":return n.createElement(d,{type:"project",description:"\u7A7A\u9879\u76EE"});case"chart":return n.createElement(d,{type:"chart",description:"\u56FE\u8868\u7A7A\u6570\u636E"});case"search":return n.createElement(d,{type:"search",description:"\u641C\u7D22\u65E0\u6570\u636E"});case"permission":return n.createElement(d,{type:"permission",description:"\u65E0\u6743\u9650"});case"overview":return n.createElement(d,{type:"overview",description:"description"});default:return null}},v.abrupt("return",{default:function(){var p=m("default"),g=R()(p,2),C=g[0],M=g[1];return n.createElement(n.Fragment,null,n.createElement(e,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(I.Group,{defaultValue:"default",optionType:"button",options:s,onChange:function(N){return M(N.target.value)}}),y(C)))}});case 17:case"end":return v.stop()}},x)})))),asset:{type:"BLOCK",id:"empty-demo-0",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Empty } from 'dt-react-component';
import { Radio, Space } from 'antd';

const options = [
    { label: 'default', value: 'default' },
    { label: 'project', value: 'project' },
    { label: 'chart', value: 'chart' },
    { label: 'search', value: 'search' },
    { label: 'permission', value: 'permission' },
    { label: 'overview', value: 'overview' },
];

const getEmpty = (type) => {
    switch (type) {
        case 'default':
            return <Empty type="default" />;
        case 'project':
            return <Empty type="project" description="\u7A7A\u9879\u76EE" />;
        case 'chart':
            return <Empty type="chart" description="\u56FE\u8868\u7A7A\u6570\u636E" />;
        case 'search':
            return <Empty type="search" description="\u641C\u7D22\u65E0\u6570\u636E" />;
        case 'permission':
            return <Empty type="permission" description="\u65E0\u6743\u9650" />;
        case 'overview':
            return <Empty type="overview" description="description" />;
        default:
            return null;
    }
};

export default () => {
    const [emptyType, setEmptyType] = useState('default');
    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
                <Radio.Group
                    defaultValue="default"
                    optionType="button"
                    options={options}
                    onChange={(e) => setEmptyType(e.target.value)}
                />
                {getEmpty(emptyType)}
            </Space>
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u4F7F\u7528\u5185\u7F6E\u72B6\u6001"},context:void 0,renderOpts:void 0},"empty-demo-1":{component:f.memo(f.lazy(P()(h()().mark(function x(){var o,n,m,l,d,a;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return o=e.sent,n=o.default,e.next=6,Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(7128),t.e(115),t.e(2870),t.e(9520),t.e(4183),t.e(27),t.e(8705),t.e(7524),t.e(7280),t.e(4569),t.e(7228),t.e(4940),t.e(4935),t.e(1698),t.e(6458),t.e(9732),t.e(7066)]).then(t.bind(t,50184));case 6:return m=e.sent,l=m.Empty,e.next=10,Promise.all([t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(1622),t.e(478),t.e(7291),t.e(7128),t.e(7524),t.e(7228),t.e(734),t.e(3086),t.e(5275),t.e(6341)]).then(t.bind(t,16341));case 10:return d=e.sent,a=d.Divider,e.abrupt("return",{default:function(){return n.createElement(l,{image:"https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg"})}});case 13:case"end":return e.stop()}},x)})))),asset:{type:"BLOCK",id:"empty-demo-1",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u7247"},context:void 0,renderOpts:void 0},"empty-demo-2":{component:f.memo(f.lazy(P()(h()().mark(function x(){var o,n,m,l,d,a;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return o=e.sent,n=o.default,e.next=6,Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(7128),t.e(115),t.e(2870),t.e(9520),t.e(4183),t.e(27),t.e(8705),t.e(7524),t.e(7280),t.e(4569),t.e(7228),t.e(4940),t.e(4935),t.e(1698),t.e(6458),t.e(9732),t.e(7066)]).then(t.bind(t,50184));case 6:return m=e.sent,l=m.Empty,e.next=10,Promise.all([t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(1622),t.e(478),t.e(7291),t.e(7128),t.e(7524),t.e(7228),t.e(734),t.e(3086),t.e(5275),t.e(6341)]).then(t.bind(t,16341));case 10:return d=e.sent,a=d.Divider,e.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(l,{description:"\u4F7F\u7528 size: default, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 80"}),n.createElement(l,{size:"large",description:"\u4F7F\u7528 size: large, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 100"}),n.createElement(l,{imageStyle:{height:160},description:"\u4F7F\u7528 imageStyle, \u8BBE\u7F6E\u5176\u4ED6\u9AD8\u5EA6\u4EE5\u53CA\u5C5E\u6027"}))}});case 13:case"end":return e.stop()}},x)})))),asset:{type:"BLOCK",id:"empty-demo-2",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <Empty description="\u4F7F\u7528 size: default, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 80" />
            <Empty size="large" description="\u4F7F\u7528 size: large, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 100" />
            <Empty
                imageStyle={{ height: 160 }}
                description="\u4F7F\u7528 imageStyle, \u8BBE\u7F6E\u5176\u4ED6\u9AD8\u5EA6\u4EE5\u53CA\u5C5E\u6027"
            />
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u63A7\u5236\u56FE\u7247\u5927\u5C0F"},context:void 0,renderOpts:void 0},"empty-demo-3":{component:f.memo(f.lazy(P()(h()().mark(function x(){var o,n,m,l,d,a,I,e;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return o=y.sent,n=o.default,m=o.useState,y.next=7,Promise.all([t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(1622),t.e(478),t.e(7291),t.e(7128),t.e(7524),t.e(7228),t.e(734),t.e(3086),t.e(5275),t.e(6341)]).then(t.bind(t,16341));case 7:return l=y.sent,d=l.Space,a=l.Switch,y.next=12,Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(7128),t.e(115),t.e(2870),t.e(9520),t.e(4183),t.e(27),t.e(8705),t.e(7524),t.e(7280),t.e(4569),t.e(7228),t.e(4940),t.e(4935),t.e(1698),t.e(6458),t.e(9732),t.e(7066)]).then(t.bind(t,50184));case 12:return I=y.sent,e=I.Empty,y.abrupt("return",{default:function(){var v=m(!1),S=R()(v,2),p=S[0],g=S[1];return n.createElement(d,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(a,{onChange:function(M){return g(M)},checkedChildren:"\u5C55\u793A\u5360\u4F4D\u7B26",unCheckedChildren:"\u5C55\u793A\u5185\u5BB9"}),n.createElement(e,{showEmpty:p},"More Data"))}});case 15:case"end":return y.stop()}},x)})))),asset:{type:"BLOCK",id:"empty-demo-3",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [empty, setEmpty] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setEmpty(checked)}
                checkedChildren="\u5C55\u793A\u5360\u4F4D\u7B26"
                unCheckedChildren="\u5C55\u793A\u5185\u5BB9"
            />
            <Empty showEmpty={empty}>More Data</Empty>
        </Space>
    );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.jsx",title:"\u5224\u65AD\u5C55\u793A\u5185\u5BB9"},context:void 0,renderOpts:void 0},"empty-demo-4":{component:f.memo(f.lazy(P()(h()().mark(function x(){var o,n,m,l,d,a,I,e,s;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return o=E.sent,n=o.default,m=o.useState,E.next=7,Promise.all([t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(1622),t.e(478),t.e(7291),t.e(7128),t.e(7524),t.e(7228),t.e(734),t.e(3086),t.e(5275),t.e(6341)]).then(t.bind(t,16341));case 7:return l=E.sent,d=l.Button,a=l.Space,I=l.Switch,E.next=13,Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(7128),t.e(115),t.e(2870),t.e(9520),t.e(4183),t.e(27),t.e(8705),t.e(7524),t.e(7280),t.e(4569),t.e(7228),t.e(4940),t.e(4935),t.e(1698),t.e(6458),t.e(9732),t.e(7066)]).then(t.bind(t,50184));case 13:return e=E.sent,s=e.Empty,E.abrupt("return",{default:function(){var S=m(!1),p=R()(S,2),g=p[0],C=p[1];return n.createElement(a,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(I,{onChange:function(O){return C(O)},checkedChildren:"\u5C55\u793A\u5360\u4F4D\u7B26",unCheckedChildren:"\u5C55\u793A\u5185\u5BB9"}),n.createElement(s,{showEmpty:g,extra:n.createElement(d,null,"\u6DFB\u52A0")},"More Data"))}});case 16:case"end":return E.stop()}},x)})))),asset:{type:"BLOCK",id:"empty-demo-4",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [empty, setEmpty] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setEmpty(checked)}
                checkedChildren="\u5C55\u793A\u5360\u4F4D\u7B26"
                unCheckedChildren="\u5C55\u793A\u5185\u5BB9"
            />
            <Empty showEmpty={empty} extra={<Button>\u6DFB\u52A0</Button>}>
                More Data
            </Empty>
        </Space>
    );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.jsx",title:"\u5C55\u793A antd Empty \u7EC4\u4EF6\u7684 children"},context:void 0,renderOpts:void 0},"empty-demo-5":{component:f.memo(f.lazy(P()(h()().mark(function x(){var o,n,m,l,d,a,I;return h()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return o=s.sent,n=o.default,m=o.useState,s.next=7,Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(7128),t.e(115),t.e(2870),t.e(9520),t.e(4183),t.e(27),t.e(8705),t.e(7524),t.e(7280),t.e(4569),t.e(7228),t.e(4940),t.e(4935),t.e(1698),t.e(6458),t.e(9732),t.e(7066)]).then(t.bind(t,50184));case 7:return l=s.sent,d=l.Empty,s.next=11,Promise.all([t.e(5959),t.e(3517),t.e(1270),t.e(7826),t.e(2761),t.e(1622),t.e(478),t.e(7291),t.e(7128),t.e(7524),t.e(7228),t.e(734),t.e(3086),t.e(5275),t.e(6341)]).then(t.bind(t,16341));case 11:return a=s.sent,I=a.Space,s.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",type:"search",active:!0}),n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",type:"search"}),n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",size:"large",type:"search",active:!0}),n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",size:"large",type:"search"}))}});case 14:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"empty-demo-5",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Empty } from 'dt-react-component';
import { Space } from 'antd';

export default () => {
    return (
        <>
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" type="search" active={true} />
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" type="search" />
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" size="large" type="search" active={true} />
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" size="large" type="search" />
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.22.5"}},entry:"index.jsx",title:"\u4F7F\u7528\u52A8\u6001\u7684\u641C\u7D22\u56FE\u7247"},context:void 0,renderOpts:void 0}}},99791:function(D,i,t){t.r(i),t.d(i,{texts:function(){return j}});const j=[{value:"\u5F53\u76EE\u524D\u6CA1\u6709\u6570\u636E\u65F6\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684\u7528\u6237\u63D0\u793A\u3002",paraId:0,tocIndex:1},{value:"\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u5F15\u5BFC\u521B\u5EFA\u6D41\u7A0B\u3002",paraId:0,tocIndex:1},{value:"\u5185\u7F6E 6 \u79CD\u7A7A\u72B6\u6001\u7C7B\u578B\u3002",paraId:0,tocIndex:1},{value:"\u7528\u4E8E\u4E09\u5143\u8868\u8FBE\u5F0F\u6765\u5224\u65AD\u5C55\u793A ",paraId:0,tocIndex:1},{value:"<Empty />",paraId:0,tocIndex:1},{value:" \u8FD8\u662F ",paraId:0,tocIndex:1},{value:"<OtherComponent />",paraId:0,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:9},{value:"\u8BF4\u660E",paraId:1,tocIndex:9},{value:"\u7C7B\u578B",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:9},{value:"type",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u5C55\u793A\u56FE\u7247\u7684\u7C7B\u578B",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"project",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"chart",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"search",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"permission",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"overview",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:"size",paraId:1,tocIndex:9},{value:"\u56FE\u7247\u5927\u5C0F",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"large",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:"showEmpty",paraId:1,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A Empty \u7EC4\u4EF6",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"true",paraId:1,tocIndex:9},{value:"children",paraId:1,tocIndex:9},{value:"\u5C55\u793A\u5185\u5BB9",paraId:1,tocIndex:9},{value:"React.ReactNode",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"extra",paraId:1,tocIndex:9},{value:"\u66FF\u6362 antd Empty \u7684 children",paraId:1,tocIndex:9},{value:" React.ReactNode",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"active",paraId:1,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u52A8\u6001\u7684\u56FE\u7247",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"true",paraId:1,tocIndex:9},{value:"\u5176\u4F59\u5C5E\u6027",paraId:2},{value:"\u7EE7\u627F antd4.x \u7684 Empty",paraId:2}]}}]);
