webpackJsonp([1],{0:function(t,e){},"20Ki":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("ul",{staticClass:"nav nav-pills"},[s("router-link",{attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[s("a",[t._v("Chat "),t.messages>0?s("span",{staticClass:"badge"},[t._v(t._s(t.messages))]):t._e()])]),t._v(" "),s("router-link",{attrs:{to:"/carousel",tag:"li","active-class":"active",exact:""}},[s("a",[t._v("Carousel")])]),t._v(" "),s("router-link",{attrs:{to:"/settings",tag:"li","active-class":"active",exact:""}},[s("a",[t._v("Settings")])])],1)])},staticRenderFns:[]},n=s("VU/8")({computed:{messages:function(){return this.$store.state.unreadMessages}}},i,!1,function(t){s("YnOM")},"data-v-36b36f0d",null).exports,r=s("/ocq"),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-message",class:{"my-msg":t.message.isMine}},[s("div",{staticClass:"chat-message-container"},[t.message.isMine?t._e():s("div",{staticClass:"chat-message-user"},[t._v("\n            "+t._s(t.message.user)+"\n        ")]),t._v(" "),s("div",{staticClass:"chat-message-content"},[t._v("\n            "+t._s(t.message.message)+"\n        ")])])])},staticRenderFns:[]},o={props:["messages"],components:{ChatMessage:s("VU/8")({props:["message"]},c,!1,function(t){s("nkbQ")},"data-v-f0ffba90",null).exports},watch:{messages:function(){var t=this;setTimeout(function(){t.$el.scrollTop=t.$el.scrollHeight},10)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"messages"},[e("div",{staticClass:"messages-container"},this._l(this.messages,function(t,s){return e("chat-message",{key:s,attrs:{message:t}})}))])},staticRenderFns:[]},u=s("VU/8")(o,l,!1,function(t){s("20Ki")},"data-v-267448c1",null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-form"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Send message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.sendMessage}},[t._v("Send")])])])])},staticRenderFns:[]},d=s("VU/8")({data:function(){return{message:""}},methods:{sendMessage:function(){this.message.length>0&&(this.$emit("newmessage",this.message),this.message="")}}},h,!1,function(t){s("VMFP")},"data-v-6276806d",null).exports,g=s("DmT9")("http://localhost:3000"),m={socket:g,send:function(t,e,s){g.emit(t,e,s)}},v={components:{ChatMessages:u,ChatForm:d},data:function(){return{messages:[],chatEnabled:!1,isActive:!0}},computed:{unreadMessages:function(){return this.$store.state.unreadMessages++},chatUser:function(){return this.$store.state.settings.chatUser}},methods:{addMessage:function(t){m.send("send-message",{message:t,user:this.chatUser})}},watch:{chatUser:function(t){m.send("update-user",t)}},created:function(){var t=this;t.chatUser?(m.send("update-user",t.chatUser),t.chatEnabled=!0):m.send("new-user","user",function(){}),m.socket.on("user-registered",function(e){console.log("user-registered"),t.$store.state.settings.chatUser=e.username,t.chatEnabled=!0}),m.socket.on("new-message",function(e){t.messages.push({isMine:e.user==t.chatUser,user:e.user,message:e.message}),console.log("active:",t.isActive),0==t.isActive&&t.$store.state.unreadMessages++})},deactivated:function(){this.isActive=!1},activated:function(){this.isActive=!0,this.$store.state.unreadMessages=0}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return this.chatEnabled?e("div",[e("chat-messages",{attrs:{messages:this.messages}}),this._v(" "),e("chat-form",{on:{newmessage:this.addMessage}})],1):e("div",[this._v("\n    Please wait...\n")])},staticRenderFns:[]},f=s("VU/8")(v,p,!1,null,null,null).exports,_={props:["image"],data:function(){return{imageStyle:{}}},computed:{height:function(){return this.$store.state.settings.carousel.height+"px"}},created:function(){var t=this,e=new Image;e.src=this.image,e.onload=function(){t.imageStyle={backgroundImage:"url("+t.image+")",opacity:1}}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel-image",style:{height:this.height}},[e("div",{staticClass:"img",style:this.imageStyle})])},staticRenderFns:[]},w={props:["images"],data:function(){return{xStart:null,yStart:null,swipeMinDiff:10,swipeType:null,pages:this.images.length-1,currentPage:0,transform:{}}},methods:{touchStart:function(t){this.xStart=t.touches[0].clientX,this.yStart=t.touches[0].clientY,console.log(this.xStart,this.yStart)},touchMove:function(t){if(this.xStart&&this.yStart){this.swipeType=null;var e=t.touches[0].clientX,s=t.touches[0].clientY,a=this.xStart-e,i=this.yStart-s;Math.abs(a)>Math.abs(i)?a>0?Math.abs(a)>this.swipeMinDiff&&(this.swipeType="left"):Math.abs(a)>this.swipeMinDiff&&(this.swipeType="right"):i>0?Math.abs(i)>this.swipeMinDiff&&(this.swipeType="up"):Math.abs(i)>this.swipeMinDiff&&(this.swipeType="down"),this.swipeType&&(this.xStart=null,this.yStart=null)}},touchEnd:function(){"left"==this.swipeType?this.scrollToNext():"right"==this.swipeType&&this.scrollToPrev()},scrollToNext:function(){this.currentPage+1<=this.pages&&(this.currentPage++,this.translate())},scrollToPrev:function(){this.currentPage-1>=0&&(this.currentPage--,this.translate())},translate:function(){var t=-100*this.currentPage+"%";this.transform={transform:"translateX("+t+")"}}},components:{CarouselImage:s("VU/8")(_,C,!1,function(t){s("l/uR")},"data-v-40d862ed",null).exports}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"carousel-ctrl carousel-ctrl-left",on:{click:function(e){t.scrollToPrev()}}},[s("i",{staticClass:"fa fa-angle-left"})]),t._v(" "),s("div",{staticClass:"carousel-images",style:t.transform,on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},t._l(t.images,function(t,e){return s("carousel-image",{key:e,attrs:{image:t}})})),t._v(" "),s("div",{staticClass:"carousel-ctrl carousel-ctrl-right",on:{click:function(e){t.scrollToNext()}}},[s("i",{staticClass:"fa fa-angle-right"})])])},staticRenderFns:[]},b={components:{CarouselImages:s("VU/8")(w,y,!1,function(t){s("XaUL")},"data-v-33d9e50c",null).exports},data:function(){return{images:[]}},computed:{height:function(){return this.$store.state.settings.carousel.height+"px"},width:function(){return this.$store.state.settings.carousel.width+"%"}},created:function(){for(var t=1;t<=10;t++)this.images.push("https://loremflickr.com/600/370/?"+t)},deactivated:function(){console.log("Carousel deactivated")},activated:function(){console.log("Carousel acitvated")},destroyed:function(){console.log("Carousel destroyed")}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel",style:{height:this.height,width:this.width}},[e("carousel-images",{attrs:{images:this.images}})],1)},staticRenderFns:[]},M=s("VU/8")(b,x,!1,function(t){s("SGL5")},"data-v-aa6a3c20",null).exports,$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"panel panel-default"},[t._m(0,!1,!1),t._v(" "),s("div",{staticClass:"panel-body"},[s("label",[t._v("Carousel width")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cWidth,expression:"cWidth"}],attrs:{type:"range",min:"50",max:"100",step:"1"},domProps:{value:t.cWidth},on:{change:t.setCarouselWidth,__r:function(e){t.cWidth=e.target.value}}})]),t._v(" "),s("label",[t._v("Carousel height")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cHeight,expression:"cHeight"}],attrs:{type:"range",min:"100",max:"300",step:"1"},domProps:{value:t.cHeight},on:{change:t.setCarouselHeight,__r:function(e){t.cHeight=e.target.value}}})])])]),t._v(" "),s("div",{staticClass:"panel panel-default"},[t._m(1,!1,!1),t._v(" "),s("div",{staticClass:"panel-body"},[s("label",[t._v("Chatname:")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chatName,expression:"chatName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add your chatname"},domProps:{value:t.chatName},on:{input:function(e){e.target.composing||(t.chatName=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveName}},[t._v("Save")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h4",[this._v("Carousel Settings")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h4",[this._v("Chat Settings")])])}]},S=s("VU/8")({data:function(){return{cWidth:0,cHeight:0,chatName:""}},methods:{setCarouselWidth:function(){this.$store.state.settings.carousel.width=this.cWidth},setCarouselHeight:function(){this.$store.state.settings.carousel.height=this.cHeight},saveName:function(){this.$store.state.settings.chatUser=this.chatName}},created:function(){this.cWidth=this.$store.state.settings.carousel.width,this.cHeight=this.$store.state.settings.carousel.height,this.chatName=this.$store.state.settings.chatUser}},$,!1,function(t){s("nejZ")},"data-v-10c2ae24",null).exports;a.a.use(r.a);var k={router:new r.a({mode:"history",routes:[{path:"/",name:"Chat",component:f,meta:{keepAlive:!0}},{path:"/carousel",name:"Carousel",component:M,meta:{keepAlive:!1}},{path:"/settings",name:"Settings",component:S,meta:{keepAlive:!1}}]}),data:function(){return{loaded:!1}},components:{appHeader:n},created:function(){this.loaded=!0}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]},N=s("VU/8")(k,U,!1,null,null,null).exports,E=s("NYxO");a.a.use(E.a);var T=new E.a.Store({state:{unreadMessages:0,settings:{carousel:{width:100,height:150},chatUser:""}}});new a.a({el:"#app",store:T,template:"<App/>",components:{App:N}})},SGL5:function(t,e){},VMFP:function(t,e){},XaUL:function(t,e){},YnOM:function(t,e){},"l/uR":function(t,e){},nejZ:function(t,e){},nkbQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.52186f5329705e8d3d58.js.map