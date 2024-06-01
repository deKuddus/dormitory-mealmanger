import{_ as i,K as h,j as m,a}from"./app-9b1aff9a.js";import{A as c}from"./AuthenticatedLayout-3ba54b4d.js";import{T as n}from"./TextInput-66afd55f.js";import{S as b}from"./SelectInput-2f1e81e7.js";import{F as f}from"./FromPageLayout-d9f14917.js";import"./Logo-white-2a851e2e.js";import"./LoadingButton-6f090fb2.js";import"./index-0ee3514d.js";const g=()=>{const{messes:l,chef:t}=i().props,{data:s,setData:r,errors:o,post:d,processing:u}=h({name:t.name||"",phone:t.phone||"",status:t.status||"",address:t.address||"",_method:"PUT"}),p=e=>{e.preventDefault(),d(route("chef.update",t.id))};return m(f,{breadcumb_link:route("chef.index"),breadcumb_name:"Chef",breadcumb_action:"Edit",loading:u,button_text:"Update Chef",handlFormSubmit:p,children:[a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Name",name:"name",type:"text",errors:o.name,value:s.name,onChange:e=>r("name",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Phone",name:"phone",type:"text",errors:o.phone,value:s.phone,onChange:e=>r("phone",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Address",name:"address",type:"text",errors:o.address,value:s.address,onChange:e=>r("address",e.target.value)}),m(b,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Status",name:"status",errors:o.status,value:s.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:"1",children:"Active"}),a("option",{value:"0",children:"InActive"})]})]})};g.layout=l=>a(c,{title:"Edit Chef",children:l});export{g as default};