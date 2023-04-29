import{_ as W,r as w,K as B,Q as h,j as t,a as e,g as p}from"./app-2dde695b.js";import{L as F}from"./Layout-8ec69a49.js";import{T as y}from"./TextInput-263d69bf.js";import{L as I}from"./LoadingButton-91e669a9.js";import{I as f}from"./BottomHeader-ef5b3363.js";import{i as a}from"./utils-9aac24b3.js";import"./index-2e4736b8.js";const L=1,v=3,P=()=>{const{user:n,approvedDeposit:x,pendingDeposit:N,flash:o,user_permissions:r}=W().props,[i,b]=w.useState(0),{data:D,setData:u,errors:c,post:j,processing:k}=B({amount:0,deposit_date:new Date,status:L,user_id:n.id}),A=s=>{s.preventDefault(),j(route("deposit.store")),u("amount",0)},T=s=>(confirm("Are you sure you want to delete this deposit?")&&p.delete(route("deposit.destroy",s)),!0),C=s=>(confirm("Are you sure you want to approve this deposit?")&&p.post(route("deposit.accept",s)),!0),_=s=>(confirm("Are you sure you want to reject this deposit?")&&p.post(route("deposit.reject",s)),!0),S=()=>i===0||i<0?h.error("Woops! amount can not be equal or less than zero"):(p.post(route("deposit.withdraw"),{user_id:n.id,deposit_date:new Date,status:v,amount:i}),b(0));return w.useEffect(()=>{c&&c.length&&h.error("There was an errors."),o&&o.success&&h.success(o.success)},[c,o]),t("div",{children:[t("h1",{className:"mb-8 text-3xl font-bold",children:["Deposits of ",n.first_name," ",n.last_name]}),t("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:[t("div",{className:"col-span-full mb-5",children:[t("h6",{className:"mb-1 text-gray-900 text-xl font-bold",children:["Total: ",n.deposit," BDT"]}),t("div",{className:"grid md:grid-cols-2",children:[a("access::deposit-create",r)&&e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white text-center",children:e("form",{name:"createForm",onSubmit:A,children:t("div",{className:"flex w-full flex-row p-8 -mb-8 -mr-6",children:[e(y,{className:"w-full pr-6 md:w-1/2 lg:w-1/2",label:"",name:"amount",type:"number",value:D.amount,onChange:s=>{s.target.value<0?u("amount",0):u("amount",s.target.value)},errors:c.amount}),e(I,{loading:!1,type:"submit",className:"px-4 py-1 text-xs font-medium text-center text-white bg-buttonColor-400 rounded focus:outline-none",children:"Add Deposit"})]})})})}),a("access::deposit-withdraw",r)&&e("div",{className:"relative p-6 rounded-xl",children:e("div",{className:"space-y-2 text-white text-center",children:t("div",{className:"flex w-full flex-row p-8 -mb-8 -mr-6",children:[e(y,{className:"w-full pr-6 md:w-1/2 lg:w-1/2",label:"",name:"withdraw",type:"number",value:i,onChange:s=>b(s.target.value)}),e("button",{onClick:S,type:"button",className:"px-4 py-1 text-xs font-medium text-center text-white bg-buttonColor-1000 rounded focus:outline-none",children:"Add Withdraw"})]})})})]})]}),t("div",{className:"grid gap-4 lg:gap-8 md:grid-cols-2",children:[t("div",{children:[e("h6",{className:"mb-4 text-gray-900 text-xl font-bold",children:"Transaction History"}),t("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:t("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"No"}),e("th",{className:"px-6 pt-5 pb-4",children:"Date"}),e("th",{className:"px-6 pt-5 pb-4",children:"Amount"}),a("access::deposit-delete",r)&&e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),e("tbody",{children:x.length?x.map(({id:s,amount:l,deposit_date:m,status:d},g)=>t("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:g+1})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:m})}),e("td",{className:"border",children:d===v?t("p",{className:"flex items-center px-6 py-4 text-red-600 focus:outline-none",children:["- ",l," BDT"]}):t("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:[l," BDT"]})}),a("access::deposit-delete",r)&&e("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:e("div",{className:"flex items-center gap-4 justify-end",children:e("button",{onClick:()=>T(s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(f,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})})})]},g)):e("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:e("td",{className:"border",colSpan:4,children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"No transaction found"})})})})]})]}),t("div",{children:[e("h6",{className:"mb-4 text-gray-900 text-xl font-bold",children:"Deposit Request"}),t("table",{className:"w-full whitespace-nowrap",children:[e("thead",{children:t("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"No"}),e("th",{className:"px-6 pt-5 pb-4",children:"Date"}),e("th",{className:"px-6 pt-5 pb-4",children:"Amount"}),a("access::deposit-approve",r)||a("access::deposit-reject",r)&&e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),e("tbody",{children:N.length?N.map(({id:s,amount:l,deposit_date:m},d)=>t("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:d+1})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:m})}),e("td",{className:"border",children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:l})}),e("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:t("div",{className:"flex items-center gap-4 justify-end",children:[a("access::deposit-approve",r)&&e("button",{onClick:()=>C(s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(f,{name:"FaCheck",className:"w-6 h-4 text-buttonColor-400 fill-current"})}),a("access::deposit-reject",r)&&e("button",{onClick:()=>_(s),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(f,{name:"FaTimes",className:"w-6 h-4 text-red-400 fill-current"})})]})})]},d)):e("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:e("td",{className:"border",colSpan:4,children:e("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:"No transaction found"})})})})]})]})]})]})]})};P.layout=n=>e(F,{title:"Deposit Details",children:n});export{P as default};