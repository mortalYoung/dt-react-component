"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8863],{55180:function(O,c,n){var s=n(88071),a=n(25414),i=n(24731),m=n(9987),r=n(75271),e=n(82187),f=n.n(e),d=n(99420),E=n(6223),o=n(77274),u=n(49980),P=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,o.U)("#1890ff");var v=r.forwardRef(function(_,y){var D=_.className,h=_.icon,T=_.spin,t=_.rotate,l=_.tabIndex,C=_.onClick,g=_.twoToneColor,M=(0,m.Z)(_,P),x=r.useContext(d.Z),b=x.prefixCls,p=b===void 0?"anticon":b,B=x.rootClassName,R=f()(B,p,(0,i.Z)((0,i.Z)({},"".concat(p,"-").concat(h.name),!!h.name),"".concat(p,"-spin"),!!T||h.name==="loading"),D),I=l;I===void 0&&C&&(I=-1);var U=t?{msTransform:"rotate(".concat(t,"deg)"),transform:"rotate(".concat(t,"deg)")}:void 0,Z=(0,u.H9)(g),A=(0,a.Z)(Z,2),K=A[0],W=A[1];return r.createElement("span",(0,s.Z)((0,s.Z)({role:"img","aria-label":h.name},M),{},{ref:y,tabIndex:I,onClick:C,className:R}),r.createElement(E.Z,{icon:h,primaryColor:K,secondaryColor:W,style:U}))});v.displayName="AntdIcon",v.getTwoToneColor=o.m,v.setTwoToneColor=o.U,c.Z=v},99420:function(O,c,n){var s=n(75271),a=(0,s.createContext)({});c.Z=a},6223:function(O,c,n){var s=n(9987),a=n(88071),i=n(49980),m=["icon","className","onClick","style","primaryColor","secondaryColor"],r={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function e(E){var o=E.primaryColor,u=E.secondaryColor;r.primaryColor=o,r.secondaryColor=u||(0,i.pw)(o),r.calculated=!!u}function f(){return(0,a.Z)({},r)}var d=function(o){var u=o.icon,P=o.className,v=o.onClick,_=o.style,y=o.primaryColor,D=o.secondaryColor,h=(0,s.Z)(o,m),T=r;if(y&&(T={primaryColor:y,secondaryColor:D||(0,i.pw)(y)}),(0,i.C3)(),(0,i.Kp)((0,i.r)(u),"icon should be icon definiton, but got ".concat(u)),!(0,i.r)(u))return null;var t=u;return t&&typeof t.icon=="function"&&(t=(0,a.Z)((0,a.Z)({},t),{},{icon:t.icon(T.primaryColor,T.secondaryColor)})),(0,i.R_)(t.icon,"svg-".concat(t.name),(0,a.Z)({className:P,onClick:v,style:_,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},h))};d.displayName="IconReact",d.getTwoToneColors=f,d.setTwoToneColors=e,c.Z=d},77274:function(O,c,n){n.d(c,{U:function(){return m},m:function(){return r}});var s=n(25414),a=n(6223),i=n(49980);function m(e){var f=(0,i.H9)(e),d=(0,s.Z)(f,2),E=d[0],o=d[1];return a.Z.setTwoToneColors({primaryColor:E,secondaryColor:o})}function r(){var e=a.Z.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},36973:function(O,c,n){n.d(c,{Z:function(){return d}});var s=n(88071),a=n(75271),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},m=i,r=n(55180),e=function(o,u){return a.createElement(r.Z,(0,s.Z)((0,s.Z)({},o),{},{ref:u,icon:m}))},f=a.forwardRef(e),d=f},49980:function(O,c,n){n.d(c,{C3:function(){return T},H9:function(){return y},Kp:function(){return o},R_:function(){return v},pw:function(){return _},r:function(){return u},vD:function(){return D}});var s=n(88071),a=n(83419),i=n(56088),m=n(75271),r=n(4449),e=n(18263),f=n(99420),d=n(47638),E=n.n(d);function o(t,l){(0,r.ZP)(t,"[@ant-design/icons] ".concat(l))}function u(t){return(0,a.Z)(t)==="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&((0,a.Z)(t.icon)==="object"||typeof t.icon=="function")}function P(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).reduce(function(l,C){var g=t[C];switch(C){case"class":l.className=g,delete l.class;break;default:delete l[C],l[E()(C)]=g}return l},{})}function v(t,l,C){return C?m.createElement(t.tag,(0,s.Z)((0,s.Z)({key:l},P(t.attrs)),C),(t.children||[]).map(function(g,M){return v(g,"".concat(l,"-").concat(t.tag,"-").concat(M))})):m.createElement(t.tag,(0,s.Z)({key:l},P(t.attrs)),(t.children||[]).map(function(g,M){return v(g,"".concat(l,"-").concat(t.tag,"-").concat(M))}))}function _(t){return(0,i.generate)(t)[0]}function y(t){return t?Array.isArray(t)?t:[t]:[]}var D={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},h=`
.anticon {
  display: inline-flex;
  alignItems: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,T=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:h,C=(0,m.useContext)(f.Z),g=C.csp;(0,m.useEffect)(function(){(0,e.hq)(l,"@ant-design-icons",{prepend:!0,csp:g})},[])}},68742:function(O,c,n){n.r(c),n.d(c,{default:function(){return f}});var s=n(30358),a=n(14788),i=n(75271),m=n(36973),r=n(8325),e=n(52676);function f(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.ql,{children:[(0,e.jsx)("title",{children:"dt-react-component"}),(0,e.jsx)("meta",{property:"og:title",content:"dt-react-component","data-rh":"true"}),(0,e.jsx)("meta",{name:"description",content:"react-component"}),(0,e.jsx)("meta",{name:"author",content:"dtinsight UED"}),(0,e.jsx)("meta",{name:"keywords",content:"react,react-component,ui-library,typescript,ant-design"})]}),(0,e.jsxs)("div",{className:"dtc-homepage",children:[(0,e.jsx)("h1",{className:"dtc-homepage-title",children:"dt-react-component"}),(0,e.jsxs)("div",{className:"dtc-homepage-badges",children:[(0,e.jsx)("img",{src:"https://img.shields.io/npm/v/dt-react-component.svg?style=flat"}),(0,e.jsx)("img",{src:"http://img.shields.io/npm/dm/dt-react-component.svg?style=flat"})]}),(0,e.jsx)("div",{className:"dtc-homepage-description",children:"\u4E00\u4E2A\u57FA\u4E8E ant design \u7684\u7EC4\u4EF6\u5E93"}),(0,e.jsxs)("div",{className:"dtc-homepage-btnGroups",children:[(0,e.jsx)(r.rU,{className:"ant-btn",to:"/guide",children:"\u5FEB\u901F\u5F00\u59CB"}),(0,e.jsx)(a.default,{icon:(0,e.jsx)(m.Z,{}),href:"https://github.com/DTStack/dt-react-component",children:"Github"})]})]})]})}}}]);
