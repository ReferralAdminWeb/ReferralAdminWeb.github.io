"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[997],{15374:function(B,D,u){u.r(D);var U=u(15009),_=u.n(U),M=u(99289),g=u.n(M),L=u(34157),o=u(90930),c=u(38521),m=u(94272),O=u(67294),b=u(85893),A=function(){var R=(0,O.useRef)(),h=(0,m.useIntl)(),y=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:h.formatMessage({id:"date"}),dataIndex:"date",hideInSearch:!0},{title:h.formatMessage({id:"pages.vipReferral"}),dataIndex:"vipReferral",hideInSearch:!0},{title:h.formatMessage({id:"pages.userReferral"}),dataIndex:"userReferral",hideInSearch:!0},{title:h.formatMessage({id:"pages.communityReferral"}),dataIndex:"communityReferral",hideInSearch:!0},{title:"Buy Bot",dataIndex:"buyBot",hideInSearch:!0},{title:"Token Scanner",dataIndex:"tokenScanner",hideInSearch:!0},{title:"Token Finder",dataIndex:"tokenFinder",hideInSearch:!0},{title:"Web Link",dataIndex:"webLink",hideInSearch:!0},{title:"IOS Lite",dataIndex:"iosLite",hideInSearch:!0},{title:"KOLHunter",dataIndex:"kolHunter",hideInSearch:!0},{title:"H5",dataIndex:"h5",hideInSearch:!0}];return(0,b.jsx)(o._z,{children:(0,b.jsx)(c.Z,{actionRef:R,rowKey:"id",search:{labelWidth:120},request:function(){var v=g()(_()().mark(function I(d,T){var p,E,f,n,a,t,s,r,i;return _()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:a=!1,t="",l.t0=_()().keys(T);case 3:if((l.t1=l.t0()).done){l.next=11;break}return s=l.t1.value,t=s,r=T[s],(r==null?void 0:r.toString())=="descend"&&(a=!0),l.abrupt("break",11);case 11:return d.page=d==null?void 0:d.current,delete d.current,l.next=15,(0,L._y)(d,t,a);case 15:return i=l.sent,console.log({data:(p=i.data)===null||p===void 0?void 0:p.list,success:i.code==0,total:(E=i.data)===null||E===void 0?void 0:E.total}),l.abrupt("return",{data:(f=i.data)===null||f===void 0?void 0:f.list,success:i.code==0,total:(n=i.data)===null||n===void 0?void 0:n.total});case 18:case"end":return l.stop()}},I)}));return function(I,d){return v.apply(this,arguments)}}(),columns:y})})};D.default=A},34157:function(B,D,u){u.d(D,{$P:function(){return I},HJ:function(){return y},Ul:function(){return R},_y:function(){return A},h0:function(){return O},oX:function(){return T},pE:function(){return E}});var U=u(15009),_=u.n(U),M=u(97857),g=u.n(M),L=u(99289),o=u.n(L),c=u(94272),m="https://api.avevip.com";function O(n,a,t){return b.apply(this,arguments)}function b(){return b=o()(_()().mark(function n(a,t,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a.sortField=t,a.sortDesc=s),e.next=3,(0,c.request)(m+"/api/userData/getNewUserList",{method:"GET",params:g()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},n)})),b.apply(this,arguments)}function A(n,a,t){return P.apply(this,arguments)}function P(){return P=o()(_()().mark(function n(a,t,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a.sortField=t,a.sortDesc=s),e.next=3,(0,c.request)(m+"/api/userData/getChannelTrafficList",{method:"GET",params:g()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function R(n,a,t){return h.apply(this,arguments)}function h(){return h=o()(_()().mark(function n(a,t,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a.sortField=t,a.sortDesc=s),e.next=3,(0,c.request)(m+"/api/userData/getTradersList",{method:"GET",params:g()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},n)})),h.apply(this,arguments)}function y(n,a,t){return v.apply(this,arguments)}function v(){return v=o()(_()().mark(function n(a,t,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.request)(m+"/api/userData/get24HTraderRanking",{method:"GET",params:g()({},a)});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},n)})),v.apply(this,arguments)}function I(n){return d.apply(this,arguments)}function d(){return d=o()(_()().mark(function n(a){var t;return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.request)(m+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:a}});case 2:if(t=r.sent,t.code===0){r.next=5;break}throw t.msg;case 5:return r.abrupt("return",t);case 6:case"end":return r.stop()}},n)})),d.apply(this,arguments)}function T(){return p.apply(this,arguments)}function p(){return p=o()(_()().mark(function n(){var a;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,c.request)(m+"/api/userData/getAllChainTradersList",{method:"GET"});case 2:if(a=s.sent,a.code===0){s.next=5;break}throw a.msg;case 5:return s.abrupt("return",a);case 6:case"end":return s.stop()}},n)})),p.apply(this,arguments)}function E(n,a,t){return f.apply(this,arguments)}function f(){return f=o()(_()().mark(function n(a,t,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.request)(m+"/api/userData/getUserDailyTradingPageList",{method:"GET",params:{guid:a,chain:t,page:s}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},n)})),f.apply(this,arguments)}}}]);