import{_ as y,d as h,f as v,g as b,b as g,h as _}from"./_getTag-f9b0ec05.js";function d(r,e){for(var a=-1,t=r==null?0:r.length,n=Array(t);++a<t;)n[a]=e(r[a],a,r);return n}var l=d,T=y,S=h,C="[object Symbol]";function z(r){return typeof r=="symbol"||S(r)&&T(r)==C}var E=z,m=v,M="Expected a function";function o(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(M);var a=function(){var t=arguments,n=e?e.apply(this,t):t[0],i=a.cache;if(i.has(n))return i.get(n);var c=r.apply(this,t);return a.cache=i.set(n,c)||i,c};return a.cache=new(o.Cache||m),a}o.Cache=m;var P=o,$=P,N=500;function A(r){var e=$(r,function(t){return a.size===N&&a.clear(),t}),a=e.cache;return e}var I=A,O=I,j=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,w=/\\(\\)?/g,k=O(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(j,function(a,t,n,i){e.push(n?i.replace(w,"$1"):t||a)}),e}),U=k,s=b,x=l,R=g,F=E,G=1/0,p=s?s.prototype:void 0,f=p?p.toString:void 0;function u(r){if(typeof r=="string")return r;if(R(r))return x(r,u)+"";if(F(r))return f?f.call(r):"";var e=r+"";return e=="0"&&1/r==-G?"-0":e}var Y=u,L=_,X=function(){try{var r=L(Object,"defineProperty");return r({},"",{}),r}catch{}}(),q=X;export{q as _,l as a,Y as b,U as c,E as i};