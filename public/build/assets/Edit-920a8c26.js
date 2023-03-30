import{_ as u,K as p,j as i,a as t,f as c}from"./app-b424552e.js";import{L as f}from"./Layout-012bfe45.js";import{L as h}from"./LoadingButton-4650e1f9.js";import{T as n}from"./TextInput-acb51a5b.js";import{S as g}from"./SelectInput-640692d3.js";import{A as b,a as v,P as x,b as w}from"./additionalCostStatus-5109433a.js";import"./index-2e4736b8.js";import"./utils-4fea7fd8.js";import"./BottomHeader-31b85409.js";const N=()=>{const{additional:a}=u().props,{data:o,setData:s,errors:r,post:l,processing:d}=p({amount:a.amount||"",description:a.description||"",status:a.status||"",_method:"PUT"}),m=e=>{e.preventDefault(),l(route("additional.update",a.id))};return i("div",{children:[t("div",{children:i("h1",{className:"mb-8 text-3xl font-bold",children:[t(c,{href:route("additional.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Additional Cost"}),t("span",{className:"font-medium text-indigo-600",children:" /"}),"Edit"]})}),t("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:i("form",{name:"createForm",onSubmit:m,children:[i("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[t(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Amount",name:"amount",type:"number",errors:r.amount,value:o.amount,onChange:e=>s("amount",e.target.value)}),t(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Description",name:"description",type:"text",errors:r.description,value:o.description,onChange:e=>s("description",e.target.value)}),i(g,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Status",name:"status",errors:r.status,value:o.status,onChange:e=>s("status",e.target.value),children:[t("option",{defaultValue:o.status,value:b,children:v}),t("option",{defaultValue:o.status,value:x,children:w})]})]}),t("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:t(h,{loading:d,type:"submit",className:"btn-indigo",children:"Update AdditionalCost"})})]})})]})};N.layout=a=>t(f,{title:"Edit Additional Cost",children:a});export{N as default};