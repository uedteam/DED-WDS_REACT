import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as a}from"./textarea-r7CXvhUd.js";import"./index-RYns6xqu.js";const y={title:"Component/Textarea",component:a,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},limit:{description:"字數限制",table:{category:"PROPS"}},currValue:{description:"輸入值",table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"onChange",table:{category:"EVENTS"}}},args:{label:"Label",placeholder:"Placeholder",limit:0,currValue:"Type something",hint:{error:"",description:""},isDisabled:!1,className:"",onChange:x("onChange")},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.jsx(e,{})})],parameters:{docs:{title:"Textarea",description:{component:"文字輸入框組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(a,{...e})}},t={name:"字數限制",args:{limit:30},render(e){return r.jsx(a,{...e})}},n={name:"輸入框狀態",argTypes:{isDisabled:{table:{disable:!0}}},args:{limit:30},parameters:{docs:{source:{code:`
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} isDisabled />
`}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,hint:{error:"",description:"Prompt message"}}),r.jsx(a,{...e,hint:{error:"Error",description:""}}),r.jsx(a,{...e,isDisabled:!0})]})}};var o,i,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '字數限制',
  args: {
    limit: 30
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} isDisabled />
\`
      }
    }
  },
  render(args) {
    return <>
        <Textarea {...args} hint={{
        error: '',
        description: 'Prompt message'
      }} />
        <Textarea {...args} hint={{
        error: 'Error',
        description: ''
      }} />
        <Textarea {...args} isDisabled />
      </>;
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const S=["Default","Limit","TextareaStatus"];export{s as Default,t as Limit,n as TextareaStatus,S as __namedExportsOrder,y as default};
