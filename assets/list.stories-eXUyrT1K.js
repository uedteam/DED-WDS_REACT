import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-ChHd1ABr.js";import{L as o}from"./tooltip-CYZ0GTsP.js";import"./badge-BPltvF_h.js";import"./breadcrumb-sosi0bwx.js";import"./toast-DS4VvDdf.js";import"./checkbox-v5UYg36H.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-1jSIhlxa.js";import"./layout-DgebEeDV.js";import"./menu-CcvxqKZd.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BvQGxf36.js";import"./tag-DmMlLLwm.js";import"./textarea-DPnzmyNM.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{b as n}from"./warning-tri-BJ-xvgh8.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const O=[{content:{label:"Option1",value:"option1",prefix:e.jsx(n,{})},isDisabled:!0},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(n,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(n,{})}}],Q={title:"Component/List",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},hasDivider:{description:"是否有分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:O,hasOutline:!1,hasDivider:!1,className:"",onSelect:h("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},t={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(r){return e.jsx(o,{...r})}},s={name:"清單樣式-外框",argTypes:{hasOutline:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(r){return e.jsx(o,{...r,hasOutline:!0})}},a={name:"清單樣式-分隔線",argTypes:{hasDivider:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<List {...args} hasDivider />`}}},render(r){return e.jsx(o,{...r,hasDivider:!0})}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} />\`
      }
    }
  },
  render(args) {
    return <List {...args} />;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '清單樣式-外框',
  argTypes: {
    hasOutline: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} hasOutline />\`
      }
    }
  },
  render(args) {
    return <List {...args} hasOutline />;
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '清單樣式-分隔線',
  argTypes: {
    hasDivider: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} hasDivider />\`
      }
    }
  },
  render(args) {
    return <List {...args} hasDivider />;
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const U=["Default","Menu","Divider"];export{t as Default,a as Divider,s as Menu,U as __namedExportsOrder,Q as default};
