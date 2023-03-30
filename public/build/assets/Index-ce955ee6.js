import{_ as u,j as t,a as e,f as x,F as N,g as b}from"./app-b424552e.js";import{L as g}from"./Layout-012bfe45.js";import{I as y}from"./BottomHeader-31b85409.js";import{P as w}from"./Pagination-a94d734b.js";import{A as r,P as o}from"./additionalCostStatus-5109433a.js";import{i as d}from"./utils-4fea7fd8.js";import"./index-2e4736b8.js";const A=()=>{const{additionals:s,user_permissions:a}=u().props,{data:l,meta:{links:c}}=s,m=i=>(confirm("Are you sure you want to delete this additional?")&&b.delete(route("additional.destroy",i)),!0);return t("div",{children:[e("h1",{className:"mb-8 text-3xl font-bold",children:"AdditionalCosts"}),e("div",{className:"flex items-center justify-end mb-6",children:d("access::additional-create",a)&&t(x,{className:"btn-indigo focus:outline-none",href:route("additional.create"),children:[e("span",{children:"Add New"}),e("span",{className:"hidden md:inline",children:" Cost"})]})}),e("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:t("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:t("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"No"}),e("th",{className:"px-6 pt-5 pb-4",children:"Amount"}),e("th",{className:"px-6 pt-5 pb-4",children:"Description"}),e("th",{className:"px-6 pt-5 pb-4",children:"Status"}),e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),t("tbody",{children:[l.map(({id:i,amount:p,description:h,status:n},f)=>t("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:f+1})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:p})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:h})}),e("td",{className:"border",children:e("p",{className:`flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none ${n===r?"text-green-500":n===o?"text-red-600":"text-blue-400"}`,children:n===r?"Approved":n===o?"Pending":"Closed"})}),e("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:e("div",{className:"flex items-center gap-4 justify-end",children:n!==2?e(N,{children:d("access::additional-delete",a)&&e("button",{onClick:()=>m(i),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(y,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})}):e("span",{className:"text-3xl",children:"🫣"})})})]},i)),l.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border",colSpan:"5",children:"No AdditionalCost found."})})]})]})}),e(w,{links:c})]})};A.layout=s=>e(g,{title:"Additional Cost",children:s});export{A as default};