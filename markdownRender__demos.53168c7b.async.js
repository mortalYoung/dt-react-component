"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(D,n,e){e.r(n);var _=e(86516),a=e.n(_),r=e(79685),l=e(72490),t=e(63342);n.default=function(){var u=(0,r.useState)(""),o=a()(u,2),s=o[0],m=o[1];return(0,r.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(d){return d.text()}).then(m)},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(l.Z,{value:s})})}},85198:function(D,n,e){e.r(n);var _=e(86516),a=e.n(_),r=e(79685),l=e(72490),t=e(63342),u=`
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
`;n.default=function(){var o=(0,r.useState)(""),s=a()(o,2),m=s[0],d=s[1];return(0,r.useEffect)(function(){d(u)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(l.Z,{dark:!0,value:m})})}},10804:function(D,n,e){e.r(n);var _=e(86516),a=e.n(_),r=e(79685),l=e(72490),t=e(63342),u=`
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
`;n.default=function(){var o=(0,r.useState)(""),s=a()(o,2),m=s[0],d=s[1];return(0,r.useEffect)(function(){d(u)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(l.Z,{value:m})})}},72490:function(D,n,e){e.d(n,{Z:function(){return j}});var _=e(79685),a=e(68591),r=e.n(a),l=e(37664),t=e.n(l),u=e(94306),o=e.n(u),s=e(37203),m=e.n(s),d=e(45206),v=o();v.registerLanguage("sql",m());function p(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(h,g,c,P){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(g,{language:i}).value+P:M+v.highlightAuto(g).value+P},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var O=e(63342);function j(E){var f=E.value,h=f===void 0?"":f,g=E.className,c=E.dark,P=(0,_.useMemo)(function(){var i=new(t()).Converter({extensions:[p],emoji:!0});return i.makeHtml(h)},[h]);return(0,O.jsx)("div",{className:r()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",g),dangerouslySetInnerHTML:{__html:P}})}}}]);
