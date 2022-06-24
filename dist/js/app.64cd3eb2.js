(function(){"use strict";var t={9416:function(t,e,o){var n=o(9963),s=o(6252),a=o(3577);const i={class:"app"},l=(0,s._)("h1",null,"Страница с постами",-1),r={class:"app__btns"},u=(0,s.Uk)(" Создать пост "),d={key:1},p={class:"page__wrapper"},c=["onClick"];function m(t,e,o,n,m,h){const v=(0,s.up)("my-input"),g=(0,s.up)("my-button"),f=(0,s.up)("my-select"),y=(0,s.up)("post-form"),w=(0,s.up)("my-dialog"),_=(0,s.up)("post-list");return(0,s.wg)(),(0,s.iD)("div",i,[l,(0,s.Wm)(v,{modelValue:m.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>m.searchQuery=t),placeholder:"Поиск"},null,8,["modelValue"]),(0,s._)("div",r,[(0,s.Wm)(g,{onClick:h.showDialog},{default:(0,s.w5)((()=>[u])),_:1},8,["onClick"]),(0,s.Wm)(f,{modelValue:m.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>m.selectedSort=t),options:m.sortOptions},null,8,["modelValue","options"])]),(0,s.Wm)(w,{show:m.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>m.dialogVisible=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{onCreate:h.createPost},null,8,["onCreate"])])),_:1},8,["show"]),m.isPostLoading?((0,s.wg)(),(0,s.iD)("div",d,"Идет загрузка...")):((0,s.wg)(),(0,s.j4)(_,{key:0,posts:h.sortedAndSearchedPosts,onRemove:h.removePost},null,8,["posts","onRemove"])),(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.totalPages,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:(0,a.C_)(["page",{"current-page":m.page===t}]),onClick:e=>h.changePage(t)},(0,a.zw)(t),11,c)))),128))])])}o(6699);const h=t=>((0,s.dD)("data-v-2d84d4a0"),t=t(),(0,s.Cn)(),t),v=h((()=>(0,s._)("h4",null,"Название поста",-1))),g=(0,s.Uk)(" Создать ");function f(t,e,o,a,i,l){const r=(0,s.up)("my-input"),u=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("form",{onSubmit:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"]))},[v,(0,s.Wm)(r,{modelValue:i.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.post.title=t),type:"text",placeholder:"Название"},null,8,["modelValue"]),(0,s.Wm)(r,{modelValue:i.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>i.post.body=t),type:"text",placeholder:"Описание"},null,8,["modelValue"]),(0,s.Wm)(u,{onClick:l.createPost,style:{"align-self":"flex-end","margin-top":"15px"}},{default:(0,s.w5)((()=>[g])),_:1},8,["onClick"])],32)])}const y=["value"];function w(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t)),class:"input",type:"text"},null,40,y)}var _={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}},b=o(3744);const k=(0,b.Z)(_,[["render",w],["__scopeId","data-v-6d2fe11e"]]);var P=k,V={components:{MyInput:P},data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const D=(0,b.Z)(V,[["render",f],["__scopeId","data-v-2d84d4a0"]]);var C=D;const O=t=>((0,s.dD)("data-v-b0c59c18"),t=t(),(0,s.Cn)(),t),I={key:0},W=O((()=>(0,s._)("h3",null,"Список постов",-1))),S={key:1,style:{color:"red"}};function U(t,e,o,a,i,l){const r=(0,s.up)("post-item");return o.posts.length>0?((0,s.wg)(),(0,s.iD)("div",I,[W,(0,s.Wm)(n.W3,{name:"post-list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.posts,(e=>((0,s.wg)(),(0,s.j4)(r,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h2",S," Список постов пуст "))}const j=t=>((0,s.dD)("data-v-b4e4458e"),t=t(),(0,s.Cn)(),t),x={class:"post"},M=j((()=>(0,s._)("strong",null,"Название:",-1))),Z=j((()=>(0,s._)("strong",null,"Описание:",-1))),$={class:"post__btns"},L=(0,s.Uk)(" Удалить ");function z(t,e,o,n,i,l){const r=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("div",null,[(0,s._)("div",null,[M,(0,s.Uk)(" "+(0,a.zw)(o.post.title),1)]),(0,s._)("div",null,[Z,(0,s.Uk)(" "+(0,a.zw)(o.post.body),1)])]),(0,s._)("div",$,[(0,s.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$emit("remove",o.post))},{default:(0,s.w5)((()=>[L])),_:1})])])}var A={props:{post:{type:Object,required:!0}}};const Q=(0,b.Z)(A,[["render",z],["__scopeId","data-v-b4e4458e"]]);var R=Q,q={components:{PostItem:R},props:{posts:{type:Array,required:!0}}};const H=(0,b.Z)(q,[["render",U],["__scopeId","data-v-b0c59c18"]]);var K=H;const Y={class:"btn"};function B(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("button",Y,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var E={name:"my-button"};const F=(0,b.Z)(E,[["render",B],["__scopeId","data-v-11a33828"]]);var T=F,N=o(9669),G=o.n(N);const J=(0,s._)("option",{disabled:"",value:""},"Выберете из списка",-1),X=["value"];function tt(t,e,o,i,l,r){return(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),onChange:e[1]||(e[1]=(...t)=>r.changeOption&&r.changeOption(...t))},[J,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.options,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t.value,value:t.value},(0,a.zw)(t.name),9,X)))),128))],544)),[[n.bM,o.modelValue]])}var et={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const ot=(0,b.Z)(et,[["render",tt]]);var nt=ot;function st(t,e,o,a,i,l){return o.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,n.iM)(((...t)=>l.hideDialog&&l.hideDialog(...t)),["stop"]))},[(0,s._)("div",{onClick:e[0]||(e[0]=(0,n.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var at={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const it=(0,b.Z)(at,[["render",st],["__scopeId","data-v-1c5fb8a5"]]);var lt=it,rt={components:{MySelect:nt,MyButton:T,PostList:K,PostForm:C},data(){return{posts:[],dialogVisible:!1,isPostLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostLoading=!0;const t=await G().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Ошибка")}finally{this.isPostLoading=!1}},changePage(t){this.page=t}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{page(){this.fetchPosts()}}};const ut=(0,b.Z)(rt,[["render",m]]);var dt=ut,pt=[T,P,lt,nt];const ct=(0,n.ri)(dt);pt.forEach((t=>{ct.component(t.name,t)})),ct.mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],a=t[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[r])}))?n.splice(r--,1):(l=!1,a<i&&(i=a));if(l){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,i=n[0],l=n[1],r=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(r)var d=r(o)}for(e&&e(n);u<i.length;u++)a=i[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},n=self["webpackChunkvue3_ulbi"]=self["webpackChunkvue3_ulbi"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9416)}));n=o.O(n)})();
//# sourceMappingURL=app.64cd3eb2.js.map