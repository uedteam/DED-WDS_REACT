import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-454WOBUV-ChHd1ABr.js";import{e as t}from"./tooltip-DA0EJluq.js";import"./badge-BPltvF_h.js";import"./breadcrumb-CejQTDj4.js";import"./toast-DROsf-Rd.js";import"./checkbox-Cq4ng9DF.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-CBKQd-QM.js";import"./layout-DgebEeDV.js";import"./menu-DKPIbTp-.js";import"./radio-DmdC9FLH.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-gKTSkn4a.js";import"./textarea-r7CXvhUd.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./warning-tri-D1aSkfBJ.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const H={title:"Component/Search",component:t,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",placeholder:"Type something",isDisabled:!1,className:"",onClick:s("onClick"),onChange:s("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},a={name:"元件尺寸",argTypes:{size:{table:{disable:!0}}},args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(t,{...e,size:"large"}),r.jsx(t,{...e,size:"medium"}),r.jsx(t,{...e,size:"small"})]})}};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const I=["Default","Size"];export{o as Default,a as Size,I as __namedExportsOrder,H as default};
