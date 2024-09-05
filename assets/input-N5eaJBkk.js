import{j as t}from"./jsx-runtime-DEdD30eg.js";import{l as m}from"./lodash-CcdATr5u.js";import{r as c}from"./index-RYns6xqu.js";import"./usePosition-CMmoxCjh.js";import{C as V,a as x,V as N}from"./arrow_down-BFOf_bAR.js";const p=(e,a)=>`${e}-${a}`,f=({error:e,description:a})=>{if(!(m.isEmpty(e)&&m.isEmpty(a)))return console.log("error",e),e.length>0?"input-border-error":"input-border-desc"},y=({error:e,description:a})=>{if(e.length>0)return"input-hint-error";if(a.length>0)return"input-hint-desc"},h=e=>`input-group-${e}`;try{f.displayName="getBorderClass",f.__docgenInfo={description:"根據錯誤和描述值返回適當的邊框類別。",displayName:"getBorderClass",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}}}catch{}try{y.displayName="getHintClass",y.__docgenInfo={description:"根據錯誤訊息和描述訊息返回提示元素的 CSS 類別。",displayName:"getHintClass",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}}}catch{}try{h.displayName="getSizeClass",h.__docgenInfo={description:"根據指定的大小，返回對應的 CSS class。",displayName:"getSizeClass",props:{}}}catch{}const b=(e,a)=>{const[s,l]=c.useState(e),[o,r]=c.useState(a),d=i=>{l(i.target.value)},u=()=>{l("")},n=()=>{r(i=>i==="password"?"text":"password")};return c.useEffect(()=>{r(a)},[a]),{inputType:o,value:s,onChange:d,action:a==="password"?n:u}},_=e=>{const{label:a,className:s,type:l="text",placeholder:o,size:r="medium",prefix:d,isDisabled:u=!1,hint:n={error:"",description:""}}=e,{inputType:i,value:g,onChange:C,action:v}=b("",l);return t.jsxs("div",{className:`input-container ${s}`,children:[a&&t.jsx("label",{className:`${u?"input-disable":"input-label"}`,children:a}),t.jsxs("div",{className:` 
          input-group
          ${p("component",r)} 
          ${u?"input-disable":f(n)}
          ${s||""}`,children:[d&&t.jsx("div",{className:p("icon",r),children:d}),t.jsx("input",{value:g,onChange:C,type:i,className:`${u?"input-disable":`input ${p("text",r)}`}`,placeholder:o}),!m.isEmpty(g)&&t.jsx("div",{onClick:v,style:{cursor:"pointer"},className:p("icon",r),children:l==="text"?t.jsx(V,{}):l==="password"&&i==="password"?t.jsx(x,{}):t.jsx(N,{})})]}),t.jsx("small",{className:`input-hint ${u?"input-disable":y(n)}`,children:n.error.length>0?n.error:n.description})]})};try{_.displayName="Input",_.__docgenInfo={description:"Input 組件。",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"{ error: string; description: string; }"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}try{input.displayName="input",input.__docgenInfo={description:"Input 組件。",displayName:"input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"{ error: string; description: string; }"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}export{_ as I,p as g};
