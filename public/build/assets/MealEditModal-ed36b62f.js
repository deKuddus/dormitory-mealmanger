import{a as e,r as l,j as r}from"./app-b424552e.js";import{T as o}from"./TextInput-acb51a5b.js";import{h as p}from"./moment-fbc5633a.js";import{K as i,g as m}from"./transition-47d699b3.js";function x({mealData:n,setMealData:s,handleConfirm:d,open:u,setOpen:f}){const c=()=>{s({break_fast:0,lunch:0,dinner:0}),f(!1)};return e(i.Root,{show:u,as:l.Fragment,children:r(m,{as:"div",className:"relative z-10",onClose:c,children:[e(i.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:e("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e(i.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:r(m.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[e("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:r("div",{className:"sm:items-start",children:[r(m.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 border-b mb-4 ",children:["Update Meal of ",e("span",{className:"text-xxl font-bold",children:n.user})," for ",p(n.created_at).format("Do MMM YYYY")]}),r("div",{className:"grid grid-cols-1 items-end gap-y-7",children:[e(o,{className:"w-full pb-2",label:"Breakfast",type:"number",name:"breakfast",placeholder:"Breakfast",value:n.break_fast,onChange:a=>{a.target.value>=0?s(t=>({...t,break_fast:parseInt(a.target.value,10)})):s(t=>({...t,lunch:0}))}}),e(o,{className:"w-full pb-2",label:"Lunch",type:"number",name:"lunch",placeholder:"Lunch",value:n.lunch,onChange:a=>{a.target.value>=0?s(t=>({...t,lunch:parseInt(a.target.value,10)})):s(t=>({...t,lunch:0}))}}),e(o,{className:"w-full pb-2",label:"Dinner",type:"number",name:"dinner",placeholder:"Dinner",value:n.dinner,onChange:a=>{a.target.value>=0?s(t=>({...t,dinner:parseInt(a.target.value,10)})):s(t=>({...t,dinner:0}))}})]})]})}),r("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e("button",{type:"button",className:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:d,children:"Submit"}),e("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:c,children:"Cancel"})]})]})})})})]})})}export{x as default};
