import{_ as b,j as s,a as e,f as g,g as x}from"./app-af00dd6a.js";import{I as c,A as y}from"./AuthenticatedLayout-adc67dd3.js";import{i}from"./utils-7a3637e9.js";import{T as A}from"./TablePageLayout-ab191cc5.js";import{T as N,a as o}from"./TableData-a87ba475.js";import{T}from"./TableAction-bd28c196.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-43fdbc34.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-7822ee87.js";const v=()=>{const a=["No","Name","Location","Status","Action"],{rooms:l,user_permissions:r}=b().props,{data:n,meta:{links:m}}=l,u=t=>(confirm("Are you sure you want to delete this room?")&&x.delete(route("room.destroy",t)),!0);return s(A,{breadcumb_action:"Add New Room",breadcumb_name:"Rooms",pagination_links:m,breadcumb_link:route("room.create"),isShowButton:i("access::room-create",r),children:[e(N,{rows:a}),e("tbody",{children:n&&n.length?n.map(({id:t,name:d,location:f,created_at:w,status:p},h)=>s("tr",{children:[e(o,{value:h+1}),e(o,{value:d}),e(o,{value:f}),e(o,{value:p?"Active":"Inactive"}),s(T,{children:[i("access::room-edit",r)&&e(g,{href:route("room.edit",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),i("access::room-delete",r)&&e("button",{onClick:()=>u(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},t)):e("tr",{children:e(o,{value:"No Data Found",colSpan:a.length,className:"text-center text-black dark:text-white"})})})]})};v.layout=a=>e(y,{title:"Room",children:a});export{v as default};
