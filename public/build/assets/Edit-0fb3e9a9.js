import{K as s,j as d,a as t}from"./app-5bb3ff4c.js";import{A as i}from"./AuthenticatedLayout-3ee3319c.js";import"./index-1f6f7bd3.js";import{T as l}from"./TextInput-67447172.js";import{F as p}from"./FromPageLayout-fe3a619d.js";import"./Logo-white-2a851e2e.js";import"./LoadingButton-f2081c1d.js";const b=()=>{const{data:a,setData:r,errors:n,post:u,processing:m}=s({break_fast:"",lunch:"",dinner:"",menu_date:""}),o=e=>{e.preventDefault(),u(route("menu.store"))};return d(p,{breadcumb_link:route("menu.index"),breadcumb_name:"Menu",breadcumb_action:"Edit",loading:m,button_text:"Update Menu",handlFormSubmit:o,children:[t(l,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Breakfast",name:"break_fast",type:"text",errors:n.break_fast,value:a.break_fast,onChange:e=>r("break_fast",e.target.value)}),t(l,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Lunch",name:"lunch",type:"text",errors:n.lunch,value:a.lunch,onChange:e=>r("lunch",e.target.value)}),t(l,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Dinner",name:"dinner",type:"text",errors:n.dinner,value:a.dinner,onChange:e=>r("dinner",e.target.value)}),t(l,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Day",name:"menu_date",type:"text",errors:n.menu_date,value:a.menu_date,onChange:e=>r("menu_date",e.target.value)})]})};b.layout=a=>t(i,{title:"Edit Menu",children:a});export{b as default};