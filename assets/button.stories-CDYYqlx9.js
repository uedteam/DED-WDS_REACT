import{j as r}from"./jsx-runtime-DEdD30eg.js";import{B as t,a as i}from"./button-VSrmaLmA.js";import{T as m}from"./title-CxBw0cz2.js";import{S as h}from"./account_circle-VVf7P708.js";import"./index-RYns6xqu.js";const v={title:"Design System/Atoms/Button",component:t,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"按鈕客製化樣式",control:{type:"text"}}},args:{variant:"contained",themeColor:"primary",isDisabled:!1,children:"按鈕",onClick:i("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},n={name:"標準按鈕",args:{themeColor:"primary",children:r.jsx(m,{level:4,children:"標題按鈕"}),prefix:r.jsx(h,{}),onClick:e=>i("onClick")(e),className:""},render(e){return r.jsx(t,{...e,children:e.children})}},o={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:r.jsx(m,{level:5,children:"標題按鈕"}),prefix:r.jsx(h,{width:24,height:24}),onClick:()=>i("onClick")("點擊事件"),className:""},render(e){return r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(t,{...e,variant:"contained",children:e.children}),r.jsx(t,{...e,variant:"contained",themeColor:"secondary",children:e.children}),r.jsx(t,{...e,variant:"contained",themeColor:"error",children:e.children}),r.jsx(t,{...e,variant:"contained",themeColor:"tertiary",children:e.children})]})}};var a,c,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '標準按鈕',
  args: {
    themeColor: 'primary',
    children: <Title level={4}>標題按鈕</Title>,
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Primary","Multiple"];export{o as Multiple,n as Primary,f as __namedExportsOrder,v as default};
