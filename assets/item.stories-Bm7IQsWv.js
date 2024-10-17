import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as p}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{I as c}from"./card-DK7fbpbo.js";import"./input-Dm2PXP3R.js";import"./textarea-BigHPPl8.js";import"./toggle-CJHXWvBg.js";import"./radio-DJzB3WN5.js";import"./breadcrumb-CrM4Rt7n.js";import{a as t}from"./avatar-CGlRGtsX.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-CjyTQx-3.js";import{A as e,b as s}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const P={title:"Design System/Item",component:c,tags:["autodocs"],argTypes:{prefix:{description:"前置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(e,{className:"icon"}),Avatar:o.jsx(t,{size:"small",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},content:{description:"內容",control:{type:"object"}},suffix:{description:"後置元件",options:["None","Account","Avatar","ArrowDownIcon"],mapping:{None:null,Account:o.jsx(e,{className:"icon"}),Avatar:o.jsx(t,{size:"small",shape:"circle",userName:"test"}),ArrowDownIcon:o.jsx(s,{className:"icon"})}},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"項目",description:{component:"項目的呈現及說明。"}}}},r={name:"主要項目",args:{prefix:o.jsx(t,{size:"small",shape:"circle",userName:"test"}),content:{label:"選項一",value:"option1"},className:"",onClick:()=>p("onClick")()},render(m){return o.jsx("div",{style:{width:"200px"},children:o.jsx(c,{...m})})}};var a,i,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    prefix: <Avatar size="small" shape="circle" userName="test" />,
    content: {
      label: '選項一',
      value: 'option1'
    },
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const S=["Primary"];export{r as Primary,S as __namedExportsOrder,P as default};
