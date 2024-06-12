import{s as I}from"./strict-uri-encode-DdzwWRIL.js";import{d as w}from"./decode-uri-component-CROxjmim.js";import{s as C}from"./split-on-first-BNP3K2Fc.js";import{f as q}from"./filter-obj-DG2z_hf8.js";var V={};(function(s){const h=I,j=w,l=C,N=q,$=r=>r==null,u=Symbol("encodeFragmentIdentifier");function A(r){switch(r.arrayFormat){case"index":return e=>(n,t)=>{const a=n.length;return t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,[c(e,r),"[",a,"]"].join("")]:[...n,[c(e,r),"[",c(a,r),"]=",c(t,r)].join("")]};case"bracket":return e=>(n,t)=>t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,[c(e,r),"[]"].join("")]:[...n,[c(e,r),"[]=",c(t,r)].join("")];case"colon-list-separator":return e=>(n,t)=>t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,[c(e,r),":list="].join("")]:[...n,[c(e,r),":list=",c(t,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e=r.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(t,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?t:(a=a===null?"":a,t.length===0?[[c(n,r),e,c(a,r)].join("")]:[[t,c(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(n,t)=>t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,c(e,r)]:[...n,[c(e,r),"=",c(t,r)].join("")]}}function o(r){let e;switch(r.arrayFormat){case"index":return(n,t,a)=>{if(e=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),!e){a[n]=t;return}a[n]===void 0&&(a[n]={}),a[n][e[1]]=t};case"bracket":return(n,t,a)=>{if(e=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),!e){a[n]=t;return}if(a[n]===void 0){a[n]=[t];return}a[n]=[].concat(a[n],t)};case"colon-list-separator":return(n,t,a)=>{if(e=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!e){a[n]=t;return}if(a[n]===void 0){a[n]=[t];return}a[n]=[].concat(a[n],t)};case"comma":case"separator":return(n,t,a)=>{const i=typeof t=="string"&&t.includes(r.arrayFormatSeparator),f=typeof t=="string"&&!i&&m(t,r).includes(r.arrayFormatSeparator);t=f?m(t,r):t;const d=i||f?t.split(r.arrayFormatSeparator).map(E=>m(E,r)):t===null?t:m(t,r);a[n]=d};case"bracket-separator":return(n,t,a)=>{const i=/(\[\])$/.test(n);if(n=n.replace(/\[\]$/,""),!i){a[n]=t&&m(t,r);return}const f=t===null?[]:t.split(r.arrayFormatSeparator).map(d=>m(d,r));if(a[n]===void 0){a[n]=f;return}a[n]=[].concat(a[n],f)};default:return(n,t,a)=>{if(a[n]===void 0){a[n]=t;return}a[n]=[].concat(a[n],t)}}}function g(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function c(r,e){return e.encode?e.strict?h(r):encodeURIComponent(r):r}function m(r,e){return e.decode?j(r):r}function F(r){return Array.isArray(r)?r.sort():typeof r=="object"?F(Object.keys(r)).sort((e,n)=>Number(e)-Number(n)).map(e=>r[e]):r}function y(r){const e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function U(r){let e="";const n=r.indexOf("#");return n!==-1&&(e=r.slice(n)),e}function b(r){r=y(r);const e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function S(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function O(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),g(e.arrayFormatSeparator);const n=o(e),t=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return t;for(const a of r.split("&")){if(a==="")continue;let[i,f]=l(e.decode?a.replace(/\+/g," "):a,"=");f=f===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?f:m(f,e),n(m(i,e),f,t)}for(const a of Object.keys(t)){const i=t[a];if(typeof i=="object"&&i!==null)for(const f of Object.keys(i))i[f]=S(i[f],e);else t[a]=S(i,e)}return e.sort===!1?t:(e.sort===!0?Object.keys(t).sort():Object.keys(t).sort(e.sort)).reduce((a,i)=>{const f=t[i];return f&&typeof f=="object"&&!Array.isArray(f)?a[i]=F(f):a[i]=f,a},Object.create(null))}s.extract=b,s.parse=O,s.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),g(e.arrayFormatSeparator);const n=f=>e.skipNull&&$(r[f])||e.skipEmptyString&&r[f]==="",t=A(e),a={};for(const f of Object.keys(r))n(f)||(a[f]=r[f]);const i=Object.keys(a);return e.sort!==!1&&i.sort(e.sort),i.map(f=>{const d=r[f];return d===void 0?"":d===null?c(f,e):Array.isArray(d)?d.length===0&&e.arrayFormat==="bracket-separator"?c(f,e)+"[]":d.reduce(t(f),[]).join("&"):c(f,e)+"="+c(d,e)}).filter(f=>f.length>0).join("&")},s.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[n,t]=l(r,"#");return Object.assign({url:n.split("?")[0]||"",query:O(b(r),e)},e&&e.parseFragmentIdentifier&&t?{fragmentIdentifier:m(t,e)}:{})},s.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[u]:!0},e);const n=y(r.url).split("?")[0]||"",t=s.extract(r.url),a=s.parse(t,{sort:!1}),i=Object.assign(a,r.query);let f=s.stringify(i,e);f&&(f=`?${f}`);let d=U(r.url);return r.fragmentIdentifier&&(d=`#${e[u]?c(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${n}${f}${d}`},s.pick=(r,e,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[u]:!1},n);const{url:t,query:a,fragmentIdentifier:i}=s.parseUrl(r,n);return s.stringifyUrl({url:t,query:N(a,e),fragmentIdentifier:i},n)},s.exclude=(r,e,n)=>{const t=Array.isArray(e)?a=>!e.includes(a):(a,i)=>!e(a,i);return s.pick(r,t,n)}})(V);export{V as q};
//# sourceMappingURL=query-string-SCOpAa9y.js.map
