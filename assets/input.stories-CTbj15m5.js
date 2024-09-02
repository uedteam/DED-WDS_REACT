import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-454WOBUV-ChHd1ABr.js";import{I as t}from"./input-vZVoMv7z.js";import{A as d,S as x,V as u,a as h,C as g}from"./search-ze-2lSrK.js";import"./index-RYns6xqu.js";import"./arrow_down-CDz-ClYA.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";const N={title:"Design System/Element/Input",component:t,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},className:{description:"客製化樣式",control:{type:"text"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close"],mapping:{None:null,Account:e.jsx(d,{}),Search:e.jsx(x,{}),Visibility:e.jsx(u,{}),VisibilityOff:e.jsx(h,{}),Close:e.jsx(g,{})}},label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]}},placeholder:{description:"輸入提示",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},value:{description:"輸入值",control:{type:"text"}},onChange:{description:"輸入事件",action:"changed"}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{size:"medium",isDisabled:!1}},r={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ...",hint:{error:"",description:""},type:"text",onChange:n=>m("onChange")(n)},render(n){return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...n})})}},s={name:"輸入框狀態",args:{className:"",prefix:e.jsx(d,{}),label:"帳號",type:"text",placeholder:"請輸入帳號 ..."},render(n){return e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n}),e.jsx(t,{...n,hint:{error:"Error Message",description:""}}),e.jsx(t,{...n,hint:{error:"",description:"Something Description"}})]})}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var p,c,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    className: '',
    prefix: <AccountIcon />,
    label: '帳號',
    type: 'text',
    placeholder: '請輸入帳號 ...'
    // suffix: <CloseIcon />,
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
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const V=["Primary","InputWithStatus"];export{s as InputWithStatus,r as Primary,V as __namedExportsOrder,N as default};
