import{_ as m,K as p,j as s,a as r}from"./app-93a66bd7.js";import{A as d}from"./AuthenticatedLayout-81d21b50.js";import"./index-0ee3514d.js";import{T as c}from"./TextInput-cc3444e0.js";import{S as h}from"./SelectInput-2812e7a4.js";import"./index-b5de723f.js";import{F as b}from"./FromPageLayout-de086881.js";import{T as f}from"./TextEditor-1691889d.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-46bd4e2a.js";import"./_getTag-aaa82992.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-cac77637.js";const v=()=>{const{rule:t}=m().props,{data:e,setData:o,errors:i,post:u,processing:l}=p({title:t.title,status:t.status,description:t.description,_method:"PUT"}),n=a=>{a.preventDefault(),u(route("rule.update",t.id))};return s(b,{breadcumb_link:route("rule.index"),breadcumb_name:"Rule",breadcumb_action:"Create",loading:l,button_text:"Create Rule",handlFormSubmit:n,children:[r(c,{label:"Title",name:"title",type:"text",errors:i.title,value:e.title,onChange:a=>o("title",a.target.value)}),s(h,{label:"Status",name:"status",errors:i.status,value:e.status,onChange:a=>o("status",a.target.value),children:[r("option",{value:"1",defaultValue:e.status,children:"Active"}),r("option",{value:"0",defaultValue:e.status,children:"InActive"})]}),r(f,{value:e.description,name:"description",onChangeHandler:o})]})};v.layout=t=>r(d,{title:"Edit Rule",children:t});export{v as default};