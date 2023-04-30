import{_ as k,r as M,j as t,a as e,f as w,F as y,g as D}from"./app-aabd3ed4.js";import{I as C,A as F}from"./AuthenticatedLayout-25354546.js";import{S as Y}from"./SelectInput-454d8656.js";import{h as m}from"./moment-fbc5633a.js";import{c as A,i as B}from"./utils-d45c0400.js";import{T as j,a as r}from"./TableData-9723a4c7.js";import{T as S}from"./TablePageLayout-484f9d4c.js";import{T as I}from"./TableAction-f22dbfac.js";import"./Logo-25d59469.js";import"./dayjs.min-77c9d7d0.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-6ae26f27.js";const P=()=>{const l=["No","Name","Total Meal","Total Deposit","Total Cost","Total Due","Action"],{users:s,balance:p,user_permissions:h,additional:u,bazar:f,totalMeal:v,fixedCost:N,mealCost:n}=k().props,[b,g]=M.useState(m().format("MMMM-YYYY")),c=A(),T=a=>{if(a)return D.get(route("report.index"),{month:a},{replace:!0,preserveState:!0})};return t(S,{breadcumb_name:"Reports",additionalComponent:e(()=>t(y,{children:[e("div",{className:"flex items-center justify-end",children:e("div",{className:"relative z-30 w-64 px-4 py-6 mt-2",children:e(Y,{label:"Month",name:"month",value:b,onChange:a=>{g(a.target.value),T(a.target.value)},children:c&&c.map((a,o)=>e("option",{value:a,defaultValue:m().format("MMMM-YYYY"),children:a},o))})})}),e("div",{className:"col-span-full mb-5",children:t("div",{className:"grid gap-4 lg:gap-8 md:grid-cols-3",children:[e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-black dark:text-white text-center",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-xxl font-bold text-black dark:text-white",children:["WP Dormitory"," "]}),t("span",{className:"text-sm text-black dark:text-white",children:["Balance : ",p," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-black dark:text-white",children:["Meal Charge: ",n," BDT"," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold ",children:["Total Meal : ",v," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Fixed Cost : ",N," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-danger text-xl font-bold ",children:["Total Due: 50 BDT"," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold ",children:["Total Cost : ",f," BDT"]}),t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Total Fixed Cost : ",u," BDT"]})]})})})]})})]}),{}),children:[e(j,{rows:l}),e("tbody",{children:s?s.map(({id:a,name:o,meals_total:i,deposits:d},x)=>t("tr",{children:[e(r,{value:x+1}),e(r,{value:o}),e(r,{value:i}),e(r,{value:d}),e(r,{value:parseFloat(n*i).toFixed(2)}),e(r,{value:e(L,{deposit:d,cost:n*i})}),e(I,{children:B("access::meal-show",h)&&e(w,{href:route("meals.show",a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(C,{name:"FaEye",className:"w-6 h-4 text-gray-400 hover:text-black dark:text-white fill-current cursor-pointer"})})})]},x)):e("tr",{children:e(r,{value:"No Data Found",colSpan:l.length,className:"text-center text-black dark:text-white"})})})]})},L=({deposit:l,cost:s})=>s>l?e("p",{className:"flex items-center text-red-400  px-6 py-4 focus:text-indigo-700 focus:outline-none",children:parseFloat(l-s).toFixed(2)}):e("p",{className:"flex items-center text-green-400 px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"0"});P.layout=l=>e(F,{title:"Meal Report",children:l});export{P as default};
