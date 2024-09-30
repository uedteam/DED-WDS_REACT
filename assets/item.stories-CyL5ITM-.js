import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as p}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{I as c}from"./styled-BmC6f_Fd.js";import"./input-BKxMs16e.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-DIGOCa7m.js";import"./breadcrumb-CrM4Rt7n.js";import{a as t}from"./avatar-C_zpfkBU.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import{A as r,b as s}from"./plus-BRnIQ61m.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const _={title:"Design System/Element/Item",component:c,tags:["autodocs"],argTypes:{prefix:{description:"前置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(r,{className:"icon"}),Avatar:o.jsx(t,{size:"xsmall",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},content:{description:"內容",control:{type:"object"}},suffix:{description:"後置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(r,{className:"icon"}),Avatar:o.jsx(t,{size:"xsmall",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"項目",description:{component:"項目的呈現及說明。"}}}},e={name:"搜尋輸入框",args:{prefix:o.jsx(t,{size:"xsmall",shape:"circle",userName:"test"}),content:{label:"選項一",value:"option1"},className:"",onClick:()=>p("onClick")()},render(m){return o.jsx("div",{style:{width:"200px"},children:o.jsx(c,{...m})})}};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const P=["Primary"];export{e as Primary,P as __namedExportsOrder,_ as default};
