import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-454WOBUV-ChHd1ABr.js";import{R as a}from"./radio-DJzB3WN5.js";import"./index-RYns6xqu.js";import"./auo-0es9FKg1.js";import"./check-BnJBHFpS.js";const g={title:"Design System/Radio",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"客製化樣式"},options:{description:"選項"},direction:{description:"方向",control:{type:"select",options:["row","column"]}},initValue:{description:"預設值"},onChange:{description:"選擇選項後的事件",action:"onChange"}},args:{direction:"row"},parameters:{docs:{title:"Radio Button",description:{component:"Radio Button 組件的呈現及說明。"}}}},o={name:"主要項目",args:{className:"",options:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],initValue:"option3",onChange:n=>{s("onChange")(n)}},render(n){return i.jsx(a,{...n})}};var e,r,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '主要項目',
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
    initValue: 'option3',
    onChange: e => {
      action('onChange')(e);
    }
  },
  render(args) {
    return <Radio {...args} />;
  }
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const y=["Primary"];export{o as Primary,y as __namedExportsOrder,g as default};
