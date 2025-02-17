import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as S}from"./chunk-454WOBUV-ChHd1ABr.js";import{I as s}from"./input-CBKQd-QM.js";import{b as x,d as P,e as I,f}from"./warning-tri-D1aSkfBJ.js";import"./index-RYns6xqu.js";import{S as h}from"./close-o-4V2u0k.js";import{S as c}from"./lock-nLQbdqcP.js";import"./title-BdHUK5iL.js";import"./string-BqrfsRv8.js";import"./toast-DROsf-Rd.js";import"./index-sbqOYYIm.js";const i={SvgAccount:e.jsx(x,{}),SvgSearch:e.jsx(P,{}),SvgVisibility:e.jsx(I,{}),SvgVisibilityOff:e.jsx(f,{}),SvgClose:e.jsx(h,{}),SvgLock:e.jsx(c,{})},E={title:"Component/Input",component:s,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},hasClear:{description:"是否顯示清除按鈕",table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},currValue:{description:"初始值",table:{category:"PROPS"}},maxLimit:{description:"最長輸入限制",table:{category:"PROPS"}},prefix:{description:"前置元素",options:Object.keys(i),control:{type:"select",labels:{SvgAccount:"Account Icon",SvgSearch:"Search Icon",SvgVisibility:"Visibility Icon",SvgVisibilityOff:"Visibility Off Icon",SvgClose:"Close Icon",SvgLock:"Lock Icon"}},mapping:i,table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},isOpen:{description:"是否使用選單並開啟",table:{disable:!0}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:i.SvgLock,size:"medium",currValue:"",maxLimit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:r=>S("changed")(r)}},t={name:"預設項目",args:{},render(r){return e.jsx(s,{...r})}},a={name:"輸入類型",argTypes:{isDisabled:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(s,{...r,label:"Account",type:"text"}),e.jsx(s,{...r,label:"Password",type:"password",prefix:e.jsx(c,{})}),e.jsx(s,{...r,label:"Number",type:"number"})]})}},o={name:"輸入框狀態",argTypes:{isDisabled:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(s,{...r,label:"Account"}),e.jsx(s,{...r,label:"Password",type:"password",prefix:e.jsx(c,{})}),e.jsx(s,{...r,label:"Account",hint:{error:"Error message",description:""}}),e.jsx(s,{...r,label:"Account",hint:{error:"",description:"Prompt message"}}),e.jsx(s,{...r,label:"Account",isDisabled:!0,hint:{error:"",description:"Prompt message"}})]})}};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '輸入類型',
  argTypes: {
    isDisabled: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
\`
      }
    }
  },
  render(args) {
    return <div>
        <Input {...args} label="Account" type="text" />
        <Input {...args} label="Password" type="password" prefix={<SvgLock />} />
        <Input {...args} label="Number" type="number" />
      </div>;
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,b,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '輸入框狀態',
  argTypes: {
    isDisabled: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
\`
      }
    }
  },
  render(args) {
    return <div>
        <Input {...args} label="Account" />
        <Input {...args} label="Password" type={'password'} prefix={<SvgLock />} />
        <Input {...args} label="Account" hint={{
        error: 'Error message',
        description: ''
      }} />
        <Input {...args} label="Account" hint={{
        error: '',
        description: 'Prompt message'
      }} />
        <Input {...args} label="Account" isDisabled hint={{
        error: '',
        description: 'Prompt message'
      }} />
      </div>;
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const T=["Default","Type","InputWithStatus"];export{t as Default,o as InputWithStatus,a as Type,T as __namedExportsOrder,E as default};
