import{d as ua,c as X,w as ma,h as da}from"./@vue-PMUC4_EU.js";function fn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function u(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?fn(Object(a),!0).forEach(function(e){O(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):fn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xt(t)}function va(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function pa(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function ba(t,n,a){return n&&pa(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Xt(t,n){return ha(t)||ka(t,n)||zn(t,n)||xa()}function ft(t){return ga(t)||ya(t)||zn(t)||wa()}function ga(t){if(Array.isArray(t))return Rt(t)}function ha(t){if(Array.isArray(t))return t}function ya(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ka(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(e.push(o.value),!(n&&e.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function zn(t,n){if(t){if(typeof t=="string")return Rt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Rt(t,n)}}function Rt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function wa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ln=function(){},Kt={},Ln={},Rn=null,jn={mark:ln,measure:ln};try{typeof window<"u"&&(Kt=window),typeof document<"u"&&(Ln=document),typeof MutationObserver<"u"&&(Rn=MutationObserver),typeof performance<"u"&&(jn=performance)}catch{}var Aa=Kt.navigator||{},cn=Aa.userAgent,un=cn===void 0?"":cn,$=Kt,k=Ln,mn=Rn,ut=jn;$.document;var F=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Fn=~un.indexOf("MSIE")||~un.indexOf("Trident/"),mt,dt,vt,pt,bt,L="___FONT_AWESOME___",jt=16,Dn="fa",Yn="svg-inline--fa",V="data-fa-i2svg",Ft="data-fa-pseudo-element",Oa="data-fa-pseudo-element-pending",qt="data-prefix",Zt="data-icon",dn="fontawesome-i2svg",Sa="async",Pa=["HTML","HEAD","STYLE","SCRIPT"],$n=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",Qt=[y,w];function lt(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[y]}})}var et=lt((mt={},O(mt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(mt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),mt)),rt=lt((dt={},O(dt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(dt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),dt)),it=lt((vt={},O(vt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(vt,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),vt)),Ea=lt((pt={},O(pt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(pt,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pt)),Ca=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Un="fa-layers-text",Na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ia=lt((bt={},O(bt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(bt,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),bt)),Hn=[1,2,3,4,5,6,7,8,9,10],_a=Hn.concat([11,12,13,14,15,16,17,18,19,20]),Ta=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[y]).map(ot.add.bind(ot));Object.keys(rt[w]).map(ot.add.bind(ot));var Ma=[].concat(Qt,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(Hn.map(function(t){return"".concat(t,"x")})).concat(_a.map(function(t){return"w-".concat(t)})),nt=$.FontAwesomeConfig||{};function za(t){var n=k.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function La(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var Ra=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ra.forEach(function(t){var n=Xt(t,2),a=n[0],e=n[1],r=La(za(a));r!=null&&(nt[e]=r)})}var Wn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Dn,replacementClass:Yn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var Q=u(u({},Wn),nt);Q.autoReplaceSvg||(Q.observeMutations=!1);var m={};Object.keys(Wn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(a){Q[t]=a,at.forEach(function(e){return e(m)})},get:function(){return Q[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){Q.cssPrefix=n,at.forEach(function(a){return a(m)})},get:function(){return Q.cssPrefix}});$.FontAwesomeConfig=m;var at=[];function ja(t){return at.push(t),function(){at.splice(at.indexOf(t),1)}}var Y=jt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fa(t){if(!(!t||!F)){var n=k.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=k.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return k.head.insertBefore(n,e),t}}var Da="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,n="";t-- >0;)n+=Da[Math.random()*62|0];return n}function J(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function Jt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Bn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ya(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(Bn(t[a]),'" ')},"").trim()}function Pt(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function tn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function $a(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ua(t){var n=t.transform,a=t.width,e=a===void 0?jt:a,r=t.height,i=r===void 0?jt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Fn?f+="translate(".concat(n.x/Y-e/2,"em, ").concat(n.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/Y,"em), calc(-50% + ").concat(n.y/Y,"em)) "):f+="translate(".concat(n.x/Y,"em, ").concat(n.y/Y,"em) "),f+="scale(".concat(n.size/Y*(n.flipX?-1:1),", ").concat(n.size/Y*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Ha=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vn(){var t=Dn,n=Yn,a=m.cssPrefix,e=m.replacementClass,r=Ha;if(a!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var vn=!1;function _t(){m.autoAddCss&&!vn&&(Fa(Vn()),vn=!0)}var Wa={mixout:function(){return{dom:{css:Vn,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},R=$||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var _=R[L],Gn=[],Ba=function t(){k.removeEventListener("DOMContentLoaded",t),At=1,Gn.map(function(n){return n()})},At=!1;F&&(At=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),At||k.addEventListener("DOMContentLoaded",Ba));function Va(t){F&&(At?setTimeout(t,0):Gn.push(t))}function ct(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Bn(t):"<".concat(n," ").concat(Ya(e),">").concat(i.map(ct).join(""),"</").concat(n,">")}function pn(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var Tt=function(n,a,e,r){var i=Object.keys(n),o=i.length,s=a,f,c,l;for(e===void 0?(f=1,l=n[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function Ga(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=t.charCodeAt(a++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function Dt(t){var n=Ga(t);return n.length===1?n[0].toString(16):null}function Xa(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function bn(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Yt(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=bn(n);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(t,bn(n)):_.styles[t]=u(u({},_.styles[t]||{}),i),t==="fas"&&Yt("fa",n)}var gt,ht,yt,K=_.styles,Ka=_.shims,qa=(gt={},O(gt,y,Object.values(it[y])),O(gt,w,Object.values(it[w])),gt),nn=null,Xn={},Kn={},qn={},Zn={},Qn={},Za=(ht={},O(ht,y,Object.keys(et[y])),O(ht,w,Object.keys(et[w])),ht);function Qa(t){return~Ma.indexOf(t)}function Ja(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!Qa(r)?r:null}var Jn=function(){var n=function(i){return Tt(K,function(o,s,f){return o[f]=Tt(s,i,{}),o},{})};Xn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Kn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Qn=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in K||m.autoFetchSvg,e=Tt(Ka,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});qn=e.names,Zn=e.unicodes,nn=Et(m.styleDefault,{family:m.familyDefault})};ja(function(t){nn=Et(t.styleDefault,{family:m.familyDefault})});Jn();function an(t,n){return(Xn[t]||{})[n]}function te(t,n){return(Kn[t]||{})[n]}function B(t,n){return(Qn[t]||{})[n]}function ta(t){return qn[t]||{prefix:null,iconName:null}}function ne(t){var n=Zn[t],a=an("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function U(){return nn}var en=function(){return{prefix:null,iconName:null,rest:[]}};function Et(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?y:a,r=et[e][t],i=rt[e][t]||rt[e][r],o=t in _.styles?t:null;return i||o||null}var gn=(yt={},O(yt,y,Object.keys(it[y])),O(yt,w,Object.keys(it[w])),yt);function Ct(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(n={},O(n,y,"".concat(m.cssPrefix,"-").concat(y)),O(n,w,"".concat(m.cssPrefix,"-").concat(w)),n),o=null,s=y;(t.includes(i[y])||t.some(function(c){return gn[y].includes(c)}))&&(s=y),(t.includes(i[w])||t.some(function(c){return gn[w].includes(c)}))&&(s=w);var f=t.reduce(function(c,l){var d=Ja(m.cssPrefix,l);if(K[l]?(l=qa[s].includes(l)?Ea[s][l]:l,o=l,c.prefix=l):Za[s].indexOf(l)>-1?(o=l,c.prefix=Et(l,{family:s})):d?c.iconName=d:l!==m.replacementClass&&l!==i[y]&&l!==i[w]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var b=o==="fa"?ta(c.iconName):{},g=B(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||g||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},en());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(K.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=B(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var ae=function(){function t(){va(this,t),this.definitions={}}return ba(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Yt(s,o[s]);var f=it[y][s];f&&Yt(f,o[s]),Jn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(a[s][d]=c)}),a[s][f]=c}),a}}]),t}(),hn=[],q={},Z={},ee=Object.keys(Z);function re(t,n){var a=n.mixoutsTo;return hn=t,q={},Object.keys(Z).forEach(function(e){ee.indexOf(e)===-1&&delete Z[e]}),hn.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),xt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}e.provides&&e.provides(Z)}),a}function $t(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function G(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=q[t]||[];r.forEach(function(i){i.apply(null,a)})}function j(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,n):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||U();if(n)return n=B(a,n)||n,pn(na.definitions,a,n)||pn(_.styles,a,n)}var na=new ae,ie=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},oe={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(G("beforeI2svg",n),j("pseudoElements2svg",n),j("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Va(function(){fe({autoReplaceSvgRoot:a}),G("watch",n)})}},se={icon:function(n){if(n===null)return null;if(xt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:B(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=Et(n[0]);return{prefix:e,iconName:B(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Ca))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=U();return{prefix:i,iconName:B(i,n)||n}}}},N={noAuto:ie,config:m,dom:oe,parse:se,library:na,findIconDefinition:Ut,toHtml:ct},fe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?k:a;(Object.keys(_.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&N.dom.i2svg({node:e})};function Nt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return ct(e)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var e=k.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function le(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(tn(o)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=Pt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ce(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function rn(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,d=t.extra,b=t.watchable,g=b===void 0?!1:b,S=e.found?e:a,P=S.width,E=S.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},x=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};g&&(h.attributes[V]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[f]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:a,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},x),d.styles)}),T=e.found&&a.found?j("generateAbstractMask",A)||{children:[],attributes:{}}:j("generateAbstractIcon",A)||{children:[],attributes:{}},I=T.children,It=T.attributes;return A.children=I,A.attributes=It,s?ce(A):le(A)}function yn(t){var n=t.content,a=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[V]="");var l=u({},o.styles);tn(r)&&(l.transform=Ua({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var d=Pt(l);d.length>0&&(c.style=d);var b=[];return b.push({tag:"span",attributes:c,children:[n]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function ue(t){var n=t.content,a=t.title,e=t.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=Pt(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Mt=_.styles;function Ht(t){var n=t[0],a=t[1],e=t.slice(4),r=Xt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:o}}var me={found:!1,width:512,height:512};function de(t,n){!$n&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Wt(t,n){var a=n;return n==="fa"&&m.styleDefault!==null&&(n=U()),new Promise(function(e,r){if(j("missingIconAbstract"),a==="fa"){var i=ta(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){var o=Mt[n][t];return e(Ht(o))}de(t,n),e(u(u({},me),{},{icon:m.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}var kn=function(){},Bt=m.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:kn,measure:kn},tt='FA "6.5.2"',ve=function(n){return Bt.mark("".concat(tt," ").concat(n," begins")),function(){return aa(n)}},aa=function(n){Bt.mark("".concat(tt," ").concat(n," ends")),Bt.measure("".concat(tt," ").concat(n),"".concat(tt," ").concat(n," begins"),"".concat(tt," ").concat(n," ends"))},on={begin:ve,end:aa},kt=function(){};function wn(t){var n=t.getAttribute?t.getAttribute(V):null;return typeof n=="string"}function pe(t){var n=t.getAttribute?t.getAttribute(qt):null,a=t.getAttribute?t.getAttribute(Zt):null;return n&&a}function be(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function ge(){if(m.autoReplaceSvg===!0)return wt.replace;var t=wt[m.autoReplaceSvg];return t||wt.replace}function he(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function ye(t){return k.createElement(t)}function ea(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?he:ye:a;if(typeof t=="string")return k.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ea(o,{ceFn:e}))}),r}function ke(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var wt={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(ea(r),a)}),a.getAttribute(V)===null&&m.keepOriginalSource){var e=k.createComment(ke(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~Jt(a).indexOf(m.replacementClass))return wt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ct(s)}).join(`
`);a.setAttribute(V,""),a.innerHTML=o}};function xn(t){t()}function ra(t,n){var a=typeof n=="function"?n:kt;if(t.length===0)a();else{var e=xn;m.mutateApproach===Sa&&(e=$.requestAnimationFrame||xn),e(function(){var r=ge(),i=on.begin("mutate");t.map(r),i(),a()})}}var sn=!1;function ia(){sn=!0}function Vt(){sn=!1}var Ot=null;function An(t){if(mn&&m.observeMutations){var n=t.treeCallback,a=n===void 0?kt:n,e=t.nodeCallback,r=e===void 0?kt:e,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?k:s;Ot=new mn(function(c){if(!sn){var l=U();J(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!wn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&wn(d.target)&&~Ta.indexOf(d.attributeName))if(d.attributeName==="class"&&pe(d.target)){var b=Ct(Jt(d.target)),g=b.prefix,S=b.iconName;d.target.setAttribute(qt,g||l),S&&d.target.setAttribute(Zt,S)}else be(d.target)&&r(d.target)})}}),F&&Ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function we(){Ot&&Ot.disconnect()}function xe(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function Ae(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Ct(Jt(t));return r.prefix||(r.prefix=U()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=te(r.prefix,t.innerText)||an(r.prefix,Dt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Oe(t){var n=J(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return m.autoA11y&&(a?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||st()):(n["aria-hidden"]="true",n.focusable="false")),n}function Se(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ae(t),e=a.iconName,r=a.prefix,i=a.rest,o=Oe(t),s=$t("parseNodeAttributes",{},t),f=n.styleParser?xe(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Pe=_.styles;function oa(t){var n=m.autoReplaceSvg==="nest"?On(t,{styleParser:!1}):On(t);return~n.extra.classes.indexOf(Un)?j("generateLayersText",t,n):j("generateSvgReplacementMutation",t,n)}var H=new Set;Qt.map(function(t){H.add("fa-".concat(t))});Object.keys(et[y]).map(H.add.bind(H));Object.keys(et[w]).map(H.add.bind(H));H=ft(H);function Sn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var a=k.documentElement.classList,e=function(d){return a.add("".concat(dn,"-").concat(d))},r=function(d){return a.remove("".concat(dn,"-").concat(d))},i=m.autoFetchSvg?H:Qt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Pe));i.includes("fa")||i.push("fa");var o=[".".concat(Un,":not([").concat(V,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=on.begin("onTree"),c=s.reduce(function(l,d){try{var b=oa(d);b&&l.push(b)}catch(g){$n||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(b){ra(b,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(b){f(),d(b)})})}function Ee(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oa(t).then(function(a){a&&ra([a],n)})}function Ce(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ut(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(e,u(u({},a),{},{mask:r}))}}var Ne=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?M:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,d=a.title,b=d===void 0?null:d,g=a.titleId,S=g===void 0?null:g,P=a.classes,E=P===void 0?[]:P,v=a.attributes,p=v===void 0?{}:v,h=a.styles,x=h===void 0?{}:h;if(n){var A=n.prefix,T=n.iconName,I=n.icon;return Nt(u({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:a}),m.autoA11y&&(b?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||st()):(p["aria-hidden"]="true",p.focusable="false")),rn({icons:{main:Ht(I),mask:f?Ht(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:u(u({},M),r),symbol:o,title:b,maskId:l,titleId:S,extra:{attributes:p,styles:x,classes:E}})})}},Ie={mixout:function(){return{icon:Ce(Ne)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Sn,a.nodeCallback=Ee,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?k:e,i=a.callback,o=i===void 0?function(){}:i;return Sn(r,o)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,d=e.maskId,b=e.extra;return new Promise(function(g,S){Promise.all([Wt(r,s),l.iconName?Wt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=Xt(P,2),v=E[0],p=E[1];g([a,rn({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:b,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=Pt(s);f.length>0&&(r.style=f);var c;return tn(o)&&(c=j("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},_e={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Nt({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},Te={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,d=l===void 0?{}:l;return Nt({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:e}),ue({content:a.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},Me={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?M:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,d=l===void 0?{}:l,b=e.styles,g=b===void 0?{}:b;return Nt({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:e}),yn({content:a,transform:u(u({},M),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ft(c))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Fn){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,yn({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},ze=new RegExp('"',"ug"),Pn=[1105920,1112319];function Le(t){var n=t.replace(ze,""),a=Xa(n,0),e=a>=Pn[0]&&a<=Pn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Dt(r?n[0]:n),isSecondary:e||r}}function En(t,n){var a="".concat(Oa).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var i=J(t.children),o=i.filter(function(I){return I.getAttribute(Ft)===n})[0],s=$.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Na),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?w:y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[b][f[2].toLowerCase()]:Ia[b][c],S=Le(d),P=S.value,E=S.isSecondary,v=f[0].startsWith("FontAwesome"),p=an(g,P),h=p;if(v){var x=ne(P);x.iconName&&x.prefix&&(p=x.iconName,g=x.prefix)}if(p&&!E&&(!o||o.getAttribute(qt)!==g||o.getAttribute(Zt)!==h)){t.setAttribute(a,h),o&&t.removeChild(o);var A=Se(),T=A.extra;T.attributes[Ft]=n,Wt(p,g).then(function(I){var It=rn(u(u({},A),{},{icons:{main:I,mask:en()},prefix:g,iconName:h,extra:T,watchable:!0})),D=k.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=It.map(function(ca){return ct(ca)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Re(t){return Promise.all([En(t,"::before"),En(t,"::after")])}function je(t){return t.parentNode!==document.head&&!~Pa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Cn(t){if(F)return new Promise(function(n,a){var e=J(t.querySelectorAll("*")).filter(je).map(Re),r=on.begin("searchPseudoElements");ia(),Promise.all(e).then(function(){r(),Vt(),n()}).catch(function(){r(),Vt(),a()})})}var Fe={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Cn,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?k:e;m.searchPseudoElements&&Cn(r)}}},Nn=!1,De={mixout:function(){return{dom:{unwatch:function(){ia(),Nn=!0}}}},hooks:function(){return{bootstrap:function(){An($t("mutationObserverCallbacks",{}))},noAuto:function(){we()},watch:function(a){var e=a.observeMutationsRoot;Nn?Vt():An($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},In=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Ye={mixout:function(){return{parse:{transform:function(a){return In(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=In(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:b};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),g.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function _n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function $e(t){return t.tag==="g"?t.children:[t]}var Ue={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):en();return i.prefix||(i.prefix=U()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,l=i.icon,d=o.width,b=o.icon,g=$a({transform:f,containerWidth:d,iconWidth:c}),S={tag:"rect",attributes:u(u({},zt),{},{fill:"white"})},P=l.children?{children:l.children.map(_n)}:{},E={tag:"g",attributes:u({},g.inner),children:[_n(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},P))]},v={tag:"g",attributes:u({},g.outer),children:[E]},p="mask-".concat(s||st()),h="clip-".concat(s||st()),x={tag:"mask",attributes:u(u({},zt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:$e(b)},x]};return e.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},zt)}),{children:e,attributes:r}}}},He={provides:function(n){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},We={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Be=[Wa,Ie,_e,Te,Me,Fe,De,Ye,Ue,He,We];re(Be,{mixoutsTo:N});N.noAuto;N.config;var ir=N.library;N.dom;var Gt=N.parse;N.findIconDefinition;N.toHtml;var Ve=N.icon;N.layer;N.text;N.counter;function Tn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function z(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?Tn(Object(a),!0).forEach(function(e){C(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Tn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function Ge(t,n){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var e=a.call(t,n||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Xe(t){var n=Ge(t,"string");return typeof n=="symbol"?n:n+""}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function C(t,n,a){return n=Xe(n),n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Ke(t,n){if(t==null)return{};var a={};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){if(n.indexOf(e)>=0)continue;a[e]=t[e]}return a}function qe(t,n){if(t==null)return{};var a=Ke(t,n),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var Ze=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sa={exports:{}};(function(t){(function(n){var a=function(v,p,h){if(!c(p)||d(p)||b(p)||g(p)||f(p))return p;var x,A=0,T=0;if(l(p))for(x=[],T=p.length;A<T;A++)x.push(a(v,p[A],h));else{x={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&(x[v(I,h)]=a(v,p[I],h))}return x},e=function(v,p){p=p||{};var h=p.separator||"_",x=p.split||/(?=[A-Z])/;return v.split(x).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return e(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},b=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},P=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(x,A){return h(x,v,A)}},E={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return a(P(r,p),v)},decamelizeKeys:function(v,p){return a(P(o,p),v,p)},pascalizeKeys:function(v,p){return a(P(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:n.humps=E})(Ze)})(sa);var Qe=sa.exports,Je=["class","style"];function tr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,a){var e=a.indexOf(":"),r=Qe.camelize(a.slice(0,e)),i=a.slice(e+1).trim();return n[r]=i,n},{})}function nr(t){return t.split(/\s+/).reduce(function(n,a){return n[a]=!0,n},{})}function fa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var e=(t.children||[]).map(function(f){return fa(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=nr(l);break;case"style":f.style=tr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=qe(a,Je);return da(t.tag,z(z(z({},n),{},{class:r.class,style:z(z({},r.style),o)},r.attrs),s),e)}var la=!1;try{la=!0}catch{}function ar(){if(!la&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Lt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?C({},t,n):{}}function er(t){var n,a=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},C(C(C(C(C(C(C(C(C(C(n,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),C(C(n,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}function Mn(t){if(t&&St(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gt.icon)return Gt.icon(t);if(t===null)return null;if(St(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var or=ua({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,a){var e=a.attrs,r=X(function(){return Mn(n.icon)}),i=X(function(){return Lt("classes",er(n))}),o=X(function(){return Lt("transform",typeof n.transform=="string"?Gt.transform(n.transform):n.transform)}),s=X(function(){return Lt("mask",Mn(n.mask))}),f=X(function(){return Ve(r.value,z(z(z(z({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});ma(f,function(l){if(!l)return ar("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=X(function(){return f.value?fa(f.value.abstract[0],{},e):null});return function(){return c.value}}}),sr={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"]},fr={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},lr={prefix:"fab",iconName:"trello",icon:[448,512,[],"f181","M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"]},cr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ur={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},mr={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},dr={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]};export{or as F,ur as a,fr as b,sr as c,lr as d,cr as e,mr as f,dr as g,ir as l};
//# sourceMappingURL=@fortawesome-DMr8AsYU.js.map
