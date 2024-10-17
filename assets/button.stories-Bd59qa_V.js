import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as y}from"./title-D2ajyWBg.js";import{B as e}from"./card-DK7fbpbo.js";import"./input-Dm2PXP3R.js";import"./textarea-BigHPPl8.js";import"./toggle-CJHXWvBg.js";import"./radio-DJzB3WN5.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-CGlRGtsX.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-CjyTQx-3.js";import{A as n,S as s,V as c,a as l}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const w={title:"Design System/Button",component:e,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用"},children:{description:"按鈕內容",options:["標題按鈕","客製化按鈕"]},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:i.jsx(n,{}),Search:i.jsx(s,{}),Visibility:i.jsx(c,{}),VisibilityOff:i.jsx(l,{})}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:i.jsx(n,{}),Search:i.jsx(s,{}),Visibility:i.jsx(c,{}),VisibilityOff:i.jsx(l,{})}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式"}},args:{variant:"contained",themeColor:"primary",isDisabled:!1,children:"按鈕",onClick:a("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},t={name:"主要項目",args:{themeColor:"primary",children:i.jsx(y,{children:"標題按鈕"}),size:"large",prefix:i.jsx(n,{}),onClick:r=>a("onClick")(r),className:""},render(r){return i.jsx(e,{...r,children:r.children})}},o={name:"多個按鈕",args:{variant:"outlined",themeColor:"primary",children:i.jsx(y,{children:"標題按鈕"}),prefix:i.jsx(n,{}),onClick:()=>a("onClick")("點擊事件"),className:""},render(r){return i.jsxs("div",{style:{display:"flex",gap:"16px"},children:[i.jsx(e,{...r,variant:"contained",children:r.children}),i.jsx(e,{...r,variant:"contained",themeColor:"secondary",children:r.children}),i.jsx(e,{...r,variant:"contained",themeColor:"error",children:r.children}),i.jsx(e,{...r,variant:"contained",themeColor:"tertiary",children:r.children})]})}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '主要項目',
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const R=["Primary","Multiple"];export{o as Multiple,t as Primary,R as __namedExportsOrder,w as default};
