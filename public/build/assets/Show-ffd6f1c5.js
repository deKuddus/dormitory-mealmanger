import{_ as o,j as a,a as t}from"./app-4ec64071.js";import{A as i}from"./AuthenticatedLayout-13fbfac3.js";import{T as s}from"./TablePageLayout-b8b26131.js";import{T as l,a as r}from"./TableData-4167bc1f.js";import"./Logo-white-2a851e2e.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-eb0b7ce5.js";const n=()=>{const{rule:e}=o().props;return a(s,{breadcumb_name:"Rule Details",children:[t(l,{rows:["Title","Description"]}),t("tbody",{children:a("tr",{children:[t(r,{value:e.title}),t(r,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};n.layout=e=>t(i,{title:"Notices",children:e});export{n as default};