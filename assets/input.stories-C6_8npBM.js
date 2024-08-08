import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import{S as l}from"./search-W5KoqDRI.js";import{I as o}from"./input-BWOk9iSP.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./style-BG61KOMt.js";const S={title:"Design System/Element/Input",component:o,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},value:{description:"輸入值",control:{type:"text"}},onChange:{description:"輸入事件",action:"changed"}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},r={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ...",hint:{error:"",description:""},onChange:e=>d("onChange")(e)},render(e){return t.jsx(o,{...e})}},n={name:"搜尋",args:{className:"",prefix:t.jsx(l,{}),placeholder:"請輸入帳號 ...",hint:{error:"",description:""}},render(e){return t.jsx(o,{...e})}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...',
    hint: {
      error: '',
      description: ''
    },
    onChange: e => action('onChange')(e)
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '搜尋',
  args: {
    className: '',
    prefix: <Search />,
    placeholder: '請輸入帳號 ...',
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const j=["Primary","InputWithIcon"];export{n as InputWithIcon,r as Primary,j as __namedExportsOrder,S as default};
