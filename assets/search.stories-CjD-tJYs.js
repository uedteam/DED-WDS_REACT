import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-ChHd1ABr.js";import{f as o}from"./tooltip-GfprZ0Z4.js";import"./badge-vsbKzH_B.js";import"./checkbox-wrczPlMV.js";import"./progress-circle-xnhIhzfk.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./layout-ZjbFUAzr.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./title-BBnafEgB.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./warning-tri-Y1-2BlEi.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./notification-NM2mg_B2.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const A={title:"Component/Search",component:o,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:a("onClick"),onChange:a("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},t={name:"搜尋尺寸",args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(o,{...e,size:"small"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"large"})]})}};var i,m,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const B=["Default","Size"];export{s as Default,t as Size,B as __namedExportsOrder,A as default};
