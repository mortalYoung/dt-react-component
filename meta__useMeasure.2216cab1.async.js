"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5748],{51538:function(e,d,t){t.r(d),t.d(d,{demos:function(){return o}});var n=t(75271),o={"src-use-measure-demo-basic":{component:n.memo(n.lazy(function(){return Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(4097),t.e(332),t.e(7826),t.e(2038),t.e(2761),t.e(1622),t.e(478),t.e(2920),t.e(8434),t.e(7291),t.e(5681),t.e(301),t.e(115),t.e(2870),t.e(4183),t.e(27),t.e(7524),t.e(7280),t.e(4940),t.e(7955),t.e(4240),t.e(9732),t.e(2433)]).then(t.bind(t,90282))})),asset:{type:"BLOCK",id:"src-use-measure-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(98544).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},76643:function(e,d,t){t.r(d),t.d(d,{texts:function(){return n}});const n=[{value:"\u9700\u8981\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"ref",paraId:1,tocIndex:5},{value:"DOM \u5B9E\u4F8B",paraId:1,tocIndex:5},{value:"HTMLDivElement",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"rect",paraId:1,tocIndex:5},{value:"DOMRect",paraId:1,tocIndex:5},{value:"UseMeasureRect",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"getElement",paraId:1,tocIndex:5},{value:"\u83B7\u53D6 DOM \u5B9E\u4F8B",paraId:1,tocIndex:5},{value:"() => HTMLDivElement",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}]},98544:function(e,d){d.Z=`import React from 'react';
import { useMeasure } from 'dt-react-component';

export default () => {
    const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();
    return (
        <div ref={ref}>
            <div>x: {x}</div>
            <div>y: {y}</div>
            <div>width: {width}</div>
            <div>height: {height}</div>
            <div>top: {top}</div>
            <div>right: {right}</div>
            <div>bottom: {bottom}</div>
            <div>left: {left}</div>
        </div>
    );
};
`}}]);
