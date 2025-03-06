import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as P}from"./chunk-454WOBUV-CM0pFb8Z.js";import{I as t}from"./input-tP2Vz38X.js";import{b as n,d as f,e as I,f as h}from"./warning-tri-aIaTAFys.js";import"./index-RYns6xqu.js";import{S as v}from"./close-o-4V2u0k.js";import{S as y}from"./lock-nLQbdqcP.js";import"./v4-CQkTLCs1.js";import"./title-BdHUK5iL.js";import"./string-BqrfsRv8.js";import"./toast-DJeIlIWY.js";import"./index-sbqOYYIm.js";const c={None:null,SvgAccount:e.jsx(n,{}),SvgSearch:e.jsx(f,{}),SvgVisibility:e.jsx(I,{}),SvgVisibilityOff:e.jsx(h,{}),SvgClose:e.jsx(v,{}),SvgLock:e.jsx(y,{})},N={title:"Component/Input",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},hasClear:{description:"是否顯示清除按鈕",table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},currValue:{description:"初始值",table:{category:"PROPS"}},maxLimit:{description:"最長輸入限制",table:{category:"PROPS"}},prefix:{description:"前置元素",options:Object.keys(c),control:{type:"select",labels:{SvgAccount:"Account Icon",SvgSearch:"Search Icon",SvgVisibility:"Visibility Icon",SvgVisibilityOff:"Visibility Off Icon",SvgClose:"Close Icon",SvgLock:"Lock Icon"}},mapping:c,table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},isOpen:{description:"是否使用選單並開啟",table:{disable:!0}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder",size:"medium",currValue:"",prefix:e.jsx(n,{}),maxLimit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:r=>P("changed")(r.target)}},s={name:"預設項目",args:{},render(r){const x={test:"123",name:"Kevin"};return e.jsx(t,{...r,...x})}},a={name:"輸入類型",argTypes:{isDisabled:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<Input {...args} label="Account"  prefix={<SvgAccount />} />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Number" type="number" />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,currValue:"Account",label:"Account",type:"text",prefix:e.jsx(n,{})}),e.jsx(t,{...r,currValue:"Password",label:"Password",type:"password",prefix:e.jsx(y,{})}),e.jsx(t,{...r,currValue:"12345",label:"Amount",type:"number"})]})}},o={name:"提示訊息",argTypes:{isDisabled:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,label:"Account",hint:{error:"Error message",description:""}}),e.jsx(t,{...r,label:"Account",hint:{error:"",description:"Prompt message"}})]})}};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    const args2 = {
      test: '123',
      name: 'Kevin'
    };
    return <Input {...args} {...args2} />;
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,g,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
<Input {...args} label="Account"  prefix={<SvgAccount />} />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Number" type="number" />
\`
      }
    }
  },
  render(args) {
    return <>
        <Input {...args} currValue="Account" label="Account" type="text" prefix={<SvgAccount />} />
        <Input {...args} currValue="Password" label="Password" type="password" prefix={<SvgLock />} />
        <Input {...args} currValue="12345" label="Amount" type="number" />
      </>;
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,b,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '提示訊息',
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
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
\`
      }
    }
  },
  render(args) {
    return <>
        <Input {...args} label="Account" hint={{
        error: 'Error message',
        description: ''
      }} />
        <Input {...args} label="Account" hint={{
        error: '',
        description: 'Prompt message'
      }} />
      </>;
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const _=["Default","Type","InputWithStatus"];export{s as Default,o as InputWithStatus,a as Type,_ as __namedExportsOrder,N as default};
