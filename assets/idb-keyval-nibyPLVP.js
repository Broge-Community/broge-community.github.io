function r(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function l(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const u=r(n);return(a,i)=>u.then(s=>i(s.transaction(t,a).objectStore(t)))}let c;function o(){return c||(c=l("keyval-store","keyval")),c}function f(e,t=o()){return t("readonly",n=>r(n.get(e)))}function p(e,t,n=o()){return n("readwrite",u=>(u.put(t,e),r(u.transaction)))}function y(e,t=o()){return t("readwrite",n=>(n.delete(e),r(n.transaction)))}function h(e=o()){return e("readwrite",t=>(t.clear(),r(t.transaction)))}function d(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},r(e.transaction)}function g(e=o()){return e("readonly",t=>{if(t.getAllKeys)return r(t.getAllKeys());const n=[];return d(t,u=>n.push(u.key)).then(()=>n)})}export{h as a,l as c,y as d,f as g,g as k,p as s};
