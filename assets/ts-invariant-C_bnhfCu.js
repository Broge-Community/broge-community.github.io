import{b as u}from"./tslib-ClpBgQBz.js";var i="Invariant Violation",a=Object.setPrototypeOf,c=a===void 0?function(r,o){return r.__proto__=o,r}:a,p=function(r){u(o,r);function o(t){t===void 0&&(t=i);var n=r.call(this,typeof t=="number"?i+": "+t+" (see https://github.com/apollographql/invariant-packages)":t)||this;return n.framesToPop=1,n.name=i,c(n,o.prototype),n}return o}(Error);function l(r,o){if(!r)throw new p(o)}var f=["debug","log","warn","error","silent"],s=f.indexOf("log");function e(r){return function(){if(f.indexOf(r)>=s){var o=console[r]||console.log;return o.apply(console,arguments)}}}(function(r){r.debug=e("debug"),r.log=e("log"),r.warn=e("warn"),r.error=e("error")})(l||(l={}));export{p as I,l as i};
