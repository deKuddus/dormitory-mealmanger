import{_ as c,K as _,j as i,a as e}from"./app-9b1aff9a.js";import{A as h}from"./AuthenticatedLayout-3ba54b4d.js";import{T as b}from"./TextInput-66afd55f.js";import{S as m}from"./SelectInput-2f1e81e7.js";import{F as v}from"./FromPageLayout-d9f14917.js";import"./Logo-white-2a851e2e.js";import"./LoadingButton-6f090fb2.js";import"./index-0ee3514d.js";const g=()=>{var s;const{rooms:a}=c().props,{data:o,setData:r,errors:n,post:u,processing:l}=_({seat_no:"",status:0,room_id:(s=a[0])==null?void 0:s.id}),d=t=>{t.preventDefault(),u(route("seat.store"))};return i(v,{breadcumb_link:route("seat.index"),breadcumb_name:"Seats",breadcumb_action:"Create",loading:l,button_text:"Create Seat",handlFormSubmit:d,children:[e(m,{label:"Room",name:"room_id",errors:n.room_id,value:o.room_id,onChange:t=>r("room_id",t.target.value),children:a&&a.map(({id:t,name:p})=>e("option",{value:t,children:p},t))}),e(b,{label:"Seat No",name:"seat_no",type:"text",errors:n.seat_no,value:o.seat_no,onChange:t=>r("seat_no",t.target.value)}),i(m,{label:"Status",name:"status",errors:n.status,value:o.status,onChange:t=>r("status",t.target.value),children:[e("option",{value:"1",children:"Active"}),e("option",{value:"0",children:"InActive"})]})]})};g.layout=a=>e(h,{title:"Create Seat",children:a});export{g as default};