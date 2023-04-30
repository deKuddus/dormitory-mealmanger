import{_ as K,K as z,j as c,a as o,f as V}from"./app-aabd3ed4.js";import{A as D}from"./AuthenticatedLayout-25354546.js";import{L as E}from"./LoadingButton-e21f4e9c.js";import{T as G}from"./TextInput-baa55968.js";import{i as h,p as H,l as O,a as M,f as U}from"./_getTag-68d150ad.js";import{i as T,_ as J,a as Y,b as B}from"./_defineProperty-112cd4a6.js";import{_ as C,a as X}from"./_isIndex-bb96cf02.js";import"./Logo-25d59469.js";import"./index-1f6f7bd3.js";var q=h,Q=T,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/;function re(e,r){if(q(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Q(e)?!0:ee.test(e)||!Z.test(e)||r!=null&&e in Object(r)}var te=re,ne=J;function ae(e){return e==null?"":ne(e)}var ie=ae,se=h,oe=te,le=Y,_e=ie;function ue(e,r){return se(e)?e:oe(e,r)?[e]:le(_e(e))}var pe=ue,ce=T,fe=1/0;function de(e){if(typeof e=="string"||ce(e))return e;var r=e+"";return r=="0"&&1/e==-fe?"-0":r}var he=de,me=pe,ve=he;function be(e,r){r=me(r,e);for(var t=0,n=r.length;e!=null&&t<n;)e=e[ve(r[t++])];return t&&t==n?e:void 0}var ye=be,ge=ye;function $e(e,r,t){var n=e==null?void 0:ge(e,r);return n===void 0?t:n}var xe=$e;function we(e){return e}var Se=we,Ae=H,g=Object.create,Le=function(){function e(){}return function(r){if(!Ae(r))return{};if(g)return g(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),R=Le;function Ne(){}var b=Ne,Pe=R,Oe=b,Te=4294967295;function f(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Te,this.__views__=[]}f.prototype=Pe(Oe.prototype);f.prototype.constructor=f;var m=f,Ce=R,Re=b;function d(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=void 0}d.prototype=Ce(Re.prototype);d.prototype.constructor=d;var y=d,We=xe;function Fe(e,r){for(var t=-1,n=r.length,a=Array(n),i=e==null;++t<n;)a[t]=i?void 0:We(e,r[t]);return a}var ke=Fe,$=O,je=M,Ie=h,x=$?$.isConcatSpreadable:void 0;function Ke(e){return Ie(e)||je(e)||!!(x&&e&&e[x])}var ze=Ke,Ve=C,De=ze;function W(e,r,t,n,a){var i=-1,_=e.length;for(t||(t=De),a||(a=[]);++i<_;){var l=e[i];r>0&&t(l)?r>1?W(l,r-1,t,n,a):Ve(a,l):n||(a[a.length]=l)}return a}var Ee=W,Ge=Ee;function He(e){var r=e==null?0:e.length;return r?Ge(e,1):[]}var Me=He;function Ue(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var Je=Ue,Ye=Je,w=Math.max;function Be(e,r,t){return r=w(r===void 0?e.length-1:r,0),function(){for(var n=arguments,a=-1,i=w(n.length-r,0),_=Array(i);++a<i;)_[a]=n[r+a];a=-1;for(var l=Array(r+1);++a<r;)l[a]=n[a];return l[r]=t(_),Ye(e,this,l)}}var Xe=Be;function qe(e){return function(){return e}}var Qe=qe,Ze=Qe,S=B,er=Se,rr=S?function(e,r){return S(e,"toString",{configurable:!0,enumerable:!1,value:Ze(r),writable:!0})}:er,tr=rr,nr=800,ar=16,ir=Date.now;function sr(e){var r=0,t=0;return function(){var n=ir(),a=ar-(n-t);if(t=n,a>0){if(++r>=nr)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}var or=sr,lr=tr,_r=or,ur=_r(lr),pr=ur,cr=Me,fr=Xe,dr=pr;function hr(e){return dr(fr(e,void 0,cr),e+"")}var mr=hr;function vr(e,r){return r(e)}var br=vr,yr=m,gr=y,$r=ke,xr=mr,wr=X,Sr=br;xr(function(e){var r=e.length,t=r?e[0]:0,n=this.__wrapped__,a=function(i){return $r(i,e)};return r>1||this.__actions__.length||!(n instanceof yr)||!wr(t)?this.thru(a):(n=n.slice(t,+t+(r?1:0)),n.__actions__.push({func:Sr,args:[a],thisArg:void 0}),new gr(n,this.__chain__).thru(function(i){return r&&!i.length&&i.push(void 0),i}))});function Ar(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}var Lr=Ar,Nr=m,Pr=y,Or=Lr;function Tr(e){if(e instanceof Nr)return e.clone();var r=new Pr(e.__wrapped__,e.__chain__);return r.__actions__=Or(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}var Cr=Tr,Rr=m,A=y,Wr=b,Fr=h,kr=U,jr=Cr,Ir=Object.prototype,Kr=Ir.hasOwnProperty;function v(e){if(kr(e)&&!Fr(e)&&!(e instanceof Rr)){if(e instanceof A)return e;if(Kr.call(e,"__wrapped__"))return jr(e)}return new A(e)}v.prototype=Wr.prototype;v.prototype.constructor=v;var L=O;L&&L.iterator;var N={},zr={get exports(){return N},set exports(e){N=e}};function Vr(e,r,t,n){var a=-1,i=e==null?0:e.length;for(n&&i&&(t=e[++a]);++a<i;)t=r(t,e[a],a,e);return t}var Dr=Vr,Er=m,Gr=C,Hr=Dr;function Mr(e,r){var t=e;return t instanceof Er&&(t=t.value()),Hr(r,function(n,a){return a.func.apply(a.thisArg,Gr([n],a.args))},t)}var Ur=Mr,Jr=Ur;function Yr(){return Jr(this.__wrapped__,this.__actions__)}var F=Yr;(function(e){e.exports=F})(zr);var P={},Br={get exports(){return P},set exports(e){P=e}};(function(e){e.exports=F})(Br);const Xr=()=>{const{role:e,permissions:r}=K().props,{data:t,setData:n,errors:a,post:i,processing:_}=z({name:e.name,permissions:e.permissions&&e.permissions.map(({id:s},u)=>s)||[],_method:"PUT"}),l=s=>{s.preventDefault(),i(route("role.update",e.id))},k=r&&r.length?r.map(s=>({value:s.id,label:s.name})):[],j=(s,u)=>{if(s){let p=[...t.permissions,u];n("permissions",p)}else{const p=t.permissions.filter(I=>I!==u);n("permissions",p)}};return c("div",{children:[o("div",{children:c("h1",{className:"mb-4 text-3xl font-bold",children:[o(V,{href:route("role.index"),className:"text-indigo-600 hover:text-indigo-700",children:"Role"}),o("span",{className:"font-medium text-indigo-600",children:" /"}),"Create"]})}),o("div",{className:"w-full overflow-hidden bg-white rounded shadow",children:c("form",{name:"createForm",onSubmit:l,children:[o("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:o(G,{className:"w-full pb-8 pr-6",label:"Name",name:"name",errors:a.name,value:t.name,onChange:s=>n("name",s.target.value)})}),o("div",{className:"flex flex-wrap p-8 -mb-8 -mr-6",children:k.map((s,u)=>o("div",{className:"w-full pb-8 pr-6 md:w-1/2 lg:w-1/4",children:c("label",{className:"flex items-center mt-6 select-none",htmlFor:`permission-${s.value}`,children:[o("input",{name:"permission",id:`permission-${s.value}`,className:"mr-1",type:"checkbox",checked:t.permissions.includes(s.value),onChange:p=>j(p.target.checked,s.value)}),o("span",{className:"text-sm",children:s.label})]})},u))}),o("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:o(E,{loading:_,type:"submit",className:"btn-indigo",children:"Update Role"})})]})})]})};Xr.layout=e=>o(D,{title:"Create Role",children:e});export{Xr as default};
