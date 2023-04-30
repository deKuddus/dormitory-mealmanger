import{_ as x,j as l,a as e,f as y,g as N}from"./app-aabd3ed4.js";import{I as d,A as z}from"./AuthenticatedLayout-25354546.js";import{h as A}from"./moment-fbc5633a.js";import{i}from"./utils-d45c0400.js";import{T}from"./TablePageLayout-484f9d4c.js";import{T as S,a as t}from"./TableData-9723a4c7.js";import{T as k}from"./TableAction-f22dbfac.js";import"./Logo-25d59469.js";import"./dayjs.min-77c9d7d0.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-6ae26f27.js";const w=()=>{const r=["No","Date","Name","Status","Action"],{bazarSchedules:u,user_permissions:n}=x().props,{data:s,meta:{links:m}}=u,h=a=>(confirm("Are you sure you want to delete this bazar-schedule?")&&N.delete(route("bazar-schedule.destroy",a)),!0);return l(T,{breadcumb_action:"Add New Schedule",breadcumb_name:"Bazar Schedule",pagination_links:m,breadcumb_link:route("bazar-schedule.create"),isShowButton:i("access::bazarschedule-create",n),children:[e(S,{rows:r}),e("tbody",{children:s&&s.length?s.map(({id:a,bazar_date:p,status:c,users:o},b)=>l("tr",{children:[e(t,{value:b+1}),e(t,{value:A(p).format("dddd, LL")}),e(t,{value:o&&o.length>0?o.map(({full_name:f},g)=>e("span",{className:`bg-${c===1?"green":"red"}-200 text-gray-800  mr-2 px-2.5 py-0.5 rounded`,children:f},g)):"N/A"}),e(t,{value:c===0?"Pending":"Done",className:`rounded-full ${c===0?"bg-danger text-danger":"bg-success text-success"} text-center bg-opacity-10 py-1 px-3 text-sm `}),l(k,{children:[i("access::bazarschedule-edit",n)&&e(y,{href:route("bazar-schedule.edit",a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(d,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),i("access::bazarschedule-delete",n)&&e("button",{onClick:()=>h(a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(d,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})]},a)):e("tr",{children:e(t,{value:"No Data Found",colSpan:r.length,className:"text-center text-black dark:text-white"})})})]})};w.layout=r=>e(z,{title:"Bazar Schedule",children:r});export{w as default};
