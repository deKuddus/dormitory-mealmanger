import{_ as p,K as b,j as d,a as r}from"./app-eb479d5e.js";import{A as _}from"./AuthenticatedLayout-2d791324.js";import"./index-0ee3514d.js";import{T as u}from"./TextInput-c3d75260.js";import{S as h}from"./SelectInput-1c0d53d1.js";import{F as z}from"./FromPageLayout-21dab847.js";import{D}from"./Datepicker-09e850a4.js";import"./Logo-white-2a851e2e.js";import"./LoadingButton-e28505ea.js";import"./defineProperty-30e2cf67.js";const g=()=>{const{bazar:e,bazarScheduler:n}=p().props,{data:t,setData:o,errors:i,post:l,processing:s}=b({amount:e.amount||"",description:e.description||"",bazar_schedule_id:e.bazar_schedule_id,bazar_date:e.created_at||"",_method:"PUT"}),m=a=>{a.preventDefault(),l(route("bazar.update",e.id))},c=a=>{o("bazar_date",a)};return d(z,{breadcumb_link:route("bazar.index"),breadcumb_name:"Bazar",breadcumb_action:"Edit",loading:s,button_text:"Update Bazar",handlFormSubmit:m,children:[r(D,{label:"Bazar Date",errors:i.bazar_date,value:t.bazar_date,handleDateChange:c,startDate:t.bazar_date?new Date(t.bazar_date):new Date}),r(u,{label:"Amount",name:"amount",type:"number",errors:i.amount,value:t.amount,onChange:a=>o("amount",a.target.value)}),r(u,{label:"Description",name:"description",type:"text",errors:i.description,value:t.description,onChange:a=>o("description",a.target.value)}),d(h,{label:"Select Pair",name:"bazar_schedule_id",errors:i.bazar_schedule_id,value:t.bazar_schedule_id,onChange:a=>o("bazar_schedule_id",a.target.value),children:[r("option",{children:"Select Pair"}),n&&n.map(a=>r("option",{value:a.id,defaultValue:t.bazar_schedule_id,children:a.pair}))]})]})};g.layout=e=>r(_,{title:"Edit Bazar",children:e});export{g as default};
