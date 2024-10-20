import{j as r}from"./jsx-runtime-DEdD30eg.js";import{T as n}from"./textarea-C1_2O7ml.js";import"./index-RYns6xqu.js";const D={title:"Design System/Textarea",component:n,tags:["autodocs"],argTypes:{label:{description:"標題"},placeholder:{description:"輸入提示"},isDisabled:{description:"是否禁用"},total:{description:"字數限制"},hint:{description:"提示訊息"},initValue:{description:"輸入值"},onChange:{description:"輸入事件",action:"onChange"},className:{description:"客製化樣式"}},parameters:{docs:{title:"文字輸入框",description:{component:"文字輸入框組件的呈現及說明。"}}},args:{isDisabled:!1,placeholder:"請輸入 ...",total:0,className:""}},a={name:"預設項目",args:{label:"",hint:{error:"",description:""}},render(e){return r.jsx(n,{...e})}},s={name:"顯示標籤",args:{label:"內文描述",hint:{error:"",description:""}},render(e){return r.jsx(n,{...e})}},t={name:"字數限制",args:{label:"內文描述",limit:20,initValue:"Hello World",hint:{error:"",description:""}},render(e){return r.jsx(n,{...e})}},i={name:"輸入框狀態",args:{label:"內文描述",limit:10,placeholder:"請輸入描述 ..."},render(e){return r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx(n,{...e}),r.jsx(n,{...e,hint:{error:"Error Message",description:""}}),r.jsx(n,{...e,hint:{error:"",description:"Something Description"}})]})}};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    label: '',
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '顯示標籤',
  args: {
    label: '內文描述',
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '字數限制',
  args: {
    label: '內文描述',
    limit: 20,
    initValue: 'Hello World',
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,b,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    label: '內文描述',
    limit: 10,
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
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const y=["Default","Label","Limit","TextareaStatus"];export{a as Default,s as Label,t as Limit,i as TextareaStatus,y as __namedExportsOrder,D as default};
