import{K as s,a as o}from"./app-aabd3ed4.js";import{A as i}from"./AuthenticatedLayout-25354546.js";import{F as p}from"./FromPageLayout-ecc364fd.js";import{T as l}from"./TextInput-baa55968.js";import"./Logo-25d59469.js";import"./LoadingButton-e21f4e9c.js";import"./index-1f6f7bd3.js";const d=()=>{const{data:t,setData:a,errors:r,post:m,processing:n}=s({amount:""}),u=e=>{e.preventDefault(),m(route("user.deposits.store"))};return o(p,{breadcumb_link:route("user.deposits.index"),breadcumb_name:"Deposit",breadcumb_action:"Create",loading:n,button_text:"Create Deposit",handlFormSubmit:u,children:o(l,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Amount",name:"amount",type:"number",errors:r.amount,value:t.amount,onChange:e=>a("amount",e.target.value)})})};d.layout=t=>o(i,{title:"Create Deposit",children:t});export{d as default};
