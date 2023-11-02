"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6409],{30527:function(T,s,t){var E=t(12309),v=t(89043),c=t(25201),u=t(10582),d=t(50959),m=t(84875),M=t.n(m),p=t(65911),b=t(41483),h=t(61257),_=t(29360),P=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,h.U)("#1890ff");var C=d.forwardRef(function(y,A){var O,e=y.className,a=y.icon,n=y.spin,i=y.rotate,o=y.tabIndex,r=y.onClick,f=y.twoToneColor,g=(0,u.Z)(y,P),D=d.useContext(p.Z),l=D.prefixCls,x=l===void 0?"anticon":l,B=D.rootClassName,R=M()(B,x,(O={},(0,c.Z)(O,"".concat(x,"-").concat(a.name),!!a.name),(0,c.Z)(O,"".concat(x,"-spin"),!!n||a.name==="loading"),O),e),L=o;L===void 0&&r&&(L=-1);var K=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,U=(0,_.H9)(f),I=(0,v.Z)(U,2),W=I[0],Z=I[1];return d.createElement("span",(0,E.Z)((0,E.Z)({role:"img","aria-label":a.name},g),{},{ref:A,tabIndex:L,onClick:r,className:R}),d.createElement(b.Z,{icon:a,primaryColor:W,secondaryColor:Z,style:K}))});C.displayName="AntdIcon",C.getTwoToneColor=h.m,C.setTwoToneColor=h.U,s.Z=C},65911:function(T,s,t){var E=t(50959),v=(0,E.createContext)({});s.Z=v},41483:function(T,s,t){var E=t(10582),v=t(12309),c=t(29360),u=["icon","className","onClick","style","primaryColor","secondaryColor"],d={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function m(b){var h=b.primaryColor,_=b.secondaryColor;d.primaryColor=h,d.secondaryColor=_||(0,c.pw)(h),d.calculated=!!_}function M(){return(0,v.Z)({},d)}var p=function(h){var _=h.icon,P=h.className,C=h.onClick,y=h.style,A=h.primaryColor,O=h.secondaryColor,e=(0,E.Z)(h,u),a=d;if(A&&(a={primaryColor:A,secondaryColor:O||(0,c.pw)(A)}),(0,c.C3)(),(0,c.Kp)((0,c.r)(_),"icon should be icon definiton, but got ".concat(_)),!(0,c.r)(_))return null;var n=_;return n&&typeof n.icon=="function"&&(n=(0,v.Z)((0,v.Z)({},n),{},{icon:n.icon(a.primaryColor,a.secondaryColor)})),(0,c.R_)(n.icon,"svg-".concat(n.name),(0,v.Z)({className:P,onClick:C,style:y,"data-icon":n.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},e))};p.displayName="IconReact",p.getTwoToneColors=M,p.setTwoToneColors=m,s.Z=p},61257:function(T,s,t){t.d(s,{U:function(){return u},m:function(){return d}});var E=t(89043),v=t(41483),c=t(29360);function u(m){var M=(0,c.H9)(m),p=(0,E.Z)(M,2),b=p[0],h=p[1];return v.Z.setTwoToneColors({primaryColor:b,secondaryColor:h})}function d(){var m=v.Z.getTwoToneColors();return m.calculated?[m.primaryColor,m.secondaryColor]:m.primaryColor}},2263:function(T,s,t){t.d(s,{Z:function(){return M}});var E=t(12309),v=t(50959),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},u=c,d=t(30527),m=function(b,h){return v.createElement(d.Z,(0,E.Z)((0,E.Z)({},b),{},{ref:h,icon:u}))};m.displayName="CopyOutlined";var M=v.forwardRef(m)},29360:function(T,s,t){t.d(s,{C3:function(){return a},H9:function(){return A},Kp:function(){return h},R_:function(){return C},pw:function(){return y},r:function(){return _},vD:function(){return O}});var E=t(12309),v=t(26407),c=t(56088),u=t(50959),d=t(61045),m=t(90613),M=t(65911),p=t(47638),b=t.n(p);function h(n,i){(0,d.ZP)(n,"[@ant-design/icons] ".concat(i))}function _(n){return(0,v.Z)(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&((0,v.Z)(n.icon)==="object"||typeof n.icon=="function")}function P(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(i,o){var r=n[o];switch(o){case"class":i.className=r,delete i.class;break;default:delete i[o],i[b()(o)]=r}return i},{})}function C(n,i,o){return o?u.createElement(n.tag,(0,E.Z)((0,E.Z)({key:i},P(n.attrs)),o),(n.children||[]).map(function(r,f){return C(r,"".concat(i,"-").concat(n.tag,"-").concat(f))})):u.createElement(n.tag,(0,E.Z)({key:i},P(n.attrs)),(n.children||[]).map(function(r,f){return C(r,"".concat(i,"-").concat(n.tag,"-").concat(f))}))}function y(n){return(0,c.generate)(n)[0]}function A(n){return n?Array.isArray(n)?n:[n]:[]}var O={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},e=`
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
`,a=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e,o=(0,u.useContext)(M.Z),r=o.csp;(0,u.useEffect)(function(){(0,m.hq)(i,"@ant-design-icons",{prepend:!0,csp:r})},[])}},96448:function(T,s,t){t.r(s);var E=t(50959),v=t(93716),c=t(11527),u="\u57FA\u4E8E ant-design \u7684 React UI \u7EC4\u4EF6\u5E93\u3002 \u4E3B\u8981\u7528\u4E8E\u4E2D\uFF0C\u540E\u53F0\u4EA7\u54C1\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6EE1\u8DB3\u66F4\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u6709\u57FA\u4E8E\u539F\u751F javascript \u5B9E\u73B0\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4F8B\u5982ContextMenu\uFF0CKeyEventListener\u7B49.";s.default=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(v.Z,{text:u,title:"\u590D\u5236\u8BE5\u6587\u672C"}),(0,c.jsx)("p",{children:u})]})}},89463:function(T,s,t){t.r(s);var E=t(50959),v=t(93716),c=t(11527),u="\u57FA\u4E8E ant-design \u7684 React UI \u7EC4\u4EF6\u5E93\u3002 \u4E3B\u8981\u7528\u4E8E\u4E2D\uFF0C\u540E\u53F0\u4EA7\u54C1\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6EE1\u8DB3\u66F4\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u6709\u57FA\u4E8E\u539F\u751F javascript \u5B9E\u73B0\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4F8B\u5982ContextMenu\uFF0CKeyEventListener\u7B49.";s.default=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(v.Z,{text:u,button:(0,c.jsx)("a",{children:"\u590D\u5236\u6587\u672C"}),hideTooltip:!0}),(0,c.jsx)("p",{children:u})]})}},93716:function(T,s,t){t.d(s,{Z:function(){return A}});var E=t(82548),v=t(58570),c=t(28152),u=t.n(c),d=t(51317),m=t(96169),M=t(50959),p=t(2263),b=t(84875),h=t.n(b),_=t(94151),P=t.n(_),C=t(11527),y=function(e){var a=e.button,n=a===void 0?(0,C.jsx)(p.Z,{className:"dtc-copy__default-icon"}):a,i=e.text,o=e.title,r=o===void 0?"\u590D\u5236":o,f=e.hideTooltip,g=e.style,D=e.className,l=e.onCopy,x=l===void 0?function(){return m.default.success("\u590D\u5236\u6210\u529F")}:l,B=P()(),R=u()(B,2),L=R[0],K=R[1],U=function(){K(i),x(i)},I=function(){return(0,C.jsx)("span",{className:h()(["dtc-copy",D]),style:g,onClick:function(){return U()},children:n})};return f?I():(0,C.jsx)(v.default,{placement:"right",title:r,children:I()})},A=y},82489:function(T,s,t){t.r(s)},54225:function(T,s,t){var E=t(24511).default;Object.defineProperty(s,"__esModule",{value:!0}),s.cloneElement=d,s.isValidElement=void 0,s.replaceElement=u;var v=E(t(50959)),c=v.isValidElement;s.isValidElement=c;function u(m,M,p){return c(m)?v.cloneElement(m,typeof p=="function"?p(m.props||{}):p):M}function d(m,M){return u(m,m,M)}},29081:function(T,s){Object.defineProperty(s,"__esModule",{value:!0}),s.tupleNum=s.tuple=void 0;var t=function(){for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];return u};s.tuple=t;var E=function(){for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];return u};s.tupleNum=E},51317:function(T,s,t){t(20072),t(82489)},89471:function(T,s,t){t.d(s,{Z:function(){return E}});function E(v,c){for(var u=v,d=0;d<c.length;d+=1){if(u==null)return;u=u[c[d]]}return u}},31024:function(T,s,t){t.d(s,{Z:function(){return m}});var E=t(12309),v=t(36014),c=t(11631),u=t(89471);function d(_,P,C,y){if(!P.length)return C;var A=(0,c.Z)(P),O=A[0],e=A.slice(1),a;return!_&&typeof O=="number"?a=[]:Array.isArray(_)?a=(0,v.Z)(_):a=(0,E.Z)({},_),y&&C===void 0&&e.length===1?delete a[O][e[0]]:a[O]=d(a[O],e,C,y),a}function m(_,P,C){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return P.length&&y&&C===void 0&&!(0,u.Z)(_,P.slice(0,-1))?_:d(_,P,C,y)}function M(_){return _typeof(_)==="object"&&_!==null&&Object.getPrototypeOf(_)===Object.prototype}function p(_){return Array.isArray(_)?[]:{}}var b=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function h(){for(var _=arguments.length,P=new Array(_),C=0;C<_;C++)P[C]=arguments[C];var y=p(P[0]);return P.forEach(function(A){function O(e,a){var n=new Set(a),i=get(A,e),o=Array.isArray(i);if(o||M(i)){if(!n.has(i)){n.add(i);var r=get(y,e);o?y=m(y,e,[]):(!r||_typeof(r)!=="object")&&(y=m(y,e,p(i))),b(i).forEach(function(f){O([].concat(_toConsumableArray(e),[f]),n)})}}else y=m(y,e,i)}O([])}),y}},94151:function(T,s,t){var E=this&&this.__awaiter||function(e,a,n,i){return new(n||(n=Promise))(function(o,r){function f(l){try{D(i.next(l))}catch(x){r(x)}}function g(l){try{D(i.throw(l))}catch(x){r(x)}}function D(l){l.done?o(l.value):new n(function(x){x(l.value)}).then(f,g)}D((i=i.apply(e,a||[])).next())})},v=this&&this.__generator||function(e,a){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,f;return f={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function g(l){return function(x){return D([l,x])}}function D(l){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,o&&(r=l[0]&2?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){n.label=l[1];break}if(l[0]===6&&n.label<r[1]){n.label=r[1],r=l;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(l);break}r[2]&&n.ops.pop(),n.trys.pop();continue}l=a.call(e,n)}catch(x){l=[6,x],o=0}finally{i=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},c=this&&this.__values||function(e){var a=typeof Symbol=="function"&&e[Symbol.iterator],n=0;return a?a.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},u=this&&this.__read||function(e,a){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var i=n.call(e),o,r=[],f;try{for(;(a===void 0||a-- >0)&&!(o=i.next()).done;)r.push(o.value)}catch(g){f={error:g}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(f)throw f.error}}return r},d=this;Object.defineProperty(s,"__esModule",{value:!0});var m=t(50959),M=function(e){return Object.prototype.hasOwnProperty.call(e,"clipboardData")},p=function(e){return M(e)?e.clipboardData:null},b=function(e){return typeof e=="object"&&typeof e.clipboard=="object"},h=new Error("NotAllowed"),_=function(e){for(var a,n,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];try{for(var r=c(i),f=r.next();!f.done;f=r.next()){var g=f.value;e.style.setProperty(g,"0")}}catch(D){a={error:D}}finally{try{f&&!f.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}},P=function(){var e=document.createElement("textarea");return e.setAttribute("cols","0"),e.setAttribute("rows","0"),_(e,"border-width","bottom","margin-left","margin-top","outline-width","padding-bottom","padding-left","padding-right","padding-top","right"),e.style.setProperty("box-sizing","border-box"),e.style.setProperty("height","1px"),e.style.setProperty("margin-bottom","-1px"),e.style.setProperty("margin-right","-1px"),e.style.setProperty("max-height","1px"),e.style.setProperty("max-width","1px"),e.style.setProperty("min-height","1px"),e.style.setProperty("min-width","1px"),e.style.setProperty("outline-color","transparent"),e.style.setProperty("position","absolute"),e.style.setProperty("width","1px"),document.body.appendChild(e),e},C=function(e){e.parentNode.removeChild(e)},y=function(){var e=P();e.focus();var a=document.execCommand("paste");if(!a)throw C(e),h;var n=e.value;return C(e),n},A=function(e){var a=P();a.value=e,a.select();var n=document.execCommand("copy");if(C(a),!n)throw h},O=function(){var e=u(m.useState(""),2),a=e[0],n=e[1];m.useEffect(function(){if(b(navigator)){var o=function(f){var g=f.clipboardData,D=g||p(window)||null;if(D){var l=D.getData("text/plain");a!==l&&n(l)}};return navigator.clipboard.addEventListener("copy",o),navigator.clipboard.addEventListener("cut",o),function(){b(navigator)&&(navigator.clipboard.removeEventListener("copy",o),navigator.clipboard.removeEventListener("cut",o))}}var r=function(){try{var f=document.getSelection();f&&n(f.toString())}catch(g){}};return document.addEventListener("copy",r),document.addEventListener("cut",r),function(){document.removeEventListener("copy",r),document.removeEventListener("cut",r)}},[a]);var i=m.useCallback(function(o){return E(d,void 0,void 0,function(){var r,f;return v(this,function(g){switch(g.label){case 0:return g.trys.push([0,1,,6]),A(o),n(o),[3,6];case 1:if(r=g.sent(),!b(navigator))return[3,5];g.label=2;case 2:return g.trys.push([2,4,,5]),[4,navigator.clipboard.writeText(o)];case 3:return g.sent(),n(o),[3,5];case 4:return f=g.sent(),[3,5];case 5:return[3,6];case 6:return[2]}})})},[]);return m.useLayoutEffect(function(){try{var o=y();a!==o&&n(o)}catch(r){b(navigator)&&function(){return E(d,void 0,void 0,function(){var f,g;return v(this,function(D){switch(D.label){case 0:return D.trys.push([0,2,,3]),[4,navigator.clipboard.readText()];case 1:return f=D.sent(),a!==f&&n(f),[3,3];case 2:return g=D.sent(),[3,3];case 3:return[2]}})})}()}},[a]),[a,i]};s.default=O,T.exports=O,T.exports.default=O}}]);
