import{K as m,j as u,a as r}from"./app-1efc3851.js";import{A as l}from"./AuthenticatedLayout-86a581d7.js";import{T as p}from"./TextInput-33d14c7d.js";import"./index-fab0be57.js";import{P as d}from"./issueStatus-369c87ae.js";import{F as c}from"./FromPageLayout-58bdd8cc.js";import{T as b}from"./TextEditor-fc854b11.js";import"./Logo-25d59469.js";import"./_equalByTag-93591667.js";import"./_getTag-64bfc19f.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-22cb04af.js";import"./index-1f6f7bd3.js";const f=()=>{const{data:t,setData:o,errors:a,post:i,processing:s}=m({title:"",description:"",status:d}),n=e=>{e.preventDefault(),i(route("user.issue.store"))};return u(c,{breadcumb_link:route("user.issue.index"),breadcumb_name:"Issue",breadcumb_action:"Create",loading:s,button_text:"Create Issue",handlFormSubmit:n,children:[r(p,{label:"Title",name:"title",type:"text",errors:a.title,value:t.title,onChange:e=>o("title",e.target.value)}),r(b,{label:"Description",value:t.description,name:"description",onChangeHandler:o})]})};f.layout=t=>r(l,{title:"Create Issue",children:t});export{f as default};