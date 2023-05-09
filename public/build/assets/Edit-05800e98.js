import{_ as v,K as b,j as l,a}from"./app-f70fd78f.js";import{A as h}from"./AuthenticatedLayout-3aa4a215.js";import{T as f}from"./TextInput-a5a74d84.js";import{S as n}from"./SelectInput-f4b43582.js";import"./index-fd8a7fff.js";import{P as g,A as _,R as y}from"./issueStatus-369c87ae.js";import{T as S}from"./TextEditor-79266f57.js";import{F as x}from"./FromPageLayout-941a1355.js";import"./Logo-25d59469.js";import"./_equalByTag-591c85b9.js";import"./_getTag-7c065b08.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-cc557e36.js";import"./index-1f6f7bd3.js";const C=()=>{const{issue:r,resolvers:i}=v().props,{data:t,setData:s,errors:o,post:u,processing:d}=b({title:r.title||"",description:r.description||"",status:r.status,resolved_by:r.resolved_by,_method:"PUT"}),m=e=>{e.preventDefault(),u(route("issue.update",r.id))};return l(x,{breadcumb_link:route("issue.index"),breadcumb_name:"Issue",breadcumb_action:"Create",loading:d,button_text:"Create Issue",handlFormSubmit:m,children:[a(f,{label:"Title",name:"title",errors:o.title,value:t.title,onChange:e=>s("title",e.target.value)}),a(n,{label:"Assign Resolver",name:"resolver",errors:o.resolved_by,value:t.resolved_by,onChange:e=>s("resolved_by",e.target.value),children:i&&i.map(({id:e,full_name:p},c)=>a("option",{value:e,defaultValue:t.resolved_by,children:p},c))}),l(n,{label:"Status",name:"status",errors:o.status,value:t.status,onChange:e=>s("status",e.target.value),children:[a("option",{value:g,defaultValue:t.status,children:"Pending"}),a("option",{value:_,defaultValue:t.status,children:"Assigned"}),a("option",{value:y,defaultValue:t.status,children:"Resolved"})]}),a(S,{value:t.description,name:"description",onChangeHandler:s})]})};C.layout=r=>a(h,{title:"Create User",children:r});export{C as default};