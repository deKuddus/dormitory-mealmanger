import{b as s}from"./_getTag-f9b0ec05.js";import{i as e,b as a,c as o}from"./_defineProperty-3b091b4b.js";var f=s,y=e,u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;function _(r,t){if(f(r))return!1;var n=typeof r;return n=="number"||n=="symbol"||n=="boolean"||r==null||y(r)?!0:g.test(r)||!u.test(r)||t!=null&&r in Object(t)}var b=_,d=a;function m(r){return r==null?"":d(r)}var P=m,S=s,$=b,c=o,l=P;function p(r,t){return S(r)?r:$(r,t)?[r]:c(l(r))}var K=p,h=e,I=1/0;function T(r){if(typeof r=="string"||h(r))return r;var t=r+"";return t=="0"&&1/r==-I?"-0":t}var v=T,A=K,G=v;function w(r,t){t=A(t,r);for(var n=0,i=t.length;r!=null&&n<i;)r=r[G(t[n++])];return n&&n==i?r:void 0}var x=w,N=x;function D(r,t,n){var i=r==null?void 0:N(r,t);return i===void 0?n:i}var k=D;function F(r){return r}var q=F;export{K as _,v as a,b,x as c,k as g,q as i};