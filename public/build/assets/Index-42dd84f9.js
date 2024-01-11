import{_ as h,j as i,a as e,f as n}from"./app-42a37551.js";import{I as s,A as b}from"./AuthenticatedLayout-8f203d5b.js";import{i as y}from"./utils-b75b7068.js";import{T as x}from"./TablePageLayout-6c321341.js";import{T as N,a as t}from"./TableData-899b5cbd.js";import{T as g}from"./TableAction-82fd779d.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-606bae42.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-be0fcb03.js";const A=()=>{const a=["No","Name","Address","Status","Action"],{dormitories:l,user_permissions:c}=h().props,{data:r,meta:{links:m}}=l;return i(x,{breadcumb_action:"Add New Dormitory",breadcumb_name:"Dormitory",pagination_links:m,breadcumb_link:route("additional.create"),isShowButton:!1,children:[e(N,{rows:a}),e("tbody",{children:r&&r.length?r.map(({id:o,name:d,address:u,status:f},p)=>i("tr",{children:[e(t,{value:p+1}),e(t,{value:d}),e(t,{value:u}),e(t,{value:f?"Active":"Inactive"}),i(g,{children:[e(n,{href:route("calender.view.meal",1),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(s,{name:"FaCalendarAlt",className:"w-6 h-4 text-gray-500 fill-current"})}),y("access::dormitory-edit",c)&&e(n,{href:route("dormitory.edit",o),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(s,{name:"FaEdit",className:"w-6 h-4 text-gray-500 fill-current"})})]})]},o)):e("tr",{children:e(t,{value:"No Data Found",colSpan:a.length,className:"text-center text-black dark:text-white"})})})]})};A.layout=a=>e(b,{title:"Notices",children:a});export{A as default};