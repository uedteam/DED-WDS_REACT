import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as a}from"./textarea-DPnzmyNM.js";import"./index-RYns6xqu.js";const y={title:"Component/Textarea",component:a,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},limit:{description:"字數限制",table:{category:"PROPS"}},initValue:{description:"輸入值",table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"onChange",table:{category:"EVENTS"}}},args:{label:"Label",placeholder:"Placeholder",limit:0,initValue:"Type something",hint:{error:"",description:""},isDisabled:!1,className:"",onChange:x("onChange")},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.jsx(e,{})})],parameters:{docs:{title:"Textarea",description:{component:"文字輸入框組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(a,{...e})}},n={name:"字數限制",args:{limit:30},render(e){return r.jsx(a,{...e})}},s={name:"輸入框狀態",argTypes:{isDisabled:{table:{disable:!0}}},args:{limit:30},parameters:{docs:{source:{code:`
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
`}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,hint:{error:"Error",description:""}}),r.jsx(a,{...e,hint:{error:"",description:"Prompt message"}})]})}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '字數限制',
  args: {
    limit: 30
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,g,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '輸入框狀態',
  argTypes: {
    isDisabled: {
      table: {
        disable: true
      }
    }
  },
  args: {
    limit: 30
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
\`
      }
    }
  },
  render(args) {
    return <>
        <Textarea {...args} hint={{
        error: 'Error',
        description: ''
      }} />
        <Textarea {...args} hint={{
        error: '',
        description: 'Prompt message'
      }} />
      </>;
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const S=["Default","Limit","TextareaStatus"];export{t as Default,n as Limit,s as TextareaStatus,S as __namedExportsOrder,y as default};
