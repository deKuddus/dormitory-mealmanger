import{K as n,j as i,a}from"./app-9b1aff9a.js";import{A as m}from"./AuthenticatedLayout-3ba54b4d.js";import{T as p}from"./TextInput-66afd55f.js";import{S as d}from"./SelectInput-2f1e81e7.js";import"./index-6833c41b.js";import{I as c}from"./noticeStatus-7a641e79.js";import{F as b}from"./FromPageLayout-d9f14917.js";import{T as f}from"./TextEditor-294383d6.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-8037d7d0.js";import"./_getTag-dcc0e0d1.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-6f090fb2.js";import"./index-0ee3514d.js";const h=()=>{const{data:t,setData:r,errors:o,post:l,processing:s}=n({title:"",status:c,description:""}),u=e=>{e.preventDefault(),l(route("rule.store"))};return i(b,{breadcumb_link:route("rule.index"),breadcumb_name:"Rule",breadcumb_action:"Create",loading:s,button_text:"Create Rule",handlFormSubmit:u,children:[a(p,{label:"Title",name:"title",type:"text",errors:o.title,value:t.title,onChange:e=>r("title",e.target.value)}),i(d,{label:"Status",name:"status",errors:o.status,value:t.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:"1",defaultValue:t.status,children:"Active"}),a("option",{value:"0",defaultValue:t.status,children:"InActive"})]}),a(f,{value:t.description,name:"description",onChangeHandler:r})]})};h.layout=t=>a(m,{title:"Create Rule",children:t});export{h as default};