import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{i as t}from"./dashboard-Tdo9JwBb.js";import"./badge-CWp9P8za.js";import"./breadcrumb-CYcF5gjr.js";import"./toast-Dm8UHK9O.js";import"./checkbox-D6RDPsQd.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./auth-flow-DfX0azyS.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-Bus3m9Ej.js";import"./title-CZRmBG9s.js";import"./toggle-Co0kfaDY.js";import"./menu-DTWCQBFx.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./index-RYns6xqu.js";import"./warning-tri-BnRwNKC6.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const G={title:"Component/Search",component:t,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",placeholder:"Type something",isDisabled:!1,className:"",onClick:s("onClick"),onChange:s("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},a={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},o={name:"元件尺寸",argTypes:{size:{table:{disable:!0}}},args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(t,{...e,size:"large"}),r.jsx(t,{...e,size:"medium"}),r.jsx(t,{...e,size:"small"})]})}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const H=["Default","Size"];export{a as Default,o as Size,H as __namedExportsOrder,G as default};
