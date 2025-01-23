"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{84442:function(D,t,e){e.r(t);var r=e(54306),u=e.n(r),s=e(50959),d=e(60448),n=e(11527);t.default=function(){var m=(0,s.useState)(""),_=u()(m,2),a=_[0],l=_[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(o){return o.text()}).then(l).catch(function(o){l(o.message)})},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(d.Z,{value:a})})}},26777:function(D,t,e){e.r(t);var r=e(54306),u=e.n(r),s=e(50959),d=e(60448),n=e(11527),m=`
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
`;t.default=function(){var _=(0,s.useState)(""),a=u()(_,2),l=a[0],o=a[1];return(0,s.useEffect)(function(){o(m)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(d.Z,{dark:!0,value:l})})}},52547:function(D,t,e){e.r(t);var r=e(54306),u=e.n(r),s=e(50959),d=e(60448),n=e(11527),m=`
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
`;t.default=function(){var _=(0,s.useState)(""),a=u()(_,2),l=a[0],o=a[1];return(0,s.useEffect)(function(){o(m)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(d.Z,{value:l})})}},60448:function(D,t,e){e.d(t,{Z:function(){return B}});var r=e(50959),u=e(84875),s=e.n(u),d=e(26132),n=e.n(d),m=e(88467),_=e.n(m),a=e(74883),l=e.n(a),o=e(55394),i=_();i.registerLanguage("sql",l());function O(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(M,g,v,P){var E=(v.match(/class=\"([^ \"]+)/)||[])[1],h=v.slice(0,18)+"hljs "+v.slice(18);return E&&i.getLanguage(E)?h+i.highlight(g,{language:E}).value+P:h+i.highlightAuto(g).value+P},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var j=e(11527);function B(c){var f=c.value,M=f===void 0?"":f,g=c.className,v=c.style,P=c.dark,E=(0,r.useMemo)(function(){var h=new(n()).Converter({extensions:[O],emoji:!0});return h.makeHtml(M)},[M]);return(0,j.jsx)("div",{className:s()("dtc-markdown-render-body",P?"dtc-vs-dark":"dtc-vs",g),style:v,dangerouslySetInnerHTML:{__html:E}})}}}]);
