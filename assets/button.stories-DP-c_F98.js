import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as l}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as d}from"./title-BeUUUaOK.js";import{B as i}from"./card-BYF42p1t.js";import"./checkbox-DKKX1wwo.js";import"./input-Bcx9qKJo.js";import"./textarea-C1_2O7ml.js";import"./toggle-Cezsu140.js";import"./radio-D2b4GCX4.js";import"./breadcrumb-C1pwdv1X.js";import"./avatar-DLZ89yyf.js";import"./progress-circle-CwKMVC63.js";import"./progress-line-BtL8AAbK.js";import"./styled-CaWuYePh.js";import"./menu-DgvEGrP7.js";import{A as a,S as c,V as p,a as m}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";import"./arrow_down-DA-sWbvp.js";const Q={title:"Design System/Button",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]}},isDisabled:{description:"是否禁用"},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(c,{}),Visibility:e.jsx(p,{}),VisibilityOff:e.jsx(m,{})}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(c,{}),Visibility:e.jsx(p,{}),VisibilityOff:e.jsx(m,{})}},children:{description:"按鈕內容",options:["標題按鈕","客製化按鈕"]},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式"}},args:{themeColor:"primary",variant:"contained",size:"medium",isDisabled:!1,prefix:null,suffix:null,children:"按鈕",onClick:l("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},n={name:"預設項目",args:{},render(r){return e.jsx(i,{...r,children:r.children})}},t={name:"附加元素",args:{themeColor:"primary",variant:"outlined",children:e.jsx(d,{children:"標題按鈕"}),onClick:()=>l("onClick")("點擊事件"),className:""},render(r){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[e.jsx(i,{...r,prefix:e.jsx(a,{}),children:r.children}),e.jsx(i,{...r,suffix:e.jsx(c,{}),children:r.children})]})}},o={name:"按鈕樣式",args:{themeColor:"primary",variant:"outlined",children:e.jsx(d,{children:"標題按鈕"}),suffix:null,onClick:()=>l("onClick")("點擊事件"),className:""},render(r){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[e.jsx(i,{...r,variant:"contained",children:r.children}),e.jsx(i,{...r,variant:"outlined",children:r.children}),e.jsx(i,{...r,variant:"text",children:r.children})]})}},s={name:"主題色彩",args:{variant:"outlined",children:e.jsx(d,{children:"標題按鈕"}),prefix:e.jsx(a,{}),suffix:null,onClick:()=>l("onClick")("點擊事件"),className:""},render(r){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[e.jsx(i,{...r,themeColor:"primary",children:r.children}),e.jsx(i,{...r,themeColor:"secondary",children:r.children}),e.jsx(i,{...r,themeColor:"tertiary",children:r.children}),e.jsx(i,{...r,themeColor:"info",children:r.children}),e.jsx(i,{...r,themeColor:"success",children:r.children}),e.jsx(i,{...r,themeColor:"warning",children:r.children}),e.jsx(i,{...r,themeColor:"error",children:r.children})]})}};var u,h,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,y,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    themeColor: 'primary',
    variant: 'outlined',
    children: <Title>標題按鈕</Title>,
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
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var C,j,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '按鈕樣式',
  args: {
    themeColor: 'primary',
    variant: 'outlined',
    children: <Title>標題按鈕</Title>,
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
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var v,k,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    variant: 'outlined',
    children: <Title>標題按鈕</Title>,
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
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const U=["Default","Additional","Shape","Theme"];export{t as Additional,n as Default,o as Shape,s as Theme,U as __namedExportsOrder,Q as default};
