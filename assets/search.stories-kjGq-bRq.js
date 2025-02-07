import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-ChHd1ABr.js";import{e as o}from"./tooltip-BeYe04Nk.js";import"./badge-BPltvF_h.js";import"./breadcrumb-DSLqi4-x.js";import"./toast-DwcNDvV5.js";import"./checkbox-BnGhXkr7.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-BURSIgt3.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-D3ifh5CR.js";import"./layout-ZjbFUAzr.js";import"./menu-DNbdc4Xz.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-W9QNdB38.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./warning-tri-BY3sPlw-.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const G={title:"Component/Search",component:o,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:a("onClick"),onChange:a("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},s={name:"搜尋尺寸",args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(o,{...e,size:"small"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"large"})]})}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '搜尋尺寸',
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
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const H=["Default","Size"];export{t as Default,s as Size,H as __namedExportsOrder,G as default};
