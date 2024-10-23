import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as l}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-BeUUUaOK.js";import{B as n}from"./card-CJ_QUIpD.js";import"./checkbox-DKKX1wwo.js";import"./input-Bcx9qKJo.js";import"./textarea-C1_2O7ml.js";import"./toggle-xIt_69v7.js";import"./radio-D2b4GCX4.js";import"./breadcrumb-C1pwdv1X.js";import"./avatar-BfuDsxqz.js";import"./progress-circle-CwKMVC63.js";import"./progress-line-BtL8AAbK.js";import"./styled-CaWuYePh.js";import"./menu-DgvEGrP7.js";import{A as a,S as c,V as d,a as p}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";import"./arrow_down-DA-sWbvp.js";const P={title:"Design System/Button",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]}},isDisabled:{description:"是否禁用"},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(c,{}),Visibility:e.jsx(d,{}),VisibilityOff:e.jsx(p,{})}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(c,{}),Visibility:e.jsx(d,{}),VisibilityOff:e.jsx(p,{})}},children:{description:"按鈕內容",options:["標題按鈕","客製化按鈕"]},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式"}},args:{themeColor:"primary",variant:"contained",size:"medium",isDisabled:!1,prefix:null,suffix:null,children:"按鈕",onClick:l("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(r){return e.jsx(n,{...r,children:r.children})}},t={name:"附加元素",args:{themeColor:"primary",variant:"outlined",children:"標題按鈕",onClick:()=>l("onClick")("點擊事件"),className:""},render(r){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[e.jsx(n,{...r,prefix:e.jsx(a,{}),children:r.children}),e.jsx(n,{...r,suffix:e.jsx(c,{}),children:r.children})]})}},o={name:"按鈕樣式",args:{themeColor:"primary",variant:"outlined",children:"標題按鈕",suffix:null,onClick:()=>l("onClick")("點擊事件"),className:""},render(r){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[e.jsx(n,{...r,variant:"contained",children:r.children}),e.jsx(n,{...r,variant:"outlined",children:r.children}),e.jsx(n,{...r,variant:"text",children:r.children})]})}},s={name:"主題色彩",args:{variant:"outlined",children:"標題按鈕",prefix:e.jsx(a,{}),suffix:null,onClick:()=>l("onClick")("點擊事件"),className:""},render(r){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[e.jsx(n,{...r,themeColor:"primary",children:r.children}),e.jsx(n,{...r,themeColor:"secondary",children:r.children}),e.jsx(n,{...r,themeColor:"tertiary",children:r.children}),e.jsx(n,{...r,themeColor:"info",children:r.children}),e.jsx(n,{...r,themeColor:"success",children:r.children}),e.jsx(n,{...r,themeColor:"warning",children:r.children}),e.jsx(n,{...r,themeColor:"error",children:r.children})]})}};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    themeColor: 'primary',
    variant: 'outlined',
    children: '標題按鈕',
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} prefix={<AccountIcon />}>
          {args.children}
        </Button>
        <Button {...args} suffix={<SearchIcon />}>
          {args.children}
        </Button>
      </div>;
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,C,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '按鈕樣式',
  args: {
    themeColor: 'primary',
    variant: 'outlined',
    children: '標題按鈕',
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} variant="contained">
          {args.children}
        </Button>
        <Button {...args} variant="outlined">
          {args.children}
        </Button>
        <Button {...args} variant="text">
          {args.children}
        </Button>
      </div>;
  }
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var B,v,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    variant: 'outlined',
    children: '標題按鈕',
    prefix: <AccountIcon />,
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} themeColor="primary">
          {args.children}
        </Button>
        <Button {...args} themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} themeColor="tertiary">
          {args.children}
        </Button>
        <Button {...args} themeColor="info">
          {args.children}
        </Button>
        <Button {...args} themeColor="success">
          {args.children}
        </Button>
        <Button {...args} themeColor="warning">
          {args.children}
        </Button>
        <Button {...args} themeColor="error">
          {args.children}
        </Button>
      </div>;
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const Q=["Default","Additional","Shape","Theme"];export{t as Additional,i as Default,o as Shape,s as Theme,Q as __namedExportsOrder,P as default};
