import{j as n}from"./jsx-runtime-DEdD30eg.js";import{A as o}from"./avatar-ZhERyiQI.js";import"./index-RYns6xqu.js";import"./search-ze-2lSrK.js";import"./offline-Ddz6ifNG.js";import"./arrow_down-CDz-ClYA.js";const u={title:"Design System/Element/Avatar",component:o,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"select",options:["xsmall","small","medium","large"]}},shape:{description:"形狀",control:{type:"radio",options:["circle","square"]}},status:{description:"狀態",control:{type:"select",options:["online","idle","busy","offline"]}},imageSrc:{description:"圖片連結",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},e={name:"線上頭像",args:{shape:"circle",size:"medium",userName:"Kevin",status:"online",imageSrc:"https://picsum.photos/320/240",className:""},render(a){return n.jsx(o,{...a})}};var s,t,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '線上頭像',
  args: {
    shape: 'circle',
    size: 'medium',
    userName: 'Kevin',
    status: 'online',
    imageSrc: 'https://picsum.photos/320/240',
    className: ''
  },
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const g=["Primary"];export{e as Primary,g as __namedExportsOrder,u as default};