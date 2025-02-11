import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-ChHd1ABr.js";import{L as n}from"./tooltip-SHpFvUGV.js";import"./badge-CWp9P8za.js";import"./breadcrumb-DsG1EEmH.js";import"./toast-DOFLYQAX.js";import"./checkbox-CclvOjyM.js";import"./progress-circle-CiUtLNSM.js";import"./progress-line-ERJUwswR.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-nxDNR-FF.js";import"./layout-DgebEeDV.js";import"./menu-KwTHgPj_.js";import"./radio-CMOPLxLt.js";import"./status-indicator-CzwH5rqC.js";import"./tag-BSx4PXQr.js";import"./textarea-C1-7gqFc.js";import"./title-CZRmBG9s.js";import"./toggle-Co0kfaDY.js";import{b as o}from"./warning-tri-D1DJJwhd.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const O=[{content:{label:"Option1",value:"option1",prefix:e.jsx(o,{})},isDisabled:!0},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(o,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(o,{})}}],K={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},hasDivider:{description:"是否有分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:O,hasOutline:!1,hasDivider:!1,className:"",onSelect:h("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},t={name:"預設項目",args:{},parameters:{docs:{source:{code:`
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
