import{_ as h,j as o,a as e,f as b,g}from"./app-d964dcbb.js";import{I as c,A as x}from"./AuthenticatedLayout-4de9b15e.js";import{i}from"./utils-0da3b2c9.js";import{T as y}from"./TablePageLayout-af0a13d0.js";import{T as A,a as r}from"./TableData-56b234cd.js";import{T as N}from"./TableAction-a3c1e08c.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-05106625.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-f2c25f78.js";const T=()=>{const a=["No","Seat No","Status","Action"],{seats:l,user_permissions:s}=h().props,{data:n,meta:{links:u}}=l,m=t=>(confirm("Are you sure you want to delete this seat?")&&g.delete(route("seat.destroy",t)),!0);return o(y,{breadcumb_action:"Add New Seat",breadcumb_name:"Seats",pagination_links:u,breadcumb_link:route("seat.create"),isShowButton:i("access::seat-create",s),children:[e(A,{rows:a}),e("tbody",{children:n&&n.length?n.map(({id:t,seat_no:d,status:f},p)=>o("tr",{children:[e(r,{value:p+1}),e(r,{value:d}),e(r,{value:f?"Active":"Inactive"}),o(N,{children:[i("access::seat-edit",s)&&e(b,{href:route("seat.edit",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),i("access::seat-delete",s)&&e("button",{onClick:()=>m(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},t)):e("tr",{children:e(r,{value:"No Data Found",colSpan:a.length,className:"text-center text-black dark:text-white"})})})]})};T.layout=a=>e(x,{title:"Seat",children:a});export{T as default};