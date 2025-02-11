import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-454WOBUV-ChHd1ABr.js";import{e as t}from"./tooltip-SHpFvUGV.js";import"./badge-CWp9P8za.js";import"./breadcrumb-DsG1EEmH.js";import"./toast-DOFLYQAX.js";import"./checkbox-CclvOjyM.js";import"./progress-circle-CiUtLNSM.js";import"./progress-line-ERJUwswR.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-nxDNR-FF.js";import"./layout-DgebEeDV.js";import"./menu-KwTHgPj_.js";import"./radio-CMOPLxLt.js";import"./status-indicator-CzwH5rqC.js";import"./tag-BSx4PXQr.js";import"./textarea-C1-7gqFc.js";import"./title-CZRmBG9s.js";import"./toggle-Co0kfaDY.js";import"./index-RYns6xqu.js";import"./warning-tri-D1DJJwhd.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const G={title:"Component/Search",component:t,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",placeholder:"type something",isDisabled:!1,className:"",onClick:s("onClick"),onChange:s("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},a={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},o={name:"尺寸",argTypes:{size:{table:{disable:!0}}},args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(t,{...e,size:"small"}),r.jsx(t,{...e,size:"medium"}),r.jsx(t,{...e,size:"large"})]})}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const H=["Default","Size"];export{a as Default,o as Size,H as __namedExportsOrder,G as default};
