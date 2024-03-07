"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294],{14364:function(b,n,e){e.r(n);var I=e(88289),u=e.n(I),y=e(4125),P=e(90554),l=e.n(P),r=e(28870),_=e(71089),a=e.n(_),s=e(75020),h=e(83345),W=e.n(h),c=e(50425),p=e(86516),x=e.n(p),v=e(79685),f=e(22062),B=e(57647),g=e(7006),t=e(63342);n.default=function(){var C=f.Z.useForm(),o=x()(C,1),d=o[0],i=(0,v.useState)(!1),D=x()(i,2),E=D[0],O=D[1],A=function(){O(!0),(0,g.Z)().then(function(j){d.setFieldValue("data",j)}).finally(function(){O(!1)})},L=function(){d.validateFields().then(function(j){console.log(j)})};return(0,v.useEffect)(function(){A()},[]),(0,t.jsxs)(y.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,t.jsx)(f.Z,{form:d,layout:"vertical",children:(0,t.jsx)(f.Z.Table,{name:"data",loading:E,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(c.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(B.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(c.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(c.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(j){var K=j.name;return(0,t.jsx)(r.default,{type:"link",onClick:function(){return s.default.info(JSON.stringify(d.getFieldValue(["data",K])))},children:"Configuration"})}}]})}),(0,t.jsx)(r.default,{type:"primary",onClick:L,children:"Submit"})]})}},67001:function(b,n,e){e.r(n);var I=e(83345),u=e.n(I),y=e(50425),P=e(86516),l=e.n(P),r=e(79685),_=e(22062),a=e(7006),s=e(63342);n.default=function(){var h=_.Z.useForm(),W=l()(h,1),c=W[0],p=(0,r.useState)([]),x=l()(p,2),v=x[0],f=x[1],B=(0,r.useState)(!1),g=l()(B,2),t=g[0],C=g[1],o=function(){C(!0),(0,a.Z)().then(function(D){c.setFieldValue("data",D)}).finally(function(){C(!1)})};(0,r.useEffect)(function(){o()},[]);var d=(0,r.useMemo)(function(){return v.map(function(i){var D;return(D=c.getFieldsValue().data)===null||D===void 0?void 0:D.findIndex(function(E){return E.uuid===i})})},[v]);return(0,s.jsx)(_.Z,{form:c,layout:"vertical",style:{height:400},children:(0,s.jsx)(_.Z.Table,{name:"data",loading:t,scroll:{y:280},rowSelection:{selectedRowKeys:d,onChange:function(D){f(c.getFieldsValue().data.filter(function(E,O){return D.includes(O)}).map(function(E){return E.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(D){var E=D.name;return(0,s.jsx)(y.default,{disabled:v.includes(c.getFieldValue(["data",E,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,s.jsx)(y.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,s.jsx)(y.default,{placeholder:"Company"})}}]})})}},72177:function(b,n,e){e.r(n);var I=e(90554),u=e.n(I),y=e(28870),P=e(41760),l=e.n(P),r=e(90533),_=e(48651),a=e.n(_),s=e(86516),h=e.n(s),W=e(79685),c=e(22062),p=e(63342);n.default=function(){var x=c.Z.useForm(),v=h()(x,1),f=v[0],B=c.Z.useWatch("data",f)||[],g=(0,W.useState)(new Array(10).fill(1).map(function(d,i){return{label:"test-".concat(i),value:i}})),t=h()(g,1),C=t[0],o=(0,W.useMemo)(function(){var d=B.filter(Boolean).map(function(i){return i.name});return C.map(function(i){return a()(a()({},i),{},{disabled:d.includes(i.value)})})},[B.filter(Boolean).map(function(d){return d.name}).toString()]);return(0,p.jsx)(c.Z,{form:f,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,p.jsx)(c.Z.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(i,D){var E=D.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,p.jsx)(r.default,{placeholder:"Name",options:o})}},{key:"op",title:"Configuration",render:function(A){var L=A.name;return(0,p.jsx)(y.default,{type:"link",onClick:function(){return E(L)},children:"delete"})}}]},size:"small",footer:function(i,D){var E=D.add;return(0,p.jsx)(y.default,{type:"link",onClick:function(){return E({})},children:"add"})}})})}},19647:function(b,n,e){e.r(n);var I=e(90554),u=e.n(I),y=e(28870),P=e(71089),l=e.n(P),r=e(75020),_=e(41760),a=e.n(_),s=e(90533),h=e(83345),W=e.n(h),c=e(50425),p=e(86516),x=e.n(p),v=e(79685),f=e(22062),B=e(57647),g=e(7006),t=e(63342);n.default=function(){var C=f.Z.useForm(),o=x()(C,1),d=o[0],i=(0,v.useState)(!1),D=x()(i,2),E=D[0],O=D[1],A=function(){O(!0),(0,g.Z)().then(function(R){d.setFieldValue("data",R)}).finally(function(){O(!1)})};return(0,v.useEffect)(function(){A()},[]),(0,t.jsx)(f.Z,{form:d,layout:"vertical",style:{height:400},children:(0,t.jsx)(f.Z.Table,{name:"data",loading:E,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(c.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,t.jsx)(s.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(R){var j=x()(R,1),K=j[0];return[["data",K,"gender"]]},render:function(R,j,K){var V,k=R.name;return(K==null||(V=K.getFieldValue)===null||V===void 0?void 0:V.call(K,["data",k,"gender"]))==="female"?"--":(0,t.jsx)(B.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(c.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(c.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(R){var j=R.name;return(0,t.jsx)(y.default,{type:"link",onClick:function(){return r.default.info(JSON.stringify(d.getFieldValue(["data",j])))},children:"Configuration"})}}]})})}},17605:function(b,n,e){e.r(n);var I=e(90554),u=e.n(I),y=e(28870),P=e(71089),l=e.n(P),r=e(75020),_=e(83345),a=e.n(_),s=e(50425),h=e(86516),W=e.n(h),c=e(79685),p=e(22062),x=e(57647),v=e(7006),f=e(63342);n.default=function(){var B=p.Z.useForm(),g=W()(B,1),t=g[0],C=(0,c.useState)(!1),o=W()(C,2),d=o[0],i=o[1],D=function(){i(!0),(0,v.Z)().then(function(O){t.setFieldValue("data",O)}).finally(function(){i(!1)})};return(0,c.useEffect)(function(){D()},[]),(0,f.jsx)(p.Z,{form:t,layout:"vertical",style:{height:400},children:(0,f.jsx)(p.Z.Table,{name:"data",loading:d,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,f.jsx)(s.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,f.jsx)(x.Z,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(E,O){var A=E.getFieldValue,L=W()(O,1),R=L[0];return{required:A(["data",R,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,f.jsx)(s.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,f.jsx)(s.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(O){var A=O.name;return(0,f.jsx)(y.default,{type:"link",onClick:function(){return r.default.info(JSON.stringify(t.getFieldValue(["data",A])))},children:"Configuration"})}}]})})}},57647:function(b,n,e){e.d(n,{Z:function(){return B}});var I=e(48651),u=e.n(I),y=e(80244),P=e(59058),l=e(86516),r=e.n(l),_=e(38046),a=e.n(_),s=e(79685),h=e(68591),W=e.n(h),c=e(15298),p=e(63342),x=["value","title","className","maxWidth","watchParentSizeChange"],v=120,f=function(t){var C,o,d=t.value,i=t.title,D=i===void 0?d:i,E=t.className,O=t.maxWidth,A=t.watchParentSizeChange,L=A===void 0?!1:A,R=a()(t,x),j=(0,s.useRef)(null),K=L&&(C=j.current)!==null&&C!==void 0&&C.parentElement?(o=j.current)===null||o===void 0?void 0:o.parentElement:null,V=(0,s.useState)(!1),k=r()(V,2),re=k[0],w=k[1],le=(0,s.useState)(v),N=r()(le,2),M=N[0],Y=N[1],oe=(0,s.useState)("default"),q=r()(oe,2),H=q[0],te=q[1];(0,s.useLayoutEffect)(function(){Z()},[d,O]);var ne=function(m,T){return window.getComputedStyle(m)[T]||m.currentStyle[T]},$=function(m,T){return parseInt(ne(m,T))},se=function(m,T){var U=G(m);if(typeof T=="number")return T>U?U:T;var S=T.match(/^(\d+)(px)?$/);if(S)return+S[1]>U?U:+S[1];var ee=T.match(/^(\d+)%$/);if(ee)return U*(parseInt(ee[1])/100);var J=T.match(/^calc\(100% - (\d+)px\)$/);return J?U-parseInt(J[1]):U},de=function(m){m.style.display="none"},ie=function(m){m.style.display="inline-block"},ae=function F(m){if(!m)return v;var T=m.scrollWidth,U=m.parentElement;if(T===0)return F(U);if(O)return se(m,O);de(j.current);var S=z(m);return S<0?0:S},Q=function(m){var T=document.createRange();T.selectNodeContents(m);var U=T.getBoundingClientRect().width;return U},G=function(m){var T=m.getBoundingClientRect().width,U=$(m,"paddingLeft"),S=$(m,"paddingRight");return T-U-S},z=function(m){var T=G(m),U=Q(m),S=T-U;return S},Z=function(){var m=j.current,T=m.parentElement,U=Q(m),S=ae(T),ee=U>S;w(ee),Y(S);var J=ne(T,"cursor");J!=="default"?te(J):ee&&te("pointer"),ie(m)},X=(0,s.useCallback)(function(){var F={maxWidth:M,cursor:H};return(0,p.jsx)("span",{ref:j,className:W()("dtc-ellipsis-text",E),style:F,children:typeof d=="function"?d():d})},[M,H,d]);return(0,p.jsx)(c.Z,{onResize:Z,observerEle:K,children:re?(0,p.jsx)(P.default,u()(u()({title:D,mouseEnterDelay:0,mouseLeaveDelay:0},R),{},{children:X()})):X()})},B=f},7006:function(b,n,e){e.d(n,{Z:function(){return r}});var I=e(22786),u=e.n(I),y=e(46299),P=e.n(y),l=e(80696);function r(){return _.apply(this,arguments)}function _(){return _=P()(u()().mark(function a(){return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",new Promise(function(W){setTimeout(function(){var c=Array.from({length:5}).map(function(){return{uuid:l.We.datatype.uuid(),name:l.We.internet.userName(),address:l.We.address.cityName(),company:l.We.company.bs(),gender:l.We.name.sex(),weight:l.We.datatype.number({max:200,min:80})}});W(c)},150)}));case 1:case"end":return h.stop()}},a)})),_.apply(this,arguments)}},22062:function(b,n,e){e.d(n,{Z:function(){return d}});var I=e(99764),u=e(9923),y=e(79786),P=e(97112),l=e(48651),r=e.n(l),_=e(40765),a=e.n(_),s=e(38046),h=e.n(s),W=e(79685),c=e(29520),p=e(68591),x=e.n(p),v=e(63342),f=["name","rules","initialValue"],B=["tableClassName","columns","title","footer","summary"],g=["noStyle","style","className","id","hasFeedback","validateStatus","required","hidden","initialValue","messageVariables","tooltip","dependencies","rules","render"],t="dtc-form__table";function C(i){var D=i.name,E=i.rules,O=i.initialValue,A=h()(i,f),L=A.tableClassName,R=A.columns,j=A.title,K=A.footer,V=A.summary,k=h()(A,B),re=function(N){return N!=null&&N.length?N.map(function(M){var Y=M.noStyle,oe=M.style,q=M.className,H=M.id,te=M.hasFeedback,ne=M.validateStatus,$=M.required,se=M.hidden,de=M.initialValue,ie=M.messageVariables,ae=M.tooltip,Q=M.dependencies,G=M.rules,z=M.render,Z=h()(M,g),X={noStyle:Y,style:oe,className:q,id:H,hasFeedback:te,validateStatus:ne,required:$,hidden:se,initialValue:de,messageVariables:ie,tooltip:ae},F=$||(G==null?void 0:G.some(function(m){return a()(m)==="object"&&m.required}));return r()(r()({},Z),{},{title:(0,v.jsxs)(v.Fragment,{children:[F&&(0,v.jsx)("span",{className:"dtc-form__table__column--required"}),Z.title]}),render:function(T,U){var S=[U.name,Z.dataIndex].filter(c.cQ.checkExist).flat(),ee=G==null?void 0:G.map(function(J){return typeof J=="function"?function(ue){return J(ue,S)}:J});return Q?(0,v.jsx)(u.Z.Item,{noStyle:!0,dependencies:typeof Q=="function"?Q(S):Q,children:function(ue){return(0,v.jsx)(u.Z.Item,r()(r()({name:S,rules:ee},X),{},{children:z==null?void 0:z(U,S,ue)}))}}):(0,v.jsx)(u.Z.Item,r()(r()({name:S,rules:ee},X),{},{children:z==null?void 0:z(U,S)}))}})}):[]},w=(0,W.useMemo)(function(){return typeof R=="function"?R:re(R)},[R]);return(0,v.jsx)(u.Z.List,{name:D,rules:E,initialValue:O,children:function(N,M,Y){return(0,v.jsx)(P.Z,r()({className:x()(t,L),rowKey:"key",dataSource:N,pagination:!1,columns:typeof w=="function"?re(w(N,M,Y)):w,footer:K?function(){return K(N,M,Y)}:void 0,title:j?function(){return j(N,M,Y)}:void 0,summary:V?function(){return V(N,M,Y)}:void 0},k))}})}var o=u.Z;o.Table=C;var d=o},15298:function(b,n,e){var I=e(79685),u=e(63342),y=function(l){var r=l.observerEle,_=l.onResize,a=l.children;return(0,I.useEffect)(function(){if(typeof _=="function")if(r){var s=new ResizeObserver(_);return s.observe(r),function(){s.unobserve(r)}}else return window.addEventListener("resize",_,!1),function(){window.removeEventListener("resize",_,!1)}},[_,r]),(0,u.jsx)(u.Fragment,{children:a})};n.Z=y},1246:function(b,n,e){e.r(n)},25208:function(b,n,e){e.r(n)},94784:function(b,n,e){var I=e(87476).default,u=e(80007).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var y=u(e(67002)),P=I(e(79685)),l=e(40784),r=function(){var a=P.useState(!1),s=(0,y.default)(a,2),h=s[0],W=s[1];return P.useEffect(function(){W((0,l.detectFlexGapSupported)())},[]),h};n.default=r},40784:function(b,n,e){var I=e(80007).default;Object.defineProperty(n,"__esModule",{value:!0}),n.detectFlexGapSupported=n.canUseDocElement=void 0,Object.defineProperty(n,"isStyleSupport",{enumerable:!0,get:function(){return y.isStyleSupport}});var u=I(e(24061)),y=e(92307),P=function(){return(0,u.default)()&&window.document.documentElement};n.canUseDocElement=P;var l,r=function(){if(!P())return!1;if(l!==void 0)return l;var a=document.createElement("div");return a.style.display="flex",a.style.flexDirection="column",a.style.rowGap="1px",a.appendChild(document.createElement("div")),a.appendChild(document.createElement("div")),document.body.appendChild(a),l=a.scrollHeight===1,document.body.removeChild(a),l};n.detectFlexGapSupported=r},71089:function(b,n,e){e(36226),e(1246)},68023:function(b,n,e){var I=e(87476).default,u=e(80007).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=_;var y=u(e(16327)),P=u(e(92107)),l=I(e(79685)),r=e(4125);function _(a){var s=a.className,h=a.direction,W=a.index,c=a.marginDirection,p=a.children,x=a.split,v=a.wrap,f=l.useContext(r.SpaceContext),B=f.horizontalSize,g=f.verticalSize,t=f.latestIndex,C=f.supportFlexGap,o={};return C||(h==="vertical"?W<t&&(o={marginBottom:B/(x?2:1)}):o=(0,P.default)((0,P.default)({},W<t&&(0,y.default)({},c,B/(x?2:1))),v&&{paddingBottom:g})),p==null?null:l.createElement(l.Fragment,null,l.createElement("div",{className:s,style:o},p),W<t&&x&&l.createElement("span",{className:"".concat(s,"-split"),style:o},x))}},4125:function(b,n,e){var I=e(87476).default,u=e(80007).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.SpaceContext=void 0;var y=u(e(92107)),P=u(e(16327)),l=u(e(67002)),r=u(e(68591)),_=u(e(1777)),a=I(e(79685)),s=e(98e3),h=u(e(94784)),W=u(e(68023)),c=function(g,t){var C={};for(var o in g)Object.prototype.hasOwnProperty.call(g,o)&&t.indexOf(o)<0&&(C[o]=g[o]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(g);d<o.length;d++)t.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(g,o[d])&&(C[o[d]]=g[o[d]]);return C},p=a.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});n.SpaceContext=p;var x={small:8,middle:16,large:24};function v(g){return typeof g=="string"?x[g]:g||0}var f=function(t){var C,o=a.useContext(s.ConfigContext),d=o.getPrefixCls,i=o.space,D=o.direction,E=t.size,O=E===void 0?(i==null?void 0:i.size)||"small":E,A=t.align,L=t.className,R=t.children,j=t.direction,K=j===void 0?"horizontal":j,V=t.prefixCls,k=t.split,re=t.style,w=t.wrap,le=w===void 0?!1:w,N=c(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),M=(0,h.default)(),Y=a.useMemo(function(){return(Array.isArray(O)?O:[O,O]).map(function(Z){return v(Z)})},[O]),oe=(0,l.default)(Y,2),q=oe[0],H=oe[1],te=(0,_.default)(R,{keepEmpty:!0}),ne=A===void 0&&K==="horizontal"?"center":A,$=d("space",V),se=(0,r.default)($,"".concat($,"-").concat(K),(C={},(0,P.default)(C,"".concat($,"-rtl"),D==="rtl"),(0,P.default)(C,"".concat($,"-align-").concat(ne),ne),C),L),de="".concat($,"-item"),ie=D==="rtl"?"marginLeft":"marginRight",ae=0,Q=te.map(function(Z,X){Z!=null&&(ae=X);var F=Z&&Z.key||"".concat(de,"-").concat(X);return a.createElement(W.default,{className:de,key:F,direction:K,index:X,marginDirection:ie,split:k,wrap:le},Z)}),G=a.useMemo(function(){return{horizontalSize:q,verticalSize:H,latestIndex:ae,supportFlexGap:M}},[q,H,ae,M]);if(te.length===0)return null;var z={};return le&&(z.flexWrap="wrap",M||(z.marginBottom=-H)),M&&(z.columnGap=q,z.rowGap=H),a.createElement("div",(0,y.default)({className:se,style:(0,y.default)((0,y.default)({},z),re)},N),a.createElement(p.Provider,{value:G},Q))},B=f;n.default=B},88289:function(b,n,e){e(36226),e(25208)}}]);
