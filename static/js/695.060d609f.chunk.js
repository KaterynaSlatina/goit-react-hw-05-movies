"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[695],{458:function(t,e,r){r.d(e,{Bt:function(){return l},bI:function(){return f},wr:function(){return i},y:function(){return p},yK:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(340),s="4a774717439e170e5cef6e4dd20f22c7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},695:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(87),o=r(689),f=r(458),p="Search_btnSearch__phQip",l="Search_searchMoviesList__nr4C2",v=r(184),h=function(t){t.submit;var e=(0,s.useState)(""),r=(0,a.Z)(e,2),n=r[0],c=r[1],u=(0,i.lr)(),h=(0,a.Z)(u,2),d=h[0],m=h[1],x=(0,o.TH)(),b=(0,s.useState)([]),y=(0,a.Z)(b,2),k=y[0],w=y[1];(0,s.useEffect)((function(){var t=d.get("query");t&&(0,f.bI)(t).then(w)}),[d]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==n.trim()&&m({query:n})},children:[(0,v.jsx)("button",{className:p,type:"submit",children:(0,v.jsx)("span",{children:"Search"})}),(0,v.jsx)("input",{name:"inputData",value:n,onChange:function(t){var e=t.target.value;c(e)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),k.length>0&&(0,v.jsx)("ul",{children:k.map((function(t){var e=t.title,r=t.id;return(0,v.jsx)("li",{className:l,children:(0,v.jsx)(i.rU,{to:"/movies/".concat(r),state:{from:x},children:e})},r)}))})]})},d=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],o=(0,i.lr)(),p=(0,a.Z)(o,2),l=p[0],d=p[1],m=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.bI)(e);case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){l&&m(l)}),[l]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{submit:function(t){d(t)}}),r.map((function(t){return(0,v.jsx)(i.rU,{to:"/movies/".concat(t.id),children:t.title},t.id)}))]})}}}]);
//# sourceMappingURL=695.060d609f.chunk.js.map