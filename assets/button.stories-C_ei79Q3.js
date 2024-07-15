import{j as i}from"./jsx-runtime-DWbWqHZ-.js";import{v as T}from"./v4-CQkTLCs1.js";import{T as j}from"./title-j45Dk3nW.js";import{S as A}from"./account_circle-BbbNuNZY.js";import"./index-l2PZgWEW.js";const{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:k}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var V="storybook/actions",I=`${V}/action-event`,P={depth:10,clearOnStoryChange:!0,limit:50},S=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:S(n,t)},q=e=>!!(typeof e=="object"&&e&&S(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),M=e=>{if(q(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(r.constructor.prototype)}),t}return e},$=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?T():Date.now().toString(36)+Math.random().toString(36).substring(2);function f(e,t={}){let n={...P,...t},r=function(...l){var _,g;if(t.implicit){let v=(_="__STORYBOOK_PREVIEW__"in x?x.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(v){let a=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),C=new k({phase:v.phase,name:e,deprecated:a});if(a)console.warn(C);else throw C}}let d=w.getChannel(),p=$(),m=5,s=l.map(M),h=l.length>1?s:s[0],N={id:p,count:0,data:{name:e,args:h},options:{...n,maxDepth:m+(n.depth||3),allowFunction:n.allowFunction||!1}};d.emit(I,N)};return r.isAction=!0,r.implicit=t.implicit,r}const F=(e,t)=>`button-${e} button-${e}-${t}`,y=e=>{if(e==="contained")return"button-container-disable";if(e==="outlined")return"button-outline-disable";if(e==="text")return"button-text-disable"};try{y.displayName="getDisableClass",y.__docgenInfo={description:"",displayName:"getDisableClass",props:{}}}catch{}function o(e){const{variant:t,themeColor:n="",isDisabled:r=!1,children:l,prefix:d,suffix:p,className:m,onClick:s,...h}=e;return i.jsxs("button",{...h,className:`button ${r?y(t):m||F(t,n)}`,onClick:s,children:[d,l,p]})}try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Design System/Atoms/Button",component:o,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"}},args:{onClick:f("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},c={name:"標準按鈕",args:{variant:"outlined",themeColor:"primary",children:i.jsx(j,{level:4,children:"標題按鈕"}),prefix:i.jsx(A,{}),onClick:()=>f("onClick")("點擊事件"),className:""},render(e){return i.jsx(o,{...e,children:e.children})}},u={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:i.jsx(j,{level:5,children:"標題按鈕"}),prefix:i.jsx(A,{width:24,height:24}),onClick:()=>f("onClick")("點擊事件"),className:""},render(e){return i.jsxs("div",{style:{display:"flex",gap:"16px"},children:[i.jsx(o,{...e,variant:"contained",children:e.children}),i.jsx(o,{...e,variant:"contained",themeColor:"secondary",children:e.children}),i.jsx(o,{...e,variant:"contained",themeColor:"error",children:e.children}),i.jsx(o,{...e,variant:"contained",themeColor:"tertiary",children:e.children})]})}};var O,E,b;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(b=(E=c.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var B,D,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const G=["Primary","Multiple"];export{u as Multiple,c as Primary,G as __namedExportsOrder,z as default};
