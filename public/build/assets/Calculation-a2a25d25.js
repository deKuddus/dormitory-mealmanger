import{_ as h,j as r,a}from"./app-9b1aff9a.js";import{A as f}from"./AuthenticatedLayout-3ba54b4d.js";import"./index-0ee3514d.js";import{h as v}from"./moment-fbc5633a.js";import"./dayjs.min-35316166.js";import{T as M,a as t}from"./TableData-ed66d66f.js";import{T as C}from"./TablePageLayout-777ecf8a.js";import"./Logo-white-2a851e2e.js";import"./BreadcumbForTable-c40a38a9.js";const k=()=>{const e=["No","Closed Month","Member","Meal","Meal Rate","Cost","Balance"],{calculations:n}=h().props,{data:o,meta:{links:i}}=n;return r(C,{breadcumb_action:"",breadcumb_name:"Closed Calculation",pagination_links:i,breadcumb_link:"",isShowButton:!1,children:[a(M,{rows:e}),a("tbody",{children:o?o.map(({id:s,user:l,amount:c,description:x,calculate_date:m,meal_rate:u,carry:d,total_meal:p},b)=>r("tr",{children:[a(t,{value:b+1}),a(t,{value:v(m).format("Do MMMM YYYY")}),a(t,{value:l?l.full_name:""}),a(t,{value:p}),a(t,{value:u}),a(t,{value:c}),a(t,{value:d})]},s)):a("tr",{children:a(t,{value:"No Data Found",colSpan:e.length,className:"text-center text-black dark:text-white"})})})]})};k.layout=e=>a(f,{title:"Closed Calculation",children:e});export{k as default};