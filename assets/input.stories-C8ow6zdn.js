import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{I as t}from"./auth-flow-B81f1jsb.js";import{b as n,d as I,e as P,f as v,g as j}from"./warning-tri-BnRwNKC6.js";import"./index-RYns6xqu.js";import{S as A}from"./close-o-4V2u0k.js";import{S as y}from"./lock-nLQbdqcP.js";import{S as i}from"./dashboard-WG7wTMBf.js";import"./badge-BPltvF_h.js";import"./breadcrumb-UO67gq_e.js";import"./toast-DsajqLjU.js";import"./checkbox-D6RDPsQd.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-Biwxsj_U.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Cht71pYN.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./index-sbqOYYIm.js";import"./string-BqrfsRv8.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const c={None:null,SvgAccount:e.jsx(n,{}),SvgSearch:e.jsx(I,{}),SvgVisibility:e.jsx(P,{}),SvgVisibilityOff:e.jsx(v,{}),SvgClose:e.jsx(A,{}),SvgLock:e.jsx(y,{})},re={title:"Component/Input",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},hasClear:{description:"是否顯示清除按鈕",table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},currValue:{description:"初始值",table:{category:"PROPS"}},maxLimit:{description:"最長輸入限制",table:{category:"PROPS"}},prefix:{description:"前置元素",options:Object.keys(c),control:{type:"select",labels:{SvgAccount:"Account Icon",SvgSearch:"Search Icon",SvgVisibility:"Visibility Icon",SvgVisibilityOff:"Visibility Off Icon",SvgClose:"Close Icon",SvgLock:"Lock Icon"}},mapping:c,table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},isOpen:{description:"是否使用選單並開啟",table:{disable:!0}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder",size:"medium",currValue:"",prefix:e.jsx(n,{}),maxLimit:0,hint:{error:"",description:e.jsx(i,{themeColor:"neutral",variant:"text",prefix:"",isShowDot:!1,children:"Prompt message"})},isDisabled:!1,className:"",onChange:r=>h("changed")(r.target)}},s={name:"預設項目",args:{},render(r){const f={test:"123",name:"Kevin"};return e.jsx(t,{...r,...f})}},a={name:"輸入類型",argTypes:{isDisabled:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<Input {...args} label="Account"  prefix={<SvgAccount />} />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Number" type="number" />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,currValue:"Account",label:"Account",type:"text",prefix:e.jsx(n,{})}),e.jsx(t,{...r,currValue:"Password",label:"Password",type:"password",prefix:e.jsx(y,{})}),e.jsx(t,{...r,currValue:"12345",label:"Amount",type:"number"})]})}},o={name:"提示訊息",argTypes:{isDisabled:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,label:"Account",hint:{error:e.jsx(i,{themeColor:"error",variant:"text",prefix:e.jsx(j,{}),children:"Error message"}),description:""}}),e.jsx(t,{...r,label:"Account",hint:{error:"",description:e.jsx(i,{themeColor:"neutral",variant:"text",prefix:"",isShowDot:!1,children:"Prompt message"})}})]})}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    const args2 = {
      test: '123',
      name: 'Kevin'
    };
    return <Input {...args} {...args2} />;
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,S,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        error: <StatusIndicator themeColor="error" variant="text" prefix={<SvgErrorCircle />}>
                Error message
              </StatusIndicator>,
        description: ''
      }} />
        <Input {...args} label="Account" hint={{
        error: '',
        description: <StatusIndicator themeColor="neutral" variant="text" prefix="" isShowDot={false}>
                Prompt message
              </StatusIndicator>
      }} />
      </>;
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const te=["Default","Type","InputWithStatus"];export{s as Default,o as InputWithStatus,a as Type,te as __namedExportsOrder,re as default};
