import{_ as c,K as m,j as i,a as r}from"./app-9b1aff9a.js";import{A as h}from"./AuthenticatedLayout-3ba54b4d.js";import"./index-0ee3514d.js";import{T as n}from"./TextInput-66afd55f.js";import{S as b}from"./SelectInput-2f1e81e7.js";import{D}from"./Datepicker-3693613c.js";import{F as _}from"./FromPageLayout-d9f14917.js";import"./Logo-white-2a851e2e.js";import"./defineProperty-30e2cf67.js";import"./LoadingButton-6f090fb2.js";const v=()=>{const{asset:e}=c().props,{data:a,setData:s,errors:o,post:u,processing:p}=m({title:e.title||"",status:e.status||"",purchase_date:e.purchase_date||"",description:e.description||"",_method:"PUT"}),l=t=>{t.preventDefault(),u(route("asset.update",e.id))},d=t=>{s("purchase_date",t)};return i(_,{breadcumb_link:route("asset.index"),breadcumb_name:"Deposit",breadcumb_action:"Edit",loading:p,button_text:"Update Deposit",handlFormSubmit:l,children:[r(n,{label:"Title",name:"title",type:"text",errors:o.title,value:a.title,onChange:t=>s("title",t.target.value)}),r(n,{label:"Description",name:"description",type:"text",errors:o.description,value:a.description,onChange:t=>s("description",t.target.value)}),r(D,{label:"Published Date",errors:o.purchase_date,value:a.purchase_date,handleDateChange:d,startDate:a.purchase_date?new Date(a.purchase_date):new Date}),i(b,{label:"Status",name:"status",errors:o.status,value:a.status,onChange:t=>s("status",t.target.value),children:[r("option",{value:"1",children:"Active"}),r("option",{value:"0",children:"InActive"})]})]})};v.layout=e=>r(h,{title:"Update Asset",children:e});export{v as default};