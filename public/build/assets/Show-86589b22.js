import{_ as i,j as o,a as t}from"./app-a1e31084.js";import{A as r}from"./AuthenticatedLayout-fe1980fd.js";import{T as n,a}from"./TableData-9266f178.js";import{T as s}from"./TablePageLayout-cda926e6.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-546ca9a9.js";const c=()=>{const{notice:e}=i().props;return o(s,{breadcumb_name:"Notice Details",breadcumb_link:route("notice.index"),breadcumb_action:"Notice List",isShowButton:!0,children:[t(n,{rows:["Title","Description"]}),t("tbody",{children:o("tr",{children:[t(a,{value:e.title}),t(a,{value:t("span",{dangerouslySetInnerHTML:{__html:e.description}})})]})})]})};c.layout=e=>t(r,{title:"Show Notice",children:e});export{c as default};
