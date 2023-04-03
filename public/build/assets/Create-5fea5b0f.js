import{K as m,j as a,a as e,f as d}from"./app-523ce712.js";import{L as u}from"./Layout-8fcfbcd2.js";import{L as p}from"./LoadingButton-6d637685.js";import{T as c}from"./TextInput-92320638.js";import{S as f}from"./SelectInput-e62a4e71.js";import{l as h}from"./index-e4b74e0d.js";import{I as g}from"./noticeStatus-7a641e79.js";import"./index-2e4736b8.js";import"./utils-01c76667.js";import"./BottomHeader-7b0964c6.js";import"./_baseIsEqual-081efca3.js";import"./_equalByTag-c744d4a3.js";import"./_getTag-7cb17b8a.js";import"./_isIndex-78cc234f.js";const b=()=>{const{data:t,setData:l,errors:i,post:s,processing:o}=m({title:"",status:g,description:""}),n=r=>{r.preventDefault(),s(route("rule.store"))};return a("div",{children:[e("div",{children:a("h1",{className:"mb-8 text-3xl font-bold",children:[e(d,{href:route("rule.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Rule"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," ","Create"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:a("form",{name:"createForm",onSubmit:n,children:[a("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(c,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Title",name:"title",type:"text",errors:i.title,value:t.title,onChange:r=>l("title",r.target.value)}),a(f,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Status",name:"status",errors:i.status,value:t.status,onChange:r=>l("status",r.target.value),children:[e("option",{value:"1",defaultValue:t.status,children:"Active"}),e("option",{value:"0",defaultValue:t.status,children:"InActive"})]}),e(h,{className:"h-48 pr-6 mb-12 w-full",theme:"snow",value:t.description,onChange:r=>l("description",r)})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(p,{loading:o,type:"submit",className:"btn-indigo",children:"Create Rule"})})]})})]})};b.layout=t=>e(u,{title:"Create Rule",children:t});export{b as default};