import{L as tt,M as Q,N as nt,O as rt,P as He,Q as ot,R as X,U as N,x as qe,V as ae,W as st,X as ct}from"./@vue-s9qPEDW9.js";/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof document<"u";function it(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=L(o)?o.map(e):e(o)}return n}const W=()=>{},L=Array.isArray,ze=/#/g,at=/&/g,lt=/\//g,ut=/=/g,ft=/\?/g,Ge=/\+/g,ht=/%5B/g,dt=/%5D/g,Ve=/%5E/g,pt=/%60/g,Ke=/%7B/g,mt=/%7C/g,Ue=/%7D/g,gt=/%20/g;function me(e){return encodeURI(""+e).replace(mt,"|").replace(ht,"[").replace(dt,"]")}function vt(e){return me(e).replace(Ke,"{").replace(Ue,"}").replace(Ve,"^")}function he(e){return me(e).replace(Ge,"%2B").replace(gt,"+").replace(ze,"%23").replace(at,"%26").replace(pt,"`").replace(Ke,"{").replace(Ue,"}").replace(Ve,"^")}function yt(e){return he(e).replace(ut,"%3D")}function Rt(e){return me(e).replace(ze,"%23").replace(ft,"%3F")}function Et(e){return e==null?"":Rt(e).replace(lt,"%2F")}function Y(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pt=/\/$/,wt=e=>e.replace(Pt,"");function ue(e,t,n="/"){let r,o={},u="",d="";const g=t.indexOf("#");let i=t.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=t.slice(0,i),u=t.slice(i+1,g>-1?g:t.length),o=e(u)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=kt(r??t,n),{fullPath:r+(u&&"?")+u+d,path:r,query:o,hash:Y(d)}}function St(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&De(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function De(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ct(e[n],t[n]))return!1;return!0}function Ct(e,t){return L(e)?be(e,t):L(t)?be(t,e):e===t}function be(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function kt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let u=n.length-1,d,g;for(d=0;d<r.length;d++)if(g=r[d],g!==".")if(g==="..")u>1&&u--;else break;return n.slice(0,u).join("/")+"/"+r.slice(d).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function At(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),wt(e)}const _t=/^[^#]+#/;function Ot(e,t){return e.replace(_t,"#")+t}function xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function Mt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function Lt(e,t){de.set(e,t)}function Nt(e){const t=de.get(e);return de.delete(e),t}let It=()=>location.protocol+"//"+location.host;function Qe(e,t){const{pathname:n,search:r,hash:o}=t,u=e.indexOf("#");if(u>-1){let g=o.includes(e.slice(u))?e.slice(u).length:1,i=o.slice(g);return i[0]!=="/"&&(i="/"+i),Se(i,"")}return Se(n,e)+r+o}function Tt(e,t,n,r){let o=[],u=[],d=null;const g=({state:a})=>{const m=Qe(e,location),R=n.value,k=t.value;let C=0;if(a){if(n.value=m,t.value=a,d&&d===R){d=null;return}C=k?a.position-k.position:0}else r(m);o.forEach(E=>{E(n.value,R,{delta:C,type:Z.pop,direction:C?C>0?F.forward:F.back:F.unknown})})};function i(){d=n.value}function f(a){o.push(a);const m=()=>{const R=o.indexOf(a);R>-1&&o.splice(R,1)};return u.push(m),m}function s(){const{history:a}=window;a.state&&a.replaceState(S({},a.state,{scroll:te()}),"")}function l(){for(const a of u)a();u=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:i,listen:f,destroy:l}}function ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function $t(e){const{history:t,location:n}=window,r={value:Qe(e,n)},o={value:t.state};o.value||u(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function u(i,f,s){const l=e.indexOf("#"),a=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+i:It()+e+i;try{t[s?"replaceState":"pushState"](f,"",a),o.value=f}catch(m){console.error(m),n[s?"replace":"assign"](a)}}function d(i,f){const s=S({},t.state,ke(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});u(i,s,!0),r.value=i}function g(i,f){const s=S({},o.value,t.state,{forward:i,scroll:te()});u(s.current,s,!0);const l=S({},ke(r.value,i,null),{position:s.position+1},f);u(i,l,!1),r.value=i}return{location:r,state:o,push:g,replace:d}}function un(e){e=At(e);const t=$t(e),n=Tt(e,t.state,t.location,t.replace);function r(u,d=!0){d||n.pauseListeners(),history.go(u)}const o=S({location:"",base:e,go:r,createHref:Ot.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function jt(e){return typeof e=="string"||e&&typeof e=="object"}function We(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fe=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function G(e,t){return S(new Error,{type:e,[Fe]:!0},t)}function T(e,t){return e instanceof Error&&Fe in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",Bt={sensitive:!1,strict:!1,start:!0,end:!0},Ht=/[.+*?^${}()[\]/\\]/g;function qt(e,t){const n=S({},Bt,t),r=[];let o=n.start?"^":"";const u=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let l=0;l<f.length;l++){const a=f[l];let m=40+(n.sensitive?.25:0);if(a.type===0)l||(o+="/"),o+=a.value.replace(Ht,"\\$&"),m+=40;else if(a.type===1){const{value:R,repeatable:k,optional:C,regexp:E}=a;u.push({name:R,repeatable:k,optional:C});const P=E||_e;if(P!==_e){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let O=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;l||(O=C&&f.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),o+=O,m+=20,C&&(m+=-8),k&&(m+=-20),P===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function g(f){const s=f.match(d),l={};if(!s)return null;for(let a=1;a<s.length;a++){const m=s[a]||"",R=u[a-1];l[R.name]=m&&R.repeatable?m.split("/"):m}return l}function i(f){let s="",l=!1;for(const a of e){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const m of a)if(m.type===0)s+=m.value;else if(m.type===1){const{value:R,repeatable:k,optional:C}=m,E=R in f?f[R]:"";if(L(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=L(E)?E.join("/"):E;if(!P)if(C)a.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${R}"`);s+=P}}return s||"/"}return{re:d,score:r,keys:u,parse:g,stringify:i}}function zt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Gt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const u=zt(r[n],o[n]);if(u)return u;n++}if(Math.abs(o.length-r.length)===1){if(Oe(r))return 1;if(Oe(o))return-1}return o.length-r.length}function Oe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vt={type:0,value:""},Kt=/[a-zA-Z0-9_]/;function Ut(e){if(!e)return[[]];if(e==="/")return[[Vt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const o=[];let u;function d(){u&&o.push(u),u=[]}let g=0,i,f="",s="";function l(){f&&(n===0?u.push({type:0,value:f}):n===1||n===2||n===3?(u.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:f,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function a(){f+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&l(),d()):i===":"?(l(),n=1):a();break;case 4:a(),n=r;break;case 1:i==="("?n=2:Kt.test(i)?a():(l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),l(),d(),o}function Dt(e,t,n){const r=qt(Ut(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Qt(e,t){const n=[],r=new Map;t=Le({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function u(s,l,a){const m=!a,R=Wt(s);R.aliasOf=a&&a.record;const k=Le(t,s),C=[R];if("alias"in s){const O=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of O)C.push(S({},R,{components:a?a.record.components:R.components,path:M,aliasOf:a?a.record:R}))}let E,P;for(const O of C){const{path:M}=O;if(l&&M[0]!=="/"){const B=l.record.path,I=B[B.length-1]==="/"?"":"/";O.path=l.record.path+(M&&I+M)}if(E=Dt(O,l,k),a?a.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),m&&s.name&&!Me(E)&&d(s.name)),R.children){const B=R.children;for(let I=0;I<B.length;I++)u(B[I],E,a&&a.children[I])}a=a||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return P?()=>{d(P)}:W}function d(s){if(We(s)){const l=r.get(s);l&&(r.delete(s),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(s);l>-1&&(n.splice(l,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function g(){return n}function i(s){let l=0;for(;l<n.length&&Gt(s,n[l])>=0&&(s.record.path!==n[l].record.path||!Xe(s,n[l]));)l++;n.splice(l,0,s),s.record.name&&!Me(s)&&r.set(s.record.name,s)}function f(s,l){let a,m={},R,k;if("name"in s&&s.name){if(a=r.get(s.name),!a)throw G(1,{location:s});k=a.record.name,m=S(xe(l.params,a.keys.filter(P=>!P.optional).concat(a.parent?a.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),s.params&&xe(s.params,a.keys.map(P=>P.name))),R=a.stringify(m)}else if(s.path!=null)R=s.path,a=n.find(P=>P.re.test(R)),a&&(m=a.parse(R),k=a.record.name);else{if(a=l.name?r.get(l.name):n.find(P=>P.re.test(l.path)),!a)throw G(1,{location:s,currentLocation:l});k=a.record.name,m=S({},l.params,s.params),R=a.stringify(m)}const C=[];let E=a;for(;E;)C.unshift(E.record),E=E.parent;return{name:k,path:R,params:m,matched:C,meta:Xt(C)}}return e.forEach(s=>u(s)),{addRoute:u,resolve:f,removeRoute:d,getRoutes:g,getRecordMatcher:o}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ft(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ft(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xt(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Xe(e,t){return t.children.some(n=>n===e||Xe(e,n))}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const u=r[o].replace(Ge," "),d=u.indexOf("="),g=Y(d<0?u:u.slice(0,d)),i=d<0?null:Y(u.slice(d+1));if(g in t){let f=t[g];L(f)||(f=t[g]=[f]),f.push(i)}else t[g]=i}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=yt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(u=>u&&he(u)):[r&&he(r)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+n,u!=null&&(t+="="+u))})}return t}function Zt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Jt=Symbol(""),Ie=Symbol(""),ge=Symbol(""),Ye=Symbol(""),pe=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function j(e,t,n,r,o,u=d=>d()){const d=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,i)=>{const f=a=>{a===!1?i(G(4,{from:n,to:t})):a instanceof Error?i(a):jt(a)?i(G(2,{from:t,to:a})):(d&&r.enterCallbacks[o]===d&&typeof a=="function"&&d.push(a),g())},s=u(()=>e.call(r&&r.instances[o],t,n,f));let l=Promise.resolve(s);e.length<3&&(l=l.then(f)),l.catch(a=>i(a))})}function fe(e,t,n,r,o=u=>u()){const u=[];for(const d of e)for(const g in d.components){let i=d.components[g];if(!(t!=="beforeRouteEnter"&&!d.instances[g]))if(en(i)){const s=(i.__vccOpts||i)[t];s&&u.push(j(s,n,r,d,g,o))}else{let f=i();u.push(()=>f.then(s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${d.path}"`));const l=it(s)?s.default:s;d.components[g]=l;const m=(l.__vccOpts||l)[t];return m&&j(m,n,r,d,g,o)()}))}}return u}function en(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=X(ge),n=X(Ye),r=N(()=>{const i=Q(e.to);return t.resolve(i)}),o=N(()=>{const{matched:i}=r.value,{length:f}=i,s=i[f-1],l=n.matched;if(!s||!l.length)return-1;const a=l.findIndex(z.bind(null,s));if(a>-1)return a;const m=$e(i[f-2]);return f>1&&$e(s)===m&&l[l.length-1].path!==m?l.findIndex(z.bind(null,i[f-2])):a}),u=N(()=>o.value>-1&&on(n.params,r.value.params)),d=N(()=>o.value>-1&&o.value===n.matched.length-1&&De(n.params,r.value.params));function g(i={}){return rn(i)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:u,isExactActive:d,navigate:g}}const tn=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=ot(Te(e)),{options:r}=X(ge),o=N(()=>({[je(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[je(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const u=t.default&&t.default(n);return e.custom?u:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},u)}}}),nn=tn;function rn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function on(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((u,d)=>u!==o[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const je=(e,t,n)=>e??t??n,sn=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=X(pe),o=N(()=>e.route||r.value),u=X(Ie,0),d=N(()=>{let f=Q(u);const{matched:s}=o.value;let l;for(;(l=s[f])&&!l.components;)f++;return f}),g=N(()=>o.value.matched[d.value]);ae(Ie,N(()=>d.value+1)),ae(Jt,g),ae(pe,o);const i=st();return ct(()=>[i.value,g.value,e.name],([f,s,l],[a,m,R])=>{s&&(s.instances[l]=f,m&&m!==s&&f&&f===a&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),f&&s&&(!m||!z(s,m)||!a)&&(s.enterCallbacks[l]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,l=g.value,a=l&&l.components[s];if(!a)return Be(n.default,{Component:a,route:f});const m=l.props[s],R=m?m===!0?f.params:typeof m=="function"?m(f):m:null,C=qe(a,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[s]=null)},ref:i}));return Be(n.default,{Component:C,route:f})||C}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cn=sn;function fn(e){const t=Qt(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Ne,o=e.history,u=D(),d=D(),g=D(),i=tt($);let f=$;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=le.bind(null,c=>""+c),l=le.bind(null,Et),a=le.bind(null,Y);function m(c,p){let h,v;return We(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(c=>c.record)}function C(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||i.value),typeof c=="string"){const y=ue(n,c,p.path),_=t.resolve({path:y.path},p),U=o.createHref(y.fullPath);return S(y,_,{params:a(_.params),hash:Y(y.hash),redirectedFrom:void 0,href:U})}let h;if(c.path!=null)h=S({},c,{path:ue(n,c.path,p.path).path});else{const y=S({},c.params);for(const _ in y)y[_]==null&&delete y[_];h=S({},c,{params:l(y)}),p.params=l(p.params)}const v=t.resolve(h,p),b=c.hash||"";v.params=s(a(v.params));const A=St(r,S({},c,{hash:vt(b),path:v.path})),w=o.createHref(A);return S({fullPath:A,hash:b,query:r===Ne?Zt(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?ue(n,c,i.value.path):S({},c)}function O(c,p){if(f!==c)return G(8,{from:p,to:c})}function M(c){return V(c)}function B(c){return M(S(P(c),{replace:!0}))}function I(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:v.path!=null?{}:c.params},v)}}function V(c,p){const h=f=E(c),v=i.value,b=c.state,A=c.force,w=c.replace===!0,y=I(h);if(y)return V(S(P(y),{state:typeof y=="object"?S({},b,y.state):b,force:A,replace:w}),p||h);const _=h;_.redirectedFrom=p;let U;return!A&&bt(r,v,h)&&(U=G(16,{to:_,from:v}),Pe(v,v,!0,!1)),(U?Promise.resolve(U):ve(_,v)).catch(x=>T(x)?T(x,2)?x:se(x):oe(x,_,v)).then(x=>{if(x){if(T(x,2))return V(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},b,x.to.state):b,force:A}),p||_)}else x=Re(_,v,!0,w,b);return ye(_,v,x),x})}function Ze(c,p){const h=O(c,p);return h?Promise.reject(h):Promise.resolve()}function ne(c){const p=ee.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(c):c()}function ve(c,p){let h;const[v,b,A]=an(c,p);h=fe(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(_=>{h.push(j(_,c,p))});const w=Ze.bind(null,c,p);return h.push(w),H(h).then(()=>{h=[];for(const y of u.list())h.push(j(y,c,p));return h.push(w),H(h)}).then(()=>{h=fe(b,"beforeRouteUpdate",c,p);for(const y of b)y.updateGuards.forEach(_=>{h.push(j(_,c,p))});return h.push(w),H(h)}).then(()=>{h=[];for(const y of A)if(y.beforeEnter)if(L(y.beforeEnter))for(const _ of y.beforeEnter)h.push(j(_,c,p));else h.push(j(y.beforeEnter,c,p));return h.push(w),H(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",c,p,ne),h.push(w),H(h))).then(()=>{h=[];for(const y of d.list())h.push(j(y,c,p));return h.push(w),H(h)}).catch(y=>T(y,8)?y:Promise.reject(y))}function ye(c,p,h){g.list().forEach(v=>ne(()=>v(c,p,h)))}function Re(c,p,h,v,b){const A=O(c,p);if(A)return A;const w=p===$,y=q?history.state:{};h&&(v||w?o.replace(c.fullPath,S({scroll:w&&y&&y.scroll},b)):o.push(c.fullPath,b)),i.value=c,Pe(c,p,h,w),se()}let K;function Je(){K||(K=o.listen((c,p,h)=>{if(!we.listening)return;const v=E(c),b=I(v);if(b){V(S(b,{replace:!0}),v).catch(W);return}f=v;const A=i.value;q&&Lt(Ce(A.fullPath,h.delta),te()),ve(v,A).catch(w=>T(w,12)?w:T(w,2)?(V(w.to,v).then(y=>{T(y,20)&&!h.delta&&h.type===Z.pop&&o.go(-1,!1)}).catch(W),Promise.reject()):(h.delta&&o.go(-h.delta,!1),oe(w,v,A))).then(w=>{w=w||Re(v,A,!1),w&&(h.delta&&!T(w,8)?o.go(-h.delta,!1):h.type===Z.pop&&T(w,20)&&o.go(-1,!1)),ye(v,A,w)}).catch(W)}))}let re=D(),Ee=D(),J;function oe(c,p,h){se(c);const v=Ee.list();return v.length?v.forEach(b=>b(c,p,h)):console.error(c),Promise.reject(c)}function et(){return J&&i.value!==$?Promise.resolve():new Promise((c,p)=>{re.add([c,p])})}function se(c){return J||(J=!c,Je(),re.list().forEach(([p,h])=>c?h(c):p()),re.reset()),c}function Pe(c,p,h,v){const{scrollBehavior:b}=e;if(!q||!b)return Promise.resolve();const A=!h&&Nt(Ce(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return rt().then(()=>b(c,p,A)).then(w=>w&&Mt(w)).catch(w=>oe(w,c,p))}const ce=c=>o.go(c);let ie;const ee=new Set,we={currentRoute:i,listening:!0,addRoute:m,removeRoute:R,hasRoute:C,getRoutes:k,resolve:E,options:e,push:M,replace:B,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:u.add,beforeResolve:d.add,afterEach:g.add,onError:Ee.add,isReady:et,install(c){const p=this;c.component("RouterLink",nn),c.component("RouterView",cn),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),q&&!ie&&i.value===$&&(ie=!0,M(o.location).catch(b=>{}));const h={};for(const b in $)Object.defineProperty(h,b,{get:()=>i.value[b],enumerable:!0});c.provide(ge,p),c.provide(Ye,nt(h)),c.provide(pe,i);const v=c.unmount;ee.add(c),c.unmount=function(){ee.delete(c),ee.size<1&&(f=$,K&&K(),K=null,i.value=$,ie=!1,J=!1),v()}}};function H(c){return c.reduce((p,h)=>p.then(()=>ne(h)),Promise.resolve())}return we}function an(e,t){const n=[],r=[],o=[],u=Math.max(t.matched.length,e.matched.length);for(let d=0;d<u;d++){const g=t.matched[d];g&&(e.matched.find(f=>z(f,g))?r.push(g):n.push(g));const i=e.matched[d];i&&(t.matched.find(f=>z(f,i))||o.push(i))}return[n,r,o]}export{cn as R,un as a,fn as c};
