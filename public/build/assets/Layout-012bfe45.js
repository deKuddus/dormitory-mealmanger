import{_ as r,a as e,F as p,f as c,r as l,j as o,n as k}from"./app-b424552e.js";import{c as t}from"./index-2e4736b8.js";import{i as f}from"./utils-4fea7fd8.js";import{L as b,B as v,F as g}from"./BottomHeader-31b85409.js";const F=({icon:s,link:i,name:a,uri_root:n,canShow:h})=>{const{user_permissions:m}=r().props,{url:u}=r(),w=u.startsWith("/"+n.toLowerCase()),x=t({"bg-background-300":w});return t("w-4 h-4 mr-2"),f(h,m)?e("div",{className:`m-2 text-left pl-3 hover:bg-background-300 py-3 rounded ${x}`,children:e(c,{href:route(i),children:e("div",{className:"text-gray-800",children:a})})}):e(p,{})},d=({className:s})=>e("div",{className:s,children:[{name:"Dashboard",link:"dashboard",uri_root:"dashboard",icon:"FaRegClock",canShow:"access::dashboard-show"},{name:"Meals",link:"meals.index",uri_root:"meal",icon:"FaRegClock",canShow:"access::meal-show"},{name:"Deposit",link:"deposit.index",uri_root:"deposit",icon:"FaListAlt",canShow:"access::deposit-show"},{name:"Expenses",link:"expense.index",uri_root:"expense",icon:"FaListAlt",canShow:"access::expense-show"},{name:"Bazar",link:"bazar.index",uri_root:"bazar",icon:"FaListAlt",canShow:"access::bazar-show"},{name:"Additional",link:"additional.index",uri_root:"additional",icon:"FaListAlt",canShow:"access::additional-show"},{name:"Menu",link:"menu.index",uri_root:"menu",icon:"FaListAlt"},{name:"Bazar Schedule",link:"bazar-schedule.index",uri_root:"bazar-schedule",icon:"FaListAlt",canShow:"access::bazarschedule-show"},{name:"Users",link:"user.index",uri_root:"user",icon:"FaUsers",canShow:"access::user-show"},{name:"Messes",link:"dormitory.index",uri_root:"dormitory",icon:"FaTiktok"},{name:"Notices",link:"notice.index",uri_root:"notice",icon:"FaAlignJustify",canShow:"access::notice-show"},{name:"Rules",link:"rule.index",uri_root:"rule",icon:"FaListAlt",canShow:"access::rule-show"},{name:"Asset",link:"asset.index",uri_root:"asset",icon:"FaListAlt",canShow:"access::asset-show"},{name:"Dormitory",link:"dormitory.index",uri_root:"dormitory",icon:"FaListAlt",canShow:"access::dormitory-show"},{name:"Room",link:"room.index",uri_root:"room",icon:"FaListAlt",canShow:"access::room-show"},{name:"Seat",link:"seat.index",uri_root:"seat",icon:"FaListAlt",canShow:"access::seat-show"},{name:"Chef",link:"chef.index",uri_root:"chef",icon:"FaListAlt",canShow:"access::chef-show"},{name:"Report",link:"report.index",uri_root:"reports",icon:"FaListAlt",canShow:"access::report-show"},{name:"Closings",link:"report.closed.index",uri_root:"closings",icon:"FaListAlt",canShow:"access::closing-show"},{name:"Token",link:"tokens.index",uri_root:"token",icon:"FaListAlt",canShow:"access::token-show"},{name:"Roles",link:"role.index",uri_root:"role",icon:"FaListAlt",canShow:"access::role-show"},{name:"Permissions",link:"permissions.index",uri_root:"permissions",icon:"FaListAlt",canShow:"access::permission-show"}].map((a,n)=>l.createElement(F,{...a,key:n}))}),_=()=>{const{auth:s}=r().props,[i,a]=l.useState(!1);return o("div",{className:"flex items-center justify-between px-6 py-4 bg-white md:w-56 md:justify-center border-b-2",children:[e(c,{className:"mt-1",href:s.user.is_admin?route("dashboard"):route("user.dashboard"),children:e(b,{})}),o("div",{className:"relative md:hidden",children:[e("svg",{onClick:()=>a(!0),className:"w-6 h-6 text-blue-800 cursor-pointer fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:e("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})}),o("div",{className:`${i?"":"hidden"} absolute right-0 z-20`,children:[e(d,{className:"relative z-20 px-8 py-4 pb-2 mt-2 bg-white rounded shadow-lg"}),e("div",{onClick:()=>{a(!1)},className:"fixed inset-0 z-10 bg-black opacity-25"})]})]})]})};function N({title:s,children:i}){return o("div",{children:[e(k,{title:s}),e("div",{className:"flex flex-col",children:o("div",{className:"flex flex-col h-screen",children:[o("div",{className:"md:flex",children:[e(_,{}),e(v,{})]}),o("div",{className:"flex flex-grow overflow-hidden",children:[e(d,{className:"hidden w-56 mx-2 overflow-y-auto bg-white md:block "}),o("div",{className:"w-full px-2 py-8 overflow-hidden overflow-y-auto md:p-8 bg-background-500",children:[e(g,{}),i]})]})]})})]})}export{N as L};
