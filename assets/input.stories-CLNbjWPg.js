import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./chunk-454WOBUV-ChHd1ABr.js";import{I as s}from"./input-Dm2PXP3R.js";import{A as d,S as u,V as h,a as g,C as y,L as m}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";const w={title:"Design System/Input",component:s,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]}},isDisabled:{description:"是否禁用"},className:{description:"客製化樣式"},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(d,{}),Search:e.jsx(u,{}),Visibility:e.jsx(h,{}),VisibilityOff:e.jsx(g,{}),Close:e.jsx(y,{}),Lock:e.jsx(m,{})}},label:{description:"標題"},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]}},placeholder:{description:"輸入提示",control:{type:"text"}},hint:{description:"提示訊息"},value:{description:"輸入值"},onChange:{description:"輸入事件",action:"changed"}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{size:"medium",isDisabled:!1,label:"",type:"text"}},i={name:"主要項目",args:{className:"",placeholder:"請輸入帳號 ...",hint:{error:"",description:""},onChange:r=>x("onChange")(r)},render(r){return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{...r})})}},t={name:"輸入框狀態",args:{className:"",prefix:e.jsx(d,{}),placeholder:"請輸入帳號 ..."},render(r){return e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(s,{...r,label:"帳號"}),e.jsx(s,{...r,label:"密碼",type:"password",prefix:e.jsx(m,{})}),e.jsx(s,{...r,label:"帳號",hint:{error:"Error Message",description:""}}),e.jsx(s,{...r,label:"帳號",hint:{error:"",description:"Something Description"}})]})}};var n,o,a;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主要項目',
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
    return <div style={{
      width: '300px'
    }}>
        <Input {...args} />
      </div>;
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    className: '',
    prefix: <AccountIcon />,
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const N=["Primary","InputWithStatus"];export{t as InputWithStatus,i as Primary,N as __namedExportsOrder,w as default};
