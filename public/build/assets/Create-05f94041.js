import{K as m,j as i,a as e,f as d}from"./app-523ce712.js";import{L as p}from"./MemberLayout-30547411.js";import{L as c}from"./LoadingButton-6d637685.js";import{T as u}from"./TextInput-92320638.js";import{l as f}from"./index-e4b74e0d.js";import{P as h}from"./issueStatus-369c87ae.js";import"./index-2e4736b8.js";import"./BottomHeader-7b0964c6.js";import"./_baseIsEqual-081efca3.js";import"./_equalByTag-c744d4a3.js";import"./_getTag-7cb17b8a.js";import"./_isIndex-78cc234f.js";const b=()=>{const{data:r,setData:s,errors:a,post:o,processing:l}=m({title:"",description:"",status:h}),n=t=>{t.preventDefault(),o(route("user.issue.store"))};return i("div",{children:[e("div",{children:i("h1",{className:"mb-8 text-3xl font-bold",children:[e(d,{href:route("user.issue.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Issue"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," ","Create"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:i("form",{name:"createForm",onSubmit:n,children:[i("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(u,{className:"w-full pb-8 pr-6",label:"Title",name:"title",type:"text",errors:a.title,value:r.title,onChange:t=>s("title",t.target.value)}),e(f,{className:"h-48 pr-6 mb-12 w-full",theme:"snow",value:r.description,onChange:t=>s("description",t)})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(c,{loading:l,type:"submit",className:"btn-indigo",children:"Create Issue"})})]})})]})};b.layout=r=>e(p,{title:"Create Issue",children:r});export{b as default};