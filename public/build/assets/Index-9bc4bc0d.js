import{_ as y,r as v,j as s,a as e,f as M,g as w}from"./app-b424552e.js";import{L as C}from"./Layout-012bfe45.js";import{m as o,I as i}from"./BottomHeader-31b85409.js";import{S as Y}from"./SelectInput-640692d3.js";import{c as j,i as d}from"./utils-4fea7fd8.js";import"./index-2e4736b8.js";const S=()=>{const{users:a,user_permissions:n}=y().props,[m,p]=v.useState(o().format("MMM-YYYY")),l=j(),h=t=>{},u=t=>{confirm("Are you sure to add meal for the selected user?")&&w.post(route("meal.add"),{userId:t})},f=({status:t})=>{if(t===0)return e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:e("span",{className:"text-red-600",children:"Inactive"})});if(t===1)return e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:e("span",{className:"text-buttonColor-400",children:"Active"})});if(t===2)return e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:e("span",{className:"text-red-600",children:"Closed"})})};return s("div",{children:[e("h1",{className:"mb-8 text-3xl font-bold",children:"Meals"}),s("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6",children:[s("div",{className:"flex items-center",children:[s("span",{className:"text-xl p-3",children:["Today's Meal: ",e("span",{className:"font-bold",children:"50"})]}),s("span",{className:"text-xl p-3",children:["Total Meal :"," ",e("span",{className:"font-bold text-buttonColor-400",children:"50"})]})]}),e("div",{className:"flex items-center",children:e("div",{className:"relative z-30 w-64 px-4 py-6 mt-2",children:e(Y,{label:"Month",name:"month",value:m,onChange:t=>{p(t.target.value),h(t.target.value)},children:l&&l.map((t,r)=>e("option",{value:t,defaultValue:o().format("MMMM-YYYY"),children:t},r))})})})]}),e("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:s("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:s("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4 border",children:"No."}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Name"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Email"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Status"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Meal"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Action"})]})}),e("tbody",{children:a?a.map(({id:t,first_name:r,last_name:x,meals:c,status:N,email:b},g)=>s("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:g+1})}),e("td",{className:"border",children:s("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:[r," ",x]})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:b})}),e("td",{className:"border",children:e(f,{status:N})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:c[0]||0})}),e("td",{className:"border w-px border-t p-3 whitespace-nowrap",children:s("div",{className:"flex items-center gap-2 justify-end",children:[!c[0]&&d("access::meal-add",n)&&e("button",{onClick:()=>u(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(i,{name:"FaEdit",className:"w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"})}),d("access::meal-show",n)&&e(M,{href:route("meals.show",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(i,{name:"FaEye",className:"w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"})})]})})]},t)):e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"6",children:"No users found."})})})]})})]})};S.layout=a=>e(C,{title:"Meals",children:a});export{S as default};
