import{d as S,X as a,a2 as U,c as w,e as q,o as s,a as i,p as o,g as I,l as k,G as z,F as f,u as g,n as T,t as d,a3 as C,D as A,Z as M,_ as K}from"./@vue-Di5yUyRV.js";import{g as O}from"./graphql-tag-DjF01Eu_.js";import{_ as P}from"./index-z_arCExf.js";import"./throttle-debounce-Cnhs5IFh.js";import"./@apollo-u84zrURy.js";import"./tslib-ClpBgQBz.js";import"./@coinbase-DbO_AdsL.js";import"./bn.js-B6cRF9Sl.js";import"./@stablelib-BfGfxasn.js";import"./eventemitter3-6E4L_h32.js";import"./sha.js-C2i4BKTL.js";import"./inherits-BlmhoU4v.js";import"./safe-buffer-Bb2uIq0F.js";import"./buffer-Ce5O-hDk.js";import"./base64-js-D0UyVEDn.js";import"./ieee754-DSYfm7We.js";import"./preact-Cvyi49Yd.js";import"./clsx-Bngh1VCq.js";import"./keccak-CDF1n6KU.js";import"./readable-stream-D9eV0FaI.js";import"./events-6u6H-MFP.js";import"./util-deprecate-Dm4eHZA_.js";import"./string_decoder-CxmMrjsu.js";import"./eth-block-tracker-p6MLmKNF.js";import"./json-rpc-random-id-DmWAYPg7.js";import"./pify-2zFsNgG8.js";import"./@metamask-C75uGz2U.js";import"./superstruct-DVoORH0r.js";import"./debug-Kk5lNELL.js";import"./ms-CzQ2E3wO.js";import"./semver-DdSZhn1O.js";import"./eth-json-rpc-filters-CalvWF0C.js";import"./eth-query-CTJIkvOv.js";import"./xtend-CeaPpq3n.js";import"./json-rpc-engine-D_835JE3.js";import"./eth-rpc-errors-C5LhrPve.js";import"./fast-safe-stringify-Bs-GRd1a.js";import"./async-mutex-CMqhl0c0.js";import"./optimism-03WiOYJB.js";import"./@wry-Bim4qHuA.js";import"./zen-observable-ts-CT9n_cjK.js";import"./graphql-CDzZTbIt.js";import"./ts-invariant-C_bnhfCu.js";import"./symbol-observable-DaSLT9Eu.js";import"./vue-router-C4u1quAe.js";/* empty css               */import"./@web3modal-UNVsPRuT.js";import"./bignumber.js-DOH-f-tm.js";import"./@walletconnect-CRhN4eAA.js";import"./multiformats-DSKVg-N-.js";import"./detect-browser-ClY_l-h2.js";import"./query-string-SCOpAa9y.js";import"./strict-uri-encode-DdzwWRIL.js";import"./decode-uri-component-CROxjmim.js";import"./split-on-first-BNP3K2Fc.js";import"./filter-obj-DG2z_hf8.js";import"./uint8arrays-BSAB2j_x.js";import"./unstorage-I5IaDmqs.js";import"./destr-CVtkxrq9.js";import"./idb-keyval-nibyPLVP.js";import"./pino-W4NOTlTc.js";import"./quick-format-unescaped-Dys6CG9o.js";import"./lodash.isequal-C7A8EuLQ.js";import"./isomorphic-unfetch-B4YkeKXU.js";import"./unfetch-BHGbGNhz.js";import"./cross-fetch-PkdmWFxE.js";import"./@lit-DjZwrzog.js";import"./lit-html-DfFMVDgK.js";import"./lit-element-Cx71in3k.js";import"./valtio-BAwQlNIs.js";import"./proxy-compare-DDw08AJZ.js";import"./qrcode-CGiDONbL.js";import"./encode-utf8-Cn5aGd7v.js";import"./dijkstrajs-D_NXgYpA.js";import"./motion-NW9MFZdV.js";import"./@motionone-BkHL0rzb.js";import"./ethers-CpDRqAx8.js";import"./@noble-CqNEeIzD.js";import"./dayjs-eSGwrMYp.js";import"./zod-dIKOytT1.js";import"./buefy-BAT0heOZ.js";import"./@fortawesome-BjiBaEc-.js";const r=l=>(M("data-v-7805997f"),l=l(),K(),l),Q={class:"section box"},R=r(()=>o("h1",{class:"title is-4"},"Broge Swap!",-1)),X=r(()=>o("h2",{class:"subtitle is-6"},"You can go with this, or you can go with that.",-1)),Y={class:"box mt-4",style:{"max-width":"50%",margin:"auto"}},Z={class:"field"},j=r(()=>o("label",{class:"label"},"Network",-1)),H={class:"control"},J={class:"select is-primary"},W=r(()=>o("option",{value:""},"Select Network",-1)),oo=["value"],to=["src"],eo={class:"field mt-3"},so=r(()=>o("label",{class:"label"},"From",-1)),io={class:"control"},no={class:"dropdown-trigger"},ao={key:0},ro={key:1},lo=r(()=>o("span",{class:"icon is-small"},[o("i",{class:"fas fa-angle-down","aria-hidden":"true"})],-1)),po={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},co={class:"dropdown-content"},mo={class:"dropdown-item"},uo=["onClick"],_o={class:"field mt-3"},ho=r(()=>o("label",{class:"label"},"To",-1)),vo={class:"control"},wo={class:"dropdown-trigger"},ko={key:0},fo={key:1},go=r(()=>o("span",{class:"icon is-small"},[o("i",{class:"fas fa-angle-down","aria-hidden":"true"})],-1)),yo={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},bo={class:"dropdown-content"},To={class:"dropdown-item"},Co=["onClick"],So=S({__name:"SwapComponent",setup(l){const y=a([{chainId:1,name:"Ethereum",icon:"path/to/ethereum-icon.png"},{chainId:137,name:"Polygon",icon:"path/to/polygon-icon.png"},{chainId:56,name:"Binance Smart Chain",icon:"path/to/bsc-icon.png"},{chainId:8453,name:"Base Chain",icon:"path/to/base-chain-icon.png"}]),_=a(null),p=a(null),c=a(null),h=a(""),v=a(""),m=a(!1),u=a(!1),x=O`
  query GetTokens($skip: Int!) {
    tokens(first: 1000, skip: $skip) {
      id
      name
      symbol
    }
  }
`,{result:F,loading:Do,error:No}=U(x,{skip:0}),b=w(()=>{var e;return((e=F.value)==null?void 0:e.tokens)??[]}),D=w(()=>b.value.filter(e=>e.symbol.toLowerCase().includes(h.value.toLowerCase()))),N=w(()=>b.value.filter(e=>{var n;return e.symbol.toLowerCase().includes(v.value.toLowerCase())&&e.id!==((n=p.value)==null?void 0:n.id)}));function V(e){p.value=e,m.value=!1,p.value===c.value&&(c.value=null)}function $(e){c.value=e,u.value=!1}function B(){m.value=!m.value}function L(){u.value=!u.value}return(e,n)=>{const E=q("w3m-button");return s(),i("div",Q,[R,X,o("div",Y,[I(E),o("div",Z,[j,o("div",H,[o("div",J,[k(o("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>_.value=t)},[W,(s(!0),i(f,null,g(y.value,t=>(s(),i("option",{key:t.chainId,value:t.chainId},[o("img",{src:t.icon,alt:"Network Icon",class:"network-icon"},null,8,to),A(" "+d(t.name),1)],8,oo))),128))],512),[[z,_.value]])])])]),o("div",eo,[so,o("div",io,[o("div",{class:T(["dropdown",{"is-active":m.value}])},[o("div",no,[o("button",{class:"button is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:B},[p.value?(s(),i("span",ao,d(p.value.symbol),1)):(s(),i("span",ro,"Select Token")),lo])]),o("div",po,[o("div",co,[o("div",mo,[k(o("input",{class:"input",type:"text",placeholder:"Search token...","onUpdate:modelValue":n[1]||(n[1]=t=>h.value=t)},null,512),[[C,h.value]])]),(s(!0),i(f,null,g(D.value,t=>(s(),i("a",{key:t.id,class:"dropdown-item",onClick:G=>V(t)},d(t.symbol),9,uo))),128))])])],2)])]),o("div",_o,[ho,o("div",vo,[o("div",{class:T(["dropdown",{"is-active":u.value}])},[o("div",wo,[o("button",{class:"button is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:L},[c.value?(s(),i("span",ko,d(c.value.symbol),1)):(s(),i("span",fo,"Select Token")),go])]),o("div",yo,[o("div",bo,[o("div",To,[k(o("input",{class:"input",type:"text",placeholder:"Search token...","onUpdate:modelValue":n[2]||(n[2]=t=>v.value=t)},null,512),[[C,v.value]])]),(s(!0),i(f,null,g(N.value,t=>(s(),i("a",{key:t.id,class:"dropdown-item",onClick:G=>$(t)},d(t.symbol),9,Co))),128))])])],2)])])])])}}}),Io=P(So,[["__scopeId","data-v-7805997f"]]),xo={class:"swap-view"},Fo=o("h1",{class:"has-text-warning is-size-1"},"This is non-functional, it is a work in progress!",-1),ne=S({__name:"SwapView",setup(l){return(y,_)=>(s(),i("div",xo,[Fo,I(Io)]))}});export{ne as default};
