import{_ as h,j as i,a as e,f as n}from"./app-2e3d24e8.js";import{I as s,A as b}from"./AuthenticatedLayout-448edf68.js";import{i as y}from"./utils-1f24efd7.js";import{T as x}from"./TablePageLayout-e94deaba.js";import{T as N,a as t}from"./TableData-4fe00f42.js";import{T as g}from"./TableAction-4f781bdf.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-115deb87.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-b270d82a.js";const A=()=>{const a=["No","Name","Address","Status","Action"],{dormitories:l,user_permissions:c}=h().props,{data:r,meta:{links:m}}=l;return i(x,{breadcumb_action:"Add New Dormitory",breadcumb_name:"Dormitory",pagination_links:m,breadcumb_link:route("additional.create"),isShowButton:!1,children:[e(N,{rows:a}),e("tbody",{children:r&&r.length?r.map(({id:o,name:d,address:u,status:f},p)=>i("tr",{children:[e(t,{value:p+1}),e(t,{value:d}),e(t,{value:u}),e(t,{value:f?"Active":"Inactive"}),i(g,{children:[e(n,{href:route("calender.view.meal",1),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(s,{name:"FaCalendarAlt",className:"w-6 h-4 text-gray-500 fill-current"})}),y("access::dormitory-edit",c)&&e(n,{href:route("dormitory.edit",o),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(s,{name:"FaEdit",className:"w-6 h-4 text-gray-500 fill-current"})})]})]},o)):e("tr",{children:e(t,{value:"No Data Found",colSpan:a.length,className:"text-center text-black dark:text-white"})})})]})};A.layout=a=>e(b,{title:"Notices",children:a});export{A as default};