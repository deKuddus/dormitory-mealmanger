import{_ as m,K as p,j as r,a as o}from"./app-1efc3851.js";import{A as c}from"./AuthenticatedLayout-86a581d7.js";import{T as s}from"./TextInput-33d14c7d.js";import{S as b}from"./SelectInput-c1a1610b.js";import{A as h,a as f,P as g,b as v}from"./additionalCostStatus-5109433a.js";import{F as A}from"./FromPageLayout-58bdd8cc.js";import"./Logo-25d59469.js";import"./LoadingButton-22cb04af.js";import"./index-1f6f7bd3.js";const E=()=>{const{additional:a}=m().props,{data:e,setData:i,errors:n,post:u,processing:d}=p({amount:a.amount||"",description:a.description||"",status:a.status||"",_method:"PUT"}),l=t=>{t.preventDefault(),u(route("additional.update",a.id))};return r(A,{breadcumb_link:route("additional.index"),breadcumb_name:"Additional",breadcumb_action:"Edit",loading:d,button_text:"Update Additional",handlFormSubmit:l,children:[o(s,{label:"Amount",name:"amount",type:"number",errors:n.amount,value:e.amount,onChange:t=>i("amount",t.target.value)}),o(s,{label:"Description",name:"description",type:"text",errors:n.description,value:e.description,onChange:t=>i("description",t.target.value)}),r(b,{label:"Status",name:"status",errors:n.status,value:e.status,onChange:t=>i("status",t.target.value),children:[o("option",{defaultValue:e.status,value:h,children:f}),o("option",{defaultValue:e.status,value:g,children:v})]})]})};E.layout=a=>o(c,{title:"Edit Additional Cost",children:a});export{E as default};