let c;const D=new Uint8Array(16);function I(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(D)}const e=[];for(let t=0;t<256;++t)e.push((t+256).toString(16).slice(1));function S(t,n=0){return e[t[n+0]]+e[t[n+1]]+e[t[n+2]]+e[t[n+3]]+"-"+e[t[n+4]]+e[t[n+5]]+"-"+e[t[n+6]]+e[t[n+7]]+"-"+e[t[n+8]]+e[t[n+9]]+"-"+e[t[n+10]]+e[t[n+11]]+e[t[n+12]]+e[t[n+13]]+e[t[n+14]]+e[t[n+15]]}const b=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:b};function w(t,n,i){if(y.randomUUID&&!n&&!t)return y.randomUUID();t=t||{};const o=t.random||(t.rng||I)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,S(o)}const{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:v}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var V="storybook/actions",A=`${V}/action-event`,j={depth:10,clearOnStoryChange:!0,limit:50},O=(t,n)=>{let i=Object.getPrototypeOf(t);return!i||n(i)?i:O(i,n)},P=t=>!!(typeof t=="object"&&t&&O(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),T=t=>{if(P(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let i=Object.getOwnPropertyDescriptor(n,"view"),o=i==null?void 0:i.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...i,value:Object.create(o.constructor.prototype)}),n}return t},x=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function B(t,n={}){let i={...j,...n},o=function(...p){var a,u;if(n.implicit){let l=(a="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:a.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(l){let r=!((u=window==null?void 0:window.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),s=new v({phase:l.phase,name:t,deprecated:r});if(r)console.warn(s);else throw s}}let g=U.getChannel(),m=x(),R=5,d=p.map(T),E=p.length>1?d:d[0],h={id:m,count:0,data:{name:t,args:E},options:{...i,maxDepth:R+(i.depth||3),allowFunction:i.allowFunction||!1}};g.emit(A,h)};return o.isAction=!0,o.implicit=n.implicit,o}export{B as a};
