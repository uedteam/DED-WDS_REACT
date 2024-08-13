import{j as r}from"./jsx-runtime-DEdD30eg.js";import{T as t}from"./textarea-BpCh69JH.js";import"./index-RYns6xqu.js";const g={title:"Design System/Element/Textarea",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},hint:{description:"提示訊息",control:{type:"object"}},value:{description:"輸入值",control:{type:"text"}}},parameters:{docs:{title:"文字輸入框",description:{component:"文字輸入框組件的呈現及說明。"}}}},n={name:"文字輸入框",args:{label:"留下你的想法",placeholder:"請輸入 ...",total:10,hint:{error:"",description:""}},render(e){return r.jsx(t,{...e})}},a={name:"文字輸入框狀態",args:{className:"",label:"內文描述",total:10,placeholder:"請輸入描述 ..."},render(e){return r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(t,{...e}),r.jsx(t,{...e,hint:{error:"Error Message",description:""}}),r.jsx(t,{...e,hint:{error:"",description:"Something Description"}})]})}};var s,o,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    label: '留下你的想法',
    placeholder: '請輸入 ...',
    total: 10,
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '文字輸入框狀態',
  args: {
    className: '',
    label: '內文描述',
    total: 10,
    placeholder: '請輸入描述 ...'
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Textarea {...args} />
        <Textarea {...args} hint={{
        error: 'Error Message',
        description: ''
      }} />
        <Textarea {...args} hint={{
        error: '',
        description: 'Something Description'
      }} />
      </div>;
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["Primary","TextareaWithStatus"];export{n as Primary,a as TextareaWithStatus,h as __namedExportsOrder,g as default};
