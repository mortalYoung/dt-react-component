(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4905],{44115:function(r,a,n){"use strict";var f=n(86848),c=n(13619),o=n(15810),u=n(56428),i=n(79685),l=n(68591),s=n.n(l),e=n(59750),_=n(23207),d=n(37507),C=n(52328),D=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,d.U)("#1890ff");var m=i.forwardRef(function(v,p){var h,F=v.className,y=v.icon,t=v.spin,E=v.rotate,g=v.tabIndex,B=v.onClick,P=v.twoToneColor,b=(0,u.Z)(v,D),T=i.useContext(e.Z),x=T.prefixCls,A=x===void 0?"anticon":x,S=T.rootClassName,I=s()(S,A,(h={},(0,o.Z)(h,"".concat(A,"-").concat(y.name),!!y.name),(0,o.Z)(h,"".concat(A,"-spin"),!!t||y.name==="loading"),h),F),O=g;O===void 0&&B&&(O=-1);var R=E?{msTransform:"rotate(".concat(E,"deg)"),transform:"rotate(".concat(E,"deg)")}:void 0,U=(0,C.H9)(P),M=(0,c.Z)(U,2),W=M[0],L=M[1];return i.createElement("span",(0,f.Z)((0,f.Z)({role:"img","aria-label":y.name},b),{},{ref:p,tabIndex:O,onClick:B,className:I}),i.createElement(_.Z,{icon:y,primaryColor:W,secondaryColor:L,style:R}))});m.displayName="AntdIcon",m.getTwoToneColor=d.m,m.setTwoToneColor=d.U,a.Z=m},59750:function(r,a,n){"use strict";var f=n(79685),c=(0,f.createContext)({});a.Z=c},23207:function(r,a,n){"use strict";var f=n(56428),c=n(86848),o=n(52328),u=["icon","className","onClick","style","primaryColor","secondaryColor"],i={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function l(_){var d=_.primaryColor,C=_.secondaryColor;i.primaryColor=d,i.secondaryColor=C||(0,o.pw)(d),i.calculated=!!C}function s(){return(0,c.Z)({},i)}var e=function(d){var C=d.icon,D=d.className,m=d.onClick,v=d.style,p=d.primaryColor,h=d.secondaryColor,F=(0,f.Z)(d,u),y=i;if(p&&(y={primaryColor:p,secondaryColor:h||(0,o.pw)(p)}),(0,o.C3)(),(0,o.Kp)((0,o.r)(C),"icon should be icon definiton, but got ".concat(C)),!(0,o.r)(C))return null;var t=C;return t&&typeof t.icon=="function"&&(t=(0,c.Z)((0,c.Z)({},t),{},{icon:t.icon(y.primaryColor,y.secondaryColor)})),(0,o.R_)(t.icon,"svg-".concat(t.name),(0,c.Z)({className:D,onClick:m,style:v,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},F))};e.displayName="IconReact",e.getTwoToneColors=s,e.setTwoToneColors=l,a.Z=e},37507:function(r,a,n){"use strict";n.d(a,{U:function(){return u},m:function(){return i}});var f=n(13619),c=n(23207),o=n(52328);function u(l){var s=(0,o.H9)(l),e=(0,f.Z)(s,2),_=e[0],d=e[1];return c.Z.setTwoToneColors({primaryColor:_,secondaryColor:d})}function i(){var l=c.Z.getTwoToneColors();return l.calculated?[l.primaryColor,l.secondaryColor]:l.primaryColor}},52328:function(r,a,n){"use strict";n.d(a,{C3:function(){return y},H9:function(){return p},Kp:function(){return d},R_:function(){return m},pw:function(){return v},r:function(){return C},vD:function(){return h}});var f=n(86848),c=n(57329),o=n(4046),u=n(79685),i=n(70585),l=n(1796),s=n(59750),e=n(1433),_=n.n(e);function d(t,E){(0,i.ZP)(t,"[@ant-design/icons] ".concat(E))}function C(t){return(0,c.Z)(t)==="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&((0,c.Z)(t.icon)==="object"||typeof t.icon=="function")}function D(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).reduce(function(E,g){var B=t[g];switch(g){case"class":E.className=B,delete E.class;break;default:delete E[g],E[_()(g)]=B}return E},{})}function m(t,E,g){return g?u.createElement(t.tag,(0,f.Z)((0,f.Z)({key:E},D(t.attrs)),g),(t.children||[]).map(function(B,P){return m(B,"".concat(E,"-").concat(t.tag,"-").concat(P))})):u.createElement(t.tag,(0,f.Z)({key:E},D(t.attrs)),(t.children||[]).map(function(B,P){return m(B,"".concat(E,"-").concat(t.tag,"-").concat(P))}))}function v(t){return(0,o.generate)(t)[0]}function p(t){return t?Array.isArray(t)?t:[t]:[]}var h={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},F=`
.anticon {
  display: inline-block;
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
`,y=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:F,g=(0,u.useContext)(s.Z),B=g.csp;(0,u.useEffect)(function(){(0,l.hq)(E,"@ant-design-icons",{prepend:!0,csp:B})},[])}},35838:function(r,a,n){"use strict";n.r(a),n.d(a,{default:function(){return _}});var f=n(86516),c=n.n(f),o=n(79685),u=n(90671),i=[`### \u5C06\u8FDB\u9152
\u541B\u4E0D\u89C1\u9EC4\u6CB3\u4E4B\u6C34\u5929\u4E0A\u6765\uFF0C\u5954\u6D41\u5230\u6D77\u4E0D\u590D\u56DE\u3002

\u541B\u4E0D\u89C1\u9AD8\u5802\u660E\u955C\u60B2\u767D\u53D1\uFF0C\u671D\u5982\u9752\u4E1D\u66AE\u6210\u96EA\u3002

\u4EBA\u751F\u5F97\u610F\u987B\u5C3D\u6B22\uFF0C\u83AB\u4F7F\u91D1\u6A3D\u7A7A\u5BF9\u6708\u3002

\u5929\u751F\u6211\u6750\u5FC5\u6709\u7528\uFF0C\u5343\u91D1\u6563\u5C3D\u8FD8\u590D\u6765\u3002

\u70F9\u7F8A\u5BB0\u725B\u4E14\u4E3A\u4E50\uFF0C\u4F1A\u987B\u4E00\u996E\u4E09\u767E\u676F\u3002

\u5C91\u592B\u5B50\uFF0C\u4E39\u4E18\u751F\uFF0C\u5C06\u8FDB\u9152\uFF0C\u676F\u83AB\u505C\u3002

\u4E0E\u541B\u6B4C\u4E00\u66F2\uFF0C\u8BF7\u541B\u4E3A\u6211\u503E\u8033\u542C\u3002

\u949F\u9F13\u9994\u7389\u4E0D\u8DB3\u8D35\uFF0C\u4F46\u613F\u957F\u9189\u4E0D\u613F\u9192\u3002

\u53E4\u6765\u5723\u8D24\u7686\u5BC2\u5BDE\uFF0C\u60DF\u6709\u996E\u8005\u7559\u5176\u540D\u3002

\u9648\u738B\u6614\u65F6\u5BB4\u5E73\u4E50\uFF0C\u6597\u9152\u5341\u5343\u6063\u6B22\u8C11\u3002

\u4E3B\u4EBA\u4F55\u4E3A\u8A00\u5C11\u94B1\uFF0C\u5F84\u987B\u6CBD\u53D6\u5BF9\u541B\u914C\u3002

\u4E94\u82B1\u9A6C\u3001\u5343\u91D1\u88D8\uFF0C\u547C\u513F\u5C06\u51FA\u6362\u7F8E\u9152\uFF0C\u4E0E\u5C14\u540C\u9500\u4E07\u53E4\u6101\u3002
`];function l(){return Math.floor(Math.random()*10)}function s(d){var C=d.onopen,D=d.onmessage,m=d.onstop;C==null||C();var v=i[0],p=0,h=window.setInterval(function(){var F=l(),y=p+F;if(y>=v.length){y=v.length,window.clearInterval(h),D==null||D(v.slice(p,p+F)),m==null||m();return}D==null||D(v.slice(p,p+F)),p+=F},100)}var e=n(63342);function _(){var d,C=u.Z.useChat(),D=(0,o.useState)(""),m=c()(D,2),v=m[0],p=m[1],h=function(){var y=v.trim();if(y){p("");var t=new Date().valueOf().toString(),E=(new Date().valueOf()+1).toString();C.prompt.create({id:t,title:y}),C.message.create(t,{id:E,content:""}),s({onopen:function(){C.start(t,E)},onmessage:function(B){C.push(t,E,B)},onstop:function(){C.close(t,E)}})}};return(0,o.useEffect)(function(){C.conversation.create({id:new Date().valueOf().toString()})},[]),(0,e.jsx)("div",{style:{width:"100%",height:400},children:(0,e.jsxs)(u.Z,{chat:C,children:[(0,e.jsx)(u.Z.Content,{data:((d=C.conversation.get())===null||d===void 0?void 0:d.prompts)||[],placeholder:(0,e.jsx)("h1",{children:"\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u5FD9\u7684\uFF1F"})}),(0,e.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,e.jsx)(u.Z.Input,{value:v,onChange:p,onPressEnter:function(){return h()},placeholder:"\u8BF7\u8F93\u5165\u60F3\u54A8\u8BE2\u7684\u5185\u5BB9\u2026"}),(0,e.jsx)(u.Z.Button,{type:"primary",onClick:function(){return h()},disabled:C.loading()||!v,children:(0,e.jsx)(u.Z.Icon.SendIcon,{style:{fontSize:16,padding:"8px 16px"}})})]})]})})}},94784:function(r,a,n){"use strict";var f=n(87476).default,c=n(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=c(n(67002)),u=f(n(79685)),i=n(40784),l=function(){var e=u.useState(!1),_=(0,o.default)(e,2),d=_[0],C=_[1];return u.useEffect(function(){C((0,i.detectFlexGapSupported)())},[]),d};a.default=l},40784:function(r,a,n){"use strict";var f=n(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.detectFlexGapSupported=a.canUseDocElement=void 0,Object.defineProperty(a,"isStyleSupport",{enumerable:!0,get:function(){return o.isStyleSupport}});var c=f(n(24061)),o=n(92307),u=function(){return(0,c.default)()&&window.document.documentElement};a.canUseDocElement=u;var i,l=function(){if(!u())return!1;if(i!==void 0)return i;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),i=e.scrollHeight===1,document.body.removeChild(e),i};a.detectFlexGapSupported=l},1777:function(r,a,n){"use strict";var f=n(72556).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;var c=f(n(79685)),o=n(99403);function u(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=[];return c.default.Children.forEach(i,function(e){e==null&&!l.keepEmpty||(Array.isArray(e)?s=s.concat(u(e)):(0,o.isFragment)(e)&&e.props?s=s.concat(u(e.props.children,l)):s.push(e))}),s}},92307:function(r,a,n){"use strict";var f=n(72556).default;Object.defineProperty(a,"__esModule",{value:!0}),a.isStyleSupport=i;var c=f(n(24061)),o=function(s){if((0,c.default)()&&window.document.documentElement){var e=Array.isArray(s)?s:[s],_=window.document.documentElement;return e.some(function(d){return d in _.style})}return!1},u=function(s,e){if(!o(s))return!1;var _=document.createElement("div"),d=_.style[s];return _.style[s]=e,_.style[s]!==d};function i(l,s){return!Array.isArray(l)&&s!==void 0?u(l,s):o(l)}},98642:function(r,a,n){var f=n(55839);function c(o){if(Array.isArray(o))return f(o)}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports},16141:function(r){function a(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},65155:function(r){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},38046:function(r,a,n){var f=n(87140);function c(o,u){if(o==null)return{};var i=f(o,u),l,s;if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);for(s=0;s<e.length;s++)l=e[s],!(u.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(o,l)&&(i[l]=o[l])}return i}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports},87140:function(r){function a(n,f){if(n==null)return{};var c={},o=Object.keys(n),u,i;for(i=0;i<o.length;i++)u=o[i],!(f.indexOf(u)>=0)&&(c[u]=n[u]);return c}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},70300:function(r,a,n){var f=n(98642),c=n(16141),o=n(53060),u=n(65155);function i(l){return f(l)||c(l)||o(l)||u()}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
