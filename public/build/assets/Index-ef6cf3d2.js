import{_ as h,j as o,a as e,f as b,g}from"./app-9b1aff9a.js";import{I as c,A as x}from"./AuthenticatedLayout-3ba54b4d.js";import{i}from"./utils-f35daa2d.js";import{T as y}from"./TablePageLayout-777ecf8a.js";import{T as A,a as r}from"./TableData-ed66d66f.js";import{T as N}from"./TableAction-3953310b.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-35316166.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-c40a38a9.js";const T=()=>{const a=["No","Seat No","Status","Action"],{seats:l,user_permissions:s}=h().props,{data:n,meta:{links:u}}=l,m=t=>(confirm("Are you sure you want to delete this seat?")&&g.delete(route("seat.destroy",t)),!0);return o(y,{breadcumb_action:"Add New Seat",breadcumb_name:"Seats",pagination_links:u,breadcumb_link:route("seat.create"),isShowButton:i("access::seat-create",s),children:[e(A,{rows:a}),e("tbody",{children:n&&n.length?n.map(({id:t,seat_no:d,status:f},p)=>o("tr",{children:[e(r,{value:p+1}),e(r,{value:d}),e(r,{value:f?"Active":"Inactive"}),o(N,{children:[i("access::seat-edit",s)&&e(b,{href:route("seat.edit",t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),i("access::seat-delete",s)&&e("button",{onClick:()=>m(t),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},t)):e("tr",{children:e(r,{value:"No Data Found",colSpan:a.length,className:"text-center text-black dark:text-white"})})})]})};T.layout=a=>e(x,{title:"Seat",children:a});export{T as default};