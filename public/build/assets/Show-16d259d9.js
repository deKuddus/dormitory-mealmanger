import{_ as F,r as x,j as t,F as M,a as e,g as N}from"./app-a1e31084.js";import{I as j,A as E}from"./AuthenticatedLayout-fe1980fd.js";import{S as I}from"./SelectInput-85e9ab96.js";import{h}from"./moment-fbc5633a.js";import{c as L,i as z}from"./utils-087e4b11.js";import O from"./MealEditModal-500be536.js";import{T as P}from"./TablePageLayout-cda926e6.js";import{T as U,a as r}from"./TableData-9266f178.js";import{T as H}from"./TableAction-d3ff6458.js";import"./dayjs.min-f78cf2ec.js";import"./TextInput-6b9453f0.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-546ca9a9.js";const V=()=>{const n=["Date","Break Fast","Lunch","Dinner","Action"],{user:l,balance:k,bazar:g,mealCost:T,totalMealCost:w,fixedCost:p,due:D,totalMeal:C,user_permissions:Y}=F().props,[y,B]=x.useState(h().format("MMMM-YYYY")),u={id:void 0,break_fast:0,lunch:0,dinner:0,created_at:"",user:"",user_id:0},[f,d]=x.useState(u),[b,m]=x.useState(!1),v=L(),S=a=>{if(a)return N.get(route("meals.show",l.id),{month:a},{replace:!0,preserveState:!0})},_=(a,s,i,o,c)=>{d({id:a,break_fast:s,lunch:i,dinner:o,created_at:c,user:l.name,user_id:l.id}),m(!0)};return t(M,{children:[b&&e(O,{mealData:f,setOpen:m,setMealData:d,open:b,handleConfirm:()=>{N.post(route("meal.update"),f),m(!1),d(u)}}),t(P,{breadcumb_action:"",breadcumb_name:"Meal Details",pagination_links:"",breadcumb_link:"",isShowButton:!1,additionalComponent:e(()=>t(M,{children:[e("div",{className:"flex items-center justify-end",children:e("div",{className:"relative z-30 w-64 px-4 py-6 mt-2",children:e(I,{label:"Month",name:"month",value:y,onChange:a=>{B(a.target.value),S(a.target.value)},children:v&&v.map((a,s)=>e("option",{value:a,defaultValue:h().format("MMMM-YYYY"),children:a},s))})})}),e("div",{className:"col-span-full mb-5",children:t("div",{className:"grid gap-4 lg:gap-8 md:grid-cols-3",children:[e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-black dark:text-white text-center",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-xxl font-bold text-black dark:text-white",children:[" ",l.name]}),t("span",{className:"text-sm text-black dark:text-white",children:["Balance ",k," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-black dark:text-white",children:["Meal Charge: ",T," BDT"," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold ",children:["Total Meal : ",C," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Fixed Cost : ",p," BDT"]}),t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Bazar : ",g," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-danger text-xl font-bold ",children:["Total Due: ",D," BDT"," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold ",children:["Total Cost : ",w," "]}),t("span",{className:"text-black dark:text-white text-xl font-bold",children:["Total Fixed Cost : ",p," BDT"]})]})})})]})})]}),{}),children:[e(U,{rows:n}),e("tbody",{children:l.meals?l.meals.map(({id:a,break_fast:s,lunch:i,dinner:o,created_at:c},A)=>t("tr",{children:[e(r,{value:h(c).format("Do MMMM YYYY")}),e(r,{value:s}),e(r,{value:i}),e(r,{value:o}),e(H,{children:z("access::meal-edit",Y)&&e("button",{onClick:()=>_(a,s,i,o,c),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(j,{name:"FaEdit",className:"w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"})})})]},A)):e("tr",{children:e(r,{value:"No Data Found",colSpan:n.length,className:"text-center text-black dark:text-white"})})})]})]})};V.layout=n=>e(E,{title:"Meal details",children:n});export{V as default};
