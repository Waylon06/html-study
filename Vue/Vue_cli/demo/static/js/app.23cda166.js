(function(){"use strict";var t={3333:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},s=[],o=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")])])])}],a={name:"BannerName"},u=a,c=n(1001),v=(0,c.Z)(u,o,l,!1,null,null,null),f=v.exports,p={name:"App",components:{Banner:f}},h=p,m=(0,c.Z)(h,r,s,!1,null,null,null),d=m.exports,_=n(2631),g=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是About的内容")])])}],b={name:"AboutName",beforeRouteEnter(t,e,n){console.log(t,e,n)},beforeRouteLeave(t,e,n){console.log(t,e,n)}},y=b,x=(0,c.Z)(y,g,w,!1,null,null,null),C=x.exports,k=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"NewsName"}},[e("router-view")],1)],1)])},N=[],Z={name:"HomeName"},O=Z,A=(0,c.Z)(O,k,N,!1,null,null,null),P=A.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{path:"/home/message/detail",query:{id:n.id,title:n.title}}}},[t._v(t._s(n.title)+" ")]),t._v("   ")],1)})),0),e("hr"),e("router-view")],1)},B=[],H={name:"MessageName",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}}},L=H,M=(0,c.Z)(L,j,B,!1,null,null,null),R=M.exports,T=function(){var t=this,e=t._self._c;return e("div",[e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎来到这里")]),t._m(0),t._m(1),t._m(2)])])},q=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],D={name:"NewsName",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},E=D,I=(0,c.Z)(E,T,q,!1,null,null,null),F=I.exports,V=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},$=[],z={name:"DetailName",props:["id","title"],mounted(){console.log(this.$route)}},G=z,J=(0,c.Z)(G,V,$,!1,null,null,null),K=J.exports;const Q=new _.ZP({routes:[{path:"/about",component:C,meta:{title:"关于"}},{path:"/home",component:P,meta:{title:"主页"},children:[{path:"news",component:F,meta:{isAuth:!0,title:"新闻"}},{path:"message",component:R,meta:{isAuth:!0,title:"信息"},children:[{path:"detail",component:K,meta:{isAuth:!0,title:"详情"},props({query:{id:t,title:e}}){return{id:t,title:e}}}]}]}]});var S=Q;i.ZP.use(_.ZP),i.ZP.config.productionTip=!1,new i.ZP({el:"#app",render:t=>t(d),router:S})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,s){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],s=t[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(l=!1,s<o&&(o=s));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,o=i[0],l=i[1],a=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(e&&e(i);u<o.length;u++)s=o[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},i=self["webpackChunkhello"]=self["webpackChunkhello"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3333)}));i=n.O(i)})();
//# sourceMappingURL=app.23cda166.js.map