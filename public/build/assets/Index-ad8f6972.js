import{_ as y,j as r,a as e,f as p,F as z,g as m}from"./app-b424552e.js";import{L as w}from"./Layout-012bfe45.js";import{I as o}from"./BottomHeader-31b85409.js";import{P as v}from"./Pagination-a94d734b.js";import{h as A}from"./moment-fbc5633a.js";import{i as c}from"./utils-4fea7fd8.js";import"./index-2e4736b8.js";const j=()=>{const{bazars:n,user_permissions:a}=y().props,{data:s,meta:{links:i}}=n,u=t=>(confirm("Are you sure you want to delete this bazar?")&&m.delete(route("bazar.destroy",t)),!0),h=t=>(confirm("Are you sure you want to approve this bazar?")&&m.post(route("bazar.approve"),{id:t}),!0),f=t=>{if(t===0)return e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-red-600 ",children:"Pending"});if(t===1)return e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-success-400",children:"Approved"});if(t===2)return e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-blue-400",children:"Closed"})};return r("div",{children:[e("h1",{className:"mb-8 text-3xl font-bold",children:"Bazars"}),e("div",{className:"flex items-center justify-end mb-6",children:c("access::bazar-create",a)&&r(p,{className:"btn-indigo focus:outline-none",href:route("bazar.create"),children:[e("span",{children:"Add New "}),e("span",{className:"hidden md:inline",children:"Bazar"})]})}),e("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:r("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:r("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"No"}),e("th",{className:"px-6 pt-5 pb-4",children:"Create Date"}),e("th",{className:"px-6 pt-5 pb-4",children:"Amount"}),e("th",{className:"px-6 pt-5 pb-4",children:"Description"}),e("th",{className:"px-6 pt-5 pb-4",children:"Status"}),e("th",{className:"px-6 pt-5 pb-4",children:"Member"}),e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),r("tbody",{children:[s.map(({id:t,amount:x,description:N,created_at:b,bazarSchedule:d,status:l},g)=>r("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:g+1})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:A(b).format("Do MMMM YYYY")})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:x})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:N})}),e("td",{className:"border",children:f(l)}),e("td",{className:"border",children:e(B,{users:d&&d.users})}),e("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:r("div",{className:"flex items-center gap-4 justify-end",children:[l===0&&c("access::bazar-approve",a)&&e("button",{onClick:()=>h(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(o,{name:"FaCheck",className:"w-6 h-4 text-gray-400 fill-current"})}),l!==2?r(z,{children:[c("access::bazar-edit",a)&&e(p,{href:route("bazar.edit",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(o,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),c("access::bazar-delete",a)&&e("button",{onClick:()=>u(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(o,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]}):e("span",{className:"text-3xl",children:"🫣"})]})})]},t)),s.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border",colSpan:"7",children:"No Bazar found."})})]})]})}),e(v,{links:i})]})},B=({users:n})=>e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:n&&n.length>0?n.map(({first_name:a,last_name:s},i)=>e("span",{className:"bg-green-200 text-gray-800  mr-2 px-2.5 py-0.5 rounded",children:`${a} ${s}`},i)):"N/A"});j.layout=n=>e(w,{title:"Bazar",children:n});export{j as default};
