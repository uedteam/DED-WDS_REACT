import{j as r}from"./jsx-runtime-DEdD30eg.js";import{T as n}from"./textarea-BigHPPl8.js";import"./index-RYns6xqu.js";const b={title:"Design System/Textarea",component:n,tags:["autodocs"],argTypes:{label:{description:"標題"},className:{description:"客製化樣式"},placeholder:{description:"輸入提示"},isDisabled:{description:"是否禁用"},total:{description:"字數限制"},hint:{description:"提示訊息"},initValue:{description:"輸入值"},onChange:{description:"輸入事件",action:"onChange"}},parameters:{docs:{title:"文字輸入框",description:{component:"文字輸入框組件的呈現及說明。"}}},args:{isDisabled:!1,placeholder:"請輸入 ...",className:""}},a={name:"主要項目",args:{label:"留下你的想法",total:10,hint:{error:"",description:""}},render(e){return r.jsx(n,{...e})}},t={name:"字數限制",args:{label:"留下你的想法",total:20,initValue:"Hello World",hint:{error:"",description:""}},render(e){return r.jsx(n,{...e})}},s={name:"輸入框狀態",args:{label:"內文描述",total:10,placeholder:"請輸入描述 ..."},render(e){return r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(n,{...e}),r.jsx(n,{...e,hint:{error:"Error Message",description:""}}),r.jsx(n,{...e,hint:{error:"",description:"Something Description"}})]})}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    label: '留下你的想法',
    total: 10,
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '字數限制',
  args: {
    label: '留下你的想法',
    total: 20,
    initValue: 'Hello World',
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
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
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const j=["Primary","Limit","TextareaStatus"];export{t as Limit,a as Primary,s as TextareaStatus,j as __namedExportsOrder,b as default};
