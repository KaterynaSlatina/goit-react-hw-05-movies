"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[218],{458:function(t,n,r){r.d(n,{Bt:function(){return v},bI:function(){return p},wr:function(){return o},y:function(){return f},yK:function(){return i}});var e=r(861),a=r(757),c=r.n(a),u=r(340),s="4a774717439e170e5cef6e4dd20f22c7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},218:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(861),a=r(439),c=r(757),u=r.n(c),s=r(458),o=r(791),i=r(689),p="Reviews_btnGoBack__88GqJ",f=r(184),v=function(){var t=(0,i.UO)().movieId,n=(0,o.useState)([]),r=(0,a.Z)(n,2),c=r[0],v=r[1];(0,o.useEffect)((function(){var n=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Bt)(t);case 3:r=n.sent,v(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();t&&n()}),[t]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{onClick:function(){window.history.back()},className:p,children:"Go back"}),c&&c.length>0?c.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author:",t.author]}),(0,f.jsx)("p",{children:t.content})]},t.id)})):(0,f.jsx)("p",{children:"No reviews"})]})}}}]);
//# sourceMappingURL=218.2a1175f0.chunk.js.map