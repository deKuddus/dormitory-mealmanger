import{a as e,j as a,f as c,F as n}from"./app-703e88cb.js";import{L as g}from"./LoadingButton-507cbb28.js";const x=({pageName:d,link:l,action:r})=>e("div",{className:"mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:e("nav",{children:a("ol",{className:"flex items-center gap-2",children:[e("li",{className:"text-title-md2 font-semibold text-black dark:text-white",children:e(c,{href:l,children:d})}),r&&a("li",{className:"text-primary",children:["/ ",r]})]})})}),p=({children:d,breadcumb_link:l,breadcumb_name:r,breadcumb_action:s,handlFormSubmit:t,button_text:i,loading:o,className:m="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5"})=>a(n,{children:[e(x,{pageName:r,link:l,action:s}),e("div",{className:"rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:a("form",{onSubmit:t,children:[e("div",{className:"flex flex-col gap-5.5 p-6.5",children:e("div",{className:m,children:d})}),e("div",{className:"flex items-center justify-end px-8 py-4 rounded-b-lg bg-gray-2 border-t border-gray",children:e(g,{loading:o,type:"submit",className:"rounded bg-primary p-3 font-medium text-gray",children:i})})]})})]});export{p as F};