import{_ as h,K as f,j as o,a as e,f as g}from"./app-2dde695b.js";import{L as v}from"./Layout-8ec69a49.js";import{L as b}from"./LoadingButton-91e669a9.js";import{T as x}from"./TextInput-263d69bf.js";import{S as d}from"./SelectInput-291ff286.js";import"./index-2e4736b8.js";import"./utils-9aac24b3.js";import"./BottomHeader-ef5b3363.js";const _=()=>{const{users:i,rooms:n,seat:a}=h().props,{data:r,setData:s,errors:l,post:m,processing:u}=f({seat_no:a.seat_no||"",status:a.status||"",room_id:a.room_id||"",_method:"PUT"}),c=t=>{t.preventDefault(),m(route("seat.update",a.id))};return o("div",{children:[e("div",{children:o("h1",{className:"mb-8 text-3xl font-bold",children:[e(g,{href:route("seat.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Seat"}),e("span",{className:"font-medium text-indigo-600",children:" /"})," ","Edit"]})}),e("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:o("form",{name:"createForm",onSubmit:c,children:[o("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[e(d,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Room",name:"room_id",errors:l.room_id,value:r.room_id,onChange:t=>s("room_id",t.target.value),children:n&&n.map(({id:t,name:p})=>e("option",{defaultValue:a.room_id,value:t,children:p},t))}),e(x,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Seat No",name:"seat_no",type:"text",errors:l.seat_no,value:r.seat_no,onChange:t=>s("seat_no",t.target.value)}),o(d,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Status",name:"status",errors:l.status,value:r.status,onChange:t=>s("status",t.target.value),children:[e("option",{value:"1",children:"Active"}),e("option",{value:"0",children:"InActive"})]})]}),e("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e(b,{loading:u,type:"submit",className:"btn-indigo",children:"Edit Seat"})})]})})]})};_.layout=i=>e(v,{title:"Edit Seat",children:i});export{_ as default};