import{j as a}from"./jsx-runtime-DEdD30eg.js";import{L as t}from"./line-progress-DCY5z2ah.js";import"./index-RYns6xqu.js";import"./styled-CaWuYePh.js";const g={title:"Design System/Line-Progress",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"客製化樣式"},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},height:{description:"線條寬度",control:{type:"range",min:1,max:10,step:1}},label:{description:"進度指示標籤"}},args:{themeColor:"primary",percent:0,height:10},parameters:{docs:{title:"長條進度指示",description:{component:"長條進度指示組件的呈現及說明。"}}}},r={name:"主要項目",args:{className:""},render(n){return a.jsx(t,{...n})}};var e,s,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    className: ''
  },
  render(args) {
    return <LineProgress {...args} />;
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const d=["Primary"];export{r as Primary,d as __namedExportsOrder,g as default};
