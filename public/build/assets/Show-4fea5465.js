import{_ as i,j as o,a as t}from"./app-42a37551.js";import{A as r}from"./AuthenticatedLayout-8f203d5b.js";import{T as n,a}from"./TableData-899b5cbd.js";import{T as s}from"./TablePageLayout-6c321341.js";import"./Logo-white-2a851e2e.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-be0fcb03.js";const c=()=>{const{notice:e}=i().props;return o(s,{breadcumb_name:"Notice Details",breadcumb_link:route("notice.index"),breadcumb_action:"Notice List",isShowButton:!0,children:[t(n,{rows:["Title","Description"]}),t("tbody",{children:o("tr",{children:[t(a,{value:e.title}),t(a,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};c.layout=e=>t(r,{title:"Show Notice",children:e});export{c as default};