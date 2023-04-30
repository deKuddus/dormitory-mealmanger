import{_ as i,K as h,j as m,a}from"./app-aabd3ed4.js";import{A as c}from"./AuthenticatedLayout-25354546.js";import{T as n}from"./TextInput-baa55968.js";import{S as b}from"./SelectInput-454d8656.js";import{F as f}from"./FromPageLayout-ecc364fd.js";import"./Logo-25d59469.js";import"./LoadingButton-e21f4e9c.js";import"./index-1f6f7bd3.js";const g=()=>{const{messes:l,chef:t}=i().props,{data:s,setData:r,errors:o,post:d,processing:u}=h({name:t.name||"",phone:t.phone||"",status:t.status||"",address:t.address||"",_method:"PUT"}),p=e=>{e.preventDefault(),d(route("chef.update",t.id))};return m(f,{breadcumb_link:route("chef.index"),breadcumb_name:"Chef",breadcumb_action:"Edit",loading:u,button_text:"Update Chef",handlFormSubmit:p,children:[a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Name",name:"name",type:"text",errors:o.name,value:s.name,onChange:e=>r("name",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Phone",name:"phone",type:"text",errors:o.phone,value:s.phone,onChange:e=>r("phone",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Address",name:"address",type:"text",errors:o.address,value:s.address,onChange:e=>r("address",e.target.value)}),m(b,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Status",name:"status",errors:o.status,value:s.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:"1",children:"Active"}),a("option",{value:"0",children:"InActive"})]})]})};g.layout=l=>a(c,{title:"Edit Chef",children:l});export{g as default};
