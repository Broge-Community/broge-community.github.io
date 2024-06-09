import{B as Ha}from"./bignumber.js-DOH-f-tm.js";import{d as dp}from"./@coinbase-DbO_AdsL.js";import{_ as Br,C as hp,y as pp}from"./@walletconnect-CRhN4eAA.js";import{p as Rt,b as ei,a as Wu,s as ni,r as mn}from"./valtio-BAwQlNIs.js";import{g as Us,I as Tc,J as fp,f as wp,i as gp,h as mp,t as vp,p as bp,a as yp,B as kc,b as Rc,C as xp}from"./ethers-CpDRqAx8.js";import{d as qo,r as Cp,u as Ap,e as _p}from"./dayjs-eSGwrMYp.js";import"./query-string-SCOpAa9y.js";import"./@stablelib-BfGfxasn.js";import"./multiformats-DSKVg-N-.js";import{b as Ep}from"./qrcode-CGiDONbL.js";import{b as Sp}from"./buffer-Ce5O-hDk.js";import{z as w}from"./zod-dIKOytT1.js";const Ic="https://secure.walletconnect.com",f1=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],Ct={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Ic,SECURE_SITE_DASHBOARD:`${Ic}/dashboard`,SECURE_SITE_FAVICON:`${Ic}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},H={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(i,e=""){return i==null?void 0:i.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const i=window.navigator.userAgent.toLowerCase();return H.isMobile()&&i.includes("android")},isIos(){const i=window.navigator.userAgent.toLowerCase();return H.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(i){return i?i-Date.now()<=Ct.TEN_SEC_MS:!0},isAllowedRetry(i){return Date.now()-i>=Ct.ONE_SEC_MS},copyToClopboard(i){navigator.clipboard.writeText(i)},getPairingExpiry(){return Date.now()+Ct.FOUR_MINUTES_MS},getPlainAddress(i){return i.split(":")[2]},async wait(i){return new Promise(e=>{setTimeout(e,i)})},debounce(i,e=500){let t;return(...r)=>{function o(){i(...r)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},formatNativeUrl(i,e){if(H.isHttpUrl(i))return this.formatUniversalUrl(i,e);let t=i;t.includes("://")||(t=i.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},formatUniversalUrl(i,e){if(!H.isHttpUrl(i))return this.formatNativeUrl(i,e);let t=i;t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},openHref(i,e,t){window.open(i,e,t||"noreferrer noopener")},async preloadImage(i){const e=new Promise((t,r)=>{const o=new Image;o.onload=t,o.onerror=r,o.crossOrigin="anonymous",o.src=i});return Promise.race([e,H.wait(2e3)])},formatBalance(i,e){var r;let t;if(i==="0")t="0.000";else if(typeof i=="string"){const o=Number(i);o&&(t=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return t?`${t} ${e??""}`:`0.000 ${e??""}`},formatBalance2(i,e){var r;let t;if(i==="0")t="0";else if(typeof i=="string"){const o=Number(i);o&&(t=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return{value:t??"0",rest:t==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return Ct.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return H.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return H.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return H.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,i=>{const e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)})},parseError(i){var e,t;return typeof i=="string"?i:typeof((t=(e=i==null?void 0:i.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?i.issues[0].message:i instanceof Error?i.message:"Unknown error"},sortRequestedNetworks(i,e=[]){const t={};return e&&i&&(i.forEach((r,o)=>{t[r]=o}),e.sort((r,o)=>{const n=t[r.id],s=t[o.id];return n!==void 0&&s!==void 0?n-s:n!==void 0?-1:s!==void 0?1:0})),e},calculateBalance(i){let e=0;for(const t of i)e+=t.value??0;return e},formatTokenBalance(i){const e=i.toFixed(2),[t,r]=e.split(".");return{dollars:t,pennies:r}},isAddress(i){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)||/^(?:0x)?[0-9A-F]{40}$/iu.test(i))return!0}else return!1;return!1}};class ju{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,n])=>{n&&r.searchParams.append(o,n)}),r}}const Nt=Rt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ee={state:Nt,subscribeKey(i,e){return ei(Nt,i,e)},setProjectId(i){Nt.projectId=i},setAllWallets(i){Nt.allWallets=i},setIncludeWalletIds(i){Nt.includeWalletIds=i},setExcludeWalletIds(i){Nt.excludeWalletIds=i},setFeaturedWalletIds(i){Nt.featuredWalletIds=i},setTokens(i){Nt.tokens=i},setTermsConditionsUrl(i){Nt.termsConditionsUrl=i},setPrivacyPolicyUrl(i){Nt.privacyPolicyUrl=i},setCustomWallets(i){Nt.customWallets=i},setIsSiweEnabled(i){Nt.isSiweEnabled=i},setEnableAnalytics(i){Nt.enableAnalytics=i},setSdkVersion(i){Nt.sdkVersion=i},setMetadata(i){Nt.metadata=i},setOnrampEnabled(i){Nt.enableOnramp=i},setWalletFeaturesEnabled(i){Nt.enableWalletFeatures=i},getSnapshot(){return Wu(Nt)}},Tp={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},kp=H.getBlockchainApiUrl(),Ii=new ju({baseUrl:kp}),ri={fetchIdentity({address:i}){return Ii.get({path:`/v1/identity/${i}`,params:{projectId:ee.state.projectId}})},fetchTransactions({account:i,projectId:e,cursor:t,onramp:r,signal:o}){const n=t?{cursor:t}:{};return Ii.get({path:`/v1/account/${i}/history?projectId=${e}${r?`&onramp=${r}`:""}`,params:n,signal:o})},fetchSwapTokens({projectId:i,chainId:e}){return Ii.get({path:`/v1/convert/tokens?projectId=${i}&chainId=${e}`})},fetchTokenPrice({projectId:i,addresses:e}){return Ii.post({path:"/v1/fungible/price",body:{projectId:i,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:i,tokenAddress:e,userAddress:t}){const{sdkType:r,sdkVersion:o}=ee.state;return Ii.get({path:`/v1/convert/allowance?projectId=${i}&tokenAddress=${e}&userAddress=${t}`,headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":o}})},fetchGasPrice({projectId:i,chainId:e}){const{sdkType:t,sdkVersion:r}=ee.state;return Ii.get({path:`/v1/convert/gas-price?projectId=${i}&chainId=${e}`,headers:{"Content-Type":"application/json","x-sdk-type":t,"x-sdk-version":r}})},generateSwapCalldata({amount:i,from:e,projectId:t,to:r,userAddress:o}){return Ii.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:i,eip155:{slippage:Ct.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:t,to:r,userAddress:o}})},generateApproveCalldata({from:i,projectId:e,to:t,userAddress:r}){const{sdkType:o,sdkVersion:n}=ee.state;return Ii.get({path:`/v1/convert/build-approve?projectId=${e}&userAddress=${r}&from=${i}&to=${t}`,headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":n}})},async getBalance(i,e){const{sdkType:t,sdkVersion:r}=ee.state;return Ii.get({path:`/v1/account/${i}/balance`,headers:{"x-sdk-type":t,"x-sdk-version":r},params:{currency:"usd",projectId:ee.state.projectId,chainId:e}})},async generateOnRampURL({destinationWallets:i,partnerUserId:e,defaultNetwork:t,purchaseAmount:r,paymentAmount:o}){return(await Ii.post({path:`/v1/generators/onrampurl?projectId=${ee.state.projectId}`,body:{destinationWallets:i,defaultNetwork:t,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await Ii.get({path:`/v1/onramp/options?projectId=${ee.state.projectId}`})}catch{return Tp}},async getOnrampQuote({purchaseCurrency:i,paymentCurrency:e,amount:t,network:r}){try{return await Ii.post({path:`/v1/onramp/quote?projectId=${ee.state.projectId}`,body:{purchaseCurrency:i,paymentCurrency:e,amount:t,network:r}})}catch{return{coinbaseFee:{amount:t,currency:e.id},networkFee:{amount:t,currency:e.id},paymentSubtotal:{amount:t,currency:e.id},paymentTotal:{amount:t,currency:e.id},purchaseAmount:{amount:t,currency:e.id},quoteId:"mocked-quote-id"}}}},Pr=Rt({message:"",variant:"success",open:!1}),ye={state:Pr,subscribeKey(i,e){return ei(Pr,i,e)},showSuccess(i){Pr.message=i,Pr.variant="success",Pr.open=!0},showError(i){const e=H.parseError(i);Pr.message=e,Pr.variant="error",Pr.open=!0},hide(){Pr.open=!1}},$c="WALLETCONNECT_DEEPLINK_CHOICE",$0="@w3m/recent",Pc="@w3m/connected_wallet_image_url",P0="@w3m/connected_connector",Le={setWalletConnectDeepLink({href:i,name:e}){try{localStorage.setItem($c,JSON.stringify({href:i,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const i=localStorage.getItem($c);if(i)return JSON.parse(i)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem($c)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(i){try{const e=Le.getRecentWallets();e.find(r=>r.id===i.id)||(e.unshift(i),e.length>2&&e.pop(),localStorage.setItem($0,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const i=localStorage.getItem($0);return i?JSON.parse(i):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(i){try{localStorage.setItem(Pc,i)}catch{console.info("Unable to set Connected Wallet Image Url")}},removeConnectedWalletImageUrl(){try{localStorage.removeItem(Pc)}catch{console.info("Unable to remove Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Pc)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(i){try{localStorage.setItem(P0,i)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(P0)}catch{console.info("Unable to get Connected Connector")}}},Rp=H.getAnalyticsUrl(),Ip=new ju({baseUrl:Rp}),$p=["MODAL_CREATED"],Fo=Rt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ce={state:Fo,subscribe(i){return ni(Fo,()=>i(Fo))},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=ee.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(i){try{if($p.includes(i.data.event)||typeof window>"u")return;await Ip.post({path:"/e",headers:ce._getApiHeaders(),body:{eventId:H.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:i.timestamp,props:i.data}})}catch{}},sendEvent(i){Fo.timestamp=Date.now(),Fo.data=i,ee.state.enableAnalytics&&ce._sendAnalyticsEvent(Fo)}},vt=Rt({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Yt={state:vt,subscribe(i){return ni(vt,()=>i(vt))},async fetchTransactions(i,e){const{projectId:t}=ee.state;if(!t||!i)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");vt.loading=!0;try{const r=await ri.fetchTransactions({account:i,projectId:t,cursor:vt.next,onramp:e}),o=this.filterSpamTransactions(r.data),n=[...vt.transactions,...o];vt.loading=!1,e==="coinbase"?vt.coinbaseTransactions=this.groupTransactionsByYearAndMonth(vt.coinbaseTransactions,r.data):(vt.transactions=n,vt.transactionsByYear=this.groupTransactionsByYearAndMonth(vt.transactionsByYear,o)),vt.empty=n.length===0,vt.next=r.next?r.next:void 0}catch{ce.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:i,projectId:t,cursor:vt.next}}),ye.showError("Failed to fetch transactions"),vt.loading=!1,vt.empty=!0,vt.next=void 0}},groupTransactionsByYearAndMonth(i={},e=[]){const t=i;return e.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),n=new Date(r.metadata.minedAt).getMonth(),s=t[o]??{},u=(s[n]??[]).filter(p=>p.id!==r.id);t[o]={...s,[n]:[...u,r].sort((p,b)=>new Date(b.metadata.minedAt).getTime()-new Date(p.metadata.minedAt).getTime())}}),t},filterSpamTransactions(i){return i.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},clearCursor(){vt.next=void 0},resetTransactions(){vt.transactions=[],vt.transactionsByYear={},vt.loading=!1,vt.empty=!1,vt.next=void 0}},Ot=Rt({wcError:!1,buffering:!1}),we={state:Ot,subscribeKey(i,e){return ei(Ot,i,e)},_getClient(){if(!Ot._client)throw new Error("ConnectionController client not set");return Ot._client},setClient(i){Ot._client=mn(i)},connectWalletConnect(){Ot.wcPromise=this._getClient().connectWalletConnect(i=>{Ot.wcUri=i,Ot.wcPairingExpiry=H.getPairingExpiry()}),Le.setConnectedConnector("WALLET_CONNECT")},async connectExternal(i){var e,t;await((t=(e=this._getClient()).connectExternal)==null?void 0:t.call(e,i)),Le.setConnectedConnector(i.type)},async reconnectExternal(i){var e,t;await((t=(e=this._getClient()).reconnectExternal)==null?void 0:t.call(e,i)),Le.setConnectedConnector(i.type)},async signMessage(i){return this._getClient().signMessage(i)},parseUnits(i,e){return this._getClient().parseUnits(i,e)},formatUnits(i,e){return this._getClient().formatUnits(i,e)},async sendTransaction(i){return this._getClient().sendTransaction(i)},async estimateGas(i){return this._getClient().estimateGas(i)},async writeContract(i){return this._getClient().writeContract(i)},async getEnsAddress(i){return this._getClient().getEnsAddress(i)},async getEnsAvatar(i){return this._getClient().getEnsAvatar(i)},checkInstalled(i){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,i)},resetWcConnection(){Ot.wcUri=void 0,Ot.wcPairingExpiry=void 0,Ot.wcPromise=void 0,Ot.wcLinking=void 0,Ot.recentWallet=void 0,Yt.resetTransactions(),Le.deleteWalletConnectDeepLink()},setWcLinking(i){Ot.wcLinking=i},setWcError(i){Ot.wcError=i,Ot.buffering=!1},setRecentWallet(i){Ot.recentWallet=i},setBuffering(i){Ot.buffering=i},async disconnect(){await this._getClient().disconnect(),Le.removeConnectedWalletImageUrl(),this.resetWcConnection()}},Bs=Rt({loading:!1,open:!1,selectedNetworkId:void 0}),ro={state:Bs,subscribe(i){return ni(Bs,()=>i(Bs))},set(i){Object.assign(Bs,{...Bs,...i})}};qo.extend(Cp);qo.extend(Ap);const Pp={..._p,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};qo.locale("en-web3-modal",Pp);const Fu={getYear(i=new Date().toISOString()){return qo(i).year()},getRelativeDateFromNow(i){return qo(i).locale("en-web3-modal").fromNow(!0)},formatDate(i,e="DD MMM"){return qo(i).format(e)}},Xn={caipNetworkIdToNumber(i){return i?Number(i.split(":")[1]):void 0}},Ne={bigNumber(i){return new Ha(i)},multiply(i,e){if(i===void 0||e===void 0)return Ha(0);const t=new Ha(i),r=new Ha(e);return t.multipliedBy(r)},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Np=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];function un(i,e){return e==="light"?{"--w3m-accent":(i==null?void 0:i["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(i==null?void 0:i["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const Me=Rt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),K={state:Me,subscribe(i){return ni(Me,()=>i(Me))},subscribeKey(i,e){return ei(Me,i,e)},_getClient(){if(!Me._client)throw new Error("NetworkController client not set");return Me._client},setClient(i){Me._client=mn(i)},setCaipNetwork(i){Me.caipNetwork=i,ro.set({selectedNetworkId:i==null?void 0:i.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(i){Me.caipNetwork=i,ro.set({selectedNetworkId:i==null?void 0:i.id}),Me.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(i){Me.requestedCaipNetworks=i},setAllowUnsupportedChain(i){Me.allowUnsupportedChain=i},setSmartAccountEnabledNetworks(i){Me.smartAccountEnabledNetworks=i},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:i,requestedCaipNetworks:e}=Me,t=i,r=e;return H.sortRequestedNetworks(t,r)},async getApprovedCaipNetworksData(){const i=await this._getClient().getApprovedCaipNetworksData();Me.supportsAllNetworks=i.supportsAllNetworks,Me.approvedCaipNetworkIds=i.approvedCaipNetworkIds},async switchActiveNetwork(i){await this._getClient().switchCaipNetwork(i),Me.caipNetwork=i,i&&ce.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:i.id}})},checkIfSupportedNetwork(){var i;Me.isUnsupportedChain=!((i=Me.requestedCaipNetworks)!=null&&i.some(e=>{var t;return e.id===((t=Me.caipNetwork)==null?void 0:t.id)})),Me.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){var e,t;const i=Xn.caipNetworkIdToNumber((e=Me.caipNetwork)==null?void 0:e.id);return i?!!((t=Me.smartAccountEnabledNetworks)!=null&&t.includes(i)):!1},resetNetwork(){Me.isDefaultCaipNetwork||(Me.caipNetwork=void 0),Me.approvedCaipNetworkIds=void 0,Me.supportsAllNetworks=!0,Me.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{pe.open({view:"UnsupportedChain"})},300)}},Zs={async getTokenList(){var t,r;const i=await ri.fetchSwapTokens({chainId:(t=K.state.caipNetwork)==null?void 0:t.id,projectId:ee.state.projectId});return((r=i==null?void 0:i.tokens)==null?void 0:r.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){const i=ee.state.projectId,e=K.state.caipNetwork;return e?await ri.fetchGasPrice({projectId:i,chainId:e.id}):null},async fetchSwapAllowance({tokenAddress:i,userAddress:e,sourceTokenAmount:t,sourceTokenDecimals:r}){const o=ee.state.projectId,n=await ri.fetchSwapAllowance({projectId:o,tokenAddress:i,userAddress:e});if(n!=null&&n.allowance&&t&&r){const s=we.parseUnits(t,r);return BigInt(n.allowance)>=s}return!1},async getMyTokensWithBalance(){const i=j.state.address,e=K.state.caipNetwork;if(!i||!e)return[];const r=(await ri.getBalance(i,e.id)).balances;return this.mapBalancesToSwapTokens(r)},mapBalancesToSwapTokens(i){return(i==null?void 0:i.map(e=>({...e,address:e!=null&&e.address?e.address:`${e.chainId}:${Ct.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},mt=Rt({view:"Connect",history:["Connect"],transactionStack:[]}),N={state:mt,subscribeKey(i,e){return ei(mt,i,e)},pushTransactionStack(i){mt.transactionStack.push(i)},popTransactionStack(i){var t,r;const e=mt.transactionStack.pop();e&&(i?(this.goBack(),(t=e==null?void 0:e.onCancel)==null||t.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(r=e==null?void 0:e.onSuccess)==null||r.call(e)))},push(i,e){i!==mt.view&&(mt.view=i,mt.history.push(i),mt.data=e)},reset(i){mt.view=i,mt.history=[i]},replace(i,e){mt.history.length>=1&&mt.history.at(-1)!==i&&(mt.view=i,mt.history[mt.history.length-1]=i,mt.data=e)},goBack(){if(mt.history.length>1){mt.history.pop();const[i]=mt.history.slice(-1);i&&(mt.view=i)}},goBackToIndex(i){if(mt.history.length>1){mt.history=mt.history.slice(0,i+1);const[e]=mt.history.slice(-1);e&&(mt.view=e)}}},or={getGasPriceInEther(i,e){const t=e*i;return Number(t)/1e18},getGasPriceInUSD(i,e,t){const r=or.getGasPriceInEther(e,t);return Ne.bigNumber(i).multipliedBy(r).toNumber()},getPriceImpact({sourceTokenAmount:i,sourceTokenPriceInUSD:e,toTokenPriceInUSD:t,toTokenAmount:r,gasPriceInUSD:o}){return Ne.bigNumber(i).multipliedBy(e).plus(o).dividedBy(r).minus(t).dividedBy(t).multipliedBy(100).toNumber()},getMaxSlippage(i,e){const t=Ne.bigNumber(i).dividedBy(100);return Ne.multiply(e,t).toNumber()},getProviderFee(i,e=.0085){return Ne.bigNumber(i).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(i,e){const t=e||"0";return Ne.bigNumber(i).isZero()?!0:Ne.bigNumber(Ne.bigNumber(t)).isGreaterThan(i)},isInsufficientSourceTokenForSwap(i,e,t){var n,s;const r=(s=(n=t==null?void 0:t.find(a=>a.address===e))==null?void 0:n.quantity)==null?void 0:s.numeric;return Ne.bigNumber(r||"0").isLessThan(i)},getToTokenAmount({sourceToken:i,toToken:e,sourceTokenPrice:t,toTokenPrice:r,sourceTokenAmount:o}){if(o==="0"||!i||!e)return"0";const n=i.decimals,s=t,a=e.decimals,u=r;if(u<=0)return"0";const p=Ne.bigNumber(o).multipliedBy(.0085),C=Ne.bigNumber(o).minus(p).multipliedBy(Ne.bigNumber(10).pow(n)),x=Ne.bigNumber(s).dividedBy(u),S=n-a;return C.multipliedBy(x).dividedBy(Ne.bigNumber(10).pow(S)).dividedBy(Ne.bigNumber(10).pow(a)).toFixed(a).toString()}},Op=15e4,li={initializing:!1,initialized:!1,loading:!1,loadingPrices:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,transactionLoading:!1,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Ct.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:BigInt(0),gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},P=Rt(li),J={state:P,subscribe(i){return ni(P,()=>i(P))},subscribeKey(i,e){return ei(P,i,e)},getParams(){var s,a,u,p,b,C,x,S,k;const{address:i}=j.state,e=`${(s=K.state.caipNetwork)==null?void 0:s.id}:${Ct.NATIVE_TOKEN_ADDRESS}`;if(!i)throw new Error("No address found to swap the tokens from.");const t=j.state.caipAddress,r=!((a=P.toToken)!=null&&a.address)||!((u=P.toToken)!=null&&u.decimals),o=!((p=P.sourceToken)!=null&&p.address)||!((b=P.sourceToken)!=null&&b.decimals)||!Ne.bigNumber(P.sourceTokenAmount).isGreaterThan(0),n=!P.sourceTokenAmount;return{networkAddress:e,fromAddress:i,fromCaipAddress:j.state.caipAddress,sourceTokenAddress:(C=P.sourceToken)==null?void 0:C.address,toTokenAddress:(x=P.toToken)==null?void 0:x.address,toTokenAmount:P.toTokenAmount,toTokenDecimals:(S=P.toToken)==null?void 0:S.decimals,sourceTokenAmount:P.sourceTokenAmount,sourceTokenDecimals:(k=P.sourceToken)==null?void 0:k.decimals,invalidToToken:r,invalidSourceToken:o,invalidSourceTokenAmount:n,availableToSwap:t&&!r&&!o&&!n}},setLoading(i){P.loading=i},setSourceToken(i){if(!i){P.sourceToken=i,P.sourceTokenAmount="",P.sourceTokenPriceInUSD=0;return}P.sourceToken=i,this.setTokenPrice(i.address,"sourceToken")},setSourceTokenAmount(i){P.sourceTokenAmount=i},setToToken(i){if(!i){P.toToken=i,P.toTokenAmount="",P.toTokenPriceInUSD=0;return}P.toToken=i,this.setTokenPrice(i.address,"toToken")},setToTokenAmount(i){P.toTokenAmount=i},async setTokenPrice(i,e){const{availableToSwap:t}=this.getParams();let r=P.tokensPriceMap[i]||0;r||(P.loadingPrices=!0,r=await this.getAddressPrice(i)),e==="sourceToken"?P.sourceTokenPriceInUSD=r:e==="toToken"&&(P.toTokenPriceInUSD=r),P.loadingPrices&&(P.loadingPrices=!1,t&&this.swapTokens())},switchTokens(){if(P.initializing||!P.initialized)return;const i=P.toToken?{...P.toToken}:void 0,e=P.sourceToken?{...P.sourceToken}:void 0,t=i&&P.toTokenAmount===""?"1":P.toTokenAmount;this.setSourceToken(i),this.setToToken(e),this.setSourceTokenAmount(t),this.setToTokenAmount(""),this.swapTokens()},resetState(){P.myTokensWithBalance=li.myTokensWithBalance,P.tokensPriceMap=li.tokensPriceMap,P.initialized=li.initialized,P.sourceToken=li.sourceToken,P.sourceTokenAmount=li.sourceTokenAmount,P.sourceTokenPriceInUSD=li.sourceTokenPriceInUSD,P.toToken=li.toToken,P.toTokenAmount=li.toTokenAmount,P.toTokenPriceInUSD=li.toTokenPriceInUSD,P.networkPrice=li.networkPrice,P.networkTokenSymbol=li.networkTokenSymbol,P.networkBalanceInUSD=li.networkBalanceInUSD,P.inputError=li.inputError},resetValues(){var t;const{networkAddress:i}=this.getParams(),e=(t=P.tokens)==null?void 0:t.find(r=>r.address===i);this.setSourceToken(e),this.setToToken(void 0)},clearError(){P.transactionError=void 0},async initializeState(){if(!P.initializing){if(P.initializing=!0,!P.initialized)try{await this.fetchTokens(),P.initialized=!0}catch{P.initialized=!1,ye.showError("Failed to initialize swap"),N.goBack()}P.initializing=!1}},async fetchTokens(){var t;const{networkAddress:i}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(t=P.tokens)==null?void 0:t.find(r=>r.address===i);e&&(P.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))},async getTokenList(){const i=await Zs.getTokenList();P.tokens=i,P.popularTokens=i.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0).filter(e=>!!Ct.SWAP_POPULAR_TOKENS.includes(e.symbol),{}),P.suggestedTokens=i.filter(e=>!!Ct.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(i){var u,p;const e=P.tokensPriceMap[i];if(e)return e;const r=(await ri.fetchTokenPrice({projectId:ee.state.projectId,addresses:[i]})).fungibles||[],o=[...P.tokens||[],...P.myTokensWithBalance||[]],n=(u=o==null?void 0:o.find(b=>b.address===i))==null?void 0:u.symbol,s=((p=r.find(b=>b.symbol.toLowerCase()===(n==null?void 0:n.toLowerCase())))==null?void 0:p.price)||"0",a=parseFloat(s);return P.tokensPriceMap[i]=a,a},async getNetworkTokenPrice(){var o;const{networkAddress:i}=this.getParams(),t=(o=(await ri.fetchTokenPrice({projectId:ee.state.projectId,addresses:[i]})).fungibles)==null?void 0:o[0],r=(t==null?void 0:t.price)||"0";P.tokensPriceMap[i]=parseFloat(r),P.networkTokenSymbol=(t==null?void 0:t.symbol)||"",P.networkPrice=r},async getMyTokensWithBalance(){const i=await Zs.getMyTokensWithBalance();i&&(await this.getInitialGasPrice(),this.setBalances(i))},setBalances(i){const{networkAddress:e}=this.getParams(),t=K.state.caipNetwork;if(!t)return;const r=i.find(o=>o.address===e);i.forEach(o=>{P.tokensPriceMap[o.address]=o.price||0}),P.myTokensWithBalance=i.filter(o=>o.address.startsWith(t.id)),P.networkBalanceInUSD=r?Ne.multiply(r.quantity.numeric,r.price).toString():"0"},async getInitialGasPrice(){const i=await Zs.fetchGasPrice();if(!i)return{gasPrice:null,gasPriceInUsd:null};const e=i.standard,t=BigInt(e),r=BigInt(Op),o=or.getGasPriceInUSD(P.networkPrice,r,t);return P.gasPriceInUSD=o,{gasPrice:t,gasPriceInUSD:P.gasPriceInUSD}},async swapTokens(){const i=P.sourceToken,e=P.toToken,t=Ne.bigNumber(P.sourceTokenAmount).isGreaterThan(0);if(!e||!i||P.loadingPrices||!t)return;if(P.loading=!0,P.toTokenAmount=or.getToTokenAmount({sourceToken:P.sourceToken,toToken:P.toToken,sourceTokenPrice:P.sourceTokenPriceInUSD,toTokenPrice:P.toTokenPriceInUSD,sourceTokenAmount:P.sourceTokenAmount}),this.hasInsufficientToken(P.sourceTokenAmount,i.address))P.inputError="Insufficient balance";else{P.inputError=void 0;const o=await this.getTransaction();this.setTransactionDetails(o)}P.loading=!1},async getTransaction(){const{fromCaipAddress:i,availableToSwap:e}=this.getParams(),t=P.sourceToken,r=P.toToken;if(!(!i||!e||!t||!r||!P.loading))try{P.loading=!0;const o=await Zs.fetchSwapAllowance({userAddress:i,tokenAddress:t.address,sourceTokenAmount:P.sourceTokenAmount,sourceTokenDecimals:t.decimals});let n;return o?n=await this.createSwapTransaction():n=await this.createAllowanceTransaction(),P.loading=!1,P.fetchError=!1,n}catch{ye.showError("Failed to check allowance"),P.approvalTransaction=void 0,P.swapTransaction=void 0,P.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:i,fromAddress:e,sourceTokenAddress:t,toTokenAddress:r}=this.getParams();if(!(!i||!r)){if(!t)throw new Error(">>> createAllowanceTransaction - No source token address found.");try{const o=await ri.generateApproveCalldata({projectId:ee.state.projectId,from:t,to:r,userAddress:i}),n=await we.estimateGas({address:e,to:H.getPlainAddress(o.tx.to),data:o.tx.data}),s={data:o.tx.data,to:H.getPlainAddress(o.tx.from),gas:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:P.toTokenAmount};return P.swapTransaction=void 0,P.approvalTransaction=s,s}catch{ye.showError("Failed to create approval transaction"),P.approvalTransaction=void 0,P.swapTransaction=void 0,P.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:i,fromCaipAddress:e,sourceTokenAmount:t}=this.getParams(),r=P.sourceToken,o=P.toToken;if(!e||!t||!r||!o)return;const n=we.parseUnits(t,r.decimals).toString();try{const s=await ri.generateSwapCalldata({projectId:ee.state.projectId,userAddress:e,from:r.address,to:o.address,amount:n}),a=r.address===i,u=BigInt(s.tx.eip155.gas),p=BigInt(s.tx.eip155.gasPrice),b={data:s.tx.data,to:H.getPlainAddress(s.tx.to),gas:u,gasPrice:p,value:BigInt(a?n:"0"),toAmount:P.toTokenAmount};return P.gasPriceInUSD=or.getGasPriceInUSD(P.networkPrice,u,p),P.approvalTransaction=void 0,P.swapTransaction=b,b}catch{P.approvalTransaction=void 0,P.swapTransaction=void 0,P.fetchError=!0;return}},async sendTransactionForApproval(i){const{fromAddress:e}=this.getParams();P.transactionLoading=!0,N.pushTransactionStack({view:null,goBack:!0});try{await we.sendTransaction({address:e,to:i.to,data:i.data,value:BigInt(i.value),gasPrice:BigInt(i.gasPrice)}),P.approvalTransaction=void 0,P.transactionLoading=!1,this.swapTokens()}catch(t){const r=t;P.transactionError=r==null?void 0:r.shortMessage,P.transactionLoading=!1}},async sendTransactionForSwap(i){var r,o;if(!i)return;const{fromAddress:e,toTokenAmount:t}=this.getParams();P.transactionLoading=!0,N.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){J.resetState()}});try{const n=`Swapped ${(r=P.sourceToken)==null?void 0:r.symbol} to ${Ne.formatNumberToLocalString(t,3)} ${(o=P.toToken)==null?void 0:o.symbol}!`,s=await we.sendTransaction({address:e,to:i.to,data:i.data,gas:i.gas,gasPrice:BigInt(i.gasPrice),value:i.value});return P.transactionLoading=!1,ye.showSuccess(n),J.resetState(),J.getMyTokensWithBalance(),s}catch(n){const s=n;P.transactionError=s==null?void 0:s.shortMessage,P.transactionLoading=!1,ye.showError((s==null?void 0:s.shortMessage)||"Transaction error");return}},hasInsufficientToken(i,e){const t=or.isInsufficientSourceTokenForSwap(i,e,P.myTokensWithBalance);return or.isInsufficientNetworkTokenForGas(P.networkBalanceInUSD,P.gasPriceInUSD)||t},setTransactionDetails(i){const{toTokenAddress:e,toTokenDecimals:t}=this.getParams();!i||!e||!t||(P.gasPriceInUSD=or.getGasPriceInUSD(P.networkPrice,i.gas,i.gasPrice),P.priceImpact=or.getPriceImpact({sourceTokenAmount:P.sourceTokenAmount,sourceTokenPriceInUSD:P.sourceTokenPriceInUSD,toTokenPriceInUSD:P.toTokenPriceInUSD,toTokenAmount:P.toTokenAmount,gasPriceInUSD:P.gasPriceInUSD}),P.maxSlippage=or.getMaxSlippage(P.slippage,P.toTokenAmount),P.providerFee=or.getProviderFee(P.sourceTokenAmount))}},ke=Rt({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),j={state:ke,subscribe(i){return ni(ke,()=>i(ke))},subscribeKey(i,e){return ei(ke,i,e)},setIsConnected(i){ke.isConnected=i},setCaipAddress(i){ke.caipAddress=i,ke.address=i?H.getPlainAddress(i):void 0},setBalance(i,e){ke.balance=i,ke.balanceSymbol=e},setProfileName(i){ke.profileName=i},setProfileImage(i){ke.profileImage=i},setAddressExplorerUrl(i){ke.addressExplorerUrl=i},setSmartAccountDeployed(i){ke.smartAccountDeployed=i},setCurrentTab(i){ke.currentTab=i},setTokenBalance(i){i&&(ke.tokenBalance=mn(i))},setConnectedWalletInfo(i){ke.connectedWalletInfo=i},setPreferredAccountType(i){ke.preferredAccountType=i},setSocialProvider(i){i&&(ke.socialProvider=i)},async fetchTokenBalance(){var e;const i=(e=K.state.caipNetwork)==null?void 0:e.id;try{if(ke.address&&i){const t=await ri.getBalance(ke.address,i);this.setTokenBalance(t.balances),J.setBalances(Zs.mapBalancesToSwapTokens(t.balances))}}catch{ye.showError("Failed to fetch token balance")}},resetAccount(){ke.isConnected=!1,ke.smartAccountDeployed=!1,ke.currentTab=0,ke.caipAddress=void 0,ke.address=void 0,ke.balance=void 0,ke.balanceSymbol=void 0,ke.profileName=void 0,ke.profileImage=void 0,ke.addressExplorerUrl=void 0,ke.tokenBalance=[],ke.connectedWalletInfo=void 0,ke.preferredAccountType=void 0,ke.socialProvider=void 0}},Fi=Rt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),jt={state:Fi,subscribeNetworkImages(i){return ni(Fi.networkImages,()=>i(Fi.networkImages))},subscribeKey(i,e){return ei(Fi,i,e)},subscribe(i){return ni(Fi,()=>i(Fi))},setWalletImage(i,e){Fi.walletImages[i]=e},setNetworkImage(i,e){Fi.networkImages[i]=e},setConnectorImage(i,e){Fi.connectorImages[i]=e},setTokenImage(i,e){Fi.tokenImages[i]=e},setCurrencyImage(i,e){Fi.currencyImages[i]=e}},Nr=Rt({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Et={state:Nr,subscribe(i){return ni(Nr,()=>i(Nr))},setThemeMode(i){Nr.themeMode=i;try{const e=ge.getAuthConnector();if(e){const t=Et.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:i,themeVariables:t,w3mThemeVariables:un(t,i)})}}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(i){Nr.themeVariables={...Nr.themeVariables,...i};try{const e=ge.getAuthConnector();if(e){const t=Et.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:un(Nr.themeVariables,Nr.themeMode)})}}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return Wu(Nr)}},tn=Rt({connectors:[]}),ge={state:tn,subscribeKey(i,e){return ei(tn,i,e)},setConnectors(i){tn.connectors=i.map(e=>mn(e))},addConnector(i){var e,t;if(tn.connectors.push(mn(i)),i.id==="w3mAuth"){const r=i,o=Wu(ee.state),n=Et.getSnapshot().themeMode,s=Et.getSnapshot().themeVariables;(t=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),r.provider.syncTheme({themeMode:n,themeVariables:s,w3mThemeVariables:un(s,n)})}},getAuthConnector(){return tn.connectors.find(i=>i.type==="AUTH")},getAnnouncedConnectorRdns(){return tn.connectors.filter(i=>i.type==="ANNOUNCED").map(i=>{var e;return(e=i.info)==null?void 0:e.rdns})},getConnectors(){return tn.connectors},getConnector(i,e){return tn.connectors.find(t=>{var r;return t.explorerId===i||((r=t.info)==null?void 0:r.rdns)===e})}},Mp=H.getApiUrl(),ti=new ju({baseUrl:Mp}),Dp="40",N0="4",Ft=Rt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),me={state:Ft,subscribeKey(i,e){return ei(Ft,i,e)},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=ee.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _fetchWalletImage(i){const e=`${ti.baseUrl}/getWalletImage/${i}`,t=await ti.getBlob({path:e,headers:me._getApiHeaders()});jt.setWalletImage(i,URL.createObjectURL(t))},async _fetchNetworkImage(i){const e=`${ti.baseUrl}/public/getAssetImage/${i}`,t=await ti.getBlob({path:e,headers:me._getApiHeaders()});jt.setNetworkImage(i,URL.createObjectURL(t))},async _fetchConnectorImage(i){const e=`${ti.baseUrl}/public/getAssetImage/${i}`,t=await ti.getBlob({path:e,headers:me._getApiHeaders()});jt.setConnectorImage(i,URL.createObjectURL(t))},async _fetchCurrencyImage(i){const e=`${ti.baseUrl}/public/getCurrencyImage/${i}`,t=await ti.getBlob({path:e,headers:me._getApiHeaders()});jt.setCurrencyImage(i,URL.createObjectURL(t))},async _fetchTokenImage(i){const e=`${ti.baseUrl}/public/getTokenImage/${i}`,t=await ti.getBlob({path:e,headers:me._getApiHeaders()});jt.setTokenImage(i,URL.createObjectURL(t))},async fetchNetworkImages(){const{requestedCaipNetworks:i}=K.state,e=i==null?void 0:i.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>me._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:i}=ge.state,e=i.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>me._fetchConnectorImage(t)))},async fetchCurrencyImages(i=[]){await Promise.allSettled(i.map(e=>me._fetchCurrencyImage(e)))},async fetchTokenImages(i=[]){await Promise.allSettled(i.map(e=>me._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:i}=ee.state;if(i!=null&&i.length){const{data:e}=await ti.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:i!=null&&i.length?String(i.length):N0,include:i==null?void 0:i.join(",")}});e.sort((r,o)=>i.indexOf(r.id)-i.indexOf(o.id));const t=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(t.map(r=>me._fetchWalletImage(r))),Ft.featured=e}},async fetchRecommendedWallets(){var p;const{includeWalletIds:i,excludeWalletIds:e,featuredWalletIds:t}=ee.state,r=[...e??[],...t??[]].filter(Boolean),{data:o,count:n}=await ti.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",chains:(p=K.state.caipNetwork)==null?void 0:p.id,entries:N0,include:i==null?void 0:i.join(","),exclude:r==null?void 0:r.join(",")}}),s=Le.getRecentWallets(),a=o.map(b=>b.image_id).filter(Boolean),u=s.map(b=>b.image_id).filter(Boolean);await Promise.allSettled([...a,...u].map(b=>me._fetchWalletImage(b))),Ft.recommended=o,Ft.count=n??0},async fetchWallets({page:i}){var u;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=ee.state,o=[...Ft.recommended.map(({id:p})=>p),...t??[],...r??[]].filter(Boolean),{data:n,count:s}=await ti.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:String(i),entries:Dp,chains:(u=K.state.caipNetwork)==null?void 0:u.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=n.map(p=>p.image_id).filter(Boolean);await Promise.allSettled([...a.map(p=>me._fetchWalletImage(p)),H.wait(300)]),Ft.wallets=[...Ft.wallets,...n],Ft.count=s>Ft.count?s:Ft.count,Ft.page=i},async searchWallet({search:i}){var n;const{includeWalletIds:e,excludeWalletIds:t}=ee.state;Ft.search=[];const{data:r}=await ti.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:"100",search:i==null?void 0:i.trim(),chains:(n=K.state.caipNetwork)==null?void 0:n.id,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),o=r.map(s=>s.image_id).filter(Boolean);await Promise.allSettled([...o.map(s=>me._fetchWalletImage(s)),H.wait(300)]),Ft.search=r},async reFetchWallets(){Ft.page=1,Ft.wallets=[],await me.fetchFeaturedWallets(),await me.fetchRecommendedWallets()},prefetch(){const i=[me.fetchFeaturedWallets(),me.fetchRecommendedWallets(),me.fetchNetworkImages(),me.fetchConnectorImages()];ee.state.enableAnalytics===void 0&&i.push(me.fetchAnalyticsConfig()),Ft.prefetchPromise=Promise.race([Promise.allSettled(i),H.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:i}=await ti.get({path:"/getAnalyticsConfig",headers:me._getApiHeaders()});ee.setEnableAnalytics(i)}},Kn=Rt({loading:!1,open:!1}),pe={state:Kn,subscribe(i){return ni(Kn,()=>i(Kn))},subscribeKey(i,e){return ei(Kn,i,e)},async open(i){await me.state.prefetchPromise;const e=j.state.isConnected;i!=null&&i.view?N.reset(i.view):e?N.reset("Account"):N.reset("Connect"),Kn.open=!0,ro.set({open:!0}),ce.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const i=j.state.isConnected;Kn.open=!1,ro.set({open:!1}),ce.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:i}})},setLoading(i){Kn.loading=i,ro.set({loading:i})}},Ks={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},du={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Lp={providers:f1,selectedProvider:null,error:null,purchaseCurrency:Ks,paymentCurrency:du,purchaseCurrencies:[Ks],paymentCurrencies:[],quotesLoading:!1},Re=Rt(Lp),Ie={state:Re,subscribe(i){return ni(Re,()=>i(Re))},subscribeKey(i,e){return ei(Re,i,e)},setSelectedProvider(i){Re.selectedProvider=i},setPurchaseCurrency(i){Re.purchaseCurrency=i},setPaymentCurrency(i){Re.paymentCurrency=i},setPurchaseAmount(i){this.state.purchaseAmount=i},setPaymentAmount(i){this.state.paymentAmount=i},async getAvailableCurrencies(){const i=await ri.getOnrampOptions();Re.purchaseCurrencies=i.purchaseCurrencies,Re.paymentCurrencies=i.paymentCurrencies,Re.paymentCurrency=i.paymentCurrencies[0]||du,Re.purchaseCurrency=i.purchaseCurrencies[0]||Ks,await me.fetchCurrencyImages(i.paymentCurrencies.map(e=>e.id)),await me.fetchTokenImages(i.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var i,e;Re.quotesLoading=!0;try{const t=await ri.getOnrampQuote({purchaseCurrency:Re.purchaseCurrency,paymentCurrency:Re.paymentCurrency,amount:((i=Re.paymentAmount)==null?void 0:i.toString())||"0",network:(e=Re.purchaseCurrency)==null?void 0:e.symbol});return Re.quotesLoading=!1,Re.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return Re.error=t.message,Re.quotesLoading=!1,null}finally{Re.quotesLoading=!1}},resetState(){Re.providers=f1,Re.selectedProvider=null,Re.error=null,Re.purchaseCurrency=Ks,Re.paymentCurrency=du,Re.purchaseCurrencies=[Ks],Re.paymentCurrencies=[],Re.paymentAmount=void 0,Re.purchaseAmount=void 0,Re.quotesLoading=!1}},Mt=Rt({loading:!1}),$e={state:Mt,subscribe(i){return ni(Mt,()=>i(Mt))},subscribeKey(i,e){return ei(Mt,i,e)},setToken(i){i&&(Mt.token=mn(i))},setTokenAmount(i){Mt.sendTokenAmount=i},setReceiverAddress(i){Mt.receiverAddress=i},setReceiverProfileImageUrl(i){Mt.receiverProfileImageUrl=i},setReceiverProfileName(i){Mt.receiverProfileName=i},setGasPrice(i){Mt.gasPrice=i},setGasPriceInUsd(i){Mt.gasPriceInUSD=i},setLoading(i){Mt.loading=i},sendToken(){var i,e;(i=this.state.token)!=null&&i.address&&this.state.sendTokenAmount&&this.state.receiverAddress?this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals}):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((e=this.state.token)!=null&&e.quantity.decimals)&&this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals})},async sendNativeToken(i){N.pushTransactionStack({view:"Account",goBack:!1});const e=i.receiverAddress,t=j.state.address,r=we.parseUnits(i.sendTokenAmount.toString(),Number(i.decimals)),o="0x";try{await we.sendTransaction({to:e,address:t,data:o,value:r,gasPrice:i.gasPrice}),ye.showSuccess("Transaction started"),this.resetSend()}catch{ye.showError("Something went wrong")}},async sendERC20Token(i){N.pushTransactionStack({view:"Account",goBack:!1});const e=we.parseUnits(i.sendTokenAmount.toString(),Number(i.decimals));try{j.state.address&&i.sendTokenAmount&&i.receiverAddress&&i.tokenAddress&&(await we.writeContract({fromAddress:j.state.address,tokenAddress:H.getPlainAddress(i.tokenAddress),receiverAddress:i.receiverAddress,tokenAmount:e,method:"transfer",abi:Np}),ye.showSuccess("Transaction started"),this.resetSend())}catch{ye.showError("Something went wrong")}},resetSend(){Mt.token=void 0,Mt.sendTokenAmount=void 0,Mt.receiverAddress=void 0,Mt.receiverProfileImageUrl=void 0,Mt.receiverProfileName=void 0,Mt.loading=!1}},zi=Rt({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),mi={state:zi,subscribe(i){return ni(zi,()=>i(zi))},subscribeKey(i,e){return ei(zi,i,e)},showTooltip({message:i,triggerRect:e,variant:t}){zi.open=!0,zi.message=i,zi.triggerRect=e,zi.variant=t},hide(){zi.open=!1,zi.message="",zi.triggerRect={width:0,height:0,top:0,left:0}}},Pe={getWalletImage(i){if(i!=null&&i.image_url)return i==null?void 0:i.image_url;if(i!=null&&i.image_id)return jt.state.walletImages[i.image_id]},getNetworkImage(i){if(i!=null&&i.imageUrl)return i==null?void 0:i.imageUrl;if(i!=null&&i.imageId)return jt.state.networkImages[i.imageId]},getConnectorImage(i){if(i!=null&&i.imageUrl)return i.imageUrl;if(i!=null&&i.imageId)return jt.state.connectorImages[i.imageId]}},ka={goBackOrCloseModal(){N.state.history.length>1?N.goBack():pe.close()},navigateAfterNetworkSwitch(){const{history:i}=N.state,e=i.findIndex(t=>t==="Networks");e>=1?N.goBackToIndex(e-1):pe.close()},navigateAfterPreferredAccountTypeSelect(){const{isSiweEnabled:i}=ee.state;i?N.push("ConnectingSiwe"):N.push("Account")}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa=globalThis,zu=Xa.ShadowRoot&&(Xa.ShadyCSS===void 0||Xa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hu=Symbol(),O0=new WeakMap;let w1=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Hu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(zu&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=O0.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&O0.set(t,e))}return e}toString(){return this.cssText}};const Ni=i=>new w1(typeof i=="string"?i:i+"",void 0,Hu),Z=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new w1(t,i,Hu)},Up=(i,e)=>{if(zu)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=Xa.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},M0=zu?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ni(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bp,defineProperty:Wp,getOwnPropertyDescriptor:jp,getOwnPropertyNames:Fp,getOwnPropertySymbols:zp,getPrototypeOf:Hp}=Object,hn=globalThis,D0=hn.trustedTypes,Vp=D0?D0.emptyScript:"",Nc=hn.reactiveElementPolyfillSupport,Ys=(i,e)=>i,ol={toAttribute(i,e){switch(e){case Boolean:i=i?Vp:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Vu=(i,e)=>!Bp(i,e),L0={attribute:!0,type:String,converter:ol,reflect:!1,hasChanged:Vu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),hn.litPropertyMetadata??(hn.litPropertyMetadata=new WeakMap);let zo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=L0){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Wp(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=jp(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);n.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??L0}static _$Ei(){if(this.hasOwnProperty(Ys("elementProperties")))return;const e=Hp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ys("properties"))){const t=this.properties,r=[...Fp(t),...zp(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(M0(o))}else e!==void 0&&t.push(M0(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Up(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:ol).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:ol;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Vu)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};zo.elementStyles=[],zo.shadowRootOptions={mode:"open"},zo[Ys("elementProperties")]=new Map,zo[Ys("finalized")]=new Map,Nc==null||Nc({ReactiveElement:zo}),(hn.reactiveElementVersions??(hn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs=globalThis,sl=Qs.trustedTypes,U0=sl?sl.createPolicy("lit-html",{createHTML:i=>i}):void 0,g1="$lit$",on=`lit$${Math.random().toFixed(9).slice(2)}$`,m1="?"+on,Zp=`<${m1}>`,oo=document,aa=()=>oo.createComment(""),la=i=>i===null||typeof i!="object"&&typeof i!="function",v1=Array.isArray,Gp=i=>v1(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Oc=`[ 	
\f\r]`,Ws=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B0=/-->/g,W0=/>/g,Yn=RegExp(`>|${Oc}(?:([^\\s"'>=/]+)(${Oc}*=${Oc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j0=/'/g,F0=/"/g,b1=/^(?:script|style|textarea|title)$/i,y1=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),$=y1(1),W=y1(2),so=Symbol.for("lit-noChange"),St=Symbol.for("lit-nothing"),z0=new WeakMap,eo=oo.createTreeWalker(oo,129);function x1(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return U0!==void 0?U0.createHTML(e):e}const qp=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":"",s=Ws;for(let a=0;a<t;a++){const u=i[a];let p,b,C=-1,x=0;for(;x<u.length&&(s.lastIndex=x,b=s.exec(u),b!==null);)x=s.lastIndex,s===Ws?b[1]==="!--"?s=B0:b[1]!==void 0?s=W0:b[2]!==void 0?(b1.test(b[2])&&(o=RegExp("</"+b[2],"g")),s=Yn):b[3]!==void 0&&(s=Yn):s===Yn?b[0]===">"?(s=o??Ws,C=-1):b[1]===void 0?C=-2:(C=s.lastIndex-b[2].length,p=b[1],s=b[3]===void 0?Yn:b[3]==='"'?F0:j0):s===F0||s===j0?s=Yn:s===B0||s===W0?s=Ws:(s=Yn,o=void 0);const S=s===Yn&&i[a+1].startsWith("/>")?" ":"";n+=s===Ws?u+Zp:C>=0?(r.push(p),u.slice(0,C)+g1+u.slice(C)+on+S):u+on+(C===-2?a:S)}return[x1(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let hu=class C1{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,s=0;const a=e.length-1,u=this.parts,[p,b]=qp(e,t);if(this.el=C1.createElement(p,r),eo.currentNode=this.el.content,t===2){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(o=eo.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const C of o.getAttributeNames())if(C.endsWith(g1)){const x=b[s++],S=o.getAttribute(C).split(on),k=/([.?@])?(.*)/.exec(x);u.push({type:1,index:n,name:k[2],strings:S,ctor:k[1]==="."?Yp:k[1]==="?"?Qp:k[1]==="@"?Jp:Fl}),o.removeAttribute(C)}else C.startsWith(on)&&(u.push({type:6,index:n}),o.removeAttribute(C));if(b1.test(o.tagName)){const C=o.textContent.split(on),x=C.length-1;if(x>0){o.textContent=sl?sl.emptyScript:"";for(let S=0;S<x;S++)o.append(C[S],aa()),eo.nextNode(),u.push({type:2,index:++n});o.append(C[x],aa())}}}else if(o.nodeType===8)if(o.data===m1)u.push({type:2,index:n});else{let C=-1;for(;(C=o.data.indexOf(on,C+1))!==-1;)u.push({type:7,index:n}),C+=on.length-1}n++}}static createElement(e,t){const r=oo.createElement("template");return r.innerHTML=e,r}};function es(i,e,t=i,r){var s,a;if(e===so)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const n=la(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=es(i,o._$AS(i,e.values),o,r)),e}let Kp=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??oo).importNode(t,!0);eo.currentNode=o;let n=eo.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let p;u.type===2?p=new Zu(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new Xp(n,this,e)),this._$AV.push(p),u=r[++a]}s!==(u==null?void 0:u.index)&&(n=eo.nextNode(),s++)}return eo.currentNode=oo,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Zu=class A1{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=St,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=es(this,e,t),la(e)?e===St||e==null||e===""?(this._$AH!==St&&this._$AR(),this._$AH=St):e!==this._$AH&&e!==so&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gp(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==St&&la(this._$AH)?this._$AA.nextSibling.data=e:this.T(oo.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=hu.createElement(x1(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const s=new Kp(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=z0.get(e.strings);return t===void 0&&z0.set(e.strings,t=new hu(e)),t}k(e){v1(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new A1(this.S(aa()),this.S(aa()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Fl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=St,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=St}_$AI(e,t=this,r,o){const n=this.strings;let s=!1;if(n===void 0)e=es(this,e,t,0),s=!la(e)||e!==this._$AH&&e!==so,s&&(this._$AH=e);else{const a=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=es(this,a[r+u],t,u),p===so&&(p=this._$AH[u]),s||(s=!la(p)||p!==this._$AH[u]),p===St?e=St:e!==St&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}s&&!o&&this.j(e)}j(e){e===St?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Yp=class extends Fl{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===St?void 0:e}},Qp=class extends Fl{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==St)}},Jp=class extends Fl{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=es(this,e,t,0)??St)===so)return;const r=this._$AH,o=e===St&&r!==St||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==St&&(r===St||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Xp=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){es(this,e)}};const Mc=Qs.litHtmlPolyfillSupport;Mc==null||Mc(hu,Zu),(Qs.litHtmlVersions??(Qs.litHtmlVersions=[])).push("3.1.3");const ef=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new Zu(e.insertBefore(aa(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let G=class extends zo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ef(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return so}};var u1;G._$litElement$=!0,G.finalized=!0,(u1=globalThis.litElementHydrateSupport)==null||u1.call(globalThis,{LitElement:G});const Dc=globalThis.litElementPolyfillSupport;Dc==null||Dc({LitElement:G});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const tf=W`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,rf=W`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let Js,pn,fn;function _1(i,e){Js=document.createElement("style"),pn=document.createElement("style"),fn=document.createElement("style"),Js.textContent=Ko(i).core.cssText,pn.textContent=Ko(i).dark.cssText,fn.textContent=Ko(i).light.cssText,document.head.appendChild(Js),document.head.appendChild(pn),document.head.appendChild(fn),Gu(e)}function Gu(i){pn&&fn&&(i==="light"?(pn.removeAttribute("media"),fn.media="enabled"):(fn.removeAttribute("media"),pn.media="enabled"))}function E1(i){Js&&pn&&fn&&(Js.textContent=Ko(i).core.cssText,pn.textContent=Ko(i).dark.cssText,fn.textContent=Ko(i).light.cssText)}function Ko(i){return{core:Z`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Ni(i!=null&&i["--w3m-color-mix-strength"]?`${i["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Ni((i==null?void 0:i["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Ni((i==null?void 0:i["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Ni((i==null?void 0:i["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Ni((i==null?void 0:i["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:Z`
      :root {
        --w3m-color-mix: ${Ni((i==null?void 0:i["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Ni(un(i,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Ni(un(i,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:Z`
      :root {
        --w3m-color-mix: ${Ni((i==null?void 0:i["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Ni(un(i,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Ni(un(i,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const Y=Z`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Ce=Z`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,qu=Z`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function nf(i,e){const{kind:t,elements:r}=e;return{kind:t,elements:r,finisher(o){customElements.get(i)||customElements.define(i,o)}}}function of(i,e){return customElements.get(i)||customElements.define(i,e),e}function I(i){return function(t){return typeof t=="function"?of(i,t):nf(i,t)}}const sf=Z`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var af=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let al=class extends G{render(){return $`<slot></slot>`}};al.styles=[Y,sf];al=af([I("wui-card")],al);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lf={attribute:!0,type:String,converter:ol,reflect:!1,hasChanged:Vu},cf=(i=lf,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,i),r==="accessor"){const{name:s}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,u,i)},init(a){return a!==void 0&&this.P(s,void 0,i),a}}}if(r==="setter"){const{name:s}=t;return function(a){const u=this[s];e.call(this,a),this.requestUpdate(s,u,i)}}throw Error("Unsupported decorator location: "+r)};function m(i){return(e,t)=>typeof t=="object"?cf(i,e,t):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ku(i){return m({...i,state:!0,attribute:!1})}const uf=Z`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,df=W`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,hf=W`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,pf=W`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,ff=W`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,wf=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,gf=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,mf=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,vf=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,bf=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,yf=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,xf=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Cf=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Af=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,_f=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,Ef=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Sf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Tf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,kf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Rf=W`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,If=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,$f=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Pf=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Nf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Of=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,Mf=W` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Df=W`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Lf=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Uf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Bf=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Wf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,jf=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Ff=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,zf=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Hf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Vf=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Zf=W`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Gf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,qf=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Kf=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Yf=W`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Qf=W`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,Jf=W`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Xf=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,e2=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,t2=W` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,i2=W`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,r2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,n2=W`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,o2=W`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,s2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,a2=W`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,l2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,c2=W`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,u2=W`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,d2=W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,h2=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,p2=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,f2=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,w2=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,g2=W`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,m2=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,v2=W`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,b2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,y2=W`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,x2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,H0=W`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var zl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const C2={add:df,allWallets:hf,arrowBottomCircle:pf,appStore:ff,apple:wf,arrowBottom:gf,arrowLeft:mf,arrowRight:vf,arrowTop:bf,bank:yf,browser:xf,card:Cf,checkmark:_f,checkmarkBold:Af,chevronBottom:Ef,chevronLeft:Sf,chevronRight:Tf,chevronTop:kf,chromeStore:Rf,clock:If,close:$f,compass:Nf,coinPlaceholder:Pf,copy:Of,cursor:Mf,cursorTransparent:Df,desktop:Lf,disconnect:Uf,discord:Bf,etherscan:Wf,extension:jf,externalLink:Ff,facebook:zf,filters:Hf,github:Vf,google:Zf,helpCircle:Gf,infoCircle:qf,mail:Kf,mobile:Yf,more:Qf,networkPlaceholder:Jf,nftPlaceholder:Xf,off:e2,playStore:t2,plus:i2,qrCode:r2,recycleHorizontal:n2,refresh:o2,search:s2,send:a2,swapHorizontal:l2,swapHorizontalMedium:u2,swapHorizontalBold:c2,swapHorizontalRoundedBold:d2,swapVertical:h2,telegram:p2,twitch:f2,twitter:H0,twitterIcon:w2,verify:g2,verifyFilled:m2,wallet:b2,walletConnect:y2,walletPlaceholder:v2,warningCircle:x2,x:H0};let ao=class extends G{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,$`${C2[this.name]}`}};ao.styles=[Y,qu,uf];zl([m()],ao.prototype,"size",void 0);zl([m()],ao.prototype,"name",void 0);zl([m()],ao.prototype,"color",void 0);ao=zl([I("wui-icon")],ao);const A2=Z`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Hl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let lo=class extends G{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,$`<img src=${this.src} alt=${this.alt} />`}};lo.styles=[Y,qu,A2];Hl([m()],lo.prototype,"src",void 0);Hl([m()],lo.prototype,"alt",void 0);Hl([m()],lo.prototype,"size",void 0);lo=Hl([I("wui-image")],lo);const _2=Z`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var E2=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ll=class extends G{render(){return $`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ll.styles=[Y,_2];ll=E2([I("wui-loading-hexagon")],ll);const S2=Z`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Yu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ts=class extends G{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,$`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ts.styles=[Y,S2];Yu([m()],ts.prototype,"color",void 0);Yu([m()],ts.prototype,"size",void 0);ts=Yu([I("wui-loading-spinner")],ts);const T2=Z`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var S1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ca=class extends G{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,n=245+r,s=360+r*1.75;return $`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};ca.styles=[Y,T2];S1([m({type:Number})],ca.prototype,"radius",void 0);ca=S1([I("wui-loading-thumbnail")],ca);const k2=Z`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Ra=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vn=class extends G{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,$`<slot></slot>`}};vn.styles=[k2];Ra([m()],vn.prototype,"width",void 0);Ra([m()],vn.prototype,"height",void 0);Ra([m()],vn.prototype,"borderRadius",void 0);Ra([m()],vn.prototype,"variant",void 0);vn=Ra([I("wui-shimmer")],vn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},k1=i=>(...e)=>({_$litDirective$:i,values:e});let R1=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R2=k1(class extends R1{constructor(i){var e;if(super(i),i.type!==T1.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(s?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return so}}),I2=Z`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Vl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let co=class extends G{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,$`<slot class=${R2(e)}></slot>`}};co.styles=[Y,I2];Vl([m()],co.prototype,"variant",void 0);Vl([m()],co.prototype,"color",void 0);Vl([m()],co.prototype,"align",void 0);co=Vl([I("wui-text")],co);const $2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,P2=W`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,N2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,O2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,M2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,D2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,L2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,U2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,B2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,W2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,j2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,F2=W`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,z2=W`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,H2=W`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,V2=W`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Z2=W`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,G2=W`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,q2=W`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,K2=W`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Y2=W`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Q2=W`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,J2=Z`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Qu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const X2={browser:$2,dao:P2,defi:N2,defiAlt:O2,eth:M2,layers:D2,lock:L2,login:U2,network:B2,nft:W2,noun:j2,profile:F2,system:z2,coinbase:H2,onrampCard:q2,moonpay:V2,stripe:Z2,paypal:G2,google:K2,pencil:Y2,lightbulb:Q2};let is=class extends G{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,$`${X2[this.name]}`}};is.styles=[Y,J2];Qu([m()],is.prototype,"name",void 0);Qu([m()],is.prototype,"size",void 0);is=Qu([I("wui-visual")],is);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=i=>i??St,le={getSpacingStyles(i,e){if(Array.isArray(i))return i[e]?`var(--wui-spacing-${i[e]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){try{return new URL(i).hostname}catch{return""}},getTruncateString({string:i,charsStart:e,charsEnd:t,truncate:r}){return i.length<=e+t?i:r==="end"?`${i.substring(0,e)}...`:r==="start"?`...${i.substring(i.length-t)}`:`${i.substring(0,Math.floor(e))}...${i.substring(i.length-Math.floor(t))}`},generateAvatarColors(i){const t=i.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,u=[];for(let p=0;p<5;p+=1){const b=this.tintColor(r,.15*p);u.push(`rgb(${b[0]}, ${b[1]}, ${b[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(i){const e=parseInt(i,16),t=e>>16&255,r=e>>8&255,o=e&255;return[t,r,o]},tintColor(i,e){const[t,r,o]=i,n=Math.round(t+(255-t)*e),s=Math.round(r+(255-r)*e),a=Math.round(o+(255-o)*e);return[n,s,a]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(i){const e=i.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(i,e,t){return i.toString().length>=e?Number(i).toFixed(t):i},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},e3=Z`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Si=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Qt=class extends G{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&le.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&le.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&le.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&le.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&le.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&le.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&le.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&le.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};Qt.styles=[Y,e3];Si([m()],Qt.prototype,"flexDirection",void 0);Si([m()],Qt.prototype,"flexWrap",void 0);Si([m()],Qt.prototype,"flexBasis",void 0);Si([m()],Qt.prototype,"flexGrow",void 0);Si([m()],Qt.prototype,"flexShrink",void 0);Si([m()],Qt.prototype,"alignItems",void 0);Si([m()],Qt.prototype,"justifyContent",void 0);Si([m()],Qt.prototype,"columnGap",void 0);Si([m()],Qt.prototype,"rowGap",void 0);Si([m()],Qt.prototype,"gap",void 0);Si([m()],Qt.prototype,"padding",void 0);Si([m()],Qt.prototype,"margin",void 0);Qt=Si([I("wui-flex")],Qt);const t3=Z`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Zl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let uo=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return $`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",$`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=le.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};uo.styles=[Y,t3];Zl([m()],uo.prototype,"imageSrc",void 0);Zl([m()],uo.prototype,"alt",void 0);Zl([m()],uo.prototype,"address",void 0);uo=Zl([I("wui-avatar")],uo);const i3=Z`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Gr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Di=class extends G{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",r=this.size==="xl",o=t?"12%":"16%",n=t?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",u=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let p=`var(--wui-color-${this.backgroundColor})`;return u?p=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(p=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${p};
       --local-bg-mix: ${u||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,$` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Di.styles=[Y,Ce,i3];Gr([m()],Di.prototype,"size",void 0);Gr([m()],Di.prototype,"backgroundColor",void 0);Gr([m()],Di.prototype,"iconColor",void 0);Gr([m()],Di.prototype,"iconSize",void 0);Gr([m()],Di.prototype,"background",void 0);Gr([m({type:Boolean})],Di.prototype,"border",void 0);Gr([m()],Di.prototype,"borderColor",void 0);Gr([m()],Di.prototype,"icon",void 0);Di=Gr([I("wui-icon-box")],Di);const r3=Z`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Er=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bi=class extends G{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return $`
      <button
        ?disabled=${this.disabled}
        class=${Ki(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?le.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return $` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?$`<wui-image src=${this.networkSrc}></wui-image>`:$`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return $`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};bi.styles=[Y,Ce,r3];Er([m()],bi.prototype,"networkSrc",void 0);Er([m()],bi.prototype,"avatarSrc",void 0);Er([m()],bi.prototype,"balance",void 0);Er([m({type:Boolean})],bi.prototype,"isUnsupportedChain",void 0);Er([m({type:Boolean})],bi.prototype,"disabled",void 0);Er([m()],bi.prototype,"address",void 0);Er([m()],bi.prototype,"profileName",void 0);Er([m()],bi.prototype,"charsStart",void 0);Er([m()],bi.prototype,"charsEnd",void 0);bi=Er([I("wui-account-button")],bi);const n3=Z`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var $o=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fr=class extends G{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),$`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?$`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:$`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fr.styles=[Y,n3];$o([m()],fr.prototype,"size",void 0);$o([m()],fr.prototype,"name",void 0);$o([m()],fr.prototype,"imageSrc",void 0);$o([m()],fr.prototype,"walletIcon",void 0);$o([m({type:Boolean})],fr.prototype,"installed",void 0);$o([m()],fr.prototype,"badgeSize",void 0);fr=$o([I("wui-wallet-image")],fr);const o3=Z`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var I1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Lc=4;let ua=class extends G{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Lc;return $`${this.walletImages.slice(0,Lc).map(({src:t,walletName:r})=>$`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${Ki(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Lc-this.walletImages.length)].map(()=>$` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ua.styles=[Y,o3];I1([m({type:Array})],ua.prototype,"walletImages",void 0);ua=I1([I("wui-all-wallets-image")],ua);const s3=Z`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='main']:hover:enabled {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='main']:active:enabled {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='inverse']:hover:enabled {
    background-color: var(--wui-color-inverse-100);
  }

  button[data-variant='accent']:hover:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  button[data-variant='accent-error']:hover:enabled {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
  }

  button[data-variant='accent-success']:hover:enabled {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
  }

  button[data-variant='neutral']:hover:enabled {
    background: var(--wui-color-gray-glass-005);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Sr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const V0={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},a3={lg:"paragraph-600",md:"small-600"},l3={lg:"md",md:"md"};let yi=class extends G{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??a3[this.size];return $`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=l3[this.size],t=this.disabled?V0.disabled:V0[this.variant];return $`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return $``}};yi.styles=[Y,Ce,s3];Sr([m()],yi.prototype,"size",void 0);Sr([m({type:Boolean})],yi.prototype,"disabled",void 0);Sr([m({type:Boolean})],yi.prototype,"fullWidth",void 0);Sr([m({type:Boolean})],yi.prototype,"loading",void 0);Sr([m()],yi.prototype,"variant",void 0);Sr([m({type:Boolean})],yi.prototype,"hasIconLeft",void 0);Sr([m({type:Boolean})],yi.prototype,"hasIconRight",void 0);Sr([m()],yi.prototype,"borderRadius",void 0);Sr([m()],yi.prototype,"textVariant",void 0);yi=Sr([I("wui-button")],yi);const $1=W`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,c3=Z`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var P1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let da=class extends G{constructor(){super(...arguments),this.type="wallet"}render(){return $`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?$` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${$1}`:$`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};da.styles=[Y,Ce,c3];P1([m()],da.prototype,"type",void 0);da=P1([I("wui-card-select-loader")],da);const u3=W`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,d3=W`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,h3=Z`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ia=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bn=class extends G{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:u3,md:$1,lg:d3};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-color-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,$`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};bn.styles=[Y,h3];Ia([m()],bn.prototype,"size",void 0);Ia([m()],bn.prototype,"name",void 0);Ia([m()],bn.prototype,"imageSrc",void 0);Ia([m({type:Boolean})],bn.prototype,"selected",void 0);bn=Ia([I("wui-network-image")],bn);const p3=Z`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var Po=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wr=class extends G{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return $`
      <button data-selected=${Ki(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?$`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Ki(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:$`
      <wui-wallet-image
        size="md"
        imageSrc=${Ki(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};wr.styles=[Y,Ce,p3];Po([m()],wr.prototype,"name",void 0);Po([m()],wr.prototype,"type",void 0);Po([m()],wr.prototype,"imageSrc",void 0);Po([m({type:Boolean})],wr.prototype,"disabled",void 0);Po([m({type:Boolean})],wr.prototype,"selected",void 0);Po([m({type:Boolean})],wr.prototype,"installed",void 0);wr=Po([I("wui-card-select")],wr);const f3=Z`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var No=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gr=class extends G{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return $`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:le.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}};gr.styles=[Y,Ce,f3];No([m()],gr.prototype,"variant",void 0);No([m()],gr.prototype,"imageSrc",void 0);No([m({type:Boolean})],gr.prototype,"disabled",void 0);No([m()],gr.prototype,"icon",void 0);No([m()],gr.prototype,"href",void 0);No([m()],gr.prototype,"text",void 0);gr=No([I("wui-chip")],gr);const w3=Z`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ju=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let rs=class extends G{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?$`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rs.styles=[Y,Ce,w3];Ju([m()],rs.prototype,"size",void 0);Ju([m({type:Boolean})],rs.prototype,"loading",void 0);rs=Ju([I("wui-connect-button")],rs);const g3=Z`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Gl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ho=class extends G{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return $`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};ho.styles=[Y,Ce,g3];Gl([m({type:Boolean})],ho.prototype,"disabled",void 0);Gl([m()],ho.prototype,"label",void 0);Gl([m()],ho.prototype,"buttonLabel",void 0);ho=Gl([I("wui-cta-button")],ho);const m3=Z`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var v3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let cl=class extends G{render(){return $`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};cl.styles=[Y,Ce,m3];cl=v3([I("wui-details-group")],cl);const b3=Z`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var N1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ha=class extends G{constructor(){super(...arguments),this.name=""}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};ha.styles=[Y,Ce,b3];N1([m()],ha.prototype,"name",void 0);ha=N1([I("wui-details-group-item")],ha);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y3=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(r=o._$AO)==null||r.call(o,e,!1),Xs(o,e);return!0},ul=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},O1=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),A3(e)}};function x3(i){this._$AN!==void 0?(ul(this),this._$AM=i,O1(this)):this._$AM=i}function C3(i,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)Xs(r[n],!1),ul(r[n]);else r!=null&&(Xs(r,!1),ul(r));else Xs(this,i)}const A3=i=>{i.type==T1.CHILD&&(i._$AP??(i._$AP=C3),i._$AQ??(i._$AQ=x3))};let _3=class extends R1{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),O1(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Xs(this,e),ul(this))}setValue(e){if(y3(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xu=()=>new E3;let E3=class{};const Uc=new WeakMap,e0=k1(class extends _3{render(i){return St}update(i,[e]){var r;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),St}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=Uc.get(e);t===void 0&&(t=new WeakMap,Uc.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=Uc.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),S3=Z`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Sn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Yi=class extends G{constructor(){super(...arguments),this.inputElementRef=Xu(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-size-${this.size}`;return $` ${this.templateIcon()}
      <input
        ${e0(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Ki(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?$`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Yi.styles=[Y,Ce,S3];Sn([m()],Yi.prototype,"size",void 0);Sn([m()],Yi.prototype,"icon",void 0);Sn([m({type:Boolean})],Yi.prototype,"disabled",void 0);Sn([m()],Yi.prototype,"placeholder",void 0);Sn([m()],Yi.prototype,"type",void 0);Sn([m()],Yi.prototype,"keyHint",void 0);Sn([m()],Yi.prototype,"value",void 0);Yi=Sn([I("wui-input-text")],Yi);const T3=Z`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var ql=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let po=class extends G{constructor(){super(...arguments),this.disabled=!1}render(){return $`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?$`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};po.styles=[Y,T3];ql([m()],po.prototype,"errorMessage",void 0);ql([m({type:Boolean})],po.prototype,"disabled",void 0);ql([m()],po.prototype,"value",void 0);po=ql([I("wui-email-input")],po);const k3=Z`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var $a=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yn=class extends G{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,$`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};yn.styles=[Y,Ce,qu,k3];$a([m()],yn.prototype,"size",void 0);$a([m({type:Boolean})],yn.prototype,"disabled",void 0);$a([m()],yn.prototype,"icon",void 0);$a([m()],yn.prototype,"iconColor",void 0);yn=$a([I("wui-icon-link")],yn);const R3=Z`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var M1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pa=class extends G{constructor(){super(...arguments),this.icon="copy"}render(){return $`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};pa.styles=[Y,Ce,R3];M1([m()],pa.prototype,"icon",void 0);pa=M1([I("wui-input-element")],pa);const I3=Z`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var t0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ns=class extends G{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return $`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};ns.styles=[Y,Ce,I3];t0([m({type:Boolean})],ns.prototype,"disabled",void 0);t0([m({type:String})],ns.prototype,"value",void 0);ns=t0([I("wui-input-numeric")],ns);const $3=Z`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var i0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let os=class extends G{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};os.styles=[Y,Ce,$3];i0([m({type:Boolean})],os.prototype,"disabled",void 0);i0([m()],os.prototype,"color",void 0);os=i0([I("wui-link")],os);const P3=Z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Tr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xi=class extends G{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return $`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Ki(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return $`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return $`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:t;return $`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}chevronTemplate(){return this.chevron?$`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};xi.styles=[Y,Ce,P3];Tr([m()],xi.prototype,"icon",void 0);Tr([m()],xi.prototype,"iconSize",void 0);Tr([m()],xi.prototype,"variant",void 0);Tr([m()],xi.prototype,"iconVariant",void 0);Tr([m({type:Boolean})],xi.prototype,"disabled",void 0);Tr([m()],xi.prototype,"imageSrc",void 0);Tr([m()],xi.prototype,"alt",void 0);Tr([m({type:Boolean})],xi.prototype,"chevron",void 0);Tr([m({type:Boolean})],xi.prototype,"loading",void 0);xi=Tr([I("wui-list-item")],xi);var pu;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(pu||(pu={}));const N3=Z`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Oo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mr=class extends G{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":r,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${s};
    `,$`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?$`<div class="swap-images-container">
        ${e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?$`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?$`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:$`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?$`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};mr.styles=[N3];Oo([m()],mr.prototype,"type",void 0);Oo([m()],mr.prototype,"status",void 0);Oo([m()],mr.prototype,"direction",void 0);Oo([m({type:Boolean})],mr.prototype,"onlyDirectionIcon",void 0);Oo([m({type:Array})],mr.prototype,"images",void 0);Oo([m({type:Object})],mr.prototype,"secondImage",void 0);mr=Oo([I("wui-transaction-visual")],mr);const O3=Z`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var tr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let di=class extends G{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return $`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Ki(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Ki(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${pu[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?$`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?$`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};di.styles=[Y,O3];tr([m()],di.prototype,"type",void 0);tr([m({type:Array})],di.prototype,"descriptions",void 0);tr([m()],di.prototype,"date",void 0);tr([m({type:Boolean})],di.prototype,"onlyDirectionIcon",void 0);tr([m()],di.prototype,"status",void 0);tr([m()],di.prototype,"direction",void 0);tr([m({type:Array})],di.prototype,"images",void 0);tr([m({type:Array})],di.prototype,"price",void 0);tr([m({type:Array})],di.prototype,"amount",void 0);tr([m({type:Array})],di.prototype,"symbol",void 0);di=tr([I("wui-transaction-list-item")],di);const M3=Z`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var D3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let dl=class extends G{render(){return $`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};dl.styles=[Y,M3];dl=D3([I("wui-transaction-list-item-loader")],dl);const L3=Z`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var r0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ss=class extends G{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return $`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};ss.styles=[Y,L3];r0([m()],ss.prototype,"variant",void 0);r0([m()],ss.prototype,"size",void 0);ss=r0([I("wui-tag")],ss);const U3=Z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var ir=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hi=class extends G{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?$` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?$` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?$`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?$`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?$`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?$`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};hi.styles=[Y,Ce,U3];ir([m({type:Array})],hi.prototype,"walletImages",void 0);ir([m()],hi.prototype,"imageSrc",void 0);ir([m()],hi.prototype,"name",void 0);ir([m()],hi.prototype,"tagLabel",void 0);ir([m()],hi.prototype,"tagVariant",void 0);ir([m()],hi.prototype,"icon",void 0);ir([m()],hi.prototype,"walletIcon",void 0);ir([m({type:Boolean})],hi.prototype,"installed",void 0);ir([m({type:Boolean})],hi.prototype,"disabled",void 0);ir([m({type:Boolean})],hi.prototype,"showAllWallets",void 0);hi=ir([I("wui-list-wallet")],hi);const B3=Z`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var D1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fa=class extends G{constructor(){super(...arguments),this.logo="google"}render(){return $`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};fa.styles=[Y,B3];D1([m()],fa.prototype,"logo",void 0);fa=D1([I("wui-logo")],fa);const W3=Z`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var n0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let as=class extends G{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};as.styles=[Y,Ce,W3];n0([m()],as.prototype,"logo",void 0);n0([m({type:Boolean})],as.prototype,"disabled",void 0);as=n0([I("wui-logo-select")],as);const j3=Z`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var Kl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fo=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?$`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};fo.styles=[Y,Ce,j3];Kl([m()],fo.prototype,"imageSrc",void 0);Kl([m({type:Boolean})],fo.prototype,"isUnsupportedChain",void 0);Kl([m({type:Boolean})],fo.prototype,"disabled",void 0);fo=Kl([I("wui-network-button")],fo);const F3=Z`
  :host {
    position: relative;
    display: block;
  }
`;var Yl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wo=class extends G{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,t)=>{const r=e.target,o=this.getInputElement(r),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;n.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const r=t+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:t],n=o?this.getInputElement(o):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){const r=t-1,o=this.numerics[r>-1?r:t],n=o?this.getInputElement(o):void 0;n&&n.focus()}}}firstUpdated(){var t,r;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return $`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>$`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,t)}
              @click=${r=>this.selectInput(r)}
              @keydown=${r=>this.handleKeyDown(r,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){const o=this.numerics[t],n=e||(o?this.getInputElement(o):void 0);n&&(n.value=r,this.values=this.values.map((s,a)=>a===t?r:s))}selectInput(e){const t=e.target;if(t){const r=this.getInputElement(t);r==null||r.select()}}handleInput(e,t){const r=e.target,o=this.getInputElement(r);if(o){const n=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,n,t):le.isNumber(n)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const o=t[0];if(o&&le.isNumber(o)){this.updateInput(e,r,o);const s=t.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],u=a?this.getInputElement(a):void 0;u&&this.handlePaste(u,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};wo.styles=[Y,F3];Yl([m({type:Number})],wo.prototype,"length",void 0);Yl([m({type:String})],wo.prototype,"otp",void 0);Yl([Ku()],wo.prototype,"values",void 0);wo=Yl([I("wui-otp")],wo);const z3=.1,Z0=2.5,Or=7;function Bc(i,e,t){return i===e?!1:(i-e<0?e-i:i-e)<=t+z3}function H3(i,e){const t=Array.prototype.slice.call(Ep.create(i,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(t.length);return t.reduce((o,n,s)=>(s%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const V3={generate(i,e,t){const r="#141414",o="transparent",s=[],a=H3(i,"Q"),u=e/a.length,p=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];p.forEach(({x:U,y:D})=>{const te=(a.length-Or)*u*U,ne=(a.length-Or)*u*D,fe=.45;for(let oe=0;oe<p.length;oe+=1){const be=u*(Or-oe*2);s.push(W`
            <rect
              fill=${oe===2?r:o}
              width=${oe===0?be-5:be}
              rx= ${oe===0?(be-5)*fe:be*fe}
              ry= ${oe===0?(be-5)*fe:be*fe}
              stroke=${r}
              stroke-width=${oe===0?5:0}
              height=${oe===0?be-5:be}
              x= ${oe===0?ne+u*oe+5/2:ne+u*oe}
              y= ${oe===0?te+u*oe+5/2:te+u*oe}
            />
          `)}});const b=Math.floor((t+25)/u),C=a.length/2-b/2,x=a.length/2+b/2-1,S=[];a.forEach((U,D)=>{U.forEach((te,ne)=>{if(a[D][ne]&&!(D<Or&&ne<Or||D>a.length-(Or+1)&&ne<Or||D<Or&&ne>a.length-(Or+1))&&!(D>C&&D<x&&ne>C&&ne<x)){const fe=D*u+u/2,oe=ne*u+u/2;S.push([fe,oe])}})});const k={};return S.forEach(([U,D])=>{var te;k[U]?(te=k[U])==null||te.push(D):k[U]=[D]}),Object.entries(k).map(([U,D])=>{const te=D.filter(ne=>D.every(fe=>!Bc(ne,fe,u)));return[Number(U),te]}).forEach(([U,D])=>{D.forEach(te=>{s.push(W`<circle cx=${U} cy=${te} fill=${r} r=${u/Z0} />`)})}),Object.entries(k).filter(([U,D])=>D.length>1).map(([U,D])=>{const te=D.filter(ne=>D.some(fe=>Bc(ne,fe,u)));return[Number(U),te]}).map(([U,D])=>{D.sort((ne,fe)=>ne<fe?-1:1);const te=[];for(const ne of D){const fe=te.find(oe=>oe.some(be=>Bc(ne,be,u)));fe?fe.push(ne):te.push([ne])}return[U,te.map(ne=>[ne[0],ne[ne.length-1]])]}).forEach(([U,D])=>{D.forEach(([te,ne])=>{s.push(W`
              <line
                x1=${U}
                x2=${U}
                y1=${te}
                y2=${ne}
                stroke=${r}
                stroke-width=${u/(Z0/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Z3=Z`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Mo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vr=class extends G{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,$`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return W`
      <svg height=${e} width=${e}>
        ${V3.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:$`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};vr.styles=[Y,Z3];Mo([m()],vr.prototype,"uri",void 0);Mo([m({type:Number})],vr.prototype,"size",void 0);Mo([m()],vr.prototype,"theme",void 0);Mo([m()],vr.prototype,"imageSrc",void 0);Mo([m()],vr.prototype,"alt",void 0);Mo([m({type:Boolean})],vr.prototype,"arenaClear",void 0);vr=Mo([I("wui-qr-code")],vr);const G3=Z`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var q3=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hl=class extends G{constructor(){super(...arguments),this.inputComponentRef=Xu()}render(){return $`
      <wui-input-text
        ${e0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};hl.styles=[Y,G3];hl=q3([I("wui-search-bar")],hl);const K3=Z`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Pa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xn=class extends G{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return $`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};xn.styles=[Y,K3];Pa([m()],xn.prototype,"backgroundColor",void 0);Pa([m()],xn.prototype,"iconColor",void 0);Pa([m()],xn.prototype,"icon",void 0);Pa([m()],xn.prototype,"message",void 0);xn=Pa([I("wui-snackbar")],xn);const Y3=Z`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Tn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Qi=class extends G{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var o;const r=t===this.activeTab;return $`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?$`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],o=this.buttons[e],n=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),u=s==null?void 0:s.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&u&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+u.width)+6}px`,o.animate([{width:`${a.width+u.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};Qi.styles=[Y,Ce,Y3];Tn([m({type:Array})],Qi.prototype,"tabs",void 0);Tn([m()],Qi.prototype,"onTabChange",void 0);Tn([m({type:Array})],Qi.prototype,"buttons",void 0);Tn([m({type:Boolean})],Qi.prototype,"disabled",void 0);Tn([m()],Qi.prototype,"localTabWidth",void 0);Tn([Ku()],Qi.prototype,"activeTab",void 0);Tn([Ku()],Qi.prototype,"isDense",void 0);Qi=Tn([I("wui-tabs")],Qi);const Q3=Z`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var o0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ls=class extends G{constructor(){super(...arguments),this.text=""}render(){return $`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ls.styles=[Y,Ce,Q3];o0([m()],ls.prototype,"imageSrc",void 0);o0([m()],ls.prototype,"text",void 0);ls=o0([I("wui-token-button")],ls);const J3=Z`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ql=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let go=class extends G{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,$`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};go.styles=[Y,Ce,J3];Ql([m()],go.prototype,"placement",void 0);Ql([m()],go.prototype,"variant",void 0);Ql([m()],go.prototype,"message",void 0);go=Ql([I("wui-tooltip")],go);const X3=Z`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var ks=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wr=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){var t;const e=this.amount&&this.price?(t=Ne.multiply(this.price,this.amount))==null?void 0:t.toFixed(3):null;return $`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?$`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${le.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount?$`<wui-text variant="small-400" color="fg-200">
                  ${le.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?$`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};Wr.styles=[Y,Ce,X3];ks([m()],Wr.prototype,"imageSrc",void 0);ks([m()],Wr.prototype,"name",void 0);ks([m()],Wr.prototype,"symbol",void 0);ks([m()],Wr.prototype,"price",void 0);ks([m()],Wr.prototype,"amount",void 0);Wr=ks([I("wui-token-list-item")],Wr);const ew=Z`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Jl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mo=class extends G{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,$`${this.templateVisual()}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:$`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};mo.styles=[Y,ew];Jl([m()],mo.prototype,"imageSrc",void 0);Jl([m()],mo.prototype,"alt",void 0);Jl([m({type:Boolean})],mo.prototype,"borderRadiusFull",void 0);mo=Jl([I("wui-visual-thumbnail")],mo);const tw=Z`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var Xl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vo=class extends G{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return $`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};vo.styles=[Y,Ce,tw];Xl([m()],vo.prototype,"label",void 0);Xl([m()],vo.prototype,"description",void 0);Xl([m()],vo.prototype,"icon",void 0);vo=Xl([I("wui-notice-card")],vo);const iw=Z`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var s0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Wc=100;let cs=class extends G{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(".heightContent"),t=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&t){this.scrollElement=e;const n=t==null?void 0:t.scrollHeight;n&&n>Wc&&(this.enableAccordion=!0,this.scrollHeightElement=n,this.requestUpdate())}})}render(){return $`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Wc}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Wc}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?$` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};cs.styles=[Y,Ce,iw];s0([m()],cs.prototype,"textTitle",void 0);s0([m()],cs.prototype,"overflowedContent",void 0);cs=s0([I("wui-list-accordion")],cs);const rw=Z`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ec=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bo=class extends G{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?$` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};bo.styles=[Y,Ce,rw];ec([m()],bo.prototype,"imageSrc",void 0);ec([m()],bo.prototype,"textTitle",void 0);ec([m()],bo.prototype,"textValue",void 0);bo=ec([I("wui-list-content")],bo);const nw=Z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Na=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cn=class extends G{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return $`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?$`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:$`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Cn.styles=[Y,Ce,nw];Na([m()],Cn.prototype,"imageSrc",void 0);Na([m()],Cn.prototype,"name",void 0);Na([m({type:Boolean})],Cn.prototype,"disabled",void 0);Na([m({type:Boolean})],Cn.prototype,"transparent",void 0);Cn=Na([I("wui-list-network")],Cn);const ow=Z`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Rs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jr=class extends G{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?$`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};jr.styles=[Y,Ce,ow];Rs([m()],jr.prototype,"amount",void 0);Rs([m()],jr.prototype,"networkCurreny",void 0);Rs([m()],jr.prototype,"networkImageUrl",void 0);Rs([m()],jr.prototype,"receiverAddress",void 0);Rs([m()],jr.prototype,"addressExplorerUrl",void 0);jr=Rs([I("wui-list-wallet-transaction")],jr);const sw=Z`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var Ti=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Jt=class extends G{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return $`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?$`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:$`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await me._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return $`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return $`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return $`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};Jt.styles=[Y,Ce,sw];Ti([m({type:Boolean})],Jt.prototype,"disabled",void 0);Ti([m()],Jt.prototype,"color",void 0);Ti([m()],Jt.prototype,"label",void 0);Ti([m()],Jt.prototype,"purchaseValue",void 0);Ti([m()],Jt.prototype,"purchaseCurrency",void 0);Ti([m()],Jt.prototype,"date",void 0);Ti([m({type:Boolean})],Jt.prototype,"completed",void 0);Ti([m({type:Boolean})],Jt.prototype,"inProgress",void 0);Ti([m({type:Boolean})],Jt.prototype,"failed",void 0);Ti([m()],Jt.prototype,"onClick",void 0);Ti([m()],Jt.prototype,"symbol",void 0);Ti([m()],Jt.prototype,"icon",void 0);Jt=Ti([I("wui-onramp-activity-item")],Jt);const aw=Z`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var kn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ji=class extends G{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${Ki(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?$`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:$`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var r;const e=K.getRequestedCaipNetworks(),t=(r=e==null?void 0:e.filter(o=>o==null?void 0:o.imageId))==null?void 0:r.slice(0,5);return $`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>$`
            <wui-flex class="network-icon">
              <wui-image src=${Ki(Pe.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Ji.styles=[Y,Ce,aw];kn([m({type:Boolean})],Ji.prototype,"disabled",void 0);kn([m()],Ji.prototype,"color",void 0);kn([m()],Ji.prototype,"name",void 0);kn([m()],Ji.prototype,"label",void 0);kn([m()],Ji.prototype,"feeRange",void 0);kn([m({type:Boolean})],Ji.prototype,"loading",void 0);kn([m()],Ji.prototype,"onClick",void 0);Ji=kn([I("wui-onramp-provider-item")],Ji);const lw=Z`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var L1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wa=class extends G{constructor(){super(...arguments),this.text=""}render(){return $`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};wa.styles=[Y,Ce,lw];L1([m()],wa.prototype,"text",void 0);wa=L1([I("wui-promo")],wa);const cw=Z`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var a0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let us=class extends G{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return $`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};us.styles=[Y,cw];a0([m()],us.prototype,"dollars",void 0);a0([m()],us.prototype,"pennies",void 0);us=a0([I("wui-balance")],us);const uw=Z`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Is=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fr=class extends G{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return $`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${le.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?$`<wui-image src=${this.networkSrc}></wui-image>`:$`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Fr.styles=[Y,Ce,uw];Is([m()],Fr.prototype,"networkSrc",void 0);Is([m()],Fr.prototype,"avatarSrc",void 0);Is([m()],Fr.prototype,"profileName",void 0);Is([m()],Fr.prototype,"address",void 0);Is([m()],Fr.prototype,"icon",void 0);Fr=Is([I("wui-profile-button")],Fr);const dw=Z`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Do=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let br=class extends G{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return $`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};br.styles=[Y,Ce,dw];Do([m()],br.prototype,"variant",void 0);Do([m()],br.prototype,"imageSrc",void 0);Do([m({type:Boolean})],br.prototype,"disabled",void 0);Do([m()],br.prototype,"icon",void 0);Do([m()],br.prototype,"size",void 0);Do([m()],br.prototype,"text",void 0);br=Do([I("wui-chip-button")],br);const hw=Z`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var l0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ds=class extends G{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return $`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return $` <wui-flex class="networks">
      ${e==null?void 0:e.map(t=>$` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};ds.styles=[Y,Ce,hw];l0([m({type:Array})],ds.prototype,"networkImages",void 0);l0([m()],ds.prototype,"text",void 0);ds=l0([I("wui-compatible-network")],ds);const pw=Z`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var c0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hs=class extends G{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return $`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};hs.styles=[Y,Ce,pw];c0([m()],hs.prototype,"icon",void 0);c0([m()],hs.prototype,"text",void 0);hs=c0([I("wui-banner")],hs);const fw=Z`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Lo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yr=class extends G{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return $`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${le.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?$`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:$`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};yr.styles=[Y,Ce,fw];Lo([m()],yr.prototype,"tokenName",void 0);Lo([m()],yr.prototype,"tokenImageUrl",void 0);Lo([m({type:Number})],yr.prototype,"tokenValue",void 0);Lo([m()],yr.prototype,"tokenAmount",void 0);Lo([m()],yr.prototype,"tokenCurrency",void 0);Lo([m({type:Boolean})],yr.prototype,"clickable",void 0);yr=Lo([I("wui-list-token")],yr);const ww=Z`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Rn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xi=class extends G{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return $`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?$` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:$`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Xi.styles=[Y,Ce,ww];Rn([m()],Xi.prototype,"icon",void 0);Rn([m()],Xi.prototype,"text",void 0);Rn([m()],Xi.prototype,"description",void 0);Rn([m()],Xi.prototype,"tag",void 0);Rn([m()],Xi.prototype,"iconBackgroundColor",void 0);Rn([m()],Xi.prototype,"iconColor",void 0);Rn([m({type:Boolean})],Xi.prototype,"disabled",void 0);Xi=Rn([I("wui-list-description")],Xi);const gw=Z`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,mw=/[.*+?^${}()|[\]\\]/gu,vw=/[0-9,.]/u;var tc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yo=class extends G{constructor(){super(...arguments),this.inputElementRef=Xu(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),$`<input
      ${e0(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var r,o;const t=e.data;if(t&&((r=this.inputElementRef)!=null&&r.value))if(t===","){const n=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=n,this.value=`${this.value}${n}`}else vw.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(mw,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};yo.styles=[Y,Ce,gw];tc([m({type:Boolean})],yo.prototype,"disabled",void 0);tc([m({type:String})],yo.prototype,"value",void 0);tc([m({type:String})],yo.prototype,"placeholder",void 0);yo=tc([I("wui-input-amount")],yo);const bw=Z`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var Oa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let An=class extends G{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return $`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?$`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};An.styles=[Y,Ce,bw];Oa([m()],An.prototype,"text",void 0);Oa([m()],An.prototype,"address",void 0);Oa([m()],An.prototype,"imageSrc",void 0);Oa([m({type:Boolean})],An.prototype,"isAddress",void 0);An=Oa([I("wui-preview-item")],An);const yw=Z`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var u0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ps=class extends G{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return $`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};ps.styles=[Y,Ce,yw];u0([m()],ps.prototype,"text",void 0);u0([m()],ps.prototype,"icon",void 0);ps=u0([I("wui-icon-button")],ps);const xw=Z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var d0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fs=class extends G{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};fs.styles=[Y,Ce,xw];d0([m()],fs.prototype,"text",void 0);d0([m({type:Boolean})],fs.prototype,"disabled",void 0);fs=d0([I("wui-list-button")],fs);const Cw=Z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Ma=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _n=class extends G{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?$` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};_n.styles=[Y,Ce,Cw];Ma([m()],_n.prototype,"logo",void 0);Ma([m()],_n.prototype,"name",void 0);Ma([m()],_n.prototype,"align",void 0);Ma([m({type:Boolean})],_n.prototype,"disabled",void 0);_n=Ma([I("wui-list-social")],_n);const Aw=Z`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Wi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let oi=class extends G{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&le.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&le.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&le.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&le.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&le.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&le.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&le.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&le.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};oi.styles=[Y,Aw];Wi([m()],oi.prototype,"gridTemplateRows",void 0);Wi([m()],oi.prototype,"gridTemplateColumns",void 0);Wi([m()],oi.prototype,"justifyItems",void 0);Wi([m()],oi.prototype,"alignItems",void 0);Wi([m()],oi.prototype,"justifyContent",void 0);Wi([m()],oi.prototype,"alignContent",void 0);Wi([m()],oi.prototype,"columnGap",void 0);Wi([m()],oi.prototype,"rowGap",void 0);Wi([m()],oi.prototype,"gap",void 0);Wi([m()],oi.prototype,"padding",void 0);Wi([m()],oi.prototype,"margin",void 0);oi=Wi([I("wui-grid")],oi);const _w=Z`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var U1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ga=class extends G{constructor(){super(...arguments),this.text=""}render(){return $`${this.template()}`}template(){return this.text?$`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ga.styles=[Y,_w];U1([m()],ga.prototype,"text",void 0);ga=U1([I("wui-separator")],ga);const Gs={interpolate(i,e,t){if(i.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const r=i[0]||0,o=i[1]||0,n=e[0]||0,s=e[1]||0;return t<r?n:t>o?s:(s-n)/(o-r)*(t-r)+n}},Ew=3,Sw=["receive","deposit","borrow","claim"],Tw=["withdraw","repay","burn"],dn={getMonthName(i){const e=new Date;return e.setMonth(i),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(i,e){const t=Fu.getYear(),r=this.getMonthName(e);return i===t?r:`${r} ${i}`},getTransactionImages(i){const[e,t]=i,r=!!e&&(i==null?void 0:i.every(s=>!!s.nft_info)),o=(i==null?void 0:i.length)>1;return(i==null?void 0:i.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?i.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(i){return{type:dn.getTransactionTransferTokenType(i),url:dn.getTransactionImageURL(i)}},getTransactionImageURL(i){var o,n,s,a,u;let e;const t=!!(i!=null&&i.nft_info),r=!!(i!=null&&i.fungible_info);return i&&t?e=(s=(n=(o=i==null?void 0:i.nft_info)==null?void 0:o.content)==null?void 0:n.preview)==null?void 0:s.url:i&&r&&(e=(u=(a=i==null?void 0:i.fungible_info)==null?void 0:a.icon)==null?void 0:u.url),e},getTransactionTransferTokenType(i){if(i!=null&&i.fungible_info)return"FUNGIBLE";if(i!=null&&i.nft_info)return"NFT"},getTransactionDescriptions(i){var C,x,S;const e=(C=i==null?void 0:i.metadata)==null?void 0:C.operationType,t=i==null?void 0:i.transfers,r=((x=i==null?void 0:i.transfers)==null?void 0:x.length)>0,o=((S=i==null?void 0:i.transfers)==null?void 0:S.length)>1,n=r&&(t==null?void 0:t.every(k=>!!(k!=null&&k.fungible_info))),[s,a]=t;let u=this.getTransferDescription(s),p=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&n?(u=le.getTruncateString({string:i==null?void 0:i.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),p=le.getTruncateString({string:i==null?void 0:i.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[u,p]):[i.metadata.status];if(o)return t.map(k=>this.getTransferDescription(k));let b="";return Sw.includes(e)?b="+":Tw.includes(e)&&(b="-"),u=b.concat(u),[u]},getTransferDescription(i){var t;let e="";return i&&(i!=null&&i.nft_info?e=((t=i==null?void 0:i.nft_info)==null?void 0:t.name)||"-":i!=null&&i.fungible_info&&(e=this.getFungibleTransferDescription(i)||"-")),e},getFungibleTransferDescription(i){var r;return i?[this.getQuantityFixedValue(i==null?void 0:i.quantity.numeric),(r=i==null?void 0:i.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(i){return i?parseFloat(i).toFixed(Ew):null}},kw=Object.freeze(Object.defineProperty({__proto__:null,MathUtil:Gs,TransactionUtil:dn,UiHelperUtil:le,get WuiAccountButton(){return bi},get WuiAllWalletsImage(){return ua},get WuiAvatar(){return uo},get WuiBalance(){return us},get WuiBanner(){return hs},get WuiButton(){return yi},get WuiCard(){return al},get WuiCardSelect(){return wr},get WuiCardSelectLoader(){return da},get WuiChip(){return gr},get WuiChipButton(){return br},get WuiCompatibleNetwork(){return ds},get WuiConnectButton(){return rs},get WuiCtaButton(){return ho},get WuiDetailsGroup(){return cl},get WuiDetailsGroupItem(){return ha},get WuiEmailInput(){return po},get WuiFlex(){return Qt},get WuiGrid(){return oi},get WuiIcon(){return ao},get WuiIconBox(){return Di},get WuiIconButton(){return ps},get WuiIconLink(){return yn},get WuiImage(){return lo},get WuiInputAmount(){return yo},get WuiInputElement(){return pa},get WuiInputNumeric(){return ns},get WuiInputText(){return Yi},get WuiLink(){return os},get WuiListAccordion(){return cs},get WuiListButton(){return fs},get WuiListContent(){return bo},get WuiListDescription(){return Xi},get WuiListItem(){return xi},get WuiListNetwork(){return Cn},get WuiListSocial(){return _n},get WuiListToken(){return yr},get WuiListWallet(){return hi},get WuiListWalletTransaction(){return jr},get WuiLoadingHexagon(){return ll},get WuiLoadingSpinner(){return ts},get WuiLoadingThumbnail(){return ca},get WuiLogo(){return fa},get WuiLogoSelect(){return as},get WuiNetworkButton(){return fo},get WuiNetworkImage(){return bn},get WuiNoticeCard(){return vo},get WuiOnRampActivityItem(){return Jt},get WuiOnRampProviderItem(){return Ji},get WuiOtp(){return wo},get WuiPreviewItem(){return An},get WuiProfileButton(){return Fr},get WuiPromo(){return wa},get WuiQrCode(){return vr},get WuiSearchBar(){return hl},get WuiSeparator(){return ga},get WuiShimmer(){return vn},get WuiSnackbar(){return xn},get WuiTabs(){return Qi},get WuiTag(){return ss},get WuiText(){return co},get WuiTokenButton(){return ls},get WuiTokenListItem(){return Wr},get WuiTooltip(){return go},get WuiTransactionListItem(){return di},get WuiTransactionListItemLoader(){return dl},get WuiTransactionVisual(){return mr},get WuiVisual(){return is},get WuiVisualThumbnail(){return mo},get WuiWalletImage(){return fr},customElement:I,initializeTheming:_1,setColorTheme:Gu,setThemeVariables:E1,swapInputMaskBottomSvg:tf,swapInputMaskTopSvg:rf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el=globalThis,h0=el.ShadowRoot&&(el.ShadyCSS===void 0||el.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p0=Symbol(),G0=new WeakMap;let B1=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==p0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(h0&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=G0.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&G0.set(t,e))}return e}toString(){return this.cssText}};const Rw=i=>new B1(typeof i=="string"?i:i+"",void 0,p0),se=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new B1(t,i,p0)},Iw=(i,e)=>{if(h0)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=el.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},q0=h0?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Rw(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$w,defineProperty:Pw,getOwnPropertyDescriptor:Nw,getOwnPropertyNames:Ow,getOwnPropertySymbols:Mw,getPrototypeOf:Dw}=Object,wn=globalThis,K0=wn.trustedTypes,Lw=K0?K0.emptyScript:"",jc=wn.reactiveElementPolyfillSupport,ea=(i,e)=>i,pl={toAttribute(i,e){switch(e){case Boolean:i=i?Lw:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},f0=(i,e)=>!$w(i,e),Y0={attribute:!0,type:String,converter:pl,reflect:!1,hasChanged:f0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),wn.litPropertyMetadata??(wn.litPropertyMetadata=new WeakMap);let Ho=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Y0){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Pw(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=Nw(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);n.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Y0}static _$Ei(){if(this.hasOwnProperty(ea("elementProperties")))return;const e=Dw(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ea("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ea("properties"))){const t=this.properties,r=[...Ow(t),...Mw(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(q0(o))}else e!==void 0&&t.push(q0(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Iw(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:pl).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:pl;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??f0)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Ho.elementStyles=[],Ho.shadowRootOptions={mode:"open"},Ho[ea("elementProperties")]=new Map,Ho[ea("finalized")]=new Map,jc==null||jc({ReactiveElement:Ho}),(wn.reactiveElementVersions??(wn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=globalThis,fl=ta.trustedTypes,Q0=fl?fl.createPolicy("lit-html",{createHTML:i=>i}):void 0,W1="$lit$",sn=`lit$${Math.random().toFixed(9).slice(2)}$`,j1="?"+sn,Uw=`<${j1}>`,xo=document,ma=()=>xo.createComment(""),va=i=>i===null||typeof i!="object"&&typeof i!="function",F1=Array.isArray,Bw=i=>F1(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Fc=`[ 	
\f\r]`,js=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J0=/-->/g,X0=/>/g,Qn=RegExp(`>|${Fc}(?:([^\\s"'>=/]+)(${Fc}*=${Fc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ed=/'/g,td=/"/g,z1=/^(?:script|style|textarea|title)$/i,Ww=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=Ww(1),ws=Symbol.for("lit-noChange"),Tt=Symbol.for("lit-nothing"),id=new WeakMap,to=xo.createTreeWalker(xo,129);function H1(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q0!==void 0?Q0.createHTML(e):e}const jw=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":"",s=js;for(let a=0;a<t;a++){const u=i[a];let p,b,C=-1,x=0;for(;x<u.length&&(s.lastIndex=x,b=s.exec(u),b!==null);)x=s.lastIndex,s===js?b[1]==="!--"?s=J0:b[1]!==void 0?s=X0:b[2]!==void 0?(z1.test(b[2])&&(o=RegExp("</"+b[2],"g")),s=Qn):b[3]!==void 0&&(s=Qn):s===Qn?b[0]===">"?(s=o??js,C=-1):b[1]===void 0?C=-2:(C=s.lastIndex-b[2].length,p=b[1],s=b[3]===void 0?Qn:b[3]==='"'?td:ed):s===td||s===ed?s=Qn:s===J0||s===X0?s=js:(s=Qn,o=void 0);const S=s===Qn&&i[a+1].startsWith("/>")?" ":"";n+=s===js?u+Uw:C>=0?(r.push(p),u.slice(0,C)+W1+u.slice(C)+sn+S):u+sn+(C===-2?a:S)}return[H1(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let fu=class V1{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,s=0;const a=e.length-1,u=this.parts,[p,b]=jw(e,t);if(this.el=V1.createElement(p,r),to.currentNode=this.el.content,t===2){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(o=to.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const C of o.getAttributeNames())if(C.endsWith(W1)){const x=b[s++],S=o.getAttribute(C).split(sn),k=/([.?@])?(.*)/.exec(x);u.push({type:1,index:n,name:k[2],strings:S,ctor:k[1]==="."?zw:k[1]==="?"?Hw:k[1]==="@"?Vw:ic}),o.removeAttribute(C)}else C.startsWith(sn)&&(u.push({type:6,index:n}),o.removeAttribute(C));if(z1.test(o.tagName)){const C=o.textContent.split(sn),x=C.length-1;if(x>0){o.textContent=fl?fl.emptyScript:"";for(let S=0;S<x;S++)o.append(C[S],ma()),to.nextNode(),u.push({type:2,index:++n});o.append(C[x],ma())}}}else if(o.nodeType===8)if(o.data===j1)u.push({type:2,index:n});else{let C=-1;for(;(C=o.data.indexOf(sn,C+1))!==-1;)u.push({type:7,index:n}),C+=sn.length-1}n++}}static createElement(e,t){const r=xo.createElement("template");return r.innerHTML=e,r}};function gs(i,e,t=i,r){var s,a;if(e===ws)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const n=va(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=gs(i,o._$AS(i,e.values),o,r)),e}let Fw=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??xo).importNode(t,!0);to.currentNode=o;let n=to.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let p;u.type===2?p=new w0(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new Zw(n,this,e)),this._$AV.push(p),u=r[++a]}s!==(u==null?void 0:u.index)&&(n=to.nextNode(),s++)}return to.currentNode=xo,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},w0=class Z1{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Tt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=gs(this,e,t),va(e)?e===Tt||e==null||e===""?(this._$AH!==Tt&&this._$AR(),this._$AH=Tt):e!==this._$AH&&e!==ws&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bw(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Tt&&va(this._$AH)?this._$AA.nextSibling.data=e:this.T(xo.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=fu.createElement(H1(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const s=new Fw(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=id.get(e.strings);return t===void 0&&id.set(e.strings,t=new fu(e)),t}k(e){F1(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Z1(this.S(ma()),this.S(ma()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},ic=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=Tt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Tt}_$AI(e,t=this,r,o){const n=this.strings;let s=!1;if(n===void 0)e=gs(this,e,t,0),s=!va(e)||e!==this._$AH&&e!==ws,s&&(this._$AH=e);else{const a=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=gs(this,a[r+u],t,u),p===ws&&(p=this._$AH[u]),s||(s=!va(p)||p!==this._$AH[u]),p===Tt?e=Tt:e!==Tt&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}s&&!o&&this.j(e)}j(e){e===Tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zw=class extends ic{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Tt?void 0:e}},Hw=class extends ic{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Tt)}},Vw=class extends ic{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=gs(this,e,t,0)??Tt)===ws)return;const r=this._$AH,o=e===Tt&&r!==Tt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Tt&&(r===Tt||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Zw=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){gs(this,e)}};const zc=ta.litHtmlPolyfillSupport;zc==null||zc(fu,w0),(ta.litHtmlVersions??(ta.litHtmlVersions=[])).push("3.1.3");const Gw=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new w0(e.insertBefore(ma(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let z=class extends Ho{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gw(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ws}};var d1;z._$litElement$=!0,z.finalized=!0,(d1=globalThis.litElementHydrateSupport)==null||d1.call(globalThis,{LitElement:z});const Hc=globalThis.litElementPolyfillSupport;Hc==null||Hc({LitElement:z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qw={attribute:!0,type:String,converter:pl,reflect:!1,hasChanged:f0},Kw=(i=qw,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,i),r==="accessor"){const{name:s}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,u,i)},init(a){return a!==void 0&&this.P(s,void 0,i),a}}}if(r==="setter"){const{name:s}=t;return function(a){const u=this[s];e.call(this,a),this.requestUpdate(s,u,i)}}throw Error("Unsupported decorator location: "+r)};function re(i){return(e,t)=>typeof t=="object"?Kw(i,e,t):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(i){return re({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=i=>i??Tt;var ji=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ci=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=j.state.address,this.balanceVal=j.state.balance,this.balanceSymbol=j.state.balanceSymbol,this.profileName=j.state.profileName,this.profileImage=j.state.profileImage,this.network=K.state.caipNetwork,this.isUnsupportedChain=K.state.isUnsupportedChain,this.unsubscribe.push(j.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),K.subscribeKey("caipNetwork",e=>this.network=e),K.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Pe.getNetworkImage(this.network),t=this.balance==="show";return g`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${de(this.address)}
        profileName=${de(this.profileName)}
        networkSrc=${de(e)}
        avatarSrc=${de(this.profileImage)}
        balance=${t?H.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?pe.open({view:"UnsupportedChain"}):pe.open()}};ji([re({type:Boolean})],Ci.prototype,"disabled",void 0);ji([re()],Ci.prototype,"balance",void 0);ji([re()],Ci.prototype,"charsStart",void 0);ji([re()],Ci.prototype,"charsEnd",void 0);ji([E()],Ci.prototype,"address",void 0);ji([E()],Ci.prototype,"balanceVal",void 0);ji([E()],Ci.prototype,"balanceSymbol",void 0);ji([E()],Ci.prototype,"profileName",void 0);ji([E()],Ci.prototype,"profileImage",void 0);ji([E()],Ci.prototype,"network",void 0);ji([E()],Ci.prototype,"isUnsupportedChain",void 0);Ci=ji([I("w3m-account-button")],Ci);const Yw=se`
  :host {
    display: block;
    width: max-content;
  }
`;var kr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Li=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=j.state.isConnected,this.isLoading=pe.state.loading,this.unsubscribe.push(j.subscribeKey("isConnected",e=>{this.isAccount=e}),pe.subscribeKey("loading",e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount&&!this.isLoading?g`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${de(this.balance)}
            .charsStart=${de(this.charsStart)}
            .charsEnd=${de(this.charsEnd)}
          >
          </w3m-account-button>
        `:g`
          <w3m-connect-button
            size=${de(this.size)}
            label=${de(this.label)}
            loadingLabel=${de(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Li.styles=Yw;kr([re({type:Boolean})],Li.prototype,"disabled",void 0);kr([re()],Li.prototype,"balance",void 0);kr([re()],Li.prototype,"size",void 0);kr([re()],Li.prototype,"label",void 0);kr([re()],Li.prototype,"loadingLabel",void 0);kr([re()],Li.prototype,"charsStart",void 0);kr([re()],Li.prototype,"charsEnd",void 0);kr([E()],Li.prototype,"isAccount",void 0);kr([E()],Li.prototype,"isLoading",void 0);Li=kr([I("w3m-button")],Li);var $s=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Co=class extends z{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=pe.state.open,this.loading=pe.state.loading,this.unsubscribe.push(pe.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return g`
      <wui-connect-button
        size=${de(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?pe.close():this.loading||pe.open()}};$s([re()],Co.prototype,"size",void 0);$s([re()],Co.prototype,"label",void 0);$s([re()],Co.prototype,"loadingLabel",void 0);$s([E()],Co.prototype,"open",void 0);$s([E()],Co.prototype,"loading",void 0);Co=$s([I("w3m-connect-button")],Co);const Qw=se`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ps=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const rd="scroll-lock";let zr=class extends z{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=pe.state.open,this.caipAddress=j.state.caipAddress,this.isSiweEnabled=ee.state.isSiweEnabled,this.connected=j.state.isConnected,this.loading=pe.state.loading,this.initializeTheming(),me.prefetch(),this.unsubscribe.push(pe.subscribeKey("open",e=>e?this.onOpen():this.onClose()),pe.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(j.state.caipAddress)}),j.subscribeKey("isConnected",e=>this.connected=e),j.subscribeKey("caipAddress",e=>this.onNewAddress(e)),ee.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),ce.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?g`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url);e.state.status!=="success"&&await we.disconnect()}pe.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=Et.state,r=le.getColorTheme(t);_1(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),ye.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=rd,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${rd}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;const t=this.caipAddress&&this.caipAddress!==e;if(this.caipAddress=e,this.isSiweEnabled){const{SIWEController:r}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url);await r.getSession()&&t?(await r.signOut(),this.onSiweNavigation()):this.onSiweNavigation()}}onSiweNavigation(){this.open?N.push("ConnectingSiwe"):pe.open({view:"ConnectingSiwe"})}};zr.styles=Qw;Ps([E()],zr.prototype,"open",void 0);Ps([E()],zr.prototype,"caipAddress",void 0);Ps([E()],zr.prototype,"isSiweEnabled",void 0);Ps([E()],zr.prototype,"connected",void 0);Ps([E()],zr.prototype,"loading",void 0);zr=Ps([I("w3m-modal")],zr);const Jw=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return zr}},Symbol.toStringTag,{value:"Module"})),Xw=se`
  :host {
    display: block;
    width: max-content;
  }
`;var Ns=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let En=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=K.state.caipNetwork,this.connected=j.state.isConnected,this.loading=pe.state.loading,this.isUnsupportedChain=K.state.isUnsupportedChain,this.unsubscribe.push(K.subscribeKey("caipNetwork",e=>this.network=e),j.subscribeKey("isConnected",e=>this.connected=e),pe.subscribeKey("loading",e=>this.loading=e),K.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return g`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${de(Pe.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(ce.sendEvent({type:"track",event:"CLICK_NETWORKS"}),pe.open({view:"Networks"}))}};En.styles=Xw;Ns([re({type:Boolean})],En.prototype,"disabled",void 0);Ns([E()],En.prototype,"network",void 0);Ns([E()],En.prototype,"connected",void 0);Ns([E()],En.prototype,"loading",void 0);Ns([E()],En.prototype,"isUnsupportedChain",void 0);En=Ns([I("w3m-network-button")],En);const eg=se`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var G1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wl=class extends z{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=N.state.view,this.unsubscribe.push(N.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return g`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return g`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return g`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return g`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return g`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return g`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return g`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return g`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return g`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return g`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return g`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return g`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return g`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return g`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return g`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return g`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return g`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return g`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return g`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return g`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return g`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return g`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return g`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return g`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return g`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return g`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return g`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return g`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return g`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return g`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return g`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return g`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"Swap":return g`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return g`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return g`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return g`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return g`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return g`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"ConnectWallets":return g`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return g`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return g`<w3m-connecting-social-view></w3m-connecting-social-view>`;default:return g`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){mi.hide();const{history:t}=N.state;let r=-10,o=10;t.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};wl.styles=eg;G1([E()],wl.prototype,"view",void 0);wl=G1([I("w3m-router")],wl);const tg=se`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var In=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ig={USD:"$",EUR:"€",GBP:"£"},rg=[100,250,500,1e3];let xr=class extends z{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=j.state.isConnected,this.loading=pe.state.loading,this.paymentCurrency=Ie.state.paymentCurrency,this.paymentAmount=Ie.state.paymentAmount,this.purchaseAmount=Ie.state.purchaseAmount,this.quoteLoading=Ie.state.quotesLoading,this.unsubscribe.push(j.subscribeKey("isConnected",e=>{this.connected=e}),pe.subscribeKey("loading",e=>{this.loading=e}),Ie.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${rg.map(e=>{var t;return g`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${ig[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?g`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:g`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||pe.open({view:"OnRampProviders"})}openModal(){pe.open({view:"Connect"})}async onPaymentAmountChange(e){Ie.setPaymentAmount(Number(e.detail)),await Ie.getQuote()}async selectPresetAmount(e){Ie.setPaymentAmount(e),await Ie.getQuote()}};xr.styles=tg;In([re({type:Boolean})],xr.prototype,"disabled",void 0);In([E()],xr.prototype,"connected",void 0);In([E()],xr.prototype,"loading",void 0);In([E()],xr.prototype,"paymentCurrency",void 0);In([E()],xr.prototype,"paymentAmount",void 0);In([E()],xr.prototype,"purchaseAmount",void 0);In([E()],xr.prototype,"quoteLoading",void 0);xr=In([I("w3m-onramp-widget")],xr);const ng=se`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var h1;typeof window<"u"&&(window.Buffer||(window.Buffer=Sp.Buffer),window.global||(window.global=window),window.process||(window.process={}),(h1=window.process)!=null&&h1.env||(window.process={env:{}}));var og={};const sg=og.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",F={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},Vt={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},It=w.object({message:w.string()});function ae(i){return w.literal(F[i])}w.object({accessList:w.array(w.string()),blockHash:w.string().nullable(),blockNumber:w.string().nullable(),chainId:w.string(),from:w.string(),gas:w.string(),hash:w.string(),input:w.string().nullable(),maxFeePerGas:w.string(),maxPriorityFeePerGas:w.string(),nonce:w.string(),r:w.string(),s:w.string(),to:w.string(),transactionIndex:w.string().nullable(),type:w.string(),v:w.string(),value:w.string()});const ag=w.object({chainId:w.number()}),lg=w.object({email:w.string().email()}),cg=w.object({otp:w.string()}),ug=w.object({uri:w.string()}),dg=w.object({chainId:w.optional(w.number()),preferredAccountType:w.optional(w.string())}),hg=w.object({provider:w.enum(["google","github","apple","facebook","x","discord"])}),pg=w.object({email:w.string().email()}),fg=w.object({otp:w.string()}),wg=w.object({otp:w.string()}),gg=w.object({themeMode:w.optional(w.enum(["light","dark"])),themeVariables:w.optional(w.record(w.string(),w.string().or(w.number()))),w3mThemeVariables:w.optional(w.record(w.string(),w.string()))}),mg=w.object({metadata:w.object({name:w.string(),description:w.string(),url:w.string(),icons:w.array(w.string())}).optional(),sdkVersion:w.string(),projectId:w.string()}),vg=w.object({type:w.string()}),bg=w.object({action:w.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),yg=w.object({email:w.string(),address:w.string(),chainId:w.number()}),xg=w.object({action:w.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),Cg=w.object({email:w.string().email(),address:w.string(),chainId:w.number(),smartAccountDeployed:w.optional(w.boolean()),preferredAccountType:w.optional(w.string())}),Ag=w.object({uri:w.string()}),_g=w.object({isConnected:w.boolean()}),Eg=w.object({chainId:w.number()}),Sg=w.object({chainId:w.number()}),Tg=w.object({newEmail:w.string().email()}),kg=w.object({smartAccountEnabledNetworks:w.array(w.number())});w.object({address:w.string(),isDeployed:w.boolean()});const Rg=w.object({type:w.string(),address:w.string()}),Ig=w.any(),$g=w.object({method:w.literal("eth_accounts")}),Pg=w.object({method:w.literal("eth_blockNumber")}),Ng=w.object({method:w.literal("eth_call"),params:w.array(w.any())}),Og=w.object({method:w.literal("eth_chainId")}),Mg=w.object({method:w.literal("eth_estimateGas"),params:w.array(w.any())}),Dg=w.object({method:w.literal("eth_feeHistory"),params:w.array(w.any())}),Lg=w.object({method:w.literal("eth_gasPrice")}),Ug=w.object({method:w.literal("eth_getAccount"),params:w.array(w.any())}),Bg=w.object({method:w.literal("eth_getBalance"),params:w.array(w.any())}),Wg=w.object({method:w.literal("eth_getBlockByHash"),params:w.array(w.any())}),jg=w.object({method:w.literal("eth_getBlockByNumber"),params:w.array(w.any())}),Fg=w.object({method:w.literal("eth_getBlockReceipts"),params:w.array(w.any())}),zg=w.object({method:w.literal("eth_getBlockTransactionCountByHash"),params:w.array(w.any())}),Hg=w.object({method:w.literal("eth_getBlockTransactionCountByNumber"),params:w.array(w.any())}),Vg=w.object({method:w.literal("eth_getCode"),params:w.array(w.any())}),Zg=w.object({method:w.literal("eth_getFilterChanges"),params:w.array(w.any())}),Gg=w.object({method:w.literal("eth_getFilterLogs"),params:w.array(w.any())}),qg=w.object({method:w.literal("eth_getLogs"),params:w.array(w.any())}),Kg=w.object({method:w.literal("eth_getProof"),params:w.array(w.any())}),Yg=w.object({method:w.literal("eth_getStorageAt"),params:w.array(w.any())}),Qg=w.object({method:w.literal("eth_getTransactionByBlockHashAndIndex"),params:w.array(w.any())}),Jg=w.object({method:w.literal("eth_getTransactionByBlockNumberAndIndex"),params:w.array(w.any())}),Xg=w.object({method:w.literal("eth_getTransactionByHash"),params:w.array(w.any())}),em=w.object({method:w.literal("eth_getTransactionCount"),params:w.array(w.any())}),tm=w.object({method:w.literal("eth_getTransactionReceipt"),params:w.array(w.any())}),im=w.object({method:w.literal("eth_getUncleCountByBlockHash"),params:w.array(w.any())}),rm=w.object({method:w.literal("eth_getUncleCountByBlockNumber"),params:w.array(w.any())}),nm=w.object({method:w.literal("eth_maxPriorityFeePerGas")}),om=w.object({method:w.literal("eth_newBlockFilter")}),sm=w.object({method:w.literal("eth_newFilter"),params:w.array(w.any())}),am=w.object({method:w.literal("eth_newPendingTransactionFilter")}),lm=w.object({method:w.literal("eth_sendRawTransaction"),params:w.array(w.any())}),cm=w.object({method:w.literal("eth_syncing"),params:w.array(w.any())}),um=w.object({method:w.literal("eth_uninstallFilter"),params:w.array(w.any())}),nd=w.object({method:w.literal("personal_sign"),params:w.array(w.any())}),dm=w.object({method:w.literal("eth_signTypedData_v4"),params:w.array(w.any())}),od=w.object({method:w.literal("eth_sendTransaction"),params:w.array(w.any())}),sd=w.object({token:w.string()}),Va={appEvent:w.object({type:ae("APP_SWITCH_NETWORK"),payload:ag}).or(w.object({type:ae("APP_CONNECT_EMAIL"),payload:lg})).or(w.object({type:ae("APP_CONNECT_DEVICE")})).or(w.object({type:ae("APP_CONNECT_OTP"),payload:cg})).or(w.object({type:ae("APP_CONNECT_SOCIAL"),payload:ug})).or(w.object({type:ae("APP_GET_USER"),payload:w.optional(dg)})).or(w.object({type:ae("APP_GET_SOCIAL_REDIRECT_URI"),payload:hg})).or(w.object({type:ae("APP_SIGN_OUT")})).or(w.object({type:ae("APP_IS_CONNECTED"),payload:w.optional(sd)})).or(w.object({type:ae("APP_GET_CHAIN_ID")})).or(w.object({type:ae("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(w.object({type:ae("APP_INIT_SMART_ACCOUNT")})).or(w.object({type:ae("APP_SET_PREFERRED_ACCOUNT"),payload:vg})).or(w.object({type:ae("APP_RPC_REQUEST"),payload:nd.or(od).or($g).or(Pg).or(Ng).or(Og).or(Mg).or(Dg).or(Lg).or(Ug).or(Bg).or(Wg).or(jg).or(Fg).or(zg).or(Hg).or(Vg).or(Zg).or(Gg).or(qg).or(Kg).or(Yg).or(Qg).or(Jg).or(Xg).or(em).or(tm).or(im).or(rm).or(nm).or(om).or(sm).or(am).or(lm).or(cm).or(um).or(nd).or(dm).or(od)})).or(w.object({type:ae("APP_UPDATE_EMAIL"),payload:pg})).or(w.object({type:ae("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:fg})).or(w.object({type:ae("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:wg})).or(w.object({type:ae("APP_SYNC_THEME"),payload:gg})).or(w.object({type:ae("APP_SYNC_DAPP_DATA"),payload:mg})),frameEvent:w.object({type:ae("FRAME_SWITCH_NETWORK_ERROR"),payload:It}).or(w.object({type:ae("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Sg})).or(w.object({type:ae("FRAME_CONNECT_EMAIL_ERROR"),payload:It})).or(w.object({type:ae("FRAME_CONNECT_EMAIL_SUCCESS"),payload:bg})).or(w.object({type:ae("FRAME_CONNECT_OTP_ERROR"),payload:It})).or(w.object({type:ae("FRAME_CONNECT_OTP_SUCCESS")})).or(w.object({type:ae("FRAME_CONNECT_DEVICE_ERROR"),payload:It})).or(w.object({type:ae("FRAME_CONNECT_DEVICE_SUCCESS")})).or(w.object({type:ae("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:yg})).or(w.object({type:ae("FRAME_CONNECT_SOCIAL_ERROR"),payload:It})).or(w.object({type:ae("FRAME_GET_USER_ERROR"),payload:It})).or(w.object({type:ae("FRAME_GET_USER_SUCCESS"),payload:Cg})).or(w.object({type:ae("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:It})).or(w.object({type:ae("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:Ag})).or(w.object({type:ae("FRAME_SIGN_OUT_ERROR"),payload:It})).or(w.object({type:ae("FRAME_SIGN_OUT_SUCCESS")})).or(w.object({type:ae("FRAME_IS_CONNECTED_ERROR"),payload:It})).or(w.object({type:ae("FRAME_IS_CONNECTED_SUCCESS"),payload:_g})).or(w.object({type:ae("FRAME_GET_CHAIN_ID_ERROR"),payload:It})).or(w.object({type:ae("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Eg})).or(w.object({type:ae("FRAME_RPC_REQUEST_ERROR"),payload:It})).or(w.object({type:ae("FRAME_RPC_REQUEST_SUCCESS"),payload:Ig})).or(w.object({type:ae("FRAME_SESSION_UPDATE"),payload:sd})).or(w.object({type:ae("FRAME_UPDATE_EMAIL_ERROR"),payload:It})).or(w.object({type:ae("FRAME_UPDATE_EMAIL_SUCCESS"),payload:xg})).or(w.object({type:ae("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:It})).or(w.object({type:ae("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(w.object({type:ae("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:It})).or(w.object({type:ae("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Tg})).or(w.object({type:ae("FRAME_SYNC_THEME_ERROR"),payload:It})).or(w.object({type:ae("FRAME_SYNC_THEME_SUCCESS")})).or(w.object({type:ae("FRAME_SYNC_DAPP_DATA_ERROR"),payload:It})).or(w.object({type:ae("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(w.object({type:ae("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:kg})).or(w.object({type:ae("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:It})).or(w.object({type:ae("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:It})).or(w.object({type:ae("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:Rg})).or(w.object({type:ae("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:It}))},ci={set(i,e){Bt.isClient&&localStorage.setItem(`${F.STORAGE_KEY}${i}`,e)},get(i){return Bt.isClient?localStorage.getItem(`${F.STORAGE_KEY}${i}`):null},delete(i){Bt.isClient&&localStorage.removeItem(`${F.STORAGE_KEY}${i}`)}},ad={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},hm=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Za=30*1e3,Bt={getBlockchainApiUrl(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return hm.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const i=ci.get(F.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<Za){const t=Math.ceil((Za-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const i=ci.get(F.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<Za)return Math.ceil((Za-e)/1e3)}return 0},checkIfRequestExists(i){const e=this.getRequestMethod(i);return Vt.NOT_SAFE_RPC_METHODS.includes(e)||Vt.SAFE_RPC_METHODS.includes(e)},getRequestMethod(i){var e;return(e=i==null?void 0:i.payload)==null?void 0:e.method},getResponseType(i){const{type:e,payload:t}=i;return e===F.FRAME_RPC_REQUEST_ERROR?F.RPC_RESPONSE_TYPE_ERROR:typeof t=="string"&&(t.match(ad.transactionHash)||t.match(ad.signedMessage))?F.RPC_RESPONSE_TYPE_TX:F.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed(i){const e=this.getRequestMethod(i);return Vt.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};class pm{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=Bt.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{Bt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(F.FRAME_EVENT_KEY)))return;const n=Va.frameEvent.parse(o);r(n)})},onAppEvent:r=>{Bt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(F.APP_EVENT_KEY)))return;const n=Va.appEvent.parse(o);r(n)})},postAppEvent:r=>{var o;if(Bt.isClient){if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");Va.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")}},postFrameEvent:r=>{if(Bt.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");Va.frameEvent.parse(r),parent.postMessage(r,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),t&&(this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),Bt.isClient)){const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${sg}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",r.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class fm{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.connectSocialResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.getSocialRedirectUriResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new pm(e,!0),this.w3mFrame.events.onFrameEvent(t=>{switch(console.log("💻 received",t),t.type){case F.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(t);case F.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(t);case F.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case F.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(t);case F.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case F.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(t);case F.FRAME_CONNECT_SOCIAL_SUCCESS:return this.onConnectSocialSuccess(t);case F.FRAME_CONNECT_SOCIAL_ERROR:return this.onConnectSocialError(t);case F.FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:return this.onGetSocialRedirectUriSuccess(t);case F.FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:return this.onGetSocialRedirectUriError(t);case F.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(t);case F.FRAME_GET_USER_ERROR:return this.onConnectError(t);case F.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(t);case F.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(t);case F.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(t);case F.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(t);case F.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case F.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(t);case F.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(t);case F.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(t);case F.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(t);case F.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(t);case F.FRAME_SESSION_UPDATE:return this.onSessionUpdate(t);case F.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess(t);case F.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(t);case F.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case F.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(t);case F.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(t);case F.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(t);case F.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case F.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(t);case F.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case F.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(t);case F.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(t);case F.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(t);case F.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onSetPreferredAccountSuccess();case F.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onSetPreferredAccountError();default:return null}})}getLoginEmailUsed(){return!!ci.get(F.EMAIL_LOGIN_USED_KEY)}getEmail(){return ci.get(F.EMAIL)}rejectRpcRequest(){var e;(e=this.rpcRequestResolver)==null||e.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Bt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:F.APP_CONNECT_EMAIL,payload:e}),new Promise((t,r)=>{this.connectEmailResolver={resolve:t,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_CONNECT_OTP,payload:e}),new Promise((t,r)=>{this.connectOtpResolver={resolve:t,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async getSocialRedirectUri(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_GET_SOCIAL_REDIRECT_URI,payload:e}),new Promise((t,r)=>{this.getSocialRedirectUriResolver={resolve:t,reject:r}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Bt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:F.APP_UPDATE_EMAIL,payload:e}),new Promise((t,r)=>{this.updateEmailResolver={resolve:t,reject:r}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((t,r)=>{this.updateEmailPrimaryOtpResolver={resolve:t,reject:r}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((t,r)=>{this.updateEmailSecondaryOtpResolver={resolve:t,reject:r}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_SYNC_THEME,payload:e}),new Promise((t,r)=>{this.syncThemeResolver={resolve:t,reject:r}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_SYNC_DAPP_DATA,payload:e}),new Promise((t,r)=>{this.syncDappDataResolver={resolve:t,reject:r}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((t,r)=>{this.setPreferredAccountResolver={resolve:t,reject:r}})}async connect(e){const t=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_GET_USER,payload:{chainId:t}}),new Promise((r,o)=>{this.connectResolver={resolve:r,reject:o}})}async connectSocial(e){return this.w3mFrame.events.postAppEvent({type:F.APP_CONNECT_SOCIAL,payload:{uri:e}}),new Promise((t,r)=>{this.connectSocialResolver={resolve:t,reject:r}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((t,r)=>{this.switchChainResolver={resolve:t,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:F.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return await this.w3mFrame.frameLoadPromise,Vt.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:F.APP_RPC_REQUEST,payload:e}),new Promise((t,r)=>{this.rpcRequestResolver={resolve:t,reject:r}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(F.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(F.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===F.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===F.FRAME_IS_CONNECTED_ERROR&&e(),t.type===F.FRAME_IS_CONNECTED_SUCCESS&&!t.payload.isConnected&&e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===F.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===F.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:Vt.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===F.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===F.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){var t;(t=this.connectEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var t;(t=this.connectEmailResolver)==null||t.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var t;(t=this.connectDeviceResolver)==null||t.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var t;(t=this.connectOtpResolver)==null||t.reject(e.payload.message)}onConnectSuccess(e){var t;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(t=this.connectResolver)==null||t.resolve(e.payload)}onConnectError(e){var t;(t=this.connectResolver)==null||t.reject(e.payload.message)}onConnectSocialSuccess(e){var t;(t=this.connectSocialResolver)==null||t.resolve(e.payload)}onConnectSocialError(e){var t;(t=this.connectSocialResolver)==null||t.reject(e.payload.message)}onIsConnectedSuccess(e){var t;e.payload.isConnected||this.deleteEmailLoginCache(),(t=this.isConnectedResolver)==null||t.resolve(e.payload)}onIsConnectedError(e){var t;(t=this.isConnectedResolver)==null||t.reject(e.payload.message)}onGetChainIdSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.getChainIdResolver)==null||t.resolve(e.payload)}onGetChainIdError(e){var t;(t=this.getChainIdResolver)==null||t.reject(e.payload.message)}onGetSocialRedirectUriSuccess(e){var t;(t=this.getSocialRedirectUriResolver)==null||t.resolve(e.payload)}onGetSocialRedirectUriError(e){var t;(t=this.getSocialRedirectUriResolver)==null||t.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var t;(t=this.disconnectResolver)==null||t.reject(e.payload.message)}onSwitchChainSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.switchChainResolver)==null||t.resolve(e.payload)}onSwitchChainError(e){var t;(t=this.switchChainResolver)==null||t.reject(e.payload.message)}onRpcRequestSuccess(e){var t;(t=this.rpcRequestResolver)==null||t.resolve(e.payload)}onRpcRequestError(e){var t;(t=this.rpcRequestResolver)==null||t.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(e){var t;(t=this.updateEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var t;(t=this.updateEmailResolver)==null||t.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var t;(t=this.updateEmailPrimaryOtpResolver)==null||t.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var r;const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),(r=this.updateEmailSecondaryOtpResolver)==null||r.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){var t;(t=this.updateEmailSecondaryOtpResolver)==null||t.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var t;(t=this.syncThemeResolver)==null||t.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var t;(t=this.syncDappDataResolver)==null||t.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){var t;this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),(t=this.smartAccountEnabledNetworksResolver)==null||t.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){var t;this.persistSmartAccountEnabledNetworks([]),(t=this.smartAccountEnabledNetworksResolver)==null||t.reject(e.payload.message)}onSetPreferredAccountSuccess(){var e;(e=this.setPreferredAccountResolver)==null||e.resolve(void 0)}onSetPreferredAccountError(){var e;(e=this.setPreferredAccountResolver)==null||e.reject()}setNewLastEmailLoginTime(){ci.set(F.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){ci.set(F.EMAIL,e),ci.set(F.EMAIL_LOGIN_USED_KEY,"true"),ci.delete(F.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){ci.delete(F.EMAIL_LOGIN_USED_KEY),ci.delete(F.EMAIL),ci.delete(F.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){ci.set(F.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(ci.get(F.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){ci.set(F.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}var Rr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ui=class extends z{constructor(){super(),this.usubscribe=[],this.networkImages=jt.state.networkImages,this.address=j.state.address,this.profileImage=j.state.profileImage,this.profileName=j.state.profileName,this.network=K.state.caipNetwork,this.preferredAccountType=j.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(j.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):pe.close()}),K.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t,r;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((t=this.network)==null?void 0:t.imageId)??""];return g`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${de(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?le.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):le.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${de(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((r=this.network)==null?void 0:r.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=K.state,t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}onCopyAddress(){try{this.address&&(H.copyToClopboard(this.address),ye.showSuccess("Address copied"))}catch{ye.showError("Failed to copy")}}emailBtnTemplate(){const e=Le.getConnectedConnector(),t=ge.getAuthConnector();if(!t||e!=="AUTH")return null;const r=t.provider.getEmail()??"";return g`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=K.checkIfSmartAccountEnabled(),t=Le.getConnectedConnector();return!ge.getAuthConnector()||t!=="AUTH"||!e?null:(this.switched||(this.text=this.preferredAccountType===Vt.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),g`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}async changePreferredAccountType(){const e=K.checkIfSmartAccountEnabled(),t=this.preferredAccountType===Vt.ACCOUNT_TYPES.SMART_ACCOUNT||!e?Vt.ACCOUNT_TYPES.EOA:Vt.ACCOUNT_TYPES.SMART_ACCOUNT,r=ge.getAuthConnector();r&&(this.loading=!0,pe.setLoading(!0),await(r==null?void 0:r.provider.setPreferredAccount(t)),await we.reconnectExternal(r),pe.setLoading(!1),this.text=t===Vt.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,$e.resetSend(),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){N.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&N.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await we.disconnect(),ce.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),pe.close()}catch{ce.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),ye.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};Ui.styles=ng;Rr([E()],Ui.prototype,"address",void 0);Rr([E()],Ui.prototype,"profileImage",void 0);Rr([E()],Ui.prototype,"profileName",void 0);Rr([E()],Ui.prototype,"network",void 0);Rr([E()],Ui.prototype,"preferredAccountType",void 0);Rr([E()],Ui.prototype,"disconnecting",void 0);Rr([E()],Ui.prototype,"loading",void 0);Rr([E()],Ui.prototype,"switched",void 0);Rr([E()],Ui.prototype,"text",void 0);Ui=Rr([I("w3m-account-settings-view")],Ui);var wm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ld=class extends z{render(){const e=Le.getConnectedConnector();return g`
      ${ee.state.enableWalletFeatures&&e==="AUTH"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return g`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return g`<w3m-account-default-widget></w3m-account-default-widget>`}};ld=wm([I("w3m-account-view")],ld);var q1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wu=class extends z{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=H.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return g`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?g`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:g`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return H.isMobile()?g`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){N.push("ConnectingWalletConnect")}};q1([E()],wu.prototype,"search",void 0);wu=q1([I("w3m-all-wallets-view")],wu);const gm=se`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var rr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ai=class extends z{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Ie.state.selectedProvider,this.uri=we.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ie.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var r,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(r=this.selectedOnRampProvider)==null?void 0:r.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return g`
      <wui-flex
        data-error=${de(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${de((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=j.state.address,t=ee.state.projectId;if(!e)throw new Error("No address found");(await ri.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(n=>new Date(n.metadata.minedAt)>new Date(this.startTime)||n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),N.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){ye.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,H.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?g`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Et.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return g`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){ye.showError("No link found"),N.goBack();return}try{H.copyToClopboard(this.selectedOnRampProvider.url),ye.showSuccess("Link copied")}catch{ye.showError("Failed to copy")}}};Ai.styles=gm;rr([E()],Ai.prototype,"selectedOnRampProvider",void 0);rr([E()],Ai.prototype,"uri",void 0);rr([E()],Ai.prototype,"ready",void 0);rr([E()],Ai.prototype,"showRetry",void 0);rr([E()],Ai.prototype,"buffering",void 0);rr([E()],Ai.prototype,"error",void 0);rr([E()],Ai.prototype,"intervalId",void 0);rr([E()],Ai.prototype,"startTime",void 0);rr([re({type:Boolean})],Ai.prototype,"isMobile",void 0);rr([re()],Ai.prototype,"onRetry",void 0);Ai=rr([I("w3m-buy-in-progress-view")],Ai);const mm=se`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`;var K1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gl=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){const e=this.connectors.find(t=>t.type==="AUTH");return e!=null&&e.socials?e!=null&&e.showWallets?g`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
            <w3m-connect-recent-widget></w3m-connect-recent-widget>
            <w3m-connect-announced-widget></w3m-connect-announced-widget>
            <w3m-connect-injected-widget></w3m-connect-injected-widget>
            <w3m-connect-custom-widget></w3m-connect-custom-widget>
            <w3m-connect-recommended-widget></w3m-connect-recommended-widget>
            <wui-flex class="all-wallets" .margin=${["xs","0","0","0"]}>
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:g` <wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:g`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){N.push("ConnectWallets")}};gl.styles=mm;K1([E()],gl.prototype,"connectors",void 0);gl=K1([I("w3m-connect-view")],gl);const vm=se`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Uo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class fi extends z{constructor(){var e,t,r,o;super(),this.wallet=(e=N.state.data)==null?void 0:e.wallet,this.connector=(t=N.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Pe.getWalletImage(this.wallet)??Pe.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=we.state.wcUri,this.error=we.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(we.subscribeKey("wcUri",n=>{var s;this.uri=n,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),we.subscribeKey("wcError",n=>this.error=n),we.subscribeKey("buffering",n=>this.buffering=n))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),g`
      <wui-flex
        data-error=${de(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${de(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?g`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(we.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=Et.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return g`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(H.copyToClopboard(this.uri),ye.showSuccess("Link copied"))}catch{ye.showError("Failed to copy")}}}fi.styles=vm;Uo([E()],fi.prototype,"uri",void 0);Uo([E()],fi.prototype,"error",void 0);Uo([E()],fi.prototype,"ready",void 0);Uo([E()],fi.prototype,"showRetry",void 0);Uo([E()],fi.prototype,"buffering",void 0);Uo([re({type:Boolean})],fi.prototype,"isMobile",void 0);Uo([re()],fi.prototype,"onRetry",void 0);var bm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let cd=class extends fi{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Le.setConnectedWalletImageUrl(this.connector.imageUrl),await we.connectExternal(this.connector),ee.state.isSiweEnabled?N.push("ConnectingSiwe"):pe.close(),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){ce.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};cd=bm([I("w3m-connecting-external-view")],cd);var g0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ml=class extends z{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=N.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Ct.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),g`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):g`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=we.state;if(e||H.isPairingExpired(t)){if(we.connectWalletConnect(),this.wallet){const r=Pe.getWalletImage(this.wallet);r&&Le.setConnectedWalletImageUrl(r)}else{const o=ge.state.connectors.find(s=>s.type==="WALLET_CONNECT"),n=Pe.getConnectorImage(o);n&&Le.setConnectedWalletImageUrl(n)}if(await we.state.wcPromise,this.finalizeConnection(),ee.state.isSiweEnabled){const{SIWEController:r}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url);r.state.status==="success"?pe.close():N.push("ConnectingSiwe")}else pe.close()}}catch(t){ce.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),we.setWcError(!0),H.isAllowedRetry(this.lastRetry)&&(ye.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var r;const{wcLinking:e,recentWallet:t}=we.state;e&&Le.setWalletConnectDeepLink(e),t&&Le.setWeb3ModalRecent(t),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((r=this.wallet)==null?void 0:r.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:n}=this.wallet,s=o==null?void 0:o.map(({injected_id:k})=>k).filter(Boolean),a=n?[n]:s??[],u=a.length,p=e,b=r,C=we.checkInstalled(a),x=u&&C,S=t&&!H.isMobile();x&&this.platforms.push("browser"),p&&this.platforms.push(H.isMobile()?"mobile":"qrcode"),b&&this.platforms.push("web"),S&&this.platforms.push("desktop"),!x&&u&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return g`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return g`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return g`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return g`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return g`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return g`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?g`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};g0([E()],ml.prototype,"platform",void 0);g0([E()],ml.prototype,"platforms",void 0);ml=g0([I("w3m-connecting-wc-view")],ml);var ym=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ud=class extends z{constructor(){var e;super(...arguments),this.wallet=(e=N.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return g`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?g`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?g`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?g`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?g`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&H.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&H.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&H.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&H.openHref(this.wallet.homepage,"_blank")}};ud=ym([I("w3m-downloads-view")],ud);var xm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Cm="https://walletconnect.com/explorer";let dd=class extends z{render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{H.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=me.state,{customWallets:r}=ee.state;return[...t,...r??[],...e].slice(0,4).map(n=>g`
        <wui-list-wallet
          name=${n.name??"Unknown"}
          tagVariant="main"
          imageSrc=${de(Pe.getWalletImage(n))}
          @click=${()=>{H.openHref(n.homepage??Cm,"_blank")}}
        ></wui-list-wallet>
      `)}};dd=xm([I("w3m-get-wallet-view")],dd);const Am=se`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var m0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ba=class extends z{constructor(){var e;super(),this.network=(e=N.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return g`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${de(Pe.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:g`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=Le.getConnectedConnector();return ge.getAuthConnector()&&e==="AUTH"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var r;const e=Le.getConnectedConnector();return ge.getAuthConnector()&&e==="AUTH"?`Switching to ${((r=this.network)==null?void 0:r.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await K.switchActiveNetwork(this.network),ee.state.isSiweEnabled||ka.navigateAfterNetworkSwitch())}catch{this.error=!0}}};ba.styles=Am;m0([E()],ba.prototype,"showRetry",void 0);m0([E()],ba.prototype,"error",void 0);ba=m0([I("w3m-network-switch-view")],ba);const _m=se`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Y1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vl=class extends z{constructor(){super(),this.unsubscribe=[],this.caipNetwork=K.state.caipNetwork,this.unsubscribe.push(K.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){ce.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),N.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=K.state,o=H.sortRequestedNetworks(e,t);return o==null?void 0:o.map(n=>{var s;return g`
        <wui-card-select
          .selected=${((s=this.caipNetwork)==null?void 0:s.id)===n.id}
          imageSrc=${de(Pe.getNetworkImage(n))}
          type="network"
          name=${n.name??n.id}
          @click=${()=>this.onSwitchNetwork(n)}
          .disabled=${!r&&!(e!=null&&e.includes(n.id))}
          data-testid=${`w3m-network-switch-${n.name??n.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:t}=j.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:n}=K.state,{data:s}=N.state;t&&(n==null?void 0:n.id)!==e.id?r!=null&&r.includes(e.id)?(await K.switchActiveNetwork(e),ka.navigateAfterNetworkSwitch()):o&&N.push("SwitchNetwork",{...s,network:e}):t||(K.setCaipNetwork(e),N.push("Connect"))}};vl.styles=_m;Y1([E()],vl.prototype,"caipNetwork",void 0);vl=Y1([I("w3m-networks-view")],vl);const Em=se`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Da=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Sm=7;let Ao=class extends z{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Ie.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Yt.state.coinbaseTransactions,this.tokenImages=jt.state.tokenImages,this.unsubscribe.push(Ie.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),jt.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},Yt.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),Yt.clearCursor(),this.fetchTransactions()}render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var a,u,p;const r=Fu.formatDate((a=t==null?void 0:t.metadata)==null?void 0:a.minedAt),o=t.transfers[0],n=o==null?void 0:o.fungible_info;if(!n)return null;const s=((u=n==null?void 0:n.icon)==null?void 0:u.url)||((p=this.tokenImages)==null?void 0:p[n.symbol||""]);return g`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${de(n.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${r}
          icon=${de(s)}
          symbol=${de(n.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const r=parseInt(t,10);return new Array(12).fill(null).map((n,s)=>s).reverse().map(n=>{var u;const s=dn.getTransactionGroupTitle(r,n),a=(u=this.coinbaseTransactions[r])==null?void 0:u[n];return a?g`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=j.state.address,t=ee.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await Yt.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(n=>n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const n=j.state.address;await Yt.fetchTransactions(n,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Sm).fill(g` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};Ao.styles=Em;Da([E()],Ao.prototype,"selectedOnRampProvider",void 0);Da([E()],Ao.prototype,"loading",void 0);Da([E()],Ao.prototype,"coinbaseTransactions",void 0);Da([E()],Ao.prototype,"tokenImages",void 0);Ao=Da([I("w3m-onramp-activity-view")],Ao);const Tm=se`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var rc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ms=class extends z{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ie.state.paymentCurrency,this.currencies=Ie.state.paymentCurrencies,this.currencyImages=jt.state.currencyImages,this.unsubscribe.push(Ie.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),jt.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var t;return g`
        <wui-list-item
          imageSrc=${de((t=this.currencyImages)==null?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(Ie.setPaymentCurrency(e),pe.close())}};ms.styles=Tm;rc([E()],ms.prototype,"selectedCurrency",void 0);rc([E()],ms.prototype,"currencies",void 0);rc([E()],ms.prototype,"currencyImages",void 0);ms=rc([I("w3m-onramp-fiat-select-view")],ms);var Q1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gu=class extends z{constructor(){super(),this.unsubscribe=[],this.providers=Ie.state.providers,this.unsubscribe.push(Ie.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((r,o)=>({...r,url:t[o]||""}))})}render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>g`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){Ie.setSelectedProvider(e),N.push("BuyInProgress"),H.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=j.state.address,t=K.state.caipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const r=Ct.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??Ct.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=Ie.state.purchaseCurrency,n=o?[o.symbol]:Ie.state.purchaseCurrencies.map(s=>s.symbol);return await ri.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:Ct.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:Ie.state.purchaseAmount})}};Q1([E()],gu.prototype,"providers",void 0);gu=Q1([I("w3m-onramp-providers-view")],gu);const km=se`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var nc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vs=class extends z{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ie.state.purchaseCurrencies,this.tokens=Ie.state.purchaseCurrencies,this.tokenImages=jt.state.tokenImages,this.unsubscribe.push(Ie.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),jt.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var t;return g`
        <wui-list-item
          imageSrc=${de((t=this.tokenImages)==null?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(Ie.setPurchaseCurrency(e),pe.close())}};vs.styles=km;nc([E()],vs.prototype,"selectedCurrency",void 0);nc([E()],vs.prototype,"tokens",void 0);nc([E()],vs.prototype,"tokenImages",void 0);vs=nc([I("w3m-onramp-token-select-view")],vs);const Rm=se`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var kt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yt=class extends z{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=K.state.caipNetwork)==null?void 0:e.id,this.initialized=J.state.initialized,this.loading=J.state.loading,this.loadingPrices=J.state.loadingPrices,this.sourceToken=J.state.sourceToken,this.sourceTokenAmount=J.state.sourceTokenAmount,this.sourceTokenPriceInUSD=J.state.sourceTokenPriceInUSD,this.toToken=J.state.toToken,this.toTokenAmount=J.state.toTokenAmount,this.toTokenPriceInUSD=J.state.toTokenPriceInUSD,this.inputError=J.state.inputError,this.gasPriceInUSD=J.state.gasPriceInUSD,this.priceImpact=J.state.priceImpact,this.maxSlippage=J.state.maxSlippage,this.providerFee=J.state.providerFee,this.transactionLoading=J.state.transactionLoading,this.networkTokenSymbol=J.state.networkTokenSymbol,this.fetchError=J.state.fetchError,this.onDebouncedGetSwapCalldata=H.debounce(async()=>{await J.swapTokens()},200),K.subscribeKey("caipNetwork",t=>{this.caipNetworkId!==(t==null?void 0:t.id)&&(this.caipNetworkId=t==null?void 0:t.id,J.resetState(),J.initializeState())}),this.unsubscribe.push(pe.subscribeKey("open",t=>{t||J.resetState()}),N.subscribeKey("view",t=>{t.includes("Swap")||J.resetValues()}),J.subscribe(t=>{this.initialized=t.initialized,this.loading=t.loading,this.loadingPrices=t.loadingPrices,this.transactionLoading=t.transactionLoading,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.providerFee=t.providerFee,this.fetchError=t.fetchError}))}firstUpdated(){J.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{J.getNetworkTokenPrice(),J.getMyTokensWithBalance(),J.swapTokens()},1e4)}templateSwap(){return g`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.initialized?this.inputError?this.inputError:"Review swap":"Swap":"Enter amount"}templateReplaceTokensButton(){return g`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return g`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){var a,u;const r=(a=J.state.myTokensWithBalance)==null?void 0:a.find(p=>(p==null?void 0:p.address)===(t==null?void 0:t.address)),o=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,n=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let s=parseFloat(o)*n;return e==="toToken"&&(s-=this.gasPriceInUSD||0),g`<w3m-swap-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loading&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${(u=r==null?void 0:r.quantity)==null?void 0:u.numeric}
      .price=${r==null?void 0:r.price}
      .marketValue=${s}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const r=e==="sourceToken"?this.sourceToken:this.toToken,o=(r==null?void 0:r.address)===Ct.NATIVE_TOKEN_ADDRESS;let n="0";if(!t){n="0",this.handleChangeAmount(e,n);return}if(!this.gasPriceInUSD){n=t,this.handleChangeAmount(e,n);return}const s=Ne.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),a=o?Ne.bigNumber(t).minus(s):Ne.bigNumber(t);this.handleChangeAmount(e,a.isGreaterThan(0)?a.toFixed(20):"0")}templateDetails(){var t,r;if(this.inputError||!this.sourceToken||!this.toToken||!this.sourceTokenAmount||!this.toTokenAmount)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return g`
      <w3m-swap-details
        .detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(t=this.sourceToken)==null?void 0:t.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(r=this.toToken)==null?void 0:r.symbol}
        toTokenSwappedAmount=${e}
        toTokenAmount=${this.toTokenAmount}
        gasPriceInUSD=${this.gasPriceInUSD}
        .priceImpact=${this.priceImpact}
        slippageRate=${Ct.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
        providerFee=${this.providerFee}
        networkTokenSymbol=${this.networkTokenSymbol}
      ></w3m-swap-details>
    `}handleChangeAmount(e,t){J.clearError(),e==="sourceToken"?J.setSourceTokenAmount(t):J.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,r=this.loading||this.loadingPrices||this.transactionLoading,o=r||e||t||this.inputError;return g` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${r}
        .disabled=${o}
        @click=${this.onSwapPreview}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){J.switchTokens()}onSwapPreview(){if(this.fetchError){J.swapTokens();return}N.push("SwapPreview")}};yt.styles=Rm;kt([E()],yt.prototype,"interval",void 0);kt([E()],yt.prototype,"detailsOpen",void 0);kt([E()],yt.prototype,"caipNetworkId",void 0);kt([E()],yt.prototype,"initialized",void 0);kt([E()],yt.prototype,"loading",void 0);kt([E()],yt.prototype,"loadingPrices",void 0);kt([E()],yt.prototype,"sourceToken",void 0);kt([E()],yt.prototype,"sourceTokenAmount",void 0);kt([E()],yt.prototype,"sourceTokenPriceInUSD",void 0);kt([E()],yt.prototype,"toToken",void 0);kt([E()],yt.prototype,"toTokenAmount",void 0);kt([E()],yt.prototype,"toTokenPriceInUSD",void 0);kt([E()],yt.prototype,"inputError",void 0);kt([E()],yt.prototype,"gasPriceInUSD",void 0);kt([E()],yt.prototype,"priceImpact",void 0);kt([E()],yt.prototype,"maxSlippage",void 0);kt([E()],yt.prototype,"providerFee",void 0);kt([E()],yt.prototype,"transactionLoading",void 0);kt([E()],yt.prototype,"networkTokenSymbol",void 0);kt([E()],yt.prototype,"fetchError",void 0);yt=kt([I("w3m-swap-view")],yt);const Im=se`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Gt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pt=class extends z{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=J.state.approvalTransaction,this.swapTransaction=J.state.swapTransaction,this.sourceToken=J.state.sourceToken,this.sourceTokenAmount=J.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=J.state.sourceTokenPriceInUSD,this.toToken=J.state.toToken,this.toTokenAmount=J.state.toTokenAmount??"",this.toTokenPriceInUSD=J.state.toTokenPriceInUSD,this.caipNetwork=K.state.caipNetwork,this.transactionLoading=J.state.transactionLoading,this.balanceSymbol=j.state.balanceSymbol,this.gasPriceInUSD=J.state.gasPriceInUSD,this.priceImpact=J.state.priceImpact,this.maxSlippage=J.state.maxSlippage,this.providerFee=J.state.providerFee,this.unsubscribe.push(j.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&N.goBack()}),K.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),J.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.transactionLoading=e.transactionLoading,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.providerFee=e.providerFee}))}render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s"
        >${this.templateSwap()}</wui-flex
      >
    `}templateSwap(){var a,u,p,b;const e=`${le.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(a=this.sourceToken)==null?void 0:a.symbol}`,t=`${le.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(u=this.toToken)==null?void 0:u.symbol}`,r=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,o=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),n=le.formatNumberToLocalString(r),s=le.formatNumberToLocalString(o);return g`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(p=this.sourceToken)==null?void 0:p.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${s}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(b=this.toToken)==null?void 0:b.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?disabled=${this.transactionLoading}
            @click=${this.onSendTransaction.bind(this)}
          >
            ${this.transactionLoading?g`<wui-loading-spinner color="inverse-100"></wui-loading-spinner>`:g`<wui-text variant="paragraph-600" color="inverse-100">
                  ${this.actionButtonLabel()}
                </wui-text>`}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){var t,r;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return g`
      <w3m-swap-details
        detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(t=this.sourceToken)==null?void 0:t.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(r=this.toToken)==null?void 0:r.symbol}
        toTokenSwappedAmount=${e}
        toTokenAmount=${this.toTokenAmount}
        gasPriceInUSD=${le.formatNumberToLocalString(this.gasPriceInUSD,3)}
        .priceImpact=${this.priceImpact}
        slippageRate=${Ct.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
        providerFee=${this.providerFee}
      ></w3m-swap-details>
    `}actionButtonLabel(){return this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){N.goBack()}onSendTransaction(){this.approvalTransaction?J.sendTransactionForApproval(this.approvalTransaction):J.sendTransactionForSwap(this.swapTransaction)}};Pt.styles=Im;Gt([E()],Pt.prototype,"detailsOpen",void 0);Gt([E()],Pt.prototype,"approvalTransaction",void 0);Gt([E()],Pt.prototype,"swapTransaction",void 0);Gt([E()],Pt.prototype,"sourceToken",void 0);Gt([E()],Pt.prototype,"sourceTokenAmount",void 0);Gt([E()],Pt.prototype,"sourceTokenPriceInUSD",void 0);Gt([E()],Pt.prototype,"toToken",void 0);Gt([E()],Pt.prototype,"toTokenAmount",void 0);Gt([E()],Pt.prototype,"toTokenPriceInUSD",void 0);Gt([E()],Pt.prototype,"caipNetwork",void 0);Gt([E()],Pt.prototype,"transactionLoading",void 0);Gt([E()],Pt.prototype,"balanceSymbol",void 0);Gt([E()],Pt.prototype,"gasPriceInUSD",void 0);Gt([E()],Pt.prototype,"priceImpact",void 0);Gt([E()],Pt.prototype,"maxSlippage",void 0);Gt([E()],Pt.prototype,"providerFee",void 0);Pt=Gt([I("w3m-swap-preview-view")],Pt);const $m=se`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var qr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let er=class extends z{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=N.state.data)==null?void 0:e.target,this.sourceToken=J.state.sourceToken,this.sourceTokenAmount=J.state.sourceTokenAmount,this.toToken=J.state.toToken,this.myTokensWithBalance=J.state.myTokensWithBalance,this.popularTokens=J.state.popularTokens,this.searchValue="",this.unsubscribe.push(J.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance}))}updated(){var r,o;const e=(r=this.renderRoot)==null?void 0:r.querySelector(".suggested-tokens-container");e==null||e.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");t==null||t.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var r,o;super.disconnectedCallback();const e=(r=this.renderRoot)==null?void 0:r.querySelector(".suggested-tokens-container"),t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");e==null||e.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t==null||t.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return g`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){this.targetToken==="sourceToken"?J.setSourceToken(e):(J.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&J.swapTokens()),N.goBack()}templateSearchInput(){return g`
      <wui-flex .padding=${["0","s","0","s"]} gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],r=this.filterTokensWithText(e,this.searchValue),o=this.filterTokensWithText(t,this.searchValue);return g`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(r==null?void 0:r.length)>0?g`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${r.map(n=>{var a,u,p;const s=n.symbol===((a=this.sourceToken)==null?void 0:a.symbol)||n.symbol===((u=this.toToken)==null?void 0:u.symbol);return g`
                    <wui-token-list-item
                      name=${n.name}
                      ?disabled=${s}
                      symbol=${n.symbol}
                      price=${n==null?void 0:n.price}
                      amount=${(p=n==null?void 0:n.quantity)==null?void 0:p.numeric}
                      imageSrc=${n.logoUri}
                      @click=${()=>{s||this.onSelectToken(n)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Popular tokens</wui-text>
          </wui-flex>
          ${(o==null?void 0:o.length)>0?o.map(n=>g`
                  <wui-token-list-item
                    name=${n.name}
                    symbol=${n.symbol}
                    imageSrc=${n.logoUri}
                    @click=${()=>this.onSelectToken(n)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=J.state.suggestedTokens?J.state.suggestedTokens.slice(0,8):null;return e?g`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(t=>g`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",Gs.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",Gs.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",Gs.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",Gs.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(r=>`${r.symbol} ${r.name} ${r.address}`.toLowerCase().includes(t.toLowerCase()))}};er.styles=$m;qr([E()],er.prototype,"interval",void 0);qr([E()],er.prototype,"targetToken",void 0);qr([E()],er.prototype,"sourceToken",void 0);qr([E()],er.prototype,"sourceTokenAmount",void 0);qr([E()],er.prototype,"toToken",void 0);qr([E()],er.prototype,"myTokensWithBalance",void 0);qr([E()],er.prototype,"popularTokens",void 0);qr([E()],er.prototype,"searchValue",void 0);er=qr([I("w3m-swap-select-token-view")],er);const Pm=se`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Nm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mu=class extends z{render(){return g`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};mu.styles=Pm;mu=Nm([I("w3m-transactions-view")],mu);var Om=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Mm=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let hd=class extends z{render(){return g`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Mm}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{H.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};hd=Om([I("w3m-what-is-a-network-view")],hd);var Dm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Lm=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let pd=class extends z{render(){return g`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Lm}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){ce.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),N.push("GetWallet")}};pd=Dm([I("w3m-what-is-a-wallet-view")],pd);var Um=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fd=class extends z{render(){return g`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${N.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};fd=Um([I("w3m-what-is-a-buy-view")],fd);const Bm=se`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var oc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Wm=6;let Hr=class extends z{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=Bt.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=N.state.data)==null?void 0:e.email,this.authConnector=ge.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return g`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?g`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:g` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?g`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Bt.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Bt.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.authConnector&&this.otp.length===Wm&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(r){this.error=H.parseError(r),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!ge.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),ye.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){ye.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};Hr.styles=Bm;oc([E()],Hr.prototype,"loading",void 0);oc([E()],Hr.prototype,"timeoutTimeLeft",void 0);oc([E()],Hr.prototype,"error",void 0);Hr=oc([I("w3m-email-otp-widget")],Hr);var J1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vu=class extends Hr{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=j.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){const t=K.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await we.connectExternal(this.authConnector),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?N.push("UpgradeToSmartAccount"):pe.close()}}catch(t){throw ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(j.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};J1([E()],vu.prototype,"smartAccountDeployed",void 0);vu=J1([I("w3m-email-verify-otp-view")],vu);const jm=se`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var X1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bl=class extends z{constructor(){var e;super(),this.email=(e=N.state.data)==null?void 0:e.email,this.authConnector=ge.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return g`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),ce.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),N.replace("EmailVerifyOtp",{email:this.email})}catch{N.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),ye.showSuccess("Code email resent")}}catch(e){ye.showError(e)}finally{this.loading=!1}}};bl.styles=jm;X1([E()],bl.prototype,"loading",void 0);bl=X1([I("w3m-email-verify-device-view")],bl);const Fm=se`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var eh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const wd=400,gd=360,zm=64;let yl=class extends z{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(pe.subscribeKey("open",e=>{e||(this.onHideIframe(),N.popTransactionStack())}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(e=>{var o,n;const t=(o=e==null?void 0:e[0])==null?void 0:o.contentBoxSize,r=(n=t==null?void 0:t[0])==null?void 0:n.inlineSize;this.iframe.style.height=`${wd}px`,r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width=`${gd}px`,this.iframe.style.left=`calc(50% - ${gd/2}px)`,this.iframe.style.top=`calc(50% - ${wd/2}px + ${zm/2}px)`,this.iframe.style.bottom="unset"),this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),g`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){const e=ge.getAuthConnector();if(e){const t=Et.getSnapshot().themeMode,r=Et.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:un(r,t)})}}};yl.styles=Fm;eh([E()],yl.prototype,"ready",void 0);yl=eh([I("w3m-approve-transaction-view")],yl);var Hm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let md=class extends z{render(){return g`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Ct.SECURE_SITE_DASHBOARD}
          imageSrc=${Ct.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};md=Hm([I("w3m-upgrade-wallet-view")],md);var v0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xl=class extends z{constructor(){super(...arguments),this.authConnector=ge.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,pe.setLoading(!0),await this.authConnector.provider.setPreferredAccount(Vt.ACCOUNT_TYPES.SMART_ACCOUNT),await we.reconnectExternal(this.authConnector),pe.setLoading(!1),this.loading=!1,ka.navigateAfterPreferredAccountTypeSelect()}catch{ye.showError("Error upgrading to smart account")}}}render(){return g`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return g` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return g`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){N.push("Account")}};v0([E()],xl.prototype,"authConnector",void 0);v0([E()],xl.prototype,"loading",void 0);xl=v0([I("w3m-upgrade-to-smart-account-view")],xl);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vm=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zm={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gm=i=>(...e)=>({_$litDirective$:i,values:e});let qm=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ia=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(r=o._$AO)==null||r.call(o,e,!1),ia(o,e);return!0},Cl=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},th=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Qm(e)}};function Km(i){this._$AN!==void 0?(Cl(this),this._$AM=i,th(this)):this._$AM=i}function Ym(i,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)ia(r[n],!1),Cl(r[n]);else r!=null&&(ia(r,!1),Cl(r));else ia(this,i)}const Qm=i=>{i.type==Zm.CHILD&&(i._$AP??(i._$AP=Ym),i._$AQ??(i._$AQ=Km))};let Jm=class extends qm{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),th(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),t&&(ia(this,e),Cl(this))}setValue(e){if(Vm(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Al=()=>new Xm;let Xm=class{};const Vc=new WeakMap,_l=Gm(class extends Jm{render(i){return Tt}update(i,[e]){var r;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),Tt}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=Vc.get(e);t===void 0&&(t=new WeakMap,Vc.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=Vc.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),e5=se`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var b0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ya=class extends z{constructor(){var e;super(...arguments),this.formRef=Al(),this.initialEmail=((e=N.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return g`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${_l(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${N.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=ge.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");const r=await t.provider.updateEmail({email:this.email});ce.sendEvent({type:"track",event:"EMAIL_EDIT"}),r.action==="VERIFY_SECONDARY_OTP"?N.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):N.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){ye.showError(t),this.loading=!1}}};ya.styles=e5;b0([E()],ya.prototype,"email",void 0);b0([E()],ya.prototype,"loading",void 0);ya=b0([I("w3m-update-email-wallet-view")],ya);var t5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vd=class extends Hr{constructor(){var e;super(),this.email=(e=N.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),N.replace("UpdateEmailSecondaryOtp",N.state.data))}catch(r){throw ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{N.replace("UpdateEmailWallet",N.state.data)}}};vd=t5([I("w3m-update-email-primary-otp-view")],vd);var i5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bd=class extends Hr{constructor(){var e;super(),this.email=(e=N.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),N.reset("Account"))}catch(r){throw ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{N.replace("UpdateEmailWallet",N.state.data)}}};bd=i5([I("w3m-update-email-secondary-otp-view")],bd);const r5=se`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var ih=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let El=class extends z{constructor(){var e;super(...arguments),this.swapUnsupportedChain=(e=N.state.data)==null?void 0:e.swapUnsupportedChain,this.disconecting=!1}render(){return g`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?g`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:g`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=K.state,r=H.sortRequestedNetworks(e,t);return(this.swapUnsupportedChain?r.filter(n=>Ct.SWAP_SUPPORTED_NETWORKS.includes(n.id)):r).map(n=>g`
        <wui-list-network
          imageSrc=${de(Pe.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await we.disconnect(),ce.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),pe.close()}catch{ce.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),ye.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=j.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:n}=K.state,{data:s}=N.state;t&&(n==null?void 0:n.id)!==e.id?r!=null&&r.includes(e.id)?(await K.switchActiveNetwork(e),ka.navigateAfterNetworkSwitch()):o&&N.push("SwitchNetwork",{...s,network:e}):t||(K.setCaipNetwork(e),N.push("Connect"))}};El.styles=r5;ih([E()],El.prototype,"disconecting",void 0);El=ih([I("w3m-unsupported-chain-view")],El);const n5=se`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var La=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _o=class extends z{constructor(){super(),this.unsubscribe=[],this.address=j.state.address,this.profileName=j.state.profileName,this.network=K.state.caipNetwork,this.preferredAccountType=j.state.preferredAccountType,this.unsubscribe.push(j.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):ye.showError("Account not found")}),K.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=Pe.getNetworkImage(this.network);return g` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${le.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${Et.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var s;const e=K.getRequestedCaipNetworks(),t=K.checkIfSmartAccountEnabled(),r=K.state.caipNetwork;if(this.preferredAccountType===Vt.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?g`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[Pe.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const n=((s=e==null?void 0:e.filter(a=>a==null?void 0:a.imageId))==null?void 0:s.slice(0,5)).map(Pe.getNetworkImage).filter(Boolean);return g`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){N.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(H.copyToClopboard(this.address),ye.showSuccess("Address copied"))}catch{ye.showError("Failed to copy")}}};_o.styles=n5;La([E()],_o.prototype,"address",void 0);La([E()],_o.prototype,"profileName",void 0);La([E()],_o.prototype,"network",void 0);La([E()],_o.prototype,"preferredAccountType",void 0);_o=La([I("w3m-wallet-receive-view")],_o);const o5=se`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var rh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sl=class extends z{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=j.state.preferredAccountType,this.unsubscribe.push(j.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:r}=K.state,o=K.checkIfSmartAccountEnabled();let n=H.sortRequestedNetworks(e,t);if(o&&this.preferredAccountType===Vt.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;n=[r]}return n.map(s=>g`
        <wui-list-network
          imageSrc=${de(Pe.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Sl.styles=o5;rh([E()],Sl.prototype,"preferredAccountType",void 0);Sl=rh([I("w3m-wallet-compatible-networks-view")],Sl);const s5=se`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var $n=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cr=class extends z{constructor(){super(),this.unsubscribe=[],this.token=$e.state.token,this.sendTokenAmount=$e.state.sendTokenAmount,this.receiverAddress=$e.state.receiverAddress,this.receiverProfileName=$e.state.receiverProfileName,this.loading=$e.state.loading,this.gasPriceInUSD=$e.state.gasPriceInUSD,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push($e.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),g` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await J.getNetworkTokenPrice();const e=await J.getInitialGasPrice();e!=null&&e.gasPrice&&(e!=null&&e.gasPriceInUSD)&&($e.setGasPrice(e.gasPrice),$e.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){N.push("WalletSendPreview")}getMessage(){var e;this.message="Preview Send",this.receiverAddress&&!H.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&((e=this.token)!=null&&e.price)&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};Cr.styles=s5;$n([E()],Cr.prototype,"token",void 0);$n([E()],Cr.prototype,"sendTokenAmount",void 0);$n([E()],Cr.prototype,"receiverAddress",void 0);$n([E()],Cr.prototype,"receiverProfileName",void 0);$n([E()],Cr.prototype,"loading",void 0);$n([E()],Cr.prototype,"gasPriceInUSD",void 0);$n([E()],Cr.prototype,"message",void 0);Cr=$n([I("w3m-wallet-send-view")],Cr);const a5=se`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Ua=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Eo=class extends z{constructor(){super(),this.unsubscribe=[],this.tokenBalance=j.state.tokenBalance,this.search="",this.onDebouncedSearch=H.debounce(e=>{this.search=e}),this.unsubscribe.push(j.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return g`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e,t;return this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(r=>{var o;return r.chainId===((o=K.state.caipNetwork)==null?void 0:o.id)}),this.search?this.filteredTokens=(t=this.tokenBalance)==null?void 0:t.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,g`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(r=>g`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,r)}
                    ?clickable=${!0}
                    tokenName=${r.name}
                    tokenImageUrl=${r.iconUrl}
                    tokenAmount=${r.quantity.numeric}
                    tokenValue=${r.value}
                    tokenCurrency=${r.symbol}
                  ></wui-list-token>`):g`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){N.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){$e.setToken(e),$e.setTokenAmount(void 0),N.goBack()}};Eo.styles=a5;Ua([E()],Eo.prototype,"tokenBalance",void 0);Ua([E()],Eo.prototype,"tokens",void 0);Ua([E()],Eo.prototype,"filteredTokens",void 0);Ua([E()],Eo.prototype,"search",void 0);Eo=Ua([I("w3m-wallet-send-select-token-view")],Eo);const l5=se`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Pn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ar=class extends z{constructor(){super(),this.unsubscribe=[],this.token=$e.state.token,this.sendTokenAmount=$e.state.sendTokenAmount,this.receiverAddress=$e.state.receiverAddress,this.receiverProfileName=$e.state.receiverProfileName,this.receiverProfileImageUrl=$e.state.receiverProfileImageUrl,this.gasPriceInUSD=$e.state.gasPriceInUSD,this.caipNetwork=K.state.caipNetwork,this.unsubscribe.push($e.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),K.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t;return g` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?le.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${(e=this.token)==null?void 0:e.symbol}"
            .imageSrc=${(t=this.token)==null?void 0:t.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?le.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):le.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return g`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){$e.sendToken()}onCancelClick(){N.goBack()}};Ar.styles=l5;Pn([E()],Ar.prototype,"token",void 0);Pn([E()],Ar.prototype,"sendTokenAmount",void 0);Pn([E()],Ar.prototype,"receiverAddress",void 0);Pn([E()],Ar.prototype,"receiverProfileName",void 0);Pn([E()],Ar.prototype,"receiverProfileImageUrl",void 0);Pn([E()],Ar.prototype,"gasPriceInUSD",void 0);Pn([E()],Ar.prototype,"caipNetwork",void 0);Ar=Pn([I("w3m-wallet-send-preview-view")],Ar);const c5=se`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var u5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bu=class extends z{render(){return g`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};bu.styles=c5;bu=u5([I("w3m-connect-wallets-view")],bu);const d5=se`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var h5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yu=class extends z{render(){return g`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};yu.styles=d5;yu=h5([I("w3m-connect-socials-view")],yu);const p5=se`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var f5={};const nh={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:f5.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.com"};var sc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bs=class extends z{constructor(){super(),this.unsubscribe=[],this.socialProvider=j.state.socialProvider,this.error=!1,this.connecting=!1,this.authConnector=ge.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if((t=e.data)!=null&&t.resultUri)if(e.origin===nh.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;const r=e.data.resultUri;await this.authConnector.provider.connectSocial(r),await we.connectExternal(this.authConnector)}}catch{this.error=!0}}else N.goBack(),ye.showError("Untrusted Origin")},this.unsubscribe.push(j.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.address&&pe.state.open&&pe.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return g`
      <wui-flex
        data-error=${de(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${de(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.error?"Something went wrong":"Connect in the provider window"}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=Et.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return g`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}connectSocial(){window.addEventListener("message",this.handleSocialConnection,!1)}};bs.styles=p5;sc([E()],bs.prototype,"socialProvider",void 0);sc([E()],bs.prototype,"error",void 0);sc([E()],bs.prototype,"connecting",void 0);bs=sc([I("w3m-connecting-social-view")],bs);const w5=se`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function oh(i){const{connectors:e}=ge.state,t=e.filter(n=>n.type==="ANNOUNCED").reduce((n,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(n[s.info.rdns]=!0),n},{});return i.map(n=>({...n,installed:!!n.rdns&&!!t[n.rdns??""]})).sort((n,s)=>Number(s.installed)-Number(n.installed))}var Ba=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const yd="local-paginator";let So=class extends z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!me.state.wallets.length,this.wallets=me.state.wallets,this.recommended=me.state.recommended,this.featured=me.state.featured,this.unsubscribe.push(me.subscribeKey("wallets",e=>this.wallets=e),me.subscribeKey("recommended",e=>this.recommended=e),me.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return g`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await me.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>g`
        <wui-card-select-loader type="wallet" id=${de(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return oh(e).map(r=>g`
        <wui-card-select
          imageSrc=${de(Pe.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:o}=me.state,n=window.innerWidth<352?3:4,s=e.length+t.length;let u=Math.ceil(s/n)*n-s+n;return u-=e.length?r.length%n:0,o===0&&r.length>0?null:o===0||[...r,...e,...t].length<o?this.shimmerTemplate(u,yd):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${yd}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:n,wallets:s}=me.state;s.length<n&&me.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=ge.getConnector(e.id,e.rdns);t?N.push("ConnectingExternal",{connector:t}):N.push("ConnectingWalletConnect",{wallet:e})}};So.styles=w5;Ba([E()],So.prototype,"initial",void 0);Ba([E()],So.prototype,"wallets",void 0);Ba([E()],So.prototype,"recommended",void 0);Ba([E()],So.prototype,"featured",void 0);So=Ba([I("w3m-all-wallets-list")],So);const g5=se`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var y0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xa=class extends z{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?g`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await me.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=me.state,t=oh(e);return e.length?g`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(r=>g`
            <wui-card-select
              imageSrc=${de(Pe.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:g`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=ge.getConnector(e.id,e.rdns);t?N.push("ConnectingExternal",{connector:t}):N.push("ConnectingWalletConnect",{wallet:e})}};xa.styles=g5;y0([E()],xa.prototype,"loading",void 0);y0([re()],xa.prototype,"query",void 0);xa=y0([I("w3m-all-wallets-search")],xa);var ac=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ca=class extends z{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(we.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return g`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var r;const t=this.platformTabs[e];t&&((r=this.onSelectPlatfrom)==null||r.call(this,t))}};ac([re({type:Array})],Ca.prototype,"platforms",void 0);ac([re()],Ca.prototype,"onSelectPlatfrom",void 0);ac([E()],Ca.prototype,"buffering",void 0);Ca=ac([I("w3m-connecting-header")],Ca);var m5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xd=class extends fi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=ge.state,r=t.find(n=>{var s,a;return n.type==="ANNOUNCED"&&((s=n.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)}),o=t.find(n=>n.type==="INJECTED");r?await we.connectExternal(r):o&&await we.connectExternal(o),pe.close(),ce.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){ce.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};xd=m5([I("w3m-connecting-wc-browser")],xd);var v5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cd=class extends fi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:r}=this.wallet,{redirect:o,href:n}=H.formatNativeUrl(t,this.uri);we.setWcLinking({name:r,href:n}),we.setRecentWallet(this.wallet),H.openHref(o,"_blank")}catch{this.error=!0}}};Cd=v5([I("w3m-connecting-wc-desktop")],Cd);var b5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ad=class extends fi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:r}=this.wallet,{redirect:o,href:n}=H.formatNativeUrl(t,this.uri);we.setWcLinking({name:r,href:n}),we.setRecentWallet(this.wallet),H.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=H.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(we.setBuffering(!0),setTimeout(()=>{we.setBuffering(!1)},5e3))}};Ad=b5([I("w3m-connecting-wc-mobile")],Ad);const y5=se`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var x5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xu=class extends fi{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),g`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return we.setWcLinking(void 0),we.setRecentWallet(this.wallet),g` <wui-qr-code
      size=${e}
      theme=${Et.state.themeMode}
      uri=${this.uri}
      imageSrc=${de(Pe.getWalletImage(this.wallet))}
      alt=${de(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return g`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};xu.styles=y5;xu=x5([I("w3m-connecting-wc-qrcode")],xu);var C5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _d=class extends z{constructor(){var e;if(super(),this.wallet=(e=N.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return g`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${de(Pe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};_d=C5([I("w3m-connecting-wc-unsupported")],_d);var A5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ed=class extends fi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",ce.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:r}=this.wallet,{redirect:o,href:n}=H.formatUniversalUrl(t,this.uri);we.setWcLinking({name:r,href:n}),we.setRecentWallet(this.wallet),H.openHref(o,"_blank")}catch{this.error=!0}}};Ed=A5([I("w3m-connecting-wc-web")],Ed);const _5=se`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var wi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xt=class extends z{constructor(){var e;super(...arguments),this.networkName=(e=K.state.caipNetwork)==null?void 0:e.name,this.detailsOpen=!1,this.slippageRate=1}render(){const e=this.toTokenAmount&&this.maxSlippage?Ne.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;return g`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${le.formatNumberToLocalString(this.toTokenSwappedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${le.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?g`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${le.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?g` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${le.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?g`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${le.formatNumberToLocalString(e,6)} ${this.toTokenSymbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${le.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee (0.85%)
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        ${this.providerFee?g`
                              <wui-text variant="small-400" color="fg-200">
                                ${le.formatNumberToLocalString(this.providerFee,6)}
                                ${this.sourceTokenSymbol}
                              </wui-text>
                            `:null}
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Xt.styles=[_5];wi([re()],Xt.prototype,"networkName",void 0);wi([re()],Xt.prototype,"detailsOpen",void 0);wi([re()],Xt.prototype,"sourceTokenSymbol",void 0);wi([re()],Xt.prototype,"sourceTokenPrice",void 0);wi([re()],Xt.prototype,"toTokenSymbol",void 0);wi([re()],Xt.prototype,"toTokenAmount",void 0);wi([re()],Xt.prototype,"toTokenSwappedAmount",void 0);wi([re()],Xt.prototype,"gasPriceInUSD",void 0);wi([re()],Xt.prototype,"priceImpact",void 0);wi([re()],Xt.prototype,"slippageRate",void 0);wi([re()],Xt.prototype,"maxSlippage",void 0);wi([re()],Xt.prototype,"providerFee",void 0);wi([re()],Xt.prototype,"networkTokenSymbol",void 0);Xt=wi([I("w3m-swap-details")],Xt);const E5=se`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var nr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const S5=5e-5;let _i=class extends z{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=Ne.bigNumber(e).isGreaterThan("0");return g`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${le.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){const t=["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"],r=e.key===",",o=e.key===".",n=e.key>="0"&&e.key<="9",s=this.value;!n&&!t.includes(e.key)&&!o&&!r&&e.preventDefault(),(r||o)&&(s!=null&&s.includes(".")||s!=null&&s.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value;t===","||t==="."?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?g`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:g` <wui-button
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=Ne.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(S5):!1;return g`
      ${t?g`<wui-text variant="small-400" color="fg-200">
            ${le.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?g` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:g` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){ce.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),N.push("SwapSelectToken",{target:this.target})}onBuyToken(){N.push("OnRampProviders")}};_i.styles=[E5];nr([re()],_i.prototype,"focused",void 0);nr([re()],_i.prototype,"balance",void 0);nr([re()],_i.prototype,"value",void 0);nr([re()],_i.prototype,"price",void 0);nr([re()],_i.prototype,"marketValue",void 0);nr([re()],_i.prototype,"disabled",void 0);nr([re()],_i.prototype,"target",void 0);nr([re()],_i.prototype,"token",void 0);nr([re()],_i.prototype,"onSetAmount",void 0);nr([re()],_i.prototype,"onSetMaxValue",void 0);_i=nr([I("w3m-swap-input")],_i);const T5=se`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var sh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Tl=class extends z{constructor(){super(...arguments),this.target="sourceToken"}render(){return g`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return g`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};Tl.styles=[T5];sh([re()],Tl.prototype,"target",void 0);Tl=sh([I("w3m-swap-input-skeleton")],Tl);const k5=se`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var lc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};function Sd(){var s,a,u,p,b,C,x;const i=(a=(s=N.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(p=(u=N.state.data)==null?void 0:u.wallet)==null?void 0:p.name,t=(C=(b=N.state.data)==null?void 0:b.network)==null?void 0:C.name,r=e??i,o=ge.getConnectors();return{Connect:`Connect ${o.length===1&&((x=o[0])==null?void 0:x.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:j.state.socialProvider?j.state.socialProvider:"Connect Social"}}let ys=class extends z{constructor(){super(),this.unsubscribe=[],this.heading=Sd()[N.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(N.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),we.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
    `}onWalletHelp(){ce.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),N.push("WhatIsAWallet")}async onClose(){if(ee.state.isSiweEnabled){const{SIWEController:e}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url);e.state.status!=="success"&&await we.disconnect()}pe.close()}titleTemplate(){return g`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=N.state,t=e==="Connect",s=e==="ApproveTransaction"||e==="UpgradeToSmartAccount"||e==="ConnectingSiwe";return this.showBack&&!s?g`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:g`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(t){const o=Sd()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=N.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){N.goBack()}};ys.styles=[k5];lc([E()],ys.prototype,"heading",void 0);lc([E()],ys.prototype,"buffering",void 0);lc([E()],ys.prototype,"showBack",void 0);ys=lc([I("w3m-header")],ys);var ah=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cu=class extends z{constructor(){super(...arguments),this.data=[]}render(){return g`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>g`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>g`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ah([re({type:Array})],Cu.prototype,"data",void 0);Cu=ah([I("w3m-help-widget")],Cu);const R5=se`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Bo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vr=class extends z{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=jt.state.currencyImages,this.tokenImages=jt.state.tokenImages,this.unsubscribe.push(Ie.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),Ie.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),Ie.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),jt.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){Ie.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=((r=this.selectedCurrency)==null?void 0:r.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return g`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?g` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>pe.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${de(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:g`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Vr.styles=R5;Bo([re({type:String})],Vr.prototype,"type",void 0);Bo([re({type:Number})],Vr.prototype,"value",void 0);Bo([E()],Vr.prototype,"currencies",void 0);Bo([E()],Vr.prototype,"selectedCurrency",void 0);Bo([E()],Vr.prototype,"currencyImages",void 0);Bo([E()],Vr.prototype,"tokenImages",void 0);Vr=Bo([I("w3m-onramp-input")],Vr);const I5=se`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var $5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Au=class extends z{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=ee.state;return!e&&!t?null:g`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=ee.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=ee.state;return e?g`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=ee.state;return e?g`<a href=${e}>Privacy Policy</a>`:null}};Au.styles=[I5];Au=$5([I("w3m-legal-footer")],Au);const P5=se`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var lh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let kl=class extends z{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:o,homepage:n}=this.wallet,s=H.isMobile(),a=H.isIos(),u=H.isAndroid(),p=[t,r,n,o].filter(Boolean).length>1,b=le.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return p&&!s?g`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${()=>N.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!p&&n?g`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?g`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?g`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&H.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&H.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&H.openHref(this.wallet.homepage,"_blank")}};kl.styles=[P5];lh([re({type:Object})],kl.prototype,"wallet",void 0);kl=lh([I("w3m-mobile-download-links")],kl);const N5=se`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var O5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _u=class extends z{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=ee.state;return!e&&!t?null:g`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return g` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){N.push("WhatIsABuy")}};_u.styles=[N5];_u=O5([I("w3m-onramp-providers-footer")],_u);const M5=se`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ch=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const D5={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Rl=class extends z{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=ye.state.open,this.unsubscribe.push(ye.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=ye.state,r=D5[t];return g`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>ye.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Rl.styles=M5;ch([E()],Rl.prototype,"open",void 0);Rl=ch([I("w3m-snackbar")],Rl);const L5=se`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Wa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let To=class extends z{constructor(){super(),this.unsubscribe=[],this.formRef=Al(),this.connectors=ge.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.find(r=>r.type==="AUTH"),t=this.connectors.length>1;return e!=null&&e.email?g`
      <form ${_l(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:g`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?g`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?g`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=ge.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});ce.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(ce.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),N.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&N.push("EmailVerifyDevice",{email:this.email})}catch(t){const r=H.parseError(t);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":ye.showError(t)}finally{this.loading=!1}}onFocusEvent(){ce.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};To.styles=L5;Wa([E()],To.prototype,"connectors",void 0);Wa([E()],To.prototype,"email",void 0);Wa([E()],To.prototype,"loading",void 0);Wa([E()],To.prototype,"error",void 0);To=Wa([I("w3m-email-login-widget")],To);const U5=se`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Nn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _r=class extends z{constructor(){super(),this.unsubscribe=[],this.address=j.state.address,this.profileImage=j.state.profileImage,this.profileName=j.state.profileName,this.network=K.state.caipNetwork,this.disconnecting=!1,this.balance=j.state.balance,this.balanceSymbol=j.state.balanceSymbol,this.unsubscribe.push(j.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||ye.showError("Account not found")}),K.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Pe.getNetworkImage(this.network);return g`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${de(this.address)}
          address=${de(this.address)}
          imageSrc=${de(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?le.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):le.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${H.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${de(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=ee.state;return e?g`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=Le.getConnectedConnector(),t=ge.getAuthConnector(),{origin:r}=location;return!t||e!=="AUTH"||r.includes(Ct.SECURE_SITE)?null:g`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){N.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=j.state;return e?g`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=Le.getConnectedConnector(),t=ge.getAuthConnector();if(!t||e!=="AUTH")return null;const r=t.provider.getEmail()??"";return g`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        data-testid="w3m-account-email-update"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=K.state,t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}onCopyAddress(){try{this.address&&(H.copyToClopboard(this.address),ye.showSuccess("Address copied"))}catch{ye.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(ce.sendEvent({type:"track",event:"CLICK_NETWORKS"}),N.push("Networks"))}onTransactions(){ce.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),N.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await we.disconnect(),ce.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),pe.close()}catch{ce.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),ye.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=j.state;e&&H.openHref(e,"_blank")}onGoToUpgradeView(){ce.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),N.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){N.push("UpdateEmailWallet",{email:e})}};_r.styles=U5;Nn([E()],_r.prototype,"address",void 0);Nn([E()],_r.prototype,"profileImage",void 0);Nn([E()],_r.prototype,"profileName",void 0);Nn([E()],_r.prototype,"network",void 0);Nn([E()],_r.prototype,"disconnecting",void 0);Nn([E()],_r.prototype,"balance",void 0);Nn([E()],_r.prototype,"balanceSymbol",void 0);_r=Nn([I("w3m-account-default-widget")],_r);const B5=se`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Ir=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const W5=3,j5=48,F5=430;let Bi=class extends z{constructor(){super(),this.unsubscribe=[],this.address=j.state.address,this.profileImage=j.state.profileImage,this.profileName=j.state.profileName,this.smartAccountDeployed=j.state.smartAccountDeployed,this.network=K.state.caipNetwork,this.currentTab=j.state.currentTab,this.tokenBalance=j.state.tokenBalance,this.preferredAccountType=j.state.preferredAccountType,this.unsubscribe.push(j.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):pe.close()}),K.subscribe(e=>{this.network=e.caipNetwork})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){j.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Pe.getNetworkImage(this.network);return g`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${de(this.address)}
        networkSrc=${de(e)}
        icon="chevronBottom"
        avatarSrc=${de(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button @click=${this.onBuyClick.bind(this)} icon="card"></wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Swap">
          <wui-icon-button @click=${this.onSwapClick.bind(this)} icon="recycleHorizontal">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button @click=${this.onReceiveClick.bind(this)} icon="arrowBottomCircle">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button @click=${this.onSendClick.bind(this)} icon="send"></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${H.isMobile()&&window.innerWidth<F5?`${(window.innerWidth-j5)/W5}px`:"104px"}
        .tabs=${nh.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}watchSwapValues(){this.watchTokenBalance=setInterval(()=>j.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?g`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?g`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?g`<w3m-account-activity-widget></w3m-account-activity-widget>`:g`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=H.calculateBalance(this.tokenBalance),{dollars:r="0",pennies:o="00"}=H.formatTokenBalance(t);return g`<wui-balance dollars=${r} pennies=${o}></wui-balance>`}return g`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!K.checkIfSmartAccountEnabled()||this.preferredAccountType!==Vt.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:g` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){j.setCurrentTab(e)}onProfileButtonClick(){N.push("AccountSettings")}onBuyClick(){N.push("OnRampProviders")}onSwapClick(){var e,t;(e=this.network)!=null&&e.id&&!Ct.SWAP_SUPPORTED_NETWORKS.includes((t=this.network)==null?void 0:t.id)?N.push("UnsupportedChain",{swapUnsupportedChain:!0}):N.push("Swap")}onReceiveClick(){N.push("WalletReceive")}onSendClick(){N.push("WalletSend")}onUpdateToSmartAccount(){N.push("UpgradeToSmartAccount")}};Bi.styles=B5;Ir([E()],Bi.prototype,"watchTokenBalance",void 0);Ir([E()],Bi.prototype,"address",void 0);Ir([E()],Bi.prototype,"profileImage",void 0);Ir([E()],Bi.prototype,"profileName",void 0);Ir([E()],Bi.prototype,"smartAccountDeployed",void 0);Ir([E()],Bi.prototype,"network",void 0);Ir([E()],Bi.prototype,"currentTab",void 0);Ir([E()],Bi.prototype,"tokenBalance",void 0);Ir([E()],Bi.prototype,"preferredAccountType",void 0);Bi=Ir([I("w3m-account-wallet-features-widget")],Bi);const z5=se`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var H5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Eu=class extends z{render(){return g`<w3m-activity-list page="account"></w3m-activity-list>`}};Eu.styles=z5;Eu=H5([I("w3m-account-activity-widget")],Eu);const V5=se`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Z5=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Su=class extends z{render(){return g`${this.nftTemplate()}`}nftTemplate(){return g` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){N.push("WalletReceive")}};Su.styles=V5;Su=Z5([I("w3m-account-nfts-widget")],Su);const G5=se`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var uh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Il=class extends z{constructor(){super(),this.unsubscribe=[],this.tokenBalance=j.state.tokenBalance,this.unsubscribe.push(j.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?g`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:g` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>g`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){N.push("WalletReceive")}onBuyClick(){N.push("OnRampProviders")}};Il.styles=G5;uh([E()],Il.prototype,"tokenBalance",void 0);Il=uh([I("w3m-account-tokens-widget")],Il);const q5=se`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var Wo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Ga="last-transaction",K5=7;let Zr=class extends z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=j.state.address,this.transactionsByYear=Yt.state.transactionsByYear,this.loading=Yt.state.loading,this.empty=Yt.state.empty,this.next=Yt.state.next,Yt.clearCursor(),this.unsubscribe.push(j.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Yt.resetTransactions(),Yt.fetchTransactions(e.address))}),Yt.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){Yt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return g` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{const o=r===e.length-1,n=parseInt(t,10);return new Array(12).fill(null).map((a,u)=>u).reverse().map(a=>{var b;const u=dn.getTransactionGroupTitle(n,a),p=(b=this.transactionsByYear[n])==null?void 0:b[a];return p?g`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${u}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(p,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:r,descriptions:o,direction:n,isAllNFT:s,images:a,status:u,transfers:p,type:b}=this.getTransactionListItemProps(e),C=(p==null?void 0:p.length)>1;return(p==null?void 0:p.length)===2&&!s?g`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?Ga:""}
          status=${u}
          type=${b}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:C?p.map((S,k)=>{const U=dn.getTransferDescription(S),D=t&&k===p.length-1;return g` <wui-transaction-list-item
          date=${r}
          direction=${S.direction}
          id=${D&&this.next?Ga:""}
          status=${u}
          type=${b}
          .onlyDirectionIcon=${!0}
          .images=${[a[k]]}
          .descriptions=${[U]}
        ></wui-transaction-list-item>`}):g`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?Ga:""}
        status=${u}
        type=${b}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,o)=>{const n=t&&o===e.length-1;return g`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return g`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return g`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?g`${this.emptyStateAccount()}`:g`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(K5).fill(g` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){N.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=ee.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(Yt.fetchTransactions(this.address),ce.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,r,o;(t=this.paginationObserver)==null||t.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${Ga}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var u,p,b,C,x;const t=Fu.formatDate((u=e==null?void 0:e.metadata)==null?void 0:u.minedAt),r=dn.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,n=(p=e==null?void 0:e.transfers)==null?void 0:p[0],s=!!n&&((b=e==null?void 0:e.transfers)==null?void 0:b.every(S=>!!S.nft_info)),a=dn.getTransactionImages(o);return{date:t,direction:n==null?void 0:n.direction,descriptions:r,isAllNFT:s,images:a,status:(C=e.metadata)==null?void 0:C.status,transfers:o,type:(x=e.metadata)==null?void 0:x.operationType}}};Zr.styles=q5;Wo([re()],Zr.prototype,"page",void 0);Wo([E()],Zr.prototype,"address",void 0);Wo([E()],Zr.prototype,"transactionsByYear",void 0);Wo([E()],Zr.prototype,"loading",void 0);Wo([E()],Zr.prototype,"empty",void 0);Wo([E()],Zr.prototype,"next",void 0);Zr=Wo([I("w3m-activity-list")],Zr);const Y5=se`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var cc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xs=class extends z{render(){return g` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?g`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:g`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){N.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return g`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${t?`$${le.formatNumberToLocalString(t,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?g` <wui-text variant="small-400" color="error-100">
          ${le.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:g` <wui-text variant="small-400" color="fg-200">
        ${le.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?g`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:g`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){$e.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&this.gasPriceInUSD){const e=Ne.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price),r=this.token.address===void 0?Ne.bigNumber(this.token.quantity.numeric).minus(e):Ne.bigNumber(this.token.quantity.numeric);$e.setTokenAmount(Number(r.toFixed(20)))}}onBuyClick(){N.push("OnRampProviders")}};xs.styles=Y5;cc([re({type:Object})],xs.prototype,"token",void 0);cc([re({type:Number})],xs.prototype,"sendTokenAmount",void 0);cc([re({type:Number})],xs.prototype,"gasPriceInUSD",void 0);xs=cc([I("w3m-input-token")],xs);const Q5=se`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var uc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cs=class extends z{constructor(){super(...arguments),this.inputElementRef=Al(),this.instructionElementRef=Al(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=H.debounce(async e=>{const t=await we.getEnsAddress(e);if($e.setLoading(!1),t){$e.setReceiverProfileName(e),$e.setReceiverAddress(t);const r=await we.getEnsAvatar(e);r&&$e.setReceiverProfileImageUrl(r)}else $e.setReceiverAddress(e),$e.setReceiverProfileName(void 0),$e.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return g` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${_l(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${_l(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();$e.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),$e.setLoading(!0),this.onDebouncedSearch(t.value)}};Cs.styles=Q5;uc([re()],Cs.prototype,"value",void 0);uc([E()],Cs.prototype,"instructionHidden",void 0);uc([E()],Cs.prototype,"pasting",void 0);Cs=uc([I("w3m-input-address")],Cs);const J5=se`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var dc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let As=class extends z{render(){return g` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${de(le.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${le.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?g` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${de(Pe.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&N.push("Networks",{network:e})}};As.styles=J5;dc([re()],As.prototype,"receiverAddress",void 0);dc([re({type:Object})],As.prototype,"caipNetwork",void 0);dc([re({type:Number})],As.prototype,"networkFee",void 0);As=dc([I("w3m-wallet-send-details")],As);const X5=se`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ja=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ko=class extends z{constructor(){super(),this.unsubscribe=[],this.open=mi.state.open,this.message=mi.state.message,this.triggerRect=mi.state.triggerRect,this.variant=mi.state.variant,this.unsubscribe.push(mi.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,g`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};ko.styles=[X5];ja([E()],ko.prototype,"open",void 0);ja([E()],ko.prototype,"message",void 0);ja([E()],ko.prototype,"triggerRect",void 0);ja([E()],ko.prototype,"variant",void 0);ko=ja([I("w3m-tooltip")],ko);const e4=se`
  :host {
    width: 100%;
    display: block;
  }
`;var x0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Aa=class extends z{constructor(){super(),this.unsubscribe=[],this.text="",this.open=mi.state.open,this.unsubscribe.push(N.subscribeKey("view",()=>{mi.hide()}),pe.subscribeKey("open",e=>{e||mi.hide()}),mi.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),mi.hide()}render(){return g`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return g`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||mi.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||mi.hide()}};Aa.styles=[e4];x0([re()],Aa.prototype,"text",void 0);x0([E()],Aa.prototype,"open",void 0);Aa=x0([I("w3m-tooltip-trigger")],Aa);const t4=se`
  wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var dh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Td=2,kd=6;let $l=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.connector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(ge.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(t=>t.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return(e=this.connector)!=null&&e.socials?g`
      <wui-flex flexDirection="column" gap="xs" .padding=${["0","0","xs","0"]}>
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>
    `:null}topViewTemplate(){var e,t,r;return(e=this.connector)!=null&&e.socials?this.connector.socials.length===2?g` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,Td).map(o=>g`<wui-logo-select
              data-testid=${`social-selector-${o}`}
              @click=${()=>{this.onSocialClick(o)}}
              logo=${o}
            ></wui-logo-select>`)}
      </wui-flex>`:g` <wui-list-social
      data-testid=${`social-selector-${(r=(t=this.connector)==null?void 0:t.socials)==null?void 0:r[0]}`}
      @click=${()=>{var o,n;this.onSocialClick((n=(o=this.connector)==null?void 0:o.socials)==null?void 0:n[0])}}
      logo=${de(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){var e,t,r;return!((e=this.connector)!=null&&e.socials)||((t=this.connector)==null?void 0:t.socials.length)<=Td?null:((r=this.connector)==null?void 0:r.socials.length)>kd?g`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,kd-1).map(o=>g`<wui-logo-select
              data-testid=${`social-selector-${o}`}
              @click=${()=>{this.onSocialClick(o)}}
              logo=${o}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:g`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(o=>g`<wui-logo-select
            data-testid=${`social-selector-${o}`}
            @click=${()=>{this.onSocialClick(o)}}
            logo=${o}
          ></wui-logo-select>`)}
    </wui-flex>`}onMoreSocialsClick(){N.push("ConnectSocials")}async onSocialClick(e){const t=ge.getAuthConnector();try{if(t&&e){const{uri:r}=await t.provider.getSocialRedirectUri({provider:e});j.setSocialProvider(e),setTimeout(()=>{H.openHref(r,"popupWindow","width=600,height=800,scrollbars=yes")}),N.push("ConnectingSocial")}}catch{ye.showError("Something went wrong")}}};$l.styles=t4;dh([E()],$l.prototype,"connectors",void 0);$l=dh([I("w3m-social-login-widget")],$l);const i4=se`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var r4=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Tu=class extends z{render(){return g`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        <w3m-connect-recent-widget></w3m-connect-recent-widget>
        <w3m-connect-announced-widget></w3m-connect-announced-widget>
        <w3m-connect-injected-widget></w3m-connect-injected-widget>
        <w3m-connect-custom-widget></w3m-connect-custom-widget>
        <w3m-connect-recommended-widget></w3m-connect-recommended-widget>
        <w3m-connect-external-widget></w3m-connect-external-widget>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};Tu.styles=i4;Tu=r4([I("w3m-wallet-login-list")],Tu);const n4=se`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var hh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pl=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.connector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(ge.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(t=>t.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return(e=this.connector)!=null&&e.socials?g` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(t=>g`<wui-list-social name=${t} logo=${t}></wui-list-social>`)}
    </wui-flex>`:null}};Pl.styles=n4;hh([E()],Pl.prototype,"connectors",void 0);Pl=hh([I("w3m-social-login-list")],Pl);var ph=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ku=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="ANNOUNCED");return e!=null&&e.length?g`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>g`
            <wui-list-wallet
              imageSrc=${de(Pe.getConnectorImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnector(t)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.type==="WALLET_CONNECT"?H.isMobile()?N.push("AllWallets"):N.push("ConnectingWalletConnect"):N.push("ConnectingExternal",{connector:e})}};ph([E()],ku.prototype,"connectors",void 0);ku=ph([I("w3m-connect-announced-widget")],ku);var fh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ru=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=ee.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return g`<wui-flex flexDirection="column" gap="xs">
      ${t.map(r=>g`
          <wui-list-wallet
            imageSrc=${de(Pe.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=Le.getRecentWallets(),r=this.connectors.map(a=>{var u;return(u=a.info)==null?void 0:u.rdns}).filter(Boolean),o=t.map(a=>a.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&H.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return e.filter(a=>!n.includes(String(a==null?void 0:a.rdns)))}onConnectWallet(e){N.push("ConnectingWalletConnect",{wallet:e})}};fh([E()],Ru.prototype,"connectors",void 0);Ru=fh([I("w3m-connect-custom-widget")],Ru);var wh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Iu=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>!["WALLET_CONNECT","INJECTED","ANNOUNCED","AUTH"].includes(t.type));return e!=null&&e.length?g`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>g`
            <wui-list-wallet
              imageSrc=${de(Pe.getConnectorImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnector(t)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){N.push("ConnectingExternal",{connector:e})}};wh([E()],Iu.prototype,"connectors",void 0);Iu=wh([I("w3m-connect-external-widget")],Iu);var gh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $u=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{featured:e}=me.state;if(!e.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return g`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>g`
            <wui-list-wallet
              imageSrc=${de(Pe.getWalletImage(r))}
              name=${r.name??"Unknown"}
              @click=${()=>this.onConnectWallet(r)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}filterOutDuplicateWallets(e){const t=Le.getRecentWallets(),r=this.connectors.map(a=>{var u;return(u=a.info)==null?void 0:u.rdns}).filter(Boolean),o=t.map(a=>a.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&H.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return e.filter(a=>!n.includes(String(a==null?void 0:a.rdns)))}onConnectWallet(e){N.push("ConnectingWalletConnect",{wallet:e})}};gh([E()],$u.prototype,"connectors",void 0);$u=gh([I("w3m-connect-featured-widget")],$u);var mh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pu=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const e=this.connectors.filter(r=>r.type==="INJECTED");return!(e!=null&&e.length)||e.length===1&&((t=e[0])==null?void 0:t.name)==="Browser Wallet"&&!H.isMobile()?(this.style.cssText="display: none",null):g`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(r=>!H.isMobile()&&r.name==="Browser Wallet"||!we.checkInstalled()?null:g`
            <wui-list-wallet
              imageSrc=${de(Pe.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){N.push("ConnectingExternal",{connector:e})}};mh([E()],Pu.prototype,"connectors",void 0);Pu=mh([I("w3m-connect-injected-widget")],Pu);var o4=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Rd=class extends z{render(){const e=Le.getRecentWallets();return e!=null&&e.length?g`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>g`
            <wui-list-wallet
              imageSrc=${de(Pe.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){N.push("ConnectingWalletConnect",{wallet:e})}};Rd=o4([I("w3m-connect-recent-widget")],Rd);var vh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Nu=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(x=>x.type==="WALLET_CONNECT"))return null;const{recommended:t}=me.state,{customWallets:r,featuredWalletIds:o}=ee.state,{connectors:n}=ge.state,s=Le.getRecentWallets(),u=n.filter(x=>x.type==="INJECTED"||x.type==="ANNOUNCED").filter(x=>x.name!=="Browser Wallet");if(o||r||!t.length)return this.style.cssText="display: none",null;const p=u.length+s.length,b=Math.max(0,2-p),C=this.filterOutDuplicateWallets(t).slice(0,b);return C.length?g`
      <wui-flex flexDirection="column" gap="xs">
        ${C.map(x=>g`
            <wui-list-wallet
              imageSrc=${de(Pe.getWalletImage(x))}
              name=${(x==null?void 0:x.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(x)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}filterOutDuplicateWallets(e){const t=Le.getRecentWallets(),r=this.connectors.map(a=>{var u;return(u=a.info)==null?void 0:u.rdns}).filter(Boolean),o=t.map(a=>a.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&H.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return e.filter(a=>!n.includes(String(a==null?void 0:a.rdns)))}onConnectWallet(e){N.push("ConnectingWalletConnect",{wallet:e})}};vh([E()],Nu.prototype,"connectors",void 0);Nu=vh([I("w3m-connect-recommended-widget")],Nu);var bh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ou=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(H.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?g`
      <wui-list-wallet
        imageSrc=${de(Pe.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.type==="WALLET_CONNECT"?H.isMobile()?N.push("AllWallets"):N.push("ConnectingWalletConnect"):N.push("ConnectingExternal",{connector:e})}};bh([E()],Ou.prototype,"connectors",void 0);Ou=bh([I("w3m-connect-walletconnect-widget")],Ou);var C0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Nl=class extends z{constructor(){super(),this.unsubscribe=[],this.connectors=ge.state.connectors,this.count=me.state.count,this.unsubscribe.push(ge.subscribeKey("connectors",e=>this.connectors=e),me.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(a=>a.type==="WALLET_CONNECT"),{allWallets:t}=ee.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!H.isMobile())return null;const r=me.state.featured.length,o=this.count+r,n=o<10?o:Math.floor(o/10)*10,s=n<o?`${n}+`:`${n}`;return g`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){ce.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),N.push("AllWallets")}};C0([E()],Nl.prototype,"connectors",void 0);C0([E()],Nl.prototype,"count",void 0);Nl=C0([I("w3m-all-wallets-widget")],Nl);let Id=!1;class s4{constructor(e){this.initPromise=void 0,this.setIsConnected=t=>{j.setIsConnected(t)},this.getIsConnectedState=()=>j.state.isConnected,this.setCaipAddress=t=>{j.setCaipAddress(t)},this.setBalance=(t,r)=>{j.setBalance(t,r)},this.setProfileName=t=>{j.setProfileName(t)},this.setProfileImage=t=>{j.setProfileImage(t)},this.resetAccount=()=>{j.resetAccount()},this.setCaipNetwork=t=>{K.setCaipNetwork(t)},this.getCaipNetwork=()=>K.state.caipNetwork,this.setRequestedCaipNetworks=t=>{K.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>K.getApprovedCaipNetworksData(),this.resetNetwork=()=>{K.resetNetwork()},this.setConnectors=t=>{ge.setConnectors(t)},this.addConnector=t=>{ge.addConnector(t)},this.getConnectors=()=>ge.getConnectors(),this.resetWcConnection=()=>{we.resetWcConnection()},this.fetchIdentity=t=>ri.fetchIdentity(t),this.setAddressExplorerUrl=t=>{j.setAddressExplorerUrl(t)},this.setSmartAccountDeployed=t=>{j.setSmartAccountDeployed(t)},this.setConnectedWalletInfo=t=>{j.setConnectedWalletInfo(t)},this.setSmartAccountEnabledNetworks=t=>{K.setSmartAccountEnabledNetworks(t)},this.setPreferredAccountType=t=>{j.setPreferredAccountType(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),pe.open(e)}async close(){await this.initOrContinue(),pe.close()}setLoading(e){pe.setLoading(e)}getThemeMode(){return Et.state.themeMode}getThemeVariables(){return Et.state.themeVariables}setThemeMode(e){Et.setThemeMode(e),Gu(Et.state.themeMode)}setThemeVariables(e){Et.setThemeVariables(e),E1(Et.state.themeVariables)}subscribeTheme(e){return Et.subscribe(e)}getWalletInfo(){return j.state.connectedWalletInfo}subscribeWalletInfo(e){return j.subscribeKey("connectedWalletInfo",e)}getState(){return ro.state}subscribeState(e){return ro.subscribe(e)}showErrorMessage(e){ye.showError(e)}showSuccessMessage(e){ye.showSuccess(e)}getEvent(){return{...ce.state}}subscribeEvents(e){return ce.subscribe(e)}replace(e){N.replace(e)}redirect(e){N.push(e)}popTransactionStack(e){N.popTransactionStack(e)}isOpen(){return pe.state.open}isTransactionStackEmpty(){return N.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=N.state.transactionStack[N.state.transactionStack.length-1])==null?void 0:e.replace}async initControllers(e){if(K.setClient(e.networkControllerClient),K.setDefaultCaipNetwork(e.defaultChain),ee.setProjectId(e.projectId),ee.setAllWallets(e.allWallets),ee.setIncludeWalletIds(e.includeWalletIds),ee.setExcludeWalletIds(e.excludeWalletIds),ee.setFeaturedWalletIds(e.featuredWalletIds),ee.setTokens(e.tokens),ee.setTermsConditionsUrl(e.termsConditionsUrl),ee.setPrivacyPolicyUrl(e.privacyPolicyUrl),ee.setCustomWallets(e.customWallets),ee.setEnableAnalytics(e.enableAnalytics),ee.setSdkVersion(e._sdkVersion),e.metadata&&ee.setMetadata(e.metadata),e.themeMode&&Et.setThemeMode(e.themeMode),e.themeVariables&&Et.setThemeVariables(e.themeVariables),e.enableOnramp&&ee.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&ee.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&K.setAllowUnsupportedChain(e.allowUnsupportedChain),e.siweControllerClient){const{SIWEController:t}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url);t.setSIWEClient(e.siweControllerClient)}we.setClient(e.connectionControllerClient)}async initOrContinue(){return!this.initPromise&&!Id&&H.isClient()&&(Id=!0,this.initPromise=new Promise(async e=>{await Promise.all([Br(()=>Promise.resolve().then(()=>kw),void 0,import.meta.url),Br(()=>Promise.resolve().then(()=>Jw),void 0,import.meta.url)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}const V={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"w3mAuth",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.2.2"},Kt={ConnectorExplorerIds:{[V.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[V.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[V.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[V.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[V.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[V.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[V.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[V.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[V.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[V.INJECTED_CONNECTOR_ID]:"Browser Wallet",[V.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[V.COINBASE_CONNECTOR_ID]:"Coinbase",[V.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[V.LEDGER_CONNECTOR_ID]:"Ledger",[V.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[V.INJECTED_CONNECTOR_ID]:"INJECTED",[V.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[V.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[V.AUTH_CONNECTOR_ID]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},a4={getCaipTokens(i){if(!i)return;const e={};return Object.entries(i).forEach(([t,r])=>{e[`${V.EIP155}:${t}`]=r}),e}},Te={WALLET_ID:"@w3m/wallet_id",ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3},Ut={getCaipDefaultChain(i){if(i)return{id:`${V.EIP155}:${i.chainId}`,name:i.name,imageId:Kt.EIP155NetworkImageIds[i.chainId]}},hexStringToNumber(i){const e=i.startsWith("0x")?i.slice(2):i;return parseInt(e,16)},numberToHexString(i){return`0x${i.toString(16)}`},async getUserInfo(i){const[e,t]=await Promise.all([Ut.getAddress(i),Ut.getChainId(i)]);return{chainId:t,address:e}},async getChainId(i){const e=await i.request({method:"eth_chainId"});return Number(e)},async getAddress(i){const[e]=await i.request({method:"eth_accounts"});return e},async addEthereumChain(i,e){await i.request({method:"wallet_addEthereumChain",params:[{chainId:Ut.numberToHexString(e.chainId),rpcUrls:[e.rpcUrl],chainName:e.name,nativeCurrency:{name:e.currency,decimals:18,symbol:e.currency},blockExplorerUrls:[e.explorerUrl],iconUrls:[Kt.EIP155NetworkImageIds[e.chainId]]}]})}},Dt=Rt({provider:void 0,providerType:void 0,address:void 0,chainId:void 0,isConnected:!1}),B={state:Dt,subscribeKey(i,e){return ei(Dt,i,e)},subscribe(i){return ni(Dt,()=>i(Dt))},setProvider(i){i&&(Dt.provider=mn(i))},setProviderType(i){Dt.providerType=i},setAddress(i){Dt.address=i},setPreferredAccountType(i){Dt.preferredAccountType=i},setChainId(i){Dt.chainId=i},setIsConnected(i){Dt.isConnected=i},setError(i){Dt.error=i},reset(){Dt.provider=void 0,Dt.address=void 0,Dt.chainId=void 0,Dt.providerType=void 0,Dt.isConnected=!1,Dt.error=void 0,Dt.preferredAccountType=void 0}};class l4 extends s4{constructor(e){const{ethersConfig:t,siweConfig:r,chains:o,defaultChain:n,tokens:s,chainImages:a,_sdkVersion:u,...p}=e;if(!t)throw new Error("web3modal:constructor - ethersConfig is undefined");if(!p.projectId)throw new Error("web3modal:constructor - projectId is undefined");const b={switchCaipNetwork:async x=>{const S=Xn.caipNetworkIdToNumber(x==null?void 0:x.id);if(S)try{B.setError(void 0),await this.switchNetwork(S)}catch(k){throw B.setError(k),new Error("networkControllerClient:switchCaipNetwork - unable to switch chain")}},getApprovedCaipNetworksData:async()=>new Promise(async x=>{var k,U,D,te;const S=localStorage.getItem(Te.WALLET_ID);if(S!=null&&S.includes(V.WALLET_CONNECT_CONNECTOR_ID)){const ne=await this.getWalletConnectProvider();if(!ne)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const fe=(U=(k=ne.signer)==null?void 0:k.session)==null?void 0:U.namespaces,oe=(D=fe==null?void 0:fe[V.EIP155])==null?void 0:D.methods,be=(te=fe==null?void 0:fe[V.EIP155])==null?void 0:te.chains,_e={supportsAllNetworks:(oe==null?void 0:oe.includes(V.ADD_CHAIN_METHOD))??!1,approvedCaipNetworkIds:be};x(_e)}else x({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},C={connectWalletConnect:async x=>{var k,U;const S=await this.getWalletConnectProvider();if(!S)throw new Error("connectionControllerClient:getWalletConnectUri - provider is undefined");if(S.on("display_uri",D=>{x(D)}),(k=r==null?void 0:r.options)!=null&&k.enabled){const{SIWEController:D,getDidChainId:te,getDidAddress:ne}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url),fe=await S.authenticate({nonce:await r.getNonce(),methods:pp,...await r.getMessageParams()}),oe=(U=fe==null?void 0:fe.auths)==null?void 0:U[0];if(oe){const{p:be,s:_e}=oe,bt=te(be.iss),Oe=ne(be.iss);Oe&&bt&&D.setSession({address:Oe,chainId:parseInt(bt,10)});try{const At=S.signer.client.formatAuthMessage({request:be,iss:be.iss});await D.verifyMessage({message:At,signature:_e.s,cacao:oe})}catch(At){throw console.error("Error verifying message",At),await S.disconnect().catch(console.error),await D.signOut().catch(console.error),At}}}else await S.connect();await this.setWalletConnectProvider()},connectExternal:async({id:x,info:S,provider:k})=>{if(x===V.INJECTED_CONNECTOR_ID){const U=t.injected;if(!U)throw new Error("connectionControllerClient:connectInjected - provider is undefined");try{B.setError(void 0),await U.request({method:"eth_requestAccounts"}),this.setInjectedProvider(t)}catch(D){B.setError(D)}}else if(x===V.EIP6963_CONNECTOR_ID&&S&&k)try{B.setError(void 0),await k.request({method:"eth_requestAccounts"}),this.setEIP6963Provider(k,S.name)}catch(U){B.setError(U)}else if(x===V.COINBASE_CONNECTOR_ID){const U=t.coinbase;if(!U)throw new Error("connectionControllerClient:connectCoinbase - connector is undefined");try{B.setError(void 0),await U.request({method:"eth_requestAccounts"}),this.setCoinbaseProvider(t)}catch(D){B.setError(D)}}else x===V.AUTH_CONNECTOR_ID&&this.setAuthProvider()},checkInstalled:x=>x?t.injected&&!(window!=null&&window.ethereum)?!1:x.some(S=>{var k;return!!((k=window.ethereum)!=null&&k[String(S)])}):!!window.ethereum,disconnect:async()=>{var k,U;const x=B.state.provider,S=B.state.providerType;if(localStorage.removeItem(Te.WALLET_ID),B.reset(),(k=r==null?void 0:r.options)!=null&&k.signOutOnDisconnect){const{SIWEController:D}=await Br(()=>Promise.resolve().then(()=>Io),void 0,import.meta.url);await D.signOut()}S===V.WALLET_CONNECT_CONNECTOR_ID?await x.disconnect():S===V.AUTH_CONNECTOR_ID?await((U=this.authProvider)==null?void 0:U.disconnect()):x==null||x.emit("disconnect"),localStorage.removeItem(Te.WALLET_ID),B.reset()},signMessage:async x=>{const S=B.state.provider;if(!S)throw new Error("connectionControllerClient:signMessage - provider is undefined");const k=gp(x)?x:mp(vp(x));return await S.request({method:"personal_sign",params:[k,this.getAddress()]})},parseUnits:(x,S)=>bp(x,S),formatUnits:(x,S)=>yp(x,S),async estimateGas(x){const{chainId:S,provider:k,address:U}=B.state;if(!k)throw new Error("connectionControllerClient:sendTransaction - provider is undefined");if(!U)throw new Error("connectionControllerClient:sendTransaction - address is undefined");const D={from:x.address,to:x.to,data:x.data,type:0},te=new kc(k,S);return await new Rc(te,U).estimateGas(D)},sendTransaction:async x=>{const{chainId:S,provider:k,address:U}=B.state;if(!k)throw new Error("ethersClient:sendTransaction - provider is undefined");if(!U)throw new Error("ethersClient:sendTransaction - address is undefined");const D={to:x.to,value:x.value,gasLimit:x.gas,gasPrice:x.gasPrice,data:x.data,type:0},te=new kc(k,S),oe=await(await new Rc(te,U).sendTransaction(D)).wait();return(oe==null?void 0:oe.hash)||null},writeContract:async x=>{const{chainId:S,provider:k,address:U}=B.state;if(!k)throw new Error("ethersClient:writeContract - provider is undefined");if(!U)throw new Error("ethersClient:writeContract - address is undefined");const D=new kc(k,S),te=new Rc(D,U),ne=new xp(x.tokenAddress,x.abi,te);if(!ne||!x.method)throw new Error("Contract method is undefined");const fe=ne[x.method];if(fe)return await fe(x.receiverAddress,x.tokenAmount);throw new Error("Contract method is undefined")},getEnsAddress:async x=>{const{chainId:S}=B.state;if(S&&S===1){const U=await new Tc("mainnet").resolveName(x);return U||!1}return!1},getEnsAvatar:async x=>{const{chainId:S}=B.state;if(S&&S===1){const U=await new Tc("mainnet").getAvatar(x);return U||!1}return!1}};super({networkControllerClient:b,connectionControllerClient:C,siweControllerClient:r,defaultChain:Ut.getCaipDefaultChain(n),tokens:a4.getCaipTokens(s),_sdkVersion:u??`html-ethers-${V.VERSION}`,...p}),this.hasSyncedConnectedAccount=!1,this.EIP6963Providers=[],this.options=void 0,this.options=e,this.metadata=t.metadata,this.projectId=p.projectId,this.chains=o,this.createProvider(),B.subscribeKey("address",()=>{this.syncAccount()}),B.subscribeKey("chainId",()=>{this.syncNetwork(a)}),this.syncRequestedNetworks(o,a),this.syncConnectors(t),t.EIP6963&&typeof window<"u"&&(this.listenConnectors(t.EIP6963),this.checkActive6963Provider()),t.injected&&this.checkActiveInjectedProvider(t),(t.auth||t.email)&&this.syncAuthConnector(p.projectId,t.auth,t.email),t.coinbase&&this.checkActiveCoinbaseProvider(t)}getState(){const e=super.getState();return{...e,selectedNetworkId:Xn.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:Xn.caipNetworkIdToNumber(t.selectedNetworkId)}))}setAddress(e){const t=e?Us(e):void 0;B.setAddress(t)}getAddress(){const{address:e}=B.state;return e?Us(e):void 0}getError(){return B.state.error}getChainId(){var r;const e=B.state.chainId,t=Xn.caipNetworkIdToNumber((r=this.getCaipNetwork())==null?void 0:r.id);return e??t}getIsConnected(){return B.state.isConnected}getWalletProvider(){return B.state.provider}getWalletProviderType(){return B.state.providerType}subscribeProvider(e){return B.subscribe(e)}async disconnect(){const{provider:e,providerType:t}=B.state;if(localStorage.removeItem(Te.WALLET_ID),B.reset(),t==="injected"||t==="eip6963")e==null||e.emit("disconnect");else{const r=e;if(r)try{B.setError(void 0),await r.disconnect()}catch(o){B.setError(o)}}}createProvider(){return!this.walletConnectProviderInitPromise&&typeof window<"u"&&(this.walletConnectProviderInitPromise=this.initWalletConnectProvider()),this.walletConnectProviderInitPromise}async initWalletConnectProvider(){const e={projectId:this.projectId,showQrModal:!1,rpcMap:this.chains?this.chains.reduce((t,r)=>(t[r.chainId]=r.rpcUrl,t),{}):{},optionalChains:[...this.chains.map(t=>t.chainId)],metadata:{name:this.metadata?this.metadata.name:"",description:this.metadata?this.metadata.description:"",url:this.metadata?this.metadata.url:"",icons:this.metadata?this.metadata.icons:[""]}};this.walletConnectProvider=await hp.init(e),await this.checkActiveWalletConnectProvider()}async getWalletConnectProvider(){if(!this.walletConnectProvider)try{B.setError(void 0),await this.createProvider()}catch(e){B.setError(e)}return this.walletConnectProvider}syncRequestedNetworks(e,t){const r=e==null?void 0:e.map(o=>({id:`${V.EIP155}:${o.chainId}`,name:o.name,imageId:Kt.EIP155NetworkImageIds[o.chainId],imageUrl:t==null?void 0:t[o.chainId]}));this.setRequestedCaipNetworks(r??[])}async checkActiveWalletConnectProvider(){const e=await this.getWalletConnectProvider(),t=localStorage.getItem(Te.WALLET_ID);e&&t===V.WALLET_CONNECT_CONNECTOR_ID&&await this.setWalletConnectProvider()}checkActiveInjectedProvider(e){const t=e.injected,r=localStorage.getItem(Te.WALLET_ID);t&&r===V.INJECTED_CONNECTOR_ID&&(this.setInjectedProvider(e),this.watchInjected(e))}checkActiveCoinbaseProvider(e){var o;const t=e.coinbase,r=localStorage.getItem(Te.WALLET_ID);t&&r===V.COINBASE_CONNECTOR_ID&&(t._addresses&&((o=t._addresses)==null?void 0:o.length)>0?(this.setCoinbaseProvider(e),this.watchCoinbase(e)):(localStorage.removeItem(Te.WALLET_ID),B.reset()))}checkActive6963Provider(){const e=window==null?void 0:window.localStorage.getItem(Te.WALLET_ID);if(e){const t=this.EIP6963Providers.find(r=>r.info.name===e);t&&this.setEIP6963Provider(t.provider,t.info.name)}}async setWalletConnectProvider(){var t;window==null||window.localStorage.setItem(Te.WALLET_ID,V.WALLET_CONNECT_CONNECTOR_ID);const e=await this.getWalletConnectProvider();e&&(B.setChainId(e.chainId),B.setProviderType("walletConnect"),B.setProvider(e),B.setIsConnected(!0),this.setAddress((t=e.accounts)==null?void 0:t[0]),this.watchWalletConnect())}async setInjectedProvider(e){window==null||window.localStorage.setItem(Te.WALLET_ID,V.INJECTED_CONNECTOR_ID);const t=e.injected;if(t){const{address:r,chainId:o}=await Ut.getUserInfo(t);r&&o&&(B.setChainId(o),B.setProviderType("injected"),B.setProvider(e.injected),B.setIsConnected(!0),this.setAddress(r),this.watchCoinbase(e))}}async setEIP6963Provider(e,t){if(window==null||window.localStorage.setItem(Te.WALLET_ID,t),e){const{address:r,chainId:o}=await Ut.getUserInfo(e);r&&o&&(B.setChainId(o),B.setProviderType("eip6963"),B.setProvider(e),B.setIsConnected(!0),this.setAddress(r),this.watchEIP6963(e))}}async setCoinbaseProvider(e){window==null||window.localStorage.setItem(Te.WALLET_ID,V.COINBASE_CONNECTOR_ID);const t=e.coinbase;if(t){const{address:r,chainId:o}=await Ut.getUserInfo(t);r&&o&&(B.setChainId(o),B.setProviderType("coinbaseWallet"),B.setProvider(e.coinbase),B.setIsConnected(!0),this.setAddress(r),this.watchCoinbase(e))}}async setAuthProvider(){if(window==null||window.localStorage.setItem(Te.WALLET_ID,V.AUTH_CONNECTOR_ID),this.authProvider){super.setLoading(!0);const{address:e,chainId:t,smartAccountDeployed:r,preferredAccountType:o}=await this.authProvider.connect({chainId:this.getChainId()}),{smartAccountEnabledNetworks:n}=await this.authProvider.getSmartAccountEnabledNetworks();this.setSmartAccountEnabledNetworks(n),e&&t&&(B.setChainId(t),B.setProviderType(V.AUTH_CONNECTOR_ID),B.setProvider(this.authProvider),B.setIsConnected(!0),B.setAddress(e),B.setPreferredAccountType(o),this.setSmartAccountDeployed(!!r),this.watchAuth(),this.watchModal()),super.setLoading(!1)}}async watchWalletConnect(){const e=await this.getWalletConnectProvider();function t(){localStorage.removeItem(Te.WALLET_ID),B.reset(),e==null||e.removeListener("disconnect",t),e==null||e.removeListener("accountsChanged",o),e==null||e.removeListener("chainChanged",r)}function r(n){if(n){const s=Ut.hexStringToNumber(n);B.setChainId(s)}}const o=async n=>{n.length>0&&await this.setWalletConnectProvider()};e&&(e.on("disconnect",t),e.on("accountsChanged",o),e.on("chainChanged",r))}watchInjected(e){const t=e.injected;function r(){localStorage.removeItem(Te.WALLET_ID),B.reset(),t==null||t.removeListener("disconnect",r),t==null||t.removeListener("accountsChanged",o),t==null||t.removeListener("chainChanged",n)}function o(s){const a=s==null?void 0:s[0];a?B.setAddress(Us(a)):(localStorage.removeItem(Te.WALLET_ID),B.reset())}function n(s){if(s){const a=typeof s=="string"?Ut.hexStringToNumber(s):Number(s);B.setChainId(a)}}t&&(t.on("disconnect",r),t.on("accountsChanged",o),t.on("chainChanged",n))}watchEIP6963(e){function t(){localStorage.removeItem(Te.WALLET_ID),B.reset(),e.removeListener("disconnect",t),e.removeListener("accountsChanged",r),e.removeListener("chainChanged",o)}function r(n){const s=n==null?void 0:n[0];s?B.setAddress(Us(s)):(localStorage.removeItem(Te.WALLET_ID),B.reset())}function o(n){if(n){const s=typeof n=="string"?Ut.hexStringToNumber(n):Number(n);B.setChainId(s)}}e&&(e.on("disconnect",t),e.on("accountsChanged",r),e.on("chainChanged",o))}watchCoinbase(e){const t=e.coinbase,r=localStorage.getItem(Te.WALLET_ID);function o(){localStorage.removeItem(Te.WALLET_ID),B.reset(),t==null||t.removeListener("disconnect",o),t==null||t.removeListener("accountsChanged",n),t==null||t.removeListener("chainChanged",s)}function n(a){const u=a==null?void 0:a[0];u?B.setAddress(Us(u)):(localStorage.removeItem(Te.WALLET_ID),B.reset())}function s(a){if(a&&r===V.COINBASE_CONNECTOR_ID){const u=Number(a);B.setChainId(u)}}t&&(t.on("disconnect",o),t.on("accountsChanged",n),t.on("chainChanged",s))}watchAuth(){this.authProvider&&(this.authProvider.onRpcRequest(e=>{if(Bt.checkIfRequestExists(e)){if(!Bt.checkIfRequestIsAllowed(e))if(super.isOpen()){if(super.isTransactionStackEmpty())return;super.isTransactionShouldReplaceView()?super.replace("ApproveTransaction"):super.redirect("ApproveTransaction")}else super.open({view:"ApproveTransaction"})}else{super.open();const t=Bt.getRequestMethod(e);console.error(Vt.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:t}),setTimeout(()=>{this.showErrorMessage(Vt.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300)}}),this.authProvider.onRpcResponse(e=>{switch(Bt.getResponseType(e)){case F.RPC_RESPONSE_TYPE_ERROR:{super.isOpen()&&(super.isTransactionStackEmpty()?super.close():super.popTransactionStack(!0));break}case F.RPC_RESPONSE_TYPE_TX:{super.isTransactionStackEmpty()?super.close():super.popTransactionStack();break}}}),this.authProvider.onNotConnected(()=>{this.setIsConnected(!1),super.setLoading(!1)}),this.authProvider.onIsConnected(({preferredAccountType:e})=>{this.setIsConnected(!0),super.setLoading(!1),B.setPreferredAccountType(e)}),this.authProvider.onSetPreferredAccount(({address:e,type:t})=>{var o;if(!e)return;super.setLoading(!0);const r=Xn.caipNetworkIdToNumber((o=this.getCaipNetwork())==null?void 0:o.id);B.setAddress(e),B.setChainId(r),B.setIsConnected(!0),B.setPreferredAccountType(t),this.syncAccount().then(()=>super.setLoading(!1))}))}watchModal(){this.authProvider&&this.subscribeState(e=>{var t;e.open||(t=this.authProvider)==null||t.rejectRpcRequest()})}async syncAccount(){const e=B.state.address,t=B.state.chainId,r=B.state.isConnected,o=B.state.preferredAccountType;if(this.resetAccount(),r&&e&&t){const n=`${V.EIP155}:${t}:${e}`;this.setIsConnected(r),this.setPreferredAccountType(o),this.setCaipAddress(n),this.syncConnectedWalletInfo(),await Promise.all([this.syncProfile(e),this.syncBalance(e),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!r&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e){const t=B.state.address,r=B.state.chainId,o=B.state.isConnected;if(this.chains){const n=this.chains.find(s=>s.chainId===r);if(n){const s=`${V.EIP155}:${n.chainId}`;if(this.setCaipNetwork({id:s,name:n.name,imageId:Kt.EIP155NetworkImageIds[n.chainId],imageUrl:e==null?void 0:e[n.chainId]}),o&&t){const a=`${V.EIP155}:${r}:${t}`;if(this.setCaipAddress(a),n.explorerUrl){const u=`${n.explorerUrl}/address/${t}`;this.setAddressExplorerUrl(u)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(t),await this.syncBalance(t))}}else o&&this.setCaipNetwork({id:`${V.EIP155}:${r}`})}}async syncProfile(e){const t=B.state.chainId;try{const{name:r,avatar:o}=await this.fetchIdentity({address:e});this.setProfileName(r),this.setProfileImage(o)}catch{if(t===1){const r=new Tc("mainnet"),o=await r.lookupAddress(e),n=await r.getAvatar(e);o&&this.setProfileName(o),n&&this.setProfileImage(n)}else this.setProfileName(null),this.setProfileImage(null)}}async syncBalance(e){const t=B.state.chainId;if(t&&this.chains){const r=this.chains.find(o=>o.chainId===t);if(r){const o=new fp(r.rpcUrl,{chainId:t,name:r.name});if(o){const n=await o.getBalance(e),s=wp(n);this.setBalance(s,r.currency)}}}}syncConnectedWalletInfo(){var r;const e=window==null?void 0:window.localStorage.getItem(Te.WALLET_ID),t=B.state.providerType;if(t===V.EIP6963_CONNECTOR_ID){if(e){const o=this.EIP6963Providers.find(n=>n.info.name===e);o&&this.setConnectedWalletInfo({...o.info})}}else if(t===V.WALLET_CONNECT_CONNECTOR_ID){const o=B.state.provider;o.session&&this.setConnectedWalletInfo({...o.session.peer.metadata,name:o.session.peer.metadata.name,icon:(r=o.session.peer.metadata.icons)==null?void 0:r[0]})}else e&&this.setConnectedWalletInfo({name:e})}async switchNetwork(e){var o,n,s,a,u,p,b,C;const t=B.state.provider,r=B.state.providerType;if(this.chains){const x=this.chains.find(S=>S.chainId===e);if(r===V.WALLET_CONNECT_CONNECTOR_ID&&x){const S=t;if(S)try{await S.request({method:"wallet_switchEthereumChain",params:[{chainId:Ut.numberToHexString(x.chainId)}]}),B.setChainId(e)}catch(k){if(k.code===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||k.code===Te.ERROR_CODE_DEFAULT||((n=(o=k==null?void 0:k.data)==null?void 0:o.originalError)==null?void 0:n.code)===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)await Ut.addEthereumChain(S,x);else throw new Error("Chain is not supported")}}else if(r===V.INJECTED_CONNECTOR_ID&&x){const S=t;if(S)try{await S.request({method:"wallet_switchEthereumChain",params:[{chainId:Ut.numberToHexString(x.chainId)}]}),B.setChainId(x.chainId)}catch(k){if(k.code===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||k.code===Te.ERROR_CODE_DEFAULT||((a=(s=k==null?void 0:k.data)==null?void 0:s.originalError)==null?void 0:a.code)===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)await Ut.addEthereumChain(S,x);else throw new Error("Chain is not supported")}}else if(r===V.EIP6963_CONNECTOR_ID&&x){const S=t;if(S)try{await S.request({method:"wallet_switchEthereumChain",params:[{chainId:Ut.numberToHexString(x.chainId)}]}),B.setChainId(x.chainId)}catch(k){if(k.code===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||k.code===Te.ERROR_CODE_DEFAULT||((p=(u=k==null?void 0:k.data)==null?void 0:u.originalError)==null?void 0:p.code)===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)await Ut.addEthereumChain(S,x);else throw new Error("Chain is not supported")}}else if(r===V.COINBASE_CONNECTOR_ID&&x){const S=t;if(S)try{await S.request({method:"wallet_switchEthereumChain",params:[{chainId:Ut.numberToHexString(x.chainId)}]}),B.setChainId(x.chainId)}catch(k){(k.code===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||k.code===Te.ERROR_CODE_DEFAULT||((C=(b=k==null?void 0:k.data)==null?void 0:b.originalError)==null?void 0:C.code)===Te.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)&&await Ut.addEthereumChain(S,x)}}else if(r===V.AUTH_CONNECTOR_ID&&this.authProvider&&x!=null&&x.chainId)try{super.setLoading(!0),await this.authProvider.switchNetwork(x==null?void 0:x.chainId),B.setChainId(x.chainId);const{address:S,preferredAccountType:k}=await this.authProvider.connect({chainId:x==null?void 0:x.chainId});B.setAddress(S),B.setPreferredAccountType(k),await this.syncAccount()}catch{throw new Error("Switching chain failed")}finally{super.setLoading(!1)}}}syncConnectors(e){var o,n,s,a,u,p;const t=[],r=Kt.ConnectorTypesMap[V.WALLET_CONNECT_CONNECTOR_ID];if(t.push({id:V.WALLET_CONNECT_CONNECTOR_ID,explorerId:Kt.ConnectorExplorerIds[V.WALLET_CONNECT_CONNECTOR_ID],imageId:Kt.ConnectorImageIds[V.WALLET_CONNECT_CONNECTOR_ID],imageUrl:(n=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:n[V.WALLET_CONNECT_CONNECTOR_ID],name:Kt.ConnectorNamesMap[V.WALLET_CONNECT_CONNECTOR_ID],type:r}),e.injected){const b=Kt.ConnectorTypesMap[V.INJECTED_CONNECTOR_ID];t.push({id:V.INJECTED_CONNECTOR_ID,explorerId:Kt.ConnectorExplorerIds[V.INJECTED_CONNECTOR_ID],imageId:Kt.ConnectorImageIds[V.INJECTED_CONNECTOR_ID],imageUrl:(a=(s=this.options)==null?void 0:s.connectorImages)==null?void 0:a[V.INJECTED_CONNECTOR_ID],name:Kt.ConnectorNamesMap[V.INJECTED_CONNECTOR_ID],type:b})}e.coinbase&&t.push({id:V.COINBASE_CONNECTOR_ID,explorerId:Kt.ConnectorExplorerIds[V.COINBASE_CONNECTOR_ID],imageId:Kt.ConnectorImageIds[V.COINBASE_CONNECTOR_ID],imageUrl:(p=(u=this.options)==null?void 0:u.connectorImages)==null?void 0:p[V.COINBASE_CONNECTOR_ID],name:Kt.ConnectorNamesMap[V.COINBASE_CONNECTOR_ID],type:"EXTERNAL"}),this.setConnectors(t)}async syncAuthConnector(e,t,r){if(typeof window<"u"){this.authProvider=new fm(e),this.addConnector({id:V.AUTH_CONNECTOR_ID,type:"AUTH",name:"Auth",provider:this.authProvider,email:r,socials:t==null?void 0:t.socials,showWallets:(t==null?void 0:t.showWallets)===void 0?!0:t.showWallets}),super.setLoading(!0);const o=this.authProvider.getLoginEmailUsed();super.setLoading(o);const{isConnected:n}=await this.authProvider.isConnected();n?await this.setAuthProvider():super.setLoading(!1)}}eip6963EventHandler(e){var t,r;if(e.detail){const{info:o,provider:n}=e.detail;if(!this.getConnectors().find(u=>u.name===o.name)){const u=Kt.ConnectorTypesMap[V.EIP6963_CONNECTOR_ID];{this.addConnector({id:V.EIP6963_CONNECTOR_ID,type:u,imageUrl:o.icon??((r=(t=this.options)==null?void 0:t.connectorImages)==null?void 0:r[V.EIP6963_CONNECTOR_ID]),name:o.name,provider:n,info:o});const p={provider:n,info:o};this.EIP6963Providers.push(p)}}}}listenConnectors(e){if(typeof window<"u"&&e){const t=this.eip6963EventHandler.bind(this);window.addEventListener(V.EIP6963_ANNOUNCE_EVENT,t),window.dispatchEvent(new Event(V.EIP6963_REQUEST_EVENT))}}}function ly(i){const{enableEIP6963:e=!0,enableCoinbase:t=!0,enableInjected:r=!0,enableEmail:o=!1,auth:n,metadata:s,rpcUrl:a,defaultChainId:u}=i;let p,b;const C={metadata:s};function x(){if(p)return p;if(!(typeof window>"u")&&window.ethereum)return p=window.ethereum,p}function S(){return b||(typeof window>"u"?void 0:(b=new dp.CoinbaseWalletSDK({appName:s.name,appLogoUrl:s.icons[0],darkMode:!1,enableMobileWalletLink:!0}).makeWeb3Provider(a,u),b))}return r&&(C.injected=x()),t&&a&&u&&(C.coinbase=S()),e&&(C.EIP6963=!0),o&&(C.email=!0),n&&(C.auth=n),C}let Zc;function cy(i){return Zc||(Zc=new l4({...i,_sdkVersion:`vue-ethers-${V.VERSION}`})),Zc}const $d={FIVE_MINUTES_IN_MS:3e5};class c4{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:r=$d.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:o=$d.FIVE_MINUTES_IN_MS,signOutOnAccountChange:n=!0,signOutOnDisconnect:s=!0,signOutOnNetworkChange:a=!0,...u}=e;this.options={enabled:t,nonceRefetchIntervalMs:r,sessionRefetchIntervalMs:o,signOutOnDisconnect:s,signOutOnAccountChange:n,signOutOnNetworkChange:a},this.methods=u}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await this.methods.getMessageParams()||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){var b;const{address:e}=j.state,t=await this.methods.getNonce(e);if(!e)throw new Error("An address is required to create a SIWE message.");const r=Xn.caipNetworkIdToNumber((b=K.state.caipNetwork)==null?void 0:b.id);if(!r)throw new Error("A chainId is required to create a SIWE message.");const o=await this.getMessageParams(),n=this.methods.createMessage({address:`eip155:${r}:${e}`,chainId:r,nonce:t,version:"1",...o});Le.getConnectedConnector()==="AUTH"&&N.pushTransactionStack({view:null,goBack:!1,replace:!0,onCancel(){N.replace("ConnectingSiwe")}});const a=await we.signMessage(n);if(!await this.methods.verifyMessage({message:n,signature:a}))throw new Error("Error verifying SIWE signature");const p=await this.methods.getSession();if(!p)throw new Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(p),ka.navigateAfterNetworkSwitch(),p}async signOut(){var e,t;return(t=(e=this.methods).onSignOut)==null||t.call(e),this.methods.signOut()}}var yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u4(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(r){var o=Object.getOwnPropertyDescriptor(i,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return i[r]}})}),t}var xh={exports:{}};/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/(function(i){(function(){var e="input is invalid type",t="finalize already called",r=typeof window=="object",o=r?window:{};o.JS_SHA3_NO_WINDOW&&(r=!1);var n=!r&&typeof self=="object",s=!o.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;s?o=yh:n&&(o=self);var a=!o.JS_SHA3_NO_COMMON_JS&&!0&&i.exports,u=!o.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",p="0123456789abcdef".split(""),b=[31,7936,2031616,520093696],C=[4,1024,262144,67108864],x=[1,256,65536,16777216],S=[6,1536,393216,100663296],k=[0,8,16,24],U=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],D=[224,256,384,512],te=[128,256],ne=["hex","buffer","arrayBuffer","array","digest"],fe={128:168,256:136};(o.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(h){return Object.prototype.toString.call(h)==="[object Array]"}),u&&(o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(h){return typeof h=="object"&&h.buffer&&h.buffer.constructor===ArrayBuffer});for(var oe=function(h,M,O){return function(L){return new v(h,M,h).update(L)[O]()}},be=function(h,M,O){return function(L,ie){return new v(h,M,ie).update(L)[O]()}},_e=function(h,M,O){return function(L,ie,q,Q){return d["cshake"+h].update(L,ie,q,Q)[O]()}},bt=function(h,M,O){return function(L,ie,q,Q){return d["kmac"+h].update(L,ie,q,Q)[O]()}},Oe=function(h,M,O,L){for(var ie=0;ie<ne.length;++ie){var q=ne[ie];h[q]=M(O,L,q)}return h},At=function(h,M){var O=oe(h,M,"hex");return O.create=function(){return new v(h,M,h)},O.update=function(L){return O.create().update(L)},Oe(O,oe,h,M)},ki=function(h,M){var O=be(h,M,"hex");return O.create=function(L){return new v(h,M,L)},O.update=function(L,ie){return O.create(ie).update(L)},Oe(O,be,h,M)},De=function(h,M){var O=fe[h],L=_e(h,M,"hex");return L.create=function(ie,q,Q){return!q&&!Q?d["shake"+h].create(ie):new v(h,M,ie).bytepad([q,Q],O)},L.update=function(ie,q,Q,he){return L.create(q,Q,he).update(ie)},Oe(L,_e,h,M)},Ri=function(h,M){var O=fe[h],L=bt(h,M,"hex");return L.create=function(ie,q,Q){return new ve(h,M,q).bytepad(["KMAC",Q],O).bytepad([ie],O)},L.update=function(ie,q,Q,he){return L.create(ie,Q,he).update(q)},Oe(L,bt,h,M)},l=[{name:"keccak",padding:x,bits:D,createMethod:At},{name:"sha3",padding:S,bits:D,createMethod:At},{name:"shake",padding:b,bits:te,createMethod:ki},{name:"cshake",padding:C,bits:te,createMethod:De},{name:"kmac",padding:C,bits:te,createMethod:Ri}],d={},f=[],y=0;y<l.length;++y)for(var _=l[y],T=_.bits,R=0;R<T.length;++R){var A=_.name+"_"+T[R];if(f.push(A),d[A]=_.createMethod(T[R],_.padding),_.name!=="sha3"){var c=_.name+T[R];f.push(c),d[c]=d[A]}}function v(h,M,O){this.blocks=[],this.s=[],this.padding=M,this.outputBits=O,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(h<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=O>>5,this.extraBytes=(O&31)>>3;for(var L=0;L<50;++L)this.s[L]=0}v.prototype.update=function(h){if(this.finalized)throw new Error(t);var M,O=typeof h;if(O!=="string"){if(O==="object"){if(h===null)throw new Error(e);if(u&&h.constructor===ArrayBuffer)h=new Uint8Array(h);else if(!Array.isArray(h)&&(!u||!ArrayBuffer.isView(h)))throw new Error(e)}else throw new Error(e);M=!0}for(var L=this.blocks,ie=this.byteCount,q=h.length,Q=this.blockCount,he=0,Ae=this.s,X,Ue;he<q;){if(this.reset)for(this.reset=!1,L[0]=this.block,X=1;X<Q+1;++X)L[X]=0;if(M)for(X=this.start;he<q&&X<ie;++he)L[X>>2]|=h[he]<<k[X++&3];else for(X=this.start;he<q&&X<ie;++he)Ue=h.charCodeAt(he),Ue<128?L[X>>2]|=Ue<<k[X++&3]:Ue<2048?(L[X>>2]|=(192|Ue>>6)<<k[X++&3],L[X>>2]|=(128|Ue&63)<<k[X++&3]):Ue<55296||Ue>=57344?(L[X>>2]|=(224|Ue>>12)<<k[X++&3],L[X>>2]|=(128|Ue>>6&63)<<k[X++&3],L[X>>2]|=(128|Ue&63)<<k[X++&3]):(Ue=65536+((Ue&1023)<<10|h.charCodeAt(++he)&1023),L[X>>2]|=(240|Ue>>18)<<k[X++&3],L[X>>2]|=(128|Ue>>12&63)<<k[X++&3],L[X>>2]|=(128|Ue>>6&63)<<k[X++&3],L[X>>2]|=(128|Ue&63)<<k[X++&3]);if(this.lastByteIndex=X,X>=ie){for(this.start=X-ie,this.block=L[Q],X=0;X<Q;++X)Ae[X]^=L[X];ue(Ae),this.reset=!0}else this.start=X}return this},v.prototype.encode=function(h,M){var O=h&255,L=1,ie=[O];for(h=h>>8,O=h&255;O>0;)ie.unshift(O),h=h>>8,O=h&255,++L;return M?ie.push(L):ie.unshift(L),this.update(ie),ie.length},v.prototype.encodeString=function(h){var M,O=typeof h;if(O!=="string"){if(O==="object"){if(h===null)throw new Error(e);if(u&&h.constructor===ArrayBuffer)h=new Uint8Array(h);else if(!Array.isArray(h)&&(!u||!ArrayBuffer.isView(h)))throw new Error(e)}else throw new Error(e);M=!0}var L=0,ie=h.length;if(M)L=ie;else for(var q=0;q<h.length;++q){var Q=h.charCodeAt(q);Q<128?L+=1:Q<2048?L+=2:Q<55296||Q>=57344?L+=3:(Q=65536+((Q&1023)<<10|h.charCodeAt(++q)&1023),L+=4)}return L+=this.encode(L*8),this.update(h),L},v.prototype.bytepad=function(h,M){for(var O=this.encode(M),L=0;L<h.length;++L)O+=this.encodeString(h[L]);var ie=M-O%M,q=[];return q.length=ie,this.update(q),this},v.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var h=this.blocks,M=this.lastByteIndex,O=this.blockCount,L=this.s;if(h[M>>2]|=this.padding[M&3],this.lastByteIndex===this.byteCount)for(h[0]=h[O],M=1;M<O+1;++M)h[M]=0;for(h[O-1]|=2147483648,M=0;M<O;++M)L[M]^=h[M];ue(L)}},v.prototype.toString=v.prototype.hex=function(){this.finalize();for(var h=this.blockCount,M=this.s,O=this.outputBlocks,L=this.extraBytes,ie=0,q=0,Q="",he;q<O;){for(ie=0;ie<h&&q<O;++ie,++q)he=M[ie],Q+=p[he>>4&15]+p[he&15]+p[he>>12&15]+p[he>>8&15]+p[he>>20&15]+p[he>>16&15]+p[he>>28&15]+p[he>>24&15];q%h===0&&(ue(M),ie=0)}return L&&(he=M[ie],Q+=p[he>>4&15]+p[he&15],L>1&&(Q+=p[he>>12&15]+p[he>>8&15]),L>2&&(Q+=p[he>>20&15]+p[he>>16&15])),Q},v.prototype.arrayBuffer=function(){this.finalize();var h=this.blockCount,M=this.s,O=this.outputBlocks,L=this.extraBytes,ie=0,q=0,Q=this.outputBits>>3,he;L?he=new ArrayBuffer(O+1<<2):he=new ArrayBuffer(Q);for(var Ae=new Uint32Array(he);q<O;){for(ie=0;ie<h&&q<O;++ie,++q)Ae[q]=M[ie];q%h===0&&ue(M)}return L&&(Ae[ie]=M[ie],he=he.slice(0,Q)),he},v.prototype.buffer=v.prototype.arrayBuffer,v.prototype.digest=v.prototype.array=function(){this.finalize();for(var h=this.blockCount,M=this.s,O=this.outputBlocks,L=this.extraBytes,ie=0,q=0,Q=[],he,Ae;q<O;){for(ie=0;ie<h&&q<O;++ie,++q)he=q<<2,Ae=M[ie],Q[he]=Ae&255,Q[he+1]=Ae>>8&255,Q[he+2]=Ae>>16&255,Q[he+3]=Ae>>24&255;q%h===0&&ue(M)}return L&&(he=q<<2,Ae=M[ie],Q[he]=Ae&255,L>1&&(Q[he+1]=Ae>>8&255),L>2&&(Q[he+2]=Ae>>16&255)),Q};function ve(h,M,O){v.call(this,h,M,O)}ve.prototype=new v,ve.prototype.finalize=function(){return this.encode(this.outputBits,!0),v.prototype.finalize.call(this)};var ue=function(h){var M,O,L,ie,q,Q,he,Ae,X,Ue,Be,We,On,je,Fe,Mn,ze,He,Dn,Ve,Ze,Ln,Ge,qe,Un,Ke,Ye,Bn,Qe,Je,Wn,Xe,et,jn,tt,it,Fn,rt,nt,zn,ot,st,Hn,at,lt,Vn,ct,ut,Zn,dt,ht,Gn,pt,ft,qn,wt,gt,Kr,Yr,Qr,Jr,Xr,en;for(L=0;L<48;L+=2)ie=h[0]^h[10]^h[20]^h[30]^h[40],q=h[1]^h[11]^h[21]^h[31]^h[41],Q=h[2]^h[12]^h[22]^h[32]^h[42],he=h[3]^h[13]^h[23]^h[33]^h[43],Ae=h[4]^h[14]^h[24]^h[34]^h[44],X=h[5]^h[15]^h[25]^h[35]^h[45],Ue=h[6]^h[16]^h[26]^h[36]^h[46],Be=h[7]^h[17]^h[27]^h[37]^h[47],We=h[8]^h[18]^h[28]^h[38]^h[48],On=h[9]^h[19]^h[29]^h[39]^h[49],M=We^(Q<<1|he>>>31),O=On^(he<<1|Q>>>31),h[0]^=M,h[1]^=O,h[10]^=M,h[11]^=O,h[20]^=M,h[21]^=O,h[30]^=M,h[31]^=O,h[40]^=M,h[41]^=O,M=ie^(Ae<<1|X>>>31),O=q^(X<<1|Ae>>>31),h[2]^=M,h[3]^=O,h[12]^=M,h[13]^=O,h[22]^=M,h[23]^=O,h[32]^=M,h[33]^=O,h[42]^=M,h[43]^=O,M=Q^(Ue<<1|Be>>>31),O=he^(Be<<1|Ue>>>31),h[4]^=M,h[5]^=O,h[14]^=M,h[15]^=O,h[24]^=M,h[25]^=O,h[34]^=M,h[35]^=O,h[44]^=M,h[45]^=O,M=Ae^(We<<1|On>>>31),O=X^(On<<1|We>>>31),h[6]^=M,h[7]^=O,h[16]^=M,h[17]^=O,h[26]^=M,h[27]^=O,h[36]^=M,h[37]^=O,h[46]^=M,h[47]^=O,M=Ue^(ie<<1|q>>>31),O=Be^(q<<1|ie>>>31),h[8]^=M,h[9]^=O,h[18]^=M,h[19]^=O,h[28]^=M,h[29]^=O,h[38]^=M,h[39]^=O,h[48]^=M,h[49]^=O,je=h[0],Fe=h[1],Vn=h[11]<<4|h[10]>>>28,ct=h[10]<<4|h[11]>>>28,Bn=h[20]<<3|h[21]>>>29,Qe=h[21]<<3|h[20]>>>29,Qr=h[31]<<9|h[30]>>>23,Jr=h[30]<<9|h[31]>>>23,st=h[40]<<18|h[41]>>>14,Hn=h[41]<<18|h[40]>>>14,jn=h[2]<<1|h[3]>>>31,tt=h[3]<<1|h[2]>>>31,Mn=h[13]<<12|h[12]>>>20,ze=h[12]<<12|h[13]>>>20,ut=h[22]<<10|h[23]>>>22,Zn=h[23]<<10|h[22]>>>22,Je=h[33]<<13|h[32]>>>19,Wn=h[32]<<13|h[33]>>>19,Xr=h[42]<<2|h[43]>>>30,en=h[43]<<2|h[42]>>>30,ft=h[5]<<30|h[4]>>>2,qn=h[4]<<30|h[5]>>>2,it=h[14]<<6|h[15]>>>26,Fn=h[15]<<6|h[14]>>>26,He=h[25]<<11|h[24]>>>21,Dn=h[24]<<11|h[25]>>>21,dt=h[34]<<15|h[35]>>>17,ht=h[35]<<15|h[34]>>>17,Xe=h[45]<<29|h[44]>>>3,et=h[44]<<29|h[45]>>>3,qe=h[6]<<28|h[7]>>>4,Un=h[7]<<28|h[6]>>>4,wt=h[17]<<23|h[16]>>>9,gt=h[16]<<23|h[17]>>>9,rt=h[26]<<25|h[27]>>>7,nt=h[27]<<25|h[26]>>>7,Ve=h[36]<<21|h[37]>>>11,Ze=h[37]<<21|h[36]>>>11,Gn=h[47]<<24|h[46]>>>8,pt=h[46]<<24|h[47]>>>8,at=h[8]<<27|h[9]>>>5,lt=h[9]<<27|h[8]>>>5,Ke=h[18]<<20|h[19]>>>12,Ye=h[19]<<20|h[18]>>>12,Kr=h[29]<<7|h[28]>>>25,Yr=h[28]<<7|h[29]>>>25,zn=h[38]<<8|h[39]>>>24,ot=h[39]<<8|h[38]>>>24,Ln=h[48]<<14|h[49]>>>18,Ge=h[49]<<14|h[48]>>>18,h[0]=je^~Mn&He,h[1]=Fe^~ze&Dn,h[10]=qe^~Ke&Bn,h[11]=Un^~Ye&Qe,h[20]=jn^~it&rt,h[21]=tt^~Fn&nt,h[30]=at^~Vn&ut,h[31]=lt^~ct&Zn,h[40]=ft^~wt&Kr,h[41]=qn^~gt&Yr,h[2]=Mn^~He&Ve,h[3]=ze^~Dn&Ze,h[12]=Ke^~Bn&Je,h[13]=Ye^~Qe&Wn,h[22]=it^~rt&zn,h[23]=Fn^~nt&ot,h[32]=Vn^~ut&dt,h[33]=ct^~Zn&ht,h[42]=wt^~Kr&Qr,h[43]=gt^~Yr&Jr,h[4]=He^~Ve&Ln,h[5]=Dn^~Ze&Ge,h[14]=Bn^~Je&Xe,h[15]=Qe^~Wn&et,h[24]=rt^~zn&st,h[25]=nt^~ot&Hn,h[34]=ut^~dt&Gn,h[35]=Zn^~ht&pt,h[44]=Kr^~Qr&Xr,h[45]=Yr^~Jr&en,h[6]=Ve^~Ln&je,h[7]=Ze^~Ge&Fe,h[16]=Je^~Xe&qe,h[17]=Wn^~et&Un,h[26]=zn^~st&jn,h[27]=ot^~Hn&tt,h[36]=dt^~Gn&at,h[37]=ht^~pt&lt,h[46]=Qr^~Xr&ft,h[47]=Jr^~en&qn,h[8]=Ln^~je&Mn,h[9]=Ge^~Fe&ze,h[18]=Xe^~qe&Ke,h[19]=et^~Un&Ye,h[28]=st^~jn&it,h[29]=Hn^~tt&Fn,h[38]=Gn^~at&Vn,h[39]=pt^~lt&ct,h[48]=Xr^~ft&wt,h[49]=en^~qn&gt,h[0]^=U[L],h[1]^=U[L+1]};if(a)i.exports=d;else for(y=0;y<f.length;++y)o[f[y]]=d[f[y]]})()})(xh);var d4=xh.exports;const h4="logger/5.7.0";let Pd=!1,Nd=!1;const tl={debug:1,default:2,info:2,warning:3,error:4,off:5};let Od=tl.default,Gc=null;function p4(){try{const i=[];if(["NFD","NFC","NFKD","NFKC"].forEach(e=>{try{if("test".normalize(e)!=="test")throw new Error("bad normalize")}catch{i.push(e)}}),i.length)throw new Error("missing "+i.join(", "));if("é".normalize("NFD")!=="é")throw new Error("broken implementation")}catch(i){return i.message}return null}const Md=p4();var Mu;(function(i){i.DEBUG="DEBUG",i.INFO="INFO",i.WARNING="WARNING",i.ERROR="ERROR",i.OFF="OFF"})(Mu||(Mu={}));var Zi;(function(i){i.UNKNOWN_ERROR="UNKNOWN_ERROR",i.NOT_IMPLEMENTED="NOT_IMPLEMENTED",i.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",i.NETWORK_ERROR="NETWORK_ERROR",i.SERVER_ERROR="SERVER_ERROR",i.TIMEOUT="TIMEOUT",i.BUFFER_OVERRUN="BUFFER_OVERRUN",i.NUMERIC_FAULT="NUMERIC_FAULT",i.MISSING_NEW="MISSING_NEW",i.INVALID_ARGUMENT="INVALID_ARGUMENT",i.MISSING_ARGUMENT="MISSING_ARGUMENT",i.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",i.CALL_EXCEPTION="CALL_EXCEPTION",i.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",i.NONCE_EXPIRED="NONCE_EXPIRED",i.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",i.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",i.TRANSACTION_REPLACED="TRANSACTION_REPLACED",i.ACTION_REJECTED="ACTION_REJECTED"})(Zi||(Zi={}));const Dd="0123456789abcdef";let Zt=class $t{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,t){const r=e.toLowerCase();tl[r]==null&&this.throwArgumentError("invalid log level name","logLevel",e),!(Od>tl[r])&&console.log.apply(console,t)}debug(...e){this._log($t.levels.DEBUG,e)}info(...e){this._log($t.levels.INFO,e)}warn(...e){this._log($t.levels.WARNING,e)}makeError(e,t,r){if(Nd)return this.makeError("censored error",t,{});t||(t=$t.errors.UNKNOWN_ERROR),r||(r={});const o=[];Object.keys(r).forEach(u=>{const p=r[u];try{if(p instanceof Uint8Array){let b="";for(let C=0;C<p.length;C++)b+=Dd[p[C]>>4],b+=Dd[p[C]&15];o.push(u+"=Uint8Array(0x"+b+")")}else o.push(u+"="+JSON.stringify(p))}catch{o.push(u+"="+JSON.stringify(r[u].toString()))}}),o.push(`code=${t}`),o.push(`version=${this.version}`);const n=e;let s="";switch(t){case Zi.NUMERIC_FAULT:{s="NUMERIC_FAULT";const u=e;switch(u){case"overflow":case"underflow":case"division-by-zero":s+="-"+u;break;case"negative-power":case"negative-width":s+="-unsupported";break;case"unbound-bitwise-result":s+="-unbound-result";break}break}case Zi.CALL_EXCEPTION:case Zi.INSUFFICIENT_FUNDS:case Zi.MISSING_NEW:case Zi.NONCE_EXPIRED:case Zi.REPLACEMENT_UNDERPRICED:case Zi.TRANSACTION_REPLACED:case Zi.UNPREDICTABLE_GAS_LIMIT:s=t;break}s&&(e+=" [ See: https://links.ethers.org/v5-errors-"+s+" ]"),o.length&&(e+=" ("+o.join(", ")+")");const a=new Error(e);return a.reason=n,a.code=t,Object.keys(r).forEach(function(u){a[u]=r[u]}),a}throwError(e,t,r){throw this.makeError(e,t,r)}throwArgumentError(e,t,r){return this.throwError(e,$t.errors.INVALID_ARGUMENT,{argument:t,value:r})}assert(e,t,r,o){e||this.throwError(t,r,o)}assertArgument(e,t,r,o){e||this.throwArgumentError(t,r,o)}checkNormalize(e){Md&&this.throwError("platform missing String.prototype.normalize",$t.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:Md})}checkSafeUint53(e,t){typeof e=="number"&&(t==null&&(t="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(t,$t.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(t,$t.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,t,r){r?r=": "+r:r="",e<t&&this.throwError("missing argument"+r,$t.errors.MISSING_ARGUMENT,{count:e,expectedCount:t}),e>t&&this.throwError("too many arguments"+r,$t.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})}checkNew(e,t){(e===Object||e==null)&&this.throwError("missing new",$t.errors.MISSING_NEW,{name:t.name})}checkAbstract(e,t){e===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",$t.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||e==null)&&this.throwError("missing new",$t.errors.MISSING_NEW,{name:t.name})}static globalLogger(){return Gc||(Gc=new $t(h4)),Gc}static setCensorship(e,t){if(!e&&t&&this.globalLogger().throwError("cannot permanently disable censorship",$t.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),Pd){if(!e)return;this.globalLogger().throwError("error censorship permanent",$t.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}Nd=!!e,Pd=!!t}static setLogLevel(e){const t=tl[e.toLowerCase()];if(t==null){$t.globalLogger().warn("invalid log level - "+e);return}Od=t}static from(e){return new $t(e)}};Zt.errors=Zi,Zt.levels=Mu;const f4="bytes/5.7.0",_t=new Zt(f4);function Ch(i){return!!i.toHexString}function Yo(i){return i.slice||(i.slice=function(){const e=Array.prototype.slice.call(arguments);return Yo(new Uint8Array(Array.prototype.slice.apply(i,e)))}),i}function w4(i){return vi(i)&&!(i.length%2)||Os(i)}function Ld(i){return typeof i=="number"&&i==i&&i%1===0}function Os(i){if(i==null)return!1;if(i.constructor===Uint8Array)return!0;if(typeof i=="string"||!Ld(i.length)||i.length<0)return!1;for(let e=0;e<i.length;e++){const t=i[e];if(!Ld(t)||t<0||t>=256)return!1}return!0}function xt(i,e){if(e||(e={}),typeof i=="number"){_t.checkSafeUint53(i,"invalid arrayify value");const t=[];for(;i;)t.unshift(i&255),i=parseInt(String(i/256));return t.length===0&&t.push(0),Yo(new Uint8Array(t))}if(e.allowMissingPrefix&&typeof i=="string"&&i.substring(0,2)!=="0x"&&(i="0x"+i),Ch(i)&&(i=i.toHexString()),vi(i)){let t=i.substring(2);t.length%2&&(e.hexPad==="left"?t="0"+t:e.hexPad==="right"?t+="0":_t.throwArgumentError("hex data is odd-length","value",i));const r=[];for(let o=0;o<t.length;o+=2)r.push(parseInt(t.substring(o,o+2),16));return Yo(new Uint8Array(r))}return Os(i)?Yo(new Uint8Array(i)):_t.throwArgumentError("invalid arrayify value","value",i)}function g4(i){const e=i.map(o=>xt(o)),t=e.reduce((o,n)=>o+n.length,0),r=new Uint8Array(t);return e.reduce((o,n)=>(r.set(n,o),o+n.length),0),Yo(r)}function m4(i,e){i=xt(i),i.length>e&&_t.throwArgumentError("value out of range","value",arguments[0]);const t=new Uint8Array(e);return t.set(i,e-i.length),Yo(t)}function vi(i,e){return!(typeof i!="string"||!i.match(/^0x[0-9A-Fa-f]*$/)||e&&i.length!==2+2*e)}const qc="0123456789abcdef";function ui(i,e){if(e||(e={}),typeof i=="number"){_t.checkSafeUint53(i,"invalid hexlify value");let t="";for(;i;)t=qc[i&15]+t,i=Math.floor(i/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if(typeof i=="bigint")return i=i.toString(16),i.length%2?"0x0"+i:"0x"+i;if(e.allowMissingPrefix&&typeof i=="string"&&i.substring(0,2)!=="0x"&&(i="0x"+i),Ch(i))return i.toHexString();if(vi(i))return i.length%2&&(e.hexPad==="left"?i="0x0"+i.substring(2):e.hexPad==="right"?i+="0":_t.throwArgumentError("hex data is odd-length","value",i)),i.toLowerCase();if(Os(i)){let t="0x";for(let r=0;r<i.length;r++){let o=i[r];t+=qc[(o&240)>>4]+qc[o&15]}return t}return _t.throwArgumentError("invalid hexlify value","value",i)}function v4(i){if(typeof i!="string")i=ui(i);else if(!vi(i)||i.length%2)return null;return(i.length-2)/2}function Ud(i,e,t){return typeof i!="string"?i=ui(i):(!vi(i)||i.length%2)&&_t.throwArgumentError("invalid hexData","value",i),e=2+2*e,t!=null?"0x"+i.substring(e,2+2*t):"0x"+i.substring(e)}function ur(i,e){for(typeof i!="string"?i=ui(i):vi(i)||_t.throwArgumentError("invalid hex string","value",i),i.length>2*e+2&&_t.throwArgumentError("value out of range","value",arguments[1]);i.length<2*e+2;)i="0x0"+i.substring(2);return i}function Ah(i){const e={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(w4(i)){let t=xt(i);t.length===64?(e.v=27+(t[32]>>7),t[32]&=127,e.r=ui(t.slice(0,32)),e.s=ui(t.slice(32,64))):t.length===65?(e.r=ui(t.slice(0,32)),e.s=ui(t.slice(32,64)),e.v=t[64]):_t.throwArgumentError("invalid signature string","signature",i),e.v<27&&(e.v===0||e.v===1?e.v+=27:_t.throwArgumentError("signature invalid v byte","signature",i)),e.recoveryParam=1-e.v%2,e.recoveryParam&&(t[32]|=128),e._vs=ui(t.slice(32,64))}else{if(e.r=i.r,e.s=i.s,e.v=i.v,e.recoveryParam=i.recoveryParam,e._vs=i._vs,e._vs!=null){const o=m4(xt(e._vs),32);e._vs=ui(o);const n=o[0]>=128?1:0;e.recoveryParam==null?e.recoveryParam=n:e.recoveryParam!==n&&_t.throwArgumentError("signature recoveryParam mismatch _vs","signature",i),o[0]&=127;const s=ui(o);e.s==null?e.s=s:e.s!==s&&_t.throwArgumentError("signature v mismatch _vs","signature",i)}if(e.recoveryParam==null)e.v==null?_t.throwArgumentError("signature missing v and recoveryParam","signature",i):e.v===0||e.v===1?e.recoveryParam=e.v:e.recoveryParam=1-e.v%2;else if(e.v==null)e.v=27+e.recoveryParam;else{const o=e.v===0||e.v===1?e.v:1-e.v%2;e.recoveryParam!==o&&_t.throwArgumentError("signature recoveryParam mismatch v","signature",i)}e.r==null||!vi(e.r)?_t.throwArgumentError("signature missing or invalid r","signature",i):e.r=ur(e.r,32),e.s==null||!vi(e.s)?_t.throwArgumentError("signature missing or invalid s","signature",i):e.s=ur(e.s,32);const t=xt(e.s);t[0]>=128&&_t.throwArgumentError("signature s out of range","signature",i),e.recoveryParam&&(t[0]|=128);const r=ui(t);e._vs&&(vi(e._vs)||_t.throwArgumentError("signature invalid _vs","signature",i),e._vs=ur(e._vs,32)),e._vs==null?e._vs=r:e._vs!==r&&_t.throwArgumentError("signature _vs mismatch v and s","signature",i)}return e.yParityAndS=e._vs,e.compact=e.r+e.yParityAndS.substring(2),e}function A0(i){return"0x"+d4.keccak_256(xt(i))}var _h={exports:{}},b4={},y4=Object.freeze({__proto__:null,default:b4}),x4=u4(y4);(function(i){(function(e,t){function r(l,d){if(!l)throw new Error(d||"Assertion failed")}function o(l,d){l.super_=d;var f=function(){};f.prototype=d.prototype,l.prototype=new f,l.prototype.constructor=l}function n(l,d,f){if(n.isBN(l))return l;this.negative=0,this.words=null,this.length=0,this.red=null,l!==null&&((d==="le"||d==="be")&&(f=d,d=10),this._init(l||0,d||10,f||"be"))}typeof e=="object"?e.exports=n:t.BN=n,n.BN=n,n.wordSize=26;var s;try{typeof window<"u"&&typeof window.Buffer<"u"?s=window.Buffer:s=x4.Buffer}catch{}n.isBN=function(l){return l instanceof n?!0:l!==null&&typeof l=="object"&&l.constructor.wordSize===n.wordSize&&Array.isArray(l.words)},n.max=function(l,d){return l.cmp(d)>0?l:d},n.min=function(l,d){return l.cmp(d)<0?l:d},n.prototype._init=function(l,d,f){if(typeof l=="number")return this._initNumber(l,d,f);if(typeof l=="object")return this._initArray(l,d,f);d==="hex"&&(d=16),r(d===(d|0)&&d>=2&&d<=36),l=l.toString().replace(/\s+/g,"");var y=0;l[0]==="-"&&(y++,this.negative=1),y<l.length&&(d===16?this._parseHex(l,y,f):(this._parseBase(l,d,y),f==="le"&&this._initArray(this.toArray(),d,f)))},n.prototype._initNumber=function(l,d,f){l<0&&(this.negative=1,l=-l),l<67108864?(this.words=[l&67108863],this.length=1):l<4503599627370496?(this.words=[l&67108863,l/67108864&67108863],this.length=2):(r(l<9007199254740992),this.words=[l&67108863,l/67108864&67108863,1],this.length=3),f==="le"&&this._initArray(this.toArray(),d,f)},n.prototype._initArray=function(l,d,f){if(r(typeof l.length=="number"),l.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(l.length/3),this.words=new Array(this.length);for(var y=0;y<this.length;y++)this.words[y]=0;var _,T,R=0;if(f==="be")for(y=l.length-1,_=0;y>=0;y-=3)T=l[y]|l[y-1]<<8|l[y-2]<<16,this.words[_]|=T<<R&67108863,this.words[_+1]=T>>>26-R&67108863,R+=24,R>=26&&(R-=26,_++);else if(f==="le")for(y=0,_=0;y<l.length;y+=3)T=l[y]|l[y+1]<<8|l[y+2]<<16,this.words[_]|=T<<R&67108863,this.words[_+1]=T>>>26-R&67108863,R+=24,R>=26&&(R-=26,_++);return this._strip()};function a(l,d){var f=l.charCodeAt(d);if(f>=48&&f<=57)return f-48;if(f>=65&&f<=70)return f-55;if(f>=97&&f<=102)return f-87;r(!1,"Invalid character in "+l)}function u(l,d,f){var y=a(l,f);return f-1>=d&&(y|=a(l,f-1)<<4),y}n.prototype._parseHex=function(l,d,f){this.length=Math.ceil((l.length-d)/6),this.words=new Array(this.length);for(var y=0;y<this.length;y++)this.words[y]=0;var _=0,T=0,R;if(f==="be")for(y=l.length-1;y>=d;y-=2)R=u(l,d,y)<<_,this.words[T]|=R&67108863,_>=18?(_-=18,T+=1,this.words[T]|=R>>>26):_+=8;else{var A=l.length-d;for(y=A%2===0?d+1:d;y<l.length;y+=2)R=u(l,d,y)<<_,this.words[T]|=R&67108863,_>=18?(_-=18,T+=1,this.words[T]|=R>>>26):_+=8}this._strip()};function p(l,d,f,y){for(var _=0,T=0,R=Math.min(l.length,f),A=d;A<R;A++){var c=l.charCodeAt(A)-48;_*=y,c>=49?T=c-49+10:c>=17?T=c-17+10:T=c,r(c>=0&&T<y,"Invalid character"),_+=T}return _}n.prototype._parseBase=function(l,d,f){this.words=[0],this.length=1;for(var y=0,_=1;_<=67108863;_*=d)y++;y--,_=_/d|0;for(var T=l.length-f,R=T%y,A=Math.min(T,T-R)+f,c=0,v=f;v<A;v+=y)c=p(l,v,v+y,d),this.imuln(_),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(R!==0){var ve=1;for(c=p(l,v,l.length,d),v=0;v<R;v++)ve*=d;this.imuln(ve),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}this._strip()},n.prototype.copy=function(l){l.words=new Array(this.length);for(var d=0;d<this.length;d++)l.words[d]=this.words[d];l.length=this.length,l.negative=this.negative,l.red=this.red};function b(l,d){l.words=d.words,l.length=d.length,l.negative=d.negative,l.red=d.red}if(n.prototype._move=function(l){b(l,this)},n.prototype.clone=function(){var l=new n(null);return this.copy(l),l},n.prototype._expand=function(l){for(;this.length<l;)this.words[this.length++]=0;return this},n.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},n.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{n.prototype[Symbol.for("nodejs.util.inspect.custom")]=C}catch{n.prototype.inspect=C}else n.prototype.inspect=C;function C(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var x=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],S=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],k=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];n.prototype.toString=function(l,d){l=l||10,d=d|0||1;var f;if(l===16||l==="hex"){f="";for(var y=0,_=0,T=0;T<this.length;T++){var R=this.words[T],A=((R<<y|_)&16777215).toString(16);_=R>>>24-y&16777215,y+=2,y>=26&&(y-=26,T--),_!==0||T!==this.length-1?f=x[6-A.length]+A+f:f=A+f}for(_!==0&&(f=_.toString(16)+f);f.length%d!==0;)f="0"+f;return this.negative!==0&&(f="-"+f),f}if(l===(l|0)&&l>=2&&l<=36){var c=S[l],v=k[l];f="";var ve=this.clone();for(ve.negative=0;!ve.isZero();){var ue=ve.modrn(v).toString(l);ve=ve.idivn(v),ve.isZero()?f=ue+f:f=x[c-ue.length]+ue+f}for(this.isZero()&&(f="0"+f);f.length%d!==0;)f="0"+f;return this.negative!==0&&(f="-"+f),f}r(!1,"Base should be between 2 and 36")},n.prototype.toNumber=function(){var l=this.words[0];return this.length===2?l+=this.words[1]*67108864:this.length===3&&this.words[2]===1?l+=4503599627370496+this.words[1]*67108864:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-l:l},n.prototype.toJSON=function(){return this.toString(16,2)},s&&(n.prototype.toBuffer=function(l,d){return this.toArrayLike(s,l,d)}),n.prototype.toArray=function(l,d){return this.toArrayLike(Array,l,d)};var U=function(l,d){return l.allocUnsafe?l.allocUnsafe(d):new l(d)};n.prototype.toArrayLike=function(l,d,f){this._strip();var y=this.byteLength(),_=f||Math.max(1,y);r(y<=_,"byte array longer than desired length"),r(_>0,"Requested array length <= 0");var T=U(l,_),R=d==="le"?"LE":"BE";return this["_toArrayLike"+R](T,y),T},n.prototype._toArrayLikeLE=function(l,d){for(var f=0,y=0,_=0,T=0;_<this.length;_++){var R=this.words[_]<<T|y;l[f++]=R&255,f<l.length&&(l[f++]=R>>8&255),f<l.length&&(l[f++]=R>>16&255),T===6?(f<l.length&&(l[f++]=R>>24&255),y=0,T=0):(y=R>>>24,T+=2)}if(f<l.length)for(l[f++]=y;f<l.length;)l[f++]=0},n.prototype._toArrayLikeBE=function(l,d){for(var f=l.length-1,y=0,_=0,T=0;_<this.length;_++){var R=this.words[_]<<T|y;l[f--]=R&255,f>=0&&(l[f--]=R>>8&255),f>=0&&(l[f--]=R>>16&255),T===6?(f>=0&&(l[f--]=R>>24&255),y=0,T=0):(y=R>>>24,T+=2)}if(f>=0)for(l[f--]=y;f>=0;)l[f--]=0},Math.clz32?n.prototype._countBits=function(l){return 32-Math.clz32(l)}:n.prototype._countBits=function(l){var d=l,f=0;return d>=4096&&(f+=13,d>>>=13),d>=64&&(f+=7,d>>>=7),d>=8&&(f+=4,d>>>=4),d>=2&&(f+=2,d>>>=2),f+d},n.prototype._zeroBits=function(l){if(l===0)return 26;var d=l,f=0;return d&8191||(f+=13,d>>>=13),d&127||(f+=7,d>>>=7),d&15||(f+=4,d>>>=4),d&3||(f+=2,d>>>=2),d&1||f++,f},n.prototype.bitLength=function(){var l=this.words[this.length-1],d=this._countBits(l);return(this.length-1)*26+d};function D(l){for(var d=new Array(l.bitLength()),f=0;f<d.length;f++){var y=f/26|0,_=f%26;d[f]=l.words[y]>>>_&1}return d}n.prototype.zeroBits=function(){if(this.isZero())return 0;for(var l=0,d=0;d<this.length;d++){var f=this._zeroBits(this.words[d]);if(l+=f,f!==26)break}return l},n.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},n.prototype.toTwos=function(l){return this.negative!==0?this.abs().inotn(l).iaddn(1):this.clone()},n.prototype.fromTwos=function(l){return this.testn(l-1)?this.notn(l).iaddn(1).ineg():this.clone()},n.prototype.isNeg=function(){return this.negative!==0},n.prototype.neg=function(){return this.clone().ineg()},n.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},n.prototype.iuor=function(l){for(;this.length<l.length;)this.words[this.length++]=0;for(var d=0;d<l.length;d++)this.words[d]=this.words[d]|l.words[d];return this._strip()},n.prototype.ior=function(l){return r((this.negative|l.negative)===0),this.iuor(l)},n.prototype.or=function(l){return this.length>l.length?this.clone().ior(l):l.clone().ior(this)},n.prototype.uor=function(l){return this.length>l.length?this.clone().iuor(l):l.clone().iuor(this)},n.prototype.iuand=function(l){var d;this.length>l.length?d=l:d=this;for(var f=0;f<d.length;f++)this.words[f]=this.words[f]&l.words[f];return this.length=d.length,this._strip()},n.prototype.iand=function(l){return r((this.negative|l.negative)===0),this.iuand(l)},n.prototype.and=function(l){return this.length>l.length?this.clone().iand(l):l.clone().iand(this)},n.prototype.uand=function(l){return this.length>l.length?this.clone().iuand(l):l.clone().iuand(this)},n.prototype.iuxor=function(l){var d,f;this.length>l.length?(d=this,f=l):(d=l,f=this);for(var y=0;y<f.length;y++)this.words[y]=d.words[y]^f.words[y];if(this!==d)for(;y<d.length;y++)this.words[y]=d.words[y];return this.length=d.length,this._strip()},n.prototype.ixor=function(l){return r((this.negative|l.negative)===0),this.iuxor(l)},n.prototype.xor=function(l){return this.length>l.length?this.clone().ixor(l):l.clone().ixor(this)},n.prototype.uxor=function(l){return this.length>l.length?this.clone().iuxor(l):l.clone().iuxor(this)},n.prototype.inotn=function(l){r(typeof l=="number"&&l>=0);var d=Math.ceil(l/26)|0,f=l%26;this._expand(d),f>0&&d--;for(var y=0;y<d;y++)this.words[y]=~this.words[y]&67108863;return f>0&&(this.words[y]=~this.words[y]&67108863>>26-f),this._strip()},n.prototype.notn=function(l){return this.clone().inotn(l)},n.prototype.setn=function(l,d){r(typeof l=="number"&&l>=0);var f=l/26|0,y=l%26;return this._expand(f+1),d?this.words[f]=this.words[f]|1<<y:this.words[f]=this.words[f]&~(1<<y),this._strip()},n.prototype.iadd=function(l){var d;if(this.negative!==0&&l.negative===0)return this.negative=0,d=this.isub(l),this.negative^=1,this._normSign();if(this.negative===0&&l.negative!==0)return l.negative=0,d=this.isub(l),l.negative=1,d._normSign();var f,y;this.length>l.length?(f=this,y=l):(f=l,y=this);for(var _=0,T=0;T<y.length;T++)d=(f.words[T]|0)+(y.words[T]|0)+_,this.words[T]=d&67108863,_=d>>>26;for(;_!==0&&T<f.length;T++)d=(f.words[T]|0)+_,this.words[T]=d&67108863,_=d>>>26;if(this.length=f.length,_!==0)this.words[this.length]=_,this.length++;else if(f!==this)for(;T<f.length;T++)this.words[T]=f.words[T];return this},n.prototype.add=function(l){var d;return l.negative!==0&&this.negative===0?(l.negative=0,d=this.sub(l),l.negative^=1,d):l.negative===0&&this.negative!==0?(this.negative=0,d=l.sub(this),this.negative=1,d):this.length>l.length?this.clone().iadd(l):l.clone().iadd(this)},n.prototype.isub=function(l){if(l.negative!==0){l.negative=0;var d=this.iadd(l);return l.negative=1,d._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(l),this.negative=1,this._normSign();var f=this.cmp(l);if(f===0)return this.negative=0,this.length=1,this.words[0]=0,this;var y,_;f>0?(y=this,_=l):(y=l,_=this);for(var T=0,R=0;R<_.length;R++)d=(y.words[R]|0)-(_.words[R]|0)+T,T=d>>26,this.words[R]=d&67108863;for(;T!==0&&R<y.length;R++)d=(y.words[R]|0)+T,T=d>>26,this.words[R]=d&67108863;if(T===0&&R<y.length&&y!==this)for(;R<y.length;R++)this.words[R]=y.words[R];return this.length=Math.max(this.length,R),y!==this&&(this.negative=1),this._strip()},n.prototype.sub=function(l){return this.clone().isub(l)};function te(l,d,f){f.negative=d.negative^l.negative;var y=l.length+d.length|0;f.length=y,y=y-1|0;var _=l.words[0]|0,T=d.words[0]|0,R=_*T,A=R&67108863,c=R/67108864|0;f.words[0]=A;for(var v=1;v<y;v++){for(var ve=c>>>26,ue=c&67108863,h=Math.min(v,d.length-1),M=Math.max(0,v-l.length+1);M<=h;M++){var O=v-M|0;_=l.words[O]|0,T=d.words[M]|0,R=_*T+ue,ve+=R/67108864|0,ue=R&67108863}f.words[v]=ue|0,c=ve|0}return c!==0?f.words[v]=c|0:f.length--,f._strip()}var ne=function(l,d,f){var y=l.words,_=d.words,T=f.words,R=0,A,c,v,ve=y[0]|0,ue=ve&8191,h=ve>>>13,M=y[1]|0,O=M&8191,L=M>>>13,ie=y[2]|0,q=ie&8191,Q=ie>>>13,he=y[3]|0,Ae=he&8191,X=he>>>13,Ue=y[4]|0,Be=Ue&8191,We=Ue>>>13,On=y[5]|0,je=On&8191,Fe=On>>>13,Mn=y[6]|0,ze=Mn&8191,He=Mn>>>13,Dn=y[7]|0,Ve=Dn&8191,Ze=Dn>>>13,Ln=y[8]|0,Ge=Ln&8191,qe=Ln>>>13,Un=y[9]|0,Ke=Un&8191,Ye=Un>>>13,Bn=_[0]|0,Qe=Bn&8191,Je=Bn>>>13,Wn=_[1]|0,Xe=Wn&8191,et=Wn>>>13,jn=_[2]|0,tt=jn&8191,it=jn>>>13,Fn=_[3]|0,rt=Fn&8191,nt=Fn>>>13,zn=_[4]|0,ot=zn&8191,st=zn>>>13,Hn=_[5]|0,at=Hn&8191,lt=Hn>>>13,Vn=_[6]|0,ct=Vn&8191,ut=Vn>>>13,Zn=_[7]|0,dt=Zn&8191,ht=Zn>>>13,Gn=_[8]|0,pt=Gn&8191,ft=Gn>>>13,qn=_[9]|0,wt=qn&8191,gt=qn>>>13;f.negative=l.negative^d.negative,f.length=19,A=Math.imul(ue,Qe),c=Math.imul(ue,Je),c=c+Math.imul(h,Qe)|0,v=Math.imul(h,Je);var Kr=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Kr>>>26)|0,Kr&=67108863,A=Math.imul(O,Qe),c=Math.imul(O,Je),c=c+Math.imul(L,Qe)|0,v=Math.imul(L,Je),A=A+Math.imul(ue,Xe)|0,c=c+Math.imul(ue,et)|0,c=c+Math.imul(h,Xe)|0,v=v+Math.imul(h,et)|0;var Yr=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Yr>>>26)|0,Yr&=67108863,A=Math.imul(q,Qe),c=Math.imul(q,Je),c=c+Math.imul(Q,Qe)|0,v=Math.imul(Q,Je),A=A+Math.imul(O,Xe)|0,c=c+Math.imul(O,et)|0,c=c+Math.imul(L,Xe)|0,v=v+Math.imul(L,et)|0,A=A+Math.imul(ue,tt)|0,c=c+Math.imul(ue,it)|0,c=c+Math.imul(h,tt)|0,v=v+Math.imul(h,it)|0;var Qr=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Qr>>>26)|0,Qr&=67108863,A=Math.imul(Ae,Qe),c=Math.imul(Ae,Je),c=c+Math.imul(X,Qe)|0,v=Math.imul(X,Je),A=A+Math.imul(q,Xe)|0,c=c+Math.imul(q,et)|0,c=c+Math.imul(Q,Xe)|0,v=v+Math.imul(Q,et)|0,A=A+Math.imul(O,tt)|0,c=c+Math.imul(O,it)|0,c=c+Math.imul(L,tt)|0,v=v+Math.imul(L,it)|0,A=A+Math.imul(ue,rt)|0,c=c+Math.imul(ue,nt)|0,c=c+Math.imul(h,rt)|0,v=v+Math.imul(h,nt)|0;var Jr=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Jr>>>26)|0,Jr&=67108863,A=Math.imul(Be,Qe),c=Math.imul(Be,Je),c=c+Math.imul(We,Qe)|0,v=Math.imul(We,Je),A=A+Math.imul(Ae,Xe)|0,c=c+Math.imul(Ae,et)|0,c=c+Math.imul(X,Xe)|0,v=v+Math.imul(X,et)|0,A=A+Math.imul(q,tt)|0,c=c+Math.imul(q,it)|0,c=c+Math.imul(Q,tt)|0,v=v+Math.imul(Q,it)|0,A=A+Math.imul(O,rt)|0,c=c+Math.imul(O,nt)|0,c=c+Math.imul(L,rt)|0,v=v+Math.imul(L,nt)|0,A=A+Math.imul(ue,ot)|0,c=c+Math.imul(ue,st)|0,c=c+Math.imul(h,ot)|0,v=v+Math.imul(h,st)|0;var Xr=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Xr>>>26)|0,Xr&=67108863,A=Math.imul(je,Qe),c=Math.imul(je,Je),c=c+Math.imul(Fe,Qe)|0,v=Math.imul(Fe,Je),A=A+Math.imul(Be,Xe)|0,c=c+Math.imul(Be,et)|0,c=c+Math.imul(We,Xe)|0,v=v+Math.imul(We,et)|0,A=A+Math.imul(Ae,tt)|0,c=c+Math.imul(Ae,it)|0,c=c+Math.imul(X,tt)|0,v=v+Math.imul(X,it)|0,A=A+Math.imul(q,rt)|0,c=c+Math.imul(q,nt)|0,c=c+Math.imul(Q,rt)|0,v=v+Math.imul(Q,nt)|0,A=A+Math.imul(O,ot)|0,c=c+Math.imul(O,st)|0,c=c+Math.imul(L,ot)|0,v=v+Math.imul(L,st)|0,A=A+Math.imul(ue,at)|0,c=c+Math.imul(ue,lt)|0,c=c+Math.imul(h,at)|0,v=v+Math.imul(h,lt)|0;var en=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(en>>>26)|0,en&=67108863,A=Math.imul(ze,Qe),c=Math.imul(ze,Je),c=c+Math.imul(He,Qe)|0,v=Math.imul(He,Je),A=A+Math.imul(je,Xe)|0,c=c+Math.imul(je,et)|0,c=c+Math.imul(Fe,Xe)|0,v=v+Math.imul(Fe,et)|0,A=A+Math.imul(Be,tt)|0,c=c+Math.imul(Be,it)|0,c=c+Math.imul(We,tt)|0,v=v+Math.imul(We,it)|0,A=A+Math.imul(Ae,rt)|0,c=c+Math.imul(Ae,nt)|0,c=c+Math.imul(X,rt)|0,v=v+Math.imul(X,nt)|0,A=A+Math.imul(q,ot)|0,c=c+Math.imul(q,st)|0,c=c+Math.imul(Q,ot)|0,v=v+Math.imul(Q,st)|0,A=A+Math.imul(O,at)|0,c=c+Math.imul(O,lt)|0,c=c+Math.imul(L,at)|0,v=v+Math.imul(L,lt)|0,A=A+Math.imul(ue,ct)|0,c=c+Math.imul(ue,ut)|0,c=c+Math.imul(h,ct)|0,v=v+Math.imul(h,ut)|0;var fc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(fc>>>26)|0,fc&=67108863,A=Math.imul(Ve,Qe),c=Math.imul(Ve,Je),c=c+Math.imul(Ze,Qe)|0,v=Math.imul(Ze,Je),A=A+Math.imul(ze,Xe)|0,c=c+Math.imul(ze,et)|0,c=c+Math.imul(He,Xe)|0,v=v+Math.imul(He,et)|0,A=A+Math.imul(je,tt)|0,c=c+Math.imul(je,it)|0,c=c+Math.imul(Fe,tt)|0,v=v+Math.imul(Fe,it)|0,A=A+Math.imul(Be,rt)|0,c=c+Math.imul(Be,nt)|0,c=c+Math.imul(We,rt)|0,v=v+Math.imul(We,nt)|0,A=A+Math.imul(Ae,ot)|0,c=c+Math.imul(Ae,st)|0,c=c+Math.imul(X,ot)|0,v=v+Math.imul(X,st)|0,A=A+Math.imul(q,at)|0,c=c+Math.imul(q,lt)|0,c=c+Math.imul(Q,at)|0,v=v+Math.imul(Q,lt)|0,A=A+Math.imul(O,ct)|0,c=c+Math.imul(O,ut)|0,c=c+Math.imul(L,ct)|0,v=v+Math.imul(L,ut)|0,A=A+Math.imul(ue,dt)|0,c=c+Math.imul(ue,ht)|0,c=c+Math.imul(h,dt)|0,v=v+Math.imul(h,ht)|0;var wc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(wc>>>26)|0,wc&=67108863,A=Math.imul(Ge,Qe),c=Math.imul(Ge,Je),c=c+Math.imul(qe,Qe)|0,v=Math.imul(qe,Je),A=A+Math.imul(Ve,Xe)|0,c=c+Math.imul(Ve,et)|0,c=c+Math.imul(Ze,Xe)|0,v=v+Math.imul(Ze,et)|0,A=A+Math.imul(ze,tt)|0,c=c+Math.imul(ze,it)|0,c=c+Math.imul(He,tt)|0,v=v+Math.imul(He,it)|0,A=A+Math.imul(je,rt)|0,c=c+Math.imul(je,nt)|0,c=c+Math.imul(Fe,rt)|0,v=v+Math.imul(Fe,nt)|0,A=A+Math.imul(Be,ot)|0,c=c+Math.imul(Be,st)|0,c=c+Math.imul(We,ot)|0,v=v+Math.imul(We,st)|0,A=A+Math.imul(Ae,at)|0,c=c+Math.imul(Ae,lt)|0,c=c+Math.imul(X,at)|0,v=v+Math.imul(X,lt)|0,A=A+Math.imul(q,ct)|0,c=c+Math.imul(q,ut)|0,c=c+Math.imul(Q,ct)|0,v=v+Math.imul(Q,ut)|0,A=A+Math.imul(O,dt)|0,c=c+Math.imul(O,ht)|0,c=c+Math.imul(L,dt)|0,v=v+Math.imul(L,ht)|0,A=A+Math.imul(ue,pt)|0,c=c+Math.imul(ue,ft)|0,c=c+Math.imul(h,pt)|0,v=v+Math.imul(h,ft)|0;var gc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(gc>>>26)|0,gc&=67108863,A=Math.imul(Ke,Qe),c=Math.imul(Ke,Je),c=c+Math.imul(Ye,Qe)|0,v=Math.imul(Ye,Je),A=A+Math.imul(Ge,Xe)|0,c=c+Math.imul(Ge,et)|0,c=c+Math.imul(qe,Xe)|0,v=v+Math.imul(qe,et)|0,A=A+Math.imul(Ve,tt)|0,c=c+Math.imul(Ve,it)|0,c=c+Math.imul(Ze,tt)|0,v=v+Math.imul(Ze,it)|0,A=A+Math.imul(ze,rt)|0,c=c+Math.imul(ze,nt)|0,c=c+Math.imul(He,rt)|0,v=v+Math.imul(He,nt)|0,A=A+Math.imul(je,ot)|0,c=c+Math.imul(je,st)|0,c=c+Math.imul(Fe,ot)|0,v=v+Math.imul(Fe,st)|0,A=A+Math.imul(Be,at)|0,c=c+Math.imul(Be,lt)|0,c=c+Math.imul(We,at)|0,v=v+Math.imul(We,lt)|0,A=A+Math.imul(Ae,ct)|0,c=c+Math.imul(Ae,ut)|0,c=c+Math.imul(X,ct)|0,v=v+Math.imul(X,ut)|0,A=A+Math.imul(q,dt)|0,c=c+Math.imul(q,ht)|0,c=c+Math.imul(Q,dt)|0,v=v+Math.imul(Q,ht)|0,A=A+Math.imul(O,pt)|0,c=c+Math.imul(O,ft)|0,c=c+Math.imul(L,pt)|0,v=v+Math.imul(L,ft)|0,A=A+Math.imul(ue,wt)|0,c=c+Math.imul(ue,gt)|0,c=c+Math.imul(h,wt)|0,v=v+Math.imul(h,gt)|0;var mc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(mc>>>26)|0,mc&=67108863,A=Math.imul(Ke,Xe),c=Math.imul(Ke,et),c=c+Math.imul(Ye,Xe)|0,v=Math.imul(Ye,et),A=A+Math.imul(Ge,tt)|0,c=c+Math.imul(Ge,it)|0,c=c+Math.imul(qe,tt)|0,v=v+Math.imul(qe,it)|0,A=A+Math.imul(Ve,rt)|0,c=c+Math.imul(Ve,nt)|0,c=c+Math.imul(Ze,rt)|0,v=v+Math.imul(Ze,nt)|0,A=A+Math.imul(ze,ot)|0,c=c+Math.imul(ze,st)|0,c=c+Math.imul(He,ot)|0,v=v+Math.imul(He,st)|0,A=A+Math.imul(je,at)|0,c=c+Math.imul(je,lt)|0,c=c+Math.imul(Fe,at)|0,v=v+Math.imul(Fe,lt)|0,A=A+Math.imul(Be,ct)|0,c=c+Math.imul(Be,ut)|0,c=c+Math.imul(We,ct)|0,v=v+Math.imul(We,ut)|0,A=A+Math.imul(Ae,dt)|0,c=c+Math.imul(Ae,ht)|0,c=c+Math.imul(X,dt)|0,v=v+Math.imul(X,ht)|0,A=A+Math.imul(q,pt)|0,c=c+Math.imul(q,ft)|0,c=c+Math.imul(Q,pt)|0,v=v+Math.imul(Q,ft)|0,A=A+Math.imul(O,wt)|0,c=c+Math.imul(O,gt)|0,c=c+Math.imul(L,wt)|0,v=v+Math.imul(L,gt)|0;var vc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(vc>>>26)|0,vc&=67108863,A=Math.imul(Ke,tt),c=Math.imul(Ke,it),c=c+Math.imul(Ye,tt)|0,v=Math.imul(Ye,it),A=A+Math.imul(Ge,rt)|0,c=c+Math.imul(Ge,nt)|0,c=c+Math.imul(qe,rt)|0,v=v+Math.imul(qe,nt)|0,A=A+Math.imul(Ve,ot)|0,c=c+Math.imul(Ve,st)|0,c=c+Math.imul(Ze,ot)|0,v=v+Math.imul(Ze,st)|0,A=A+Math.imul(ze,at)|0,c=c+Math.imul(ze,lt)|0,c=c+Math.imul(He,at)|0,v=v+Math.imul(He,lt)|0,A=A+Math.imul(je,ct)|0,c=c+Math.imul(je,ut)|0,c=c+Math.imul(Fe,ct)|0,v=v+Math.imul(Fe,ut)|0,A=A+Math.imul(Be,dt)|0,c=c+Math.imul(Be,ht)|0,c=c+Math.imul(We,dt)|0,v=v+Math.imul(We,ht)|0,A=A+Math.imul(Ae,pt)|0,c=c+Math.imul(Ae,ft)|0,c=c+Math.imul(X,pt)|0,v=v+Math.imul(X,ft)|0,A=A+Math.imul(q,wt)|0,c=c+Math.imul(q,gt)|0,c=c+Math.imul(Q,wt)|0,v=v+Math.imul(Q,gt)|0;var bc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(bc>>>26)|0,bc&=67108863,A=Math.imul(Ke,rt),c=Math.imul(Ke,nt),c=c+Math.imul(Ye,rt)|0,v=Math.imul(Ye,nt),A=A+Math.imul(Ge,ot)|0,c=c+Math.imul(Ge,st)|0,c=c+Math.imul(qe,ot)|0,v=v+Math.imul(qe,st)|0,A=A+Math.imul(Ve,at)|0,c=c+Math.imul(Ve,lt)|0,c=c+Math.imul(Ze,at)|0,v=v+Math.imul(Ze,lt)|0,A=A+Math.imul(ze,ct)|0,c=c+Math.imul(ze,ut)|0,c=c+Math.imul(He,ct)|0,v=v+Math.imul(He,ut)|0,A=A+Math.imul(je,dt)|0,c=c+Math.imul(je,ht)|0,c=c+Math.imul(Fe,dt)|0,v=v+Math.imul(Fe,ht)|0,A=A+Math.imul(Be,pt)|0,c=c+Math.imul(Be,ft)|0,c=c+Math.imul(We,pt)|0,v=v+Math.imul(We,ft)|0,A=A+Math.imul(Ae,wt)|0,c=c+Math.imul(Ae,gt)|0,c=c+Math.imul(X,wt)|0,v=v+Math.imul(X,gt)|0;var yc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(yc>>>26)|0,yc&=67108863,A=Math.imul(Ke,ot),c=Math.imul(Ke,st),c=c+Math.imul(Ye,ot)|0,v=Math.imul(Ye,st),A=A+Math.imul(Ge,at)|0,c=c+Math.imul(Ge,lt)|0,c=c+Math.imul(qe,at)|0,v=v+Math.imul(qe,lt)|0,A=A+Math.imul(Ve,ct)|0,c=c+Math.imul(Ve,ut)|0,c=c+Math.imul(Ze,ct)|0,v=v+Math.imul(Ze,ut)|0,A=A+Math.imul(ze,dt)|0,c=c+Math.imul(ze,ht)|0,c=c+Math.imul(He,dt)|0,v=v+Math.imul(He,ht)|0,A=A+Math.imul(je,pt)|0,c=c+Math.imul(je,ft)|0,c=c+Math.imul(Fe,pt)|0,v=v+Math.imul(Fe,ft)|0,A=A+Math.imul(Be,wt)|0,c=c+Math.imul(Be,gt)|0,c=c+Math.imul(We,wt)|0,v=v+Math.imul(We,gt)|0;var xc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(xc>>>26)|0,xc&=67108863,A=Math.imul(Ke,at),c=Math.imul(Ke,lt),c=c+Math.imul(Ye,at)|0,v=Math.imul(Ye,lt),A=A+Math.imul(Ge,ct)|0,c=c+Math.imul(Ge,ut)|0,c=c+Math.imul(qe,ct)|0,v=v+Math.imul(qe,ut)|0,A=A+Math.imul(Ve,dt)|0,c=c+Math.imul(Ve,ht)|0,c=c+Math.imul(Ze,dt)|0,v=v+Math.imul(Ze,ht)|0,A=A+Math.imul(ze,pt)|0,c=c+Math.imul(ze,ft)|0,c=c+Math.imul(He,pt)|0,v=v+Math.imul(He,ft)|0,A=A+Math.imul(je,wt)|0,c=c+Math.imul(je,gt)|0,c=c+Math.imul(Fe,wt)|0,v=v+Math.imul(Fe,gt)|0;var Cc=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Cc>>>26)|0,Cc&=67108863,A=Math.imul(Ke,ct),c=Math.imul(Ke,ut),c=c+Math.imul(Ye,ct)|0,v=Math.imul(Ye,ut),A=A+Math.imul(Ge,dt)|0,c=c+Math.imul(Ge,ht)|0,c=c+Math.imul(qe,dt)|0,v=v+Math.imul(qe,ht)|0,A=A+Math.imul(Ve,pt)|0,c=c+Math.imul(Ve,ft)|0,c=c+Math.imul(Ze,pt)|0,v=v+Math.imul(Ze,ft)|0,A=A+Math.imul(ze,wt)|0,c=c+Math.imul(ze,gt)|0,c=c+Math.imul(He,wt)|0,v=v+Math.imul(He,gt)|0;var Ac=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Ac>>>26)|0,Ac&=67108863,A=Math.imul(Ke,dt),c=Math.imul(Ke,ht),c=c+Math.imul(Ye,dt)|0,v=Math.imul(Ye,ht),A=A+Math.imul(Ge,pt)|0,c=c+Math.imul(Ge,ft)|0,c=c+Math.imul(qe,pt)|0,v=v+Math.imul(qe,ft)|0,A=A+Math.imul(Ve,wt)|0,c=c+Math.imul(Ve,gt)|0,c=c+Math.imul(Ze,wt)|0,v=v+Math.imul(Ze,gt)|0;var _c=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(_c>>>26)|0,_c&=67108863,A=Math.imul(Ke,pt),c=Math.imul(Ke,ft),c=c+Math.imul(Ye,pt)|0,v=Math.imul(Ye,ft),A=A+Math.imul(Ge,wt)|0,c=c+Math.imul(Ge,gt)|0,c=c+Math.imul(qe,wt)|0,v=v+Math.imul(qe,gt)|0;var Ec=(R+A|0)+((c&8191)<<13)|0;R=(v+(c>>>13)|0)+(Ec>>>26)|0,Ec&=67108863,A=Math.imul(Ke,wt),c=Math.imul(Ke,gt),c=c+Math.imul(Ye,wt)|0,v=Math.imul(Ye,gt);var Sc=(R+A|0)+((c&8191)<<13)|0;return R=(v+(c>>>13)|0)+(Sc>>>26)|0,Sc&=67108863,T[0]=Kr,T[1]=Yr,T[2]=Qr,T[3]=Jr,T[4]=Xr,T[5]=en,T[6]=fc,T[7]=wc,T[8]=gc,T[9]=mc,T[10]=vc,T[11]=bc,T[12]=yc,T[13]=xc,T[14]=Cc,T[15]=Ac,T[16]=_c,T[17]=Ec,T[18]=Sc,R!==0&&(T[19]=R,f.length++),f};Math.imul||(ne=te);function fe(l,d,f){f.negative=d.negative^l.negative,f.length=l.length+d.length;for(var y=0,_=0,T=0;T<f.length-1;T++){var R=_;_=0;for(var A=y&67108863,c=Math.min(T,d.length-1),v=Math.max(0,T-l.length+1);v<=c;v++){var ve=T-v,ue=l.words[ve]|0,h=d.words[v]|0,M=ue*h,O=M&67108863;R=R+(M/67108864|0)|0,O=O+A|0,A=O&67108863,R=R+(O>>>26)|0,_+=R>>>26,R&=67108863}f.words[T]=A,y=R,R=_}return y!==0?f.words[T]=y:f.length--,f._strip()}function oe(l,d,f){return fe(l,d,f)}n.prototype.mulTo=function(l,d){var f,y=this.length+l.length;return this.length===10&&l.length===10?f=ne(this,l,d):y<63?f=te(this,l,d):y<1024?f=fe(this,l,d):f=oe(this,l,d),f},n.prototype.mul=function(l){var d=new n(null);return d.words=new Array(this.length+l.length),this.mulTo(l,d)},n.prototype.mulf=function(l){var d=new n(null);return d.words=new Array(this.length+l.length),oe(this,l,d)},n.prototype.imul=function(l){return this.clone().mulTo(l,this)},n.prototype.imuln=function(l){var d=l<0;d&&(l=-l),r(typeof l=="number"),r(l<67108864);for(var f=0,y=0;y<this.length;y++){var _=(this.words[y]|0)*l,T=(_&67108863)+(f&67108863);f>>=26,f+=_/67108864|0,f+=T>>>26,this.words[y]=T&67108863}return f!==0&&(this.words[y]=f,this.length++),d?this.ineg():this},n.prototype.muln=function(l){return this.clone().imuln(l)},n.prototype.sqr=function(){return this.mul(this)},n.prototype.isqr=function(){return this.imul(this.clone())},n.prototype.pow=function(l){var d=D(l);if(d.length===0)return new n(1);for(var f=this,y=0;y<d.length&&d[y]===0;y++,f=f.sqr());if(++y<d.length)for(var _=f.sqr();y<d.length;y++,_=_.sqr())d[y]!==0&&(f=f.mul(_));return f},n.prototype.iushln=function(l){r(typeof l=="number"&&l>=0);var d=l%26,f=(l-d)/26,y=67108863>>>26-d<<26-d,_;if(d!==0){var T=0;for(_=0;_<this.length;_++){var R=this.words[_]&y,A=(this.words[_]|0)-R<<d;this.words[_]=A|T,T=R>>>26-d}T&&(this.words[_]=T,this.length++)}if(f!==0){for(_=this.length-1;_>=0;_--)this.words[_+f]=this.words[_];for(_=0;_<f;_++)this.words[_]=0;this.length+=f}return this._strip()},n.prototype.ishln=function(l){return r(this.negative===0),this.iushln(l)},n.prototype.iushrn=function(l,d,f){r(typeof l=="number"&&l>=0);var y;d?y=(d-d%26)/26:y=0;var _=l%26,T=Math.min((l-_)/26,this.length),R=67108863^67108863>>>_<<_,A=f;if(y-=T,y=Math.max(0,y),A){for(var c=0;c<T;c++)A.words[c]=this.words[c];A.length=T}if(T!==0)if(this.length>T)for(this.length-=T,c=0;c<this.length;c++)this.words[c]=this.words[c+T];else this.words[0]=0,this.length=1;var v=0;for(c=this.length-1;c>=0&&(v!==0||c>=y);c--){var ve=this.words[c]|0;this.words[c]=v<<26-_|ve>>>_,v=ve&R}return A&&v!==0&&(A.words[A.length++]=v),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},n.prototype.ishrn=function(l,d,f){return r(this.negative===0),this.iushrn(l,d,f)},n.prototype.shln=function(l){return this.clone().ishln(l)},n.prototype.ushln=function(l){return this.clone().iushln(l)},n.prototype.shrn=function(l){return this.clone().ishrn(l)},n.prototype.ushrn=function(l){return this.clone().iushrn(l)},n.prototype.testn=function(l){r(typeof l=="number"&&l>=0);var d=l%26,f=(l-d)/26,y=1<<d;if(this.length<=f)return!1;var _=this.words[f];return!!(_&y)},n.prototype.imaskn=function(l){r(typeof l=="number"&&l>=0);var d=l%26,f=(l-d)/26;if(r(this.negative===0,"imaskn works only with positive numbers"),this.length<=f)return this;if(d!==0&&f++,this.length=Math.min(f,this.length),d!==0){var y=67108863^67108863>>>d<<d;this.words[this.length-1]&=y}return this._strip()},n.prototype.maskn=function(l){return this.clone().imaskn(l)},n.prototype.iaddn=function(l){return r(typeof l=="number"),r(l<67108864),l<0?this.isubn(-l):this.negative!==0?this.length===1&&(this.words[0]|0)<=l?(this.words[0]=l-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(l),this.negative=1,this):this._iaddn(l)},n.prototype._iaddn=function(l){this.words[0]+=l;for(var d=0;d<this.length&&this.words[d]>=67108864;d++)this.words[d]-=67108864,d===this.length-1?this.words[d+1]=1:this.words[d+1]++;return this.length=Math.max(this.length,d+1),this},n.prototype.isubn=function(l){if(r(typeof l=="number"),r(l<67108864),l<0)return this.iaddn(-l);if(this.negative!==0)return this.negative=0,this.iaddn(l),this.negative=1,this;if(this.words[0]-=l,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var d=0;d<this.length&&this.words[d]<0;d++)this.words[d]+=67108864,this.words[d+1]-=1;return this._strip()},n.prototype.addn=function(l){return this.clone().iaddn(l)},n.prototype.subn=function(l){return this.clone().isubn(l)},n.prototype.iabs=function(){return this.negative=0,this},n.prototype.abs=function(){return this.clone().iabs()},n.prototype._ishlnsubmul=function(l,d,f){var y=l.length+f,_;this._expand(y);var T,R=0;for(_=0;_<l.length;_++){T=(this.words[_+f]|0)+R;var A=(l.words[_]|0)*d;T-=A&67108863,R=(T>>26)-(A/67108864|0),this.words[_+f]=T&67108863}for(;_<this.length-f;_++)T=(this.words[_+f]|0)+R,R=T>>26,this.words[_+f]=T&67108863;if(R===0)return this._strip();for(r(R===-1),R=0,_=0;_<this.length;_++)T=-(this.words[_]|0)+R,R=T>>26,this.words[_]=T&67108863;return this.negative=1,this._strip()},n.prototype._wordDiv=function(l,d){var f=this.length-l.length,y=this.clone(),_=l,T=_.words[_.length-1]|0,R=this._countBits(T);f=26-R,f!==0&&(_=_.ushln(f),y.iushln(f),T=_.words[_.length-1]|0);var A=y.length-_.length,c;if(d!=="mod"){c=new n(null),c.length=A+1,c.words=new Array(c.length);for(var v=0;v<c.length;v++)c.words[v]=0}var ve=y.clone()._ishlnsubmul(_,1,A);ve.negative===0&&(y=ve,c&&(c.words[A]=1));for(var ue=A-1;ue>=0;ue--){var h=(y.words[_.length+ue]|0)*67108864+(y.words[_.length+ue-1]|0);for(h=Math.min(h/T|0,67108863),y._ishlnsubmul(_,h,ue);y.negative!==0;)h--,y.negative=0,y._ishlnsubmul(_,1,ue),y.isZero()||(y.negative^=1);c&&(c.words[ue]=h)}return c&&c._strip(),y._strip(),d!=="div"&&f!==0&&y.iushrn(f),{div:c||null,mod:y}},n.prototype.divmod=function(l,d,f){if(r(!l.isZero()),this.isZero())return{div:new n(0),mod:new n(0)};var y,_,T;return this.negative!==0&&l.negative===0?(T=this.neg().divmod(l,d),d!=="mod"&&(y=T.div.neg()),d!=="div"&&(_=T.mod.neg(),f&&_.negative!==0&&_.iadd(l)),{div:y,mod:_}):this.negative===0&&l.negative!==0?(T=this.divmod(l.neg(),d),d!=="mod"&&(y=T.div.neg()),{div:y,mod:T.mod}):this.negative&l.negative?(T=this.neg().divmod(l.neg(),d),d!=="div"&&(_=T.mod.neg(),f&&_.negative!==0&&_.isub(l)),{div:T.div,mod:_}):l.length>this.length||this.cmp(l)<0?{div:new n(0),mod:this}:l.length===1?d==="div"?{div:this.divn(l.words[0]),mod:null}:d==="mod"?{div:null,mod:new n(this.modrn(l.words[0]))}:{div:this.divn(l.words[0]),mod:new n(this.modrn(l.words[0]))}:this._wordDiv(l,d)},n.prototype.div=function(l){return this.divmod(l,"div",!1).div},n.prototype.mod=function(l){return this.divmod(l,"mod",!1).mod},n.prototype.umod=function(l){return this.divmod(l,"mod",!0).mod},n.prototype.divRound=function(l){var d=this.divmod(l);if(d.mod.isZero())return d.div;var f=d.div.negative!==0?d.mod.isub(l):d.mod,y=l.ushrn(1),_=l.andln(1),T=f.cmp(y);return T<0||_===1&&T===0?d.div:d.div.negative!==0?d.div.isubn(1):d.div.iaddn(1)},n.prototype.modrn=function(l){var d=l<0;d&&(l=-l),r(l<=67108863);for(var f=(1<<26)%l,y=0,_=this.length-1;_>=0;_--)y=(f*y+(this.words[_]|0))%l;return d?-y:y},n.prototype.modn=function(l){return this.modrn(l)},n.prototype.idivn=function(l){var d=l<0;d&&(l=-l),r(l<=67108863);for(var f=0,y=this.length-1;y>=0;y--){var _=(this.words[y]|0)+f*67108864;this.words[y]=_/l|0,f=_%l}return this._strip(),d?this.ineg():this},n.prototype.divn=function(l){return this.clone().idivn(l)},n.prototype.egcd=function(l){r(l.negative===0),r(!l.isZero());var d=this,f=l.clone();d.negative!==0?d=d.umod(l):d=d.clone();for(var y=new n(1),_=new n(0),T=new n(0),R=new n(1),A=0;d.isEven()&&f.isEven();)d.iushrn(1),f.iushrn(1),++A;for(var c=f.clone(),v=d.clone();!d.isZero();){for(var ve=0,ue=1;!(d.words[0]&ue)&&ve<26;++ve,ue<<=1);if(ve>0)for(d.iushrn(ve);ve-- >0;)(y.isOdd()||_.isOdd())&&(y.iadd(c),_.isub(v)),y.iushrn(1),_.iushrn(1);for(var h=0,M=1;!(f.words[0]&M)&&h<26;++h,M<<=1);if(h>0)for(f.iushrn(h);h-- >0;)(T.isOdd()||R.isOdd())&&(T.iadd(c),R.isub(v)),T.iushrn(1),R.iushrn(1);d.cmp(f)>=0?(d.isub(f),y.isub(T),_.isub(R)):(f.isub(d),T.isub(y),R.isub(_))}return{a:T,b:R,gcd:f.iushln(A)}},n.prototype._invmp=function(l){r(l.negative===0),r(!l.isZero());var d=this,f=l.clone();d.negative!==0?d=d.umod(l):d=d.clone();for(var y=new n(1),_=new n(0),T=f.clone();d.cmpn(1)>0&&f.cmpn(1)>0;){for(var R=0,A=1;!(d.words[0]&A)&&R<26;++R,A<<=1);if(R>0)for(d.iushrn(R);R-- >0;)y.isOdd()&&y.iadd(T),y.iushrn(1);for(var c=0,v=1;!(f.words[0]&v)&&c<26;++c,v<<=1);if(c>0)for(f.iushrn(c);c-- >0;)_.isOdd()&&_.iadd(T),_.iushrn(1);d.cmp(f)>=0?(d.isub(f),y.isub(_)):(f.isub(d),_.isub(y))}var ve;return d.cmpn(1)===0?ve=y:ve=_,ve.cmpn(0)<0&&ve.iadd(l),ve},n.prototype.gcd=function(l){if(this.isZero())return l.abs();if(l.isZero())return this.abs();var d=this.clone(),f=l.clone();d.negative=0,f.negative=0;for(var y=0;d.isEven()&&f.isEven();y++)d.iushrn(1),f.iushrn(1);do{for(;d.isEven();)d.iushrn(1);for(;f.isEven();)f.iushrn(1);var _=d.cmp(f);if(_<0){var T=d;d=f,f=T}else if(_===0||f.cmpn(1)===0)break;d.isub(f)}while(!0);return f.iushln(y)},n.prototype.invm=function(l){return this.egcd(l).a.umod(l)},n.prototype.isEven=function(){return(this.words[0]&1)===0},n.prototype.isOdd=function(){return(this.words[0]&1)===1},n.prototype.andln=function(l){return this.words[0]&l},n.prototype.bincn=function(l){r(typeof l=="number");var d=l%26,f=(l-d)/26,y=1<<d;if(this.length<=f)return this._expand(f+1),this.words[f]|=y,this;for(var _=y,T=f;_!==0&&T<this.length;T++){var R=this.words[T]|0;R+=_,_=R>>>26,R&=67108863,this.words[T]=R}return _!==0&&(this.words[T]=_,this.length++),this},n.prototype.isZero=function(){return this.length===1&&this.words[0]===0},n.prototype.cmpn=function(l){var d=l<0;if(this.negative!==0&&!d)return-1;if(this.negative===0&&d)return 1;this._strip();var f;if(this.length>1)f=1;else{d&&(l=-l),r(l<=67108863,"Number is too big");var y=this.words[0]|0;f=y===l?0:y<l?-1:1}return this.negative!==0?-f|0:f},n.prototype.cmp=function(l){if(this.negative!==0&&l.negative===0)return-1;if(this.negative===0&&l.negative!==0)return 1;var d=this.ucmp(l);return this.negative!==0?-d|0:d},n.prototype.ucmp=function(l){if(this.length>l.length)return 1;if(this.length<l.length)return-1;for(var d=0,f=this.length-1;f>=0;f--){var y=this.words[f]|0,_=l.words[f]|0;if(y!==_){y<_?d=-1:y>_&&(d=1);break}}return d},n.prototype.gtn=function(l){return this.cmpn(l)===1},n.prototype.gt=function(l){return this.cmp(l)===1},n.prototype.gten=function(l){return this.cmpn(l)>=0},n.prototype.gte=function(l){return this.cmp(l)>=0},n.prototype.ltn=function(l){return this.cmpn(l)===-1},n.prototype.lt=function(l){return this.cmp(l)===-1},n.prototype.lten=function(l){return this.cmpn(l)<=0},n.prototype.lte=function(l){return this.cmp(l)<=0},n.prototype.eqn=function(l){return this.cmpn(l)===0},n.prototype.eq=function(l){return this.cmp(l)===0},n.red=function(l){return new De(l)},n.prototype.toRed=function(l){return r(!this.red,"Already a number in reduction context"),r(this.negative===0,"red works only with positives"),l.convertTo(this)._forceRed(l)},n.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},n.prototype._forceRed=function(l){return this.red=l,this},n.prototype.forceRed=function(l){return r(!this.red,"Already a number in reduction context"),this._forceRed(l)},n.prototype.redAdd=function(l){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,l)},n.prototype.redIAdd=function(l){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,l)},n.prototype.redSub=function(l){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,l)},n.prototype.redISub=function(l){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,l)},n.prototype.redShl=function(l){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,l)},n.prototype.redMul=function(l){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,l),this.red.mul(this,l)},n.prototype.redIMul=function(l){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,l),this.red.imul(this,l)},n.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},n.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},n.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},n.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},n.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},n.prototype.redPow=function(l){return r(this.red&&!l.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,l)};var be={k256:null,p224:null,p192:null,p25519:null};function _e(l,d){this.name=l,this.p=new n(d,16),this.n=this.p.bitLength(),this.k=new n(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}_e.prototype._tmp=function(){var l=new n(null);return l.words=new Array(Math.ceil(this.n/13)),l},_e.prototype.ireduce=function(l){var d=l,f;do this.split(d,this.tmp),d=this.imulK(d),d=d.iadd(this.tmp),f=d.bitLength();while(f>this.n);var y=f<this.n?-1:d.ucmp(this.p);return y===0?(d.words[0]=0,d.length=1):y>0?d.isub(this.p):d.strip!==void 0?d.strip():d._strip(),d},_e.prototype.split=function(l,d){l.iushrn(this.n,0,d)},_e.prototype.imulK=function(l){return l.imul(this.k)};function bt(){_e.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}o(bt,_e),bt.prototype.split=function(l,d){for(var f=4194303,y=Math.min(l.length,9),_=0;_<y;_++)d.words[_]=l.words[_];if(d.length=y,l.length<=9){l.words[0]=0,l.length=1;return}var T=l.words[9];for(d.words[d.length++]=T&f,_=10;_<l.length;_++){var R=l.words[_]|0;l.words[_-10]=(R&f)<<4|T>>>22,T=R}T>>>=22,l.words[_-10]=T,T===0&&l.length>10?l.length-=10:l.length-=9},bt.prototype.imulK=function(l){l.words[l.length]=0,l.words[l.length+1]=0,l.length+=2;for(var d=0,f=0;f<l.length;f++){var y=l.words[f]|0;d+=y*977,l.words[f]=d&67108863,d=y*64+(d/67108864|0)}return l.words[l.length-1]===0&&(l.length--,l.words[l.length-1]===0&&l.length--),l};function Oe(){_e.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}o(Oe,_e);function At(){_e.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}o(At,_e);function ki(){_e.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}o(ki,_e),ki.prototype.imulK=function(l){for(var d=0,f=0;f<l.length;f++){var y=(l.words[f]|0)*19+d,_=y&67108863;y>>>=26,l.words[f]=_,d=y}return d!==0&&(l.words[l.length++]=d),l},n._prime=function(l){if(be[l])return be[l];var d;if(l==="k256")d=new bt;else if(l==="p224")d=new Oe;else if(l==="p192")d=new At;else if(l==="p25519")d=new ki;else throw new Error("Unknown prime "+l);return be[l]=d,d};function De(l){if(typeof l=="string"){var d=n._prime(l);this.m=d.p,this.prime=d}else r(l.gtn(1),"modulus must be greater than 1"),this.m=l,this.prime=null}De.prototype._verify1=function(l){r(l.negative===0,"red works only with positives"),r(l.red,"red works only with red numbers")},De.prototype._verify2=function(l,d){r((l.negative|d.negative)===0,"red works only with positives"),r(l.red&&l.red===d.red,"red works only with red numbers")},De.prototype.imod=function(l){return this.prime?this.prime.ireduce(l)._forceRed(this):(b(l,l.umod(this.m)._forceRed(this)),l)},De.prototype.neg=function(l){return l.isZero()?l.clone():this.m.sub(l)._forceRed(this)},De.prototype.add=function(l,d){this._verify2(l,d);var f=l.add(d);return f.cmp(this.m)>=0&&f.isub(this.m),f._forceRed(this)},De.prototype.iadd=function(l,d){this._verify2(l,d);var f=l.iadd(d);return f.cmp(this.m)>=0&&f.isub(this.m),f},De.prototype.sub=function(l,d){this._verify2(l,d);var f=l.sub(d);return f.cmpn(0)<0&&f.iadd(this.m),f._forceRed(this)},De.prototype.isub=function(l,d){this._verify2(l,d);var f=l.isub(d);return f.cmpn(0)<0&&f.iadd(this.m),f},De.prototype.shl=function(l,d){return this._verify1(l),this.imod(l.ushln(d))},De.prototype.imul=function(l,d){return this._verify2(l,d),this.imod(l.imul(d))},De.prototype.mul=function(l,d){return this._verify2(l,d),this.imod(l.mul(d))},De.prototype.isqr=function(l){return this.imul(l,l.clone())},De.prototype.sqr=function(l){return this.mul(l,l)},De.prototype.sqrt=function(l){if(l.isZero())return l.clone();var d=this.m.andln(3);if(r(d%2===1),d===3){var f=this.m.add(new n(1)).iushrn(2);return this.pow(l,f)}for(var y=this.m.subn(1),_=0;!y.isZero()&&y.andln(1)===0;)_++,y.iushrn(1);r(!y.isZero());var T=new n(1).toRed(this),R=T.redNeg(),A=this.m.subn(1).iushrn(1),c=this.m.bitLength();for(c=new n(2*c*c).toRed(this);this.pow(c,A).cmp(R)!==0;)c.redIAdd(R);for(var v=this.pow(c,y),ve=this.pow(l,y.addn(1).iushrn(1)),ue=this.pow(l,y),h=_;ue.cmp(T)!==0;){for(var M=ue,O=0;M.cmp(T)!==0;O++)M=M.redSqr();r(O<h);var L=this.pow(v,new n(1).iushln(h-O-1));ve=ve.redMul(L),v=L.redSqr(),ue=ue.redMul(v),h=O}return ve},De.prototype.invm=function(l){var d=l._invmp(this.m);return d.negative!==0?(d.negative=0,this.imod(d).redNeg()):this.imod(d)},De.prototype.pow=function(l,d){if(d.isZero())return new n(1).toRed(this);if(d.cmpn(1)===0)return l.clone();var f=4,y=new Array(1<<f);y[0]=new n(1).toRed(this),y[1]=l;for(var _=2;_<y.length;_++)y[_]=this.mul(y[_-1],l);var T=y[0],R=0,A=0,c=d.bitLength()%26;for(c===0&&(c=26),_=d.length-1;_>=0;_--){for(var v=d.words[_],ve=c-1;ve>=0;ve--){var ue=v>>ve&1;if(T!==y[0]&&(T=this.sqr(T)),ue===0&&R===0){A=0;continue}R<<=1,R|=ue,A++,!(A!==f&&(_!==0||ve!==0))&&(T=this.mul(T,y[R]),A=0,R=0)}c=26}return T},De.prototype.convertTo=function(l){var d=l.umod(this.m);return d===l?d.clone():d},De.prototype.convertFrom=function(l){var d=l.clone();return d.red=null,d},n.mont=function(l){return new Ri(l)};function Ri(l){De.call(this,l),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new n(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}o(Ri,De),Ri.prototype.convertTo=function(l){return this.imod(l.ushln(this.shift))},Ri.prototype.convertFrom=function(l){var d=this.imod(l.mul(this.rinv));return d.red=null,d},Ri.prototype.imul=function(l,d){if(l.isZero()||d.isZero())return l.words[0]=0,l.length=1,l;var f=l.imul(d),y=f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),_=f.isub(y).iushrn(this.shift),T=_;return _.cmp(this.m)>=0?T=_.isub(this.m):_.cmpn(0)<0&&(T=_.iadd(this.m)),T._forceRed(this)},Ri.prototype.mul=function(l,d){if(l.isZero()||d.isZero())return new n(0)._forceRed(this);var f=l.mul(d),y=f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),_=f.isub(y).iushrn(this.shift),T=_;return _.cmp(this.m)>=0?T=_.isub(this.m):_.cmpn(0)<0&&(T=_.iadd(this.m)),T._forceRed(this)},Ri.prototype.invm=function(l){var d=this.imod(l._invmp(this.m).mul(this.r2));return d._forceRed(this)}})(i,yh)})(_h);var xe=_h.exports;const Eh="bignumber/5.7.0";var Ol=xe.BN;const Dr=new Zt(Eh),Kc={},Bd=9007199254740991;function C4(i){return i!=null&&(si.isBigNumber(i)||typeof i=="number"&&i%1===0||typeof i=="string"&&!!i.match(/^-?[0-9]+$/)||vi(i)||typeof i=="bigint"||Os(i))}let Wd=!1,si=class Vi{constructor(e,t){e!==Kc&&Dr.throwError("cannot call constructor directly; use BigNumber.from",Zt.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=t,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return ai(Ee(this).fromTwos(e))}toTwos(e){return ai(Ee(this).toTwos(e))}abs(){return this._hex[0]==="-"?Vi.from(this._hex.substring(1)):this}add(e){return ai(Ee(this).add(Ee(e)))}sub(e){return ai(Ee(this).sub(Ee(e)))}div(e){return Vi.from(e).isZero()&&$i("division-by-zero","div"),ai(Ee(this).div(Ee(e)))}mul(e){return ai(Ee(this).mul(Ee(e)))}mod(e){const t=Ee(e);return t.isNeg()&&$i("division-by-zero","mod"),ai(Ee(this).umod(t))}pow(e){const t=Ee(e);return t.isNeg()&&$i("negative-power","pow"),ai(Ee(this).pow(t))}and(e){const t=Ee(e);return(this.isNegative()||t.isNeg())&&$i("unbound-bitwise-result","and"),ai(Ee(this).and(t))}or(e){const t=Ee(e);return(this.isNegative()||t.isNeg())&&$i("unbound-bitwise-result","or"),ai(Ee(this).or(t))}xor(e){const t=Ee(e);return(this.isNegative()||t.isNeg())&&$i("unbound-bitwise-result","xor"),ai(Ee(this).xor(t))}mask(e){return(this.isNegative()||e<0)&&$i("negative-width","mask"),ai(Ee(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&$i("negative-width","shl"),ai(Ee(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&$i("negative-width","shr"),ai(Ee(this).shrn(e))}eq(e){return Ee(this).eq(Ee(e))}lt(e){return Ee(this).lt(Ee(e))}lte(e){return Ee(this).lte(Ee(e))}gt(e){return Ee(this).gt(Ee(e))}gte(e){return Ee(this).gte(Ee(e))}isNegative(){return this._hex[0]==="-"}isZero(){return Ee(this).isZero()}toNumber(){try{return Ee(this).toNumber()}catch{$i("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Dr.throwError("this platform does not support BigInt",Zt.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?Wd||(Wd=!0,Dr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?Dr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",Zt.errors.UNEXPECTED_ARGUMENT,{}):Dr.throwError("BigNumber.toString does not accept parameters",Zt.errors.UNEXPECTED_ARGUMENT,{})),Ee(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof Vi)return e;if(typeof e=="string")return e.match(/^-?0x[0-9a-f]+$/i)?new Vi(Kc,_a(e)):e.match(/^-?[0-9]+$/)?new Vi(Kc,_a(new Ol(e))):Dr.throwArgumentError("invalid BigNumber string","value",e);if(typeof e=="number")return e%1&&$i("underflow","BigNumber.from",e),(e>=Bd||e<=-Bd)&&$i("overflow","BigNumber.from",e),Vi.from(String(e));const t=e;if(typeof t=="bigint")return Vi.from(t.toString());if(Os(t))return Vi.from(ui(t));if(t)if(t.toHexString){const r=t.toHexString();if(typeof r=="string")return Vi.from(r)}else{let r=t._hex;if(r==null&&t.type==="BigNumber"&&(r=t.hex),typeof r=="string"&&(vi(r)||r[0]==="-"&&vi(r.substring(1))))return Vi.from(r)}return Dr.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!!(e&&e._isBigNumber)}};function _a(i){if(typeof i!="string")return _a(i.toString(16));if(i[0]==="-")return i=i.substring(1),i[0]==="-"&&Dr.throwArgumentError("invalid hex","value",i),i=_a(i),i==="0x00"?i:"-"+i;if(i.substring(0,2)!=="0x"&&(i="0x"+i),i==="0x")return"0x00";for(i.length%2&&(i="0x0"+i.substring(2));i.length>4&&i.substring(0,4)==="0x00";)i="0x"+i.substring(4);return i}function ai(i){return si.from(_a(i))}function Ee(i){const e=si.from(i).toHexString();return e[0]==="-"?new Ol("-"+e.substring(3),16):new Ol(e.substring(2),16)}function $i(i,e,t){const r={fault:i,operation:e};return t!=null&&(r.value=t),Dr.throwError(i,Zt.errors.NUMERIC_FAULT,r)}function A4(i){return new Ol(i,36).toString(16)}const ii=new Zt(Eh),ra={},Sh=si.from(0),Th=si.from(-1);function kh(i,e,t,r){const o={fault:e,operation:t};return r!==void 0&&(o.value=r),ii.throwError(i,Zt.errors.NUMERIC_FAULT,o)}let na="0";for(;na.length<256;)na+=na;function _0(i){if(typeof i!="number")try{i=si.from(i).toNumber()}catch{}return typeof i=="number"&&i>=0&&i<=256&&!(i%1)?"1"+na.substring(0,i):ii.throwArgumentError("invalid decimal size","decimals",i)}function Yc(i,e){e==null&&(e=0);const t=_0(e);i=si.from(i);const r=i.lt(Sh);r&&(i=i.mul(Th));let o=i.mod(t).toString();for(;o.length<t.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const n=i.div(t).toString();return t.length===1?i=n:i=n+"."+o,r&&(i="-"+i),i}function Mr(i,e){e==null&&(e=0);const t=_0(e);(typeof i!="string"||!i.match(/^-?[0-9.]+$/))&&ii.throwArgumentError("invalid decimal value","value",i);const r=i.substring(0,1)==="-";r&&(i=i.substring(1)),i==="."&&ii.throwArgumentError("missing value","value",i);const o=i.split(".");o.length>2&&ii.throwArgumentError("too many decimal points","value",i);let n=o[0],s=o[1];for(n||(n="0"),s||(s="0");s[s.length-1]==="0";)s=s.substring(0,s.length-1);for(s.length>t.length-1&&kh("fractional component exceeds decimals","underflow","parseFixed"),s===""&&(s="0");s.length<t.length-1;)s+="0";const a=si.from(n),u=si.from(s);let p=a.mul(t).add(u);return r&&(p=p.mul(Th)),p}class Qo{constructor(e,t,r,o){e!==ra&&ii.throwError("cannot use FixedFormat constructor; use FixedFormat.from",Zt.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=o,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(o),this._multiplier=_0(o),Object.freeze(this)}static from(e){if(e instanceof Qo)return e;typeof e=="number"&&(e=`fixed128x${e}`);let t=!0,r=128,o=18;if(typeof e=="string"){if(e!=="fixed")if(e==="ufixed")t=!1;else{const n=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||ii.throwArgumentError("invalid fixed format","format",e),t=n[1]!=="u",r=parseInt(n[2]),o=parseInt(n[3])}}else if(e){const n=(s,a,u)=>e[s]==null?u:(typeof e[s]!==a&&ii.throwArgumentError("invalid fixed format ("+s+" not "+a+")","format."+s,e[s]),e[s]);t=n("signed","boolean",t),r=n("width","number",r),o=n("decimals","number",o)}return r%8&&ii.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),o>80&&ii.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",o),new Qo(ra,t,r,o)}}class Ht{constructor(e,t,r,o){e!==ra&&ii.throwError("cannot use FixedNumber constructor; use FixedNumber.from",Zt.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=o,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&ii.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=Mr(this._value,this.format.decimals),r=Mr(e._value,e.format.decimals);return Ht.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=Mr(this._value,this.format.decimals),r=Mr(e._value,e.format.decimals);return Ht.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=Mr(this._value,this.format.decimals),r=Mr(e._value,e.format.decimals);return Ht.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=Mr(this._value,this.format.decimals),r=Mr(e._value,e.format.decimals);return Ht.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");e.length===1&&e.push("0");let t=Ht.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(jd.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");e.length===1&&e.push("0");let t=Ht.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(jd.toFormat(t.format))),t}round(e){e==null&&(e=0);const t=this.toString().split(".");if(t.length===1&&t.push("0"),(e<0||e>80||e%1)&&ii.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const r=Ht.from("1"+na.substring(0,e),this.format),o=_4.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(o).floor().divUnsafe(r)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(e){if(e==null)return this._hex;e%8&&ii.throwArgumentError("invalid byte width","width",e);const t=si.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return ur(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return Ht.fromString(this._value,e)}static fromValue(e,t,r){return r==null&&t!=null&&!C4(t)&&(r=t,t=null),t==null&&(t=0),r==null&&(r="fixed"),Ht.fromString(Yc(e,t),Qo.from(r))}static fromString(e,t){t==null&&(t="fixed");const r=Qo.from(t),o=Mr(e,r.decimals);!r.signed&&o.lt(Sh)&&kh("unsigned value cannot be negative","overflow","value",e);let n=null;r.signed?n=o.toTwos(r.width).toHexString():(n=o.toHexString(),n=ur(n,r.width/8));const s=Yc(o,r.decimals);return new Ht(ra,n,s,r)}static fromBytes(e,t){t==null&&(t="fixed");const r=Qo.from(t);if(xt(e).length>r.width/8)throw new Error("overflow");let o=si.from(e);r.signed&&(o=o.fromTwos(r.width));const n=o.toTwos((r.signed?0:1)+r.width).toHexString(),s=Yc(o,r.decimals);return new Ht(ra,n,s,r)}static from(e,t){if(typeof e=="string")return Ht.fromString(e,t);if(Os(e))return Ht.fromBytes(e,t);try{return Ht.fromValue(e,0,t)}catch(r){if(r.code!==Zt.errors.INVALID_ARGUMENT)throw r}return ii.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}const jd=Ht.from(1),_4=Ht.from("0.5"),E4="strings/5.7.0",S4=new Zt(E4);var Ml;(function(i){i.current="",i.NFC="NFC",i.NFD="NFD",i.NFKC="NFKC",i.NFKD="NFKD"})(Ml||(Ml={}));var Fd;(function(i){i.UNEXPECTED_CONTINUE="unexpected continuation byte",i.BAD_PREFIX="bad codepoint prefix",i.OVERRUN="string overrun",i.MISSING_CONTINUE="missing continuation byte",i.OUT_OF_RANGE="out of UTF-8 range",i.UTF16_SURROGATE="UTF-16 surrogate",i.OVERLONG="overlong representation"})(Fd||(Fd={}));function Qc(i,e=Ml.current){e!=Ml.current&&(S4.checkNormalize(),i=i.normalize(e));let t=[];for(let r=0;r<i.length;r++){const o=i.charCodeAt(r);if(o<128)t.push(o);else if(o<2048)t.push(o>>6|192),t.push(o&63|128);else if((o&64512)==55296){r++;const n=i.charCodeAt(r);if(r>=i.length||(n&64512)!==56320)throw new Error("invalid utf-8 string");const s=65536+((o&1023)<<10)+(n&1023);t.push(s>>18|240),t.push(s>>12&63|128),t.push(s>>6&63|128),t.push(s&63|128)}else t.push(o>>12|224),t.push(o>>6&63|128),t.push(o&63|128)}return xt(t)}function T4(i){if(i.length%4!==0)throw new Error("bad data");let e=[];for(let t=0;t<i.length;t+=4)e.push(parseInt(i.substring(t,t+4),16));return e}function Jc(i,e){e||(e=function(o){return[parseInt(o,16)]});let t=0,r={};return i.split(",").forEach(o=>{let n=o.split(":");t+=parseInt(n[0],16),r[t]=e(n[1])}),r}function zd(i){let e=0;return i.split(",").map(t=>{let r=t.split("-");r.length===1?r[1]="0":r[1]===""&&(r[1]="1");let o=e+parseInt(r[0],16);return e=parseInt(r[1],16),{l:o,h:e}})}zd("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(i=>parseInt(i,16)),Jc("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),Jc("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),Jc("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",T4),zd("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");function k4(i){i=atob(i);const e=[];for(let t=0;t<i.length;t++)e.push(i.charCodeAt(t));return xt(e)}function Rh(i,e){e==null&&(e=1);const t=[],r=t.forEach,o=function(n,s){r.call(n,function(a){s>0&&Array.isArray(a)?o(a,s-1):t.push(a)})};return o(i,e),t}function R4(i){const e={};for(let t=0;t<i.length;t++){const r=i[t];e[r[0]]=r[1]}return e}function I4(i){let e=0;function t(){return i[e++]<<8|i[e++]}let r=t(),o=1,n=[0,1];for(let be=1;be<r;be++)n.push(o+=t());let s=t(),a=e;e+=s;let u=0,p=0;function b(){return u==0&&(p=p<<8|i[e++],u=8),p>>--u&1}const C=31,x=Math.pow(2,C),S=x>>>1,k=S>>1,U=x-1;let D=0;for(let be=0;be<C;be++)D=D<<1|b();let te=[],ne=0,fe=x;for(;;){let be=Math.floor(((D-ne+1)*o-1)/fe),_e=0,bt=r;for(;bt-_e>1;){let ki=_e+bt>>>1;be<n[ki]?bt=ki:_e=ki}if(_e==0)break;te.push(_e);let Oe=ne+Math.floor(fe*n[_e]/o),At=ne+Math.floor(fe*n[_e+1]/o)-1;for(;!((Oe^At)&S);)D=D<<1&U|b(),Oe=Oe<<1&U,At=At<<1&U|1;for(;Oe&~At&k;)D=D&S|D<<1&U>>>1|b(),Oe=Oe<<1^S,At=(At^S)<<1|S|1;ne=Oe,fe=1+At-Oe}let oe=r-4;return te.map(be=>{switch(be-oe){case 3:return oe+65792+(i[a++]<<16|i[a++]<<8|i[a++]);case 2:return oe+256+(i[a++]<<8|i[a++]);case 1:return oe+i[a++];default:return be-1}})}function $4(i){let e=0;return()=>i[e++]}function P4(i){return $4(I4(i))}function N4(i){return i&1?~i>>1:i>>1}function O4(i,e){let t=Array(i);for(let r=0;r<i;r++)t[r]=1+e();return t}function Hd(i,e){let t=Array(i);for(let r=0,o=-1;r<i;r++)t[r]=o+=1+e();return t}function M4(i,e){let t=Array(i);for(let r=0,o=0;r<i;r++)t[r]=o+=N4(e());return t}function Dl(i,e){let t=Hd(i(),i),r=i(),o=Hd(r,i),n=O4(r,i);for(let s=0;s<r;s++)for(let a=0;a<n[s];a++)t.push(o[s]+a);return e?t.map(s=>e[s]):t}function D4(i){let e=[];for(;;){let t=i();if(t==0)break;e.push(U4(t,i))}for(;;){let t=i()-1;if(t<0)break;e.push(B4(t,i))}return R4(Rh(e))}function L4(i){let e=[];for(;;){let t=i();if(t==0)break;e.push(t)}return e}function Ih(i,e,t){let r=Array(i).fill(void 0).map(()=>[]);for(let o=0;o<e;o++)M4(i,t).forEach((n,s)=>r[s].push(n));return r}function U4(i,e){let t=1+e(),r=e(),o=L4(e),n=Ih(o.length,1+i,e);return Rh(n.map((s,a)=>{const u=s[0],p=s.slice(1);return Array(o[a]).fill(void 0).map((b,C)=>{let x=C*r;return[u+C*t,p.map(S=>S+x)]})}))}function B4(i,e){let t=1+e();return Ih(t,1+i,e).map(r=>[r[0],r.slice(1)])}function W4(i){let e=Dl(i).sort((r,o)=>r-o);return t();function t(){let r=[];for(;;){let p=Dl(i,e);if(p.length==0)break;r.push({set:new Set(p),node:t()})}r.sort((p,b)=>b.set.size-p.set.size);let o=i(),n=o%3;o=o/3|0;let s=!!(o&1);o>>=1;let a=o==1,u=o==2;return{branches:r,valid:n,fe0f:s,save:a,check:u}}}function j4(){return P4(k4("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const qa=j4();new Set(Dl(qa)),new Set(Dl(qa)),D4(qa),W4(qa);const F4=new Uint8Array(32);F4.fill(0);const z4=`Ethereum Signed Message:
`;function $h(i){return typeof i=="string"&&(i=Qc(i)),A0(g4([Qc(z4),Qc(String(i.length)),i]))}const H4="address/5.7.0",qs=new Zt(H4);function Vd(i){vi(i,20)||qs.throwArgumentError("invalid address","address",i),i=i.toLowerCase();const e=i.substring(2).split(""),t=new Uint8Array(40);for(let o=0;o<40;o++)t[o]=e[o].charCodeAt(0);const r=xt(A0(t));for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&(e[o]=e[o].toUpperCase()),(r[o>>1]&15)>=8&&(e[o+1]=e[o+1].toUpperCase());return"0x"+e.join("")}const V4=9007199254740991;function Z4(i){return Math.log10?Math.log10(i):Math.log(i)/Math.LN10}const E0={};for(let i=0;i<10;i++)E0[String(i)]=String(i);for(let i=0;i<26;i++)E0[String.fromCharCode(65+i)]=String(10+i);const Zd=Math.floor(Z4(V4));function G4(i){i=i.toUpperCase(),i=i.substring(4)+i.substring(0,2)+"00";let e=i.split("").map(r=>E0[r]).join("");for(;e.length>=Zd;){let r=e.substring(0,Zd);e=parseInt(r,10)%97+e.substring(r.length)}let t=String(98-parseInt(e,10)%97);for(;t.length<2;)t="0"+t;return t}function q4(i){let e=null;if(typeof i!="string"&&qs.throwArgumentError("invalid address","address",i),i.match(/^(0x)?[0-9a-fA-F]{40}$/))i.substring(0,2)!=="0x"&&(i="0x"+i),e=Vd(i),i.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&e!==i&&qs.throwArgumentError("bad address checksum","address",i);else if(i.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(i.substring(2,4)!==G4(i)&&qs.throwArgumentError("bad icap checksum","address",i),e=A4(i.substring(4));e.length<40;)e="0"+e;e=Vd("0x"+e)}else qs.throwArgumentError("invalid address","address",i);return e}function Fs(i,e,t){Object.defineProperty(i,e,{enumerable:!0,value:t,writable:!1})}const K4=new Uint8Array(32);K4.fill(0),si.from(-1);const Y4=si.from(0),Q4=si.from(1);si.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),ur(Q4.toHexString(),32),ur(Y4.toHexString(),32);var sr={},Se={},Fa=Ph;function Ph(i,e){if(!i)throw new Error(e||"Assertion failed")}Ph.equal=function(i,e,t){if(i!=e)throw new Error(t||"Assertion failed: "+i+" != "+e)};var Du={exports:{}};typeof Object.create=="function"?Du.exports=function(i,e){e&&(i.super_=e,i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}))}:Du.exports=function(i,e){if(e){i.super_=e;var t=function(){};t.prototype=e.prototype,i.prototype=new t,i.prototype.constructor=i}};var J4=Fa,X4=Du.exports;Se.inherits=X4;function e6(i,e){return(i.charCodeAt(e)&64512)!==55296||e<0||e+1>=i.length?!1:(i.charCodeAt(e+1)&64512)===56320}function t6(i,e){if(Array.isArray(i))return i.slice();if(!i)return[];var t=[];if(typeof i=="string")if(e){if(e==="hex")for(i=i.replace(/[^a-z0-9]+/ig,""),i.length%2!==0&&(i="0"+i),o=0;o<i.length;o+=2)t.push(parseInt(i[o]+i[o+1],16))}else for(var r=0,o=0;o<i.length;o++){var n=i.charCodeAt(o);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):e6(i,o)?(n=65536+((n&1023)<<10)+(i.charCodeAt(++o)&1023),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128)}else for(o=0;o<i.length;o++)t[o]=i[o]|0;return t}Se.toArray=t6;function i6(i){for(var e="",t=0;t<i.length;t++)e+=Oh(i[t].toString(16));return e}Se.toHex=i6;function Nh(i){var e=i>>>24|i>>>8&65280|i<<8&16711680|(i&255)<<24;return e>>>0}Se.htonl=Nh;function r6(i,e){for(var t="",r=0;r<i.length;r++){var o=i[r];e==="little"&&(o=Nh(o)),t+=Mh(o.toString(16))}return t}Se.toHex32=r6;function Oh(i){return i.length===1?"0"+i:i}Se.zero2=Oh;function Mh(i){return i.length===7?"0"+i:i.length===6?"00"+i:i.length===5?"000"+i:i.length===4?"0000"+i:i.length===3?"00000"+i:i.length===2?"000000"+i:i.length===1?"0000000"+i:i}Se.zero8=Mh;function n6(i,e,t,r){var o=t-e;J4(o%4===0);for(var n=new Array(o/4),s=0,a=e;s<n.length;s++,a+=4){var u;r==="big"?u=i[a]<<24|i[a+1]<<16|i[a+2]<<8|i[a+3]:u=i[a+3]<<24|i[a+2]<<16|i[a+1]<<8|i[a],n[s]=u>>>0}return n}Se.join32=n6;function o6(i,e){for(var t=new Array(i.length*4),r=0,o=0;r<i.length;r++,o+=4){var n=i[r];e==="big"?(t[o]=n>>>24,t[o+1]=n>>>16&255,t[o+2]=n>>>8&255,t[o+3]=n&255):(t[o+3]=n>>>24,t[o+2]=n>>>16&255,t[o+1]=n>>>8&255,t[o]=n&255)}return t}Se.split32=o6;function s6(i,e){return i>>>e|i<<32-e}Se.rotr32=s6;function a6(i,e){return i<<e|i>>>32-e}Se.rotl32=a6;function l6(i,e){return i+e>>>0}Se.sum32=l6;function c6(i,e,t){return i+e+t>>>0}Se.sum32_3=c6;function u6(i,e,t,r){return i+e+t+r>>>0}Se.sum32_4=u6;function d6(i,e,t,r,o){return i+e+t+r+o>>>0}Se.sum32_5=d6;function h6(i,e,t,r){var o=i[e],n=i[e+1],s=r+n>>>0,a=(s<r?1:0)+t+o;i[e]=a>>>0,i[e+1]=s}Se.sum64=h6;function p6(i,e,t,r){var o=e+r>>>0,n=(o<e?1:0)+i+t;return n>>>0}Se.sum64_hi=p6;function f6(i,e,t,r){var o=e+r;return o>>>0}Se.sum64_lo=f6;function w6(i,e,t,r,o,n,s,a){var u=0,p=e;p=p+r>>>0,u+=p<e?1:0,p=p+n>>>0,u+=p<n?1:0,p=p+a>>>0,u+=p<a?1:0;var b=i+t+o+s+u;return b>>>0}Se.sum64_4_hi=w6;function g6(i,e,t,r,o,n,s,a){var u=e+r+n+a;return u>>>0}Se.sum64_4_lo=g6;function m6(i,e,t,r,o,n,s,a,u,p){var b=0,C=e;C=C+r>>>0,b+=C<e?1:0,C=C+n>>>0,b+=C<n?1:0,C=C+a>>>0,b+=C<a?1:0,C=C+p>>>0,b+=C<p?1:0;var x=i+t+o+s+u+b;return x>>>0}Se.sum64_5_hi=m6;function v6(i,e,t,r,o,n,s,a,u,p){var b=e+r+n+a+p;return b>>>0}Se.sum64_5_lo=v6;function b6(i,e,t){var r=e<<32-t|i>>>t;return r>>>0}Se.rotr64_hi=b6;function y6(i,e,t){var r=i<<32-t|e>>>t;return r>>>0}Se.rotr64_lo=y6;function x6(i,e,t){return i>>>t}Se.shr64_hi=x6;function C6(i,e,t){var r=i<<32-t|e>>>t;return r>>>0}Se.shr64_lo=C6;var Ms={},Gd=Se,A6=Fa;function Ka(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}Ms.BlockHash=Ka,Ka.prototype.update=function(i,e){if(i=Gd.toArray(i,e),this.pending?this.pending=this.pending.concat(i):this.pending=i,this.pendingTotal+=i.length,this.pending.length>=this._delta8){i=this.pending;var t=i.length%this._delta8;this.pending=i.slice(i.length-t,i.length),this.pending.length===0&&(this.pending=null),i=Gd.join32(i,0,i.length-t,this.endian);for(var r=0;r<i.length;r+=this._delta32)this._update(i,r,r+this._delta32)}return this},Ka.prototype.digest=function(i){return this.update(this._pad()),A6(this.pending===null),this._digest(i)},Ka.prototype._pad=function(){var i=this.pendingTotal,e=this._delta8,t=e-(i+this.padLength)%e,r=new Array(t+this.padLength);r[0]=128;for(var o=1;o<t;o++)r[o]=0;if(i<<=3,this.endian==="big"){for(var n=8;n<this.padLength;n++)r[o++]=0;r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=i>>>24&255,r[o++]=i>>>16&255,r[o++]=i>>>8&255,r[o++]=i&255}else for(r[o++]=i&255,r[o++]=i>>>8&255,r[o++]=i>>>16&255,r[o++]=i>>>24&255,r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=0,n=8;n<this.padLength;n++)r[o++]=0;return r};var Vo={},$r={},_6=Se,dr=_6.rotr32;function E6(i,e,t,r){if(i===0)return Dh(e,t,r);if(i===1||i===3)return Uh(e,t,r);if(i===2)return Lh(e,t,r)}$r.ft_1=E6;function Dh(i,e,t){return i&e^~i&t}$r.ch32=Dh;function Lh(i,e,t){return i&e^i&t^e&t}$r.maj32=Lh;function Uh(i,e,t){return i^e^t}$r.p32=Uh;function S6(i){return dr(i,2)^dr(i,13)^dr(i,22)}$r.s0_256=S6;function T6(i){return dr(i,6)^dr(i,11)^dr(i,25)}$r.s1_256=T6;function k6(i){return dr(i,7)^dr(i,18)^i>>>3}$r.g0_256=k6;function R6(i){return dr(i,17)^dr(i,19)^i>>>10}$r.g1_256=R6;var _s=Se,I6=Ms,$6=$r,Xc=_s.rotl32,zs=_s.sum32,P6=_s.sum32_5,N6=$6.ft_1,Bh=I6.BlockHash,O6=[1518500249,1859775393,2400959708,3395469782];function lr(){if(!(this instanceof lr))return new lr;Bh.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}_s.inherits(lr,Bh);var M6=lr;lr.blockSize=512,lr.outSize=160,lr.hmacStrength=80,lr.padLength=64,lr.prototype._update=function(i,e){for(var t=this.W,r=0;r<16;r++)t[r]=i[e+r];for(;r<t.length;r++)t[r]=Xc(t[r-3]^t[r-8]^t[r-14]^t[r-16],1);var o=this.h[0],n=this.h[1],s=this.h[2],a=this.h[3],u=this.h[4];for(r=0;r<t.length;r++){var p=~~(r/20),b=P6(Xc(o,5),N6(p,n,s,a),u,t[r],O6[p]);u=a,a=s,s=Xc(n,30),n=o,o=b}this.h[0]=zs(this.h[0],o),this.h[1]=zs(this.h[1],n),this.h[2]=zs(this.h[2],s),this.h[3]=zs(this.h[3],a),this.h[4]=zs(this.h[4],u)},lr.prototype._digest=function(i){return i==="hex"?_s.toHex32(this.h,"big"):_s.split32(this.h,"big")};var Es=Se,D6=Ms,Ds=$r,L6=Fa,Hi=Es.sum32,U6=Es.sum32_4,B6=Es.sum32_5,W6=Ds.ch32,j6=Ds.maj32,F6=Ds.s0_256,z6=Ds.s1_256,H6=Ds.g0_256,V6=Ds.g1_256,Wh=D6.BlockHash,Z6=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function cr(){if(!(this instanceof cr))return new cr;Wh.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Z6,this.W=new Array(64)}Es.inherits(cr,Wh);var jh=cr;cr.blockSize=512,cr.outSize=256,cr.hmacStrength=192,cr.padLength=64,cr.prototype._update=function(i,e){for(var t=this.W,r=0;r<16;r++)t[r]=i[e+r];for(;r<t.length;r++)t[r]=U6(V6(t[r-2]),t[r-7],H6(t[r-15]),t[r-16]);var o=this.h[0],n=this.h[1],s=this.h[2],a=this.h[3],u=this.h[4],p=this.h[5],b=this.h[6],C=this.h[7];for(L6(this.k.length===t.length),r=0;r<t.length;r++){var x=B6(C,z6(u),W6(u,p,b),this.k[r],t[r]),S=Hi(F6(o),j6(o,n,s));C=b,b=p,p=u,u=Hi(a,x),a=s,s=n,n=o,o=Hi(x,S)}this.h[0]=Hi(this.h[0],o),this.h[1]=Hi(this.h[1],n),this.h[2]=Hi(this.h[2],s),this.h[3]=Hi(this.h[3],a),this.h[4]=Hi(this.h[4],u),this.h[5]=Hi(this.h[5],p),this.h[6]=Hi(this.h[6],b),this.h[7]=Hi(this.h[7],C)},cr.prototype._digest=function(i){return i==="hex"?Es.toHex32(this.h,"big"):Es.split32(this.h,"big")};var Lu=Se,Fh=jh;function Lr(){if(!(this instanceof Lr))return new Lr;Fh.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}Lu.inherits(Lr,Fh);var G6=Lr;Lr.blockSize=512,Lr.outSize=224,Lr.hmacStrength=192,Lr.padLength=64,Lr.prototype._digest=function(i){return i==="hex"?Lu.toHex32(this.h.slice(0,7),"big"):Lu.split32(this.h.slice(0,7),"big")};var pi=Se,q6=Ms,K6=Fa,hr=pi.rotr64_hi,pr=pi.rotr64_lo,zh=pi.shr64_hi,Hh=pi.shr64_lo,rn=pi.sum64,eu=pi.sum64_hi,tu=pi.sum64_lo,Y6=pi.sum64_4_hi,Q6=pi.sum64_4_lo,J6=pi.sum64_5_hi,X6=pi.sum64_5_lo,Vh=q6.BlockHash,ev=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Gi(){if(!(this instanceof Gi))return new Gi;Vh.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=ev,this.W=new Array(160)}pi.inherits(Gi,Vh);var Zh=Gi;Gi.blockSize=1024,Gi.outSize=512,Gi.hmacStrength=192,Gi.padLength=128,Gi.prototype._prepareBlock=function(i,e){for(var t=this.W,r=0;r<32;r++)t[r]=i[e+r];for(;r<t.length;r+=2){var o=dv(t[r-4],t[r-3]),n=hv(t[r-4],t[r-3]),s=t[r-14],a=t[r-13],u=cv(t[r-30],t[r-29]),p=uv(t[r-30],t[r-29]),b=t[r-32],C=t[r-31];t[r]=Y6(o,n,s,a,u,p,b,C),t[r+1]=Q6(o,n,s,a,u,p,b,C)}},Gi.prototype._update=function(i,e){this._prepareBlock(i,e);var t=this.W,r=this.h[0],o=this.h[1],n=this.h[2],s=this.h[3],a=this.h[4],u=this.h[5],p=this.h[6],b=this.h[7],C=this.h[8],x=this.h[9],S=this.h[10],k=this.h[11],U=this.h[12],D=this.h[13],te=this.h[14],ne=this.h[15];K6(this.k.length===t.length);for(var fe=0;fe<t.length;fe+=2){var oe=te,be=ne,_e=av(C,x),bt=lv(C,x),Oe=tv(C,x,S,k,U),At=iv(C,x,S,k,U,D),ki=this.k[fe],De=this.k[fe+1],Ri=t[fe],l=t[fe+1],d=J6(oe,be,_e,bt,Oe,At,ki,De,Ri,l),f=X6(oe,be,_e,bt,Oe,At,ki,De,Ri,l);oe=ov(r,o),be=sv(r,o),_e=rv(r,o,n,s,a),bt=nv(r,o,n,s,a,u);var y=eu(oe,be,_e,bt),_=tu(oe,be,_e,bt);te=U,ne=D,U=S,D=k,S=C,k=x,C=eu(p,b,d,f),x=tu(b,b,d,f),p=a,b=u,a=n,u=s,n=r,s=o,r=eu(d,f,y,_),o=tu(d,f,y,_)}rn(this.h,0,r,o),rn(this.h,2,n,s),rn(this.h,4,a,u),rn(this.h,6,p,b),rn(this.h,8,C,x),rn(this.h,10,S,k),rn(this.h,12,U,D),rn(this.h,14,te,ne)},Gi.prototype._digest=function(i){return i==="hex"?pi.toHex32(this.h,"big"):pi.split32(this.h,"big")};function tv(i,e,t,r,o){var n=i&t^~i&o;return n<0&&(n+=4294967296),n}function iv(i,e,t,r,o,n){var s=e&r^~e&n;return s<0&&(s+=4294967296),s}function rv(i,e,t,r,o){var n=i&t^i&o^t&o;return n<0&&(n+=4294967296),n}function nv(i,e,t,r,o,n){var s=e&r^e&n^r&n;return s<0&&(s+=4294967296),s}function ov(i,e){var t=hr(i,e,28),r=hr(e,i,2),o=hr(e,i,7),n=t^r^o;return n<0&&(n+=4294967296),n}function sv(i,e){var t=pr(i,e,28),r=pr(e,i,2),o=pr(e,i,7),n=t^r^o;return n<0&&(n+=4294967296),n}function av(i,e){var t=hr(i,e,14),r=hr(i,e,18),o=hr(e,i,9),n=t^r^o;return n<0&&(n+=4294967296),n}function lv(i,e){var t=pr(i,e,14),r=pr(i,e,18),o=pr(e,i,9),n=t^r^o;return n<0&&(n+=4294967296),n}function cv(i,e){var t=hr(i,e,1),r=hr(i,e,8),o=zh(i,e,7),n=t^r^o;return n<0&&(n+=4294967296),n}function uv(i,e){var t=pr(i,e,1),r=pr(i,e,8),o=Hh(i,e,7),n=t^r^o;return n<0&&(n+=4294967296),n}function dv(i,e){var t=hr(i,e,19),r=hr(e,i,29),o=zh(i,e,6),n=t^r^o;return n<0&&(n+=4294967296),n}function hv(i,e){var t=pr(i,e,19),r=pr(e,i,29),o=Hh(i,e,6),n=t^r^o;return n<0&&(n+=4294967296),n}var Uu=Se,Gh=Zh;function Ur(){if(!(this instanceof Ur))return new Ur;Gh.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}Uu.inherits(Ur,Gh);var pv=Ur;Ur.blockSize=1024,Ur.outSize=384,Ur.hmacStrength=192,Ur.padLength=128,Ur.prototype._digest=function(i){return i==="hex"?Uu.toHex32(this.h.slice(0,12),"big"):Uu.split32(this.h.slice(0,12),"big")},Vo.sha1=M6,Vo.sha224=G6,Vo.sha256=jh,Vo.sha384=pv,Vo.sha512=Zh;var qh={},no=Se,fv=Ms,Ya=no.rotl32,qd=no.sum32,Hs=no.sum32_3,Kd=no.sum32_4,Kh=fv.BlockHash;function ar(){if(!(this instanceof ar))return new ar;Kh.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}no.inherits(ar,Kh),qh.ripemd160=ar,ar.blockSize=512,ar.outSize=160,ar.hmacStrength=192,ar.padLength=64,ar.prototype._update=function(i,e){for(var t=this.h[0],r=this.h[1],o=this.h[2],n=this.h[3],s=this.h[4],a=t,u=r,p=o,b=n,C=s,x=0;x<80;x++){var S=qd(Ya(Kd(t,Yd(x,r,o,n),i[mv[x]+e],wv(x)),bv[x]),s);t=s,s=n,n=Ya(o,10),o=r,r=S,S=qd(Ya(Kd(a,Yd(79-x,u,p,b),i[vv[x]+e],gv(x)),yv[x]),C),a=C,C=b,b=Ya(p,10),p=u,u=S}S=Hs(this.h[1],o,b),this.h[1]=Hs(this.h[2],n,C),this.h[2]=Hs(this.h[3],s,a),this.h[3]=Hs(this.h[4],t,u),this.h[4]=Hs(this.h[0],r,p),this.h[0]=S},ar.prototype._digest=function(i){return i==="hex"?no.toHex32(this.h,"little"):no.split32(this.h,"little")};function Yd(i,e,t,r){return i<=15?e^t^r:i<=31?e&t|~e&r:i<=47?(e|~t)^r:i<=63?e&r|t&~r:e^(t|~r)}function wv(i){return i<=15?0:i<=31?1518500249:i<=47?1859775393:i<=63?2400959708:2840853838}function gv(i){return i<=15?1352829926:i<=31?1548603684:i<=47?1836072691:i<=63?2053994217:0}var mv=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],vv=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],bv=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],yv=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],xv=Se,Cv=Fa;function Jo(i,e,t){if(!(this instanceof Jo))return new Jo(i,e,t);this.Hash=i,this.blockSize=i.blockSize/8,this.outSize=i.outSize/8,this.inner=null,this.outer=null,this._init(xv.toArray(e,t))}var Av=Jo;Jo.prototype._init=function(i){i.length>this.blockSize&&(i=new this.Hash().update(i).digest()),Cv(i.length<=this.blockSize);for(var e=i.length;e<this.blockSize;e++)i.push(0);for(e=0;e<i.length;e++)i[e]^=54;for(this.inner=new this.Hash().update(i),e=0;e<i.length;e++)i[e]^=106;this.outer=new this.Hash().update(i)},Jo.prototype.update=function(i,e){return this.inner.update(i,e),this},Jo.prototype.digest=function(i){return this.outer.update(this.inner.digest()),this.outer.digest(i)},function(i){var e=i;e.utils=Se,e.common=Ms,e.sha=Vo,e.ripemd=qh,e.hmac=Av,e.sha1=e.sha.sha1,e.sha256=e.sha.sha256,e.sha224=e.sha.sha224,e.sha384=e.sha.sha384,e.sha512=e.sha.sha512,e.ripemd160=e.ripemd.ripemd160}(sr);function Ls(i,e,t){return t={path:e,exports:{},require:function(r,o){return _v(r,o??t.path)}},i(t,t.exports),t.exports}function _v(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var S0=Yh;function Yh(i,e){if(!i)throw new Error(e||"Assertion failed")}Yh.equal=function(i,e,t){if(i!=e)throw new Error(t||"Assertion failed: "+i+" != "+e)};var qi=Ls(function(i,e){var t=e;function r(s,a){if(Array.isArray(s))return s.slice();if(!s)return[];var u=[];if(typeof s!="string"){for(var p=0;p<s.length;p++)u[p]=s[p]|0;return u}if(a==="hex"){s=s.replace(/[^a-z0-9]+/ig,""),s.length%2!==0&&(s="0"+s);for(var p=0;p<s.length;p+=2)u.push(parseInt(s[p]+s[p+1],16))}else for(var p=0;p<s.length;p++){var b=s.charCodeAt(p),C=b>>8,x=b&255;C?u.push(C,x):u.push(x)}return u}t.toArray=r;function o(s){return s.length===1?"0"+s:s}t.zero2=o;function n(s){for(var a="",u=0;u<s.length;u++)a+=o(s[u].toString(16));return a}t.toHex=n,t.encode=function(s,a){return a==="hex"?n(s):s}}),Ei=Ls(function(i,e){var t=e;t.assert=S0,t.toArray=qi.toArray,t.zero2=qi.zero2,t.toHex=qi.toHex,t.encode=qi.encode;function r(u,p,b){var C=new Array(Math.max(u.bitLength(),b)+1);C.fill(0);for(var x=1<<p+1,S=u.clone(),k=0;k<C.length;k++){var U,D=S.andln(x-1);S.isOdd()?(D>(x>>1)-1?U=(x>>1)-D:U=D,S.isubn(U)):U=0,C[k]=U,S.iushrn(1)}return C}t.getNAF=r;function o(u,p){var b=[[],[]];u=u.clone(),p=p.clone();for(var C=0,x=0,S;u.cmpn(-C)>0||p.cmpn(-x)>0;){var k=u.andln(3)+C&3,U=p.andln(3)+x&3;k===3&&(k=-1),U===3&&(U=-1);var D;k&1?(S=u.andln(7)+C&7,(S===3||S===5)&&U===2?D=-k:D=k):D=0,b[0].push(D);var te;U&1?(S=p.andln(7)+x&7,(S===3||S===5)&&k===2?te=-U:te=U):te=0,b[1].push(te),2*C===D+1&&(C=1-C),2*x===te+1&&(x=1-x),u.iushrn(1),p.iushrn(1)}return b}t.getJSF=o;function n(u,p,b){var C="_"+p;u.prototype[p]=function(){return this[C]!==void 0?this[C]:this[C]=b.call(this)}}t.cachedProperty=n;function s(u){return typeof u=="string"?t.toArray(u,"hex"):u}t.parseBytes=s;function a(u){return new xe(u,"hex","le")}t.intFromLE=a}),Qa=Ei.getNAF,Ev=Ei.getJSF,Ll=Ei.assert;function an(i,e){this.type=i,this.p=new xe(e.p,16),this.red=e.prime?xe.red(e.prime):xe.mont(this.p),this.zero=new xe(0).toRed(this.red),this.one=new xe(1).toRed(this.red),this.two=new xe(2).toRed(this.red),this.n=e.n&&new xe(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var t=this.n&&this.p.div(this.n);!t||t.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var jo=an;an.prototype.point=function(){throw new Error("Not implemented")},an.prototype.validate=function(){throw new Error("Not implemented")},an.prototype._fixedNafMul=function(i,e){Ll(i.precomputed);var t=i._getDoubles(),r=Qa(e,1,this._bitLength),o=(1<<t.step+1)-(t.step%2===0?2:1);o/=3;var n=[],s,a;for(s=0;s<r.length;s+=t.step){a=0;for(var u=s+t.step-1;u>=s;u--)a=(a<<1)+r[u];n.push(a)}for(var p=this.jpoint(null,null,null),b=this.jpoint(null,null,null),C=o;C>0;C--){for(s=0;s<n.length;s++)a=n[s],a===C?b=b.mixedAdd(t.points[s]):a===-C&&(b=b.mixedAdd(t.points[s].neg()));p=p.add(b)}return p.toP()},an.prototype._wnafMul=function(i,e){var t=4,r=i._getNAFPoints(t);t=r.wnd;for(var o=r.points,n=Qa(e,t,this._bitLength),s=this.jpoint(null,null,null),a=n.length-1;a>=0;a--){for(var u=0;a>=0&&n[a]===0;a--)u++;if(a>=0&&u++,s=s.dblp(u),a<0)break;var p=n[a];Ll(p!==0),i.type==="affine"?p>0?s=s.mixedAdd(o[p-1>>1]):s=s.mixedAdd(o[-p-1>>1].neg()):p>0?s=s.add(o[p-1>>1]):s=s.add(o[-p-1>>1].neg())}return i.type==="affine"?s.toP():s},an.prototype._wnafMulAdd=function(i,e,t,r,o){var n=this._wnafT1,s=this._wnafT2,a=this._wnafT3,u=0,p,b,C;for(p=0;p<r;p++){C=e[p];var x=C._getNAFPoints(i);n[p]=x.wnd,s[p]=x.points}for(p=r-1;p>=1;p-=2){var S=p-1,k=p;if(n[S]!==1||n[k]!==1){a[S]=Qa(t[S],n[S],this._bitLength),a[k]=Qa(t[k],n[k],this._bitLength),u=Math.max(a[S].length,u),u=Math.max(a[k].length,u);continue}var U=[e[S],null,null,e[k]];e[S].y.cmp(e[k].y)===0?(U[1]=e[S].add(e[k]),U[2]=e[S].toJ().mixedAdd(e[k].neg())):e[S].y.cmp(e[k].y.redNeg())===0?(U[1]=e[S].toJ().mixedAdd(e[k]),U[2]=e[S].add(e[k].neg())):(U[1]=e[S].toJ().mixedAdd(e[k]),U[2]=e[S].toJ().mixedAdd(e[k].neg()));var D=[-3,-1,-5,-7,0,7,5,1,3],te=Ev(t[S],t[k]);for(u=Math.max(te[0].length,u),a[S]=new Array(u),a[k]=new Array(u),b=0;b<u;b++){var ne=te[0][b]|0,fe=te[1][b]|0;a[S][b]=D[(ne+1)*3+(fe+1)],a[k][b]=0,s[S]=U}}var oe=this.jpoint(null,null,null),be=this._wnafT4;for(p=u;p>=0;p--){for(var _e=0;p>=0;){var bt=!0;for(b=0;b<r;b++)be[b]=a[b][p]|0,be[b]!==0&&(bt=!1);if(!bt)break;_e++,p--}if(p>=0&&_e++,oe=oe.dblp(_e),p<0)break;for(b=0;b<r;b++){var Oe=be[b];Oe!==0&&(Oe>0?C=s[b][Oe-1>>1]:Oe<0&&(C=s[b][-Oe-1>>1].neg()),C.type==="affine"?oe=oe.mixedAdd(C):oe=oe.add(C))}}for(p=0;p<r;p++)s[p]=null;return o?oe:oe.toP()};function Pi(i,e){this.curve=i,this.type=e,this.precomputed=null}an.BasePoint=Pi,Pi.prototype.eq=function(){throw new Error("Not implemented")},Pi.prototype.validate=function(){return this.curve.validate(this)},an.prototype.decodePoint=function(i,e){i=Ei.toArray(i,e);var t=this.p.byteLength();if((i[0]===4||i[0]===6||i[0]===7)&&i.length-1===2*t){i[0]===6?Ll(i[i.length-1]%2===0):i[0]===7&&Ll(i[i.length-1]%2===1);var r=this.point(i.slice(1,1+t),i.slice(1+t,1+2*t));return r}else if((i[0]===2||i[0]===3)&&i.length-1===t)return this.pointFromX(i.slice(1,1+t),i[0]===3);throw new Error("Unknown point format")},Pi.prototype.encodeCompressed=function(i){return this.encode(i,!0)},Pi.prototype._encode=function(i){var e=this.curve.p.byteLength(),t=this.getX().toArray("be",e);return i?[this.getY().isEven()?2:3].concat(t):[4].concat(t,this.getY().toArray("be",e))},Pi.prototype.encode=function(i,e){return Ei.encode(this._encode(e),i)},Pi.prototype.precompute=function(i){if(this.precomputed)return this;var e={doubles:null,naf:null,beta:null};return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,i),e.beta=this._getBeta(),this.precomputed=e,this},Pi.prototype._hasDoubles=function(i){if(!this.precomputed)return!1;var e=this.precomputed.doubles;return e?e.points.length>=Math.ceil((i.bitLength()+1)/e.step):!1},Pi.prototype._getDoubles=function(i,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var t=[this],r=this,o=0;o<e;o+=i){for(var n=0;n<i;n++)r=r.dbl();t.push(r)}return{step:i,points:t}},Pi.prototype._getNAFPoints=function(i){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var e=[this],t=(1<<i)-1,r=t===1?null:this.dbl(),o=1;o<t;o++)e[o]=e[o-1].add(r);return{wnd:i,points:e}},Pi.prototype._getBeta=function(){return null},Pi.prototype.dblp=function(i){for(var e=this,t=0;t<i;t++)e=e.dbl();return e};var T0=Ls(function(i){typeof Object.create=="function"?i.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:i.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}}),Sv=Ei.assert;function Mi(i){jo.call(this,"short",i),this.a=new xe(i.a,16).toRed(this.red),this.b=new xe(i.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(i),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}T0(Mi,jo);var Tv=Mi;Mi.prototype._getEndomorphism=function(i){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var e,t;if(i.beta)e=new xe(i.beta,16).toRed(this.red);else{var r=this._getEndoRoots(this.p);e=r[0].cmp(r[1])<0?r[0]:r[1],e=e.toRed(this.red)}if(i.lambda)t=new xe(i.lambda,16);else{var o=this._getEndoRoots(this.n);this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))===0?t=o[0]:(t=o[1],Sv(this.g.mul(t).x.cmp(this.g.x.redMul(e))===0))}var n;return i.basis?n=i.basis.map(function(s){return{a:new xe(s.a,16),b:new xe(s.b,16)}}):n=this._getEndoBasis(t),{beta:e,lambda:t,basis:n}}},Mi.prototype._getEndoRoots=function(i){var e=i===this.p?this.red:xe.mont(i),t=new xe(2).toRed(e).redInvm(),r=t.redNeg(),o=new xe(3).toRed(e).redNeg().redSqrt().redMul(t),n=r.redAdd(o).fromRed(),s=r.redSub(o).fromRed();return[n,s]},Mi.prototype._getEndoBasis=function(i){for(var e=this.n.ushrn(Math.floor(this.n.bitLength()/2)),t=i,r=this.n.clone(),o=new xe(1),n=new xe(0),s=new xe(0),a=new xe(1),u,p,b,C,x,S,k,U=0,D,te;t.cmpn(0)!==0;){var ne=r.div(t);D=r.sub(ne.mul(t)),te=s.sub(ne.mul(o));var fe=a.sub(ne.mul(n));if(!b&&D.cmp(e)<0)u=k.neg(),p=o,b=D.neg(),C=te;else if(b&&++U===2)break;k=D,r=t,t=D,s=o,o=te,a=n,n=fe}x=D.neg(),S=te;var oe=b.sqr().add(C.sqr()),be=x.sqr().add(S.sqr());return be.cmp(oe)>=0&&(x=u,S=p),b.negative&&(b=b.neg(),C=C.neg()),x.negative&&(x=x.neg(),S=S.neg()),[{a:b,b:C},{a:x,b:S}]},Mi.prototype._endoSplit=function(i){var e=this.endo.basis,t=e[0],r=e[1],o=r.b.mul(i).divRound(this.n),n=t.b.neg().mul(i).divRound(this.n),s=o.mul(t.a),a=n.mul(r.a),u=o.mul(t.b),p=n.mul(r.b),b=i.sub(s).sub(a),C=u.add(p).neg();return{k1:b,k2:C}},Mi.prototype.pointFromX=function(i,e){i=new xe(i,16),i.red||(i=i.toRed(this.red));var t=i.redSqr().redMul(i).redIAdd(i.redMul(this.a)).redIAdd(this.b),r=t.redSqrt();if(r.redSqr().redSub(t).cmp(this.zero)!==0)throw new Error("invalid point");var o=r.fromRed().isOdd();return(e&&!o||!e&&o)&&(r=r.redNeg()),this.point(i,r)},Mi.prototype.validate=function(i){if(i.inf)return!0;var e=i.x,t=i.y,r=this.a.redMul(e),o=e.redSqr().redMul(e).redIAdd(r).redIAdd(this.b);return t.redSqr().redISub(o).cmpn(0)===0},Mi.prototype._endoWnafMulAdd=function(i,e,t){for(var r=this._endoWnafT1,o=this._endoWnafT2,n=0;n<i.length;n++){var s=this._endoSplit(e[n]),a=i[n],u=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),u=u.neg(!0)),r[n*2]=a,r[n*2+1]=u,o[n*2]=s.k1,o[n*2+1]=s.k2}for(var p=this._wnafMulAdd(1,r,o,n*2,t),b=0;b<n*2;b++)r[b]=null,o[b]=null;return p};function Lt(i,e,t,r){jo.BasePoint.call(this,i,"affine"),e===null&&t===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new xe(e,16),this.y=new xe(t,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}T0(Lt,jo.BasePoint),Mi.prototype.point=function(i,e,t){return new Lt(this,i,e,t)},Mi.prototype.pointFromJSON=function(i,e){return Lt.fromJSON(this,i,e)},Lt.prototype._getBeta=function(){if(this.curve.endo){var i=this.precomputed;if(i&&i.beta)return i.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(i){var t=this.curve,r=function(o){return t.point(o.x.redMul(t.endo.beta),o.y)};i.beta=e,e.precomputed={beta:null,naf:i.naf&&{wnd:i.naf.wnd,points:i.naf.points.map(r)},doubles:i.doubles&&{step:i.doubles.step,points:i.doubles.points.map(r)}}}return e}},Lt.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},Lt.fromJSON=function(i,e,t){typeof e=="string"&&(e=JSON.parse(e));var r=i.point(e[0],e[1],t);if(!e[2])return r;function o(s){return i.point(s[0],s[1],t)}var n=e[2];return r.precomputed={beta:null,doubles:n.doubles&&{step:n.doubles.step,points:[r].concat(n.doubles.points.map(o))},naf:n.naf&&{wnd:n.naf.wnd,points:[r].concat(n.naf.points.map(o))}},r},Lt.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},Lt.prototype.isInfinity=function(){return this.inf},Lt.prototype.add=function(i){if(this.inf)return i;if(i.inf)return this;if(this.eq(i))return this.dbl();if(this.neg().eq(i))return this.curve.point(null,null);if(this.x.cmp(i.x)===0)return this.curve.point(null,null);var e=this.y.redSub(i.y);e.cmpn(0)!==0&&(e=e.redMul(this.x.redSub(i.x).redInvm()));var t=e.redSqr().redISub(this.x).redISub(i.x),r=e.redMul(this.x.redSub(t)).redISub(this.y);return this.curve.point(t,r)},Lt.prototype.dbl=function(){if(this.inf)return this;var i=this.y.redAdd(this.y);if(i.cmpn(0)===0)return this.curve.point(null,null);var e=this.curve.a,t=this.x.redSqr(),r=i.redInvm(),o=t.redAdd(t).redIAdd(t).redIAdd(e).redMul(r),n=o.redSqr().redISub(this.x.redAdd(this.x)),s=o.redMul(this.x.redSub(n)).redISub(this.y);return this.curve.point(n,s)},Lt.prototype.getX=function(){return this.x.fromRed()},Lt.prototype.getY=function(){return this.y.fromRed()},Lt.prototype.mul=function(i){return i=new xe(i,16),this.isInfinity()?this:this._hasDoubles(i)?this.curve._fixedNafMul(this,i):this.curve.endo?this.curve._endoWnafMulAdd([this],[i]):this.curve._wnafMul(this,i)},Lt.prototype.mulAdd=function(i,e,t){var r=[this,e],o=[i,t];return this.curve.endo?this.curve._endoWnafMulAdd(r,o):this.curve._wnafMulAdd(1,r,o,2)},Lt.prototype.jmulAdd=function(i,e,t){var r=[this,e],o=[i,t];return this.curve.endo?this.curve._endoWnafMulAdd(r,o,!0):this.curve._wnafMulAdd(1,r,o,2,!0)},Lt.prototype.eq=function(i){return this===i||this.inf===i.inf&&(this.inf||this.x.cmp(i.x)===0&&this.y.cmp(i.y)===0)},Lt.prototype.neg=function(i){if(this.inf)return this;var e=this.curve.point(this.x,this.y.redNeg());if(i&&this.precomputed){var t=this.precomputed,r=function(o){return o.neg()};e.precomputed={naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(r)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(r)}}}return e},Lt.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var i=this.curve.jpoint(this.x,this.y,this.curve.one);return i};function zt(i,e,t,r){jo.BasePoint.call(this,i,"jacobian"),e===null&&t===null&&r===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new xe(0)):(this.x=new xe(e,16),this.y=new xe(t,16),this.z=new xe(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}T0(zt,jo.BasePoint),Mi.prototype.jpoint=function(i,e,t){return new zt(this,i,e,t)},zt.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var i=this.z.redInvm(),e=i.redSqr(),t=this.x.redMul(e),r=this.y.redMul(e).redMul(i);return this.curve.point(t,r)},zt.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},zt.prototype.add=function(i){if(this.isInfinity())return i;if(i.isInfinity())return this;var e=i.z.redSqr(),t=this.z.redSqr(),r=this.x.redMul(e),o=i.x.redMul(t),n=this.y.redMul(e.redMul(i.z)),s=i.y.redMul(t.redMul(this.z)),a=r.redSub(o),u=n.redSub(s);if(a.cmpn(0)===0)return u.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var p=a.redSqr(),b=p.redMul(a),C=r.redMul(p),x=u.redSqr().redIAdd(b).redISub(C).redISub(C),S=u.redMul(C.redISub(x)).redISub(n.redMul(b)),k=this.z.redMul(i.z).redMul(a);return this.curve.jpoint(x,S,k)},zt.prototype.mixedAdd=function(i){if(this.isInfinity())return i.toJ();if(i.isInfinity())return this;var e=this.z.redSqr(),t=this.x,r=i.x.redMul(e),o=this.y,n=i.y.redMul(e).redMul(this.z),s=t.redSub(r),a=o.redSub(n);if(s.cmpn(0)===0)return a.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var u=s.redSqr(),p=u.redMul(s),b=t.redMul(u),C=a.redSqr().redIAdd(p).redISub(b).redISub(b),x=a.redMul(b.redISub(C)).redISub(o.redMul(p)),S=this.z.redMul(s);return this.curve.jpoint(C,x,S)},zt.prototype.dblp=function(i){if(i===0)return this;if(this.isInfinity())return this;if(!i)return this.dbl();var e;if(this.curve.zeroA||this.curve.threeA){var t=this;for(e=0;e<i;e++)t=t.dbl();return t}var r=this.curve.a,o=this.curve.tinv,n=this.x,s=this.y,a=this.z,u=a.redSqr().redSqr(),p=s.redAdd(s);for(e=0;e<i;e++){var b=n.redSqr(),C=p.redSqr(),x=C.redSqr(),S=b.redAdd(b).redIAdd(b).redIAdd(r.redMul(u)),k=n.redMul(C),U=S.redSqr().redISub(k.redAdd(k)),D=k.redISub(U),te=S.redMul(D);te=te.redIAdd(te).redISub(x);var ne=p.redMul(a);e+1<i&&(u=u.redMul(x)),n=U,a=ne,p=te}return this.curve.jpoint(n,p.redMul(o),a)},zt.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},zt.prototype._zeroDbl=function(){var i,e,t;if(this.zOne){var r=this.x.redSqr(),o=this.y.redSqr(),n=o.redSqr(),s=this.x.redAdd(o).redSqr().redISub(r).redISub(n);s=s.redIAdd(s);var a=r.redAdd(r).redIAdd(r),u=a.redSqr().redISub(s).redISub(s),p=n.redIAdd(n);p=p.redIAdd(p),p=p.redIAdd(p),i=u,e=a.redMul(s.redISub(u)).redISub(p),t=this.y.redAdd(this.y)}else{var b=this.x.redSqr(),C=this.y.redSqr(),x=C.redSqr(),S=this.x.redAdd(C).redSqr().redISub(b).redISub(x);S=S.redIAdd(S);var k=b.redAdd(b).redIAdd(b),U=k.redSqr(),D=x.redIAdd(x);D=D.redIAdd(D),D=D.redIAdd(D),i=U.redISub(S).redISub(S),e=k.redMul(S.redISub(i)).redISub(D),t=this.y.redMul(this.z),t=t.redIAdd(t)}return this.curve.jpoint(i,e,t)},zt.prototype._threeDbl=function(){var i,e,t;if(this.zOne){var r=this.x.redSqr(),o=this.y.redSqr(),n=o.redSqr(),s=this.x.redAdd(o).redSqr().redISub(r).redISub(n);s=s.redIAdd(s);var a=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),u=a.redSqr().redISub(s).redISub(s);i=u;var p=n.redIAdd(n);p=p.redIAdd(p),p=p.redIAdd(p),e=a.redMul(s.redISub(u)).redISub(p),t=this.y.redAdd(this.y)}else{var b=this.z.redSqr(),C=this.y.redSqr(),x=this.x.redMul(C),S=this.x.redSub(b).redMul(this.x.redAdd(b));S=S.redAdd(S).redIAdd(S);var k=x.redIAdd(x);k=k.redIAdd(k);var U=k.redAdd(k);i=S.redSqr().redISub(U),t=this.y.redAdd(this.z).redSqr().redISub(C).redISub(b);var D=C.redSqr();D=D.redIAdd(D),D=D.redIAdd(D),D=D.redIAdd(D),e=S.redMul(k.redISub(i)).redISub(D)}return this.curve.jpoint(i,e,t)},zt.prototype._dbl=function(){var i=this.curve.a,e=this.x,t=this.y,r=this.z,o=r.redSqr().redSqr(),n=e.redSqr(),s=t.redSqr(),a=n.redAdd(n).redIAdd(n).redIAdd(i.redMul(o)),u=e.redAdd(e);u=u.redIAdd(u);var p=u.redMul(s),b=a.redSqr().redISub(p.redAdd(p)),C=p.redISub(b),x=s.redSqr();x=x.redIAdd(x),x=x.redIAdd(x),x=x.redIAdd(x);var S=a.redMul(C).redISub(x),k=t.redAdd(t).redMul(r);return this.curve.jpoint(b,S,k)},zt.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var i=this.x.redSqr(),e=this.y.redSqr(),t=this.z.redSqr(),r=e.redSqr(),o=i.redAdd(i).redIAdd(i),n=o.redSqr(),s=this.x.redAdd(e).redSqr().redISub(i).redISub(r);s=s.redIAdd(s),s=s.redAdd(s).redIAdd(s),s=s.redISub(n);var a=s.redSqr(),u=r.redIAdd(r);u=u.redIAdd(u),u=u.redIAdd(u),u=u.redIAdd(u);var p=o.redIAdd(s).redSqr().redISub(n).redISub(a).redISub(u),b=e.redMul(p);b=b.redIAdd(b),b=b.redIAdd(b);var C=this.x.redMul(a).redISub(b);C=C.redIAdd(C),C=C.redIAdd(C);var x=this.y.redMul(p.redMul(u.redISub(p)).redISub(s.redMul(a)));x=x.redIAdd(x),x=x.redIAdd(x),x=x.redIAdd(x);var S=this.z.redAdd(s).redSqr().redISub(t).redISub(a);return this.curve.jpoint(C,x,S)},zt.prototype.mul=function(i,e){return i=new xe(i,e),this.curve._wnafMul(this,i)},zt.prototype.eq=function(i){if(i.type==="affine")return this.eq(i.toJ());if(this===i)return!0;var e=this.z.redSqr(),t=i.z.redSqr();if(this.x.redMul(t).redISub(i.x.redMul(e)).cmpn(0)!==0)return!1;var r=e.redMul(this.z),o=t.redMul(i.z);return this.y.redMul(o).redISub(i.y.redMul(r)).cmpn(0)===0},zt.prototype.eqXToP=function(i){var e=this.z.redSqr(),t=i.toRed(this.curve.red).redMul(e);if(this.x.cmp(t)===0)return!0;for(var r=i.clone(),o=this.curve.redN.redMul(e);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(o),this.x.cmp(t)===0)return!0}},zt.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},zt.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var il=Ls(function(i,e){var t=e;t.base=jo,t.short=Tv,t.mont=null,t.edwards=null}),rl=Ls(function(i,e){var t=e,r=Ei.assert;function o(a){a.type==="short"?this.curve=new il.short(a):a.type==="edwards"?this.curve=new il.edwards(a):this.curve=new il.mont(a),this.g=this.curve.g,this.n=this.curve.n,this.hash=a.hash,r(this.g.validate(),"Invalid curve"),r(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}t.PresetCurve=o;function n(a,u){Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){var p=new o(u);return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,value:p}),p}})}n("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:sr.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),n("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:sr.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),n("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:sr.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),n("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:sr.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),n("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:sr.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),n("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:sr.sha256,gRed:!1,g:["9"]}),n("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:sr.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var s;try{s=null.crash()}catch{s=void 0}n("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:sr.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",s]})});function ln(i){if(!(this instanceof ln))return new ln(i);this.hash=i.hash,this.predResist=!!i.predResist,this.outLen=this.hash.outSize,this.minEntropy=i.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=qi.toArray(i.entropy,i.entropyEnc||"hex"),t=qi.toArray(i.nonce,i.nonceEnc||"hex"),r=qi.toArray(i.pers,i.persEnc||"hex");S0(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,t,r)}var Qd=ln;ln.prototype._init=function(i,e,t){var r=i.concat(e).concat(t);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(r),this._reseed=1,this.reseedInterval=281474976710656},ln.prototype._hmac=function(){return new sr.hmac(this.hash,this.K)},ln.prototype._update=function(i){var e=this._hmac().update(this.V).update([0]);i&&(e=e.update(i)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),i&&(this.K=this._hmac().update(this.V).update([1]).update(i).digest(),this.V=this._hmac().update(this.V).digest())},ln.prototype.reseed=function(i,e,t,r){typeof e!="string"&&(r=t,t=e,e=null),i=qi.toArray(i,e),t=qi.toArray(t,r),S0(i.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(i.concat(t||[])),this._reseed=1},ln.prototype.generate=function(i,e,t,r){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof e!="string"&&(r=t,t=e,e=null),t&&(t=qi.toArray(t,r||"hex"),this._update(t));for(var o=[];o.length<i;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var n=o.slice(0,i);return this._update(t),this._reseed++,qi.encode(n,e)};var iu=Ei.assert;function qt(i,e){this.ec=i,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}var ru=qt;qt.fromPublic=function(i,e,t){return e instanceof qt?e:new qt(i,{pub:e,pubEnc:t})},qt.fromPrivate=function(i,e,t){return e instanceof qt?e:new qt(i,{priv:e,privEnc:t})},qt.prototype.validate=function(){var i=this.getPublic();return i.isInfinity()?{result:!1,reason:"Invalid public key"}:i.validate()?i.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},qt.prototype.getPublic=function(i,e){return typeof i=="string"&&(e=i,i=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,i):this.pub},qt.prototype.getPrivate=function(i){return i==="hex"?this.priv.toString(16,2):this.priv},qt.prototype._importPrivate=function(i,e){this.priv=new xe(i,e||16),this.priv=this.priv.umod(this.ec.curve.n)},qt.prototype._importPublic=function(i,e){if(i.x||i.y){this.ec.curve.type==="mont"?iu(i.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&iu(i.x&&i.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(i.x,i.y);return}this.pub=this.ec.curve.decodePoint(i,e)},qt.prototype.derive=function(i){return i.validate()||iu(i.validate(),"public point not validated"),i.mul(this.priv).getX()},qt.prototype.sign=function(i,e,t){return this.ec.sign(i,this,e,t)},qt.prototype.verify=function(i,e){return this.ec.verify(i,e,this)},qt.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var kv=Ei.assert;function hc(i,e){if(i instanceof hc)return i;this._importDER(i,e)||(kv(i.r&&i.s,"Signature without r or s"),this.r=new xe(i.r,16),this.s=new xe(i.s,16),i.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=i.recoveryParam)}var Ja=hc;function Rv(){this.place=0}function nu(i,e){var t=i[e.place++];if(!(t&128))return t;var r=t&15;if(r===0||r>4)return!1;for(var o=0,n=0,s=e.place;n<r;n++,s++)o<<=8,o|=i[s],o>>>=0;return o<=127?!1:(e.place=s,o)}function Jd(i){for(var e=0,t=i.length-1;!i[e]&&!(i[e+1]&128)&&e<t;)e++;return e===0?i:i.slice(e)}hc.prototype._importDER=function(i,e){i=Ei.toArray(i,e);var t=new Rv;if(i[t.place++]!==48)return!1;var r=nu(i,t);if(r===!1||r+t.place!==i.length||i[t.place++]!==2)return!1;var o=nu(i,t);if(o===!1)return!1;var n=i.slice(t.place,o+t.place);if(t.place+=o,i[t.place++]!==2)return!1;var s=nu(i,t);if(s===!1||i.length!==s+t.place)return!1;var a=i.slice(t.place,s+t.place);if(n[0]===0)if(n[1]&128)n=n.slice(1);else return!1;if(a[0]===0)if(a[1]&128)a=a.slice(1);else return!1;return this.r=new xe(n),this.s=new xe(a),this.recoveryParam=null,!0};function ou(i,e){if(e<128){i.push(e);return}var t=1+(Math.log(e)/Math.LN2>>>3);for(i.push(t|128);--t;)i.push(e>>>(t<<3)&255);i.push(e)}hc.prototype.toDER=function(i){var e=this.r.toArray(),t=this.s.toArray();for(e[0]&128&&(e=[0].concat(e)),t[0]&128&&(t=[0].concat(t)),e=Jd(e),t=Jd(t);!t[0]&&!(t[1]&128);)t=t.slice(1);var r=[2];ou(r,e.length),r=r.concat(e),r.push(2),ou(r,t.length);var o=r.concat(t),n=[48];return ou(n,o.length),n=n.concat(o),Ei.encode(n,i)};var Iv=function(){throw new Error("unsupported")},Qh=Ei.assert;function Oi(i){if(!(this instanceof Oi))return new Oi(i);typeof i=="string"&&(Qh(Object.prototype.hasOwnProperty.call(rl,i),"Unknown curve "+i),i=rl[i]),i instanceof rl.PresetCurve&&(i={curve:i}),this.curve=i.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=i.curve.g,this.g.precompute(i.curve.n.bitLength()+1),this.hash=i.hash||i.curve.hash}var $v=Oi;Oi.prototype.keyPair=function(i){return new ru(this,i)},Oi.prototype.keyFromPrivate=function(i,e){return ru.fromPrivate(this,i,e)},Oi.prototype.keyFromPublic=function(i,e){return ru.fromPublic(this,i,e)},Oi.prototype.genKeyPair=function(i){i||(i={});for(var e=new Qd({hash:this.hash,pers:i.pers,persEnc:i.persEnc||"utf8",entropy:i.entropy||Iv(this.hash.hmacStrength),entropyEnc:i.entropy&&i.entropyEnc||"utf8",nonce:this.n.toArray()}),t=this.n.byteLength(),r=this.n.sub(new xe(2));;){var o=new xe(e.generate(t));if(!(o.cmp(r)>0))return o.iaddn(1),this.keyFromPrivate(o)}},Oi.prototype._truncateToN=function(i,e){var t=i.byteLength()*8-this.n.bitLength();return t>0&&(i=i.ushrn(t)),!e&&i.cmp(this.n)>=0?i.sub(this.n):i},Oi.prototype.sign=function(i,e,t,r){typeof t=="object"&&(r=t,t=null),r||(r={}),e=this.keyFromPrivate(e,t),i=this._truncateToN(new xe(i,16));for(var o=this.n.byteLength(),n=e.getPrivate().toArray("be",o),s=i.toArray("be",o),a=new Qd({hash:this.hash,entropy:n,nonce:s,pers:r.pers,persEnc:r.persEnc||"utf8"}),u=this.n.sub(new xe(1)),p=0;;p++){var b=r.k?r.k(p):new xe(a.generate(this.n.byteLength()));if(b=this._truncateToN(b,!0),!(b.cmpn(1)<=0||b.cmp(u)>=0)){var C=this.g.mul(b);if(!C.isInfinity()){var x=C.getX(),S=x.umod(this.n);if(S.cmpn(0)!==0){var k=b.invm(this.n).mul(S.mul(e.getPrivate()).iadd(i));if(k=k.umod(this.n),k.cmpn(0)!==0){var U=(C.getY().isOdd()?1:0)|(x.cmp(S)!==0?2:0);return r.canonical&&k.cmp(this.nh)>0&&(k=this.n.sub(k),U^=1),new Ja({r:S,s:k,recoveryParam:U})}}}}}},Oi.prototype.verify=function(i,e,t,r){i=this._truncateToN(new xe(i,16)),t=this.keyFromPublic(t,r),e=new Ja(e,"hex");var o=e.r,n=e.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0||n.cmpn(1)<0||n.cmp(this.n)>=0)return!1;var s=n.invm(this.n),a=s.mul(i).umod(this.n),u=s.mul(o).umod(this.n),p;return this.curve._maxwellTrick?(p=this.g.jmulAdd(a,t.getPublic(),u),p.isInfinity()?!1:p.eqXToP(o)):(p=this.g.mulAdd(a,t.getPublic(),u),p.isInfinity()?!1:p.getX().umod(this.n).cmp(o)===0)},Oi.prototype.recoverPubKey=function(i,e,t,r){Qh((3&t)===t,"The recovery param is more than two bits"),e=new Ja(e,r);var o=this.n,n=new xe(i),s=e.r,a=e.s,u=t&1,p=t>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&p)throw new Error("Unable to find sencond key candinate");p?s=this.curve.pointFromX(s.add(this.curve.n),u):s=this.curve.pointFromX(s,u);var b=e.r.invm(o),C=o.sub(n).mul(b).umod(o),x=a.mul(b).umod(o);return this.g.mulAdd(C,s,x)},Oi.prototype.getKeyRecoveryParam=function(i,e,t,r){if(e=new Ja(e,r),e.recoveryParam!==null)return e.recoveryParam;for(var o=0;o<4;o++){var n;try{n=this.recoverPubKey(i,e,o)}catch{continue}if(n.eq(t))return o}throw new Error("Unable to find valid recovery factor")};var Pv=Ls(function(i,e){var t=e;t.version="6.5.4",t.utils=Ei,t.rand=function(){throw new Error("unsupported")},t.curve=il,t.curves=rl,t.ec=$v,t.eddsa=null}),Nv=Pv.ec;const Ov="signing-key/5.7.0",Bu=new Zt(Ov);let su=null;function nn(){return su||(su=new Nv("secp256k1")),su}class Mv{constructor(e){Fs(this,"curve","secp256k1"),Fs(this,"privateKey",ui(e)),v4(this.privateKey)!==32&&Bu.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const t=nn().keyFromPrivate(xt(this.privateKey));Fs(this,"publicKey","0x"+t.getPublic(!1,"hex")),Fs(this,"compressedPublicKey","0x"+t.getPublic(!0,"hex")),Fs(this,"_isSigningKey",!0)}_addPoint(e){const t=nn().keyFromPublic(xt(this.publicKey)),r=nn().keyFromPublic(xt(e));return"0x"+t.pub.add(r.pub).encodeCompressed("hex")}signDigest(e){const t=nn().keyFromPrivate(xt(this.privateKey)),r=xt(e);r.length!==32&&Bu.throwArgumentError("bad digest length","digest",e);const o=t.sign(r,{canonical:!0});return Ah({recoveryParam:o.recoveryParam,r:ur("0x"+o.r.toString(16),32),s:ur("0x"+o.s.toString(16),32)})}computeSharedSecret(e){const t=nn().keyFromPrivate(xt(this.privateKey)),r=nn().keyFromPublic(xt(Jh(e)));return ur("0x"+t.derive(r.getPublic()).toString(16),32)}static isSigningKey(e){return!!(e&&e._isSigningKey)}}function Dv(i,e){const t=Ah(e),r={r:xt(t.r),s:xt(t.s)};return"0x"+nn().recoverPubKey(xt(i),r,t.recoveryParam).encode("hex",!1)}function Jh(i,e){const t=xt(i);return t.length===32?new Mv(t).publicKey:t.length===33?"0x"+nn().keyFromPublic(t).getPublic(!1,"hex"):t.length===65?ui(t):Bu.throwArgumentError("invalid public or private key","key","[REDACTED]")}var Xd;(function(i){i[i.legacy=0]="legacy",i[i.eip2930=1]="eip2930",i[i.eip1559=2]="eip1559"})(Xd||(Xd={}));function Lv(i){const e=Jh(i);return q4(Ud(A0(Ud(e,1)),12))}function Uv(i,e){return Lv(Dv(xt(i),e))}const Bv="https://rpc.walletconnect.com/v1";function Wv(i,e,t){return Uv($h(e),t).toLowerCase()===i.toLowerCase()}async function jv(i,e,t,r,o,n){try{const s="0x1626ba7e",a="0000000000000000000000000000000000000000000000000000000000000040",u="0000000000000000000000000000000000000000000000000000000000000041",p=t.substring(2),b=$h(e).substring(2),C=s+b+a+u+p,x=await fetch(`${n||Bv}/?chainId=${r}&projectId=${o}`,{method:"POST",body:JSON.stringify({id:Fv(),jsonrpc:"2.0",method:"eth_call",params:[{to:i,data:C},"latest"]})}),{result:S}=await x.json();return S?S.slice(0,s.length).toLowerCase()===s.toLowerCase():!1}catch(s){return console.error("isValidEip1271Signature: ",s),!1}}function Fv(){return Date.now()+Math.floor(Math.random()*1e3)}const zv="did:pkh:",Xh=i=>i==null?void 0:i.split(":"),ep=i=>{const e=i&&Xh(i);if(e)return i.includes(zv)?e[3]:e[1]},tp=i=>{const e=i&&Xh(i);if(e)return e.pop()},Hv=(i,e)=>{const t=`${i.domain} wants you to sign in with your Ethereum account:`,r=tp(e);if(!i.aud&&!i.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let o=i.statement||void 0;const n=`URI: ${i.aud||i.uri}`,s=`Version: ${i.version}`,a=`Chain ID: ${ep(e)}`,u=`Nonce: ${i.nonce}`,p=`Issued At: ${i.iat}`,b=i.resources?`Resources:${i.resources.map(x=>`
- ${x}`).join("")}`:void 0,C=Kv(i.resources);if(C){const x=Zv(C);o=qv(o,x)}return[t,r,"",o,"",n,s,a,u,p,b].filter(x=>x!=null).join(`
`)};function Vv(i){return JSON.parse(Buffer.from(i,"base64").toString("utf-8"))}function ip(i){if(!i)throw new Error("No recap provided, value is undefined");if(!i.att)throw new Error("No `att` property found");const e=Object.keys(i.att);if(!(e!=null&&e.length))throw new Error("No resources found in `att` property");e.forEach(t=>{const r=i.att[t];if(Array.isArray(r))throw new Error(`Resource must be an object: ${t}`);if(typeof r!="object")throw new Error(`Resource must be an object: ${t}`);if(!Object.keys(r).length)throw new Error(`Resource object is empty: ${t}`);Object.keys(r).forEach(o=>{const n=r[o];if(!Array.isArray(n))throw new Error(`Ability limits ${o} must be an array of objects, found: ${n}`);if(!n.length)throw new Error(`Value of ${o} is empty array, must be an array with objects`);n.forEach(s=>{if(typeof s!="object")throw new Error(`Ability limits (${o}) must be an array of objects, found: ${s}`)})})})}function Zv(i){const e=Vv(i.replace("urn:recap:",""));return ip(e),e}function Gv(i){return i&&i.includes("urn:recap:")}function qv(i="",e){ip(e);const t="I further authorize the stated URI to perform the following actions on my behalf: ";if(i.includes(t))return i;const r=[];let o=0;Object.keys(e.att).forEach(a=>{const u=Object.keys(e.att[a]).map(C=>({ability:C.split("/")[0],action:C.split("/")[1]}));u.sort((C,x)=>C.action.localeCompare(x.action));const p={};u.forEach(C=>{p[C.ability]||(p[C.ability]=[]),p[C.ability].push(C.action)});const b=Object.keys(p).map(C=>(o++,`(${o}) '${C}': '${p[C].join("', '")}' for '${a}'.`));r.push(b.join(", ").replace(".,","."))});const n=r.join(" "),s=`${t}${n}`;return`${i?i+" ":""}${s}`}function Kv(i){if(!i)return;const e=i==null?void 0:i[i.length-1];return Gv(e)?e:void 0}const Yv=/0x[a-fA-F0-9]{40}/u,Qv=/Chain ID: (?<temp1>\d+)/u;function Jv(i){var e;return((e=i.match(Yv))==null?void 0:e[0])||""}function Xv(i){var e;return`eip155:${((e=i.match(Qv))==null?void 0:e[1])||1}`}async function eb({address:i,message:e,signature:t,chainId:r,projectId:o}){let n=Wv(i,e,t);return n||(n=await jv(i,e,t,r,o)),n}const gi=Rt({status:"uninitialized"}),Zo={state:gi,subscribeKey(i,e){return ei(gi,i,e)},subscribe(i){return ni(gi,()=>i(gi))},_getClient(){if(!gi._client)throw new Error("SIWEController client not set");return gi._client},async getNonce(i){const t=await this._getClient().getNonce(i);return this.setNonce(t),t},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(i){const t=this._getClient().createMessage(i);return this.setMessage(t),t},async verifyMessage(i){return await this._getClient().verifyMessage(i)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const i=this._getClient();await i.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=i.onSignOut)==null||e.call(i)},onSignIn(i){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,i)},onSignOut(){var e;const i=this._getClient();(e=i.onSignOut)==null||e.call(i)},setSIWEClient(i){gi._client=mn(i),gi.status="ready",ee.setIsSiweEnabled(i.options.enabled)},setNonce(i){gi.nonce=i},setStatus(i){gi.status=i},setMessage(i){gi.message=i},setSession(i){gi.session=i,gi.status=i?"success":"ready"}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nl=globalThis,k0=nl.ShadowRoot&&(nl.ShadyCSS===void 0||nl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R0=Symbol(),e1=new WeakMap;let rp=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==R0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(k0&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=e1.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&e1.set(t,e))}return e}toString(){return this.cssText}};const tb=i=>new rp(typeof i=="string"?i:i+"",void 0,R0),ib=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new rp(t,i,R0)},rb=(i,e)=>{if(k0)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=nl.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},t1=k0?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return tb(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nb,defineProperty:ob,getOwnPropertyDescriptor:sb,getOwnPropertyNames:ab,getOwnPropertySymbols:lb,getPrototypeOf:cb}=Object,gn=globalThis,i1=gn.trustedTypes,ub=i1?i1.emptyScript:"",au=gn.reactiveElementPolyfillSupport,oa=(i,e)=>i,Ul={toAttribute(i,e){switch(e){case Boolean:i=i?ub:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},I0=(i,e)=>!nb(i,e),r1={attribute:!0,type:String,converter:Ul,reflect:!1,hasChanged:I0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gn.litPropertyMetadata??(gn.litPropertyMetadata=new WeakMap);class Go extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=r1){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&ob(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=sb(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);n.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??r1}static _$Ei(){if(this.hasOwnProperty(oa("elementProperties")))return;const e=cb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oa("properties"))){const t=this.properties,r=[...ab(t),...lb(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(t1(o))}else e!==void 0&&t.push(t1(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rb(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Ul).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:Ul;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??I0)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Go.elementStyles=[],Go.shadowRootOptions={mode:"open"},Go[oa("elementProperties")]=new Map,Go[oa("finalized")]=new Map,au==null||au({ReactiveElement:Go}),(gn.reactiveElementVersions??(gn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sa=globalThis,Bl=sa.trustedTypes,n1=Bl?Bl.createPolicy("lit-html",{createHTML:i=>i}):void 0,np="$lit$",cn=`lit$${Math.random().toFixed(9).slice(2)}$`,op="?"+cn,db=`<${op}>`,Ro=document,Ea=()=>Ro.createComment(""),Sa=i=>i===null||typeof i!="object"&&typeof i!="function",sp=Array.isArray,hb=i=>sp(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",lu=`[ 	
\f\r]`,Vs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,o1=/-->/g,s1=/>/g,Jn=RegExp(`>|${lu}(?:([^\\s"'>=/]+)(${lu}*=${lu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),a1=/'/g,l1=/"/g,ap=/^(?:script|style|textarea|title)$/i,pb=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),lp=pb(1),Ss=Symbol.for("lit-noChange"),Wt=Symbol.for("lit-nothing"),c1=new WeakMap,io=Ro.createTreeWalker(Ro,129);function cp(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return n1!==void 0?n1.createHTML(e):e}const fb=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":"",s=Vs;for(let a=0;a<t;a++){const u=i[a];let p,b,C=-1,x=0;for(;x<u.length&&(s.lastIndex=x,b=s.exec(u),b!==null);)x=s.lastIndex,s===Vs?b[1]==="!--"?s=o1:b[1]!==void 0?s=s1:b[2]!==void 0?(ap.test(b[2])&&(o=RegExp("</"+b[2],"g")),s=Jn):b[3]!==void 0&&(s=Jn):s===Jn?b[0]===">"?(s=o??Vs,C=-1):b[1]===void 0?C=-2:(C=s.lastIndex-b[2].length,p=b[1],s=b[3]===void 0?Jn:b[3]==='"'?l1:a1):s===l1||s===a1?s=Jn:s===o1||s===s1?s=Vs:(s=Jn,o=void 0);const S=s===Jn&&i[a+1].startsWith("/>")?" ":"";n+=s===Vs?u+db:C>=0?(r.push(p),u.slice(0,C)+np+u.slice(C)+cn+S):u+cn+(C===-2?a:S)}return[cp(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class Ta{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,s=0;const a=e.length-1,u=this.parts,[p,b]=fb(e,t);if(this.el=Ta.createElement(p,r),io.currentNode=this.el.content,t===2){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(o=io.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const C of o.getAttributeNames())if(C.endsWith(np)){const x=b[s++],S=o.getAttribute(C).split(cn),k=/([.?@])?(.*)/.exec(x);u.push({type:1,index:n,name:k[2],strings:S,ctor:k[1]==="."?gb:k[1]==="?"?mb:k[1]==="@"?vb:pc}),o.removeAttribute(C)}else C.startsWith(cn)&&(u.push({type:6,index:n}),o.removeAttribute(C));if(ap.test(o.tagName)){const C=o.textContent.split(cn),x=C.length-1;if(x>0){o.textContent=Bl?Bl.emptyScript:"";for(let S=0;S<x;S++)o.append(C[S],Ea()),io.nextNode(),u.push({type:2,index:++n});o.append(C[x],Ea())}}}else if(o.nodeType===8)if(o.data===op)u.push({type:2,index:n});else{let C=-1;for(;(C=o.data.indexOf(cn,C+1))!==-1;)u.push({type:7,index:n}),C+=cn.length-1}n++}}static createElement(e,t){const r=Ro.createElement("template");return r.innerHTML=e,r}}function Ts(i,e,t=i,r){var s,a;if(e===Ss)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const n=Sa(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=Ts(i,o._$AS(i,e.values),o,r)),e}class wb{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??Ro).importNode(t,!0);io.currentNode=o;let n=io.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let p;u.type===2?p=new za(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new bb(n,this,e)),this._$AV.push(p),u=r[++a]}s!==(u==null?void 0:u.index)&&(n=io.nextNode(),s++)}return io.currentNode=Ro,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class za{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Wt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ts(this,e,t),Sa(e)?e===Wt||e==null||e===""?(this._$AH!==Wt&&this._$AR(),this._$AH=Wt):e!==this._$AH&&e!==Ss&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hb(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Wt&&Sa(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ro.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ta.createElement(cp(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const s=new wb(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=c1.get(e.strings);return t===void 0&&c1.set(e.strings,t=new Ta(e)),t}k(e){sp(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new za(this.S(Ea()),this.S(Ea()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class pc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=Wt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Wt}_$AI(e,t=this,r,o){const n=this.strings;let s=!1;if(n===void 0)e=Ts(this,e,t,0),s=!Sa(e)||e!==this._$AH&&e!==Ss,s&&(this._$AH=e);else{const a=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=Ts(this,a[r+u],t,u),p===Ss&&(p=this._$AH[u]),s||(s=!Sa(p)||p!==this._$AH[u]),p===Wt?e=Wt:e!==Wt&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}s&&!o&&this.j(e)}j(e){e===Wt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gb extends pc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Wt?void 0:e}}class mb extends pc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Wt)}}class vb extends pc{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=Ts(this,e,t,0)??Wt)===Ss)return;const r=this._$AH,o=e===Wt&&r!==Wt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Wt&&(r===Wt||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class bb{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ts(this,e)}}const cu=sa.litHtmlPolyfillSupport;cu==null||cu(Ta,za),(sa.litHtmlVersions??(sa.litHtmlVersions=[])).push("3.1.3");const yb=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new za(e.insertBefore(Ea(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xo extends Go{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yb(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ss}}var p1;Xo._$litElement$=!0,Xo.finalized=!0,(p1=globalThis.litElementHydrateSupport)==null||p1.call(globalThis,{LitElement:Xo});const uu=globalThis.litElementPolyfillSupport;uu==null||uu({LitElement:Xo});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const xb=ib`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Cb=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wl=class extends Xo{constructor(){var e;super(...arguments),this.dappImageUrl=(e=ee.state.metadata)==null?void 0:e.icons,this.walletImageUrl=Le.getConnectedWalletImageUrl()}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return lp`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Wl.styles=xb;Wl=Cb([I("w3m-connecting-siwe")],Wl);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ab={attribute:!0,type:String,converter:Ul,reflect:!1,hasChanged:I0},_b=(i=Ab,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,i),r==="accessor"){const{name:s}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,u,i)},init(a){return a!==void 0&&this.P(s,void 0,i),a}}}if(r==="setter"){const{name:s}=t;return function(a){const u=this[s];e.call(this,a),this.requestUpdate(s,u,i)}}throw Error("Unsupported decorator location: "+r)};function Eb(i){return(e,t)=>typeof t=="object"?_b(i,e,t):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sb(i){return Eb({...i,state:!0,attribute:!1})}var up=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jl=class extends Xo{constructor(){var e;super(...arguments),this.dappName=(e=ee.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return this.onRender(),lp`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          fullWidth
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){Zo.state.session&&pe.close()}async onSign(){this.isSigning=!0,ce.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{Zo.setStatus("loading");const e=await Zo.signIn();return Zo.setStatus("success"),ce.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return j.state.preferredAccountType===Vt.ACCOUNT_TYPES.SMART_ACCOUNT?ye.showError("This application might not support Smart Accounts"):ye.showError("Signature declined"),Zo.setStatus("error"),ce.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=j.state;e?(await we.disconnect(),pe.close()):N.push("Connect"),ce.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};up([Sb()],jl.prototype,"isSigning",void 0);jl=up([I("w3m-connecting-siwe-view")],jl);function Tb(i){return new c4(i)}const Io=Object.freeze(Object.defineProperty({__proto__:null,SIWEController:Zo,get W3mConnectingSiwe(){return Wl},get W3mConnectingSiweView(){return jl},createSIWEConfig:Tb,formatMessage:Hv,getAddressFromMessage:Jv,getChainIdFromMessage:Xv,getDidAddress:tp,getDidChainId:ep,verifySignature:eb},Symbol.toStringTag,{value:"Module"}));export{cy as c,ly as d};
