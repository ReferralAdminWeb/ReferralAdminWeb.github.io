!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"ant-design-pro","b":"webpack","f":[["40.6cf622b8.async.js",40],["p__BotUserData__TradersRanking__index.0c04656e.async.js",45],["p__BotUserData__NewUsers__index.2ffbdcf3.async.js",57],["p__BotTradingData__index.bc62ad1c.async.js",82],["p__BotUserData__Traders__index.60856c0f.async.js",95],["t__plugin-layout__Layout.5012e1ab.chunk.css",301],["t__plugin-layout__Layout.eb6572be.async.js",301],["p__AdminList__index.0a5cafea.async.js",362],["p__User__Login__index.8567db40.async.js",366],["390.83388097.async.js",390],["393.a153ae4b.async.js",393],["p__VipList__index.289bd972.async.js",401],["425.7ddf3900.async.js",425],["430.31288cc2.async.js",430],["p__Account__Setting__index.9d4acf5c.async.js",463],["482.190e11cd.async.js",482],["521.176263ba.async.js",521],["p__404.f0515a6e.async.js",571],["p__Overall__index.fe8a47ba.chunk.css",671],["p__Overall__index.9eb5e9f6.async.js",671],["772.912babde.async.js",772],["889.b23904ea.async.js",889],["905.faaab627.async.js",905],["973.0ba208ff.async.js",973],["p__BotUserData__ChannelTraffic__index.e9b2bada.async.js",997]],"r":{"/*":[17,22],"/":[5,6,12,13,22],"/overall":[10,13,15,18,19,20,21,23,5,6,12,22],"/vipList":[0,10,11,13,15,16,20,21,22,5,6,12],"/adminList":[7,13,16,20,21,22,5,6,12],"/botTradingData":[3,13,15,16,20,21,22,5,6,12],"/user/login":[8,13,20],"/account/setting":[13,14,20,5,6,12,22],"/botUserData/newUsers":[2,13,16,20,21,22,5,6,12],"/botUserData/channelTraffic":[13,16,20,21,22,24,5,6,12],"/botUserData/traders":[4,13,16,20,21,22,5,6,12],"/botUserData/tradersRanking":[0,1,10,13,15,16,20,21,22,5,6,12]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();