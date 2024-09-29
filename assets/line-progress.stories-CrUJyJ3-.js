import{j as a}from"./jsx-runtime-DEdD30eg.js";import{L as o}from"./line-progress-DCY5z2ah.js";import"./index-RYns6xqu.js";import"./styled-CaWuYePh.js";const d={title:"Design System/Element/Line-Progress",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"客製化樣式",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},height:{description:"線條寬度",control:{type:"range",min:1,max:10,step:1}}},args:{themeColor:"primary",percent:0,height:10},parameters:{docs:{title:"Radio Button",description:{component:"Radio Button 組件的呈現及說明。"}}}},r={name:"長條進度指示",args:{className:""},render(n){return a.jsx(o,{...n})}};var e,s,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '長條進度指示',
  args: {
    className: ''
  },
  render(args) {
    return <LineProgress {...args} />;
  }
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const g=["Primary"];export{r as Primary,g as __namedExportsOrder,d as default};
