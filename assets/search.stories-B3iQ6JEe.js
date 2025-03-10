import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as t}from"./dashboard-BN7uNLRv.js";import"./badge-dQZV2GFR.js";import"./breadcrumb-C-FBoaba.js";import"./toast-jwbKr4Oe.js";import"./checkbox-B0KnDoZ3.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-xlCgWV6E.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-DJ6IV6nG.js";import"./textarea-B3sPnM2u.js";import"./title-Cl2MDiva.js";import"./toggle-Co0kfaDY.js";import"./menu-kGy3ruG_.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./auth-flow-B5dvVafu.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-aIaTAFys.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const J={title:"Component/Search",component:t,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",placeholder:"Type something",isDisabled:!1,className:"",onClick:s("onClick"),onChange:s("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},a={name:"元件尺寸",argTypes:{size:{table:{disable:!0}}},args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(t,{...e,size:"large"}),r.jsx(t,{...e,size:"medium"}),r.jsx(t,{...e,size:"small"})]})}};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '元件尺寸',
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <Search {...args} size="large" />
        <Search {...args} size="medium" />
        <Search {...args} size="small" />
      </div>;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const K=["Default","Size"];export{o as Default,a as Size,K as __namedExportsOrder,J as default};
