import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as i}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as m}from"./title-DUk0UITg.js";import{B as t}from"./button-DpmRqYRM.js";import{S as u}from"./account_circle-CLd4vbqd.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./style-BG61KOMt.js";const j={title:"Design System/Element/Button",component:t,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",control:{type:"text"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"按鈕客製化樣式",control:{type:"text"}}},args:{variant:"contained",themeColor:"primary",isDisabled:!1,children:"按鈕",onClick:i("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},n={name:"標準按鈕",args:{themeColor:"primary",children:r.jsx(m,{children:"標題按鈕"}),size:"large",prefix:r.jsx(u,{}),onClick:e=>i("onClick")(e),className:""},render(e){return r.jsx(t,{...e,children:e.children})}},o={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:r.jsx(m,{children:"標題按鈕"}),prefix:r.jsx(u,{}),onClick:()=>i("onClick")("點擊事件"),className:""},render(e){return r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(t,{...e,variant:"contained",children:e.children}),r.jsx(t,{...e,variant:"contained",themeColor:"secondary",children:e.children}),r.jsx(t,{...e,variant:"contained",themeColor:"error",children:e.children}),r.jsx(t,{...e,variant:"contained",themeColor:"tertiary",children:e.children})]})}};var a,c,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '標準按鈕',
  args: {
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    size: 'large',
    prefix: <Account />,
    onClick: e => action('onClick')(e),
    className: ''
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    prefix: <Account />,
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const k=["Primary","Multiple"];export{o as Multiple,n as Primary,k as __namedExportsOrder,j as default};
