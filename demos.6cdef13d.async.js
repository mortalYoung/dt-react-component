"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2433,1926],{54429:function(W,m,e){e.r(m);var f=e(40591),y=e.n(f),D=e(19888),M=e(90650),L=e.n(M),c=e(35031),u=e(63932),O=e.n(u),v=e(68290),g=e(50959),C=e(91820),i=e(97076),l=e(11527),E=function(t){return new Promise(function(n){setTimeout(function(){n((0,i.Z)(t))},150)})};m.default=function(){var d=(0,C.useList)(E,{current:1,pageSize:20}),t=d.error,n=d.params,o=d.loading,_=d.data,P=d.mutate;return t?(0,l.jsx)(v.ZP,{status:500}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.default.Search,{value:n.search,onChange:function(r){return P({search:r.target.value},{revalidate:!1})},onSearch:function(){return P()},style:{marginBottom:12}}),(0,l.jsx)(D.Z,{loading:o,columns:[{key:"name",title:"name",dataIndex:"name"},{key:"address",title:"address",dataIndex:"address"},{key:"company",title:"company",dataIndex:"company"},{key:"gender",title:"gender",dataIndex:"gender"},{key:"weight",title:"weight",dataIndex:"weight"}],onChange:function(r){return P({current:r.current,pageSize:r.pageSize})},size:"small",scroll:{y:200},dataSource:_,pagination:{current:n.current,pageSize:n.pageSize,total:n.total},rowKey:"uuid",bordered:!0})]})}},54093:function(W,m,e){e.r(m);var f=e(61423),y=e.n(f),D=e(94605),M=e(40591),L=e.n(M),c=e(19888),u=e(58383),O=e.n(u),v=e(43249),g=e(63932),C=e.n(g),i=e(68290),l=e(54306),E=e.n(l),d=e(50959),t=e(87955),n=e(91820),o=e(97076),_=e(11527),P=function(r){return new Promise(function(s){setTimeout(function(){s((0,o.Z)(r))},150)})};m.default=function(){var a=(0,n.useList)(P,{current:1,pageSize:20}),r=a.error,s=a.params,A=a.loading,K=a.data,x=a.mutate,T=(0,n.useList)(function(){return new Promise(function(I){setTimeout(function(){I({data:new Array(5).fill(1).map(function(){return{name:t.We.internet.userName()}}),total:5})},100)})},{},{immediate:!1}),S=T.loading,j=T.data,z=T.mutate,Z=T.clear,N=(0,d.useState)(void 0),B=E()(N,2),R=B[0],p=B[1],V=(0,d.useState)(!1),U=E()(V,2),F=U[0],b=U[1];return(0,d.useEffect)(function(){R&&z()},[R]),r?(0,_.jsx)(i.ZP,{status:500}):(0,_.jsxs)("div",{style:{position:"relative",overflow:"hidden"},children:[(0,_.jsx)(c.Z,{loading:A,columns:[{key:"name",title:"name",dataIndex:"name",render:function(h){return(0,_.jsx)(v.default,{type:"link",onClick:function(){b(!0),p(h)},children:h})}},{key:"address",title:"address",dataIndex:"address"},{key:"company",title:"company",dataIndex:"company"},{key:"gender",title:"gender",dataIndex:"gender"},{key:"weight",title:"weight",dataIndex:"weight"}],onChange:function(h){return x({current:h.current,pageSize:h.pageSize})},size:"small",scroll:{y:200},dataSource:K,pagination:{current:s.current,pageSize:s.pageSize,total:s.total},rowKey:"uuid",bordered:!0}),(0,_.jsx)(D.Z,{visible:F,title:"detail",mask:!1,onClose:function(){b(!1)},afterVisibleChange:function(h){h||(p(void 0),Z())},getContainer:!1,children:(0,_.jsx)(c.Z,{bordered:!0,size:"small",loading:S,columns:[{key:"name",title:"name",dataIndex:"name"}],dataSource:j,pagination:!1})})]})}},33475:function(W,m,e){e.r(m);var f=e(40591),y=e.n(f),D=e(19888),M=e(90650),L=e.n(M),c=e(35031),u=e(63932),O=e.n(u),v=e(68290),g=e(50959),C=e(91820),i=e(97076),l=e(11527),E=function(n){return n},d=function(n){return new Promise(function(o){var _=E(n);setTimeout(function(){o((0,i.Z)(_))},150)})};m.default=function(){var t=(0,C.useList)(d,{current:1,pageSize:20}),n=t.error,o=t.params,_=t.loading,P=t.data,a=t.mutate;return n?(0,l.jsx)(v.ZP,{status:500}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.default.Search,{value:o.search,onChange:function(s){return a({search:s.target.value},{revalidate:!1})},onSearch:function(){return a()},style:{marginBottom:12}}),(0,l.jsx)(D.Z,{loading:_,columns:[{key:"name",title:"name",dataIndex:"name"},{key:"address",title:"address",dataIndex:"address"},{key:"company",title:"company",dataIndex:"company"},{key:"gender",title:"gender",filters:[{text:"male",value:"male"},{text:"female",value:"female"}],dataIndex:"gender"},{key:"weight",title:"weight",dataIndex:"weight",sorter:!0}],onChange:function(s,A,K){a({current:s.current,pageSize:s.pageSize,filters:A,sorter:K})},size:"small",scroll:{y:200},dataSource:P,pagination:{current:o.current,pageSize:o.pageSize,total:o.total},rowKey:"uuid",bordered:!0})]})}},97076:function(W,m,e){e.d(m,{Z:function(){return v}});var f=e(25359),y=e.n(f),D=e(93525),M=e.n(D),L=e(49811),c=e.n(L),u=e(87955),O=[];function v(C){return g.apply(this,arguments)}function g(){return g=c()(y()().mark(function C(i){var l,E,d,t,n,o,_;return y()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=i.current,E=i.pageSize,d=i.search,t=i.sorter,n=i.filters,O.length||O.push.apply(O,M()(Array.from({length:200}).map(function(){return{uuid:u.We.datatype.uuid(),name:u.We.internet.userName(),address:u.We.address.cityName(),company:u.We.company.bs(),gender:u.We.name.sex(),weight:u.We.datatype.number({max:200,min:80})}}))),o=(l-1)*E,_=O.filter(function(r){return d?r.name.includes(d):!0}),n&&(_=_.filter(function(r){return n.includes(r.gender)})),t&&_.sort(function(r,s){return t[0].asc?r[t[0].field]-s[t[0].field]:s[t[0].field]-r[t[0].field]}),a.abrupt("return",{data:_.slice(o,o+E),total:_.length});case 7:case"end":return a.stop()}},C)})),g.apply(this,arguments)}}}]);
