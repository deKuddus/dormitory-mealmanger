import{K as m,j as i,a}from"./app-703e88cb.js";import{A as p}from"./AuthenticatedLayout-be5ce0df.js";import{T as c}from"./TextInput-1c56c944.js";import{S as d}from"./SelectInput-449ad551.js";import"./index-8fe1168b.js";import{A as b,I as s}from"./noticeStatus-7a641e79.js";import{F as h}from"./FromPageLayout-d49524ee.js";import{T as f}from"./TextEditor-1536da74.js";import"./Logo-25d59469.js";import"./_equalByTag-a6a51e65.js";import"./_getTag-263e0c84.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-507cbb28.js";import"./index-1f6f7bd3.js";const v=()=>{const{data:t,setData:r,errors:o,post:n,processing:u}=m({title:"",description:"",status:s,published_date:""}),l=e=>{e.preventDefault(),n(route("notice.store"))};return i(h,{breadcumb_link:route("notice.index"),breadcumb_name:"Notice",breadcumb_action:"Create",loading:u,button_text:"Create Notice",handlFormSubmit:l,children:[a(c,{label:"Title",name:"title",type:"text",errors:o.title,value:t.title,onChange:e=>r("title",e.target.value)}),i(d,{label:"Status",name:"status",errors:o.status,value:t.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:b,defaultValue:t.status,children:"Active"}),a("option",{value:s,defaultValue:t.status,children:"InActive"})]}),a(f,{value:t.description,name:"description",onChangeHandler:r})]})};v.layout=t=>a(p,{title:"Create Issue",children:t});export{v as default};