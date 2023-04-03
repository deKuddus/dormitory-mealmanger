import{_ as g,r as M,j as t,a as e,g as y}from"./app-523ce712.js";import{L as w}from"./MemberLayout-30547411.js";import{S as Y}from"./SelectInput-e62a4e71.js";import{h as r}from"./moment-fbc5633a.js";import{c as C}from"./utils-01c76667.js";import"./index-2e4736b8.js";import"./BottomHeader-7b0964c6.js";const D=()=>{const{user:l,balance:o,bazar:d,mealCost:i,totalMealCost:m,fixedCost:c,due:x}=g().props,[h,p]=M.useState(r().format("MMMM-YYYY")),n=C(),f=a=>{if(a)return y.get(route("user.meal.show"),{month:a},{replace:!0,preserveState:!0})};return t("div",{children:[t("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6",children:[e("div",{className:"flex items-center",children:e("h1",{className:"text-3xl font-bold",children:"Meals"})}),e("div",{className:"flex items-center",children:e("div",{className:"relative z-30 w-64 px-4 py-6 mt-2",children:e(Y,{label:"Month",name:"month",value:h,onChange:a=>{p(a.target.value),f(a.target.value)},children:n&&n.map((a,s)=>e("option",{value:a,defaultValue:r().format("MMMM-YYYY"),children:a},s))})})})]}),t("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:[e("div",{className:"col-span-full mb-5",children:t("div",{className:"grid gap-4 lg:gap-8 md:grid-cols-3",children:[e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white text-center",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-xxl font-bold text-gray-900",children:[" ",l.name]}),t("span",{className:"text-sm text-gray-900",children:["Balance ",o," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-buttonColor-400",children:["Meal Charge: ",i," BDT "]}),t("span",{className:"text-gray-900 text-xl font-bold ",children:["Total Meal : ",l.total_meals," "]}),t("span",{className:"text-gray-900 text-xl font-bold",children:["Fixed Cost : ",c," BDT"]}),t("span",{className:"text-gray-900 text-xl font-bold",children:["Bazar : ",d," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-red-600 text-xl font-bold ",children:["Total Due: ",x," BDT "]}),t("span",{className:"text-gray-900 text-xl font-bold ",children:["Total Cost : ",m," "]}),t("span",{className:"text-gray-900 text-xl font-bold",children:["Total Fixed Cost : ",c," BDT"]})]})})})]})}),t("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:t("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4 border",children:"Date"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Break Fast"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Lunch"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Dinner"})]})}),e("tbody",{children:l.meals?l.meals.map(({id:a,break_fast:s,lunch:u,dinner:N,created_at:b,is_editable:T},v)=>t("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:r(b).format("Do MMMM YYYY")})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:s})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:u})}),e("td",{className:"border",children:N})]},v)):e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"6",children:"No Meal found."})})})]})]})]})};D.layout=l=>e(w,{title:"Meal details",children:l});export{D as default};
