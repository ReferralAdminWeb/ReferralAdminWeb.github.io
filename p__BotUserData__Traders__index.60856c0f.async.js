"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[95],{84339:function(j,D,_){_.r(D);var M=_(15009),u=_.n(M),A=_(99289),g=_.n(A),I=_(34157),o=_(90930),c=_(38521),m=_(94272),O=_(67294),f=_(85893),L=function(){var B=(0,O.useRef)(),b=(0,m.useIntl)(),W=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:b.formatMessage({id:"date"}),dataIndex:"date",hideInSearch:!0},{title:"Total",dataIndex:"total",hideInSearch:!0},{title:"Web",dataIndex:"web",hideInSearch:!0},{title:"App",dataIndex:"app",hideInSearch:!0},{title:"TG Bot",dataIndex:"tgBot",hideInSearch:!0}];return(0,f.jsx)(o._z,{children:(0,f.jsx)(c.Z,{actionRef:B,rowKey:"id",search:{labelWidth:120},request:function(){var E=g()(u()().mark(function T(d,U){var p,v,h,s,a,t,n,r,i;return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:a=!1,t="",l.t0=u()().keys(U);case 3:if((l.t1=l.t0()).done){l.next=11;break}return n=l.t1.value,t=n,r=U[n],(r==null?void 0:r.toString())=="descend"&&(a=!0),l.abrupt("break",11);case 11:return d.page=d==null?void 0:d.current,delete d.current,l.next=15,(0,I.Ul)(d,t,a);case 15:return i=l.sent,console.log({data:(p=i.data)===null||p===void 0?void 0:p.list,success:i.code==0,total:(v=i.data)===null||v===void 0?void 0:v.total}),l.abrupt("return",{data:(h=i.data)===null||h===void 0?void 0:h.list,success:i.code==0,total:(s=i.data)===null||s===void 0?void 0:s.total});case 18:case"end":return l.stop()}},T)}));return function(T,d){return E.apply(this,arguments)}}(),columns:W})})};D.default=L},34157:function(j,D,_){_.d(D,{$P:function(){return T},HJ:function(){return W},Ul:function(){return B},_y:function(){return L},h0:function(){return O},oX:function(){return U},pE:function(){return v}});var M=_(15009),u=_.n(M),A=_(97857),g=_.n(A),I=_(99289),o=_.n(I),c=_(94272),m="https://api.avevip.com";function O(s,a,t){return f.apply(this,arguments)}function f(){return f=o()(u()().mark(function s(a,t,n){var r;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a.sortField=t,a.sortDesc=n),e.next=3,(0,c.request)(m+"/api/userData/getNewUserList",{method:"GET",params:g()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},s)})),f.apply(this,arguments)}function L(s,a,t){return P.apply(this,arguments)}function P(){return P=o()(u()().mark(function s(a,t,n){var r;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a.sortField=t,a.sortDesc=n),e.next=3,(0,c.request)(m+"/api/userData/getChannelTrafficList",{method:"GET",params:g()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},s)})),P.apply(this,arguments)}function B(s,a,t){return b.apply(this,arguments)}function b(){return b=o()(u()().mark(function s(a,t,n){var r;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a.sortField=t,a.sortDesc=n),e.next=3,(0,c.request)(m+"/api/userData/getTradersList",{method:"GET",params:g()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},s)})),b.apply(this,arguments)}function W(s,a,t){return E.apply(this,arguments)}function E(){return E=o()(u()().mark(function s(a,t,n){var r;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.request)(m+"/api/userData/get24HTraderRanking",{method:"GET",params:g()({},a)});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),E.apply(this,arguments)}function T(s){return d.apply(this,arguments)}function d(){return d=o()(u()().mark(function s(a){var t;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.request)(m+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:a}});case 2:if(t=r.sent,t.code===0){r.next=5;break}throw t.msg;case 5:return r.abrupt("return",t);case 6:case"end":return r.stop()}},s)})),d.apply(this,arguments)}function U(){return p.apply(this,arguments)}function p(){return p=o()(u()().mark(function s(){var a;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.request)(m+"/api/userData/getAllChainTradersList",{method:"GET"});case 2:if(a=n.sent,a.code===0){n.next=5;break}throw a.msg;case 5:return n.abrupt("return",a);case 6:case"end":return n.stop()}},s)})),p.apply(this,arguments)}function v(s,a,t){return h.apply(this,arguments)}function h(){return h=o()(u()().mark(function s(a,t,n){var r;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.request)(m+"/api/userData/getUserDailyTradingPageList",{method:"GET",params:{guid:a,chain:t,page:n}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),h.apply(this,arguments)}}}]);
