import{L as f}from"./index-530027e3.js";import{C,p as g,a as h,b as _,d as L,L as k,P as v,c as S,i as x}from"./Dashboard-59b6165c.js";import{a as b}from"./useColors-6bf06e13.js";import{d as y,r as B,e as p,a as E,g as G,u as P}from"./index-97c275d9.js";import"./index-8e9dac35.js";import"./useProjects-1720a58f.js";import"./utils-b2fc192b.js";import"./ProjectStatusBadge.vue_vue_type_script_setup_true_lang-3e582126.js";const z=y({__name:"LineChart",props:{data:{},options:{}},setup(u){C.register(g,h,_,L,k,v,S,x);const o=B(),e=u,n=p(()=>{var t;return o.value?((t=o.value.chart)==null?void 0:t.ctx)??null:null}),{setHSLAColor:s,getColor:d}=b(),i=["primary","success","danger","warning"],m=p(()=>{if(!n.value)return e.data;const t=r=>{const a=n.value.createLinearGradient(0,0,0,90);return a.addColorStop(0,s(r,{a:.4})),a.addColorStop(1,s(r,{a:0})),a},l=e.data.datasets.map((r,a)=>{const c=d(i[a%i.length]);return{...r,fill:!0,backgroundColor:t(c),borderColor:c,pointRadius:0,borderWidth:2}});return{...e.data,datasets:l}});return(t,l)=>(E(),G(P(f),{ref_key:"chart",ref:o,data:m.value,options:t.options},null,8,["data","options"]))}});export{z as default};
//# sourceMappingURL=LineChart-666bf3a5.js.map