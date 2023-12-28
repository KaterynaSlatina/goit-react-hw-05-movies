"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[695],{174:function(t,e,n){n.d(e,{Z:function(){return f}});var r,a=n(532),c=n(168),u=n(686),o=n(87),s=(0,u.Z)(o.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  text-decoration-style: none;\n  color: black;\n\n  &:hover {\n    color: darkblue;\n    font-size: 20px;\n    transition: 0.3sec;\n  }\n"]))),i=n(184),f=function(t){var e=t.movies;return(0,i.jsx)(a.e,{children:e.map((function(t){return(0,i.jsx)(s,{to:"movies/".concat(t.id),children:t.title},t.id)}))})}},458:function(t,e,n){n.d(e,{Bt:function(){return l},bI:function(){return f},wr:function(){return s},y:function(){return p},yK:function(){return i}});var r=n(861),a=n(687),c=n.n(a),u=n(340),o="4a774717439e170e5cef6e4dd20f22c7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},532:function(t,e,n){n.d(e,{e:function(){return o},v:function(){return s}});var r,a,c=n(168),u=n(686),o=u.Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),s=u.Z.h1(a||(a=(0,c.Z)(["\n  text-align: center;\n"])))},695:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(687),u=n.n(c),o=n(791),s=n(87),i=n(689),f=n(458),p="Search_btnSearch__phQip",l="Search_searchMoviesList__nr4C2",v=n(184),h=function(t){var e=t.submit,n=(0,o.useState)(""),r=(0,a.Z)(n,2),c=r[0],u=r[1],h=(0,s.lr)(),d=(0,a.Z)(h,2),m=d[0],x=d[1],Z=(0,i.TH)(),y=(0,o.useState)([]),b=(0,a.Z)(y,2),g=b[0],k=b[1];(0,o.useEffect)((function(){var t=m.get("query");t&&((0,f.bI)(t).then(k),u(localStorage.getItem("searchInputData")))}),[m]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c),""!==c.trim()&&(x({query:c}),localStorage.setItem("searchQuery",c),localStorage.setItem("searchInputData",c))},children:[(0,v.jsx)("button",{className:p,type:"submit",children:(0,v.jsx)("span",{children:"Search"})}),(0,v.jsx)("input",{name:"inputData",value:c,onChange:function(t){var e=t.target.value;u(e),localStorage.setItem("searchInputData",e)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),g.length>0&&(0,v.jsx)("ul",{children:g.map((function(t){var e=t.title,n=t.id;return(0,v.jsx)("li",{className:l,children:(0,v.jsx)(s.rU,{to:"/movies/".concat(n),state:{from:Z},children:e})},n)}))})]})},d=n(174),m=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],i=(0,s.lr)(),p=(0,a.Z)(i,2),l=p[0],m=p[1],x=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.bI)(e);case 3:n=t.sent,c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();(0,o.useEffect)((function(){l&&x(l)}),[l]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{submit:function(t){m(t)}}),(0,v.jsx)(d.Z,{movies:n})]})}}}]);
//# sourceMappingURL=695.cad1bd3e.chunk.js.map