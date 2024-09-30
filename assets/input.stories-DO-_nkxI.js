import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./chunk-454WOBUV-ChHd1ABr.js";import{I as t}from"./input-BKxMs16e.js";import{A as d,S as u,V as y,a as h,C as g,L as m}from"./plus-BRnIQ61m.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";const w={title:"Design System/Element/Input",component:t,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},className:{description:"客製化樣式",control:{type:"text"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(d,{}),Search:e.jsx(u,{}),Visibility:e.jsx(y,{}),VisibilityOff:e.jsx(h,{}),Close:e.jsx(g,{}),Lock:e.jsx(m,{})}},label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]}},placeholder:{description:"輸入提示",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},value:{description:"輸入值",control:{type:"text"}},onChange:{description:"輸入事件",action:"changed"}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{size:"medium",isDisabled:!1}},s={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ...",hint:{error:"",description:""},type:"text",onChange:r=>x("onChange")(r)},render(r){return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})}},o={name:"輸入框狀態",args:{className:"",prefix:e.jsx(d,{}),type:"text",placeholder:"請輸入帳號 ..."},render(r){return e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{...r,label:"帳號"}),e.jsx(t,{...r,label:"密碼",type:"password",prefix:e.jsx(m,{})}),e.jsx(t,{...r,label:"帳號",hint:{error:"Error Message",description:""}}),e.jsx(t,{...r,label:"帳號",hint:{error:"",description:"Something Description"}})]})}};var n,i,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    className: '',
    prefix: <AccountIcon />,
    type: 'text',
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
        <Input {...args} label="帳號" />
        <Input {...args} label="密碼" type={'password'} prefix={<LockIcon />} />
        <Input {...args} label="帳號" hint={{
        error: 'Error Message',
        description: ''
      }} />
        <Input {...args} label="帳號" hint={{
        error: '',
        description: 'Something Description'
      }} />
      </div>;
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const N=["Primary","InputWithStatus"];export{o as InputWithStatus,s as Primary,N as __namedExportsOrder,w as default};
