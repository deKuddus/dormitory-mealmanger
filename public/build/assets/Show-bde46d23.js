import{_ as o,j as a,a as t}from"./app-29cfbc1f.js";import{A as s}from"./AuthenticatedLayout-7b950e6a.js";import{T as i}from"./TablePageLayout-20e92ab3.js";import{T as l,a as r}from"./TableData-1a39286f.js";import"./Logo-25d59469.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-3b0405ad.js";const n=()=>{const{issue:e}=o().props;return a(i,{breadcumb_name:"Issue Details",children:[t(l,{rows:["Title","Description"]}),t("tbody",{children:a("tr",{children:[t(r,{value:e.title}),t(r,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};n.layout=e=>t(s,{title:"Issue",children:e});export{n as default};
