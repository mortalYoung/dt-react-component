(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5316],{1408:function(r,t,e){"use strict";e.r(t);var s=e(71089),n=e.n(s),o=e(75020),_=e(86516),u=e.n(_),i=e(79685),l=e(21554),a=e(63342),d=function(){var m=(0,i.useState)(0),f=u()(m,2),P=f[0],v=f[1];if(P%2)throw new Error("test error");return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:60},children:[(0,a.jsx)("button",{style:{border:"none",backgroundColor:"#1890ff",cursor:"pointer",height:32,borderRadius:4},onClick:function(){return v(function(b){return b+1})},children:"\u89E6\u53D1\u5F02\u5E38"}),(0,a.jsx)("h2",{children:"hello, dt-react-component"})]})};t.default=function(){return(0,a.jsx)(l.Z,{onError:function(m){return o.default.error("\u6355\u83B7\u5230\u9519\u8BEF\uFF1A"+m.message)},children:(0,a.jsx)(d,{})})}},62653:function(r,t,e){"use strict";e.r(t);var s=e(71089),n=e.n(s),o=e(75020),_=e(86516),u=e.n(_),i=e(79685),l=e(21554),a=e(63342),d=function(){var f=(0,i.useState)(0),P=u()(f,2),v=P[0],D=P[1];if(v%2)throw new Error("test error");return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:60},children:[(0,a.jsx)("button",{style:{border:"none",backgroundColor:"#1890ff",cursor:"pointer",height:32,borderRadius:4},onClick:function(){return D(function(M){return M+1})},children:"\u89E6\u53D1\u5F02\u5E38"}),(0,a.jsx)("h2",{children:"hello, dt-react-component"})]})},E=function(){return(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("h2",{children:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u6355\u83B7\u5F02\u5E38\u9875\u9762"})})};t.default=function(){return(0,a.jsx)(l.Z,{onError:function(f){return o.default.error("\u6355\u83B7\u5230\u9519\u8BEF\uFF1A"+f.message)},errorPage:(0,a.jsx)(E,{}),children:(0,a.jsx)(d,{})})}},21554:function(r,t,e){"use strict";e.d(t,{Z:function(){return b}});var s=e(32810),n=e.n(s),o=e(12903),_=e.n(o),u=e(70179),i=e.n(u),l=e(89822),a=e.n(l),d=e(38832),E=e.n(d),m=e(5677),f=e.n(m),P=e(79685),v=e(20911),D=e(63342),b=function(M){a()(x,M);var g=E()(x);function x(){var h;n()(this,x);for(var p=arguments.length,O=new Array(p),c=0;c<p;c++)O[c]=arguments[c];return h=g.call.apply(g,[this].concat(O)),f()(i()(h),"state",{hasError:!1}),h}return _()(x,[{key:"componentDidCatch",value:function(p,O){var c,y;this.setState({hasError:!0}),(c=(y=this.props).onError)===null||c===void 0||c.call(y,p),console.log(p),console.log(O)}},{key:"render",value:function(){var p=this.props,O=p.children,c=p.errorPage,y=c===void 0?(0,D.jsx)(v.Z,{}):c,j=this.state.hasError;return j?y:O}}],[{key:"getDerivedStateFromError",value:function(p){return{hasError:!0}}}]),x}(P.Component)},20911:function(r,t,e){"use strict";var s=e(79685),n=e(63342),o=function(){return(0,n.jsx)("div",{className:"dtc-error","data-testid":"test-error",children:(0,n.jsxs)("div",{children:["\b",(0,n.jsxs)("h2",{style:{textAlign:"center"},"data-testid":"test-error",children:["\u53D1\u73B0\u65B0\u7248\u672C\uFF0C\u8BF7",(0,n.jsx)("a",{onClick:function(){location.reload()},children:"\u5237\u65B0"}),"\u83B7\u53D6\u65B0\u7248\u672C\u3002"]}),(0,n.jsx)("h4",{style:{textAlign:"center"},children:"\u82E5\u8BE5\u63D0\u793A\u957F\u65F6\u95F4\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"})]})})};t.Z=o},1246:function(r,t,e){"use strict";e.r(t)},71089:function(r,t,e){"use strict";e(36226),e(1246)},70179:function(r){function t(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},32810:function(r){function t(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},12903:function(r,t,e){var s=e(66896);function n(_,u){for(var i=0;i<u.length;i++){var l=u[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(_,s(l.key),l)}}function o(_,u,i){return u&&n(_.prototype,u),i&&n(_,i),Object.defineProperty(_,"prototype",{writable:!1}),_}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},38832:function(r,t,e){var s=e(59785),n=e(33648),o=e(81318);function _(u){var i=n();return function(){var a=s(u),d;if(i){var E=s(this).constructor;d=Reflect.construct(a,arguments,E)}else d=a.apply(this,arguments);return o(this,d)}}r.exports=_,r.exports.__esModule=!0,r.exports.default=r.exports},59785:function(r){function t(e){return r.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r.exports.__esModule=!0,r.exports.default=r.exports,t(e)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},89822:function(r,t,e){var s=e(76017);function n(o,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(_&&_.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),_&&s(o,_)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},33648:function(r){function t(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},81318:function(r,t,e){var s=e(40765).default,n=e(70179);function o(_,u){if(u&&(s(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n(_)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},76017:function(r){function t(e,s){return r.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,_){return o.__proto__=_,o},r.exports.__esModule=!0,r.exports.default=r.exports,t(e,s)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
