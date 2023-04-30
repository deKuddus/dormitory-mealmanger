import{_ as S,r as y,K as A,j as d,a,Q as w}from"./app-aabd3ed4.js";import{A as I}from"./AuthenticatedLayout-25354546.js";import{T as s}from"./TextInput-baa55968.js";import{S as m}from"./SelectInput-454d8656.js";import{i as b}from"./utils-d45c0400.js";import"./index-7a4c0b11.js";import{d as P}from"./api-1f29dcaa.js";import{F as N}from"./FromPageLayout-ecc364fd.js";import{M as T}from"./MultiSelect-02ec7753.js";import{T as D}from"./TextEditor-976cb18f.js";import"./Logo-25d59469.js";import"./dayjs.min-77c9d7d0.js";import"./_equalByTag-673a10d6.js";import"./_getTag-68d150ad.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-e21f4e9c.js";import"./index-1f6f7bd3.js";const E=()=>{const{user:t,roles:p,rooms:l,user_permissions:h}=S().props,[v,u]=y.useState([]),{data:n,setData:r,errors:o,post:f,processing:C}=A({full_name:t.full_name||"",display_name:t.display_name||"",email:t.email||"",password:"",phone:t.phone||"",present_address:t.present_address||"",permanent_address:t.permanent_address||"",nid:t.nid||"",nid_type:t.nid_type||"0",institution:t.institution||"",company:t.company||"",status:t.status||"0",roles:t.roles&&t.roles.map(({id:e,name:i},c)=>e)||[],_method:"PUT",is_admin:t.is_admin,room_id:t.room_id,seat_id:t.seat_id,note:t.note}),x=e=>{e.preventDefault(),f(route("user.update",t.id))},g=p&&p.length?p.map(e=>({value:e.id,label:`${e.name}`})):[],_=async e=>{const{response:i,error:c}=await P(`/api/v1/seat/${e}`,"get");c?(w.error(c.data.message),u([])):i.data&&i.data.length>0?u(i.data):u([])};return y.useEffect(()=>{var e;l&&l.length&&(t.room_id?_(t.room_id):_((e=l[0])==null?void 0:e.id))},[l]),d(N,{breadcumb_link:route("user.index"),breadcumb_name:"Member",breadcumb_action:"Create",loading:C,button_text:"Update Member",handlFormSubmit:x,children:[a(s,{label:"Full Name",name:"full_name",errors:o.full_name,value:n.full_name,onChange:e=>r("full_name",e.target.value)}),a(s,{label:"Display Name",name:"display_name",errors:o.display_name,value:n.display_name,onChange:e=>r("display_name",e.target.value)}),a(s,{label:"Email",name:"email",type:"email",errors:o.email,value:n.email,onChange:e=>r("email",e.target.value)}),b("access::password-change",h)&&a(s,{label:"Password",name:"password",type:"password",errors:o.password,value:n.password,onChange:e=>r("password",e.target.value)}),a(s,{label:"Phone",name:"phone",type:"number",errors:o.phone,value:n.phone,onChange:e=>r("phone",e.target.value)}),a(s,{label:"Present Address",name:"present_address",type:"text",errors:o.present_address,value:n.present_address,onChange:e=>r("present_address",e.target.value)}),a(s,{label:"Permanent Address",name:"permanent_address",type:"text",errors:o.permanent_address,value:n.permanent_address,onChange:e=>r("permanent_address",e.target.value)}),a(s,{label:"NID",name:"nid",type:"text",errors:o.nid,value:n.nid,onChange:e=>r("nid",e.target.value)}),d(m,{label:"NID Type",name:"nid_type",errors:o.nid_type,value:n.nid_type,onChange:e=>r("nid_type",e.target.value),children:[a("option",{value:"1",children:"National ID"}),a("option",{value:"0",children:"Birth Certificate"})]}),a(s,{label:"Institution",name:"institution",type:"text",errors:o.institution,value:n.institution,onChange:e=>r("institution",e.target.value)}),a(s,{label:"Company",name:"company",type:"text",errors:o.company,value:n.company,onChange:e=>r("company",e.target.value)}),d(m,{label:"Status",name:"status",errors:o.status,value:n.status,onChange:e=>r("status",e.target.value),children:[a("option",{value:"1",children:"Active"}),a("option",{value:"0",children:"InActive"})]}),d(m,{label:"Is Admin",name:"is_admin",errors:o.is_admin,value:n.is_admin,onChange:e=>r("is_admin",e.target.value),children:[a("option",{value:"1",children:"Yes"}),a("option",{value:"0",children:"No"})]}),a(m,{label:"Room",name:"room_id",errors:o.room_id,value:n.room_id,onChange:e=>{r("room_id",e.target.value),_(e.target.value)},children:l&&l.map((e,i)=>a("option",{defaultValue:n.room_id,value:e.id,children:e.name},i))}),d(m,{label:"Seat",name:"seat_id",errors:o.seat_id,value:n.seat_id,onChange:e=>{r("seat_id",e.target.value)},children:[a("option",{children:"Select Seat"}),v&&v.map((e,i)=>a("option",{defaultValue:n.seat_id,value:e.id,children:e.seat_no},i))]}),a(T,{label:"Roles",value:g.filter(e=>n.roles.includes(e.value)),options:g,column:"roles",name:"roles",onChangeHandler:r}),b("access::user-note-edit",h)&&a(D,{value:n.note,onChangeHandler:r,name:"note",label:"Note"})]})};E.layout=t=>a(I,{title:"Edit Member",children:t});export{E as default};
