import{e as c}from"./app-523ce712.js";const i={method:"GET",url:"",queryParams:{},formData:{}},p=()=>({"Content-Type":"application/json",Accept:"application/json"}),d=(r,t,e)=>{let a={baseURL:r,headers:p()};t.toLowerCase()==="get"&&(a.params=e);const n=c.create(a);let o={...i};return o.method=t,o.data=e,l(n,o).then(s=>s).catch(s=>s)};async function l(r,t){let e={response:void 0,error:void 0};try{const a=await r(t);e={...e,response:a}}catch(a){e={...e,error:a&&a.response}}return e}export{d};