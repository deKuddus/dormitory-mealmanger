import{_ as a,j as o,a as t}from"./app-703e88cb.js";import{A as i}from"./AuthenticatedLayout-be5ce0df.js";import{T as s,a as r}from"./TableData-08126a99.js";import{T as n}from"./TablePageLayout-d82d7ea9.js";import"./Logo-25d59469.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-d074fca6.js";const c=()=>{const{notice:e}=a().props;return o(n,{breadcumb_name:"Notice Details",breadcumb_link:route("user.notices.index"),breadcumb_action:"Notice List",isShowButton:!0,children:[t(s,{rows:["Title","Description"]}),t("tbody",{children:o("tr",{children:[t(r,{value:e.title}),t(r,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};c.layout=e=>t(i,{title:"Notices",children:e});export{c as default};