import{_ as c,K as m,j as i,a as r}from"./app-af00dd6a.js";import{A as h}from"./AuthenticatedLayout-adc67dd3.js";import"./index-1f6f7bd3.js";import{T as n}from"./TextInput-60413e6e.js";import{S as b}from"./SelectInput-05f9179a.js";import{D}from"./Datepicker-48c3d6c5.js";import{F as _}from"./FromPageLayout-f1febf46.js";import"./Logo-white-2a851e2e.js";import"./LoadingButton-cf823d85.js";const v=()=>{const{asset:e}=c().props,{data:a,setData:s,errors:o,post:u,processing:p}=m({title:e.title||"",status:e.status||"",purchase_date:e.purchase_date||"",description:e.description||"",_method:"PUT"}),l=t=>{t.preventDefault(),u(route("asset.update",e.id))},d=t=>{s("purchase_date",t)};return i(_,{breadcumb_link:route("asset.index"),breadcumb_name:"Deposit",breadcumb_action:"Edit",loading:p,button_text:"Update Deposit",handlFormSubmit:l,children:[r(n,{label:"Title",name:"title",type:"text",errors:o.title,value:a.title,onChange:t=>s("title",t.target.value)}),r(n,{label:"Description",name:"description",type:"text",errors:o.description,value:a.description,onChange:t=>s("description",t.target.value)}),r(D,{label:"Published Date",errors:o.purchase_date,value:a.purchase_date,handleDateChange:d,startDate:a.purchase_date?new Date(a.purchase_date):new Date}),i(b,{label:"Status",name:"status",errors:o.status,value:a.status,onChange:t=>s("status",t.target.value),children:[r("option",{value:"1",children:"Active"}),r("option",{value:"0",children:"InActive"})]})]})};v.layout=e=>r(h,{title:"Update Asset",children:e});export{v as default};
