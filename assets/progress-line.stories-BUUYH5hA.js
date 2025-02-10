import{j as r}from"./jsx-runtime-DEdD30eg.js";import{L as o}from"./progress-line-2T3fy2De.js";import"./index-RYns6xqu.js";import"./useCounter-DpfJ3ATo.js";import"./string-BqrfsRv8.js";const C={title:"Component/Progress-Line",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["none","primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"none",label:"Label",percent:65,strokeWidth:10,className:""},parameters:{docs:{title:"Line Progress",description:{component:"長條進度指示組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},t={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<LineProgress {...args} themeColor="neutral" />
<LineProgress {...args} themeColor="primary" />
<LineProgress {...args} themeColor="secondary" />
<LineProgress {...args} themeColor="info" />
<LineProgress {...args} themeColor="success" />
<LineProgress {...args} themeColor="warning" />
<LineProgress {...args} themeColor="error" />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(o,{...e,themeColor:"neutral"}),r.jsx(o,{...e,themeColor:"primary"}),r.jsx(o,{...e,themeColor:"secondary"}),r.jsx(o,{...e,themeColor:"info"}),r.jsx(o,{...e,themeColor:"success"}),r.jsx(o,{...e,themeColor:"warning"}),r.jsx(o,{...e,themeColor:"error"})]})}};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <LineProgress {...args} />;
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '主題色彩',
  argTypes: {
    themeColor: {
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
<LineProgress {...args} themeColor="neutral" />
<LineProgress {...args} themeColor="primary" />
<LineProgress {...args} themeColor="secondary" />
<LineProgress {...args} themeColor="info" />
<LineProgress {...args} themeColor="success" />
<LineProgress {...args} themeColor="warning" />
<LineProgress {...args} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <LineProgress {...args} themeColor="neutral" />
        <LineProgress {...args} themeColor="primary" />
        <LineProgress {...args} themeColor="secondary" />
        <LineProgress {...args} themeColor="info" />
        <LineProgress {...args} themeColor="success" />
        <LineProgress {...args} themeColor="warning" />
        <LineProgress {...args} themeColor="error" />
      </div>;
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const u=["Default","Theme"];export{s as Default,t as Theme,u as __namedExportsOrder,C as default};
