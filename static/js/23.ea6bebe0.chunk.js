(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{135:function(t,e,n){"use strict";n.r(e);var c=n(19),i=n(80),a=n(12),o=n(81),r=n.n(o),s=n(0),u=n.n(s),f=n(45),b=n.n(f),d=n(83),l=n(145);e.default=u.a.memo((function(t){var e=t.mapStatistic,n=t.setMapStatistic,o=Object(l.a)(),f=Object(i.a)(o,2),h=f[0],p=f[1].width,m=Object(s.useState)(!1),O=Object(i.a)(m,2),v=O[0],j=O[1],w=Object(s.useState)(0),g=Object(i.a)(w,2),y=g[0],S=g[1],k=Object(d.c)((function(){return{opacity:0,background:"".concat(a.s[e].color,"20"),transform:"translateX(".concat(p*a.n.indexOf(e)*.25,"px)"),config:d.b.gentle}})),x=Object(i.a)(k,2),E=x[0],R=x[1];Object(s.useEffect)((function(){p>0&&b.a.unstable_batchedUpdates((function(){R({transform:"translateX(".concat(p*a.n.indexOf(e)*.25,"px)"),opacity:1,background:"".concat(a.s[e].color,"20"),delay:0===y?1500:0,onStart:j.bind(void 0,!0),onRest:j.bind(void 0,!1)})}))}),[y,e,R,p]);var M=Object(s.useCallback)((function(t){S((function(t){return t+1})),n(t)}),[n]);return u.a.createElement("div",{className:"MapSwitcher",ref:h},u.a.createElement(d.a.div,{className:"highlight",style:E}),a.n.map((function(t,e){return u.a.createElement("div",{key:e,className:r()("clickable",Object(c.a)({},"is-".concat(t),!v)),onClick:M.bind(void 0,t)})})))}),(function(t,e){return t.mapStatistic===e.mapStatistic}))},145:function(t,e,n){"use strict";var c=n(0),i="undefined"!==typeof window?c.useLayoutEffect:c.useEffect,a=n(88),o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=a.a&&window.ResizeObserver?function(){var t=Object(c.useState)(null),e=t[0],n=t[1],a=Object(c.useState)(o),r=a[0],s=a[1],u=Object(c.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,c=e.y,i=e.width,a=e.height,o=e.top,r=e.left,u=e.bottom,f=e.right;s({x:n,y:c,width:i,height:a,top:o,left:r,bottom:u,right:f})}}))}),[]);return i((function(){if(e)return u.observe(e),function(){u.disconnect()}}),[e]),[n,r]}:function(){return[function(){},o]}}}]);
//# sourceMappingURL=23.ea6bebe0.chunk.js.map