import{_ as b,j as o,a as e,f as A,g as x}from"./app-42a37551.js";import{I as c,A as y}from"./AuthenticatedLayout-8f203d5b.js";import{i}from"./utils-b75b7068.js";import{T,a as t}from"./TableData-899b5cbd.js";import{T as g}from"./TablePageLayout-6c321341.js";import{T as v}from"./TableAction-82fd779d.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-606bae42.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-be0fcb03.js";const N=()=>{const{assets:a,user_permissions:r}=b().props,{data:n,meta:{links:l}}=a,u=s=>(confirm("Are you sure you want to delete this asset?")&&x.delete(route("asset.destroy",s)),!0);return o(g,{breadcumb_action:"Add New Asset",breadcumb_name:"Assets",pagination_links:l,breadcumb_link:route("asset.create"),isShowButton:i("access::asset-create",r),children:[e(T,{rows:["No","Title","Description","Purchase Date","Status","Action"]}),e("tbody",{children:n&&n.length?n.map(({id:s,title:m,description:d,purchase_date:f,status:p},h)=>o("tr",{children:[e(t,{value:h+1}),e(t,{value:m}),e(t,{value:d}),e(t,{value:f}),e(t,{value:p?"Active":"Inactive"}),o(v,{children:[i("access::asset-edit",r)&&e(A,{href:route("asset.edit",s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),i("access::asset-delete",r)&&e("button",{onClick:()=>u(s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(c,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},s)):e("tr",{children:e(t,{value:"No Data Found",colSpan:6,className:"text-center text-black dark:text-white"})})})]})};N.layout=a=>e(y,{title:"Asset",children:a});export{N as default};