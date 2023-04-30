import{_ as u,K as p,j as a,a as e,f as h}from"./app-aabd3ed4.js";import{A as f}from"./AuthenticatedLayout-25354546.js";import{L as g}from"./LoadingButton-e21f4e9c.js";import{T as s}from"./TextInput-baa55968.js";import{S as v}from"./SelectInput-454d8656.js";import"./Logo-25d59469.js";import"./index-1f6f7bd3.js";const b=()=>{const{users:i,room:o}=u().props,{data:r,setData:n,errors:l,post:m,processing:d}=p({name:o.name||"",status:o.status||"",location:o.location||"",_method:"PUT"}),c=t=>{t.preventDefault(),m(route("room.update",o.id))};return a("div",{children:[e("div",{children:a("h1",{className:"mb-8 text-3xl font-bold",children:[e(h,{href:route("room.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Room"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," Edit"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:a("form",{name:"createForm",onSubmit:c,children:[a("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(s,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Name",name:"name",type:"text",errors:l.name,value:r.name,onChange:t=>n("name",t.target.value)}),e(s,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Location",name:"location",type:"text",errors:l.location,value:r.location,onChange:t=>n("location",t.target.value)}),a(v,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Status",name:"status",errors:l.status,value:r.status,onChange:t=>n("status",t.target.value),children:[e("option",{value:"1",children:"Active"}),e("option",{value:"0",children:"InActive"})]})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(g,{loading:d,type:"submit",className:"btn-indigo",children:"Edit Room"})})]})})]})};b.layout=i=>e(f,{title:"Edit Room",children:i});export{b as default};
