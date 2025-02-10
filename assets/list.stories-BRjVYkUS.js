import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-ChHd1ABr.js";import{L as n}from"./tooltip-BaPqchHM.js";import"./badge-BPltvF_h.js";import"./breadcrumb-D9hZ6nwX.js";import"./toast-_qk7dVr8.js";import"./checkbox-BnGhXkr7.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-2T3fy2De.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-BV9A8HRV.js";import"./input-pt8Ow9OS.js";import"./layout-DgebEeDV.js";import"./menu-CZmZ_eer.js";import"./radio-CMOPLxLt.js";import"./status-indicator-CulQZKO6.js";import"./tag-W9QNdB38.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{b as o}from"./warning-tri-BY3sPlw-.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const O=[{content:{label:"Option1",value:"option1",prefix:e.jsx(o,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(o,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(o,{})}}],K={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},hasDivider:{description:"是否有分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:O,hasOutline:!1,hasDivider:!1,className:"",onSelect:h("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},t={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(r){return e.jsx(n,{...r})}},s={name:"清單樣式-外框",argTypes:{hasOutline:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(r){return e.jsx(n,{...r,hasOutline:!0})}},a={name:"清單樣式-分隔線",argTypes:{hasDivider:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<List {...args} hasDivider />`}}},render(r){return e.jsx(n,{...r,hasDivider:!0})}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Q=["Default","Menu","Divider"];export{t as Default,a as Divider,s as Menu,Q as __namedExportsOrder,K as default};
