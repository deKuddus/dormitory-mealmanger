import{_ as g,r as w,j as t,a as e,F as T,g as D}from"./app-4ec64071.js";import{A as Y}from"./AuthenticatedLayout-13fbfac3.js";import{S as C}from"./SelectInput-5021bf68.js";import{h as i}from"./moment-fbc5633a.js";import{c as B}from"./utils-38256e74.js";import{T as y}from"./TablePageLayout-b8b26131.js";import{T as S,a as l}from"./TableData-4167bc1f.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-23023c68.js";import"./index-0ee3514d.js";import"./BreadcumbForTable-eb0b7ce5.js";const _=()=>{const s=["Date","Break Fast","Lunch","Dinner"],{user:r,balance:d,bazar:m,mealCost:x,totalMealCost:h,fixedCost:c,due:p}=g().props,[u,f]=w.exports.useState(i().format("MMMM-YYYY")),o=B(),b=a=>{if(a)return D.get(route("user.meal.show"),{month:a},{replace:!0,preserveState:!0})};return t(y,{breadcumb_action:"",breadcumb_name:"Meal Details",pagination_links:"",breadcumb_link:"",isShowButton:!1,additionalComponent:e(()=>t(T,{children:[e("div",{className:"flex items-center justify-end",children:e("div",{className:"relative z-30 w-64 px-4 py-6 mt-2",children:e(C,{label:"Month",name:"month",value:u,onChange:a=>{f(a.target.value),b(a.target.value)},children:o&&o.map((a,n)=>e("option",{value:a,defaultValue:i().format("MMMM-YYYY"),children:a},n))})})}),e("div",{className:"col-span-full mb-5",children:t("div",{className:"grid gap-4 lg:gap-8 md:grid-cols-3",children:[e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white text-center",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-xxl font-bold text-black dark:text-white",children:[" ",r.name]}),t("span",{className:"text-sm text-black dark:text-white",children:["Balance ",d," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Meal Charge: ",x," BDT"," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold ",children:["Total Meal : ",r.total_meals," "]}),t("span",{className:"text-black dark:text-whitetext-xl font-bold",children:["Fixed Cost : ",c," BDT"]}),t("span",{className:"text-black dark:text-whitetext-xl font-bold",children:["Bazar : ",m," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-danger text-xl font-bold ",children:["Total Due: ",p," BDT"," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold ",children:["Total Cost : ",h," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Total Fixed Cost : ",c," BDT"]})]})})})]})})]}),{}),children:[e(S,{rows:s}),e("tbody",{children:r.meals?r.meals.map(({id:a,break_fast:n,lunch:v,dinner:N,created_at:k,is_editable:j},M)=>t("tr",{children:[e(l,{value:i(k).format("Do MMMM YYYY")}),e(l,{value:n}),e(l,{value:v}),e(l,{value:N})]},M)):e("tr",{children:e(l,{value:"No Data Found",colSpan:s.length,className:"text-center text-black dark:text-white"})})})]})};_.layout=s=>e(Y,{title:"Meal details",children:s});export{_ as default};