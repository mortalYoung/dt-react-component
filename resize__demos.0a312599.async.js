"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8281],{92722:function(D,u,e){e.r(u);var a=e(54306),r=e.n(a),t=e(50959),c=e(58110),n=e(11527);u.default=function(){var s=(0,t.useState)(window.innerWidth),_=r()(s,2),d=_[0],i=_[1],E=(0,t.useState)(window.innerHeight),l=r()(E,2),m=l[0],h=l[1],o=(0,t.useCallback)(function(){i(window.innerWidth),h(window.innerHeight)},[]);return(0,n.jsx)(c.Z,{onResize:o,children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("pre",{children:["window\u9AD8\u5EA6: ",d]}),(0,n.jsxs)("pre",{children:["window\u5BBD\u5EA6: ",m]})]})})}},60493:function(D,u,e){e.r(u);var a=e(54306),r=e.n(a),t=e(50959),c=e(58110),n=e(11527);u.default=function(){var s=(0,t.useState)(0),_=r()(s,2),d=_[0],i=_[1],E=(0,t.useState)(0),l=r()(E,2),m=l[0],h=l[1],o=(0,t.useRef)(null),v=(0,t.useCallback)(function(){i(o.current.clientWidth),h(o.current.clientHeight)},[]);return(0,n.jsxs)(c.Z,{onResize:v,observerEle:o.current,children:[(0,n.jsx)("textarea",{ref:o,style:{resize:"both",maxWidth:"100%"}}),(0,n.jsxs)("pre",{children:["\u5F53\u524D\u5143\u7D20\u7684\u53EF\u89C6\u5BBD: ",d]}),(0,n.jsxs)("pre",{children:["\u5F53\u524D\u5143\u7D20\u7684\u53EF\u89C6\u5BBD: ",m]})]})}},58110:function(D,u,e){var a=e(50959),r=e(11527),t=function(n){var s=n.observerEle,_=n.onResize,d=n.children;return(0,a.useEffect)(function(){if(typeof _=="function")if(s){var i=new ResizeObserver(_);return i.observe(s),function(){i.unobserve(s)}}else return window.addEventListener("resize",_,!1),function(){window.removeEventListener("resize",_,!1)}},[_,s]),(0,r.jsx)(r.Fragment,{children:d})};u.Z=t}}]);
