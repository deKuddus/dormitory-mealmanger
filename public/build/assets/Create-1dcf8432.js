import{_ as m,K as c,j as i,a}from"./app-703e88cb.js";import{A as p}from"./AuthenticatedLayout-be5ce0df.js";import"./index-1f6f7bd3.js";import{T as u}from"./TextInput-1c56c944.js";import{S as b}from"./SelectInput-449ad551.js";import{F as h}from"./FromPageLayout-d49524ee.js";import"./Logo-25d59469.js";import"./LoadingButton-507cbb28.js";const _=()=>{const{bazarScheduler:t}=m().props,{data:r,setData:o,errors:n,post:l,processing:s}=c({amount:"",description:""}),d=e=>{e.preventDefault(),l(route("bazar.store"))};return i(h,{breadcumb_link:route("bazar.index"),breadcumb_name:"Bazar",breadcumb_action:"Create",loading:s,button_text:"Create Bazar",handlFormSubmit:d,children:[a(u,{label:"Amount",name:"amount",type:"number",errors:n.amount,value:r.amount,onChange:e=>o("amount",e.target.value)}),a(u,{label:"Description",name:"description",type:"text",errors:n.description,value:r.description,onChange:e=>o("description",e.target.value)}),i(b,{label:"Select Pair",name:"bazar_schedule_id",errors:n.bazar_schedule_id,value:r.bazar_schedule_id,onChange:e=>o("bazar_schedule_id",e.target.value),children:[a("option",{children:"Select Pair"}),t&&t.map(e=>a("option",{value:e.id,defaultValue:r.bazar_schedule_id,children:e.pair}))]})]})};_.layout=t=>a(p,{title:"Create Bazar",children:t});export{_ as default};