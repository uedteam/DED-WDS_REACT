import{j as n}from"./jsx-runtime-DEdD30eg.js";import{L as o}from"./progress-line-DvRcyvhi.js";import"./index-RYns6xqu.js";import"./useCounter-DpfJ3ATo.js";const g={title:"Component/Progress-Line",component:o,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{label:"Label",percent:65,strokeWidth:10,className:""},parameters:{docs:{title:"Line Progress",description:{component:"長條進度指示組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render(a){return n.jsx(o,{...a})}};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <LineProgress {...args} />;
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,g as default};
