const r=Symbol(),p=Object.getPrototypeOf,o=new WeakMap,y=t=>t&&(o.has(t)?o.get(t):p(t)===Object.prototype||p(t)===Array.prototype),c=t=>y(t)&&t[r]||null,s=(t,e=!0)=>{o.set(t,e)};export{s as h,c as y};
//# sourceMappingURL=proxy-compare-DDw08AJZ.js.map
