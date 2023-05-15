import{_,K as m,j as s,a as l}from"./app-af00dd6a.js";import{A as M}from"./AuthenticatedLayout-adc67dd3.js";import{T as i}from"./TextInput-60413e6e.js";import{S as r}from"./SelectInput-05f9179a.js";import{F as f}from"./FromPageLayout-f1febf46.js";import"./Logo-white-2a851e2e.js";import"./LoadingButton-cf823d85.js";import"./index-1f6f7bd3.js";const v=()=>{_().props;const{data:a,setData:t,errors:n,post:d,processing:h}=m({name:"",address:"",status:"",user_id:"",is_fixed_meal_rate:1,break_fast_close:"",lunch_close:"",dinner_close:"",is_automeal:1,has_breakfast:1,has_lunch:1,has_dinner:1}),u=["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],c=e=>{e.preventDefault(),d(route("dormitory.store"))};return s(f,{breadcumb_link:route("dormitory.index"),breadcumb_name:"Dormitory",breadcumb_action:"Create",loading:h,button_text:"Create Dormitory",handlFormSubmit:c,children:[l(i,{label:"Name",name:"name",type:"text",errors:n.name,value:a.name,onChange:e=>t("name",e.target.value)}),l(i,{label:"Address",name:"address",type:"text",errors:n.address,value:a.address,onChange:e=>t("address",e.target.value)}),s(r,{label:"Status",name:"status",errors:n.status,value:a.status,onChange:e=>t("status",e.target.value),children:[l("option",{value:"1",children:"Active"}),l("option",{value:"0",children:"InActive"})]}),s(r,{label:"Is Fixed Meal Rate",name:"is_fixed_meal_rate",errors:n.is_fixed_meal_rate,value:a.is_fixed_meal_rate,onChange:e=>t("is_fixed_meal_rate",e.target.value),children:[l("option",{value:"1",children:"Yes"}),l("option",{value:"0",children:"No"})]}),s(r,{label:"Is Auto Meal",name:"is_automeal",errors:n.is_automeal,value:a.is_automeal,onChange:e=>t("is_automeal",e.target.value),children:[l("option",{value:"1",defaultValue:a.is_automeal,children:"Yes"}),l("option",{value:"2",defaultValue:a.is_automeal,children:"No"})]}),s(r,{label:"Has Breakfast",name:"has_breakfast",errors:n.has_breakfast,value:a.has_breakfast,onChange:e=>t("has_breakfast",e.target.value),children:[l("option",{value:"1",defaultValue:a.has_breakfast,children:"Yes"}),l("option",{value:"2",defaultValue:a.has_breakfast,children:"No"})]}),s(r,{label:"Has Lunch",name:"has_lunch",errors:n.has_lunch,value:a.has_lunch,onChange:e=>t("has_lunch",e.target.value),children:[l("option",{value:"1",defaultValue:a.has_lunch,children:"Yes"}),l("option",{value:"2",defaultValue:a.has_lunch,children:"No"})]}),s(r,{label:"Has Dinner",name:"has_dinner",errors:n.has_dinner,value:a.has_dinner,onChange:e=>t("has_dinner",e.target.value),children:[l("option",{value:"1",defaultValue:a.has_dinner,children:"Yes"}),l("option",{value:"2",defaultValue:a.has_dinner,children:"No"})]}),l(r,{label:"Breakfast will closed after",name:"break_fast_close",value:a.break_fast_close,onChange:e=>t("break_fast_close",e.target.value),children:u.map((e,o)=>l("option",{value:e,defaultValue:a.break_fast_close,children:e},o))}),l(r,{label:"Lunch will closed after",name:"lunch_close",value:a.lunch_close,onChange:e=>t("lunch_close",e.target.value),children:u.map((e,o)=>l("option",{value:e,defaultValue:a.lunch_close,children:e},o))}),l(r,{label:"Breakfast will closed after",name:"dinner_close",value:a.dinner_close,onChange:e=>t("dinner_close",e.target.value),children:u.map((e,o)=>l("option",{value:e,defaultValue:a.dinner_close,children:e},o))})]})};v.layout=a=>l(M,{title:"Create Dormitory",children:a});export{v as default};
