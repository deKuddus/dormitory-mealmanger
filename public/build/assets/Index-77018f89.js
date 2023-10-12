import{_ as x,j as i,a as e,f as u,g as b}from"./app-93a66bd7.js";import{I as c,A as y}from"./AuthenticatedLayout-81d21b50.js";import{A as m}from"./noticeStatus-7a641e79.js";import{i as r}from"./utils-90792b02.js";import{T as N}from"./TablePageLayout-809d3d73.js";import{T as A,a as o}from"./TableData-44d9e145.js";import{T}from"./TableAction-a9c47840.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-5061f55a.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-6a220df0.js";const w=()=>{const a=["No","Title","Status","Action"],{notices:d,user_permissions:n}=x().props,{data:s,meta:{links:f}}=d,p=t=>(confirm("Are you sure you want to delete this notice?")&&b.delete(route("notice.destroy",t)),!0);return i(N,{breadcumb_action:"Add New Notice",breadcumb_name:"Notices",pagination_links:f,breadcumb_link:route("notice.create"),isShowButton:r("access::notice-create",n),children:[e(A,{rows:a}),e("tbody",{children:s&&s.length?s.map(({id:t,title:h,description:j,status:l},g)=>i("tr",{children:[e(o,{value:g+1}),e(o,{value:h}),e(o,{value:l===m?"Active":"Inactive",className:`rounded-full ${l===m?"bg-success text-success":"bg-danger text-danger"} text-center bg-opacity-10 py-1 px-3 text-sm`}),i(T,{children:[r("access::meal-edit",n)&&e(u,{href:route("notice.edit",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),r("access::meal-show",n)&&e(u,{href:route("notice.show",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEye",className:"w-6 h-4 text-gray-400 fill-current"})}),r("access::meal-delete",n)&&e("button",{onClick:()=>p(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},t)):e("tr",{children:e(o,{value:"No Data Found",colSpan:a.length,className:"text-center text-black dark:text-white"})})})]})};w.layout=a=>e(y,{title:"Notices",children:a});export{w as default};