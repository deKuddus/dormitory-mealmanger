import{_ as r,j as t,F as s,a as o,f as a}from"./app-523ce712.js";import{L as i}from"./MemberLayout-30547411.js";import"./index-2e4736b8.js";import"./BottomHeader-7b0964c6.js";const l=()=>{const{rule:e}=r().props;return t(s,{children:[t("h1",{className:"mb-8 text-3xl font-bold",children:[o(a,{href:route("user.notices.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Rule"}),o("span",{className:"font-medium text-indigo-600",children:" /"})," ","Details"]}),t("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:[t("h2",{className:"text-xl p-4 border-b-2",children:["Title: ",e.title]}),o("p",{className:"mb-3 p-4 leading-8 font-light text-gray-500",dangerouslySetInnerHTML:{__html:e.description}})]})]})};l.layout=e=>o(i,{title:"Rule",children:e});export{l as default};