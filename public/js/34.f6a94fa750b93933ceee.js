webpackJsonp([34,43],{101:function(t,e,n){n(275);var i=n(1)(n(273),n(278),null,null);t.exports=i.exports},273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},created:function(){this.getImage(1),console.log(this.image)},props:{visible:Boolean,image:Object},data:function(){return{loading:!0,images:[]}},computed:{},methods:{close:function(){this.$emit("close")},getImage:function(t){var e=this,n="http://vnguy.com";this.$http.get(n+"/image/get/"+t).then(function(t){e.loading=!1,e.images=t.data}).catch(function(t){console.log(t)})},imageUrl:function(t){return"http://vnguy.com/image/"+this.images[t].path},selectImage:function(t){this.$emit("selected",this.images[t]),this.$emit("close")}}}},274:function(t,e,n){e=t.exports=n(99)(),e.push([t.i,".image-modal-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:5000}.image-modal-content .imgWr{width:320px;height:100px;display:inline-block;border:1px solid #ddd;cursor:pointer}","",{version:3,sources:["/./client/views/post/modals/ImageModal2.vue"],names:[],mappings:"AACA,gBACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,0BAA+B,AAC/B,YAAc,CACf,AAID,4BACE,YAAa,AACb,aAAc,AACd,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB",file:"ImageModal2.vue",sourcesContent:["\n.image-modal-bg{\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 5000;\n}\n.image-modal-content {\n  /*margin-top: 5%;*/\n}\n.image-modal-content .imgWr {\n  width: 320px;\n  height: 100px;\n  display: inline-block;\n  border: 1px solid #ddd;\n  cursor: pointer;\n}\n"],sourceRoot:"webpack://"}])},275:function(t,e,n){var i=n(274);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(100)("c5d37384",i,!0)},278:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-modal-bg"},[n("div",{staticClass:"image-modal-content"},[n("button",{staticClass:"button image-modal-content is-pulled-right",on:{click:function(e){t.$emit("close")}}},[t._v("Close")]),t._v(" "),t.loading?n("div",[t._v("Loading")]):n("div",t._l(t.images,function(e,i){return n("div",{staticClass:"imgWr",on:{click:function(e){t.selectImage(i)}}},[n("img",{attrs:{src:t.imageUrl(i),alt:""}})])}))])])},staticRenderFns:[]}}});
//# sourceMappingURL=34.f6a94fa750b93933ceee.js.map