import{_ as f,K as b,j as o,a as s,f as g}from"./app-b424552e.js";import{L as x}from"./Layout-012bfe45.js";import{L as v}from"./LoadingButton-4650e1f9.js";import{T as N}from"./TextInput-acb51a5b.js";import"./index-2e4736b8.js";import"./utils-4fea7fd8.js";import"./BottomHeader-31b85409.js";const y=()=>{const{permissions:r}=f().props,{data:i,setData:t,errors:n,post:m,processing:d}=b({name:"",permissions:[]}),c=e=>{e.preventDefault(),m(route("role.store"))},p=r&&r.length?r.map(e=>({value:e.id,label:e.name})):[],h=(e,l)=>{if(e){let a=[...i.permissions,l];t("permissions",a)}else{const a=i.permissions.filter(u=>u!==l);t("permissions",a)}};return console.log(n),o("div",{children:[s("div",{children:o("h1",{className:"mb-4 text-3xl font-bold",children:[s(g,{href:route("role.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Role"}),s("span",{className:"font-medium text-indigo-600",children:" /"}),"Create"]})}),s("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:o("form",{name:"createForm",onSubmit:c,children:[s("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:s(N,{className:"w-full pb-8 pr-6",label:"Name",name:"name",errors:n.name,value:i.name,onChange:e=>t("name",e.target.value)})}),s("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:p.map((e,l)=>s("div",{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/4",children:o("label",{className:`flex items-center mt-6 select-none  ${n.permissions?"form-error":""}`,htmlFor:`permission-${e.value}`,children:[s("input",{name:"permission",id:`permission-${e.value}`,type:"checkbox",className:`mr-1 ${n.permissions?"error":""}`,checked:i.permissions.includes(e.value),onChange:a=>h(a.target.checked,e.value)}),s("span",{className:"text-sm",children:e.label})]})},l))}),s("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:s(v,{loading:d,type:"submit",className:"btn-indigo",children:"Create Role"})})]})})]})};y.layout=r=>s(x,{title:"Create Role",children:r});export{y as default};