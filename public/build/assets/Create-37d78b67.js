import{_ as c,K as b,j as l,a as r}from"./app-aabd3ed4.js";import{A as p}from"./AuthenticatedLayout-25354546.js";import"./index-1f6f7bd3.js";import{S as h}from"./SelectInput-454d8656.js";import{D as z}from"./Datepicker-2ed07dea.js";import{M as _}from"./MultiSelect-02ec7753.js";import{F as f}from"./FromPageLayout-ecc364fd.js";import"./Logo-25d59469.js";import"./LoadingButton-e21f4e9c.js";const D=()=>{const{users:t}=c().props,{data:e,setData:s,errors:o,post:n,processing:u}=b({bazar_date:"",users_id:[],status:0}),d=a=>{a.preventDefault(),n(route("bazar-schedule.store"))},i=a=>{s("bazar_date",a)},m=t&&t.length?t.map(a=>({value:a.id,label:a.full_name})):[];return l(f,{breadcumb_link:route("bazar-schedule.index"),breadcumb_name:"Bazar Schedule",breadcumb_action:"Create",loading:u,button_text:"Create Bazar Schedule",handlFormSubmit:d,children:[r(z,{label:"Bazar Date",errors:o.bazar_date,value:e.bazar_date,handleDateChange:i,startDate:e.bazar_date?new Date(e.bazar_date):new Date}),l(h,{label:"Status",name:"status",errors:o.status,value:e.status,onChange:a=>s("status",a.target.value),children:[r("option",{value:"1",defaultValue:e.status,children:"Bazar Done"}),r("option",{value:"0",defaultValue:e.status,children:"Bazar Pending"})]}),r(_,{label:"Users",options:m,column:"users_id",name:"",onChangeHandler:s})]})};D.layout=t=>r(p,{title:"Create Bazar Schedule",children:t});export{D as default};
