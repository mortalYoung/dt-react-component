"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7170],{67061:function(s,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={"src-use-intersection-observer-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(332),n.e(7826),n.e(2038),n.e(2761),n.e(1622),n.e(478),n.e(2920),n.e(8434),n.e(7291),n.e(5681),n.e(301),n.e(115),n.e(2870),n.e(4183),n.e(27),n.e(7524),n.e(7280),n.e(4940),n.e(7955),n.e(4240),n.e(9732),n.e(2433)]).then(n.bind(n,25123))})),asset:{type:"BLOCK",id:"src-use-intersection-observer-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(78365).Z},react:{type:"NPM",value:"18.3.1"},"...ts":{type:"FILE",value:n(46177).Z}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0},"src-use-intersection-observer-demo-imglazy":{component:t.memo(t.lazy(function(){return Promise.all([n.e(5959),n.e(3517),n.e(1066),n.e(1270),n.e(4097),n.e(332),n.e(7826),n.e(2038),n.e(2761),n.e(1622),n.e(478),n.e(2920),n.e(8434),n.e(7291),n.e(5681),n.e(301),n.e(115),n.e(2870),n.e(4183),n.e(27),n.e(7524),n.e(7280),n.e(4940),n.e(7955),n.e(4240),n.e(9732),n.e(2433)]).then(n.bind(n,34733))})),asset:{type:"BLOCK",id:"src-use-intersection-observer-demo-imglazy",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(60963).Z},react:{type:"NPM",value:"18.3.1"},"...ts":{type:"FILE",value:n(46177).Z}},entry:"index.tsx",title:"\u56FE\u7247\u61D2\u52A0\u8F7D\u5B9E\u73B0"},context:void 0,renderOpts:void 0}}},80610:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u5904\u7406\u5143\u7D20\u662F\u5426\u8FDB\u5165\u53EF\u662F\u533A\u57DF",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"callback",paraId:1,tocIndex:6},{value:"\u5904\u7406\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:6},{value:"IntersectionObserverCallback",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"initialParams",paraId:1,tocIndex:6},{value:"\u521D\u59CB\u5316\u6570\u636E",paraId:1,tocIndex:6},{value:"Element",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"options",paraId:1,tocIndex:6},{value:"\u914D\u7F6E\u9879\uFF0CfreezeOnceVisible \u662F\u5426\u53EA\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:6},{value:"IntersectionObserverInit & { freezeOnceVisible : boolean }",paraId:1,tocIndex:6},{value:"{ freezeOnceVisible: false }",paraId:1,tocIndex:6}]},78365:function(s,e){e.Z=`import React from 'react';

import useIntersectionObserver from '..';

const Basic = () => {
    const handleObserverCb = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) alert('hi, \u6211\u5C55\u793A\u4E86');
    };

    const ref = useIntersectionObserver<HTMLDivElement>(handleObserverCb);

    return (
        <div style={{ height: 300, overflow: 'scroll' }}>
            <div style={{ height: 330 }}>\u5360\u4F4D\uFF0C\u5F80\u4E0B\u6ED1\u52A8</div>
            <div ref={ref}>
                <div>\u5C55\u793A\u4E86</div>
            </div>
        </div>
    );
};

export default Basic;
`},60963:function(s,e){e.Z=`import React from 'react';

import useIntersectionObserver from '..';

const Basic = () => {
    const handleObserverCb = ([entry]: IntersectionObserverEntry[]) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
            const _target = target as HTMLImageElement;
            _target.src = _target.dataset['src'] ?? '';
            _target.onload = () => {
                _target.style.opacity = '1';
            };
        }
    };

    const imgRef = useIntersectionObserver<HTMLImageElement>(handleObserverCb);

    return (
        <div style={{ height: 300, overflow: 'scroll' }}>
            <div style={{ height: 330 }}>\u5360\u4F4D\uFF0C\u5F80\u4E0B\u6ED1\u52A8</div>
            <img
                data-src="https://dtstack.github.io/dt-react-component/static/empty_overview.43b0eedf.png"
                ref={imgRef}
            />
        </div>
    );
};

export default Basic;
`},46177:function(s,e){e.Z=`import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = <T extends Element>(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit & { freezeOnceVisible?: boolean } = {}
) => {
    const ref = useRef<T | null>(null);

    const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options;
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const handleCallBack = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
    ) => {
        setEntry(entries[0]);
        callback(entries, observer);
    };

    useEffect(() => {
        const node = ref.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (frozen || !node) return;
        if (!hasIOSupport) {
            // \u5982\u679C\u4E0D\u652F\u6301 IntersectionObserver \u6267\u884C\u4E00\u4E2A\u9ED8\u8BA4\u884C\u4E3A
            const callbackEntry = {
                boundingClientRect: node.getBoundingClientRect() ?? null,
                intersectionRatio: 1,
                intersectionRect: node.getBoundingClientRect() ?? null,
                isIntersecting: true,
                rootBounds: null,
                target: node,
                time: Date.now(),
            };
            handleCallBack([callbackEntry], null as unknown as IntersectionObserver);
        }

        const observer = new IntersectionObserver(handleCallBack, { threshold, root, rootMargin });

        observer.observe(node);
        return () => observer.disconnect();
    }, [JSON.stringify(threshold), root, rootMargin, frozen]);

    return ref as MutableRefObject<T | null>;
};

export default useIntersectionObserver;
`}}]);
