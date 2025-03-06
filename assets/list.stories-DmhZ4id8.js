import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-CM0pFb8Z.js";import{L as o}from"./dashboard-kgFD7tFH.js";import"./badge-BPltvF_h.js";import"./breadcrumb-CEZkuNAx.js";import"./toast-CZM79-c6.js";import"./checkbox-BmwS-2If.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-CzHjBFtL.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-CT__RalH.js";import"./textarea-B3sPnM2u.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-DHam_mh4.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./auth-flow-J6yiVpO1.js";import{b as n}from"./warning-tri-aIaTAFys.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const O=[{label:"Option1",value:"option1",prefix:r.jsx(n,{}),isDisabled:!0},{label:"Option2",value:"option2",href:"#",prefix:r.jsx(n,{})},{label:"Option3",value:"option3",href:"#",prefix:r.jsx(n,{})}],W={title:"Component/List",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},hasDivider:{description:"是否有分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:O,hasOutline:!1,hasDivider:!1,className:"",onSelect:h("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},s={name:"清單樣式-外框",argTypes:{hasOutline:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(e){return r.jsx(o,{...e,hasOutline:!0})}},a={name:"清單樣式-分隔線",argTypes:{hasDivider:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<List {...args} hasDivider />`}}},render(e){return r.jsx(o,{...e,hasDivider:!0})}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <List {...args} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const X=["Default","Menu","Divider"];export{t as Default,a as Divider,s as Menu,X as __namedExportsOrder,W as default};
