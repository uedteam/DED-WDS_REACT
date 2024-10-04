import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as y}from"./title-D2ajyWBg.js";import{B as r}from"./styled-Bq4E00aR.js";import"./input-Dm2PXP3R.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-Cxu-tw8b.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-DZcf6x5w.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-DLa2x_C0.js";import{A as n,S as s,V as c,a as l}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const R={title:"Design System/Element/Button",component:r,tags:["autodocs"],decorators:[(i,{parameters:f})=>{const{pageLayout:g}=f;switch(g){case"page":return e.jsx("div",{className:"page-layout",children:e.jsx(i,{})});case"page-mobile":return e.jsx("div",{className:"page-mobile-layout",children:e.jsx(i,{})});default:return e.jsx(i,{})}}],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},children:{description:"按鈕內容",options:["標題按鈕","客製化按鈕"]},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(n,{}),Search:e.jsx(s,{}),Visibility:e.jsx(c,{}),VisibilityOff:e.jsx(l,{})}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(n,{}),Search:e.jsx(s,{}),Visibility:e.jsx(c,{}),VisibilityOff:e.jsx(l,{})}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式",control:{type:"text"}}},args:{variant:"contained",themeColor:"primary",isDisabled:!1,children:"按鈕",onClick:a("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},t={name:"標準按鈕",args:{themeColor:"primary",children:e.jsx(y,{children:"標題按鈕"}),size:"large",prefix:e.jsx(n,{}),onClick:i=>a("onClick")(i),className:""},render(i){return e.jsx(r,{...i,children:i.children})}},o={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:e.jsx(y,{children:"標題按鈕"}),prefix:e.jsx(n,{}),onClick:()=>a("onClick")("點擊事件"),className:""},render(i){return e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(r,{...i,variant:"contained",children:i.children}),e.jsx(r,{...i,variant:"contained",themeColor:"secondary",children:i.children}),e.jsx(r,{...i,variant:"contained",themeColor:"error",children:i.children}),e.jsx(r,{...i,variant:"contained",themeColor:"tertiary",children:i.children})]})}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Primary","Multiple"];export{o as Multiple,t as Primary,q as __namedExportsOrder,R as default};
