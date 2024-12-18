"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(h,t,e){e.r(t);var l=e(86516),u=e.n(l),s=e(79685),m=e(72490),n=e(63342);t.default=function(){var d=(0,s.useState)(""),_=u()(d,2),r=_[0],o=_[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(a){return a.text()}).then(o).catch(function(a){o(a.message)})},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:r})})}},85198:function(h,t,e){e.r(t);var l=e(86516),u=e.n(l),s=e(79685),m=e(72490),n=e(63342),d=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;t.default=function(){var _=(0,s.useState)(""),r=u()(_,2),o=r[0],a=r[1];return(0,s.useEffect)(function(){a(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{dark:!0,value:o})})}},10804:function(h,t,e){e.r(t);var l=e(86516),u=e.n(l),s=e(79685),m=e(72490),n=e(63342),d=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;t.default=function(){var _=(0,s.useState)(""),r=u()(_,2),o=r[0],a=r[1];return(0,s.useEffect)(function(){a(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:o})})}},72490:function(h,t,e){e.d(t,{Z:function(){return j}});var l=e(79685),u=e(68591),s=e.n(u),m=e(37664),n=e.n(m),d=e(94306),_=e.n(d),r=e(37203),o=e.n(r),a=e(45206),v=_();v.registerLanguage("sql",o());function p(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(D,g,c,P){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(g,{language:i}).value+P:M+v.highlightAuto(g).value+P},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var O=e(63342);function j(E){var f=E.value,D=f===void 0?"":f,g=E.className,c=E.dark,P=(0,l.useMemo)(function(){var i=new(n()).Converter({extensions:[p],emoji:!0});return i.makeHtml(D)},[D]);return(0,O.jsx)("div",{className:s()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",g),dangerouslySetInnerHTML:{__html:P}})}}}]);
