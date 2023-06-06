import{_ as n,j as r,F as i,a as e,f as o}from"./app-ea41ce66.js";import{A as m}from"./AuthenticatedLayout-de9e93d8.js";import"./Logo-white-2a851e2e.js";const h=()=>{const{usersAndMeal:a,daysInMonth:s}=n().props;return r(i,{children:[e("div",{className:"mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:e("h2",{className:"text-title-md2 font-semibold text-black dark:text-white",children:"Meal Calendar View"})}),e("div",{className:"rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark",children:e("div",{className:"max-w-full overflow-x-auto",children:r("table",{className:"w-full table-auto divide-y divide-gray-200",children:[e("thead",{children:r("tr",{className:" text-left dark:bg-meta-4",children:[e("th",{className:"sticky left-0 z-1 dark:bg-meta-4 border border-[#eee] p-4 font-medium",children:"Member"}),Array(parseInt(s,10)).fill(0).map((t,d)=>r("th",{className:"w-24 border border-[#eee] p-4 font-medium  text-center",children:[e("p",{className:"w-full border-b border-[#eee]",children:d+1}),e("table",{className:"w-full table-auto",children:e("thead",{children:r("tr",{className:"dark:bg-meta-4 text-center",children:[e("th",{className:"text-sm font-normal border-r-2 p-2 border-[#eee]",children:"Lunch"}),e("th",{className:"text-sm font-normal p-2",children:"Dinner"})]})})})]},d))]})}),e("tbody",{className:"divide-y divide-gray-200",children:a&&a.map((t,d)=>r("tr",{className:"text-center",children:[e("td",{className:"sticky left-0 z-1 dark:bg-meta-4 border border-[#eee] p-4",children:e(o,{href:route("meals.show",t.id),children:t.display_name})}),t.meals.map((l,c)=>e("td",{className:"border border-[#eee] text-center p-4 dark:border-strokedark",children:e("table",{className:"w-full table-auto",children:e("tbody",{children:r("tr",{children:[e("td",{className:" p-4 border-r border-[#eee] dark:border-strokedark",children:l.lunch}),e("td",{className:" p-4 dark:border-strokedark",children:l.dinner})]})})})},c))]},d))})]})})})]})};h.layout=a=>e(m,{title:"Meals",children:a});export{h as default};
