import{j as i}from"./jsx-runtime-DEdD30eg.js";import{T as s}from"./title-DUk0UITg.js";import"./index-RYns6xqu.js";const p={title:"Design System/Element/Title",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},level:{description:"標題等級",control:{type:"select",options:[0,1,2,3,4,5,6]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},e={name:"標題",args:{themeColor:"primary",children:"標題"},render(r){return i.jsx(s,{...r,children:r.children})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '標題',
  args: {
    themeColor: 'primary',
    children: '標題'
  },
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const m=["Primary"];export{e as Primary,m as __namedExportsOrder,p as default};
