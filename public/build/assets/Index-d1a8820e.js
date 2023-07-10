import{_ as g,j as a,a as e,f as b,F as n,g as d}from"./app-d0c045e2.js";import{I as h,A as x}from"./AuthenticatedLayout-5682738f.js";import{i as l}from"./utils-6447ce2c.js";import{C as s}from"./Card-0fb333ca.js";import"./Logo-white-2a851e2e.js";import"./dayjs.min-80ee8b7d.js";const u=()=>{var o,i;const{data:t,user_permissions:r}=g().props,c=()=>{if(confirm("Are you sure to close the current month?"))return d.post(route("month.close"))},m=()=>{confirm("Are you sure to start new month?")&&d.post(route("new.month.start"))};return a("div",{children:[e("div",{className:"rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark p-5",children:a("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[e("div",{className:"col-span-full mb-5",children:a("span",{className:"font-bold",children:["Today's Meal: ",a("span",{className:"text-indigo-700",children:[((o=t==null?void 0:t.todaysMeal)==null?void 0:o.lunch_total)||0," Lunch"]})," & ",a("span",{className:"text-pink-600",children:[((i=t==null?void 0:t.todaysMeal)==null?void 0:i.dinner_total)||0," Dinner"]})," "]})}),a("div",{className:"flex gap-2 col-span-full mb-5",children:[l("access::month-close",r)&&e("button",{className:"inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",onClick:c,disabled:t.isDormitoryRunning===!1,children:"Close Month"}),l("access::month-start",r)&&e("button",{className:"inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",onClick:m,disabled:t.isDormitoryRunning===!0,children:"Start New Month"})]})]})}),e("div",{className:"rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark",children:a("div",{className:"flex items-center justify-between p-2",children:[e("div",{children:e("h6",{className:"mb-4 text-xl font-bold pt-4 px-4",children:"Meal Calendar View"})}),e(b,{href:route("meal.calender.view"),className:"rounded border-gray-300 bg-background-200 shadow p-4",children:e(h,{name:"FaEye",className:"text-white"})})]})}),e("div",{className:"rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark p-5",children:l("access::dashboard-show",r)?a(n,{children:[a("div",{className:"col-span-full mb-5",children:[e("h6",{className:"mb-4 text-xl font-bold",children:"Meal"}),a("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5",children:[e(s,{value:t.todaysTotalMeal,text:"Today's Meal",icon:"FaRegSnowflake",bgName:"bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white",iconClass:"text-success"}),e(s,{value:t.totalMeal,text:"Total Meal",icon:"FaRegSnowflake",bgName:"bg-gradient-to-br from-purple-400 to-pink-700 text-white",iconClass:"text-success"}),e(s,{value:parseFloat(t.totalMeal/t.member).toFixed(2),text:"Average Meal",icon:"FaRegSnowflake",bgName:"bg-gradient-to-tl from-green-500 via-blue-500 to-purple-500 text-white",iconClass:"text-success"})]})]}),a("div",{className:"col-span-full mb-5",children:[e("h6",{className:"mb-4 text-xl font-bold ",children:"Cash"}),a("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5",children:[e(s,{value:`${t.bazar?parseFloat(t.bazar/t.totalMeal).toFixed(2):0} BDT`,text:"Meal Charge",bgName:"bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 text-white",iconClass:"text-success",icon:"FaMoneyBillWave"}),e(s,{value:`${parseFloat(t.balance).toFixed(2)} BDT`,text:"Total Deposit",bgName:"bg-gradient-to-tr from-green-400  from-20% to-blue-500 to-80% text-white",iconClass:"text-success",icon:"FaMoneyBillWaveAlt"}),e(s,{value:`${parseFloat(t.bazar+t.additional).toFixed(2)} BDT`,text:"Total Cost",icon:"FaMoneyBillAlt",bgName:"bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white",iconClass:"text-success"})]})]}),a("div",{className:"col-span-full mb-5",children:[e("h6",{className:"mb-4 text-xl font-bold ",children:"Members"}),a("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5",children:[e(s,{value:t.users.active,text:"Active",bgName:"bg-gradient-to-tl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white",iconClass:"text-success",icon:"FaUsers"}),e(s,{value:t.users.inactive,text:"Inactive",bgName:"bg-gradient-to-br from-pink-500 from-10%  to-danger to-90% text-white",iconClass:"text-danger",icon:"FaUsersSlash"}),e(s,{value:t.users.active+t.users.inactive,text:"Total",bgName:"bg-gradient-to-tr from-cyan-500 to-blue-500 text-white",iconClass:"text-success",icon:"FaUsers"})]})]})]}):e(n,{children:e("div",{className:"col-span-full mb-5",children:e("div",{className:"grid gap-4 text-center  md:grid-cols-1",children:e("div",{className:"relative p-6 rounded-xl bg-white shadow",children:e("span",{className:"text-xl font-bold",children:" You are not allowed to see dashboard Card. 🫣"})})})})})})]})};u.layout=t=>e(x,{title:"Dashboard",children:t});export{u as default};
