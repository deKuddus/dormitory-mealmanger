import{_,K as h,j as u,a as e}from"./app-aabd3ed4.js";import{A as b}from"./AuthenticatedLayout-25354546.js";import{F as v}from"./FromPageLayout-ecc364fd.js";import{S as l}from"./SelectInput-454d8656.js";import{T as g}from"./TextInput-baa55968.js";import"./Logo-25d59469.js";import"./LoadingButton-e21f4e9c.js";import"./index-1f6f7bd3.js";const f=()=>{const{users:n,rooms:i,seat:o}=_().props,{data:a,setData:r,errors:s,post:m,processing:d}=h({seat_no:o.seat_no||"",status:o.status||"",room_id:o.room_id||"",_method:"PUT"}),p=t=>{t.preventDefault(),m(route("seat.update",o.id))};return u(v,{breadcumb_link:route("rule.index"),breadcumb_name:"Rule",breadcumb_action:"Edit",loading:d,button_text:"Update Rule",handlFormSubmit:p,children:[e(l,{label:"Room",name:"room_id",errors:s.room_id,value:a.room_id,onChange:t=>r("room_id",t.target.value),children:i&&i.map(({id:t,name:c})=>e("option",{defaultValue:o.room_id,value:t,children:c},t))}),e(g,{label:"Seat No",name:"seat_no",type:"text",errors:s.seat_no,value:a.seat_no,onChange:t=>r("seat_no",t.target.value)}),u(l,{label:"Status",name:"status",errors:s.status,value:a.status,onChange:t=>r("status",t.target.value),children:[e("option",{value:"1",children:"Active"}),e("option",{value:"0",children:"InActive"})]})]})};f.layout=n=>e(b,{title:"Edit Seat",children:n});export{f as default};
