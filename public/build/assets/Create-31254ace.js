import{K as m,j as i,a}from"./app-9b1aff9a.js";import{A as p}from"./AuthenticatedLayout-3ba54b4d.js";import{T as c}from"./TextInput-66afd55f.js";import{S as d}from"./SelectInput-2f1e81e7.js";import"./index-6833c41b.js";import{A as b,I as s}from"./noticeStatus-7a641e79.js";import{F as h}from"./FromPageLayout-d9f14917.js";import{T as f}from"./TextEditor-294383d6.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-8037d7d0.js";import"./_getTag-dcc0e0d1.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-6f090fb2.js";import"./index-0ee3514d.js";const v=()=>{const{data:t,setData:r,errors:o,post:n,processing:u}=m({title:"",description:"",status:s,published_date:""}),l=e=>{e.preventDefault(),n(route("notice.store"))};return i(h,{breadcumb_link:route("notice.index"),breadcumb_name:"Notice",breadcumb_action:"Create",loading:u,button_text:"Create Notice",handlFormSubmit:l,children:[a(c,{label:"Title",name:"title",type:"text",errors:o.title,value:t.title,onChange:e=>r("title",e.target.value)}),i(d,{label:"Status",name:"status",errors:o.status,value:t.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:b,defaultValue:t.status,children:"Active"}),a("option",{value:s,defaultValue:t.status,children:"InActive"})]}),a(f,{value:t.description,name:"description",onChangeHandler:r})]})};v.layout=t=>a(p,{title:"Create Issue",children:t});export{v as default};