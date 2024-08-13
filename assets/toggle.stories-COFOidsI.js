import{j as a}from"./jsx-runtime-DEdD30eg.js";import{T as s}from"./toggle-B5WExjql.js";import"./index-RYns6xqu.js";const p={title:"Design System/Element/Toggle",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},checkChildren:{description:"開啟文字",control:{type:"text"}},unCheckChildren:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onChange:{description:"開關事件",action:"onChange"},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"開關按鈕",description:{component:"開關按鈕組件的呈現及說明。"}}}},e={name:"切換按鈕",args:{themeColor:"primary",isChecked:!1,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},render(t){return a.jsx(s,{...t})}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '切換按鈕',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: ''
  },
  render(args) {
    return <Toggle {...args} />;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const d=["Primary"];export{e as Primary,d as __namedExportsOrder,p as default};
