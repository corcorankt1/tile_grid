webpackJsonp([0],{"+VGo":function(t,e){},0:function(t,e,n){t.exports=n("NHnr")},"8dYm":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),i={data:function(){return{items:[]}},created:function(){var t=this;fetch("https://itunes.apple.com/lookup?id=3296287&entity=album").then(function(t){return t.json()}).then(function(e){t.items=e.results,t.items.shift()})},name:"AlbumTiles",props:{msg:String}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"albums"},[n("h1",[t._v(t._s(t.msg))]),n("div",{staticClass:"grid"},t._l(t.items,function(e){return n("div",{staticClass:"tile grid-item"},[n("div",{staticClass:"card"},[n("img",{attrs:{src:e.artworkUrl100}}),n("h2",[n("a",{attrs:{href:e.collectionViewUrl}},[t._v(t._s(e.collectionName))])]),n("div",{staticClass:"albumInfo"},[n("p",[t._v("Genre - "+t._s(e.primaryGenreName))]),n("p",[t._v("# of tracks - "+t._s(e.trackCount))]),n("p",[t._v("Copyright - "+t._s(e.copyright))])]),n("a",{staticClass:"cta",attrs:{href:e.collectionViewUrl,target:"_blank"}},[t._v("Check out on itunes")])])])}))])},a=[],c=n("XyMi");function o(t){n("8dYm")}var l=!1,u=o,m="data-v-85dec182",p=null,f=Object(c["a"])(i,r,a,l,u,m,p),d=f.exports,v={name:"app",components:{AlbumTiles:d}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AlbumTiles",{attrs:{msg:"A Collection of Queen's Music"}})],1)},h=[];function b(t){n("+VGo")}var g=!1,C=b,k=null,y=null,w=Object(c["a"])(v,_,h,g,C,k,y),j=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.1a83d7b6.js.map