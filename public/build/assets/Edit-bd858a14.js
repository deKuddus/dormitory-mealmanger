import{_ as m,K as p,j as u,a as r}from"./app-5bb3ff4c.js";import{A as d}from"./AuthenticatedLayout-3ee3319c.js";import{T as c}from"./TextInput-67447172.js";import"./index-5e7b5568.js";import{F as b}from"./FromPageLayout-fe3a619d.js";import{T as f}from"./TextEditor-7163aa20.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-0231cd21.js";import"./_getTag-2a686ee5.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-f2081c1d.js";import"./index-1f6f7bd3.js";const h=()=>{const{issue:t,resolvers:x}=m().props,{data:i,setData:o,errors:s,post:a,processing:n}=p({title:t.title||"",description:t.description||"",_method:"PUT"}),l=e=>{e.preventDefault(),a(route("user.issue.update",t.id))};return u(b,{breadcumb_link:route("user.issue.index"),breadcumb_name:"Issue",breadcumb_action:"Edit",loading:n,button_text:"Update Issue",handlFormSubmit:l,children:[r(c,{className:"w-full pb-8 pr-6",label:"Title",name:"title",errors:s.title,value:i.title,onChange:e=>o("title",e.target.value)}),r(f,{label:"Description",name:"description",value:i.description,onChangeHandler:o})]})};h.layout=t=>r(d,{title:"Update Issue",children:t});export{h as default};