import{_ as m,K as p,j as s,a as r}from"./app-d964dcbb.js";import{A as d}from"./AuthenticatedLayout-4de9b15e.js";import"./index-1f6f7bd3.js";import{T as c}from"./TextInput-b0cd80b7.js";import{S as h}from"./SelectInput-ddc62679.js";import"./index-a5fbfff7.js";import{F as b}from"./FromPageLayout-e7ad8d1b.js";import{T as f}from"./TextEditor-2021fc8f.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-444299d1.js";import"./_getTag-e3de12a0.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-1fddfbc4.js";const v=()=>{const{rule:t}=m().props,{data:e,setData:o,errors:i,post:u,processing:l}=p({title:t.title,status:t.status,description:t.description,_method:"PUT"}),n=a=>{a.preventDefault(),u(route("rule.update",t.id))};return s(b,{breadcumb_link:route("rule.index"),breadcumb_name:"Rule",breadcumb_action:"Create",loading:l,button_text:"Create Rule",handlFormSubmit:n,children:[r(c,{label:"Title",name:"title",type:"text",errors:i.title,value:e.title,onChange:a=>o("title",a.target.value)}),s(h,{label:"Status",name:"status",errors:i.status,value:e.status,onChange:a=>o("status",a.target.value),children:[r("option",{value:"1",defaultValue:e.status,children:"Active"}),r("option",{value:"0",defaultValue:e.status,children:"InActive"})]}),r(f,{value:e.description,name:"description",onChangeHandler:o})]})};v.layout=t=>r(d,{title:"Edit Rule",children:t});export{v as default};