import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C as n}from"./progress-circle-E3pfpkaU.js";import"./index-RYns6xqu.js";import"./useCounter-DpfJ3ATo.js";const u={title:"Component/Progress-Circle",component:n,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{label:"Label",percent:65,size:100,strokeWidth:10,className:""},decorators:[r=>e.jsx("div",{style:{display:"flex",gap:"32px"},children:e.jsx(r,{})})],parameters:{docs:{title:"Circle Progress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(r){return e.jsx(n,{...r})}},a={name:"顯示標籤",argTypes:{label:{table:{disable:!0}},size:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} label="Label" size={70} />
<CircleProgress {...args} label="Label" size={100} />
`}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,label:"Label",size:70}),e.jsx(n,{...r,label:"Label",size:100})]})}};var t,l,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  }
}`,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const P=["Default","Label"];export{s as Default,a as Label,P as __namedExportsOrder,u as default};
