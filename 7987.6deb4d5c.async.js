"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7987],{87987:function(qe,ue,C){C.d(ue,{i:function(){return Ke}});var a=C(79685);var u=function(){return u=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},u.apply(this,arguments)};function R(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var fe=typeof C.g=="object"&&C.g&&C.g.Object===Object&&C.g,se=fe,ve=typeof self=="object"&&self&&self.Object===Object&&self,he=se||ve||Function("return this")(),ee=he,ge=ee.Symbol,M=ge,te=Object.prototype,be=te.hasOwnProperty,pe=te.toString,P=M?M.toStringTag:void 0;function ye(e){var t=be.call(e,P),n=e[P];try{e[P]=void 0;var r=!0}catch(c){}var i=pe.call(e);return r&&(t?e[P]=n:delete e[P]),i}var Te=Object.prototype,me=Te.toString;function Se(e){return me.call(e)}var we="[object Null]",Ee="[object Undefined]",re=M?M.toStringTag:void 0;function Le(e){return e==null?e===void 0?Ee:we:re&&re in Object(e)?ye(e):Se(e)}function He(e){return e!=null&&typeof e=="object"}var Oe="[object Symbol]";function xe(e){return typeof e=="symbol"||He(e)&&Le(e)==Oe}var _e=/\s/;function je(e){for(var t=e.length;t--&&_e.test(e.charAt(t)););return t}var Ce=/^\s+/;function Ie(e){return e&&e.slice(0,je(e)+1).replace(Ce,"")}function N(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ne=0/0,Re=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,We=/^0o[0-7]+$/i,Me=parseInt;function ie(e){if(typeof e=="number")return e;if(xe(e))return ne;if(N(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=N(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ie(e);var n=Pe.test(e);return n||We.test(e)?Me(e.slice(2),n?2:8):Re.test(e)?ne:+e}var Ne=function(){return ee.Date.now()},V=Ne,Ae="Expected a function",De=Math.max,$e=Math.min;function oe(e,t,n){var r,i,c,o,l,h,g=0,y=!1,p=!1,d=!0;if(typeof e!="function")throw new TypeError(Ae);t=ie(t)||0,N(n)&&(y=!!n.leading,p="maxWait"in n,c=p?De(ie(n.maxWait)||0,t):c,d="trailing"in n?!!n.trailing:d);function s(v){var E=r,m=i;return r=i=void 0,g=v,o=e.apply(m,E),o}function H(v){return g=v,l=setTimeout(_,t),y?s(v):o}function O(v){var E=v-h,m=v-g,A=t-E;return p?$e(A,c-m):A}function x(v){var E=v-h,m=v-g;return h===void 0||E>=t||E<0||p&&m>=c}function _(){var v=V();if(x(v))return W(v);l=setTimeout(_,O(v))}function W(v){return l=void 0,d&&r?s(v):(r=i=void 0,o)}function f(){l!==void 0&&clearTimeout(l),g=0,r=h=i=l=void 0}function I(){return l===void 0?o:W(V())}function L(){var v=V(),E=x(v);if(r=arguments,i=this,h=v,E){if(l===void 0)return H(h);if(p)return clearTimeout(l),l=setTimeout(_,t),s(h)}return l===void 0&&(l=setTimeout(_,t)),o}return L.cancel=f,L.flush=I,L}var ke="Expected a function";function Be(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(ke);return N(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),oe(e,t,{leading:r,maxWait:t,trailing:i})}function Ve(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Ye=".virtuallist .ant-table-tbody>tr>td>div{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;vertical-align:middle;overflow:hidden;text-overflow:ellipsis;width:100%}.virtuallist .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell>div{overflow:inherit}.ant-table-bordered .virtuallist>table>.ant-table-tbody>tr>td{border-right:1px solid #f0f0f0}";Ve(Ye);var Y="vtable",T=new Map,le,ae={rowHeight:0,curScrollTop:0,totalLen:0};function ze(e,t){var n=t.curScrollTop,r=t.rowHeight,i=t.totalLen,c=t.ifScrollTopClear,o=e.curScrollTop;switch(t.type){case"changeTrs":return u(u({},e),{curScrollTop:n});case"initHeight":return u(u({},e),{rowHeight:r});case"changeTotalLen":return i===0&&(o=0),u(u({},e),{totalLen:i,curScrollTop:o});case"reset":return u(u({},e),{curScrollTop:c?0:e.curScrollTop});default:throw new Error}}var z=(0,a.createContext)({dispatch:void 0,renderLen:1,start:0,offsetStart:0,rowHeight:ae.rowHeight,totalLen:0,vid:Y});function Fe(e){var t=e.children,n=R(e,["children"]);return a.createElement("td",u({},n),a.createElement("div",null,t))}function Ue(e,t){var n=(0,a.useContext)(z),r=n.dispatch,i=n.rowHeight,c=n.totalLen,o=n.vid,l=e.children,h=e.style,g=R(e,["children","style"]),y=(0,a.useRef)(null);return(0,a.useEffect)(function(){var p=function(d){var s,H,O;if(!((s=d==null?void 0:d.current)===null||s===void 0)&&s.offsetHeight&&!i&&c){var x=(O=(H=d==null?void 0:d.current)===null||H===void 0?void 0:H.offsetHeight)!==null&&O!==void 0?O:0;T.set(o,u(u({},T.get(o)),{rowItemHeight:x})),r({type:"initHeight",rowHeight:x})}};p(Object.prototype.hasOwnProperty.call(t,"current")?t:y)},[y,r,i,c,t,o]),a.createElement("tr",u({},g,{ref:Object.prototype.hasOwnProperty.call(t,"current")?t:y,style:u(u({},h),{height:i||"auto",boxSizing:"border-box"})}),l)}function Ge(e){var t=e.children,n=R(e,["children"]),r=(0,a.useContext)(z),i=r.renderLen,c=r.start,o=r.dispatch,l=r.vid,h=r.totalLen,g=(0,a.useMemo)(function(){return t[1]},[t]),y=(0,a.useMemo)(function(){var d;return(d=g==null?void 0:g.length)!==null&&d!==void 0?d:0},[g]);(0,a.useEffect)(function(){h!==y&&o({type:"changeTotalLen",totalLen:y!=null?y:0})},[y,o,l,h]);var p=null;return Array.isArray(g)&&g.length?p=[t[0],g.slice(c,c+(i!=null?i:1)).map(function(d){return Array.isArray(d)?d[0]:d})]:p=t,a.createElement("tbody",u({},n),p)}function Xe(e,t){var n,r,i,c,o,l=e.style,h=e.children,g=R(e,["style","children"]),y=l.width,p=R(l,["width"]),d=t!=null?t:{},s=d.vid,H=d.scrollY,O=d.reachEnd,x=d.onScroll,_=d.resetScrollTopWhenDataChange,W=(0,a.useReducer)(ze,ae),f=W[0],I=W[1],L=(0,a.useRef)(null),v=(0,a.useRef)(null),E=(0,a.useState)((c=(i=(r=(n=h[1])===null||n===void 0?void 0:n.props)===null||r===void 0?void 0:r.data)===null||i===void 0?void 0:i.length)!==null&&c!==void 0?c:0),m=E[0],A=E[1];(0,a.useEffect)(function(){A(f.totalLen)},[f.totalLen]),(0,a.useEffect)(function(){return function(){T.delete(s)}},[s]);var ce=(0,a.useMemo)(function(){var b="auto";return f.rowHeight&&m&&(b=f.rowHeight*m),b},[f.rowHeight,m]),de=(0,a.useState)(0),D=de[0],Je=de[1];(0,a.useEffect)(function(){var b,w,j,S=0;typeof H=="string"?S=(j=(w=(b=L.current)===null||b===void 0?void 0:b.parentNode)===null||w===void 0?void 0:w.offsetHeight)!==null&&j!==void 0?j:0:S=H,S<=0&&(S=0),Je(S)},[H,ce]);var $=(0,a.useMemo)(function(){var b=1;if(f.rowHeight&&m&&D)if(D<=0)b=0;else{var w=(D/f.rowHeight|0)+1+2;b=w}return b},[f.rowHeight,m,D]),k=f.rowHeight?f.curScrollTop/f.rowHeight|0:0,F=f.rowHeight?f.curScrollTop%f.rowHeight:0;return f.curScrollTop&&f.rowHeight&&f.curScrollTop>f.rowHeight?(k-=1,F+=f.rowHeight):k=0,(0,a.useEffect)(function(){var b,w=(b=L.current)===null||b===void 0?void 0:b.parentNode;_?(w&&(w.scrollTop=0),I({type:"reset",ifScrollTopClear:!0})):I({type:"reset",ifScrollTopClear:!1}),T.has(s)&&T.set(s,u(u({},T.get(s)),{scrollNode:w}))},[m,_,s,h]),(0,a.useEffect)(function(){var b,w=Be(function(S){var U,G,X,K,J,Q,Z,Qe=(U=T.get(s))===null||U===void 0?void 0:U.scrollHeight,q=(X=(G=S==null?void 0:S.target)===null||G===void 0?void 0:G.scrollTop)!==null&&X!==void 0?X:0,B=(J=(K=S==null?void 0:S.target)===null||K===void 0?void 0:K.scrollHeight)!==null&&J!==void 0?J:0,Ze=(Z=(Q=S==null?void 0:S.target)===null||Q===void 0?void 0:Q.clientHeight)!==null&&Z!==void 0?Z:0;q===B||q+Ze>=B&&Qe!==B&&(T.set(s,u(u({},T.get(s)),{scrollHeight:B})),O&&O()),x&&x(),I({type:"changeTrs",curScrollTop:$<=m?q:0,vid:s})},60),j=(b=L==null?void 0:L.current)===null||b===void 0?void 0:b.parentNode;return j&&j.addEventListener("scroll",w),function(){j.removeEventListener("scroll",w)}},[x,O,$,m,s]),le(k,$),a.createElement("div",{className:"virtuallist",ref:L,style:{width:"100%",position:"relative",height:ce,boxSizing:"border-box",paddingTop:f.curScrollTop}},a.createElement(z.Provider,{value:{dispatch:I,rowHeight:(o=T==null?void 0:T.get(s))===null||o===void 0?void 0:o.rowItemHeight,start:k,offsetStart:F,renderLen:$,totalLen:m,vid:s}},a.createElement("table",u({},g,{ref:v,style:u(u({},p),{width:y,position:"relative",transform:"translateY(-"+F+"px)"})}),h)))}function Ke(e){var t=e.vid,n=t===void 0?Y:t,r=e.height,i=e.onReachEnd,c=e.onScroll,o=e.onListRender,l=e.debounceListRenderMS,h=e.resetTopWhenDataChange,g=h===void 0?!0:h,y=i?!1:g;return T.has(n)||T.set(n,{_id:n}),le=o?oe(function(p,d){o({start:p,renderLen:d})},l!=null?l:300):function(){},{table:function(p){return Xe(p,{vid:n,scrollY:r,reachEnd:i,onScroll:c,onListRender:o,resetScrollTopWhenDataChange:y})},body:{wrapper:Ge,row:Ue,cell:Fe}}}function et(e){var t=e.row,n=e.y,r=e.vid,i=r===void 0?Y:r;try{var c=T.get(i),o=c.scrollNode,l=c.rowItemHeight;return t?t-1>0?o.scrollTop=(t-1)*(l!=null?l:0):o.scrollTop=0:o.scrollTop=n!=null?n:0,{vid:i,rowItemHeight:l}}catch(h){return console.error("dont call scrollTo before init table"),{vid:i,rowItemHeight:-1}}}}}]);
