import{j as r}from"./jsx-runtime-DEdD30eg.js";import{T as o}from"./toggle-Cezsu140.js";import"./index-RYns6xqu.js";const h={title:"Design System/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},checkChildren:{description:"開啟文字"},unCheckChildren:{description:"關閉文字"},isChecked:{description:"是否開啟"},isDisabled:{description:"是否禁用"},className:{description:"客製化樣式"},onChange:{description:"開關事件",action:"onChange"}},args:{themeColor:"primary",isChecked:!1,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},parameters:{docs:{title:"開關按鈕",description:{component:"開關按鈕組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},t={name:"主題色彩",args:{isChecked:!0},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(o,{...e,themeColor:"primary"}),r.jsx(o,{...e,themeColor:"secondary"}),r.jsx(o,{...e,themeColor:"tertiary"}),r.jsx(o,{...e,themeColor:"info"}),r.jsx(o,{...e,themeColor:"success"}),r.jsx(o,{...e,themeColor:"warning"}),r.jsx(o,{...e,themeColor:"error"})]})}};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Toggle {...args} />;
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    isChecked: true
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Toggle {...args} themeColor="primary" />
        <Toggle {...args} themeColor="secondary" />
        <Toggle {...args} themeColor="tertiary" />
        <Toggle {...args} themeColor="info" />
        <Toggle {...args} themeColor="success" />
        <Toggle {...args} themeColor="warning" />
        <Toggle {...args} themeColor="error" />
      </div>;
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Default","Theme"];export{s as Default,t as Theme,C as __namedExportsOrder,h as default};
