import{r as x}from"./ms-CzQ2E3wO.js";var w={exports:{}};function I(u){e.debug=e,e.default=e,e.coerce=m,e.disable=p,e.enable=g,e.enabled=b,e.humanize=x(),e.destroy=r,Object.keys(u).forEach(t=>{e[t]=u[t]}),e.names=[],e.skips=[],e.formatters={};function s(t){let n=0;for(let o=0;o<t.length;o++)n=(n<<5)-n+t.charCodeAt(o),n|=0;return e.colors[Math.abs(n)%e.colors.length]}e.selectColor=s;function e(t){let n,o=null,l,y;function C(...i){if(!C.enabled)return;const c=C,f=Number(new Date),A=f-(n||f);c.diff=A,c.prev=n,c.curr=f,n=f,i[0]=e.coerce(i[0]),typeof i[0]!="string"&&i.unshift("%O");let d=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(h,E)=>{if(h==="%%")return"%";d++;const v=e.formatters[E];if(typeof v=="function"){const k=i[d];h=v.call(c,k),i.splice(d,1),d--}return h}),e.formatArgs.call(c,i),(c.log||e.log).apply(c,i)}return C.namespace=t,C.useColors=e.useColors(),C.color=e.selectColor(t),C.extend=F,C.destroy=e.destroy,Object.defineProperty(C,"enabled",{enumerable:!0,configurable:!1,get:()=>o!==null?o:(l!==e.namespaces&&(l=e.namespaces,y=e.enabled(t)),y),set:i=>{o=i}}),typeof e.init=="function"&&e.init(C),C}function F(t,n){const o=e(this.namespace+(typeof n>"u"?":":n)+t);return o.log=this.log,o}function g(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let n;const o=(typeof t=="string"?t:"").split(/[\s,]+/),l=o.length;for(n=0;n<l;n++)o[n]&&(t=o[n].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function p(){const t=[...e.names.map(a),...e.skips.map(a).map(n=>"-"+n)].join(",");return e.enable(""),t}function b(t){if(t[t.length-1]==="*")return!0;let n,o;for(n=0,o=e.skips.length;n<o;n++)if(e.skips[n].test(t))return!1;for(n=0,o=e.names.length;n<o;n++)if(e.names[n].test(t))return!0;return!1}function a(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function m(t){return t instanceof Error?t.stack||t.message:t}function r(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var j=I;(function(u,s){var e={};s.formatArgs=g,s.save=p,s.load=b,s.useColors=F,s.storage=a(),s.destroy=(()=>{let r=!1;return()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),s.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function F(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function g(r){if(r[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+r[0]+(this.useColors?"%c ":" ")+"+"+u.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;r.splice(1,0,t,"color: inherit");let n=0,o=0;r[0].replace(/%[a-zA-Z%]/g,l=>{l!=="%%"&&(n++,l==="%c"&&(o=n))}),r.splice(o,0,t)}s.log=console.debug||console.log||(()=>{});function p(r){try{r?s.storage.setItem("debug",r):s.storage.removeItem("debug")}catch{}}function b(){let r;try{r=s.storage.getItem("debug")}catch{}return!r&&typeof process<"u"&&"env"in process&&(r=e.DEBUG),r}function a(){try{return localStorage}catch{}}u.exports=j(s);const{formatters:m}=u.exports;m.j=function(r){try{return JSON.stringify(r)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}})(w,w.exports);var _=w.exports;export{_ as b};
//# sourceMappingURL=debug-Kk5lNELL.js.map
