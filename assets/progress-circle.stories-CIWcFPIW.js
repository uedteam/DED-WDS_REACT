import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C as s}from"./progress-circle-5ZOi_8dX.js";import"./index-RYns6xqu.js";import"./useCounter-DpfJ3ATo.js";import"./string-BqrfsRv8.js";const x={title:"Component/Progress-Circle",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["none","primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"none",label:"Label",percent:65,size:100,strokeWidth:10,className:""},decorators:[r=>e.jsx("div",{style:{display:"flex",gap:"32px"},children:e.jsx(r,{})})],parameters:{docs:{title:"Circle Progress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(r){return e.jsx(s,{...r})}},a={name:"顯示標籤",argTypes:{label:{table:{disable:!0}},size:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} label="Label" size={70} />
<CircleProgress {...args} label="Label" size={100} />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(s,{...r,label:"Label",size:70}),e.jsx(s,{...r,label:"Label",size:100})]})}},n={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} themeColor="neutral" />
<CircleProgress {...args} themeColor="primary" />
<CircleProgress {...args} themeColor="secondary" />
<CircleProgress {...args} themeColor="info" />
<CircleProgress {...args} themeColor="success" />
<CircleProgress {...args} themeColor="warning" />
<CircleProgress {...args} themeColor="error" />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(s,{...r,themeColor:"neutral"}),e.jsx(s,{...r,themeColor:"primary"}),e.jsx(s,{...r,themeColor:"secondary"}),e.jsx(s,{...r,themeColor:"info"}),e.jsx(s,{...r,themeColor:"success"}),e.jsx(s,{...r,themeColor:"warning"}),e.jsx(s,{...r,themeColor:"error"})]})}};var l,t,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  }
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,g,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    return <>
        <CircleProgress {...args} label="Label" size={70} />
        <CircleProgress {...args} label="Label" size={100} />
      </>;
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var C,p,d;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    return <>
        <CircleProgress {...args} themeColor="neutral" />
        <CircleProgress {...args} themeColor="primary" />
        <CircleProgress {...args} themeColor="secondary" />
        <CircleProgress {...args} themeColor="info" />
        <CircleProgress {...args} themeColor="success" />
        <CircleProgress {...args} themeColor="warning" />
        <CircleProgress {...args} themeColor="error" />
      </>;
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Default","Label","Theme"];export{o as Default,a as Label,n as Theme,j as __namedExportsOrder,x as default};
