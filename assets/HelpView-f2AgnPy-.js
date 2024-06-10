import{d as w,r as t,a as p,b as u,e,g as n,t as g,w as m,n as x,h as y,f as v,j as b,p as B,i as C,_ as F}from"./index-DQnABDtn.js";import{U as S,A as $,S as D}from"./IconAerodrome-BjgfuV5V.js";const M=""+new URL("broge-logo-B8SePXqr.png",import.meta.url).href,s=o=>(B("data-v-23a49b9e"),o=o(),C(),o),E={class:"section box mb-5"},T=s(()=>e("h1",{class:"title"},"How to help Broge",-1)),I=s(()=>e("h2",{class:"subtitle mt-2"},"What can you do to help Broge?",-1)),V={class:"content"},H=s(()=>e("p",{class:"mt-5 pt-5",style:{"border-top":"solid 1px #3155f4"}}," There are many ways you can help Broge! ",-1)),N=b('<li data-v-23a49b9e><span class="has-text-warning" data-v-23a49b9e><i class="fas fa-coins" data-v-23a49b9e></i></span> You can always <a href="/buy" data-v-23a49b9e> buy more $Broge!</a></li><li data-v-23a49b9e><span class="has-text-warning" data-v-23a49b9e><i class="fas fa-coins" data-v-23a49b9e></i></span> You could shill on socials! <ul data-v-23a49b9e><li data-v-23a49b9e> Use the tags <u data-v-23a49b9e><strong data-v-23a49b9e>$Broge</strong></u> and <u data-v-23a49b9e><strong data-v-23a49b9e>#Base!</strong></u>! </li></ul></li>',2),U=s(()=>e("span",{class:"has-text-warning"},[e("i",{class:"fas fa-coins"})],-1)),Y=["href"],j=s(()=>e("i",{class:"far fa-copy ml-2"},null,-1)),q={key:0,class:"tooltip"},z=s(()=>e("span",{class:"has-text-warning"},[e("i",{class:"fas fa-coins"})],-1)),L=["href"],P=s(()=>e("i",{class:"far fa-copy ml-2"},null,-1)),R={key:0,class:"tooltip"},W=b('<div class="level mt-5 pt-5" style="border-top:1px #3155f4 solid;" data-v-23a49b9e><div class="has-text-left" data-v-23a49b9e><ul data-v-23a49b9e><li data-v-23a49b9e><span class="has-text-warning" data-v-23a49b9e><i class="fas fa-coins" data-v-23a49b9e></i></span> You can add to liquidity on some of the top Decentralized Exchanges (Dex) on Base! </li><li class="pl-5" data-v-23a49b9e>Doing so can earn you rewards thanks to fees!<br data-v-23a49b9e></li></ul></div></div>',1),X={class:"level mt-3"},G={class:"level-item has-text-centered"},J={class:"title"},K={href:"https://app.uniswap.org/add/ETH/0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38/10000",target:"_blank"},O={class:"level-item has-text-centered"},Q={class:"title"},Z={href:"https://aerodrome.finance/pools?type=&token0=eth&token1=0xe8e55a847bb446d967ef92f4580162fb8f2d3f38",target:"_blank"},ee={class:"level-item has-text-centered"},ae={class:"title"},se={href:"https://www.sushi.com/pool/add?chainId=8453&toCurrency=0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38&fromCurrency=NATIVE",target:"_blank"},te=b('<div class="level mt-5 pt-5 mb-0 pb-0" style="border-top:1px #3155f4 solid;" data-v-23a49b9e><div class="has-text-left" data-v-23a49b9e><ul data-v-23a49b9e><li data-v-23a49b9e><span class="has-text-success" data-v-23a49b9e><i class="fa-solid fa-circle-info pr-2" data-v-23a49b9e></i></span>If the above links do not work, sign into the appropriate exchange and set the <br data-v-23a49b9e><span class="pl-5" data-v-23a49b9e>network to Base, then try the link again.</span></li></ul></div></div>',1),oe=w({__name:"HelpComponent",setup(o){const l=t("0x606185d3D418De51629eF320d8Ab6f9bE3B9C7Ec"),i=t("0xca397c2c9325e481106C418fD4c01FFCcDF480D2"),h=t(!1),_=t(!1),d=t(!1),r=t(!1),k=()=>{navigator.clipboard.writeText(l.value).then(()=>{console.log("Airdrop address copied to clipboard"),d.value=!0,setTimeout(()=>{d.value=!1},2e3)}).catch(c=>{console.error("Failed to copy airdrop address: ",c)})},A=()=>{navigator.clipboard.writeText(i.value).then(()=>{console.log("Marketing address copied to clipboard"),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}).catch(c=>{console.error("Failed to copy marketing address: ",c)})};return(c,a)=>(p(),u("div",E,[T,I,e("div",V,[H,e("ul",null,[N,e("li",null,[U,n(" You can donate to our airdrop fund! "),e("ul",null,[e("li",null,[e("a",{href:"https://basescan.org/address/"+l.value,target:"_blank"},g(l.value),9,Y),e("a",{href:"#",onClick:m(k,["prevent"]),onMouseover:a[0]||(a[0]=f=>h.value=!0),onMouseout:a[1]||(a[1]=f=>h.value=!1),class:x(["copy-icon",{inverted:h.value||d.value}])},[j,d.value?(p(),u("span",q,"Address copied!")):y("",!0)],34)])])]),e("li",null,[z,n(" You could also donate to our marketing fund! "),e("ul",null,[e("li",null,[e("a",{href:"https://basescan.org/address/"+i.value,target:"_blank"},g(i.value),9,L),e("a",{href:"#",onClick:m(A,["prevent"]),onMouseover:a[2]||(a[2]=f=>_.value=!0),onMouseout:a[3]||(a[3]=f=>_.value=!1),class:x(["copy-icon",{inverted:_.value||r.value}])},[P,r.value?(p(),u("span",R,"Address copied!")):y("",!0)],34)])])])])]),W,e("div",X,[e("div",G,[e("div",null,[e("p",J,[e("a",K,[v(S),n(" Uniswap ")])])])]),e("div",O,[e("div",null,[e("p",Q,[e("a",Z,[v($),n(" Aerodrome")])])])]),e("div",ee,[e("div",null,[e("p",ae,[e("a",se,[v(D),n(" SushiSwap")])])])])]),te]))}}),ne=F(oe,[["__scopeId","data-v-23a49b9e"]]),le={class:"container is-centered"},ie={class:"columns is-flex-direction-row is-justify-content-center"},de=e("div",{class:"column has-text-centered"},[e("img",{src:M,style:{height:"300px","image-orientation":"flip-x","border-radius":"9999999999px"},alt:"Broge Frog!"})],-1),re={class:"column"},ue=w({__name:"HelpView",setup(o){return(l,i)=>(p(),u("div",le,[e("div",ie,[de,e("div",re,[v(ne)])])]))}});export{ue as default};
