import{d as w,X as s,o as p,a as u,p as e,D as i,t as b,j as g,n as x,f as y,g as v,Y as m,Z as B,_ as C}from"./@vue-PMUC4_EU.js";import F from"./IconSushiSwap-CCoTQNUG.js";import $ from"./IconUniswap-DfXpFNOV.js";import D from"./IconAerodrome-B5tXFdqE.js";import{_ as M}from"./index-CGKNAZju.js";import"./throttle-debounce-Cnhs5IFh.js";import"./@apollo-zNggR-SL.js";import"./tslib-BwUgbtqh.js";import"./optimism-03WiOYJB.js";import"./@wry-Bim4qHuA.js";import"./zen-observable-ts-CT9n_cjK.js";import"./graphql-CDzZTbIt.js";import"./ts-invariant-CZEEjXmM.js";import"./symbol-observable-DaSLT9Eu.js";import"./vue-router-c_qGh6Cs.js";/* empty css               */import"./buefy-DIOWV6i5.js";import"./@fortawesome-DMr8AsYU.js";const S=""+new URL("broge-CYQGoQoV.png",import.meta.url).href,t=o=>(B("data-v-23a49b9e"),o=o(),C(),o),E={class:"section box mb-5"},T=t(()=>e("h1",{class:"title"},"How to help Broge",-1)),V=t(()=>e("h2",{class:"subtitle mt-2"},"What can you do to help Broge?",-1)),H={class:"content"},I=t(()=>e("p",{class:"mt-5 pt-5",style:{"border-top":"solid 1px #3155f4"}}," There are many ways you can help Broge! ",-1)),Y=m('<li data-v-23a49b9e><span class="has-text-warning" data-v-23a49b9e><i class="fas fa-coins" data-v-23a49b9e></i></span> You can always <a href="/buy" data-v-23a49b9e> buy more $Broge!</a></li><li data-v-23a49b9e><span class="has-text-warning" data-v-23a49b9e><i class="fas fa-coins" data-v-23a49b9e></i></span> You could shill on socials! <ul data-v-23a49b9e><li data-v-23a49b9e> Use the tags <u data-v-23a49b9e><strong data-v-23a49b9e>$Broge</strong></u> and <u data-v-23a49b9e><strong data-v-23a49b9e>#Base!</strong></u>! </li></ul></li>',2),N=t(()=>e("span",{class:"has-text-warning"},[e("i",{class:"fas fa-coins"})],-1)),U=["href"],j=t(()=>e("i",{class:"far fa-copy ml-2"},null,-1)),z={key:0,class:"tooltip"},Q=t(()=>e("span",{class:"has-text-warning"},[e("i",{class:"fas fa-coins"})],-1)),q=["href"],G=t(()=>e("i",{class:"far fa-copy ml-2"},null,-1)),L={key:0,class:"tooltip"},R=m('<div class="level mt-5 pt-5" style="border-top:1px #3155f4 solid;" data-v-23a49b9e><div class="has-text-left" data-v-23a49b9e><ul data-v-23a49b9e><li data-v-23a49b9e><span class="has-text-warning" data-v-23a49b9e><i class="fas fa-coins" data-v-23a49b9e></i></span> You can add to liquidity on some of the top Decentralized Exchanges (Dex) on Base! </li><li class="pl-5" data-v-23a49b9e>Doing so can earn you rewards thanks to fees!<br data-v-23a49b9e></li></ul></div></div>',1),W={class:"level mt-3"},X={class:"level-item has-text-centered"},Z={class:"title"},J={href:"https://app.uniswap.org/add/ETH/0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38/10000",target:"_blank"},K={class:"level-item has-text-centered"},O={class:"title"},P={href:"https://aerodrome.finance/pools?type=&token0=eth&token1=0xe8e55a847bb446d967ef92f4580162fb8f2d3f38",target:"_blank"},ee={class:"level-item has-text-centered"},ae={class:"title"},te={href:"https://www.sushi.com/pool/add?chainId=8453&toCurrency=0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38&fromCurrency=NATIVE",target:"_blank"},se=m('<div class="level mt-5 pt-5 mb-0 pb-0" style="border-top:1px #3155f4 solid;" data-v-23a49b9e><div class="has-text-left" data-v-23a49b9e><ul data-v-23a49b9e><li data-v-23a49b9e><span class="has-text-success" data-v-23a49b9e><i class="fa-solid fa-circle-info pr-2" data-v-23a49b9e></i></span>If the above links do not work, sign into the appropriate exchange and set the <br data-v-23a49b9e><span class="pl-5" data-v-23a49b9e>network to Base, then try the link again.</span></li></ul></div></div>',1),oe=w({__name:"HelpComponent",setup(o){const n=s("0x606185d3D418De51629eF320d8Ab6f9bE3B9C7Ec"),l=s("0xca397c2c9325e481106C418fD4c01FFCcDF480D2"),h=s(!1),_=s(!1),r=s(!1),d=s(!1),k=()=>{navigator.clipboard.writeText(n.value).then(()=>{console.log("Airdrop address copied to clipboard"),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}).catch(c=>{console.error("Failed to copy airdrop address: ",c)})},A=()=>{navigator.clipboard.writeText(l.value).then(()=>{console.log("Marketing address copied to clipboard"),d.value=!0,setTimeout(()=>{d.value=!1},2e3)}).catch(c=>{console.error("Failed to copy marketing address: ",c)})};return(c,a)=>(p(),u("div",E,[T,V,e("div",H,[I,e("ul",null,[Y,e("li",null,[N,i(" You can donate to our airdrop fund! "),e("ul",null,[e("li",null,[e("a",{href:"https://basescan.org/address/"+n.value,target:"_blank"},b(n.value),9,U),e("a",{href:"#",onClick:g(k,["prevent"]),onMouseover:a[0]||(a[0]=f=>h.value=!0),onMouseout:a[1]||(a[1]=f=>h.value=!1),class:x(["copy-icon",{inverted:h.value||r.value}])},[j,r.value?(p(),u("span",z,"Address copied!")):y("",!0)],34)])])]),e("li",null,[Q,i(" You could also donate to our marketing fund! "),e("ul",null,[e("li",null,[e("a",{href:"https://basescan.org/address/"+l.value,target:"_blank"},b(l.value),9,q),e("a",{href:"#",onClick:g(A,["prevent"]),onMouseover:a[2]||(a[2]=f=>_.value=!0),onMouseout:a[3]||(a[3]=f=>_.value=!1),class:x(["copy-icon",{inverted:_.value||d.value}])},[G,d.value?(p(),u("span",L,"Address copied!")):y("",!0)],34)])])])])]),R,e("div",W,[e("div",X,[e("div",null,[e("p",Z,[e("a",J,[v($),i(" Uniswap ")])])])]),e("div",K,[e("div",null,[e("p",O,[e("a",P,[v(D),i(" Aerodrome")])])])]),e("div",ee,[e("div",null,[e("p",ae,[e("a",te,[v(F),i(" SushiSwap")])])])])]),se]))}}),ie=M(oe,[["__scopeId","data-v-23a49b9e"]]),ne={class:"container is-centered"},le={class:"columns is-flex-direction-row is-justify-content-center"},re=e("div",{class:"column has-text-centered is-flex is-align-items-center is-justify-content-center"},[e("img",{src:S,style:{height:"500px","image-orientation":"flip-x","border-radius":"25px"},alt:"Broge Frog!"})],-1),de={class:"column"},$e=w({__name:"HelpView",setup(o){return(n,l)=>(p(),u("div",ne,[e("div",le,[re,e("div",de,[v(ie)])])]))}});export{$e as default};
//# sourceMappingURL=HelpView-BKR_en-a.js.map