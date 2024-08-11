import{j as s}from"./jsx-runtime-DEdD30eg.js";import{R as t}from"./radio-CW7ydt8x.js";import"./index-RYns6xqu.js";import"./check-BnJBHFpS.js";const m={title:"Design System/Element/Radio",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"標題樣式",control:{type:"text"}},options:{description:"選項",control:{type:"object"}},direction:{description:"方向",options:["row","column"],control:{type:"radio",options:["row","column"]}},value:{description:"值",control:{type:"text"}},onChange:{description:"選擇選項後的事件",action:"onChange"}},args:{direction:"row"},parameters:{docs:{title:"Radio Button",description:{component:"Radio Button 組件的呈現及說明。"}}}},o={name:"標準 radio button",args:{className:"",options:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],value:"option3"},render(a){return s.jsx(t,{...a,onChange:i=>console.log(i)})}};var e,n,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '標準 radio button',
  args: {
    className: '',
    options: [{
      label: '選項一',
      value: 'option1'
    }, {
      label: '選項二',
      value: 'option2'
    }, {
      label: '選項三',
      value: 'option3'
    }],
    value: 'option3'
  },
  render(args) {
    return <Radio {...args} onChange={value => console.log(value)} />;
  }
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const u=["Primary"];export{o as Primary,u as __namedExportsOrder,m as default};
