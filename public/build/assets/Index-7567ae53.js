import{_ as c,j as n,a as e,f as m}from"./app-32688c23.js";import{I as u,A as d}from"./AuthenticatedLayout-2cae91c7.js";import"./index-1f6f7bd3.js";import"./dayjs.min-32d86fca.js";import{T as p,a as r}from"./TableData-54366bf2.js";import{T as f}from"./TableAction-f39b77af.js";import{T as h}from"./TablePageLayout-a8a381c1.js";import"./Logo-25d59469.js";import"./BreadcumbForTable-117a0470.js";const b=()=>{const t=["No","Title","Action"],{rules:s}=c().props,{data:a,meta:{links:T}}=s;return n(h,{breadcumb_name:"Terms & Conditions",children:[e(p,{rows:t}),e("tbody",{children:a&&a.length?a.map(({id:o,title:i},l)=>n("tr",{children:[e(r,{value:l+1}),e(r,{value:i}),e(f,{children:e(m,{href:route("user.rules.details",o),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(u,{name:"FaEye",className:"w-6 h-4 text-gray-400 fill-current"})})})]},o)):e("tr",{children:e(r,{value:"No Data Found",colSpan:t.length,className:"text-center text-black dark:text-white"})})})]})};b.layout=t=>e(d,{title:"Notices",children:t});export{b as default};
