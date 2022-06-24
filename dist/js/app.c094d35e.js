(function(){"use strict";var t={3940:function(t,e,o){var n=o(9963),s=o(6252);const a={class:"app"};function i(t,e,o,n,i,r){const l=(0,s.up)("navbar"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s._)("div",a,[(0,s.Wm)(u)])],64)}const r={class:"navbar"},l={class:"navbar__btns"},u=(0,s.Uk)("Посты"),c=(0,s.Uk)("О сайте");function d(t,e,o,n,a,i){const d=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/")),class:"navbar__logo"},"Social Posts"),(0,s._)("div",l,[(0,s.Wm)(d,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(d,{onClick:e[2]||(e[2]=e=>t.$router.push("/about")),style:{"margin-left":"15px"}},{default:(0,s.w5)((()=>[c])),_:1})])])}var p={components:{}},m=o(3744);const h=(0,m.Z)(p,[["render",d],["__scopeId","data-v-7dc3d412"]]);var v=h,f={components:{Navbar:v}};const g=(0,m.Z)(f,[["render",i]]);var y=g;const _={class:"btn"};function w(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("button",_,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var b={name:"my-button"};const k=(0,m.Z)(b,[["render",w],["__scopeId","data-v-11a33828"]]);var D=k;const P=["value"];function V(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t)),class:"input",type:"text"},null,40,P)}var C={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const I=(0,m.Z)(C,[["render",V],["__scopeId","data-v-6d2fe11e"]]);var O=I;function W(t,e,o,a,i,r){return o.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,n.iM)(((...t)=>r.hideDialog&&r.hideDialog(...t)),["stop"]))},[(0,s._)("div",{onClick:e[0]||(e[0]=(0,n.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var U={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const M=(0,m.Z)(U,[["render",W],["__scopeId","data-v-1c5fb8a5"]]);var $=M,x=o(3577);const Z=(0,s._)("option",{disabled:"",value:""},"Выберете из списка",-1),S=["value"];function j(t,e,o,a,i,r){return(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),onChange:e[1]||(e[1]=(...t)=>r.changeOption&&r.changeOption(...t))},[Z,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.options,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t.value,value:t.value},(0,x.zw)(t.name),9,S)))),128))],544)),[[n.bM,o.modelValue]])}var L={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const Q=(0,m.Z)(L,[["render",j]]);var z=Q,A=[D,O,$,z];const R=(0,s._)("h1",null,"Это стартовая страница одностраничного приложения social-post",-1),q=(0,s.Uk)("Многие функции еще не готовы и не все реализованы."),E=(0,s._)("br",null,null,-1),H=(0,s.Uk)(" Сейчас работают все кнопки, но функционал есть только на кнопке "),Y=(0,s.Uk)('"Посты"');function B(t,e,o,n,a,i){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[R,(0,s._)("p",null,[q,E,H,(0,s.Wm)(r,{to:"/posts"},{default:(0,s.w5)((()=>[Y])),_:1})])])}var F={};const K=(0,m.Z)(F,[["render",B]]);var N=K,T=o(2119);const G=(0,s._)("h1",null,"Это страница абоут",-1),J=[G];function X(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("div",null,J)}var tt={};const et=(0,m.Z)(tt,[["render",X]]);var ot=et;const nt=(0,s._)("h1",null,"Страница с постами",-1),st={class:"app__btns"},at=(0,s.Uk)(" Создать пост "),it={key:1},rt={class:"observer"};function lt(t,e,o,n,a,i){const r=(0,s.up)("my-input"),l=(0,s.up)("my-button"),u=(0,s.up)("my-select"),c=(0,s.up)("post-form"),d=(0,s.up)("my-dialog"),p=(0,s.up)("post-list"),m=(0,s.Q2)("intersection");return(0,s.wg)(),(0,s.iD)("div",null,[nt,(0,s.Wm)(r,{modelValue:a.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchQuery=t),placeholder:"Поиск"},null,8,["modelValue"]),(0,s._)("div",st,[(0,s.Wm)(l,{onClick:i.showDialog},{default:(0,s.w5)((()=>[at])),_:1},8,["onClick"]),(0,s.Wm)(u,{modelValue:a.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>a.selectedSort=t),options:a.sortOptions},null,8,["modelValue","options"])]),(0,s.Wm)(d,{show:a.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>a.dialogVisible=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onCreate:i.createPost},null,8,["onCreate"])])),_:1},8,["show"]),a.isPostLoading?((0,s.wg)(),(0,s.iD)("div",it,"Идет загрузка...")):((0,s.wg)(),(0,s.j4)(p,{key:0,posts:i.sortedAndSearchedPosts,onRemove:i.removePost},null,8,["posts","onRemove"])),(0,s.wy)((0,s._)("div",rt,null,512),[[m,i.loadMorePosts]])])}o(6699);const ut=t=>((0,s.dD)("data-v-ffb58c52"),t=t(),(0,s.Cn)(),t),ct=ut((()=>(0,s._)("h4",null,"Название поста",-1))),dt=(0,s.Uk)(" Создать ");function pt(t,e,o,a,i,r){const l=(0,s.up)("my-input"),u=(0,s.up)("my-button"),c=(0,s.Q2)("focus");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("form",{onSubmit:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"]))},[ct,(0,s.wy)((0,s.Wm)(l,{modelValue:i.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.post.title=t),type:"text",placeholder:"Название"},null,8,["modelValue"]),[[c]]),(0,s.Wm)(l,{modelValue:i.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>i.post.body=t),type:"text",placeholder:"Описание"},null,8,["modelValue"]),(0,s.Wm)(u,{onClick:r.createPost,style:{"align-self":"flex-end","margin-top":"15px"}},{default:(0,s.w5)((()=>[dt])),_:1},8,["onClick"])],32)])}var mt={components:{MyInput:O},data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const ht=(0,m.Z)(mt,[["render",pt],["__scopeId","data-v-ffb58c52"]]);var vt=ht;const ft=t=>((0,s.dD)("data-v-b0c59c18"),t=t(),(0,s.Cn)(),t),gt={key:0},yt=ft((()=>(0,s._)("h3",null,"Список постов",-1))),_t={key:1,style:{color:"red"}};function wt(t,e,o,a,i,r){const l=(0,s.up)("post-item");return o.posts.length>0?((0,s.wg)(),(0,s.iD)("div",gt,[yt,(0,s.Wm)(n.W3,{name:"post-list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.posts,(e=>((0,s.wg)(),(0,s.j4)(l,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h2",_t," Список постов пуст "))}const bt=t=>((0,s.dD)("data-v-03ab91a8"),t=t(),(0,s.Cn)(),t),kt={class:"post"},Dt=bt((()=>(0,s._)("strong",null,"Название:",-1))),Pt=bt((()=>(0,s._)("strong",null,"Описание:",-1))),Vt={class:"post__btns"},Ct=(0,s.Uk)(" Открыть "),It=(0,s.Uk)(" Удалить ");function Ot(t,e,o,n,a,i){const r=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",kt,[(0,s._)("div",null,[(0,s._)("div",null,(0,x.zw)(o.post.id),1),(0,s._)("div",null,[Dt,(0,s.Uk)(" "+(0,x.zw)(o.post.title),1)]),(0,s._)("div",null,[Pt,(0,s.Uk)(" "+(0,x.zw)(o.post.body),1)])]),(0,s._)("div",Vt,[(0,s.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,s.w5)((()=>[Ct])),_:1}),(0,s.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,s.w5)((()=>[It])),_:1})])])}var Wt={props:{post:{type:Object,required:!0}}};const Ut=(0,m.Z)(Wt,[["render",Ot],["__scopeId","data-v-03ab91a8"]]);var Mt=Ut,$t={components:{PostItem:Mt},props:{posts:{type:Array,required:!0}}};const xt=(0,m.Z)($t,[["render",wt],["__scopeId","data-v-b0c59c18"]]);var Zt=xt,St=o(9669),jt=o.n(St),Lt={components:{MyInput:O,MyDialog:$,MySelect:z,MyButton:D,PostList:Zt,PostForm:vt},data(){return{posts:[],dialogVisible:!1,isPostLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async loadMorePosts(){try{this.page+=1;const t=await jt().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert("Ошибка")}},async fetchPosts(){try{this.isPostLoading=!0;const t=await jt().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Ошибка")}finally{this.isPostLoading=!1}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const Qt=(0,m.Z)(Lt,[["render",lt]]);var zt=Qt;function At(t,e,o,n,a,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h1",null,"Это страница поста с ID = "+(0,x.zw)(t.$route.params.id),1)])}var Rt={};const qt=(0,m.Z)(Rt,[["render",At]]);var Et=qt;const Ht=[{path:"/",component:N},{path:"/posts",component:zt},{path:"/about",component:ot},{path:"/posts/:id",component:Et}],Yt=(0,T.p7)({routes:Ht,history:(0,T.PO)("/social-posts/")});var Bt=Yt,Ft={mounted(t,e){const o={rootMargin:"0px",threshold:1},n=(t,o)=>{t[0].isIntersecting&&e.value()},s=new IntersectionObserver(n,o);s.observe(t)},name:"intersection"},Kt={mounted(t){t.focus()},name:"focus"},Nt=[Kt,Ft];const Tt=(0,n.ri)(y);A.forEach((t=>{Tt.component(t.name,t)})),Nt.forEach((t=>{Tt.directive(t.name,t)})),Tt.use(Bt).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],a=t[c][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(r=!1,a<i&&(i=a));if(r){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,i=n[0],r=n[1],l=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(l)var c=l(o)}for(e&&e(n);u<i.length;u++)a=i[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},n=self["webpackChunkvue3_ulbi"]=self["webpackChunkvue3_ulbi"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3940)}));n=o.O(n)})();
//# sourceMappingURL=app.c094d35e.js.map