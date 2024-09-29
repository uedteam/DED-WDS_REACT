import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-454WOBUV-ChHd1ABr.js";import{S as o}from"./slider-D6GsoAjM.js";import"./index-RYns6xqu.js";const l={title:"Design System/Element/Slider",component:o,tags:["autodocs"],argTypes:{max:{description:"最大值",control:{type:"number"}},min:{description:"最小值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initialValue:{description:"初始值",control:{type:"number"}},onChange:{description:"值改變事件",action:"onChange"},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"Slider 的呈現及說明。"}}}},e={name:"Slider",args:{min:0,max:100,step:1,initialValue:0,unit:"℃",onChange:s("onChange")},render(i){return a.jsx(o,{...i})}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Slider',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initialValue: 0,
    unit: '℃',
    onChange: action('onChange')
  },
  render(args) {
    return <Slider {...args} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const u=["Primary"];export{e as Primary,u as __namedExportsOrder,l as default};
