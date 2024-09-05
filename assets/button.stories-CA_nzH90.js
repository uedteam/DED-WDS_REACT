import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as x}from"./title-D2ajyWBg.js";import{B as r}from"./styled--nv9BYyY.js";import"./input-N5eaJBkk.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-23kXNOaR.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-BWf1YFnM.js";import{A as o,S as s,V as c,a as l}from"./arrow_down-BFOf_bAR.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const E={title:"Design System/Element/Button",component:r,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",options:["標題按鈕","客製化按鈕"]},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:i.jsx(o,{}),Search:i.jsx(s,{}),Visibility:i.jsx(c,{}),VisibilityOff:i.jsx(l,{})}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:i.jsx(o,{}),Search:i.jsx(s,{}),Visibility:i.jsx(c,{}),VisibilityOff:i.jsx(l,{})}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式",control:{type:"text"}}},args:{variant:"contained",themeColor:"primary",isDisabled:!1,children:"按鈕",onClick:a("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},t={name:"標準按鈕",args:{themeColor:"primary",children:i.jsx(x,{children:"標題按鈕"}),size:"large",prefix:i.jsx(o,{}),onClick:e=>a("onClick")(e),className:""},render(e){return i.jsx(r,{...e,children:e.children})}},n={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:i.jsx(x,{children:"標題按鈕"}),prefix:i.jsx(o,{}),onClick:()=>a("onClick")("點擊事件"),className:""},render(e){return i.jsxs("div",{style:{display:"flex",gap:"16px"},children:[i.jsx(r,{...e,variant:"contained",children:e.children}),i.jsx(r,{...e,variant:"contained",themeColor:"secondary",children:e.children}),i.jsx(r,{...e,variant:"contained",themeColor:"error",children:e.children}),i.jsx(r,{...e,variant:"contained",themeColor:"tertiary",children:e.children})]})}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '標準按鈕',
  args: {
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    size: 'large',
    prefix: <AccountIcon />,
    onClick: e => action('onClick')(e),
    className: ''
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    prefix: <AccountIcon />,
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
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const _=["Primary","Multiple"];export{n as Multiple,t as Primary,_ as __namedExportsOrder,E as default};
