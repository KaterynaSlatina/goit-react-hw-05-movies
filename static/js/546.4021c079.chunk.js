"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[546],{174:function(n,t,e){e.d(t,{Z:function(){return p}});var r,a=e(532),c=e(168),o=e(686),u=e(87),i=(0,o.Z)(u.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  text-decoration-style: none;\n  color: black;\n\n  &:hover {\n    color: darkblue;\n    font-size: 20px;\n    transition: 0.3s;\n  }\n"]))),s=e(184),p=function(n){var t=n.movies;return(0,s.jsx)(a.e,{children:t.map((function(n){return(0,s.jsx)(i,{to:"movies/".concat(n.id),children:n.title},n.id)}))})}},458:function(n,t,e){e.d(t,{Bt:function(){return f},bI:function(){return p},wr:function(){return i},y:function(){return l},yK:function(){return s}});var r=e(861),a=e(687),c=e.n(a),o=e(340),u="4a774717439e170e5cef6e4dd20f22c7";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},532:function(n,t,e){e.d(t,{e:function(){return u},v:function(){return i}});var r,a,c=e(168),o=e(686),u=o.Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),i=o.Z.h1(a||(a=(0,c.Z)(["\n  text-align: center;\n"])))},546:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,o,u,i=e(861),s=e(439),p=e(687),l=e.n(p),f=e(791),d=e(87),h=e(689),v=e(458),x=e(168),m=e(686),Z=m.Z.form(r||(r=(0,x.Z)(["\n  text-align: center;\n"]))),b=m.Z.input(a||(a=(0,x.Z)(["\n  width: 300px;\n  height: 30px;\n"]))),g=m.Z.button(c||(c=(0,x.Z)(["\n  height: 35px;\n  background-color: skyblue;\n  border: none;\n  border-radius: 5px;\n  margin-right: 5px;\n  &:hover {\n    background-color: blue;\n    color: aliceblue;\n    transition: 0.3s;\n    cursor: pointer;\n  }\n"]))),k=m.Z.li(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 7px;\n  padding-top: 7px;\n"]))),y=(0,m.Z)(d.rU)(u||(u=(0,x.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover {\n    font-size: 20px;\n    color: darkblue;\n    transition: 0.3s;\n  }\n"]))),w=e(184),j=function(n){var t=n.submit,e=(0,f.useState)(""),r=(0,s.Z)(e,2),a=r[0],c=r[1],o=(0,d.lr)(),u=(0,s.Z)(o,2),i=u[0],p=u[1],l=(0,h.TH)(),x=(0,f.useState)([]),m=(0,s.Z)(x,2),j=m[0],I=m[1];(0,f.useEffect)((function(){var n=i.get("query");n&&((0,v.bI)(n).then(I),c(localStorage.getItem("searchInputData")))}),[i]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),t(a),""!==a.trim()&&(p({query:a}),localStorage.setItem("searchQuery",a),localStorage.setItem("searchInputData",a))},children:[(0,w.jsx)(g,{type:"submit",children:(0,w.jsx)("span",{children:"Search"})}),(0,w.jsx)(b,{name:"inputData",value:a,onChange:function(n){var t=n.target.value;c(t),localStorage.setItem("searchInputData",t)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),j.length>0&&(0,w.jsx)("ul",{children:j.map((function(n){var t=n.title,e=n.id;return(0,w.jsx)(k,{children:(0,w.jsx)(y,{to:"/movies/".concat(e),state:{from:l},children:t})},e)}))})]})},I=e(174),S=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,d.lr)(),c=(0,s.Z)(a,2),o=c[0],u=c[1],p=function(){var n=(0,i.Z)(l().mark((function n(t){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.bI)(t);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();(0,f.useEffect)((function(){o&&p(o)}),[o]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j,{submit:function(n){u(n)}}),(0,w.jsx)(I.Z,{movies:e})]})}}}]);
//# sourceMappingURL=546.4021c079.chunk.js.map