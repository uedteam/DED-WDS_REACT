import{j as l}from"./jsx-runtime-DEdD30eg.js";import{T as r}from"./title-BeUUUaOK.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";const y={title:"Design System/Title",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","info","success","warning","error"]}},level:{description:"標題等級",control:{type:"select",options:[0,1,2,3,4,5,6]}},children:{description:"標題內容"},className:{description:"客製化樣式"}},parameters:{docs:{title:"標題",description:{component:"標題組件的呈現及說明。"}}},args:{themeColor:"primary",level:1,children:"標題",className:""}},i={name:"預設項目",args:{},render(e){return l.jsx(r,{...e,children:e.children})}},n={name:"標題大小",args:{},render(e){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[l.jsxs(r,{level:1,children:["level 1: ",e.children]}),l.jsxs(r,{level:2,children:["level 2: ",e.children]}),l.jsxs(r,{level:3,children:["level 3: ",e.children]}),l.jsxs(r,{level:4,children:["level 4: ",e.children]}),l.jsxs(r,{level:5,children:["level 5: ",e.children]}),l.jsxs(r,{level:6,children:["level 6: ",e.children]}),l.jsxs(r,{level:0,children:["level 0: ",e.children]})]})}},t={name:"主題色彩",args:{level:3},render(e){return l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsx(r,{level:e.level,themeColor:"primary",children:e.children}),l.jsx(r,{level:e.level,themeColor:"secondary",children:e.children}),l.jsx(r,{level:e.level,themeColor:"tertiary",children:e.children}),l.jsx(r,{level:e.level,themeColor:"info",children:e.children}),l.jsx(r,{level:e.level,themeColor:"success",children:e.children}),l.jsx(r,{level:e.level,themeColor:"warning",children:e.children}),l.jsx(r,{level:e.level,themeColor:"error",children:e.children})]})}};var s,o,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  }
}`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,a,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '標題大小',
  args: {},
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Title level={1}>level 1: {args.children}</Title>
        <Title level={2}>level 2: {args.children}</Title>
        <Title level={3}>level 3: {args.children}</Title>
        <Title level={4}>level 4: {args.children}</Title>
        <Title level={5}>level 5: {args.children}</Title>
        <Title level={6}>level 6: {args.children}</Title>
        <Title level={0}>level 0: {args.children}</Title>
      </div>;
  }
}`,...(h=(a=n.parameters)==null?void 0:a.docs)==null?void 0:h.source}}};var v,m,p;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    level: 3
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Title level={args.level} themeColor="primary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="secondary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="tertiary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="info">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="success">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="warning">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="error">
          {args.children}
        </Title>
      </div>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const j=["Default","Size","Theme"];export{i as Default,n as Size,t as Theme,j as __namedExportsOrder,y as default};
