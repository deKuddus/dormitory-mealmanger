import{_ as N,j as t,a as e,R as a,f as b}from"./app-b424552e.js";import{L as g}from"./Layout-012bfe45.js";import{I as y}from"./BottomHeader-31b85409.js";import{P as w}from"./Pagination-a94d734b.js";import{i as D}from"./utils-4fea7fd8.js";import"./index-2e4736b8.js";const T=()=>{const{usersWithDeposit:n,user_permissions:o}=N().props,{data:r,meta:{links:d}}=n;return t("div",{children:[e("h1",{className:"mb-8 text-3xl font-bold",children:"Deposits"}),e("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:t("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:t("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"No"}),e("th",{className:"px-6 pt-5 pb-4",children:"Name"}),e("th",{className:"px-6 pt-5 pb-4",children:"Amount(Current)"}),e("th",{className:"px-6 pt-5 pb-4",children:"Amount(All time)"}),e("th",{className:"px-6 pt-5 pb-4",children:"Withdraw"}),e("th",{className:"px-6 pt-5 pb-4",children:"Pending"}),e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),t("tbody",{children:[r.map(({id:p,first_name:m,deposit:s,last_name:h,deposits:c},l)=>t("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:l+1})}),e("td",{className:"border",children:t("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:[m," ",h]})}),e("td",{className:"border",children:t("p",{className:`flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none ${s<0?"text-red-600":""}`,children:[s<0?`Due ${s}`:s," BDT"]})}),c&&c.length?c.map(({deposit_amount:f,pending_amount:i,withdraw_amount:u},x)=>t(a.Fragment,{children:[e("td",{className:"border",children:t("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:[f||0," BDT"]})}),e("td",{className:"border",children:t("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:[u||0," BDT"]})}),e("td",{className:"border",children:t("p",{className:`flex items-center px-6 py-4 ${i>0?"text-red-600":""}  focus:text-indigo-700 focus:outline-none`,children:[i||0," BDT"]})})]},x)):t(a.Fragment,{children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"0 BDT"})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"0 BDT"})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"0 BDT"})})]}),e("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:e("div",{className:"flex items-center gap-4 justify-end",children:D("access::deposit-show",o)&&e(b,{href:route("deposit.show",p),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(y,{name:"FaEye",className:"w-6 h-4 text-gray-400 fill-current"})})})})]},l)),r.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border",colSpan:"5",children:"No Deposit found."})})]})]})}),e(w,{links:d})]})};T.layout=n=>e(g,{title:"Deposit",children:n});export{T as default};
