"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6683],{60200:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(75271),d={"spreadsheet-demo-basic":{component:n.memo(n.lazy(function(){return Promise.all([e.e(9520),e.e(4935),e.e(5322)]).then(e.bind(e,79350))})),asset:{type:"BLOCK",id:"spreadsheet-demo-basic",refAtomIds:["spreadSheet"],dependencies:{"index.tsx":{type:"FILE",value:e(14374).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},23072:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"\u8868\u683C\u5185\u5BB9\u53F3\u952E\u53EF\u590D\u5236\uFF0C\u8868\u683C\u5927\u5C0F\u53EF\u62D6\u52A8",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"data",paraId:1,tocIndex:5},{value:"\u8868\u683C\u6570\u636E",paraId:1,tocIndex:5},{value:"Array(\u4E8C\u7EF4\u6570\u7EC4)",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"columns",paraId:1,tocIndex:5},{value:"\u5217\u540D",paraId:1,tocIndex:5},{value:"Array",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"className",paraId:1,tocIndex:5},{value:"\u5916\u5C42\u7EC4\u4EF6\u7684 class \u540D",paraId:1,tocIndex:5},{value:"string",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"options.showCopyWithHeader",paraId:1,tocIndex:5},{value:"\u53F3\u952E\u83DC\u5355\u4E2D\u662F\u5426\u5C55\u793A\u201C\u590D\u5236\u503C\u4EE5\u53CA\u5217\u540D\u201D\u6309\u94AE",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"options.trimWhitespace",paraId:1,tocIndex:5},{value:"\u662F\u5426\u53BB\u9664\u5185\u5BB9\u91CC\u7684\u7A7A\u683C",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"true",paraId:1,tocIndex:5}]},14374:function(t,a){a.Z=`import React from 'react';
import { SpreadSheet } from 'dt-react-component';

export default () => {
    return (
        <SpreadSheet
            columns={['name', 'gender', 'age', 'address']}
            data={[
                ['zhangsan', 'male', '20', 'xihu'],
                ['lisi', 'male', '18', 'yuhang'],
                ['   \u524D\u9762\u6709\u7A7A\u683C', '\u540E\u9762\u6709\u7A7A\u683C   ', '\u4E2D\u95F4\u6709  \u7A7A \u683C', 'yuhang'],
            ]}
            options={{ trimWhitespace: false }}
        />
    );
};
`}}]);
