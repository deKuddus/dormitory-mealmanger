import{_ as A,r as N,j as c,F as M,a as e,g as T}from"./app-a1e31084.js";import{I as y,A as D}from"./AuthenticatedLayout-fe1980fd.js";import{h as S}from"./moment-fbc5633a.js";import{T as k,a as t}from"./TableData-9266f178.js";import{T as F}from"./TablePageLayout-cda926e6.js";import{T as b}from"./TableAction-d3ff6458.js";import{M as j}from"./Modal-4b605aed.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-546ca9a9.js";import"./TextInput-6b9453f0.js";const C=()=>{const o=["No","Day","Breakfast","Lunch","Dinner","Action"],{menus:u}=A().props,[h,r]=N.useState(!1),p={break_fast:"",lunch:"",dinner:"",id:""},[i,m]=N.useState(p),f=(a,n,s,l)=>{m({...i,break_fast:a,lunch:n,dinner:s,id:l}),r(!0)},w=()=>{r(!1),T.post(route("menu.update",i.id),{...i,_method:"PUT"})},g=()=>{m(p),r(!1)},v={6:"Saturday",0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday"};return c(M,{children:[h&&e(j,{handleModalClose:g,setMenuData:m,menuData:i,handleConfirm:w,open:h,setOpen:r}),c(F,{breadcumb_action:"Add New Menu",breadcumb_name:"Menus",pagination_links:"",breadcumb_link:route("menu.create"),isShowButton:!1,children:[e(k,{rows:o}),e("tbody",{children:u&&u.length?u.map(({id:a,break_fast:n,lunch:s,dinner:l,menu_date:d},x)=>v[S().day()]===d?c("tr",{className:"bg-success font-bold text-xl shadow-2xl",children:[e(t,{value:x+1,className:"text-white "}),e(t,{value:d,className:"text-white "}),e(t,{value:n||"N/A",className:"text-white"}),e(t,{value:s||"N/A",className:"text-white "}),e(t,{value:l||"N/A",className:"text-white"}),e(b,{children:e("button",{onClick:()=>f(n,s,l,a),className:"inline-flex items-center justify-center gap-0.5 text-white",children:e(y,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})})})]},a):c("tr",{children:[e(t,{value:x+1}),e(t,{value:d}),e(t,{value:n||"N/A"}),e(t,{value:s||"N/A"}),e(t,{value:l||"N/A"}),e(b,{children:e("button",{onClick:()=>f(n,s,l,a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(y,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})})})]},a)):e("tr",{children:e(t,{value:"No Data Found",colSpan:o.length,className:"text-center text-black dark:text-white"})})})]})]})};C.layout=o=>e(D,{title:"Menu",children:o});export{C as default};
