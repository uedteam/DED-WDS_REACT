import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as p}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{I as c}from"./styled--nv9BYyY.js";import"./input-N5eaJBkk.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-23kXNOaR.js";import"./breadcrumb-CrM4Rt7n.js";import{a as t}from"./avatar-BWf1YFnM.js";import{A as r,b as s}from"./arrow_down-BFOf_bAR.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const z={title:"Design System/Element/Item",component:c,tags:["autodocs"],argTypes:{prefix:{description:"前置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(r,{className:"icon"}),Avatar:o.jsx(t,{size:"xsmall",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},content:{description:"內容",control:{type:"object"}},suffix:{description:"後置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(r,{className:"icon"}),Avatar:o.jsx(t,{size:"xsmall",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"項目",description:{component:"項目的呈現及說明。"}}}},e={name:"搜尋輸入框",args:{prefix:o.jsx(t,{size:"xsmall",shape:"circle",userName:"test"}),content:{label:"選項一",value:"option1"},className:"",onClick:()=>p("onClick")()},render(m){return o.jsx("div",{style:{width:"200px"},children:o.jsx(c,{...m})})}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const C=["Primary"];export{e as Primary,C as __namedExportsOrder,z as default};
