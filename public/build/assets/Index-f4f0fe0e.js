import{_ as g,j as o,a as e,f as x,g as y}from"./app-aabd3ed4.js";import{I as i,A}from"./AuthenticatedLayout-25354546.js";import{i as c}from"./utils-d45c0400.js";import{T as N}from"./TablePageLayout-484f9d4c.js";import{T,a as t}from"./TableData-9723a4c7.js";import{T as w}from"./TableAction-f22dbfac.js";import"./Logo-25d59469.js";import"./dayjs.min-77c9d7d0.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-6ae26f27.js";const k=()=>{const r=["No","Name","Phone","Address","Status","Action"],{chefs:l,user_permissions:n}=g().props,{data:s,meta:{links:u}}=l,m=a=>(confirm("Are you sure you want to delete this chef?")&&y.delete(route("chef.destroy",a)),!0);return o(N,{breadcumb_action:"Add New Chef",breadcumb_name:"Chefs",pagination_links:u,breadcumb_link:route("chef.create"),isShowButton:c("access::chef-create",n),children:[e(T,{rows:r}),e("tbody",{children:s&&s.length?s.map(({id:a,name:f,address:d,phone:h,status:p},b)=>o("tr",{children:[e(t,{value:b+1}),e(t,{value:f}),e(t,{value:h}),e(t,{value:d}),e(t,{value:p}),o(w,{children:[c("access::chef-edit",n)&&e(x,{href:route("chef.edit",a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(i,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),c("access::chef-delete",n)&&e("button",{onClick:()=>m(a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(i,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},a)):e("tr",{children:e(t,{value:"No Data Found",colSpan:r.length,className:"text-center text-black dark:text-white"})})})]})};k.layout=r=>e(A,{title:"Chef",children:r});export{k as default};
