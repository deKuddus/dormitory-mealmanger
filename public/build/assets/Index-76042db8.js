import{_ as A,r as N,j as i,F as D,a as e,g as M}from"./app-aabd3ed4.js";import{m as T,I as y,A as F}from"./AuthenticatedLayout-25354546.js";import{M as S}from"./Modal-f7f6ac89.js";import{T as j}from"./TablePageLayout-484f9d4c.js";import{T as C,a as t}from"./TableData-9723a4c7.js";import{T as b}from"./TableAction-f22dbfac.js";import"./Logo-25d59469.js";import"./TextInput-baa55968.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-6ae26f27.js";const k=()=>{const r=["No","Day","Breakfast","Lunch","Dinner","Action"],{menus:c}=A().props,[h,o]=N.useState(!1),p={break_fast:"",lunch:"",dinner:"",id:""},[u,m]=N.useState(p),f=(a,s,n,l)=>{m({...u,break_fast:a,lunch:s,dinner:n,id:l}),o(!0)},g=()=>{o(!1),M.post(route("user.menu.update"),{...u})},w=()=>{m(p),o(!1)},v={6:"Saturday",0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday"};return i(D,{children:[h&&e(S,{handleModalClose:w,setMenuData:m,menuData:u,handleConfirm:g,open:h,setOpen:o}),i(j,{breadcumb_name:"Menus",children:[e(C,{rows:r}),e("tbody",{children:c&&c.length?c.map(({id:a,break_fast:s,lunch:n,dinner:l,menu_date:d},x)=>v[T().day()]===d?i("tr",{className:"bg-success font-bold text-xl shadow-2xl",children:[e(t,{value:x+1,className:"text-white "}),e(t,{value:d,className:"text-white "}),e(t,{value:s||"N/A",className:"text-white"}),e(t,{value:n||"N/A",className:"text-white "}),e(t,{value:l||"N/A",className:"text-white"}),e(b,{children:e("button",{onClick:()=>f(s,n,l,a),className:"inline-flex items-center justify-center gap-0.5 text-white",children:e(y,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})})})]},a):i("tr",{children:[e(t,{value:x+1}),e(t,{value:d}),e(t,{value:s||"N/A"}),e(t,{value:n||"N/A"}),e(t,{value:l||"N/A"}),e(b,{children:e("button",{onClick:()=>f(s,n,l,a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(y,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})})})]},a)):e("tr",{children:e(t,{value:"No Data Found",colSpan:r.length,className:"text-center text-black dark:text-white"})})})]})]})};k.layout=r=>e(F,{title:"Menus",children:r});export{k as default};
