(function(t){function e(e){for(var n,r,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],a[r]&&d.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,l=1;l<o.length;l++){var s=o[l];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("c21b"),a=o.n(n);a.a},1:function(t,e){},"37a8":function(t,e,o){},"3b84":function(t,e,o){t.exports=o.p+"img/marker.801e4b3d.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],r={name:"App"},l=r,s=(o("034f"),o("2877")),c=Object(s["a"])(l,a,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,p=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[t.noFile?o("LoadingModal",{attrs:{getData:t.getData}}):t._e(),t.noFile?t._e():o("div",{staticClass:"slider",style:{maxWidth:t.maxWidth}},[o("ul",{staticClass:"dates"},[o("h2",[t._v(" Days On The Hill ")]),o("p",[t._v(" Days: "+t._s(t.dates.length)+"\n      ")]),t._l(t.dates,function(e,n){return o("li",{key:n+1},[o("a",{attrs:{target:"_blank",href:""+t.googleUrl+t.formatedDates[n]}},[t._v(" "+t._s(e)+" ")])])})],2)]),o("l-map",{attrs:{center:[t.defaultLocation.lat,t.defaultLocation.lng],zoom:t.zoom,id:"map"}},[t.noFile?t._e():o("a",{attrs:{id:"slider-toggle",href:"#"},on:{click:function(e){0===t.maxWidth?t.maxWidth="300px":t.maxWidth=0}}},[t._v("☰")]),o("l-tile-layer",{attrs:{url:t.LTileUrl,attribution:t.Lattribution}}),t._l(t.locations,function(e,n){return o("l-marker",{key:n,ref:"myMarker",refInFor:!0,attrs:{"lat-lng":[e.latitudeE7/1e7,e.longitudeE7/1e7],clickable:!0,draggable:!1,icon:t.Licon},on:{click:t.openPopup}},[o("l-popup",{attrs:{options:{autoClose:!1,closeOnClick:!1}}},[o("p",[t._v(t._s(t.dates[n])+" - "),o("a",{attrs:{target:"_blank",href:""+t.googleUrl+t.formatedDates[n]}},[t._v("Details")])])])],1)})],2)],1)},f=[],g=(o("ac6a"),o("458e")),h=(o("6cc5"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal"},[t.loading?t._e():o("div",{ref:"handleFileUpload",staticClass:"flex-container container"},[o("h1",{staticClass:"full-width"},[t._v("Google Maps Skiing Plotter")]),o("p",{staticClass:"full-width"},[t._v("This is an application that will take your google maps history data, and find out how many days you went skiing at a resort. No infomation is saved but it is sent to a server in order to parse through the large JSON file.")]),t._m(0),t.file?t._e():o("label",{staticClass:"full-width"},[o("input",{ref:"file",attrs:{type:"file",id:"file",accept:"application/zip"},on:{change:function(e){t.submitFile()}}})]),t.file?o("div",{staticClass:"full-width flex-container bar-container "},[o("span",{staticClass:"full-width"},[t._v(t._s(t.progress)+"%")]),o("div",{staticClass:"bar",style:"width:"+t.progress+"%"})]):t._e()]),t.loading?o("div",{staticClass:"flex-container"},[o("p",{staticClass:"full-width margin-bottom"},[t._v(" File upload complete, waiting on server response (This could take a few mins...)")]),o("loading-circle",{staticClass:"full-width"})],1):t._e()])}),m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" Follow this "),o("a",{attrs:{target:"_blank",href:"https://takeout.google.com/settings/takeout"}},[t._v("link")]),t._v(", click "),o("b",[t._v("SELECT NONE")]),t._v(", only select "),o("b",[t._v(" Location History\n    JSON format")]),t._v(". Upload ZIP")])}],v=o("bc3a"),_=o.n(v),b=o("d58b"),y=o("8055"),w=o.n(y),k=w.a.connect(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SERVER),O={name:"LoadingModal",props:["getData"],components:{"loading-circle":b["a"]},data:function(){return{file:"",loading:!1,progress:0}},mounted:function(){var t=this;k.on("done",function(e){t.getData(JSON.parse(e)),window.localStorage.setItem("map-data",e)})},methods:{submitFile:function(){var t=this,e=new FormData;this.file=!0,e.append("file",this.$refs.file.files[0]),e.append("socketId",k.id),_.a.post(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SERVER,e,{onUploadProgress:function(e){var o=Math.round(100*e.loaded/e.total);t.progress=o,100===o&&(t.loading=!0)},headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t.data.status)}).catch(function(t){console.log("FAILURE!!",t)})}}},E=O,x=(o("7ce6"),Object(s["a"])(E,h,m,!1,null,"605735b8",null));x.options.__file="LoadingModal.vue";var M=x.exports,D=o("3b84"),P=o.n(D),S={name:"Map",components:{LoadingModal:M,LMap:g["LMap"],LMarker:g["LMarker"],LTileLayer:g["LTileLayer"],LPopup:g["LPopup"]},data:function(){return{defaultLocation:{lat:39.8283,lng:-98.5795},currentLocation:{},zoom:5,locations:"",dates:"",formatedDates:[],maxWidth:0,noFile:!0,Licon:L.icon({iconUrl:P.a,iconSize:[46,46]}),LTileUrl:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",Lattribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',googleUrl:"https://www.google.com/maps/timeline?pb=!1m2!1m1!1s"}},beforeMount:function(){var t=window.localStorage.getItem("map-data");t&&(this.noFile=!1,this.getData(JSON.parse(t)))},mounted:function(){this.geolocation()},methods:{getData:function(t){this.locations=t.locations,this.dates=t.dates,this.noFile=!1,this.filterDates(t.dates)},geolocation:function(){var t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};function e(t){this.currentLocation={lat:t.coords.latitude,lng:t.coords.longitude},this.zoom=8}function o(t){console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}navigator.geolocation.getCurrentPosition(e,o,t)},filterDates:function(t){var e=this;t.forEach(function(t){var o=new Date(t);e.formatedDates.push("".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate()))})},openPopup:function(t){this.$nextTick(function(){t.target.openPopup()})}}},C=S,F=(o("894b"),Object(s["a"])(C,d,f,!1,null,null,null));F.options.__file="Map.vue";var U=F.exports;n["a"].use(p["a"]);var j=new p["a"]({mode:"history",routes:[{path:"/",name:"Map",component:U}]});n["a"].config.productionTip=!1,new n["a"]({router:j,render:function(t){return t(u)}}).$mount("#app")},6928:function(t,e,o){},"7ce6":function(t,e,o){"use strict";var n=o("6928"),a=o.n(n);a.a},"894b":function(t,e,o){"use strict";var n=o("37a8"),a=o.n(n);a.a},c21b:function(t,e,o){}});
//# sourceMappingURL=app.4763e66f.js.map