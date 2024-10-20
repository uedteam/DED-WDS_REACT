import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-ChHd1ABr.js";import{I as s}from"./input-Bcx9qKJo.js";import{A as d,S as x,V as h,a as g,C as f,L as m}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";const w={title:"Design System/Input",component:s,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]}},isDisabled:{description:"是否禁用"},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(d,{}),Search:e.jsx(x,{}),Visibility:e.jsx(h,{}),VisibilityOff:e.jsx(g,{}),Close:e.jsx(f,{}),Lock:e.jsx(m,{})}},label:{description:"標題"},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]}},placeholder:{description:"輸入提示",control:{type:"text"}},hint:{description:"提示訊息"},value:{description:"輸入值"},onChange:{description:"輸入事件",action:"changed"},className:{description:"客製化樣式"}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{size:"medium",isDisabled:!1,label:"",type:"text",placeholder:"請輸入...",prefix:null,hint:{error:"",description:""},value:"",className:""}},t={name:"預設項目",args:{placeholder:"請輸入帳號 ...",onChange:r=>u("onChange")(r)},render(r){return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{...r})})}},i={name:"輸入框狀態",args:{prefix:e.jsx(d,{}),placeholder:"請輸入帳號 ..."},render(r){return e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(s,{...r,label:"帳號"}),e.jsx(s,{...r,label:"密碼",type:"password",prefix:e.jsx(m,{})}),e.jsx(s,{...r,label:"帳號",hint:{error:"Error Message",description:""}}),e.jsx(s,{...r,label:"帳號",hint:{error:"",description:"Something Description"}})]})}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    placeholder: '請輸入帳號 ...',
    onChange: e => action('onChange')(e)
  },
  render(args) {
    return <div style={{
      width: '300px'
    }}>
        <Input {...args} />
      </div>;
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var p,c,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
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
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Default","InputWithStatus"];export{t as Default,i as InputWithStatus,D as __namedExportsOrder,w as default};
