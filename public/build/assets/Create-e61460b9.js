import{K as m,j as l,a as e,f as u}from"./app-b424552e.js";import{L as c}from"./Layout-012bfe45.js";import{L as p}from"./LoadingButton-4650e1f9.js";import{T as s}from"./TextInput-acb51a5b.js";import"./index-2e4736b8.js";import"./utils-4fea7fd8.js";import"./BottomHeader-31b85409.js";const f=()=>{const{data:t,setData:r,errors:n,post:o,processing:d}=m({break_fast:"",lunch:"",dinner:"",menu_date:""}),i=a=>{a.preventDefault(),o(route("menu.store"))};return l("div",{children:[e("div",{children:l("h1",{className:"mb-8 text-3xl font-bold",children:[e(u,{href:route("menu.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Menu"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," ","Create"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:l("form",{name:"createForm",onSubmit:i,children:[l("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(s,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Breakfast",name:"break_fast",type:"text",errors:n.break_fast,value:t.break_fast,onChange:a=>r("break_fast",a.target.value)}),e(s,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Lunch",name:"lunch",type:"text",errors:n.lunch,value:t.lunch,onChange:a=>r("lunch",a.target.value)}),e(s,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Dinner",name:"dinner",type:"text",errors:n.dinner,value:t.dinner,onChange:a=>r("dinner",a.target.value)}),e(s,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Day",name:"menu_date",type:"text",errors:n.menu_date,value:t.menu_date,onChange:a=>r("menu_date",a.target.value)})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(p,{loading:d,type:"submit",className:"btn-indigo",children:"Create Menu"})})]})})]})};f.layout=t=>e(c,{title:"Create Menu",children:t});export{f as default};
