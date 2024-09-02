import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as p}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{I as c}from"./styled-D1uTOmsp.js";import"./input-vZVoMv7z.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-CILhnVxj.js";import"./breadcrumb-CrM4Rt7n.js";import{a as r}from"./avatar-ZhERyiQI.js";import{A as t}from"./search-ze-2lSrK.js";import"./index-RYns6xqu.js";import{A as s}from"./arrow_down-CDz-ClYA.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./lock-DKT4ZBgT.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const E={title:"Design System/Element/Item",component:c,tags:["autodocs"],argTypes:{prefix:{description:"前置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(t,{className:"icon"}),Avatar:o.jsx(r,{size:"xsmall",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},content:{description:"內容",control:{type:"object"}},suffix:{description:"後置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(t,{className:"icon"}),Avatar:o.jsx(r,{size:"xsmall",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"項目",description:{component:"項目的呈現及說明。"}}}},e={name:"搜尋輸入框",args:{prefix:o.jsx(r,{size:"xsmall",shape:"circle",userName:"test"}),content:{label:"選項一",value:"option1"},className:"",onClick:()=>p("onClick")()},render(m){return o.jsx("div",{style:{width:"200px"},children:o.jsx(c,{...m})})}};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
    content: {
      label: '選項一',
      value: 'option1'
      // href: 'https://www.google.com',
    },
    // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,

    className: '',
    onClick: () => action('onClick')()
  },
  render(args) {
    return <div style={{
      width: '200px'
    }}>
        <Item {...args} />
      </div>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,E as default};
