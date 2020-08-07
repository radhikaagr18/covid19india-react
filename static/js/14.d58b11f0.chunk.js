(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{102:function(e,t,a){"use strict";var n=a(80),r=a(100),i=a(0),l=a.n(i),c=a(83);t.a=function(e){var t=e.data,a=e.children,o=Object(i.useState)(!1),s=Object(n.a)(o,2),u=s[0],d=s[1],m=Object(c.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return l.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:f.bind(void 0)},a,m.map((function(e){var a=e.item,n=e.key,r=e.props;return a?l.a.createElement(c.a.div,{key:n,style:r},l.a.createElement("div",{className:"message"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):l.a.createElement(c.a.div,{key:n})})))}},146:function(e,t,a){"use strict";var n=a(19),r=a(102),i=a(12),l=a(31),c=a(87),o=a(81),s=a.n(o),u=a(84),d=a.n(u),m=a(91),f=a(0),g=a.n(f),b=a(250),h=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},p=function(e,t){var a=void 0===t?{}:t,n=a.isPreventDefault,r=void 0===n||n,i=a.delay,l=void 0===i?300:i,c=Object(f.useRef)(),o=Object(f.useRef)(),s=Object(f.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",h,{passive:!1}),o.current=t.target),c.current=setTimeout((function(){return e(t)}),l)}),[e,l]),u=Object(f.useCallback)((function(){c.current&&clearTimeout(c.current),r&&o.current&&o.current.removeEventListener("touchend",h)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}};t.a=g.a.memo((function(e){var t=e.handleSort,a=e.sortData,o=e.setSortData,u=e.statistic,d=Object(b.a)().t,f=p((function(){a.sortColumn===u&&o(Object(m.a)(a,(function(e){e.delta=!a.delta})))}),{isPreventDefault:!1});return g.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,u)},f),a.sortColumn===u&&g.a.createElement("div",{className:s()("sort-icon",Object(n.a)({invert:a.isAscending},"is-".concat(u),a.delta))},g.a.createElement(c.e,{size:10})),g.a.createElement("div",null,d(Object(l.k)(i.s[u].displayName))),"other"===u&&g.a.createElement(r.a,{data:"Migrated cases or non-COVID deaths"},g.a.createElement(c.j,{size:14})))}),(function(e,t){return!!d()(e.sortData,t.sortData)}))},172:function(e,t,a){var n=a(173),r=["getDistricts"];e.exports=function(){var e=new Worker(a.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},173:function(e,t){e.exports=function(e,t){var a=0,n={};e.addEventListener("message",(function(t){var a=t.data;if("RPC"===a.type)if(a.id){var r=n[a.id];r&&(delete n[a.id],a.error?r[1](Object.assign(Error(a.error.message),a.error)):r[0](a.result))}else{var i=document.createEvent("Event");i.initEvent(a.method,!1,!1),i.data=a.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,l){var c=++a;n[c]=[i,l],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(r)})}))}}))}},245:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(146),i=a(0),l=a.n(i),c=a(94),o=function(){var e=window.innerWidth,t=e>769?448:e;return l.a.createElement("div",{className:"TableLoader"},l.a.createElement(c.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},l.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),l.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),l.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},s=a(12),u=a(87),d=a(81),m=a.n(d),f=function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){var e=window.setTimeout((function(){r((function(e){return e===s.u.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:m()("is-".concat(s.u[a]))},l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Delta [long press]"))},g=a(100),b=a(31),h=a(84),p=a.n(h),v=a(91),E=a(250),O=a(38),j=a(83),y=a(212),C=a(172),N=a.n(C),k=Object(i.lazy)((function(){return a.e(33).then(a.bind(null,246))}));t.default=l.a.memo((function(e){var t=this,a=e.data,c=e.regionHighlighted,d=e.setRegionHighlighted,h=e.expandTable,p=e.setExpandTable,C=Object(E.a)().t,x=Object(y.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),T=Object(n.a)(x,2),w=T[0],S=T[1],D=Object(i.useCallback)((function(e){w.sortColumn!==e?S(Object(v.a)(w,(function(t){t.sortColumn=e}))):S(Object(v.a)(w,(function(e){e.isAscending=!w.isAscending})))}),[w,S]),P=Object(j.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:j.b.wobbly}),z=Object(i.useState)(),H=Object(n.a)(z,2),L=H[0],M=H[1],R=Object(i.useState)("States"),A=Object(n.a)(R,2),U=A[0],I=A[1],K=Object(i.useState)(!1),q=Object(n.a)(K,2),B=q[0],F=q[1],G=Object(i.useState)(!1),J=Object(n.a)(G,2),W=J[0],_=J[1],V=Object(i.useCallback)((function(e,t){if("regionName"!==w.sortColumn){var n=s.s[w.sortColumn],r=w.delta&&!n.hideDelta?"delta":"total",i=Object(b.h)((null===L||void 0===L?void 0:L[e])||a[e],r,w.sortColumn,B),l=Object(b.h)((null===L||void 0===L?void 0:L[t])||a[t],r,w.sortColumn,B);return w.isAscending?i-l:l-i}var c,o,u=(null===L||void 0===L||null===(c=L[e])||void 0===c?void 0:c.districtName)||s.r[e],d=(null===L||void 0===L||null===(o=L[t])||void 0===o?void 0:o.districtName)||s.r[t];return w.isAscending?u.localeCompare(d):d.localeCompare(u)}),[L,B,w.delta,w.isAscending,w.sortColumn,a]),X=Object(i.useCallback)((function(){I((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(i.useEffect)((function(){var e=N()();e.getDistricts(a),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(M(t.data),e.terminate())}))}),[U,a]);var Q=Object(j.f)(W,null,{from:g.h,enter:g.g,leave:g.h}),Y=h?s.v:s.u;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-top"},l.a.createElement(j.a.div,{className:m()("option-toggle",{"is-highlighted":"Districts"===U}),onClick:X,style:P[0]},l.a.createElement(u.l,{size:14})),l.a.createElement(j.a.div,{className:m()("million-toggle",{"is-highlighted":B}),onClick:F.bind(this,!B),style:P[0]},l.a.createElement("span",null,"10L")),l.a.createElement(j.a.div,{className:m()("info-toggle",{"is-highlighted":W}),onClick:_.bind(this,!W),style:P[0]},l.a.createElement(u.n,{size:14})),l.a.createElement(j.a.div,{className:m()("expand-table-toggle",{"is-highlighted":h}),style:P[1],onClick:p.bind(this,!h)},l.a.createElement(u.f,{size:16}))),Q.map((function(e){var t=e.item,a=e.key,r=e.props;return t?l.a.createElement(j.a.div,{key:a,className:"table-helper",style:r},l.a.createElement("div",{className:"helper-top"},l.a.createElement("div",{className:"helper-left"},l.a.createElement("div",{className:"info-item"},l.a.createElement("span",null,l.a.createElement(u.l,{size:14})),l.a.createElement("p",null,"Toggle between States/Districts")),l.a.createElement("div",{className:"info-item"},l.a.createElement("h5",null,"10L"),l.a.createElement("p",null,"Per Ten Lakh People")),l.a.createElement("div",{className:"info-item sort"},l.a.createElement("span",null,l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Descending")),l.a.createElement("div",{className:"info-item sort invert"},l.a.createElement("span",null,l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Ascending")),l.a.createElement("div",{className:"info-item sort"},l.a.createElement(f,null)),l.a.createElement("div",{className:"info-item notes"},l.a.createElement("span",null,l.a.createElement(u.j,{size:15})),l.a.createElement("p",null,"Notes"))),l.a.createElement("div",{className:"helper-right"},l.a.createElement("div",{className:"info-item"},l.a.createElement("p",null,"Units")),Object.entries({"1K":3,"1L":5,"1Cr":7}).map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"info-item",key:a},l.a.createElement("h5",null,a),l.a.createElement("p",null,"10",l.a.createElement("sup",{style:{verticalAlign:"baseline",position:"relative",top:"-.4em"}},r)))})))),l.a.createElement("h5",{className:"text"},C("Compiled from State Govt. numbers"),","," ",l.a.createElement(O.b,{to:"/about"},C("know more"),"!"))):null})),l.a.createElement("div",{className:"table-container"},l.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(Y.length+1,", auto)")}},l.a.createElement("div",{className:"row heading"},l.a.createElement("div",{className:"cell heading",onClick:D.bind(this,"regionName")},l.a.createElement("div",null,C("States"===U?"State/UT":"District")),"regionName"===w.sortColumn&&l.a.createElement("div",{className:m()("sort-icon",{invert:w.isAscending})},l.a.createElement(u.e,{size:10}))),Y.map((function(e){return l.a.createElement(r.a,Object.assign({key:e},{statistic:e,sortData:w,setSortData:S},{handleSort:D.bind(t,e)}))}))),"States"===U&&Object.keys(a).filter((function(e){return"TT"!==e&&!(e===s.z&&B)})).sort((function(e,t){return V(e,t)})).map((function(e){return l.a.createElement(k,Object.assign({key:e,data:a[e]},{stateCode:e,isPerMillion:B,regionHighlighted:c,setRegionHighlighted:d,expandTable:h}))})),"Districts"===U&&!L&&l.a.createElement(o,null),"Districts"===U&&L&&Object.keys(L).sort((function(e,t){return V(e,t)})).slice(0,s.c).map((function(e){return l.a.createElement(k,Object.assign({key:e,data:L[e],districtName:L[e].districtName},{isPerMillion:B,regionHighlighted:c,setRegionHighlighted:d,expandTable:h}))})),l.a.createElement(k,Object.assign({key:"TT",data:a.TT,stateCode:"TT"},{isPerMillion:B,regionHighlighted:c,setRegionHighlighted:d,expandTable:h})))))}),(function(e,t){var a,n,r,i;return!!p()(null===(a=e.regionHighlighted)||void 0===a?void 0:a.districtName,null===(n=t.regionHighlighted)||void 0===n?void 0:n.districtName)&&(!!p()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&(!!p()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!p()(e.expandTable,t.expandTable)))}))},94:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,c=e.children,o=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,m=e.interval,f=e.rtl,g=e.speed,b=e.style,h=e.title,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=d||Math.random().toString(36).substring(6),E=v+"-diff",O=v+"-animated-diff",j=v+"-aria",y=f?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",N=g+"s";return Object(n.createElement)("svg",r({"aria-labelledby":j,role:"img",style:r(r({},b),y)},p),h?Object(n.createElement)("title",{id:j},h):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+O+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:E},c),Object(n.createElement)("linearGradient",{id:O},Object(n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?Object(n.createElement)(i,r({},e)):Object(n.createElement)(c,r({},e))},c=function(e){return Object(n.createElement)(l,r({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=l}}]);
//# sourceMappingURL=14.d58b11f0.chunk.js.map