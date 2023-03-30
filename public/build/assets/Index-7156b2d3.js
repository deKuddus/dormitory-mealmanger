import{_ as f,j as s,a as e,f as c}from"./app-b424552e.js";import{L as u}from"./Layout-012bfe45.js";import{I as i}from"./BottomHeader-31b85409.js";import{P as x}from"./Pagination-a94d734b.js";import{i as r}from"./utils-4fea7fd8.js";import"./index-2e4736b8.js";const N=()=>{const{roles:t,user_permissions:l}=f().props,{data:a,meta:{links:o}}=t;return s("div",{children:[s("div",{className:"flex items-center justify-between mb-6",children:[e("h1",{className:"text-3xl font-bold",children:"Rules"}),r("access::role-create",l)&&s(c,{className:"btn-indigo focus:outline-none",href:route("role.create"),children:[e("span",{children:"Create"}),e("span",{className:"hidden md:inline",children:" Role"})]})]}),e("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:s("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:s("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"No"}),e("th",{className:"px-6 pt-5 pb-4",children:"Name"}),e("th",{className:"px-6 pt-5 pb-4",children:"Number of Users"}),e("th",{className:"px-6 pt-5 pb-4",children:"Permisison"}),e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),s("tbody",{children:[a.map(({id:n,name:d,permissions_count:m,users_count:p},h)=>s("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:h+1})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:d})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:p})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:m})}),e("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:s("div",{className:"flex items-center gap-4 justify-end",children:[r("access::role-edit",l)&&e(c,{href:route("role.edit",n),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(i,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),r("access::role-delete",l)&&e("button",{onClick:()=>deleteRole(n),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(i,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})})]},n)),a.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border",colSpan:"4",children:"No Rule found."})})]})]})}),e(x,{links:o})]})};N.layout=t=>e(u,{title:"Roles",children:t});export{N as default};
