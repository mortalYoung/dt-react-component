"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294,6635],{14364:function(L,d,e){e.r(d);var C=e(88289),K=e.n(C),P=e(4125),I=e(90554),D=e.n(I),i=e(28870),E=e(71089),U=e.n(E),s=e(75020),c=e(83345),v=e.n(c),r=e(50425),u=e(86516),y=e.n(u),o=e(79685),m=e(92767),A=e(7006),t=e(63342);d.default=function(){var W=m.Form.useForm(),T=y()(W,1),M=T[0],f=(0,o.useState)(!1),n=y()(f,2),_=n[0],a=n[1],g=function(){a(!0),(0,A.Z)().then(function(p){M.setFieldValue("data",p)}).finally(function(){a(!1)})},O=function(){M.validateFields().then(function(p){console.log(p)})};return(0,o.useEffect)(function(){g()},[]),(0,t.jsxs)(P.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,t.jsx)(m.Form,{form:M,layout:"vertical",children:(0,t.jsx)(m.Form.Table,{name:"data",loading:_,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(r.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(m.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(r.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(r.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(p){var R=p.name;return(0,t.jsx)(i.default,{type:"link",onClick:function(){return s.default.info(JSON.stringify(M.getFieldValue(["data",R])))},children:"Configuration"})}}]})}),(0,t.jsx)(i.default,{type:"primary",onClick:O,children:"Submit"})]})}},67001:function(L,d,e){e.r(d);var C=e(83345),K=e.n(C),P=e(50425),I=e(86516),D=e.n(I),i=e(79685),E=e(92767),U=e(7006),s=e(63342);d.default=function(){var c=E.Form.useForm(),v=D()(c,1),r=v[0],u=(0,i.useState)([]),y=D()(u,2),o=y[0],m=y[1],A=(0,i.useState)(!1),t=D()(A,2),W=t[0],T=t[1],M=function(){T(!0),(0,U.Z)().then(function(_){r.setFieldValue("data",_)}).finally(function(){T(!1)})};(0,i.useEffect)(function(){M()},[]);var f=(0,i.useMemo)(function(){return o.map(function(n){var _;return(_=r.getFieldsValue().data)===null||_===void 0?void 0:_.findIndex(function(a){return a.uuid===n})})},[o]);return(0,s.jsx)(E.Form,{form:r,layout:"vertical",style:{height:400},children:(0,s.jsx)(E.Form.Table,{name:"data",loading:W,scroll:{y:280},rowSelection:{selectedRowKeys:f,onChange:function(_){m(r.getFieldsValue().data.filter(function(a,g){return _.includes(g)}).map(function(a){return a.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(_){var a=_.name;return(0,s.jsx)(P.default,{disabled:o.includes(r.getFieldValue(["data",a,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,s.jsx)(P.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,s.jsx)(P.default,{placeholder:"Company"})}}]})})}},72177:function(L,d,e){e.r(d);var C=e(90554),K=e.n(C),P=e(28870),I=e(41760),D=e.n(I),i=e(90533),E=e(48651),U=e.n(E),s=e(86516),c=e.n(s),v=e(79685),r=e(92767),u=e(63342);d.default=function(){var y=r.Form.useForm(),o=c()(y,1),m=o[0],A=r.Form.useWatch("data",m)||[],t=(0,v.useState)(new Array(10).fill(1).map(function(f,n){return{label:"test-".concat(n),value:n}})),W=c()(t,1),T=W[0],M=(0,v.useMemo)(function(){var f=A.filter(Boolean).map(function(n){return n.name});return T.map(function(n){return U()(U()({},n),{},{disabled:f.includes(n.value)})})},[A.filter(Boolean).map(function(f){return f.name}).toString()]);return(0,u.jsx)(r.Form,{form:m,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,u.jsx)(r.Form.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(n,_){var a=_.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,u.jsx)(i.default,{placeholder:"Name",options:M})}},{key:"op",title:"Configuration",render:function(O){var l=O.name;return(0,u.jsx)(P.default,{type:"link",onClick:function(){return a(l)},children:"delete"})}}]},size:"small",footer:function(n,_){var a=_.add;return(0,u.jsx)(P.default,{type:"link",onClick:function(){return a({})},children:"add"})}})})}},19647:function(L,d,e){e.r(d);var C=e(90554),K=e.n(C),P=e(28870),I=e(71089),D=e.n(I),i=e(75020),E=e(41760),U=e.n(E),s=e(90533),c=e(83345),v=e.n(c),r=e(50425),u=e(86516),y=e.n(u),o=e(79685),m=e(92767),A=e(7006),t=e(63342);d.default=function(){var W=m.Form.useForm(),T=y()(W,1),M=T[0],f=(0,o.useState)(!1),n=y()(f,2),_=n[0],a=n[1],g=function(){a(!0),(0,A.Z)().then(function(l){M.setFieldValue("data",l)}).finally(function(){a(!1)})};return(0,o.useEffect)(function(){g()},[]),(0,t.jsx)(m.Form,{form:M,layout:"vertical",style:{height:400},children:(0,t.jsx)(m.Form.Table,{name:"data",loading:_,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(r.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,t.jsx)(s.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(l){var p=y()(l,1),R=p[0];return[["data",R,"gender"]]},render:function(l,p,R){var B,j=l.name;return(R==null||(B=R.getFieldValue)===null||B===void 0?void 0:B.call(R,["data",j,"gender"]))==="female"?"--":(0,t.jsx)(m.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(r.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(r.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(l){var p=l.name;return(0,t.jsx)(P.default,{type:"link",onClick:function(){return i.default.info(JSON.stringify(M.getFieldValue(["data",p])))},children:"Configuration"})}}]})})}},17605:function(L,d,e){e.r(d);var C=e(90554),K=e.n(C),P=e(28870),I=e(71089),D=e.n(I),i=e(75020),E=e(83345),U=e.n(E),s=e(50425),c=e(86516),v=e.n(c),r=e(79685),u=e(92767),y=e(7006),o=e(63342);d.default=function(){var m=u.Form.useForm(),A=v()(m,1),t=A[0],W=(0,r.useState)(!1),T=v()(W,2),M=T[0],f=T[1],n=function(){f(!0),(0,y.Z)().then(function(a){t.setFieldValue("data",a)}).finally(function(){f(!1)})};return(0,r.useEffect)(function(){n()},[]),(0,o.jsx)(u.Form,{form:t,layout:"vertical",style:{height:400},children:(0,o.jsx)(u.Form.Table,{name:"data",loading:M,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,o.jsx)(s.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,o.jsx)(u.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(_,a){var g=_.getFieldValue,O=v()(a,1),l=O[0];return{required:g(["data",l,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,o.jsx)(s.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,o.jsx)(s.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(a){var g=a.name;return(0,o.jsx)(P.default,{type:"link",onClick:function(){return i.default.info(JSON.stringify(t.getFieldValue(["data",g])))},children:"Configuration"})}}]})})}},7006:function(L,d,e){e.d(d,{Z:function(){return i}});var C=e(22786),K=e.n(C),P=e(46299),I=e.n(P),D=e(80696);function i(){return E.apply(this,arguments)}function E(){return E=I()(K()().mark(function U(){return K()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",new Promise(function(v){setTimeout(function(){var r=Array.from({length:5}).map(function(){return{uuid:D.We.datatype.uuid(),name:D.We.internet.userName(),address:D.We.address.cityName(),company:D.We.company.bs(),gender:D.We.name.sex(),weight:D.We.datatype.number({max:200,min:80})}});v(r)},150)}));case 1:case"end":return c.stop()}},U)})),E.apply(this,arguments)}}}]);
