import{_ as m,K as d,j as s,a as i}from"./app-2e3d24e8.js";import{A as p}from"./AuthenticatedLayout-448edf68.js";import"./index-0ee3514d.js";import{T as c}from"./TextInput-0c14827d.js";import{S as h}from"./SelectInput-0acba884.js";import{l as b}from"./index-0948a6fa.js";import{F as f}from"./FromPageLayout-da12fa37.js";import"./Logo-white-2a851e2e.js";import"./_equalByTag-3efd8848.js";import"./_getTag-234c2f6f.js";import"./_isIndex-bb96cf02.js";import"./LoadingButton-971e42fa.js";const v=()=>{const{notice:t}=m().props,{data:a,setData:o,errors:r,post:l,processing:n}=d({title:t.title||"",description:t.description||"",status:t.status,published_date:t.published_date||"",_method:"PUT"}),u=e=>{e.preventDefault(),l(route("notice.update",t.id))};return s(f,{breadcumb_link:route("notice.index"),breadcumb_name:"Notice",breadcumb_action:"Edit",loading:n,button_text:"Update Notice",handlFormSubmit:u,children:[i(c,{label:"Title",name:"title",errors:r.title,value:a.title,onChange:e=>o("title",e.target.value)}),s(h,{label:"Status",name:"status",errors:r.status,value:a.status,onChange:e=>o("status",e.target.value),children:[i("option",{value:"1",defaultValue:a.status,children:"Active"}),i("option",{value:"0",defaultValue:a.status,children:"InActive"})]}),i(b,{className:"h-48 pr-6 mb-12 w-full",theme:"snow",value:a.description,onChange:e=>o("description",e)})]})};v.layout=t=>i(p,{title:"Edit Notice",children:t});export{v as default};