function i(r,n){for(var t=-1,s=n.length,e=r.length;++t<s;)r[e+t]=n[t];return r}var a=i,o=9007199254740991,f=/^(?:0|[1-9]\d*)$/;function _(r,n){var t=typeof r;return n=n??o,!!n&&(t=="number"||t!="symbol"&&f.test(r))&&r>-1&&r%1==0&&r<n}var d=_;export{d as _,a};
