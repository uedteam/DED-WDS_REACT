import{r as ie}from"./index-CZo2m81c.js";var Er={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var Rr=ie,k=Symbol.for("react.element"),mr=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),_r=Symbol.for("react.offscreen"),X=Symbol.iterator,Tr="@@iterator";function Cr(r){if(r===null||typeof r!="object")return null;var e=X&&r[X]||r[Tr];return typeof e=="function"?e:null}var h=Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(r){{for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];Sr("error",r,t)}}function Sr(r,e,t){{var a=h.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(e+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+e),Function.prototype.apply.call(console[r],console,u)}}var wr=!1,Pr=!1,Or=!1,jr=!1,xr=!1,J;J=Symbol.for("react.module.reference");function kr(r){return!!(typeof r=="string"||typeof r=="function"||r===T||r===G||xr||r===K||r===A||r===F||jr||r===_r||wr||Pr||Or||typeof r=="object"&&r!==null&&(r.$$typeof===D||r.$$typeof===S||r.$$typeof===N||r.$$typeof===z||r.$$typeof===C||r.$$typeof===J||r.getModuleId!==void 0))}function Ar(r,e,t){var a=r.displayName;if(a)return a;var i=e.displayName||e.name||"";return i!==""?t+"("+i+")":t}function H(r){return r.displayName||"Context"}function p(r){if(r==null)return null;if(typeof r.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case T:return"Fragment";case mr:return"Portal";case G:return"Profiler";case K:return"StrictMode";case A:return"Suspense";case F:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case z:var e=r;return H(e)+".Consumer";case N:var t=r;return H(t._context)+".Provider";case C:return Ar(r,r.render,"ForwardRef");case S:var a=r.displayName||null;return a!==null?a:p(r.type)||"Memo";case D:{var i=r,u=i._payload,o=i._init;try{return p(o(u))}catch{return null}}}return null}var g=Object.assign,R=0,q,Z,Q,rr,er,tr,ar;function nr(){}nr.__reactDisabledLog=!0;function Fr(){{if(R===0){q=console.log,Z=console.info,Q=console.warn,rr=console.error,er=console.group,tr=console.groupCollapsed,ar=console.groupEnd;var r={configurable:!0,enumerable:!0,value:nr,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}R++}}function Dr(){{if(R--,R===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:g({},r,{value:q}),info:g({},r,{value:Z}),warn:g({},r,{value:Q}),error:g({},r,{value:rr}),group:g({},r,{value:er}),groupCollapsed:g({},r,{value:tr}),groupEnd:g({},r,{value:ar})})}R<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var I=h.ReactCurrentDispatcher,W;function w(r,e,t){{if(W===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);W=a&&a[1]||""}return`
`+W+r}}var Y=!1,P;{var Ir=typeof WeakMap=="function"?WeakMap:Map;P=new Ir}function or(r,e){if(!r||Y)return"";{var t=P.get(r);if(t!==void 0)return t}var a;Y=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=I.current,I.current=null,Fr();try{if(e){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(v){a=v}Reflect.construct(r,[],o)}else{try{o.call()}catch(v){a=v}r.call(o.prototype)}}else{try{throw Error()}catch(v){a=v}r()}}catch(v){if(v&&a&&typeof v.stack=="string"){for(var n=v.stack.split(`
`),c=a.stack.split(`
`),s=n.length-1,l=c.length-1;s>=1&&l>=0&&n[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(n[s]!==c[l]){if(s!==1||l!==1)do if(s--,l--,l<0||n[s]!==c[l]){var d=`
`+n[s].replace(" at new "," at ");return r.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",r.displayName)),typeof r=="function"&&P.set(r,d),d}while(s>=1&&l>=0);break}}}finally{Y=!1,I.current=u,Dr(),Error.prepareStackTrace=i}var E=r?r.displayName||r.name:"",b=E?w(E):"";return typeof r=="function"&&P.set(r,b),b}function Wr(r,e,t){return or(r,!1)}function Yr(r){var e=r.prototype;return!!(e&&e.isReactComponent)}function O(r,e,t){if(r==null)return"";if(typeof r=="function")return or(r,Yr(r));if(typeof r=="string")return w(r);switch(r){case A:return w("Suspense");case F:return w("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case C:return Wr(r.render);case S:return O(r.type,e,t);case D:{var a=r,i=a._payload,u=a._init;try{return O(u(i),e,t)}catch{}}}return""}var m=Object.prototype.hasOwnProperty,ir={},ur=h.ReactDebugCurrentFrame;function j(r){if(r){var e=r._owner,t=O(r.type,r._source,e?e.type:null);ur.setExtraStackFrame(t)}else ur.setExtraStackFrame(null)}function $r(r,e,t,a,i){{var u=Function.call.bind(m);for(var o in r)if(u(r,o)){var n=void 0;try{if(typeof r[o]!="function"){var c=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}n=r[o](e,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){n=s}n&&!(n instanceof Error)&&(j(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),j(null)),n instanceof Error&&!(n.message in ir)&&(ir[n.message]=!0,j(i),f("Failed %s type: %s",t,n.message),j(null))}}}var Mr=Array.isArray;function $(r){return Mr(r)}function Lr(r){{var e=typeof Symbol=="function"&&Symbol.toStringTag,t=e&&r[Symbol.toStringTag]||r.constructor.name||"Object";return t}}function Vr(r){try{return sr(r),!1}catch{return!0}}function sr(r){return""+r}function lr(r){if(Vr(r))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Lr(r)),sr(r)}var _=h.ReactCurrentOwner,Ur={key:!0,ref:!0,__self:!0,__source:!0},fr,cr,M;M={};function Br(r){if(m.call(r,"ref")){var e=Object.getOwnPropertyDescriptor(r,"ref").get;if(e&&e.isReactWarning)return!1}return r.ref!==void 0}function Kr(r){if(m.call(r,"key")){var e=Object.getOwnPropertyDescriptor(r,"key").get;if(e&&e.isReactWarning)return!1}return r.key!==void 0}function Gr(r,e){if(typeof r.ref=="string"&&_.current&&e&&_.current.stateNode!==e){var t=p(_.current.type);M[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',p(_.current.type),r.ref),M[t]=!0)}}function Nr(r,e){{var t=function(){fr||(fr=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};t.isReactWarning=!0,Object.defineProperty(r,"key",{get:t,configurable:!0})}}function zr(r,e){{var t=function(){cr||(cr=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};t.isReactWarning=!0,Object.defineProperty(r,"ref",{get:t,configurable:!0})}}var Xr=function(r,e,t,a,i,u,o){var n={$$typeof:k,type:r,key:e,ref:t,props:o,_owner:u};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function Jr(r,e,t,a,i){{var u,o={},n=null,c=null;t!==void 0&&(lr(t),n=""+t),Kr(e)&&(lr(e.key),n=""+e.key),Br(e)&&(c=e.ref,Gr(e,i));for(u in e)m.call(e,u)&&!Ur.hasOwnProperty(u)&&(o[u]=e[u]);if(r&&r.defaultProps){var s=r.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(n||c){var l=typeof r=="function"?r.displayName||r.name||"Unknown":r;n&&Nr(o,l),c&&zr(o,l)}return Xr(r,n,c,i,a,_.current,o)}}var L=h.ReactCurrentOwner,vr=h.ReactDebugCurrentFrame;function y(r){if(r){var e=r._owner,t=O(r.type,r._source,e?e.type:null);vr.setExtraStackFrame(t)}else vr.setExtraStackFrame(null)}var V;V=!1;function U(r){return typeof r=="object"&&r!==null&&r.$$typeof===k}function dr(){{if(L.current){var r=p(L.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function Hr(r){return""}var pr={};function qr(r){{var e=dr();if(!e){var t=typeof r=="string"?r:r.displayName||r.name;t&&(e=`

Check the top-level render call using <`+t+">.")}return e}}function gr(r,e){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var t=qr(e);if(pr[t])return;pr[t]=!0;var a="";r&&r._owner&&r._owner!==L.current&&(a=" It was passed a child from "+p(r._owner.type)+"."),y(r),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),y(null)}}function br(r,e){{if(typeof r!="object")return;if($(r))for(var t=0;t<r.length;t++){var a=r[t];U(a)&&gr(a,e)}else if(U(r))r._store&&(r._store.validated=!0);else if(r){var i=Cr(r);if(typeof i=="function"&&i!==r.entries)for(var u=i.call(r),o;!(o=u.next()).done;)U(o.value)&&gr(o.value,e)}}}function Zr(r){{var e=r.type;if(e==null||typeof e=="string")return;var t;if(typeof e=="function")t=e.propTypes;else if(typeof e=="object"&&(e.$$typeof===C||e.$$typeof===S))t=e.propTypes;else return;if(t){var a=p(e);$r(t,r.props,"prop",a,r)}else if(e.PropTypes!==void 0&&!V){V=!0;var i=p(e);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof e.getDefaultProps=="function"&&!e.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Qr(r){{for(var e=Object.keys(r.props),t=0;t<e.length;t++){var a=e[t];if(a!=="children"&&a!=="key"){y(r),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),y(null);break}}r.ref!==null&&(y(r),f("Invalid attribute `ref` supplied to `React.Fragment`."),y(null))}}var hr={};function yr(r,e,t,a,i,u){{var o=kr(r);if(!o){var n="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=Hr();c?n+=c:n+=dr();var s;r===null?s="null":$(r)?s="array":r!==void 0&&r.$$typeof===k?(s="<"+(p(r.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):s=typeof r,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,n)}var l=Jr(r,e,t,i,u);if(l==null)return l;if(o){var d=e.children;if(d!==void 0)if(a)if($(d)){for(var E=0;E<d.length;E++)br(d[E],r);Object.freeze&&Object.freeze(d)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else br(d,r)}if(m.call(e,"key")){var b=p(r),v=Object.keys(e).filter(function(oe){return oe!=="key"}),B=v.length>0?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}";if(!hr[b+B]){var ne=v.length>0?"{"+v.join(": ..., ")+": ...}":"{}";f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,B,b,ne,b),hr[b+B]=!0}}return r===T?Qr(l):Zr(l),l}}function re(r,e,t){return yr(r,e,t,!0)}function ee(r,e,t){return yr(r,e,t,!1)}var te=ee,ae=re;x.Fragment=T,x.jsx=te,x.jsxs=ae})();Er.exports=x;var se=Er.exports;export{se as j};
