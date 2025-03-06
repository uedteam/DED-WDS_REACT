import{j as c}from"./jsx-runtime-DEdD30eg.js";import{a as l}from"./chunk-454WOBUV-CM0pFb8Z.js";import{D as a}from"./dashboard-COVMMoRo.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-aIaTAFys.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./string-BqrfsRv8.js";import"./badge-CWp9P8za.js";import"./breadcrumb-TCnn8lMP.js";import"./toast-C2hixRTe.js";import"./close-o-4V2u0k.js";import"./title-CZRmBG9s.js";import"./index-sbqOYYIm.js";import"./checkbox-BmwS-2If.js";import"./check-BnJBHFpS.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-BM3BOMDl.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-DJ6IV6nG.js";import"./textarea-B3sPnM2u.js";import"./toggle-Co0kfaDY.js";import"./menu-D4zb9J0r.js";import"./auth-flow-ByVP1aHn.js";const H={title:"Component/DatePicker",component:a,tags:["autodocs"],argTypes:{value:{description:"日期",table:{category:"PROPS"}},format:{description:"日期格式",table:{category:"PROPS"}},placeholder:{description:"提示文字(請注意與format格式相符)",table:{category:"PROPS"}},isRange:{description:"日期區間",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"日期更改事件",table:{category:"EVENTS"}}},args:{value:"",format:"yyyy/mm/dd",isRange:!1,placeholder:"YYYY/MM/DD",className:"",onChange:l("onChange")},parameters:{docs:{title:"日期",description:{component:"日期組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render(t){return c.jsx(a,{...t})}},r={name:"日期區間",argTypes:{value:{table:{disable:!0}},placeholder:{table:{disable:!0}},isRange:{table:{disable:!0}}},args:{isRange:!0},render(t){return c.jsx(a,{...t})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <DatePicker {...args} />;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '日期區間',
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    placeholder: {
      table: {
        disable: true
      }
    },
    isRange: {
      table: {
        disable: true
      }
    }
  },
  args: {
    isRange: true
  },
  render(args) {
    return <DatePicker {...args} />;
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const I=["Default","Range"];export{e as Default,r as Range,I as __namedExportsOrder,H as default};
