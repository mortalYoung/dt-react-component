"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[1193],{61708:function(Mt,Ae,x){x.r(Ae),x.d(Ae,{default:function(){return nt}});var q=x(6725),K=x(86848),p=x(13619),Z=x(79685),t=x(63141),We=x(15810),Ce=x(68591),Re=x.n(Ce),Ge=x(39395),et=function(X){var ie=X.prefixCls,ne=X.className,re=X.style,Q=X.children,V=X.containerRef;return Z.createElement(Z.Fragment,null,Z.createElement("div",{className:Re()("".concat(ie,"-content"),ne),style:(0,K.Z)({},re),"aria-modal":"true",role:"dialog",ref:V},Q))},Ue=et,ze=Z.createContext(null),_=ze,te=x(67594),tt=x(70585);function oe(C){return typeof C=="string"&&String(Number(C))===C?((0,tt.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(C)):C}var Ne={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function De(C){var X,ie,ne,re,Q=C.prefixCls,V=C.open,le=C.placement,Be=C.inline,ye=C.push,Pe=C.forceRender,we=C.autoFocus,Je=C.keyboard,ee=C.scrollLocker,Fe=C.rootClassName,Le=C.rootStyle,e=C.zIndex,c=C.className,r=C.style,v=C.motion,i=C.width,u=C.height,s=C.children,b=C.contentWrapperStyle,M=C.mask,D=C.maskClosable,R=C.maskMotion,y=C.maskClassName,g=C.maskStyle,l=C.afterOpenChange,n=C.onClose,d=Z.useRef(),o=Z.useRef(),f=Z.useRef(),a=function(S){var O=S.keyCode,$=S.shiftKey;switch(O){case te.Z.TAB:{if(O===te.Z.TAB){if(!$&&document.activeElement===f.current){var ae;(ae=o.current)===null||ae===void 0||ae.focus({preventScroll:!0})}else if($&&document.activeElement===o.current){var ce;(ce=f.current)===null||ce===void 0||ce.focus({preventScroll:!0})}}break}case te.Z.ESC:{n&&Je&&n(S);break}}};Z.useEffect(function(){if(V&&we){var k;(k=d.current)===null||k===void 0||k.focus({preventScroll:!0})}},[V,we]);var E=Z.useState(!1),A=(0,p.Z)(E,2),w=A[0],Y=A[1],m=Z.useContext(_),F;ye===!1?F={distance:0}:ye===!0?F={}:F=ye||{};var P=(X=(ie=(ne=F)===null||ne===void 0?void 0:ne.distance)!==null&&ie!==void 0?ie:m==null?void 0:m.pushDistance)!==null&&X!==void 0?X:180,L=Z.useMemo(function(){return{pushDistance:P,push:function(){Y(!0)},pull:function(){Y(!1)}}},[P]);Z.useEffect(function(){if(V){var k;m==null||(k=m.push)===null||k===void 0||k.call(m)}else{var S;m==null||(S=m.pull)===null||S===void 0||S.call(m)}},[V]),Z.useEffect(function(){V&&M&&(ee==null||ee.lock())},[V,M]),Z.useEffect(function(){return function(){var k;ee==null||ee.unLock(),m==null||(k=m.pull)===null||k===void 0||k.call(m)}},[]);var U=M&&Z.createElement(Ge.default,(0,q.Z)({key:"mask"},R,{visible:V}),function(k,S){var O=k.className,$=k.style;return Z.createElement("div",{className:Re()("".concat(Q,"-mask"),O,y),style:(0,K.Z)((0,K.Z)({},$),g),onClick:D?n:void 0,ref:S})}),j=typeof v=="function"?v(le):v,H={};if(w&&P)switch(le){case"top":H.transform="translateY(".concat(P,"px)");break;case"bottom":H.transform="translateY(".concat(-P,"px)");break;case"left":H.transform="translateX(".concat(P,"px)");break;default:H.transform="translateX(".concat(-P,"px)");break}le==="left"||le==="right"?H.width=oe(i):H.height=oe(u);var B=Z.createElement(Ge.default,(0,q.Z)({key:"panel"},j,{visible:V,forceRender:Pe,onVisibleChanged:function(S){l==null||l(S),S||ee==null||ee.unLock()},removeOnLeave:!1,leavedClassName:"".concat(Q,"-content-wrapper-hidden")}),function(k,S){var O=k.className,$=k.style;return Z.createElement("div",{className:Re()("".concat(Q,"-content-wrapper"),O),style:(0,K.Z)((0,K.Z)((0,K.Z)({},H),$),b)},Z.createElement(Ue,{containerRef:S,prefixCls:Q,className:c,style:r},s))}),z=(0,K.Z)({},Le);return e&&(z.zIndex=e),Z.createElement(_.Provider,{value:L},Z.createElement("div",{className:Re()(Q,"".concat(Q,"-").concat(le),Fe,(re={},(0,We.Z)(re,"".concat(Q,"-open"),V),(0,We.Z)(re,"".concat(Q,"-inline"),Be),re)),style:z,tabIndex:-1,ref:d,onKeyDown:a},U,Z.createElement("div",{tabIndex:0,ref:o,style:Ne,"aria-hidden":"true","data-sentinel":"start"}),B,Z.createElement("div",{tabIndex:0,ref:f,style:Ne,"aria-hidden":"true","data-sentinel":"end"})))}var de=function(){return document.body},Ve=function(X){var ie=X.open,ne=X.getContainer,re=X.forceRender,Q=X.wrapperClassName,V=X.prefixCls,le=X.afterOpenChange,Be=X.destroyOnClose,ye=Z.useState(!1),Pe=(0,p.Z)(ye,2),we=Pe[0],Je=Pe[1],ee=function(e){Je(e),le==null||le(e)};if(!re&&!we&&!ie&&Be)return null;var Fe=(0,K.Z)((0,K.Z)({},X),{},{prefixCls:V,afterOpenChange:ee});return ne===!1?Z.createElement(De,(0,q.Z)({},Fe,{inline:!0})):Z.createElement(t.Z,{visible:ie,forceRender:re,getContainer:ne,wrapperClassName:Q},function(Le){var e=Le.scrollLocker;return Z.createElement(De,(0,q.Z)({},Fe,{scrollLocker:e}))})};Ve.defaultProps={open:!1,getContainer:de,prefixCls:"rc-drawer",placement:"right",autoFocus:!0,keyboard:!0,width:378,mask:!0,maskClosable:!0};var at=Ve,nt=at},95292:function(Mt,Ae,x){x.r(Ae),x.d(Ae,{default:function(){return Le}});var q=x(15810),K=x(39676),p=x(13619),Z=x(57329),t=x(79685),We=x(68591),Ce=x.n(We),Re=x(25227),Ge=x.n(Re),et=x(84047),Ue=x(6725),ze=x(56428),_=x(86848),te=x(67594),tt=t.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0}),oe=tt;function Ne(e,c,r){return(e-c)/(r-c)}function De(e,c,r,v){var i=Ne(c,r,v),u={};switch(e){case"rtl":u.right="".concat(i*100,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(i*100,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(i*100,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(i*100,"%"),u.transform="translateX(-50%)";break}return u}function de(e,c){return Array.isArray(e)?e[c]:e}var Ve=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],at=t.forwardRef(function(e,c){var r,v,i=e.prefixCls,u=e.value,s=e.valueIndex,b=e.onStartMove,M=e.style,D=e.render,R=e.dragging,y=e.onOffsetChange,g=(0,ze.Z)(e,Ve),l=t.useContext(oe),n=l.min,d=l.max,o=l.direction,f=l.disabled,a=l.range,E=l.tabIndex,A=l.ariaLabelForHandle,w=l.ariaLabelledByForHandle,Y=l.ariaValueTextFormatterForHandle,m="".concat(i,"-handle"),F=function(H){f||b(H,s)},P=function(H){if(!f){var B=null;switch(H.which||H.keyCode){case te.Z.LEFT:B=o==="ltr"||o==="btt"?-1:1;break;case te.Z.RIGHT:B=o==="ltr"||o==="btt"?1:-1;break;case te.Z.UP:B=o!=="ttb"?1:-1;break;case te.Z.DOWN:B=o!=="ttb"?-1:1;break;case te.Z.HOME:B="min";break;case te.Z.END:B="max";break;case te.Z.PAGE_UP:B=2;break;case te.Z.PAGE_DOWN:B=-2;break}B!==null&&(H.preventDefault(),y(B,s))}},L=De(o,u,n,d),U=t.createElement("div",(0,Ue.Z)({ref:c,className:Ce()(m,(r={},(0,q.Z)(r,"".concat(m,"-").concat(s+1),a),(0,q.Z)(r,"".concat(m,"-dragging"),R),r)),style:(0,_.Z)((0,_.Z)({},L),M),onMouseDown:F,onTouchStart:F,onKeyDown:P,tabIndex:f?null:de(E,s),role:"slider","aria-valuemin":n,"aria-valuemax":d,"aria-valuenow":u,"aria-disabled":f,"aria-label":de(A,s),"aria-labelledby":de(w,s),"aria-valuetext":(v=de(Y,s))===null||v===void 0?void 0:v(u)},g));return D&&(U=D(U,{index:s,prefixCls:i,value:u,dragging:R})),U}),nt=at,C=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],X=t.forwardRef(function(e,c){var r=e.prefixCls,v=e.style,i=e.onStartMove,u=e.onOffsetChange,s=e.values,b=e.handleRender,M=e.draggingIndex,D=(0,ze.Z)(e,C),R=t.useRef({});return t.useImperativeHandle(c,function(){return{focus:function(g){var l;(l=R.current[g])===null||l===void 0||l.focus()}}}),t.createElement(t.Fragment,null,s.map(function(y,g){return t.createElement(nt,(0,Ue.Z)({ref:function(n){n?R.current[g]=n:delete R.current[g]},dragging:M===g,prefixCls:r,style:de(v,g),key:g,value:y,valueIndex:g,onStartMove:i,onOffsetChange:u,render:b},D))}))}),ie=X;function ne(e){var c="touches"in e?e.touches[0]:e;return{pageX:c.pageX,pageY:c.pageY}}function re(e,c,r,v,i,u,s,b,M){var D=t.useState(null),R=(0,p.Z)(D,2),y=R[0],g=R[1],l=t.useState(-1),n=(0,p.Z)(l,2),d=n[0],o=n[1],f=t.useState(r),a=(0,p.Z)(f,2),E=a[0],A=a[1],w=t.useState(r),Y=(0,p.Z)(w,2),m=Y[0],F=Y[1],P=t.useRef(null),L=t.useRef(null);t.useEffect(function(){d===-1&&A(r)},[r,d]),t.useEffect(function(){return function(){document.removeEventListener("mousemove",P.current),document.removeEventListener("mouseup",L.current),document.removeEventListener("touchmove",P.current),document.removeEventListener("touchend",L.current)}},[]);var U=function(S,O){E.some(function($,ae){return $!==S[ae]})&&(O!==void 0&&g(O),A(S),s(S))},j=function(S,O){if(S===-1){var $=m[0],ae=m[m.length-1],ce=v-$,Xe=i-ae,J=O*(i-v);J=Math.max(J,ce),J=Math.min(J,Xe);var se=u($+J);J=se-$;var Se=m.map(function(Oe){return Oe+J});U(Se)}else{var ve=(i-v)*O,fe=(0,K.Z)(E);fe[S]=m[S];var be=M(fe,ve,S,"dist");U(be.values,be.value)}},H=t.useRef(j);H.current=j;var B=function(S,O){S.stopPropagation();var $=r[O];o(O),g($),F(r);var ae=ne(S),ce=ae.pageX,Xe=ae.pageY,J=function(ve){ve.preventDefault();var fe=ne(ve),be=fe.pageX,Oe=fe.pageY,Ye=be-ce,Ie=Oe-Xe,me=e.current.getBoundingClientRect(),Me=me.width,Ee=me.height,W;switch(c){case"btt":W=-Ie/Ee;break;case"ttb":W=Ie/Ee;break;case"rtl":W=-Ye/Me;break;default:W=Ye/Me}H.current(O,W)},se=function Se(ve){ve.preventDefault(),document.removeEventListener("mouseup",Se),document.removeEventListener("mousemove",J),document.removeEventListener("touchend",Se),document.removeEventListener("touchmove",J),P.current=null,L.current=null,o(-1),b()};document.addEventListener("mouseup",se),document.addEventListener("mousemove",J),document.addEventListener("touchend",se),document.addEventListener("touchmove",J),P.current=J,L.current=se},z=t.useMemo(function(){var k=(0,K.Z)(r).sort(function(O,$){return O-$}),S=(0,K.Z)(E).sort(function(O,$){return O-$});return k.every(function(O,$){return O===S[$]})?E:r},[r,E]);return[d,y,z,B]}function Q(e){var c=e.prefixCls,r=e.style,v=e.start,i=e.end,u=e.index,s=e.onStartMove,b=t.useContext(oe),M=b.direction,D=b.min,R=b.max,y=b.disabled,g=b.range,l="".concat(c,"-track"),n=Ne(v,D,R),d=Ne(i,D,R),o=function(E){!y&&s&&s(E,-1)},f={};switch(M){case"rtl":f.right="".concat(n*100,"%"),f.width="".concat(d*100-n*100,"%");break;case"btt":f.bottom="".concat(n*100,"%"),f.height="".concat(d*100-n*100,"%");break;case"ttb":f.top="".concat(n*100,"%"),f.height="".concat(d*100-n*100,"%");break;default:f.left="".concat(n*100,"%"),f.width="".concat(d*100-n*100,"%")}return t.createElement("div",{className:Ce()(l,g&&"".concat(l,"-").concat(u+1)),style:(0,_.Z)((0,_.Z)({},f),r),onMouseDown:o,onTouchStart:o})}function V(e){var c=e.prefixCls,r=e.style,v=e.values,i=e.startPoint,u=e.onStartMove,s=t.useContext(oe),b=s.included,M=s.range,D=s.min,R=t.useMemo(function(){if(!M){if(v.length===0)return[];var y=i!=null?i:D,g=v[0];return[{start:Math.min(y,g),end:Math.max(y,g)}]}for(var l=[],n=0;n<v.length-1;n+=1)l.push({start:v[n],end:v[n+1]});return l},[v,M,i,D]);return b?R.map(function(y,g){var l=y.start,n=y.end;return t.createElement(Q,{index:g,prefixCls:c,style:de(r,g),start:l,end:n,key:g,onStartMove:u})}):null}function le(e){var c=e.prefixCls,r=e.style,v=e.children,i=e.value,u=e.onClick,s=t.useContext(oe),b=s.min,M=s.max,D=s.direction,R=s.includedStart,y=s.includedEnd,g=s.included,l="".concat(c,"-text"),n=De(D,i,b,M);return t.createElement("span",{className:Ce()(l,(0,q.Z)({},"".concat(l,"-active"),g&&R<=i&&i<=y)),style:(0,_.Z)((0,_.Z)({},n),r),onMouseDown:function(o){o.stopPropagation()},onClick:function(){u(i)}},v)}function Be(e){var c=e.prefixCls,r=e.marks,v=e.onClick,i="".concat(c,"-mark");return r.length?t.createElement("div",{className:i},r.map(function(u){var s=u.value,b=u.style,M=u.label;return t.createElement(le,{key:s,prefixCls:i,style:b,value:s,onClick:v},M)})):null}function ye(e){var c=e.prefixCls,r=e.value,v=e.style,i=e.activeStyle,u=t.useContext(oe),s=u.min,b=u.max,M=u.direction,D=u.included,R=u.includedStart,y=u.includedEnd,g="".concat(c,"-dot"),l=D&&R<=r&&r<=y,n=(0,_.Z)((0,_.Z)({},De(M,r,s,b)),typeof v=="function"?v(r):v);return l&&(n=(0,_.Z)((0,_.Z)({},n),typeof i=="function"?i(r):i)),t.createElement("span",{className:Ce()(g,(0,q.Z)({},"".concat(g,"-active"),l)),style:n})}function Pe(e){var c=e.prefixCls,r=e.marks,v=e.dots,i=e.style,u=e.activeStyle,s=t.useContext(oe),b=s.min,M=s.max,D=s.step,R=t.useMemo(function(){var y=new Set;if(r.forEach(function(l){y.add(l.value)}),v&&D!==null)for(var g=b;g<=M;)y.add(g),g+=D;return Array.from(y)},[b,M,D,v,r]);return t.createElement("div",{className:"".concat(c,"-step")},R.map(function(y){return t.createElement(ye,{prefixCls:c,key:y,value:y,style:i,activeStyle:u})}))}function we(e,c,r,v,i,u){var s=t.useCallback(function(l){var n=isFinite(l)?l:e;return n=Math.min(c,l),n=Math.max(e,n),n},[e,c]),b=t.useCallback(function(l){if(r!==null){var n=e+Math.round((s(l)-e)/r)*r,d=function(E){return(String(E).split(".")[1]||"").length},o=Math.max(d(r),d(c),d(e)),f=Number(n.toFixed(o));return e<=f&&f<=c?f:null}return null},[r,e,c,s]),M=t.useCallback(function(l){var n=s(l),d=v.map(function(a){return a.value});r!==null&&d.push(b(l)),d.push(e,c);var o=d[0],f=c-e;return d.forEach(function(a){var E=Math.abs(n-a);E<=f&&(o=a,f=E)}),o},[e,c,v,r,s,b]),D=function l(n,d,o){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof d=="number"){var a,E=n[o],A=E+d,w=[];v.forEach(function(L){w.push(L.value)}),w.push(e,c),w.push(b(E));var Y=d>0?1:-1;f==="unit"?w.push(b(E+Y*r)):w.push(b(A)),w=w.filter(function(L){return L!==null}).filter(function(L){return d<0?L<=E:L>=E}),f==="unit"&&(w=w.filter(function(L){return L!==E}));var m=f==="unit"?E:A;a=w[0];var F=Math.abs(a-m);if(w.forEach(function(L){var U=Math.abs(L-m);U<F&&(a=L,F=U)}),a===void 0)return d<0?e:c;if(f==="dist")return a;if(Math.abs(d)>1){var P=(0,K.Z)(n);return P[o]=a,l(P,d-Y,o,f)}return a}else{if(d==="min")return e;if(d==="max")return c}},R=function(n,d,o){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",a=n[o],E=D(n,d,o,f);return{value:E,changed:E!==a}},y=function(n){return u===null&&n===0||typeof u=="number"&&n<u},g=function(n,d,o){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",a=n.map(M),E=a[o],A=D(a,d,o,f);if(a[o]=A,i===!1){var w=u||0;o>0&&a[o-1]!==E&&(a[o]=Math.max(a[o],a[o-1]+w)),o<a.length-1&&a[o+1]!==E&&(a[o]=Math.min(a[o],a[o+1]-w))}else if(typeof u=="number"||u===null){for(var Y=o+1;Y<a.length;Y+=1)for(var m=!0;y(a[Y]-a[Y-1])&&m;){var F=R(a,1,Y);a[Y]=F.value,m=F.changed}for(var P=o;P>0;P-=1)for(var L=!0;y(a[P]-a[P-1])&&L;){var U=R(a,-1,P-1);a[P-1]=U.value,L=U.changed}for(var j=a.length-1;j>0;j-=1)for(var H=!0;y(a[j]-a[j-1])&&H;){var B=R(a,-1,j-1);a[j-1]=B.value,H=B.changed}for(var z=0;z<a.length-1;z+=1)for(var k=!0;y(a[z+1]-a[z])&&k;){var S=R(a,1,z+1);a[z+1]=S.value,k=S.changed}}return{value:a[o],values:a}};return[M,g]}var Je=x(70585),ee=t.forwardRef(function(e,c){var r,v=e.prefixCls,i=v===void 0?"rc-slider":v,u=e.className,s=e.style,b=e.disabled,M=b===void 0?!1:b,D=e.autoFocus,R=e.onFocus,y=e.onBlur,g=e.min,l=g===void 0?0:g,n=e.max,d=n===void 0?100:n,o=e.step,f=o===void 0?1:o,a=e.value,E=e.defaultValue,A=e.range,w=e.count,Y=e.onChange,m=e.onBeforeChange,F=e.onAfterChange,P=e.allowCross,L=P===void 0?!0:P,U=e.pushable,j=U===void 0?!1:U,H=e.draggableTrack,B=e.reverse,z=e.vertical,k=e.included,S=k===void 0?!0:k,O=e.startPoint,$=e.trackStyle,ae=e.handleStyle,ce=e.railStyle,Xe=e.dotStyle,J=e.activeDotStyle,se=e.marks,Se=e.dots,ve=e.handleRender,fe=e.tabIndex,be=fe===void 0?0:fe,Oe=e.ariaLabelForHandle,Ye=e.ariaLabelledByForHandle,Ie=e.ariaValueTextFormatterForHandle,me=t.useRef(),Me=t.useRef(),Ee=t.useMemo(function(){return z?B?"ttb":"btt":B?"rtl":"ltr"},[B,z]),W=t.useMemo(function(){return isFinite(l)?l:0},[l]),He=t.useMemo(function(){return isFinite(d)?d:100},[d]),ke=t.useMemo(function(){return f!==null&&f<=0?1:f},[f]),Et=t.useMemo(function(){return j===!0?ke:j>=0?j:!1},[j,ke]),Qe=t.useMemo(function(){var I=Object.keys(se||{});return I.map(function(N){var h=se[N],G={value:Number(N)};return h&&(0,Z.Z)(h)==="object"&&!t.isValidElement(h)&&("label"in h||"style"in h)?(G.style=h.style,G.label=h.label):G.label=h,G}).filter(function(N){var h=N.label;return h||typeof h=="number"}).sort(function(N,h){return N.value-h.value})},[se]),kt=we(W,He,ke,Qe,L,Et),it=(0,p.Z)(kt,2),qe=it[0],ut=it[1],xt=(0,et.Z)(E,{value:a}),ct=(0,p.Z)(xt,2),he=ct[0],Zt=ct[1],ue=t.useMemo(function(){var I=he==null?[]:Array.isArray(he)?he:[he],N=(0,p.Z)(I,1),h=N[0],G=h===void 0?W:h,T=he===null?[]:[G];if(A){if(T=(0,K.Z)(I),w||he===void 0){var Te=w>=0?w+1:2;for(T=T.slice(0,Te);T.length<Te;){var Ze;T.push((Ze=T[T.length-1])!==null&&Ze!==void 0?Ze:W)}}T.sort(function(ge,Ke){return ge-Ke})}return T.forEach(function(ge,Ke){T[Ke]=qe(ge)}),T},[he,A,W,w,qe]),pe=t.useRef(ue);pe.current=ue;var xe=function(N){return A?N:N[0]},rt=function(N){var h=(0,K.Z)(N).sort(function(G,T){return G-T});Y&&!Ge()(h,pe.current)&&Y(xe(h)),Zt(h)},st=function(N){if(!M){var h=0,G=He-W;ue.forEach(function(Te,Ze){var ge=Math.abs(N-Te);ge<=G&&(G=ge,h=Ze)});var T=(0,K.Z)(ue);T[h]=N,A&&!ue.length&&w===void 0&&T.push(N),m==null||m(xe(T)),rt(T),F==null||F(xe(T))}},Rt=function(N){N.preventDefault();var h=Me.current.getBoundingClientRect(),G=h.width,T=h.height,Te=h.left,Ze=h.top,ge=h.bottom,Ke=h.right,St=N.clientX,bt=N.clientY,je;switch(Ee){case"btt":je=(ge-bt)/T;break;case"ttb":je=(bt-Ze)/T;break;case"rtl":je=(Ke-St)/G;break;default:je=(St-Te)/G}var Tt=W+je*(He-W);st(qe(Tt))},Nt=t.useState(null),dt=(0,p.Z)(Nt,2),lt=dt[0],vt=dt[1],Dt=function(N,h){if(!M){var G=ut(ue,N,h);m==null||m(xe(ue)),rt(G.values),F==null||F(xe(G.values)),vt(G.value)}};t.useEffect(function(){if(lt!==null){var I=ue.indexOf(lt);I>=0&&me.current.focus(I)}vt(null)},[lt]);var Pt=t.useMemo(function(){return H&&ke===null?!1:H},[H,ke]),wt=function(){F==null||F(xe(pe.current))},Ft=re(Me,Ee,ue,W,He,qe,rt,wt,ut),_e=(0,p.Z)(Ft,4),ft=_e[0],Lt=_e[1],ot=_e[2],Ot=_e[3],mt=function(N,h){Ot(N,h),m==null||m(xe(pe.current))},ht=ft!==-1;t.useEffect(function(){if(!ht){var I=ue.lastIndexOf(Lt);me.current.focus(I)}},[ht]);var $e=t.useMemo(function(){return(0,K.Z)(ot).sort(function(I,N){return I-N})},[ot]),Ht=t.useMemo(function(){return A?[$e[0],$e[$e.length-1]]:[W,$e[0]]},[$e,A,W]),gt=(0,p.Z)(Ht,2),Ct=gt[0],yt=gt[1];t.useImperativeHandle(c,function(){return{focus:function(){me.current.focus(0)},blur:function(){var N=document,h=N.activeElement;Me.current.contains(h)&&(h==null||h.blur())}}}),t.useEffect(function(){D&&me.current.focus(0)},[]);var $t=t.useMemo(function(){return{min:W,max:He,direction:Ee,disabled:M,step:ke,included:S,includedStart:Ct,includedEnd:yt,range:A,tabIndex:be,ariaLabelForHandle:Oe,ariaLabelledByForHandle:Ye,ariaValueTextFormatterForHandle:Ie}},[W,He,Ee,M,ke,S,Ct,yt,A,be,Oe,Ye,Ie]);return t.createElement(oe.Provider,{value:$t},t.createElement("div",{ref:Me,className:Ce()(i,u,(r={},(0,q.Z)(r,"".concat(i,"-disabled"),M),(0,q.Z)(r,"".concat(i,"-vertical"),z),(0,q.Z)(r,"".concat(i,"-horizontal"),!z),(0,q.Z)(r,"".concat(i,"-with-marks"),Qe.length),r)),style:s,onMouseDown:Rt},t.createElement("div",{className:"".concat(i,"-rail"),style:ce}),t.createElement(V,{prefixCls:i,style:$,values:$e,startPoint:O,onStartMove:Pt?mt:null}),t.createElement(Pe,{prefixCls:i,marks:Qe,dots:Se,style:Xe,activeStyle:J}),t.createElement(ie,{ref:me,prefixCls:i,style:ae,values:ot,draggingIndex:ft,onStartMove:mt,onOffsetChange:Dt,onFocus:R,onBlur:y,handleRender:ve}),t.createElement(Be,{prefixCls:i,marks:Qe,onClick:st})))}),Fe=ee,Le=Fe}}]);
