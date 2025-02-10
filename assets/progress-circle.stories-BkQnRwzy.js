import{j as r}from"./jsx-runtime-DEdD30eg.js";import{C as s}from"./progress-circle-CiUtLNSM.js";import"./index-RYns6xqu.js";import"./useCounter-DpfJ3ATo.js";import"./string-BqrfsRv8.js";const x={title:"Component/Progress-Circle",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["none","primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"none",label:"Label",percent:65,size:100,strokeWidth:10,className:""},parameters:{docs:{title:"Circle Progress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(s,{...e})}},a={name:"顯示標籤",argTypes:{label:{table:{disable:!0}},size:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} label="Label" size={70} />
<CircleProgress {...args} label="Label" size={100} />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(s,{...e,label:"Label",size:70}),r.jsx(s,{...e,label:"Label",size:100})]})}},l={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} themeColor="neutral" />
<CircleProgress {...args} themeColor="primary" />
<CircleProgress {...args} themeColor="secondary" />
<CircleProgress {...args} themeColor="info" />
<CircleProgress {...args} themeColor="success" />
<CircleProgress {...args} themeColor="warning" />
<CircleProgress {...args} themeColor="error" />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(s,{...e,themeColor:"neutral"}),r.jsx(s,{...e,themeColor:"primary"}),r.jsx(s,{...e,themeColor:"secondary"}),r.jsx(s,{...e,themeColor:"info"}),r.jsx(s,{...e,themeColor:"success"}),r.jsx(s,{...e,themeColor:"warning"}),r.jsx(s,{...e,themeColor:"error"})]})}};var t,i,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,g,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '顯示標籤',
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    size: {
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
<CircleProgress {...args} label="Label" size={70} />
<CircleProgress {...args} label="Label" size={100} />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <CircleProgress {...args} label="Label" size={70} />
        <CircleProgress {...args} label="Label" size={100} />
      </div>;
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,C,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
<CircleProgress {...args} themeColor="neutral" />
<CircleProgress {...args} themeColor="primary" />
<CircleProgress {...args} themeColor="secondary" />
<CircleProgress {...args} themeColor="info" />
<CircleProgress {...args} themeColor="success" />
<CircleProgress {...args} themeColor="warning" />
<CircleProgress {...args} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <CircleProgress {...args} themeColor="neutral" />
        <CircleProgress {...args} themeColor="primary" />
        <CircleProgress {...args} themeColor="secondary" />
        <CircleProgress {...args} themeColor="info" />
        <CircleProgress {...args} themeColor="success" />
        <CircleProgress {...args} themeColor="warning" />
        <CircleProgress {...args} themeColor="error" />
      </div>;
  }
}`,...(d=(C=l.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const f=["Default","Label","Theme"];export{o as Default,a as Label,l as Theme,f as __namedExportsOrder,x as default};
