import{_ as l,j as o,a}from"./app-2e3d24e8.js";import{A as c}from"./AuthenticatedLayout-448edf68.js";import"./_equalByTag-3efd8848.js";import"./_getTag-234c2f6f.js";import"./_defineProperty-17242cc3.js";import"./index-0ee3514d.js";import{T as p}from"./TablePageLayout-e94deaba.js";import{T as d,a as e}from"./TableData-4fe00f42.js";import"./Logo-white-2a851e2e.js";import"./BreadcumbForTable-b270d82a.js";const u=()=>{const{permissions:t}=l().props,{data:r,meta:{links:i}}=t;return o(p,{breadcumb_action:"",breadcumb_name:"Permissions",pagination_links:i,breadcumb_link:"",isShowButton:!1,children:[a(d,{rows:["No","Name"]}),a("tbody",{children:r?r.map(({id:s,name:n,guard_name:b},m)=>o("tr",{children:[a(e,{value:m+1}),a(e,{value:n})]},s)):a("tr",{children:a(e,{value:"No Data Found",colSpan:2,className:"text-center text-black dark:text-white"})})})]})};u.layout=t=>a(c,{title:"Permissions",children:t});export{u as default};