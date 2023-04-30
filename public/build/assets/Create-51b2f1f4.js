import{_ as h,K as f,j as l,a as s}from"./app-aabd3ed4.js";import{A as g}from"./AuthenticatedLayout-25354546.js";import{T as v}from"./TextInput-baa55968.js";import{F as x}from"./FromPageLayout-ecc364fd.js";import"./Logo-25d59469.js";import"./LoadingButton-e21f4e9c.js";import"./index-1f6f7bd3.js";const y=()=>{const{permissions:a}=h().props,{data:r,setData:t,errors:o,post:m,processing:c}=f({name:"",permissions:[]}),p=e=>{e.preventDefault(),m(route("role.store"))},d=a&&a.length?a.map(e=>({value:e.id,label:e.name})):[],u=(e,n)=>{if(e){let i=[...r.permissions,n];t("permissions",i)}else{const i=r.permissions.filter(b=>b!==n);t("permissions",i)}};return l(x,{breadcumb_link:route("role.index"),breadcumb_name:"Role",breadcumb_action:"Create",loading:c,button_text:"Create Role",handlFormSubmit:p,className:"grid grid-cols-1",children:[s(v,{label:"Name",name:"name",errors:o.name,value:r.name,onChange:e=>t("name",e.target.value)}),s("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:d.map((e,n)=>s("div",{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/4",children:l("label",{className:`flex cursor-pointer select-none items-center flex items-center mt-6 select-none  ${o.permissions?"form-error":""}`,htmlFor:`permission-${e.value}`,children:[l("div",{className:"relative",children:[s("input",{name:"permission",id:`permission-${e.value}`,type:"checkbox",className:`sr-only mr-1 ${o.permissions?"error":""}`,checked:r.permissions.includes(e.value),onChange:i=>u(i.target.checked,e.value)}),s("div",{className:`mr-4 flex h-5 w-5 items-center justify-center rounded border ${r.permissions.includes(e.value)&&"border-primary bg-gray dark:bg-transparent"}`,children:s("span",{className:`h-2.5 w-2.5 rounded-sm ${r.permissions.includes(e.value)&&"bg-primary"}`})})]}),e.label]})},n))})]})};y.layout=a=>s(g,{title:"Create Role",children:a});export{y as default};
