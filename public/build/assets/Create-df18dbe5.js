import{K as s,j as i,a}from"./app-f70fd78f.js";import{A as d}from"./AuthenticatedLayout-3aa4a215.js";import"./index-1f6f7bd3.js";import{T as u}from"./TextInput-a5a74d84.js";import{F as b}from"./FromPageLayout-941a1355.js";import"./Logo-25d59469.js";import"./LoadingButton-cc557e36.js";const c=()=>{const{data:t,setData:r,errors:n,post:o,processing:l}=s({break_fast:"",lunch:"",dinner:"",menu_date:""}),m=e=>{e.preventDefault(),o(route("menu.store"))};return i(b,{breadcumb_link:route("menu.index"),breadcumb_name:"Menu",breadcumb_action:"Create",loading:l,button_text:"Create Menu",handlFormSubmit:m,children:[a(u,{label:"Breakfast",name:"break_fast",type:"text",errors:n.break_fast,value:t.break_fast,onChange:e=>r("break_fast",e.target.value)}),a(u,{label:"Lunch",name:"lunch",type:"text",errors:n.lunch,value:t.lunch,onChange:e=>r("lunch",e.target.value)}),a(u,{label:"Dinner",name:"dinner",type:"text",errors:n.dinner,value:t.dinner,onChange:e=>r("dinner",e.target.value)}),a(u,{label:"Day",name:"menu_date",type:"text",errors:n.menu_date,value:t.menu_date,onChange:e=>r("menu_date",e.target.value)})]})};c.layout=t=>a(d,{title:"Create Menu",children:t});export{c as default};