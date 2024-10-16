import{j as a}from"./jsx-runtime-DEdD30eg.js";import{C as o}from"./circle-progress-CPe7smUW.js";import"./index-RYns6xqu.js";import"./styled-CaWuYePh.js";const d={title:"Design System/Circle-Progress",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"客製化樣式",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:10,step:1}}},args:{percent:0,size:100,strokeWidth:10},parameters:{docs:{title:"Radio Button",description:{component:"Radio Button 組件的呈現及說明。"}}}},r={name:"圓形進度指示",args:{className:""},render(n){return a.jsx(o,{...n})}};var e,s,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '圓形進度指示',
  args: {
    className: ''
  },
  render(args) {
    return <CircleProgress {...args} />;
  }
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const g=["Primary"];export{r as Primary,g as __namedExportsOrder,d as default};
