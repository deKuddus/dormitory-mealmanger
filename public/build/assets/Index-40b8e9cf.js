import{_ as y,r as w,j as t,a as e,f as M,g as T}from"./app-b424552e.js";import{L as D}from"./Layout-012bfe45.js";import{S as C}from"./SelectInput-640692d3.js";import{h as x}from"./moment-fbc5633a.js";import{c as Y,i as p}from"./utils-4fea7fd8.js";import{I as B}from"./BottomHeader-31b85409.js";import"./index-2e4736b8.js";const F=()=>{const{users:l,balance:s,user_permissions:o,additional:h,bazar:f,totalMeal:u,fixedCost:N,mealCost:r}=y().props,[b,g]=w.useState(x().format("MMMM-YYYY")),i=Y(),v=a=>{if(a)return T.get(route("report.index"),{month:a},{replace:!0,preserveState:!0})};return t("div",{children:[t("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6",children:[e("div",{className:"flex items-center",children:e("h1",{className:"text-3xl font-bold",children:"Meals"})}),e("div",{className:"flex items-center",children:e("div",{className:"relative z-30 w-64 px-4 py-6 mt-2",children:e(C,{label:"Month",name:"month",value:b,onChange:a=>{g(a.target.value),v(a.target.value)},children:i&&i.map((a,c)=>e("option",{value:a,defaultValue:x().format("MMMM-YYYY"),children:a},c))})})})]}),t("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:[e("div",{className:"col-span-full mb-5",children:t("div",{className:"grid gap-4 lg:gap-8 md:grid-cols-3",children:[e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white text-center",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[e("span",{className:"text-xxl font-bold text-gray-900",children:"WP Dormitory "}),t("span",{className:"text-sm text-gray-900",children:["Balance : ",s," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[t("span",{className:"text-buttonColor-400",children:["Meal Charge: ",r," BDT "]}),t("span",{className:"text-gray-900 text-xl font-bold ",children:["Total Meal : ",u," "]}),t("span",{className:"text-gray-900 text-xl font-bold",children:["Fixed Cost : ",N," BDT"]})]})})}),e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white",children:t("div",{className:"flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ",children:[e("span",{className:"text-red-600 text-xl font-bold ",children:"Total Due: 50 BDT "}),t("span",{className:"text-gray-900 text-xl font-bold ",children:["Total Cost : ",f," BDT"]}),t("span",{className:"text-gray-900 text-xl font-bold",children:["Total Fixed Cost : ",h," BDT"]})]})})})]})}),t("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:t("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4 border",children:"No"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Name"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Total Meal"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Total Deposit"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Total Cost"}),e("th",{className:"px-6 pt-5 pb-4 border",children:"Due (BDT)"}),p("access::meal-show",o)&&e("th",{className:"px-6 pt-5 pb-4 border",children:"Action"})]})}),e("tbody",{children:l?l.map(({id:a,name:c,meals_total:n,deposits:d},m)=>t("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:m+1})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:c})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:n})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:d})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:parseFloat(r*n).toFixed(2)})}),e("td",{className:"border",children:e(j,{deposit:d,cost:r*n})}),p("access::meal-show",o)&&e("td",{className:"border w-px border-t p-3 whitespace-nowrap",children:e("div",{className:"flex items-center gap-2 justify-end",children:e(M,{href:route("meals.show",a),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(B,{name:"FaEye",className:"w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"})})})})]},m)):e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"6",children:"No Meal found."})})})]})]})]})},j=({deposit:l,cost:s})=>s>l?e("p",{className:"flex items-center text-red-400  px-6 py-4 focus:text-indigo-700 focus:outline-none",children:parseFloat(l-s).toFixed(2)}):e("p",{className:"flex items-center text-green-400 px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"0"});F.layout=l=>e(D,{title:"Meal Report",children:l});export{F as default};
