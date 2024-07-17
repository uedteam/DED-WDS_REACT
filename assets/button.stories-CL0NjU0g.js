import{j as o}from"./jsx-dev-runtime-CZZW4CYh.js";import{v as V}from"./v4-CQkTLCs1.js";import{T as k}from"./title-D2dLhk5D.js";import{S as A}from"./account_circle-C6Nwdu9P.js";import"./index-vZAiTh_1.js";const{addons:B}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:R}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var j="storybook/actions",T=`${j}/action-event`,w={depth:10,clearOnStoryChange:!0,limit:50},W=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:W(n,t)},I=e=>!!(typeof e=="object"&&e&&W(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),P=e=>{if(I(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(r.constructor.prototype)}),t}return e},q=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?V():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(e,t={}){let n={...w,...t},r=function(...a){var h,y;if(t.implicit){let _=(h="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(_){let s=!((y=window==null?void 0:window.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),v=new R({phase:_.phase,name:e,deprecated:s});if(s)console.warn(v);else throw v}}let d=B.getChannel(),m=q(),p=5,l=a.map(P),f=a.length>1?l:l[0],U={id:m,count:0,data:{name:e,args:f},options:{...n,maxDepth:p+(n.depth||3),allowFunction:n.allowFunction||!1}};d.emit(T,U)};return r.isAction=!0,r.implicit=t.implicit,r}const M=(e,t)=>`button-${e} button-${e}-${t}`,D=e=>{if(e==="contained")return"button-container-disable";if(e==="outlined")return"button-outline-disable";if(e==="text")return"button-text-disable"};try{D.displayName="getDisableClass",D.__docgenInfo={description:"",displayName:"getDisableClass",props:{}}}catch{}function i(e){const{variant:t,themeColor:n="",isDisabled:r=!1,children:a,prefix:d,suffix:m,className:p,onClick:l,...f}=e;return o.jsxDEV("button",{...f,className:`button ${r?D(t):p||M(t,n)}`,onClick:l,children:[d,a,m]},void 0,!0,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.tsx",lineNumber:36,columnNumber:5},this)}try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Design System/Atoms/Button",component:i,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"}},args:{onClick:b("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},u={name:"標準按鈕",args:{variant:"outlined",themeColor:"primary",children:o.jsxDEV(k,{level:4,children:"標題按鈕"},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:89,columnNumber:15},void 0),prefix:o.jsxDEV(A,{},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:90,columnNumber:13},void 0),onClick:()=>b("onClick")("點擊事件"),className:""},render(e){return o.jsxDEV(i,{...e,children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:95,columnNumber:12},this)}},c={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:o.jsxDEV(k,{level:5,children:"標題按鈕"},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:104,columnNumber:15},void 0),prefix:o.jsxDEV(A,{width:24,height:24},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:105,columnNumber:13},void 0),onClick:()=>b("onClick")("點擊事件"),className:""},render(e){return o.jsxDEV("div",{style:{display:"flex",gap:"16px"},children:[o.jsxDEV(i,{...e,variant:"contained",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:112,columnNumber:9},this),o.jsxDEV(i,{...e,variant:"contained",themeColor:"secondary",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:115,columnNumber:9},this),o.jsxDEV(i,{...e,variant:"contained",themeColor:"error",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:118,columnNumber:9},this),o.jsxDEV(i,{...e,variant:"contained",themeColor:"tertiary",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:121,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/src/ui/element/button/button.stories.tsx",lineNumber:111,columnNumber:7},this)}};var g,x,N;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '標準按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title level={4}>標題按鈕</Title>,
    prefix: <Account />,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(N=(x=u.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var O,C,S;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title level={5}>標題按鈕</Title>,
    prefix: <Account width={24} height={24} />,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Button {...args} variant="contained">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="error">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="tertiary">
          {args.children}
        </Button>
      </div>;
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const G=["Primary","Multiple"];export{c as Multiple,u as Primary,G as __namedExportsOrder,z as default};
