import{_ as c,K as p,j as u,a as r}from"./app-ea41ce66.js";import{A as b}from"./AuthenticatedLayout-de9e93d8.js";import{S as h}from"./SelectInput-9b2e08bf.js";import{D as z}from"./Datepicker-e94f28b6.js";import{M as _}from"./MultiSelect-03c51b02.js";import{F as f}from"./FromPageLayout-dd82b538.js";import"./Logo-white-2a851e2e.js";import"./index-1f6f7bd3.js";import"./LoadingButton-ac67a94b.js";const D=()=>{const{users:t}=c().props,{data:e,setData:s,errors:o,post:n,processing:i}=p({bazar_date:"",users_id:[],status:0}),d=a=>{a.preventDefault(),n(route("bazar-schedule.store"))},m=a=>{s("bazar_date",a)},l=t&&t.length?t.map(a=>({value:a.id,label:a.display_name})):[];return u(f,{breadcumb_link:route("bazar-schedule.index"),breadcumb_name:"Bazar Schedule",breadcumb_action:"Create",loading:i,button_text:"Create Bazar Schedule",handlFormSubmit:d,children:[r(z,{label:"Bazar Date",errors:o.bazar_date,value:e.bazar_date,handleDateChange:m,startDate:e.bazar_date?new Date(e.bazar_date):new Date}),u(h,{label:"Status",name:"status",errors:o.status,value:e.status,onChange:a=>s("status",a.target.value),children:[r("option",{value:"1",defaultValue:e.status,children:"Bazar Done"}),r("option",{value:"0",defaultValue:e.status,children:"Bazar Pending"})]}),r(_,{label:"Users",options:l,column:"users_id",name:"",onChangeHandler:s,value:l.filter(a=>e.users_id.includes(a.value))})]})};D.layout=t=>r(b,{title:"Create Bazar Schedule",children:t});export{D as default};
