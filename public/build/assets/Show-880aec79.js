import{_ as i,j as t,F as a,a as o,f as r}from"./app-b424552e.js";import{L as s}from"./Layout-012bfe45.js";import"./index-2e4736b8.js";import"./utils-4fea7fd8.js";import"./BottomHeader-31b85409.js";const l=()=>{const{notice:e}=i().props;return t(a,{children:[t("h1",{className:"mb-8 text-3xl font-bold",children:[o(r,{href:route("notice.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Notice"}),o("span",{className:"font-medium text-indigo-600",children:" /"})," ","Details"]}),t("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:[t("h2",{className:"text-xl p-4 border-b-2",children:["Title: ",e.title]}),o("p",{className:"mb-3 p-4 leading-8 font-light text-gray-500",dangerouslySetInnerHTML:{__html:e.description}})]})]})};l.layout=e=>o(s,{title:"Notices",children:e});export{l as default};
