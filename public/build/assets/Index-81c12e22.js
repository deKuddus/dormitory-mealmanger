import{r as d,_ as $,g as A,j as h,a as s,f as _}from"./app-b424552e.js";import{L as E}from"./Layout-012bfe45.js";import{I as b}from"./BottomHeader-31b85409.js";import{_ as L,a as R}from"./_defineProperty-3b091b4b.js";import{_ as G}from"./_equalByTag-35b780b0.js";import{_ as I,k as D,a as F,b as q,s as T,c as B,d as U,i as k,e as H}from"./_baseIsEqual-ca9435cb.js";import{i as y,a as J,b as w,c as Q,e as W}from"./_getTag-f9b0ec05.js";import{_ as v,a as m,g as X,b as O,c as S,i as Y}from"./identity-e44c8c88.js";import{_ as C,a as Z}from"./_isIndex-78cc234f.js";import{P as V}from"./Pagination-a94d734b.js";import"./index-2e4736b8.js";import"./utils-4fea7fd8.js";function z(e){var r=d.useRef();return d.useEffect(function(){r.current=e}),r.current}var j=G,ee=I,re=1,te=2;function ne(e,r,t,n){var a=t.length,o=a,c=!n;if(e==null)return!o;for(e=Object(e);a--;){var i=t[a];if(c&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=t[a];var l=i[0],u=e[l],f=i[1];if(c&&i[2]){if(u===void 0&&!(l in e))return!1}else{var p=new j;if(n)var g=n(u,f,l,e,r,p);if(!(g===void 0?ee(f,u,re|te,n,p):g))return!1}}return!0}var se=ne,ae=y;function ie(e){return e===e&&!ae(e)}var K=ie,oe=K,le=D;function ce(e){for(var r=le(e),t=r.length;t--;){var n=r[t],a=e[n];r[t]=[n,a,oe(a)]}return r}var ue=ce;function fe(e,r){return function(t){return t==null?!1:t[e]===r&&(r!==void 0||e in Object(t))}}var M=fe,he=se,de=ue,pe=M;function me(e){var r=de(e);return r.length==1&&r[0][2]?pe(r[0][0],r[0][1]):function(t){return t===e||he(t,e,r)}}var ye=me;function ve(e,r){return e!=null&&r in Object(e)}var ge=ve,_e=v,be=J,xe=w,Pe=C,Ne=Q,$e=m;function Ae(e,r,t){r=_e(r,e);for(var n=-1,a=r.length,o=!1;++n<a;){var c=$e(r[n]);if(!(o=e!=null&&t(e,c)))break;e=e[c]}return o||++n!=a?o:(a=e==null?0:e.length,!!a&&Ne(a)&&Pe(c,a)&&(xe(e)||be(e)))}var Ie=Ae,we=ge,Oe=Ie;function Se(e,r){return e!=null&&Oe(e,r,we)}var Ce=Se,Ke=I,Me=X,Ee=Ce,Le=O,Re=K,Ge=M,De=m,Fe=1,qe=2;function Te(e,r){return Le(e)&&Re(r)?Ge(De(e),r):function(t){var n=Me(t,e);return n===void 0&&n===r?Ee(t,e):Ke(r,n,Fe|qe)}}var Be=Te;function Ue(e){return function(r){return r==null?void 0:r[e]}}var ke=Ue,He=S;function Je(e){return function(r){return He(r,e)}}var Qe=Je,We=ke,Xe=Qe,Ye=O,Ze=m;function Ve(e){return Ye(e)?We(Ze(e)):Xe(e)}var ze=Ve,je=ye,er=Be,rr=Y,tr=w,nr=ze;function sr(e){return typeof e=="function"?e:e==null?rr:typeof e=="object"?tr(e)?er(e[0],e[1]):je(e):nr(e)}var ar=sr,x=L;function ir(e,r,t){r=="__proto__"&&x?x(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var or=ir,lr=or,cr=W,ur=Object.prototype,fr=ur.hasOwnProperty;function hr(e,r,t){var n=e[r];(!(fr.call(e,r)&&cr(n,t))||t===void 0&&!(r in e))&&lr(e,r,t)}var dr=hr,pr=dr,mr=v,yr=C,P=y,vr=m;function gr(e,r,t,n){if(!P(e))return e;r=mr(r,e);for(var a=-1,o=r.length,c=o-1,i=e;i!=null&&++a<o;){var l=vr(r[a]),u=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(a!=c){var f=i[l];u=n?n(f,l,i):void 0,u===void 0&&(u=P(f)?f:yr(r[a+1])?[]:{})}pr(i,l,u),i=i[l]}return e}var _r=gr,br=S,xr=_r,Pr=v;function Nr(e,r,t){for(var n=-1,a=r.length,o={};++n<a;){var c=r[n],i=br(e,c);t(i,c)&&xr(o,Pr(c,e),i)}return o}var $r=Nr,Ar=F,Ir=Ar(Object.getPrototypeOf,Object),wr=Ir,Or=Z,Sr=wr,Cr=q,Kr=T,Mr=Object.getOwnPropertySymbols,Er=Mr?function(e){for(var r=[];e;)Or(r,Cr(e)),e=Sr(e);return r}:Kr,Lr=Er;function Rr(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Gr=Rr,Dr=y,Fr=B,qr=Gr,Tr=Object.prototype,Br=Tr.hasOwnProperty;function Ur(e){if(!Dr(e))return qr(e);var r=Fr(e),t=[];for(var n in e)n=="constructor"&&(r||!Br.call(e,n))||t.push(n);return t}var kr=Ur,Hr=U,Jr=kr,Qr=k;function Wr(e){return Qr(e)?Hr(e,!0):Jr(e)}var Xr=Wr,Yr=H,Zr=Lr,Vr=Xr;function zr(e){return Yr(e,Vr,Zr)}var jr=zr,et=R,rt=ar,tt=$r,nt=jr;function st(e,r){if(e==null)return{};var t=et(nt(e),function(n){return[n]});return r=rt(r),tt(e,t,function(n,a){return r(n,a[0])})}var N=st;const at=()=>{const{filters:e}=$().props,[r,t]=d.useState(!1),[n,a]=d.useState({search:e.search||"",trashed:e.trashed||""}),o=z(n);function c(){a({search:"",trashed:""})}d.useEffect(()=>{if(o){const l=Object.keys(N(n)).length?N(n):{remember:"forget"};A.get(route(route().current()),l,{replace:!0,preserveState:!0})}},[n]);function i(l){const u=l.target.name,f=l.target.value;a(p=>({...p,[u]:f})),r&&t(!1)}return h("div",{className:"flex items-center w-full",children:[s("div",{className:"relative flex w-48 bg-white rounded shadow",children:s("input",{className:"relative w-48 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400",autoComplete:"off",type:"text",name:"search",value:n.search,onChange:i,placeholder:"Search…"})}),s("button",{onClick:c,className:"ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none",type:"button",children:"Reset"})]})},it=()=>{const{chefs:e,user_permissions:r}=$().props,{data:t,meta:{links:n}}=e,a=o=>(confirm("Are you sure you want to delete this chef?")&&A.delete(route("chef.destroy",o)),!0);return h("div",{children:[s("h1",{className:"mb-8 text-3xl font-bold",children:"Chefs"}),isUserPermittedToPerformAction("access::chef-create",r)&&h("div",{className:"flex items-center justify-between mb-6",children:[s(at,{}),h(_,{className:"btn-indigo focus:outline-none",href:route("chef.create"),children:[s("span",{children:"Add New "}),s("span",{className:"hidden md:inline",children:"Chef"})]})]}),s("div",{className:"overflow-x-auto bg-white rounded shadow p-3",children:h("table",{className:"w-full whitespace-nowrap",children:[s("thead",{children:h("tr",{className:"font-bold text-left",children:[s("th",{className:"px-6 pt-5 pb-4",children:"No"}),s("th",{className:"px-6 pt-5 pb-4",children:"Name"}),s("th",{className:"px-6 pt-5 pb-4",children:"Phone"}),s("th",{className:"px-6 pt-5 pb-4",children:"Address"}),s("th",{className:"px-6 pt-5 pb-4",children:"Status"}),s("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),h("tbody",{children:[t.map(({id:o,name:c,address:i,phone:l,status:u},f)=>h("tr",{className:"hover:bg-gray-100 focus-within:bg-gray-100",children:[s("td",{className:"border",children:s("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:f+1})}),s("td",{className:"border",children:s("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:c})}),s("td",{className:"border",children:s("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:l})}),s("td",{className:"border",children:s("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:i})}),s("td",{className:"border",children:s("p",{className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:u})}),s("td",{className:"w-px border px-4 py-3 whitespace-nowrap",children:h("div",{className:"flex items-center gap-4 justify-end",children:[isUserPermittedToPerformAction("access::chef-edit",r)&&s(_,{href:route("chef.edit",o),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:s(b,{name:"FaEdit",className:"w-6 h-4 text-gray-400 fill-current"})}),isUserPermittedToPerformAction("access::chef-delete",r)&&s("button",{onClick:()=>a(o),className:"inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline",children:s(b,{name:"FaTrashAlt",className:"w-6 h-4 text-gray-400 fill-current"})})]})})]},o)),t.length===0&&s("tr",{children:s("td",{className:"px-6 py-4 border",colSpan:"4",children:"No Chef found."})})]})]})}),s(V,{links:n})]})};it.layout=e=>s(E,{title:"Chef",children:e});export{it as default};