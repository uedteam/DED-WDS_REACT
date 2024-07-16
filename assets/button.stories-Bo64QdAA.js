import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{v as w}from"./v4-CQkTLCs1.js";import{T as x}from"./title-j45Dk3nW.js";import{B as i}from"./button-BQyVEUIv.js";import{S as B}from"./account_circle-BbbNuNZY.js";import"./index-l2PZgWEW.js";const{addons:b}=__STORYBOOK_MODULE_PREVIEW_API__,{global:g}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:k}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var P="storybook/actions",I=`${P}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},j=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:j(n,t)},N=e=>!!(typeof e=="object"&&e&&j(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),M=e=>{if(N(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}return e},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function l(e,t={}){let n={...V,...t},o=function(...d){var u,m;if(t.implicit){let h=(u="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(h){let a=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),y=new k({phase:h.phase,name:e,deprecated:a});if(a)console.warn(y);else throw y}}let R=b.getChannel(),A=F(),S=5,p=d.map(M),D=d.length>1?p:p[0],T={id:A,count:0,data:{name:e,args:D},options:{...n,maxDepth:S+(n.depth||3),allowFunction:n.allowFunction||!1}};R.emit(I,T)};return o.isAction=!0,o.implicit=t.implicit,o}const $={title:"Design System/Atoms/Button",component:i,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"}},args:{onClick:l("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},c={name:"標準按鈕",args:{variant:"outlined",themeColor:"primary",children:r.jsx(x,{level:4,children:"標題按鈕"}),prefix:r.jsx(B,{}),onClick:()=>l("onClick")("點擊事件"),className:""},render(e){return r.jsx(i,{...e,children:e.children})}},s={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:r.jsx(x,{level:5,children:"標題按鈕"}),prefix:r.jsx(B,{width:24,height:24}),onClick:()=>l("onClick")("點擊事件"),className:""},render(e){return r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(i,{...e,variant:"contained",children:e.children}),r.jsx(i,{...e,variant:"contained",themeColor:"secondary",children:e.children}),r.jsx(i,{...e,variant:"contained",themeColor:"error",children:e.children}),r.jsx(i,{...e,variant:"contained",themeColor:"tertiary",children:e.children})]})}};var _,f,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(f=c.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var E,v,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const G=["Primary","Multiple"];export{s as Multiple,c as Primary,G as __namedExportsOrder,$ as default};
