"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[695],{368:function(e,t,r){var n=r(758),a=r(87),c=r(184);t.Z=function(e){var t=e.movies;return(0,c.jsx)("ul",{className:n.Z.homeMovies,children:t.map((function(e){return(0,c.jsx)(a.rU,{to:"movies/".concat(e.id),children:e.title},e.id)}))})}},458:function(e,t,r){r.d(t,{Bt:function(){return l},bI:function(){return f},wr:function(){return o},y:function(){return p},yK:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(340),s="4a774717439e170e5cef6e4dd20f22c7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},695:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),o=r(87),i=r(689),f=r(458),p="Search_btnSearch__phQip",l="Search_searchMoviesList__nr4C2",h=r(184),v=function(e){var t=e.submit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),c=n[0],u=n[1],v=(0,o.lr)(),m=(0,a.Z)(v,2),d=m[0],x=m[1],Z=(0,i.TH)(),_=(0,s.useState)([]),g=(0,a.Z)(_,2),y=g[0],b=g[1];(0,s.useEffect)((function(){var e=d.get("query");e&&((0,f.bI)(e).then(b),u(localStorage.getItem("searchInputData")))}),[d]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),""!==c.trim()&&(x({query:c}),localStorage.setItem("searchQuery",c),localStorage.setItem("searchInputData",c))},children:[(0,h.jsx)("button",{className:p,type:"submit",children:(0,h.jsx)("span",{children:"Search"})}),(0,h.jsx)("input",{name:"inputData",value:c,onChange:function(e){var t=e.target.value;u(t),localStorage.setItem("searchInputData",t)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),y.length>0&&(0,h.jsx)("ul",{children:y.map((function(e){var t=e.title,r=e.id;return(0,h.jsx)("li",{className:l,children:(0,h.jsx)(o.rU,{to:"/movies/".concat(r),state:{from:Z},children:t})},r)}))})]})},m=r(368),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],i=(0,o.lr)(),p=(0,a.Z)(i,2),l=p[0],d=p[1],x=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.bI)(t);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){l&&x(l)}),[l]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{submit:function(e){d(e)}}),(0,h.jsx)(m.Z,{movies:r})]})}},758:function(e,t){t.Z={homeMovies:"Home_homeMovies__Ih1FG",textTrending:"Home_textTrending__NCxBG"}}}]);
//# sourceMappingURL=695.6493ef15.chunk.js.map