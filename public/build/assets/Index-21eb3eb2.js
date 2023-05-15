import{_ as b,j as a,a as e,R as m,f as x}from"./app-a1e31084.js";import{I as g,A as v}from"./AuthenticatedLayout-fe1980fd.js";import{i as u}from"./utils-087e4b11.js";import{T as A,a as t}from"./TableData-9266f178.js";import{T as B}from"./TableAction-d3ff6458.js";import{T as w}from"./TablePageLayout-cda926e6.js";import"./dayjs.min-f78cf2ec.js";import"./index-1f6f7bd3.js";import"./BreadcumbForTable-546ca9a9.js";const y=()=>{const{usersWithDeposit:r,user_permissions:l}=b().props,{data:o,meta:{links:d}}=r;return a(w,{breadcumb_action:"Add New Deposit",breadcumb_name:"Deposits",pagination_links:d,breadcumb_link:route("deposit.create"),isShowButton:u("access::deposit-create",l),children:[e(A,{rows:["No","Name","Amount(Current)","Amount(All time)","Withdraw","Pending","Action"]}),e("tbody",{children:o&&o.length?o.map(({id:p,full_name:h,deposit:s,deposits:i},c)=>a("tr",{children:[e(t,{value:c+1}),e(t,{value:h}),e(t,{value:s<0?`Due ${s}`:`${s} BDT`}),i&&i.length?i.map(({deposit_amount:f,pending_amount:n,withdraw_amount:T},D)=>a(m.Fragment,{children:[e(t,{value:`${f||0} BDT`}),e(t,{value:`${T||0} BDT`}),n>0?e(t,{value:`${n||0} BDT`,className:"rounded-full bg-danger text-center bg-opacity-10 py-1 px-3 text-sm text-danger"}):e(t,{value:`${n||0} BDT`})]},D)):a(m.Fragment,{children:[e(t,{value:"0 BDT"}),e(t,{value:"0 BDT"}),e(t,{value:"0 BDT"})]}),e(B,{children:u("access::deposit-show",l)&&e(x,{href:route("deposit.show",p),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:e(g,{name:"FaEye",className:"w-6 h-4 text-gray-400 fill-current"})})})]},c)):e("tr",{children:e(t,{value:"No Data Found",colSpan:7,className:"text-center text-black dark:text-white"})})})]})};y.layout=r=>e(v,{title:"Deposits",children:r});export{y as default};
