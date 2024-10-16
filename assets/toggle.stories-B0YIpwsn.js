import{j as r}from"./jsx-runtime-DEdD30eg.js";import{T as o}from"./toggle-CJHXWvBg.js";import"./index-RYns6xqu.js";const g={title:"Design System/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},checkChildren:{description:"開啟文字"},unCheckChildren:{description:"關閉文字"},isChecked:{description:"是否開啟"},isDisabled:{description:"是否禁用"},onChange:{description:"開關事件",action:"onChange"},className:{description:"客製化樣式"}},parameters:{docs:{title:"開關按鈕",description:{component:"開關按鈕組件的呈現及說明。"}}}},s={name:"主要項目",args:{themeColor:"primary",isChecked:!1,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},render(e){return r.jsx(o,{...e})}},a={name:"主題色開關按鈕",args:{themeColor:"primary",isChecked:!0,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(o,{...e,themeColor:"primary"}),r.jsx(o,{...e,themeColor:"secondary"}),r.jsx(o,{...e,themeColor:"tertiary"}),r.jsx(o,{...e,themeColor:"info"}),r.jsx(o,{...e,themeColor:"success"}),r.jsx(o,{...e,themeColor:"warning"}),r.jsx(o,{...e,themeColor:"error"})]})}};var n,i,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: ''
  },
  render(args) {
    return <Toggle {...args} />;
  }
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '主題色開關按鈕',
  args: {
    themeColor: 'primary',
    isChecked: true,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: ''
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const p=["Primary","ThemeColor"];export{s as Primary,a as ThemeColor,p as __namedExportsOrder,g as default};
