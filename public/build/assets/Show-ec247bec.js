import{_ as i,j as o,a as t}from"./app-aabd3ed4.js";import{A as r}from"./AuthenticatedLayout-25354546.js";import{T as n,a}from"./TableData-9723a4c7.js";import{T as s}from"./TablePageLayout-484f9d4c.js";import"./Logo-25d59469.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-6ae26f27.js";const c=()=>{const{notice:e}=i().props;return o(s,{breadcumb_name:"Notice Details",breadcumb_link:route("notice.index"),breadcumb_action:"Notice List",isShowButton:!0,children:[t(n,{rows:["Title","Description"]}),t("tbody",{children:o("tr",{children:[t(a,{value:e.title}),t(a,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};c.layout=e=>t(r,{title:"Show Notice",children:e});export{c as default};