import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-ChHd1ABr.js";import{I as t}from"./input-Bsv9jzlY.js";import{A as r,S as a,V as c,a as p,C as o}from"./search-ze-2lSrK.js";import"./index-RYns6xqu.js";import"./arrow_down-CDz-ClYA.js";import"./lodash-CcdATr5u.js";const V={title:"Design System/Element/Input",component:t,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},className:{description:"客製化樣式",control:{type:"text"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close"],mapping:{None:null,Account:e.jsx(r,{}),Search:e.jsx(a,{}),Visibility:e.jsx(c,{}),VisibilityOff:e.jsx(p,{}),Close:e.jsx(o,{})}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close"],mapping:{None:null,Account:e.jsx(r,{}),Search:e.jsx(a,{}),Visibility:e.jsx(c,{}),VisibilityOff:e.jsx(p,{}),Close:e.jsx(o,{})}},label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]}},placeholder:{description:"輸入提示",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},value:{description:"輸入值",control:{type:"text"}},onChange:{description:"輸入事件",action:"changed"}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{size:"medium",isDisabled:!1}},s={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ...",hint:{error:"",description:""},type:"text",onChange:n=>h("onChange")(n)},render(n){return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...n})})}},i={name:"輸入框狀態",args:{className:"",prefix:e.jsx(r,{}),label:"帳號",type:"text",placeholder:"請輸入帳號 ...",suffix:e.jsx(o,{})},render(n){return e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n}),e.jsx(t,{...n,hint:{error:"Error Message",description:""}}),e.jsx(t,{...n,hint:{error:"",description:"Something Description"}})]})}};var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...',
    hint: {
      error: '',
      description: ''
    },
    type: 'text',
    onChange: e => action('onChange')(e)
  },
  render(args) {
    return <div style={{
      width: '300px'
    }}>
        <Input {...args} />
      </div>;
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,u,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    className: '',
    prefix: <AccountIcon />,
    label: '帳號',
    type: 'text',
    placeholder: '請輸入帳號 ...',
    suffix: <CloseIcon />
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Input {...args} />
        <Input {...args} hint={{
        error: 'Error Message',
        description: ''
      }} />
        <Input {...args} hint={{
        error: '',
        description: 'Something Description'
      }} />
      </div>;
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const N=["Primary","InputWithStatus"];export{i as InputWithStatus,s as Primary,N as __namedExportsOrder,V as default};
