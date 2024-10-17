import{j as i}from"./jsx-runtime-DEdD30eg.js";import{T as n}from"./title-D2ajyWBg.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";const p={title:"Design System/Title",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},level:{description:"標題等級",control:{type:"select",options:[0,1,2,3,4,5,6]}},children:{description:"標題內容"},className:{description:"客製化樣式"}},parameters:{docs:{title:"標題",description:{component:"標題組件的呈現及說明。"}}}},e={name:"主要項目",args:{themeColor:"primary",level:0,children:"標題",className:""},render(r){return i.jsx(n,{...r,children:r.children})}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    themeColor: 'primary',
    level: 0,
    children: '標題',
    className: ''
  },
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const d=["Primary"];export{e as Primary,d as __namedExportsOrder,p as default};
