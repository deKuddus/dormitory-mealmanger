import{K as p,j as o,a}from"./app-aabd3ed4.js";import{A as m}from"./AuthenticatedLayout-25354546.js";import"./index-1f6f7bd3.js";import{T as i}from"./TextInput-baa55968.js";import{S as d}from"./SelectInput-454d8656.js";import{D as h}from"./Datepicker-2ed07dea.js";import{F as b}from"./FromPageLayout-ecc364fd.js";import"./Logo-25d59469.js";import"./LoadingButton-e21f4e9c.js";const v=()=>{const{data:t,setData:r,errors:s,post:n,processing:u}=p({title:"",status:0,purchase_date:"",description:""}),l=e=>{e.preventDefault(),n(route("asset.store"))},c=e=>{r("purchase_date",e)};return o(b,{breadcumb_link:route("asset.index"),breadcumb_name:"Asset",breadcumb_action:"Create",loading:u,button_text:"Create Asset",handlFormSubmit:l,children:[a(i,{label:"Name",name:"title",type:"text",errors:s.title,value:t.title,onChange:e=>r("title",e.target.value)}),a(i,{label:"Description",name:"description",type:"text",errors:s.description,value:t.description,onChange:e=>r("description",e.target.value)}),a(h,{label:"Purchase Date",errors:s.purchase_date,value:t.purchase_date,handleDateChange:c,startDate:t.purchase_date?new Date(t.purchase_date):new Date}),o(d,{label:"Status",name:"status",errors:s.status,value:t.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:"1",children:"Active"}),a("option",{value:"0",children:"InActive"})]})]})};v.layout=t=>a(m,{title:"Create Asset",children:t});export{v as default};
