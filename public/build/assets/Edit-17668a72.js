import{_ as c,K as _,j as n,a}from"./app-1efc3851.js";import{A as h}from"./AuthenticatedLayout-86a581d7.js";import"./index-1f6f7bd3.js";import{T as D}from"./TextInput-33d14c7d.js";import{S as u}from"./SelectInput-c1a1610b.js";import{D as b}from"./Datepicker-7e6cffc5.js";import{F as v}from"./FromPageLayout-58bdd8cc.js";import"./Logo-25d59469.js";import"./LoadingButton-22cb04af.js";const f=()=>{const{users:o,deposit:s}=c().props,{data:e,setData:r,errors:i,post:d,processing:l}=_({amount:s.amount||"",deposit_date:s.deposit_date||"",status:s.status||"",user_id:s.user_id||"",_method:"PUT"}),p=t=>{t.preventDefault(),d(route("deposit.update",s.id))},m=t=>{r("deposit_date",t)};return n(v,{breadcumb_link:route("deposit.index"),breadcumb_name:"Deposit",breadcumb_action:"Edit",loading:l,button_text:"Update Deposit",handlFormSubmit:p,children:[a(u,{label:"User",name:"user_id",errors:i.user_id,value:e.user_id,onChange:t=>r("user_id",t.target.value),children:(o==null?void 0:o.length)>0&&o.map(t=>a("option",{value:t.id,defaultValue:s.user_id,children:t.full_name},t.id))}),a(D,{label:"Amount",name:"amount",type:"number",errors:i.amount,value:e.amount,onChange:t=>r("amount",t.target.value)}),a(b,{label:"Deposit Date",errors:i.deposit_date,value:e.deposit_date,handleDateChange:m,startDate:e.deposit_date?new Date(e.deposit_date):new Date}),n(u,{label:"Status",name:"status",errors:i.status,value:e.status,defaultValue:e.status,onChange:t=>r("status",t.target.value),children:[a("option",{value:"1",children:"Active"}),a("option",{value:"0",children:"InActive"})]})]})};f.layout=o=>a(h,{title:"Edit Deposit",children:o});export{f as default};