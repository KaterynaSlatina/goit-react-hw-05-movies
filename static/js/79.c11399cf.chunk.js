"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{79:function(t,r,n){n.r(r),n.d(r,{default:function(){return m}});var e,a,c=n(861),u=n(439),i=n(687),o=n.n(i),s=n(458),p=n(791),f=n(689),d=n(168),h=n(686),v=h.Z.li(e||(e=(0,d.Z)(["\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  display: inline-block;\n  border: 1px;\n  box-shadow: 1px 0px 17px -5px gray;\n  text-align: center;\n  margin-right: 3px;\n  margin-bottom: 15px;\n"]))),l=h.Z.ul(a||(a=(0,d.Z)(["\n  position: relative;\n"]))),x=n(184),m=function(){var t=(0,f.UO)().movieId,r=(0,p.useState)([]),n=(0,u.Z)(r,2),e=n[0],a=n[1];return(0,p.useEffect)((function(){var r=function(){var r=(0,c.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.y)(t);case 3:n=r.sent,a(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();t&&r()}),[t]),(0,x.jsx)(l,{children:e.map((function(t){return(0,x.jsxs)(v,{children:[t.profile_path?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:"",width:200,height:300}):(0,x.jsx)("div",{children:"No image"}),(0,x.jsxs)("p",{children:["Actor:",t.name]}),(0,x.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))})}},458:function(t,r,n){n.d(r,{Bt:function(){return d},bI:function(){return p},wr:function(){return o},y:function(){return f},yK:function(){return s}});var e=n(861),a=n(687),c=n.n(a),u=n(340),i="4a774717439e170e5cef6e4dd20f22c7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,e.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=79.c11399cf.chunk.js.map