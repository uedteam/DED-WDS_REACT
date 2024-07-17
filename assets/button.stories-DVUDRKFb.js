import{j as o}from"./jsx-dev-runtime-uiaR1PCM.js";import{j,z as V}from"./index-DSudfg4k.js";import{v as B}from"./v4-CQkTLCs1.js";import{T as O}from"./title-BUfs7zL-.js";import{S as A}from"./account_circle-YEmkOz1r.js";import"./index-CZo2m81c.js";const{global:N}=__STORYBOOK_MODULE_GLOBAL__;var w="storybook/actions",R=`${w}/action-event`,T={depth:10,clearOnStoryChange:!0,limit:50},W=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:W(n,t)},I=e=>!!(typeof e=="object"&&e&&W(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),P=e=>{if(I(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(r.constructor.prototype)}),t}return e},q=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?B():Date.now().toString(36)+Math.random().toString(36).substring(2);function D(e,t={}){let n={...T,...t},r=function(...a){var h,y;if(t.implicit){let v=(h="__STORYBOOK_PREVIEW__"in N?N.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(v){let s=!((y=window==null?void 0:window.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),x=new j({phase:v.phase,name:e,deprecated:s});if(s)console.warn(x);else throw x}}let d=V.getChannel(),m=q(),p=5,l=a.map(P),f=a.length>1?l:l[0],U={id:m,count:0,data:{name:e,args:f},options:{...n,maxDepth:p+(n.depth||3),allowFunction:n.allowFunction||!1}};d.emit(R,U)};return r.isAction=!0,r.implicit=t.implicit,r}const $=(e,t)=>`button-${e} button-${e}-${t}`,b=e=>{if(e==="contained")return"button-container-disable";if(e==="outlined")return"button-outline-disable";if(e==="text")return"button-text-disable"};try{b.displayName="getDisableClass",b.__docgenInfo={description:"",displayName:"getDisableClass",props:{}}}catch{}function i(e){const{variant:t,themeColor:n="",isDisabled:r=!1,children:a,prefix:d,suffix:m,className:p,onClick:l,...f}=e;return o.jsxDEV("button",{...f,className:`button ${r?b(t):p||$(t,n)}`,onClick:l,children:[d,a,m]},void 0,!0,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.tsx",lineNumber:36,columnNumber:5},this)}try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Design System/Atoms/Button",component:i,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"}},args:{onClick:D("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},u={name:"標準按鈕",args:{variant:"outlined",themeColor:"primary",children:o.jsxDEV(O,{level:4,children:"標題按鈕"},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:89,columnNumber:15},void 0),prefix:o.jsxDEV(A,{},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:90,columnNumber:13},void 0),onClick:()=>D("onClick")("點擊事件"),className:""},render(e){return o.jsxDEV(i,{...e,children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:95,columnNumber:12},this)}},c={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:o.jsxDEV(O,{level:5,children:"標題按鈕"},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:104,columnNumber:15},void 0),prefix:o.jsxDEV(A,{width:24,height:24},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:105,columnNumber:13},void 0),onClick:()=>D("onClick")("點擊事件"),className:""},render(e){return o.jsxDEV("div",{style:{display:"flex",gap:"16px"},children:[o.jsxDEV(i,{...e,variant:"contained",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:112,columnNumber:9},this),o.jsxDEV(i,{...e,variant:"contained",themeColor:"secondary",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:115,columnNumber:9},this),o.jsxDEV(i,{...e,variant:"contained",themeColor:"error",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:118,columnNumber:9},this),o.jsxDEV(i,{...e,variant:"contained",themeColor:"tertiary",children:e.children},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:121,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.stories.tsx",lineNumber:111,columnNumber:7},this)}};var g,_,E;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var C,k,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const H=["Primary","Multiple"];export{c as Multiple,u as Primary,H as __namedExportsOrder,G as default};
