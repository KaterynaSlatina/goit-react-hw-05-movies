"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[374],{458:function(n,e,r){r.d(e,{Bt:function(){return d},bI:function(){return p},wr:function(){return s},y:function(){return l},yK:function(){return u}});var t=r(861),a=r(687),c=r.n(a),o=r(340),i="4a774717439e170e5cef6e4dd20f22c7";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},917:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,c,o,i=r(861),s=r(439),u=r(687),p=r.n(u),l=r(458),d=r(791),f=r(689),x=r(168),v=r(686),h=r(87),b=v.Z.ul(t||(t=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-left: -40px;\n"]))),m=(0,v.Z)(h.OL)(a||(a=(0,x.Z)(["\n  text-decoration: none;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n  background-color: skyblue;\n  color: blue;\n  border-radius: 5px;\n  padding: 10px 18px;\n  width: 55px;\n  padding: 5px 15px;\n  text-align: center;\n\n  &:hover {\n    background-color: blue;\n    color: aliceblue;\n    transition: 0.3s;\n  }\n"]))),g=v.Z.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),k=(0,v.Z)(h.rU)(o||(o=(0,x.Z)(["\n  text-decoration: none;\n  background-color: skyblue;\n  color: blue;\n  border-radius: 5px;\n  padding: 5px 10px;\n  &:hover {\n    background-color: blue;\n    color: aliceblue;\n    transition: 0.3s;\n  }\n"]))),w=r(184),Z=function(n){var e,r,t=n.propMovieDetail,a=(0,f.TH)(),c=(0,d.useRef)(null!==(e=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),o=t.title,i=t.release_date,s=t.vote_average,u=t.overview,p=t.poster_path,l=t.genres;return(0,w.jsxs)("div",{children:[(0,w.jsx)(k,{to:c.current,children:"Go back"}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("h2",{children:[o,"(",i,")"]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"User Score:"}),s&&10*Math.floor(s),"%"]}),(0,w.jsxs)(b,{children:[(0,w.jsx)("b",{children:"Genres:"}),l&&l.map((function(n){return(0,w.jsx)("li",{children:n.name},n.id)}))]}),(0,w.jsxs)("p",{children:[" ",u]}),t&&p&&(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(p),alt:o,width:300,height:400})]}),(0,w.jsx)("h3",{children:"Additional information:"}),(0,w.jsxs)(g,{children:[(0,w.jsx)(m,{to:"cast",children:"Cast"}),(0,w.jsx)(m,{to:"reviews",children:"Reviews"})]}),(0,w.jsx)(d.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading...."}),children:(0,w.jsx)(f.j3,{})})]})},j=function(){var n=(0,f.UO)().movieId,e=(0,d.useState)({}),r=(0,s.Z)(e,2),t=r[0],a=r[1];return(0,d.useEffect)((function(){var e=function(){var e=(0,i.Z)(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.yK)(n);case 3:r=e.sent,console.log("Response data-details",r),a(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n&&e()}),[n]),(0,w.jsx)(Z,{propMovieDetail:t})}}}]);
//# sourceMappingURL=374.b550fee2.chunk.js.map