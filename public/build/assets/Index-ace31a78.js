import{_ as b,j as o,a as e,f as A,g as x}from"./app-5bb3ff4c.js";import{I as c,A as y}from"./AuthenticatedLayout-3ee3319c.js";import{i}from"./utils-958b6db3.js";import{T,a as t}from"./TableData-f127c638.js";import{T as g}from"./TablePageLayout-ae10f659.js";import{T as v}from"./TableAction-14a1239e.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-69e1ddf8.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-d61f8a63.js";const N=()=>{const{assets:a,user_permissions:r}=b().props,{data:n,meta:{links:l}}=a,u=s=>(confirm("Are you sure you want to delete this asset?")&&x.delete(route("asset.destroy",s)),!0);return o(g,{breadcumb_action:"Add New Asset",breadcumb_name:"Assets",pagination_links:l,breadcumb_link:route("asset.create"),isShowButton:i("access::asset-create",r),children:[e(T,{rows:["No","Title","Description","Purchase Date","Status","Action"]}),e("tbody",{children:n&&n.length?n.map(({id:s,title:m,description:d,purchase_date:f,status:p},h)=>o("tr",{children:[e(t,{value:h+1}),e(t,{value:m}),e(t,{value:d}),e(t,{value:f}),e(t,{value:p?"Active":"Inactive"}),o(v,{children:[i("access::asset-edit",r)&&e(A,{href:route("asset.edit",s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),i("access::asset-delete",r)&&e("button",{onClick:()=>u(s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},s)):e("tr",{children:e(t,{value:"No Data Found",colSpan:6,className:"text-center text-black dark:text-white"})})})]})};N.layout=a=>e(y,{title:"Asset",children:a});export{N as default};