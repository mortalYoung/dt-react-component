"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5382],{5382:function(De,F,m){m.r(F),m.d(F,{Popup:function(){return Q},default:function(){return ee}});var C=m(88028),b=m(69947),A=m(2595),Y=m(51282),v=m(50959),G=m(43451),$=m(94082),y=m(84875),f=m.n(y);function Q(O){var T=O.showArrow,ye=O.arrowContent,te=O.children,k=O.prefixCls,we=O.id,pe=O.overlayInnerStyle,Ce=O.className,D=O.style;return v.createElement("div",{className:f()("".concat(k,"-content"),Ce),style:D},T!==!1&&v.createElement("div",{className:"".concat(k,"-arrow"),key:"arrow"},ye),v.createElement("div",{className:"".concat(k,"-inner"),id:we,role:"tooltip",style:pe},typeof te=="function"?te():te))}var x=function(T,ye){var te=T.overlayClassName,k=T.trigger,we=k===void 0?["hover"]:k,pe=T.mouseEnterDelay,Ce=pe===void 0?0:pe,D=T.mouseLeaveDelay,Ie=D===void 0?.1:D,Be=T.overlayStyle,de=T.prefixCls,Te=de===void 0?"rc-tooltip":de,Fe=T.children,$e=T.onVisibleChange,Ne=T.afterVisibleChange,Ae=T.transitionName,Pe=T.animation,Xe=T.motion,J=T.placement,ze=J===void 0?"right":J,ne=T.align,Re=ne===void 0?{}:ne,oe=T.destroyTooltipOnHide,q=oe===void 0?!1:oe,be=T.defaultVisible,Ye=T.getTooltipContainer,je=T.overlayInnerStyle,Ue=T.arrowContent,Ke=T.overlay,Ge=T.id,Qe=T.showArrow,ie=(0,Y.Z)(T,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),Me=(0,v.useRef)(null);(0,v.useImperativeHandle)(ye,function(){return Me.current});var U=(0,A.Z)({},ie);"visible"in T&&(U.popupVisible=T.visible);var Je=function(){return v.createElement(Q,{showArrow:Qe,arrowContent:Ue,key:"content",prefixCls:Te,id:Ge,overlayInnerStyle:je},Ke)},ve=!1,Se=!1;if(typeof q=="boolean")ve=q;else if(q&&(0,b.Z)(q)==="object"){var Ee=q.keepParent;ve=Ee===!0,Se=Ee===!1}return v.createElement(G.Z,(0,C.Z)({popupClassName:te,prefixCls:Te,popup:Je,action:we,builtinPlacements:$.C,popupPlacement:ze,ref:Me,popupAlign:Re,getPopupContainer:Ye,onPopupVisibleChange:$e,afterPopupVisibleChange:Ne,popupTransitionName:Ae,popupAnimation:Pe,popupMotion:Xe,defaultPopupVisible:be,destroyPopupOnHide:ve,autoDestroy:Se,mouseLeaveDelay:Ie,popupStyle:Be,mouseEnterDelay:Ce},U),Fe)},j=(0,v.forwardRef)(x),ee=j},94082:function(De,F,m){m.d(F,{C:function(){return A}});var C={adjustX:1,adjustY:1},b=[0,0],A={left:{points:["cr","cl"],overflow:C,offset:[-4,0],targetOffset:b},right:{points:["cl","cr"],overflow:C,offset:[4,0],targetOffset:b},top:{points:["bc","tc"],overflow:C,offset:[0,-4],targetOffset:b},bottom:{points:["tc","bc"],overflow:C,offset:[0,4],targetOffset:b},topLeft:{points:["bl","tl"],overflow:C,offset:[0,-4],targetOffset:b},leftTop:{points:["tr","tl"],overflow:C,offset:[-4,0],targetOffset:b},topRight:{points:["br","tr"],overflow:C,offset:[0,-4],targetOffset:b},rightTop:{points:["tl","tr"],overflow:C,offset:[4,0],targetOffset:b},bottomRight:{points:["tr","br"],overflow:C,offset:[0,4],targetOffset:b},rightBottom:{points:["bl","br"],overflow:C,offset:[4,0],targetOffset:b},bottomLeft:{points:["tl","bl"],overflow:C,offset:[0,4],targetOffset:b},leftBottom:{points:["br","bl"],overflow:C,offset:[-4,0],targetOffset:b}},Y=null},43451:function(De,F,m){m.d(F,{Z:function(){return Dn}});var C=m(2595),b=m(88028),A=m(21953),Y=m(99044),v=m(14418),G=m(85700),$=m(82686),y=m(22481),f=m(50959),Q=m(10422),x=m(8813),j=m(42816),ee=m(31678),O=m(81966),T=m(9045),ye=m(28904),te=m(84875),k=m.n(te);function we(e,o,n){return n?e[0]===o[0]:e[0]===o[0]&&e[1]===o[1]}function pe(e,o,n){var i=e[o]||{};return(0,C.Z)((0,C.Z)({},i),n)}function Ce(e,o,n,i){for(var a=n.points,s=Object.keys(e),t=0;t<s.length;t+=1){var u=s[t];if(we(e[u].points,a,i))return"".concat(o,"-placement-").concat(u)}return""}var D=m(41171),Ie=m(51282),Be=m(3914),de=m(15794);function Te(e){var o=e.prefixCls,n=e.motion,i=e.animation,a=e.transitionName;return n||(i?{motionName:"".concat(o,"-").concat(i)}:a?{motionName:a}:null)}function Fe(e){var o=e.prefixCls,n=e.visible,i=e.zIndex,a=e.mask,s=e.maskMotion,t=e.maskAnimation,u=e.maskTransitionName;if(!a)return null;var r={};return(s||u||t)&&(r=(0,C.Z)({motionAppear:!0},Te({motion:s,prefixCls:o,transitionName:u,animation:t}))),f.createElement(de.default,(0,b.Z)({},r,{visible:n,removeOnLeave:!0}),function(l){var p=l.className;return f.createElement("div",{style:{zIndex:i},className:k()("".concat(o,"-mask"),p)})})}var $e=m(69947);function Ne(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,i)}return n}function Ae(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?Ne(Object(n),!0).forEach(function(i){Xe(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Pe(e)}function Xe(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var J,ze={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function ne(){if(J!==void 0)return J;J="";var e=document.createElement("p").style,o="Transform";for(var n in ze)n+o in e&&(J=n);return J}function Re(){return ne()?"".concat(ne(),"TransitionProperty"):"transitionProperty"}function oe(){return ne()?"".concat(ne(),"Transform"):"transform"}function q(e,o){var n=Re();n&&(e.style[n]=o,n!=="transitionProperty"&&(e.style.transitionProperty=o))}function be(e,o){var n=oe();n&&(e.style[n]=o,n!=="transform"&&(e.style.transform=o))}function Ye(e){return e.style.transitionProperty||e.style[Re()]}function je(e){var o=window.getComputedStyle(e,null),n=o.getPropertyValue("transform")||o.getPropertyValue(oe());if(n&&n!=="none"){var i=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(i[12]||i[4],0),y:parseFloat(i[13]||i[5],0)}}return{x:0,y:0}}var Ue=/matrix\((.*)\)/,Ke=/matrix3d\((.*)\)/;function Ge(e,o){var n=window.getComputedStyle(e,null),i=n.getPropertyValue("transform")||n.getPropertyValue(oe());if(i&&i!=="none"){var a,s=i.match(Ue);if(s)s=s[1],a=s.split(",").map(function(u){return parseFloat(u,10)}),a[4]=o.x,a[5]=o.y,be(e,"matrix(".concat(a.join(","),")"));else{var t=i.match(Ke)[1];a=t.split(",").map(function(u){return parseFloat(u,10)}),a[12]=o.x,a[13]=o.y,be(e,"matrix3d(".concat(a.join(","),")"))}}else be(e,"translateX(".concat(o.x,"px) translateY(").concat(o.y,"px) translateZ(0)"))}var Qe=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ie;function Me(e){var o=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=o}function U(e,o,n){var i=n;if(Pe(o)==="object"){for(var a in o)o.hasOwnProperty(a)&&U(e,a,o[a]);return}if(typeof i!="undefined"){typeof i=="number"&&(i="".concat(i,"px")),e.style[o]=i;return}return ie(e,o)}function Je(e){var o,n,i,a=e.ownerDocument,s=a.body,t=a&&a.documentElement;return o=e.getBoundingClientRect(),n=Math.floor(o.left),i=Math.floor(o.top),n-=t.clientLeft||s.clientLeft||0,i-=t.clientTop||s.clientTop||0,{left:n,top:i}}function ve(e,o){var n=e["page".concat(o?"Y":"X","Offset")],i="scroll".concat(o?"Top":"Left");if(typeof n!="number"){var a=e.document;n=a.documentElement[i],typeof n!="number"&&(n=a.body[i])}return n}function Se(e){return ve(e)}function Ee(e){return ve(e,!0)}function he(e){var o=Je(e),n=e.ownerDocument,i=n.defaultView||n.parentWindow;return o.left+=Se(i),o.top+=Ee(i),o}function qe(e){return e!=null&&e==e.window}function dt(e){return qe(e)?e.document:e.nodeType===9?e:e.ownerDocument}function Xt(e,o,n){var i=n,a="",s=dt(e);return i=i||s.defaultView.getComputedStyle(e,null),i&&(a=i.getPropertyValue(o)||i[o]),a}var zt=new RegExp("^(".concat(Qe,")(?!px)[a-z%]+$"),"i"),Yt=/^(top|right|bottom|left)$/,_e="currentStyle",et="runtimeStyle",re="left",jt="px";function Ut(e,o){var n=e[_e]&&e[_e][o];if(zt.test(n)&&!Yt.test(o)){var i=e.style,a=i[re],s=e[et][re];e[et][re]=e[_e][re],i[re]=o==="fontSize"?"1em":n||0,n=i.pixelLeft+jt,i[re]=a,e[et][re]=s}return n===""?"auto":n}typeof window!="undefined"&&(ie=window.getComputedStyle?Xt:Ut);function Ve(e,o){return e==="left"?o.useCssRight?"right":e:o.useCssBottom?"bottom":e}function vt(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function ht(e,o,n){U(e,"position")==="static"&&(e.style.position="relative");var i=-999,a=-999,s=Ve("left",n),t=Ve("top",n),u=vt(s),r=vt(t);s!=="left"&&(i=999),t!=="top"&&(a=999);var l="",p=he(e);("left"in o||"top"in o)&&(l=Ye(e)||"",q(e,"none")),"left"in o&&(e.style[u]="",e.style[s]="".concat(i,"px")),"top"in o&&(e.style[r]="",e.style[t]="".concat(a,"px")),Me(e);var g=he(e),h={};for(var c in o)if(o.hasOwnProperty(c)){var d=Ve(c,n),P=c==="left"?i:a,S=p[c]-g[c];d===c?h[d]=P+S:h[d]=P-S}U(e,h),Me(e),("left"in o||"top"in o)&&q(e,l);var M={};for(var E in o)if(o.hasOwnProperty(E)){var N=Ve(E,n),H=o[E]-p[E];E===N?M[N]=h[N]+H:M[N]=h[N]-H}U(e,M)}function Kt(e,o){var n=he(e),i=je(e),a={x:i.x,y:i.y};"left"in o&&(a.x=i.x+o.left-n.left),"top"in o&&(a.y=i.y+o.top-n.top),Ge(e,a)}function Gt(e,o,n){if(n.ignoreShake){var i=he(e),a=i.left.toFixed(0),s=i.top.toFixed(0),t=o.left.toFixed(0),u=o.top.toFixed(0);if(a===t&&s===u)return}n.useCssRight||n.useCssBottom?ht(e,o,n):n.useCssTransform&&oe()in document.body.style?Kt(e,o):ht(e,o,n)}function tt(e,o){for(var n=0;n<e.length;n++)o(e[n])}function mt(e){return ie(e,"boxSizing")==="border-box"}var Qt=["margin","border","padding"],nt=-1,Jt=2,ot=1,qt=0;function _t(e,o,n){var i={},a=e.style,s;for(s in o)o.hasOwnProperty(s)&&(i[s]=a[s],a[s]=o[s]);n.call(e);for(s in o)o.hasOwnProperty(s)&&(a[s]=i[s])}function Ze(e,o,n){var i=0,a,s,t;for(s=0;s<o.length;s++)if(a=o[s],a)for(t=0;t<n.length;t++){var u=void 0;a==="border"?u="".concat(a).concat(n[t],"Width"):u=a+n[t],i+=parseFloat(ie(e,u))||0}return i}var X={getParent:function(o){var n=o;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};tt(["Width","Height"],function(e){X["doc".concat(e)]=function(o){var n=o.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],X["viewport".concat(e)](n))},X["viewport".concat(e)]=function(o){var n="client".concat(e),i=o.document,a=i.body,s=i.documentElement,t=s[n];return i.compatMode==="CSS1Compat"&&t||a&&a[n]||t}});function gt(e,o,n){var i=n;if(qe(e))return o==="width"?X.viewportWidth(e):X.viewportHeight(e);if(e.nodeType===9)return o==="width"?X.docWidth(e):X.docHeight(e);var a=o==="width"?["Left","Right"]:["Top","Bottom"],s=Math.floor(o==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),t=mt(e),u=0;(s==null||s<=0)&&(s=void 0,u=ie(e,o),(u==null||Number(u)<0)&&(u=e.style[o]||0),u=Math.floor(parseFloat(u))||0),i===void 0&&(i=t?ot:nt);var r=s!==void 0||t,l=s||u;return i===nt?r?l-Ze(e,["border","padding"],a):u:r?i===ot?l:l+(i===Jt?-Ze(e,["border"],a):Ze(e,["margin"],a)):u+Ze(e,Qt.slice(i),a)}var en={position:"absolute",visibility:"hidden",display:"block"};function yt(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];var i,a=o[0];return a.offsetWidth!==0?i=gt.apply(void 0,o):_t(a,en,function(){i=gt.apply(void 0,o)}),i}tt(["width","height"],function(e){var o=e.charAt(0).toUpperCase()+e.slice(1);X["outer".concat(o)]=function(i,a){return i&&yt(i,e,a?qt:ot)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];X[e]=function(i,a){var s=a;if(s!==void 0){if(i){var t=mt(i);return t&&(s+=Ze(i,["padding","border"],n)),U(i,e,s)}return}return i&&yt(i,e,nt)}});function wt(e,o){for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n]);return e}var w={getWindow:function(o){if(o&&o.document&&o.setTimeout)return o;var n=o.ownerDocument||o;return n.defaultView||n.parentWindow},getDocument:dt,offset:function(o,n,i){if(typeof n!="undefined")Gt(o,n,i||{});else return he(o)},isWindow:qe,each:tt,css:U,clone:function(o){var n,i={};for(n in o)o.hasOwnProperty(n)&&(i[n]=o[n]);var a=o.overflow;if(a)for(n in o)o.hasOwnProperty(n)&&(i.overflow[n]=o.overflow[n]);return i},mix:wt,getWindowScrollLeft:function(o){return Se(o)},getWindowScrollTop:function(o){return Ee(o)},merge:function(){for(var o={},n=0;n<arguments.length;n++)w.mix(o,n<0||arguments.length<=n?void 0:arguments[n]);return o},viewportWidth:0,viewportHeight:0};wt(w,X);var it=w.getParent;function rt(e){if(w.isWindow(e)||e.nodeType===9)return null;var o=w.getDocument(e),n=o.body,i,a=w.css(e,"position"),s=a==="fixed"||a==="absolute";if(!s)return e.nodeName.toLowerCase()==="html"?null:it(e);for(i=it(e);i&&i!==n&&i.nodeType!==9;i=it(i))if(a=w.css(i,"position"),a!=="static")return i;return null}var Ct=w.getParent;function tn(e){if(w.isWindow(e)||e.nodeType===9)return!1;var o=w.getDocument(e),n=o.body,i=null;for(i=Ct(e);i&&i!==n&&i!==o;i=Ct(i)){var a=w.css(i,"position");if(a==="fixed")return!0}return!1}function at(e,o){for(var n={left:0,right:1/0,top:0,bottom:1/0},i=rt(e),a=w.getDocument(e),s=a.defaultView||a.parentWindow,t=a.body,u=a.documentElement;i;){if((navigator.userAgent.indexOf("MSIE")===-1||i.clientWidth!==0)&&i!==t&&i!==u&&w.css(i,"overflow")!=="visible"){var r=w.offset(i);r.left+=i.clientLeft,r.top+=i.clientTop,n.top=Math.max(n.top,r.top),n.right=Math.min(n.right,r.left+i.clientWidth),n.bottom=Math.min(n.bottom,r.top+i.clientHeight),n.left=Math.max(n.left,r.left)}else if(i===t||i===u)break;i=rt(i)}var l=null;if(!w.isWindow(e)&&e.nodeType!==9){l=e.style.position;var p=w.css(e,"position");p==="absolute"&&(e.style.position="fixed")}var g=w.getWindowScrollLeft(s),h=w.getWindowScrollTop(s),c=w.viewportWidth(s),d=w.viewportHeight(s),P=u.scrollWidth,S=u.scrollHeight,M=window.getComputedStyle(t);if(M.overflowX==="hidden"&&(P=s.innerWidth),M.overflowY==="hidden"&&(S=s.innerHeight),e.style&&(e.style.position=l),o||tn(e))n.left=Math.max(n.left,g),n.top=Math.max(n.top,h),n.right=Math.min(n.right,g+c),n.bottom=Math.min(n.bottom,h+d);else{var E=Math.max(P,g+c);n.right=Math.min(n.right,E);var N=Math.max(S,h+d);n.bottom=Math.min(n.bottom,N)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function nn(e,o,n,i){var a=w.clone(e),s={width:o.width,height:o.height};return i.adjustX&&a.left<n.left&&(a.left=n.left),i.resizeWidth&&a.left>=n.left&&a.left+s.width>n.right&&(s.width-=a.left+s.width-n.right),i.adjustX&&a.left+s.width>n.right&&(a.left=Math.max(n.right-s.width,n.left)),i.adjustY&&a.top<n.top&&(a.top=n.top),i.resizeHeight&&a.top>=n.top&&a.top+s.height>n.bottom&&(s.height-=a.top+s.height-n.bottom),i.adjustY&&a.top+s.height>n.bottom&&(a.top=Math.max(n.bottom-s.height,n.top)),w.mix(a,s)}function st(e){var o,n,i;if(!w.isWindow(e)&&e.nodeType!==9)o=w.offset(e),n=w.outerWidth(e),i=w.outerHeight(e);else{var a=w.getWindow(e);o={left:w.getWindowScrollLeft(a),top:w.getWindowScrollTop(a)},n=w.viewportWidth(a),i=w.viewportHeight(a)}return o.width=n,o.height=i,o}function Tt(e,o){var n=o.charAt(0),i=o.charAt(1),a=e.width,s=e.height,t=e.left,u=e.top;return n==="c"?u+=s/2:n==="b"&&(u+=s),i==="c"?t+=a/2:i==="r"&&(t+=a),{left:t,top:u}}function He(e,o,n,i,a){var s=Tt(o,n[1]),t=Tt(e,n[0]),u=[t.left-s.left,t.top-s.top];return{left:Math.round(e.left-u[0]+i[0]-a[0]),top:Math.round(e.top-u[1]+i[1]-a[1])}}function Pt(e,o,n){return e.left<n.left||e.left+o.width>n.right}function bt(e,o,n){return e.top<n.top||e.top+o.height>n.bottom}function on(e,o,n){return e.left>n.right||e.left+o.width<n.left}function rn(e,o,n){return e.top>n.bottom||e.top+o.height<n.top}function Le(e,o,n){var i=[];return w.each(e,function(a){i.push(a.replace(o,function(s){return n[s]}))}),i}function ke(e,o){return e[o]=-e[o],e}function Mt(e,o){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*o:n=parseInt(e,10),n||0}function St(e,o){e[0]=Mt(e[0],o.width),e[1]=Mt(e[1],o.height)}function Et(e,o,n,i){var a=n.points,s=n.offset||[0,0],t=n.targetOffset||[0,0],u=n.overflow,r=n.source||e;s=[].concat(s),t=[].concat(t),u=u||{};var l={},p=0,g=!!(u&&u.alwaysByViewport),h=at(r,g),c=st(r);St(s,c),St(t,o);var d=He(c,o,a,s,t),P=w.merge(c,d);if(h&&(u.adjustX||u.adjustY)&&i){if(u.adjustX&&Pt(d,c,h)){var S=Le(a,/[lr]/gi,{l:"r",r:"l"}),M=ke(s,0),E=ke(t,0),N=He(c,o,S,M,E);on(N,c,h)||(p=1,a=S,s=M,t=E)}if(u.adjustY&&bt(d,c,h)){var H=Le(a,/[tb]/gi,{t:"b",b:"t"}),W=ke(s,1),I=ke(t,1),ae=He(c,o,H,W,I);rn(ae,c,h)||(p=1,a=H,s=W,t=I)}p&&(d=He(c,o,a,s,t),w.mix(P,d));var B=Pt(d,c,h),z=bt(d,c,h);if(B||z){var K=a;B&&(K=Le(a,/[lr]/gi,{l:"r",r:"l"})),z&&(K=Le(a,/[tb]/gi,{t:"b",b:"t"})),a=K,s=n.offset||[0,0],t=n.targetOffset||[0,0]}l.adjustX=u.adjustX&&B,l.adjustY=u.adjustY&&z,(l.adjustX||l.adjustY)&&(P=nn(d,c,h,l))}return P.width!==c.width&&w.css(r,"width",w.width(r)+P.width-c.width),P.height!==c.height&&w.css(r,"height",w.height(r)+P.height-c.height),w.offset(r,{left:P.left,top:P.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:a,offset:s,targetOffset:t,overflow:l}}function an(e,o){var n=at(e,o),i=st(e);return!n||i.left+i.width<=n.left||i.top+i.height<=n.top||i.left>=n.right||i.top>=n.bottom}function ut(e,o,n){var i=n.target||o,a=st(i),s=!an(i,n.overflow&&n.overflow.alwaysByViewport);return Et(e,a,n,s)}ut.__getOffsetParent=rt,ut.__getVisibleRectForElement=at;function sn(e,o,n){var i,a,s=w.getDocument(e),t=s.defaultView||s.parentWindow,u=w.getWindowScrollLeft(t),r=w.getWindowScrollTop(t),l=w.viewportWidth(t),p=w.viewportHeight(t);"pageX"in o?i=o.pageX:i=u+o.clientX,"pageY"in o?a=o.pageY:a=r+o.clientY;var g={left:i,top:a,width:0,height:0},h=i>=0&&i<=u+l&&a>=0&&a<=r+p,c=[n.points[0],"cc"];return Et(e,g,Ae(Ae({},n),{},{points:c}),h)}var Hn=null,un=m(85827),ln=m(32744),lt=m(39515),fn=function(e,o){var n=f.useRef(!1),i=f.useRef(null);function a(){window.clearTimeout(i.current)}function s(t){if(a(),!n.current||t===!0){if(e(t)===!1)return;n.current=!0,i.current=window.setTimeout(function(){n.current=!1},o)}else i.current=window.setTimeout(function(){n.current=!1,s()},o)}return[s,function(){n.current=!1,a()}]},cn=m(73023);function pn(e,o){return e===o?!0:!e||!o?!1:"pageX"in o&&"pageY"in o?e.pageX===o.pageX&&e.pageY===o.pageY:"clientX"in o&&"clientY"in o?e.clientX===o.clientX&&e.clientY===o.clientY:!1}function dn(e,o){e!==document.activeElement&&(0,j.Z)(o,e)&&typeof e.focus=="function"&&e.focus()}function Zt(e,o){var n=null,i=null;function a(t){var u=(0,D.Z)(t,1),r=u[0].target;if(document.documentElement.contains(r)){var l=r.getBoundingClientRect(),p=l.width,g=l.height,h=Math.floor(p),c=Math.floor(g);(n!==h||i!==c)&&Promise.resolve().then(function(){o({width:h,height:c})}),n=h,i=c}}var s=new cn.Z(a);return e&&s.observe(e),function(){s.disconnect()}}function xt(e){return typeof e!="function"?null:e()}function Ot(e){return(0,$e.Z)(e)!=="object"||!e?null:e}var vn=function(o,n){var i=o.children,a=o.disabled,s=o.target,t=o.align,u=o.onAlign,r=o.monitorWindowResize,l=o.monitorBufferTime,p=l===void 0?0:l,g=f.useRef({}),h=f.useRef(),c=f.Children.only(i),d=f.useRef({});d.current.disabled=a,d.current.target=s,d.current.align=t,d.current.onAlign=u;var P=fn(function(){var V=d.current,se=V.disabled,ue=V.target,le=V.align,me=V.onAlign,L=h.current;if(!se&&ue&&L){var fe,R=xt(ue),ce=Ot(ue);g.current.element=R,g.current.point=ce,g.current.align=le;var ct=document,We=ct.activeElement;return R&&(0,ln.Z)(R)?fe=ut(L,R,le):ce&&(fe=sn(L,ce,le)),dn(We,L),me&&fe&&me(L,fe),!0}return!1},p),S=(0,D.Z)(P,2),M=S[0],E=S[1],N=f.useState(),H=(0,D.Z)(N,2),W=H[0],I=H[1],ae=f.useState(),B=(0,D.Z)(ae,2),z=B[0],K=B[1];return(0,lt.Z)(function(){I(xt(s)),K(Ot(s))}),f.useEffect(function(){(g.current.element!==W||!pn(g.current.point,z)||!(0,un.Z)(g.current.align,t))&&M()}),f.useEffect(function(){var V=Zt(h.current,M);return V},[h.current]),f.useEffect(function(){var V=Zt(W,M);return V},[W]),f.useEffect(function(){a?E():M()},[a]),f.useEffect(function(){if(r){var V=(0,T.Z)(window,"resize",M);return V.remove}},[r]),f.useEffect(function(){return function(){E()}},[]),f.useImperativeHandle(n,function(){return{forceAlign:function(){return M(!0)}}}),f.isValidElement(c)&&(c=f.cloneElement(c,{ref:(0,O.sQ)(c.ref,h)})),c},Dt=f.forwardRef(vn);Dt.displayName="Align";var hn=Dt,mn=hn,Nt=m(27205),gn=m(16931),yn=m(8298),At=["measure","alignPre","align",null,"motion"],wn=function(e,o){var n=(0,yn.Z)(null),i=(0,D.Z)(n,2),a=i[0],s=i[1],t=(0,f.useRef)();function u(p){s(p,!0)}function r(){x.Z.cancel(t.current)}function l(p){r(),t.current=(0,x.Z)(function(){u(function(g){switch(a){case"align":return"motion";case"motion":return"stable";default:}return g}),p==null||p()})}return(0,f.useEffect)(function(){u("measure")},[e]),(0,f.useEffect)(function(){switch(a){case"measure":o();break;default:}a&&(t.current=(0,x.Z)((0,gn.Z)((0,Nt.Z)().mark(function p(){var g,h;return(0,Nt.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:g=At.indexOf(a),h=At[g+1],h&&g!==-1&&u(h);case 3:case"end":return d.stop()}},p)}))))},[a]),(0,f.useEffect)(function(){return function(){r()}},[]),[a,l]},Cn=function(e){var o=f.useState({width:0,height:0}),n=(0,D.Z)(o,2),i=n[0],a=n[1];function s(u){var r=u.offsetWidth,l=u.offsetHeight,p=u.getBoundingClientRect(),g=p.width,h=p.height;Math.abs(r-g)<1&&Math.abs(l-h)<1&&(r=g,l=h),a({width:r,height:l})}var t=f.useMemo(function(){var u={};if(e){var r=i.width,l=i.height;e.indexOf("height")!==-1&&l?u.height=l:e.indexOf("minHeight")!==-1&&l&&(u.minHeight=l),e.indexOf("width")!==-1&&r?u.width=r:e.indexOf("minWidth")!==-1&&r&&(u.minWidth=r)}return u},[e,i]);return[t,s]},Rt=f.forwardRef(function(e,o){var n=e.visible,i=e.prefixCls,a=e.className,s=e.style,t=e.children,u=e.zIndex,r=e.stretch,l=e.destroyPopupOnHide,p=e.forceRender,g=e.align,h=e.point,c=e.getRootDomNode,d=e.getClassNameFromAlign,P=e.onAlign,S=e.onMouseEnter,M=e.onMouseLeave,E=e.onMouseDown,N=e.onTouchStart,H=e.onClick,W=(0,f.useRef)(),I=(0,f.useRef)(),ae=(0,f.useState)(),B=(0,D.Z)(ae,2),z=B[0],K=B[1],V=Cn(r),se=(0,D.Z)(V,2),ue=se[0],le=se[1];function me(){r&&le(c())}var L=wn(n,me),fe=(0,D.Z)(L,2),R=fe[0],ce=fe[1],ct=(0,f.useState)(0),We=(0,D.Z)(ct,2),kt=We[0],Wt=We[1],pt=(0,f.useRef)();(0,lt.Z)(function(){R==="alignPre"&&Wt(0)},[R]);function Nn(){return h||c}function It(){var Z;(Z=W.current)===null||Z===void 0||Z.forceAlign()}function An(Z,_){var ge=d(_);z!==ge&&K(ge),Wt(function(Oe){return Oe+1}),R==="align"&&(P==null||P(Z,_))}(0,lt.Z)(function(){R==="align"&&(kt<3?It():ce(function(){var Z;(Z=pt.current)===null||Z===void 0||Z.call(pt)}))},[kt]);var xe=(0,C.Z)({},Te(e));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(Z){var _=xe[Z];xe[Z]=function(ge,Oe){return ce(),_==null?void 0:_(ge,Oe)}});function Bt(){return new Promise(function(Z){pt.current=Z})}f.useEffect(function(){!xe.motionName&&R==="motion"&&ce()},[xe.motionName,R]),f.useImperativeHandle(o,function(){return{forceAlign:It,getElement:function(){return I.current}}});var Rn=(0,C.Z)((0,C.Z)({},ue),{},{zIndex:u,opacity:R==="motion"||R==="stable"||!n?void 0:0,pointerEvents:!n&&R!=="stable"?"none":void 0},s),Ft=!0;g!=null&&g.points&&(R==="align"||R==="stable")&&(Ft=!1);var $t=t;return f.Children.count(t)>1&&($t=f.createElement("div",{className:"".concat(i,"-content")},t)),f.createElement(de.default,(0,b.Z)({visible:n,ref:I,leavedClassName:"".concat(i,"-hidden")},xe,{onAppearPrepare:Bt,onEnterPrepare:Bt,removeOnLeave:l,forceRender:p}),function(Z,_){var ge=Z.className,Oe=Z.style,Vn=k()(i,a,z,ge);return f.createElement(mn,{target:Nn(),key:"popup",ref:W,monitorWindowResize:!0,disabled:Ft,align:g,onAlign:An},f.createElement("div",{ref:_,className:Vn,onMouseEnter:S,onMouseLeave:M,onMouseDownCapture:E,onTouchStartCapture:N,onClick:H,style:(0,C.Z)((0,C.Z)({},Oe),Rn)},$t))})});Rt.displayName="PopupInner";var Tn=Rt,Vt=f.forwardRef(function(e,o){var n=e.prefixCls,i=e.visible,a=e.zIndex,s=e.children,t=e.mobile;t=t===void 0?{}:t;var u=t.popupClassName,r=t.popupStyle,l=t.popupMotion,p=l===void 0?{}:l,g=t.popupRender,h=e.onClick,c=f.useRef();f.useImperativeHandle(o,function(){return{forceAlign:function(){},getElement:function(){return c.current}}});var d=(0,C.Z)({zIndex:a},r),P=s;return f.Children.count(s)>1&&(P=f.createElement("div",{className:"".concat(n,"-content")},s)),g&&(P=g(P)),f.createElement(de.default,(0,b.Z)({visible:i,ref:c,removeOnLeave:!0},p),function(S,M){var E=S.className,N=S.style,H=k()(n,u,E);return f.createElement("div",{ref:M,className:H,onClick:h,style:(0,C.Z)((0,C.Z)({},N),d)},P)})});Vt.displayName="MobilePopupInner";var Pn=Vt,bn=["visible","mobile"],Ht=f.forwardRef(function(e,o){var n=e.visible,i=e.mobile,a=(0,Ie.Z)(e,bn),s=(0,f.useState)(n),t=(0,D.Z)(s,2),u=t[0],r=t[1],l=(0,f.useState)(!1),p=(0,D.Z)(l,2),g=p[0],h=p[1],c=(0,C.Z)((0,C.Z)({},a),{},{visible:u});(0,f.useEffect)(function(){r(n),n&&i&&h((0,Be.Z)())},[n,i]);var d=g?f.createElement(Pn,(0,b.Z)({},c,{mobile:i,ref:o})):f.createElement(Tn,(0,b.Z)({},c,{ref:o}));return f.createElement("div",null,f.createElement(Fe,c),d)});Ht.displayName="Popup";var Mn=Ht,Sn=f.createContext(null),Lt=Sn;function ft(){}function En(){return""}function Zn(e){return e?e.ownerDocument:window.document}var xn=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function On(e){var o=function(n){(0,G.Z)(a,n);var i=(0,$.Z)(a);function a(s){var t;(0,A.Z)(this,a),t=i.call(this,s),(0,y.Z)((0,v.Z)(t),"popupRef",f.createRef()),(0,y.Z)((0,v.Z)(t),"triggerRef",f.createRef()),(0,y.Z)((0,v.Z)(t),"portalContainer",void 0),(0,y.Z)((0,v.Z)(t),"attachId",void 0),(0,y.Z)((0,v.Z)(t),"clickOutsideHandler",void 0),(0,y.Z)((0,v.Z)(t),"touchOutsideHandler",void 0),(0,y.Z)((0,v.Z)(t),"contextMenuOutsideHandler1",void 0),(0,y.Z)((0,v.Z)(t),"contextMenuOutsideHandler2",void 0),(0,y.Z)((0,v.Z)(t),"mouseDownTimeout",void 0),(0,y.Z)((0,v.Z)(t),"focusTime",void 0),(0,y.Z)((0,v.Z)(t),"preClickTime",void 0),(0,y.Z)((0,v.Z)(t),"preTouchTime",void 0),(0,y.Z)((0,v.Z)(t),"delayTimer",void 0),(0,y.Z)((0,v.Z)(t),"hasPopupMouseDown",void 0),(0,y.Z)((0,v.Z)(t),"onMouseEnter",function(r){var l=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",r),t.delaySetPopupVisible(!0,l,l?null:r)}),(0,y.Z)((0,v.Z)(t),"onMouseMove",function(r){t.fireEvents("onMouseMove",r),t.setPoint(r)}),(0,y.Z)((0,v.Z)(t),"onMouseLeave",function(r){t.fireEvents("onMouseLeave",r),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)}),(0,y.Z)((0,v.Z)(t),"onPopupMouseEnter",function(){t.clearDelayTimer()}),(0,y.Z)((0,v.Z)(t),"onPopupMouseLeave",function(r){var l;r.relatedTarget&&!r.relatedTarget.setTimeout&&(0,j.Z)((l=t.popupRef.current)===null||l===void 0?void 0:l.getElement(),r.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)}),(0,y.Z)((0,v.Z)(t),"onFocus",function(r){t.fireEvents("onFocus",r),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay))}),(0,y.Z)((0,v.Z)(t),"onMouseDown",function(r){t.fireEvents("onMouseDown",r),t.preClickTime=Date.now()}),(0,y.Z)((0,v.Z)(t),"onTouchStart",function(r){t.fireEvents("onTouchStart",r),t.preTouchTime=Date.now()}),(0,y.Z)((0,v.Z)(t),"onBlur",function(r){t.fireEvents("onBlur",r),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay)}),(0,y.Z)((0,v.Z)(t),"onContextMenu",function(r){r.preventDefault(),t.fireEvents("onContextMenu",r),t.setPopupVisible(!0,r)}),(0,y.Z)((0,v.Z)(t),"onContextMenuClose",function(){t.isContextMenuToShow()&&t.close()}),(0,y.Z)((0,v.Z)(t),"onClick",function(r){if(t.fireEvents("onClick",r),t.focusTime){var l;if(t.preClickTime&&t.preTouchTime?l=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?l=t.preClickTime:t.preTouchTime&&(l=t.preTouchTime),Math.abs(l-t.focusTime)<20)return;t.focusTime=0}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&r&&r.preventDefault&&r.preventDefault();var p=!t.state.popupVisible;(t.isClickToHide()&&!p||p&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,r)}),(0,y.Z)((0,v.Z)(t),"onPopupMouseDown",function(){if(t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=window.setTimeout(function(){t.hasPopupMouseDown=!1},0),t.context){var r;(r=t.context).onPopupMouseDown.apply(r,arguments)}}),(0,y.Z)((0,v.Z)(t),"onDocumentClick",function(r){if(!(t.props.mask&&!t.props.maskClosable)){var l=r.target,p=t.getRootDomNode(),g=t.getPopupDomNode();(!(0,j.Z)(p,l)||t.isContextMenuOnly())&&!(0,j.Z)(g,l)&&!t.hasPopupMouseDown&&t.close()}}),(0,y.Z)((0,v.Z)(t),"getRootDomNode",function(){var r=t.props.getTriggerDOMNode;if(r)return r(t.triggerRef.current);try{var l=(0,ee.Z)(t.triggerRef.current);if(l)return l}catch(p){}return Q.findDOMNode((0,v.Z)(t))}),(0,y.Z)((0,v.Z)(t),"getPopupClassNameFromAlign",function(r){var l=[],p=t.props,g=p.popupPlacement,h=p.builtinPlacements,c=p.prefixCls,d=p.alignPoint,P=p.getPopupClassNameFromAlign;return g&&h&&l.push(Ce(h,c,r,d)),P&&l.push(P(r)),l.join(" ")}),(0,y.Z)((0,v.Z)(t),"getComponent",function(){var r=t.props,l=r.prefixCls,p=r.destroyPopupOnHide,g=r.popupClassName,h=r.onPopupAlign,c=r.popupMotion,d=r.popupAnimation,P=r.popupTransitionName,S=r.popupStyle,M=r.mask,E=r.maskAnimation,N=r.maskTransitionName,H=r.maskMotion,W=r.zIndex,I=r.popup,ae=r.stretch,B=r.alignPoint,z=r.mobile,K=r.forceRender,V=r.onPopupClick,se=t.state,ue=se.popupVisible,le=se.point,me=t.getPopupAlign(),L={};return t.isMouseEnterToShow()&&(L.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(L.onMouseLeave=t.onPopupMouseLeave),L.onMouseDown=t.onPopupMouseDown,L.onTouchStart=t.onPopupMouseDown,f.createElement(Mn,(0,b.Z)({prefixCls:l,destroyPopupOnHide:p,visible:ue,point:B&&le,className:g,align:me,onAlign:h,animation:d,getClassNameFromAlign:t.getPopupClassNameFromAlign},L,{stretch:ae,getRootDomNode:t.getRootDomNode,style:S,mask:M,zIndex:W,transitionName:P,maskAnimation:E,maskTransitionName:N,maskMotion:H,ref:t.popupRef,motion:c,mobile:z,forceRender:K,onClick:V}),typeof I=="function"?I():I)}),(0,y.Z)((0,v.Z)(t),"attachParent",function(r){x.Z.cancel(t.attachId);var l=t.props,p=l.getPopupContainer,g=l.getDocument,h=t.getRootDomNode(),c;p?(h||p.length===0)&&(c=p(h)):c=g(t.getRootDomNode()).body,c?c.appendChild(r):t.attachId=(0,x.Z)(function(){t.attachParent(r)})}),(0,y.Z)((0,v.Z)(t),"getContainer",function(){if(!t.portalContainer){var r=t.props.getDocument,l=r(t.getRootDomNode()).createElement("div");l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.width="100%",t.portalContainer=l}return t.attachParent(t.portalContainer),t.portalContainer}),(0,y.Z)((0,v.Z)(t),"setPoint",function(r){var l=t.props.alignPoint;!l||!r||t.setState({point:{pageX:r.pageX,pageY:r.pageY}})}),(0,y.Z)((0,v.Z)(t),"handlePortalUpdate",function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible)}),(0,y.Z)((0,v.Z)(t),"triggerContextValue",{onPopupMouseDown:t.onPopupMouseDown});var u;return"popupVisible"in s?u=!!s.popupVisible:u=!!s.defaultPopupVisible,t.state={prevPopupVisible:u,popupVisible:u},xn.forEach(function(r){t["fire".concat(r)]=function(l){t.fireEvents(r,l)}}),t}return(0,Y.Z)(a,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var t=this.props,u=this.state;if(u.popupVisible){var r;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(r=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,T.Z)(r,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(r=r||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,T.Z)(r,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(r=r||t.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,T.Z)(r,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,T.Z)(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),x.Z.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var t;return((t=this.popupRef.current)===null||t===void 0?void 0:t.getElement())||null}},{key:"getPopupAlign",value:function(){var t=this.props,u=t.popupPlacement,r=t.popupAlign,l=t.builtinPlacements;return u&&l?pe(l,u,r):r}},{key:"setPopupVisible",value:function(t,u){var r=this.props.alignPoint,l=this.state.popupVisible;this.clearDelayTimer(),l!==t&&("popupVisible"in this.props||this.setState({popupVisible:t,prevPopupVisible:l}),this.props.onPopupVisibleChange(t)),r&&u&&t&&this.setPoint(u)}},{key:"delaySetPopupVisible",value:function(t,u,r){var l=this,p=u*1e3;if(this.clearDelayTimer(),p){var g=r?{pageX:r.pageX,pageY:r.pageY}:null;this.delayTimer=window.setTimeout(function(){l.setPopupVisible(t,g),l.clearDelayTimer()},p)}else this.setPopupVisible(t,r)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(t){var u=this.props.children.props,r=this.props;return u[t]&&r[t]?this["fire".concat(t)]:u[t]||r[t]}},{key:"isClickToShow",value:function(){var t=this.props,u=t.action,r=t.showAction;return u.indexOf("click")!==-1||r.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var t=this.props.action;return t==="contextMenu"||t.length===1&&t[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var t=this.props,u=t.action,r=t.showAction;return u.indexOf("contextMenu")!==-1||r.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var t=this.props,u=t.action,r=t.hideAction;return u.indexOf("click")!==-1||r.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var t=this.props,u=t.action,r=t.showAction;return u.indexOf("hover")!==-1||r.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var t=this.props,u=t.action,r=t.hideAction;return u.indexOf("hover")!==-1||r.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var t=this.props,u=t.action,r=t.showAction;return u.indexOf("focus")!==-1||r.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var t=this.props,u=t.action,r=t.hideAction;return u.indexOf("focus")!==-1||r.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var t;(t=this.popupRef.current)===null||t===void 0||t.forceAlign()}}},{key:"fireEvents",value:function(t,u){var r=this.props.children.props[t];r&&r(u);var l=this.props[t];l&&l(u)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var t=this.state.popupVisible,u=this.props,r=u.children,l=u.forceRender,p=u.alignPoint,g=u.className,h=u.autoDestroy,c=f.Children.only(r),d={key:"trigger"};this.isContextMenuToShow()?d.onContextMenu=this.onContextMenu:d.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(d.onClick=this.onClick,d.onMouseDown=this.onMouseDown,d.onTouchStart=this.onTouchStart):(d.onClick=this.createTwoChains("onClick"),d.onMouseDown=this.createTwoChains("onMouseDown"),d.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(d.onMouseEnter=this.onMouseEnter,p&&(d.onMouseMove=this.onMouseMove)):d.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?d.onMouseLeave=this.onMouseLeave:d.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(d.onFocus=this.onFocus,d.onBlur=this.onBlur):(d.onFocus=this.createTwoChains("onFocus"),d.onBlur=this.createTwoChains("onBlur"));var P=k()(c&&c.props&&c.props.className,g);P&&(d.className=P);var S=(0,C.Z)({},d);(0,O.Yr)(c)&&(S.ref=(0,O.sQ)(this.triggerRef,c.ref));var M=f.cloneElement(c,S),E;return(t||this.popupRef.current||l)&&(E=f.createElement(e,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!t&&h&&(E=null),f.createElement(Lt.Provider,{value:this.triggerContextValue},M,E)}}],[{key:"getDerivedStateFromProps",value:function(t,u){var r=t.popupVisible,l={};return r!==void 0&&u.popupVisible!==r&&(l.popupVisible=r,l.prevPopupVisible=u.popupVisible),l}}]),a}(f.Component);return(0,y.Z)(o,"contextType",Lt),(0,y.Z)(o,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:En,getDocument:Zn,onPopupVisibleChange:ft,afterPopupVisibleChange:ft,onPopupAlign:ft,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),o}var Dn=On(ye.Z)},9045:function(De,F,m){m.d(F,{Z:function(){return b}});var C=m(10422);function b(A,Y,v,G){var $=C.unstable_batchedUpdates?function(f){C.unstable_batchedUpdates(v,f)}:v;return A!=null&&A.addEventListener&&A.addEventListener(Y,$,G),{remove:function(){A!=null&&A.removeEventListener&&A.removeEventListener(Y,$,G)}}}},28904:function(De,F,m){var C=m(50959),b=m(10422),A=m(7534),Y=(0,C.forwardRef)(function(v,G){var $=v.didUpdate,y=v.getContainer,f=v.children,Q=(0,C.useRef)(),x=(0,C.useRef)();(0,C.useImperativeHandle)(G,function(){return{}});var j=(0,C.useRef)(!1);return!j.current&&(0,A.Z)()&&(x.current=y(),Q.current=x.current.parentNode,j.current=!0),(0,C.useEffect)(function(){$==null||$(v)}),(0,C.useEffect)(function(){return x.current.parentNode===null&&Q.current!==null&&Q.current.appendChild(x.current),function(){var ee,O;(ee=x.current)===null||ee===void 0||(O=ee.parentNode)===null||O===void 0||O.removeChild(x.current)}},[]),x.current?b.createPortal(f,x.current):null});F.Z=Y}}]);
