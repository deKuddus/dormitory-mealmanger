import{_ as m,K as u,j as r,a as t,f as p}from"./app-523ce712.js";import{L as c}from"./Layout-8fcfbcd2.js";import{L as h}from"./LoadingButton-6d637685.js";import{T as f}from"./TextInput-92320638.js";import{S as g}from"./SelectInput-e62a4e71.js";import{l as b}from"./index-e4b74e0d.js";import"./index-2e4736b8.js";import"./utils-01c76667.js";import"./BottomHeader-7b0964c6.js";import"./_baseIsEqual-081efca3.js";import"./_equalByTag-c744d4a3.js";import"./_getTag-7cb17b8a.js";import"./_isIndex-78cc234f.js";const v=()=>{const{rule:a}=m().props,{data:i,setData:l,errors:s,post:o,processing:n}=u({title:a.title,status:a.status,description:a.description,_method:"PUT"}),d=e=>{e.preventDefault(),o(route("rule.update",a.id))};return r("div",{children:[t("div",{children:r("h1",{className:"mb-8 text-3xl font-bold",children:[t(p,{href:route("rule.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Rule"}),t("span",{className:"font-medium text-indigo-600",children:" /"})," ","Edit"]})}),t("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:r("form",{name:"createForm",onSubmit:d,children:[r("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[t(f,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Title",name:"title",type:"text",errors:s.title,value:i.title,onChange:e=>l("title",e.target.value)}),r(g,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Status",name:"status",errors:s.status,value:i.status,onChange:e=>l("status",e.target.value),children:[t("option",{value:"1",defaultValue:i.status,children:"Active"}),t("option",{value:"0",defaultValue:i.status,children:"InActive"})]}),t(b,{className:"h-48 pr-6 mb-12 w-full",theme:"snow",value:i.description,onChange:e=>l("description",e)})]}),t("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:t(h,{loading:n,type:"submit",className:"btn-indigo",children:"Edit Rule"})})]})})]})};v.layout=a=>t(c,{title:"Edit Rule",children:a});export{v as default};