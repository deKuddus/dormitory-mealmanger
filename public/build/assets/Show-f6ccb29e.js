import{_ as a,j as o,a as t}from"./app-1efc3851.js";import{A as i}from"./AuthenticatedLayout-86a581d7.js";import{T as s,a as r}from"./TableData-8634702d.js";import{T as n}from"./TablePageLayout-c35364e6.js";import"./Logo-25d59469.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-303d4af7.js";const c=()=>{const{notice:e}=a().props;return o(n,{breadcumb_name:"Notice Details",breadcumb_link:route("user.notices.index"),breadcumb_action:"Notice List",isShowButton:!0,children:[t(s,{rows:["Title","Description"]}),t("tbody",{children:o("tr",{children:[t(r,{value:e.title}),t(r,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};c.layout=e=>t(i,{title:"Notices",children:e});export{c as default};