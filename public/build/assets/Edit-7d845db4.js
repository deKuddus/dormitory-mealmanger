import{_ as m,K as p,j as s,a as r}from"./app-42a37551.js";import{A as d}from"./AuthenticatedLayout-8f203d5b.js";import"./index-0ee3514d.js";import{T as c}from"./TextInput-abafa868.js";import{S as h}from"./SelectInput-bfd26e89.js";import"./index-3ced07dd.js";import{F as b}from"./FromPageLayout-981c2b6f.js";import{T as f}from"./TextEditor-82e66b7d.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-9aa3f0a5.js";import"./_getTag-986fc249.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-b79ac2d7.js";const v=()=>{const{rule:t}=m().props,{data:e,setData:o,errors:i,post:u,processing:l}=p({title:t.title,status:t.status,description:t.description,_method:"PUT"}),n=a=>{a.preventDefault(),u(route("rule.update",t.id))};return s(b,{breadcumb_link:route("rule.index"),breadcumb_name:"Rule",breadcumb_action:"Create",loading:l,button_text:"Create Rule",handlFormSubmit:n,children:[r(c,{label:"Title",name:"title",type:"text",errors:i.title,value:e.title,onChange:a=>o("title",a.target.value)}),s(h,{label:"Status",name:"status",errors:i.status,value:e.status,onChange:a=>o("status",a.target.value),children:[r("option",{value:"1",defaultValue:e.status,children:"Active"}),r("option",{value:"0",defaultValue:e.status,children:"InActive"})]}),r(f,{value:e.description,name:"description",onChangeHandler:o})]})};v.layout=t=>r(d,{title:"Edit Rule",children:t});export{v as default};