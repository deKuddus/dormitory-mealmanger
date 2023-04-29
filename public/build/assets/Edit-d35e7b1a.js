import{_ as f,K as v,j as r,a as e,f as b}from"./app-2dde695b.js";import{L as g}from"./Layout-8ec69a49.js";import{L as w}from"./LoadingButton-91e669a9.js";import{T as x}from"./TextInput-263d69bf.js";import{S as n}from"./SelectInput-291ff286.js";import{l as N}from"./index-472db412.js";import{P as y,A as S,R as _}from"./issueStatus-369c87ae.js";import"./index-2e4736b8.js";import"./utils-9aac24b3.js";import"./BottomHeader-ef5b3363.js";import"./_baseIsEqual-d0d62f84.js";import"./_equalByTag-fa4a19da.js";import"./_getTag-c2fddabb.js";import"./_isIndex-78cc234f.js";const E=()=>{const{issue:a,resolvers:o}=f().props,{data:s,setData:l,errors:i,post:d,processing:u}=v({title:a.title||"",description:a.description||"",status:a.status,resolved_by:a.resolved_by,_method:"PUT"}),m=t=>{t.preventDefault(),d(route("issue.update",a.id))};return r("div",{children:[e("div",{children:r("h1",{className:"mb-8 text-3xl font-bold",children:[e(b,{href:route("issue.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Issue"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," ","Edit"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:r("form",{name:"createForm",onSubmit:m,children:[r("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(x,{className:"w-full pb-8 pr-6",label:"Title",name:"title",errors:i.title,value:s.title,onChange:t=>l("title",t.target.value)}),e(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Assign Resolver",name:"resolver",errors:i.resolved_by,value:s.resolved_by,onChange:t=>l("resolved_by",t.target.value),children:o&&o.map(({id:t,first_name:p,last_name:c},h)=>r("option",{value:t,defaultValue:s.resolved_by,children:[p," ",c]},h))}),r(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/2",label:"Status",name:"status",errors:i.status,value:s.status,onChange:t=>l("status",t.target.value),children:[e("option",{value:y,defaultValue:s.status,children:"Pending"}),e("option",{value:S,defaultValue:s.status,children:"Assigned"}),e("option",{value:_,defaultValue:s.status,children:"Resolved"})]}),e(N,{className:"h-48 pr-6 mb-12 w-full",theme:"snow",value:s.description,onChange:t=>l("description",t)})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(w,{loading:u,type:"submit",className:"btn-indigo",children:"Update Issue"})})]})})]})};E.layout=a=>e(g,{title:"Create User",children:a});export{E as default};