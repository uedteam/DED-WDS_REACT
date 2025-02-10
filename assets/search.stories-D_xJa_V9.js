import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as o}from"./chunk-454WOBUV-ChHd1ABr.js";import{e as t}from"./tooltip-BaPqchHM.js";import"./badge-BPltvF_h.js";import"./breadcrumb-D9hZ6nwX.js";import"./toast-_qk7dVr8.js";import"./checkbox-BnGhXkr7.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-2T3fy2De.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-BV9A8HRV.js";import"./input-pt8Ow9OS.js";import"./layout-DgebEeDV.js";import"./menu-CZmZ_eer.js";import"./radio-CMOPLxLt.js";import"./status-indicator-CulQZKO6.js";import"./tag-W9QNdB38.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./warning-tri-BY3sPlw-.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const G={title:"Component/Search",component:t,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:o("onClick"),onChange:o("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},a={name:"尺寸",argTypes:{size:{table:{disable:!0}}},args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(t,{...e,size:"small"}),r.jsx(t,{...e,size:"medium"}),r.jsx(t,{...e,size:"large"})]})}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '尺寸',
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
        <Search {...args} size="small" />
        <Search {...args} size="medium" />
        <Search {...args} size="large" />
      </div>;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const H=["Default","Size"];export{s as Default,a as Size,H as __namedExportsOrder,G as default};
