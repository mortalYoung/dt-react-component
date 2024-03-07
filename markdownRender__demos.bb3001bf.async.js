"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(h,n,e){e.r(n);var l=e(86516),u=e.n(l),r=e(79685),m=e(72490),t=e(63342);n.default=function(){var d=(0,r.useState)(""),o=u()(d,2),s=o[0],_=o[1];return(0,r.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(a){return a.text()}).then(_).catch(function(a){_(a.message)})},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{value:s})})}},85198:function(h,n,e){e.r(n);var l=e(86516),u=e.n(l),r=e(79685),m=e(72490),t=e(63342),d=`
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
`;n.default=function(){var o=(0,r.useState)(""),s=u()(o,2),_=s[0],a=s[1];return(0,r.useEffect)(function(){a(d)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{dark:!0,value:_})})}},10804:function(h,n,e){e.r(n);var l=e(86516),u=e.n(l),r=e(79685),m=e(72490),t=e(63342),d=`
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
`;n.default=function(){var o=(0,r.useState)(""),s=u()(o,2),_=s[0],a=s[1];return(0,r.useEffect)(function(){a(d)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(m.Z,{value:_})})}},72490:function(h,n,e){e.d(n,{Z:function(){return j}});var l=e(79685),u=e(68591),r=e.n(u),m=e(37664),t=e.n(m),d=e(94306),o=e.n(d),s=e(37203),_=e.n(s),a=e(45206),v=o();v.registerLanguage("sql",_());function p(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(D,g,c,P){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(g,{language:i}).value+P:M+v.highlightAuto(g).value+P},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var O=e(63342);function j(E){var f=E.value,D=f===void 0?"":f,g=E.className,c=E.dark,P=(0,l.useMemo)(function(){var i=new(t()).Converter({extensions:[p],emoji:!0});return i.makeHtml(D)},[D]);return(0,O.jsx)("div",{className:r()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",g),dangerouslySetInnerHTML:{__html:P}})}}}]);
