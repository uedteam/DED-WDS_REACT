import{j as a}from"./jsx-runtime-DEdD30eg.js";import{T as n}from"./title-CxBw0cz2.js";import"./index-RYns6xqu.js";const l={title:"Design System/Atoms/Title",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},r={name:"標題",args:{themeColor:"primary",children:"標題",className:""},render(e){return a.jsx(n,{...e,children:e.children})}};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '標題',
  args: {
    themeColor: 'primary',
    children: '標題',
    className: ''
  },
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const p=["Primary"];export{r as Primary,p as __namedExportsOrder,l as default};
