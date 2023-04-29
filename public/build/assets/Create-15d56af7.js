import{r as h,_,K as N,j as s,a,f as y,Q as C}from"./app-2dde695b.js";import{L as x}from"./Layout-8ec69a49.js";import{L as S}from"./LoadingButton-91e669a9.js";import{T as n}from"./TextInput-263d69bf.js";import{S as m}from"./SelectInput-291ff286.js";import{S as I}from"./react-select.esm-9a507f00.js";import{d as A}from"./api-ed33d5b2.js";import"./index-2e4736b8.js";import"./utils-9aac24b3.js";import"./BottomHeader-ef5b3363.js";const D=()=>{const[d,p]=h.useState([]),{roles:u,rooms:i}=_().props,{data:t,setData:l,errors:r,post:w,processing:f}=N({first_name:"",last_name:"",email:"",password:"",owner:"0",phone:"",present_address:"",permanent_address:"",nid:"",nid_type:"0",institution:"",company:"",status:"0",roles:[],is_admin:0,room_id:"",seat_id:""}),v=e=>{e.preventDefault(),w(route("user.store"))},b=u&&u.length?u.map(e=>({value:e.id,label:`${e.name}`})):[],c=async e=>{const{response:o,error:g}=await A(`/api/v1/seat/${e}`,"get");g?(C.error(g.data.message),p([])):o.data&&o.data.length>0?p(o.data):p([])};return h.useEffect(()=>{var e;i&&i.length&&c((e=i[0])==null?void 0:e.id)},[i]),s("div",{children:[a("div",{children:s("h1",{className:"mb-8 text-3xl font-bold",children:[a(y,{href:route("user.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Members"}),a("span",{className:"font-medium text-indigo-600",children:" /"})," ","Create"]})}),a("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:s("form",{name:"createForm",onSubmit:v,children:[s("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:[a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"First Name",name:"first_name",errors:r.first_name,value:t.first_name,onChange:e=>l("first_name",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Last Name",name:"last_name",errors:r.last_name,value:t.last_name,onChange:e=>l("last_name",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Email",name:"email",type:"email",errors:r.email,value:t.email,onChange:e=>l("email",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Password",name:"password",type:"password",errors:r.password,value:t.password,onChange:e=>l("password",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Phone",name:"phone",type:"number",errors:r.phone,value:t.phone,onChange:e=>l("phone",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Present Address",name:"present_address",type:"text",errors:r.present_address,value:t.present_address,onChange:e=>l("present_address",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Permanent Address",name:"permanent_address",type:"text",errors:r.permanent_address,value:t.permanent_address,onChange:e=>l("permanent_address",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"NID",name:"nid",type:"text",errors:r.nid,value:t.nid,onChange:e=>l("nid",e.target.value)}),s(m,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"NID Type",name:"nid_type",errors:r.nid_type,value:t.nid_type,onChange:e=>l("nid_type",e.target.value),children:[a("option",{value:"1",children:"National ID"}),a("option",{value:"0",children:"Birth Certificate"})]}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Institution",name:"institution",type:"text",errors:r.institution,value:t.institution,onChange:e=>l("institution",e.target.value)}),a(n,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Company",name:"company",type:"text",errors:r.company,value:t.company,onChange:e=>l("company",e.target.value)}),s(m,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Status",name:"status",errors:r.status,value:t.status,onChange:e=>l("status",e.target.value),children:[a("option",{value:"1",children:"Active"}),a("option",{value:"0",children:"InActive"})]}),s(m,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Room",name:"room_id",errors:r.room_id,value:t.room_id,onChange:e=>{l("room_id",e.target.value),c(e.target.value)},children:[a("option",{children:"Select Room"}),i&&i.map((e,o)=>a("option",{defaultValue:t.room_id,value:e.id,children:e.name},o))]}),s(m,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Seat",name:"seat_id",errors:r.seat_id,value:t.seat_id,onChange:e=>{l("seat_id",e.target.value)},children:[a("option",{children:"Select Seat"}),d&&d.map((e,o)=>a("option",{defaultValue:t.seat_id,value:e.id,children:e.seat_no},o))]}),s(m,{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",label:"Is Admin",name:"is_admin",errors:r.is_admin,value:t.is_admin,onChange:e=>l("is_admin",e.target.value),children:[a("option",{value:"1",children:"Yes"}),a("option",{value:"0",children:"No"})]}),s("div",{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/3",children:[a("label",{className:"form-label",children:"Roles"}),a(I,{isMulti:!0,isClearable:!0,classNamePrefix:"react-select",options:b,onChange:e=>l("roles",e&&e.map(o=>o.value)||[])})]})]}),a("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:a(S,{loading:f,type:"submit",className:"btn-indigo",children:"Create User"})})]})})]})};D.layout=d=>a(x,{title:"Create User",children:d});export{D as default};