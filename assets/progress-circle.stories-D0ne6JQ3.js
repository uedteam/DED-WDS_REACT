import{j as r}from"./jsx-runtime-DEdD30eg.js";import{C as s}from"./progress-circle-CwKMVC63.js";import"./index-RYns6xqu.js";import"./styled-CaWuYePh.js";const j={title:"Design System/Progress-Circle",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:10,step:1}},label:{description:"進度指示標籤"},className:{description:"客製化樣式"}},args:{themeColor:"primary",percent:50,size:100,strokeWidth:10,label:"",className:""},parameters:{docs:{title:"圓形進度指示",description:{component:"圓形進度指示組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(s,{...e})}},t={name:"顯示標籤",args:{},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(s,{...e,label:"測試",size:70}),r.jsx(s,{...e,label:"測試",size:100})]})}},a={name:"主題色彩",args:{},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(s,{...e,percent:40,themeColor:"primary"}),r.jsx(s,{...e,percent:50,themeColor:"secondary"}),r.jsx(s,{...e,percent:60,themeColor:"tertiary"}),r.jsx(s,{...e,percent:70,themeColor:"info"}),r.jsx(s,{...e,percent:80,themeColor:"success"}),r.jsx(s,{...e,percent:90,themeColor:"warning"}),r.jsx(s,{...e,percent:100,themeColor:"error"})]})}};var n,c,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '顯示標籤',
  args: {},
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <CircleProgress {...args} label="測試" size={70} />
        <CircleProgress {...args} label="測試" size={100} />
      </div>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,C;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <CircleProgress {...args} percent={40} themeColor="primary" />
        <CircleProgress {...args} percent={50} themeColor="secondary" />
        <CircleProgress {...args} percent={60} themeColor="tertiary" />
        <CircleProgress {...args} percent={70} themeColor="info" />
        <CircleProgress {...args} percent={80} themeColor="success" />
        <CircleProgress {...args} percent={90} themeColor="warning" />
        <CircleProgress {...args} percent={100} themeColor="error" />
      </div>;
  }
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const f=["Default","Label","Theme"];export{o as Default,t as Label,a as Theme,f as __namedExportsOrder,j as default};
