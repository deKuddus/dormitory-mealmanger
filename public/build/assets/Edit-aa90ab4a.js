import{_ as m,K as p,j as r,a as e,f as c}from"./app-2dde695b.js";import{L as u}from"./MemberLayout-f1a243be.js";import{L as h}from"./LoadingButton-91e669a9.js";import{T as f}from"./TextInput-263d69bf.js";import{l as b}from"./index-472db412.js";import"./index-2e4736b8.js";import"./BottomHeader-ef5b3363.js";import"./_baseIsEqual-d0d62f84.js";import"./_equalByTag-fa4a19da.js";import"./_getTag-c2fddabb.js";import"./_isIndex-78cc234f.js";const g=()=>{const{issue:t,resolvers:x}=m().props,{data:s,setData:o,errors:a,post:l,processing:n}=p({title:t.title||"",description:t.description||"",_method:"PUT"}),d=i=>{i.preventDefault(),l(route("user.issue.update",t.id))};return r("div",{children:[e("div",{children:r("h1",{className:"mb-8 text-3xl font-bold",children:[e(c,{href:route("user.issue.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Issue"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," ","Edit"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:r("form",{name:"createForm",onSubmit:d,children:[r("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(f,{className:"w-full pb-8 pr-6",label:"Title",name:"title",errors:a.title,value:s.title,onChange:i=>o("title",i.target.value)}),e(b,{className:"h-48 pr-6 mb-12 w-full",theme:"snow",value:s.description,onChange:i=>o("description",i)})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(h,{loading:n,type:"submit",className:"btn-indigo",children:"Update Issue"})})]})})]})};g.layout=t=>e(u,{title:"Update Issue",children:t});export{g as default};