import{K as m,j as u,a as r}from"./app-703e88cb.js";import{A as l}from"./AuthenticatedLayout-be5ce0df.js";import{T as p}from"./TextInput-1c56c944.js";import"./index-8fe1168b.js";import{P as d}from"./issueStatus-369c87ae.js";import{F as c}from"./FromPageLayout-d49524ee.js";import{T as b}from"./TextEditor-1536da74.js";import"./Logo-25d59469.js";import"./_equalByTag-a6a51e65.js";import"./_getTag-263e0c84.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-507cbb28.js";import"./index-1f6f7bd3.js";const f=()=>{const{data:t,setData:o,errors:a,post:i,processing:s}=m({title:"",description:"",status:d}),n=e=>{e.preventDefault(),i(route("user.issue.store"))};return u(c,{breadcumb_link:route("user.issue.index"),breadcumb_name:"Issue",breadcumb_action:"Create",loading:s,button_text:"Create Issue",handlFormSubmit:n,children:[r(p,{label:"Title",name:"title",type:"text",errors:a.title,value:t.title,onChange:e=>o("title",e.target.value)}),r(b,{label:"Description",value:t.description,name:"description",onChangeHandler:o})]})};f.layout=t=>r(l,{title:"Create Issue",children:t});export{f as default};