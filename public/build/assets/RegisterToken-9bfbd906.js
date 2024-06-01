import{_ as f,j as c,a as e,g as i,Q as h}from"./app-9b1aff9a.js";import{m as b,I as l,A as k}from"./AuthenticatedLayout-3ba54b4d.js";import{T as y}from"./TablePageLayout-777ecf8a.js";import{T,a as r}from"./TableData-ed66d66f.js";import{T as x}from"./TableAction-3953310b.js";import"./Logo-white-2a851e2e.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-c40a38a9.js";const g=()=>{const{tokens:n,app_url:C}=f().props,{data:a,meta:{links:w}}=n,u=t=>(confirm("Are you sure you want to delete this token?")&&i.post(route("tokens.destroy"),{id:t}),!0),m=t=>(window.isSecureContext&&navigator.clipboard?navigator.clipboard.writeText(route("register",t)):d(route("register",t)),h.success("Link copied")),d=t=>{const o=document.createElement("textarea");o.value=t,document.body.appendChild(o),o.focus(),o.select();try{document.execCommand("copy")}catch(s){console.error("Unable to copy to clipboard",s)}document.body.removeChild(o)};return c(y,{breadcumb_name:"Register Tokens",breadcumb_action:"Create New Token",isShowButton:!0,type:"button",clickHandler:()=>i.post(route("tokens.create")),children:[e(T,{rows:["No","Token","Expire At","Action"]}),e("tbody",{children:a&&a.length?a.map(({id:t,uuid:o,expire_at:s},p)=>c("tr",{children:[e(r,{value:p+1}),e(r,{value:o}),e(r,{value:b(s).format("Do MMMM YYYY")}),c(x,{children:[e("button",{onClick:()=>m(o),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(l,{name:"FaCopy",className:"w-6 h-4 text-gray-400 fill-current"})}),e("button",{onClick:()=>u(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(l,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},t)):e("tr",{children:e(r,{value:"No Data Found",colSpan:4,className:"text-center text-black dark:text-white"})})})]})};g.layout=n=>e(k,{title:"Register Token",children:n});export{g as default};