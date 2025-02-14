import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as i}from"./divider-DxMrCkxg.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const F={title:"Component/Divider",component:i,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["1px","2px","3px","4px","5px"],table:{category:"PROPS"}},type:{description:"線條樣式",control:{type:"select"},options:["solid","dashed","dotted"],table:{category:"PROPS"}},direction:{description:"線條方向",control:{type:"select"},options:["horizontal","vertical"],table:{category:"PROPS"}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},children:{description:"分隔線內容",table:{category:"SLOTS"}}},args:{width:"1px",type:"solid",direction:"horizontal",align:"center",className:"",children:"Divider"},parameters:{docs:{title:"分隔線",description:{component:"分隔線組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(r){return e.jsx(i,{...r})}},a={name:"文字對齊",argTypes:{direction:{table:{disable:!0}},align:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,n){return`
<Divider {...args} align="start">Start</Divider>
<Divider {...args} align="center">Center</Divider>
<Divider {...args} align="end">End</Divider>
`}}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,align:"start",children:"Start"}),e.jsx(i,{...r,align:"center",children:"Center"}),e.jsx(i,{...r,align:"end",children:"End"})]})}},d={name:"線條粗細",args:{},parameters:{docs:{source:{transform(r,n){return`
<Divider {...args} width="1px">1px</Divider>
<Divider {...args} width="2px">2px</Divider>
<Divider {...args} width="3px">3px</Divider>
<Divider {...args} width="4px">4px</Divider>
<Divider {...args} width="5px">5px</Divider>
`}}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,width:"1px",children:"1px"}),e.jsx(i,{...r,width:"2px",children:"2px"}),e.jsx(i,{...r,width:"3px",children:"3px"}),e.jsx(i,{...r,width:"4px",children:"4px"}),e.jsx(i,{...r,width:"5px",children:"5px"})]})}},s={name:"線條類型",argTypes:{type:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,n){return`
<Divider {...args} type="solid">Solid</Divider>
<Divider {...args} type="dotted">Dotted</Divider>
<Divider {...args} type="dashed">Dashed</Divider>
`}}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,type:"solid",children:"Solid"}),e.jsx(i,{...r,type:"dotted",children:"Dotted"}),e.jsx(i,{...r,type:"dashed",children:"Dashed"})]})}},o={name:"線條方向-垂直",argTypes:{direction:{table:{disable:!0}},align:{table:{disable:!0}}},args:{},decorators:[r=>e.jsx("div",{style:{display:"flex",height:"100px"},children:e.jsx(r,{})})],parameters:{docs:{source:{transform(r,n){return`
<Divider {...args} align="start" direction="vertical">Start</Divider>
<Divider {...args} align="center" direction="vertical">Center</Divider>
<Divider {...args} align="end" direction="vertical">End</Divider>
`}}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,align:"start",direction:"vertical",children:"Start"}),e.jsx(i,{...r,align:"center",direction:"vertical",children:"Center"}),e.jsx(i,{...r,align:"end",direction:"vertical",children:"End"})]})}},c={name:"線條方向-水平",argTypes:{direction:{table:{disable:!0}},align:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,n){return`
<Divider {...args} align="start" direction="horizontal">Start</Divider>
<Divider {...args} align="center" direction="horizontal">Center</Divider>
<Divider {...args} align="end" direction="horizontal">End</Divider>
`}}}},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,align:"start",direction:"horizontal",children:"Start"}),e.jsx(i,{...r,align:"center",direction:"horizontal",children:"Center"}),e.jsx(i,{...r,align:"end",direction:"horizontal",children:"End"})]})}};var l,g,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,D,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '文字對齊',
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Divider {...args} align="start">Start</Divider>
<Divider {...args} align="center">Center</Divider>
<Divider {...args} align="end">End</Divider>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </>;
  }
}`,...(x=(D=a.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var h,m,u;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '線條粗細',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Divider {...args} width="1px">1px</Divider>
<Divider {...args} width="2px">2px</Divider>
<Divider {...args} width="3px">3px</Divider>
<Divider {...args} width="4px">4px</Divider>
<Divider {...args} width="5px">5px</Divider>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Divider {...args} width="1px">
          1px
        </Divider>
        <Divider {...args} width="2px">
          2px
        </Divider>
        <Divider {...args} width="3px">
          3px
        </Divider>
        <Divider {...args} width="4px">
          4px
        </Divider>
        <Divider {...args} width="5px">
          5px
        </Divider>
      </>;
  }
}`,...(u=(m=d.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,S,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '線條類型',
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Divider {...args} type="solid">Solid</Divider>
<Divider {...args} type="dotted">Dotted</Divider>
<Divider {...args} type="dashed">Dashed</Divider>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Divider {...args} type="solid">
          Solid
        </Divider>
        <Divider {...args} type="dotted">
          Dotted
        </Divider>
        <Divider {...args} type="dashed">
          Dashed
        </Divider>
      </>;
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,j,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '線條方向-垂直',
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  decorators: [Story => <div style={{
    display: 'flex',
    height: '100px'
  }}>
        <Story />
      </div>],
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Divider {...args} align="start" direction="vertical">Start</Divider>
<Divider {...args} align="center" direction="vertical">Center</Divider>
<Divider {...args} align="end" direction="vertical">End</Divider>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Divider {...args} align="start" direction="vertical">
          Start
        </Divider>
        <Divider {...args} align="center" direction="vertical">
          Center
        </Divider>
        <Divider {...args} align="end" direction="vertical">
          End
        </Divider>
      </>;
  }
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var f,z,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '線條方向-水平',
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Divider {...args} align="start" direction="horizontal">Start</Divider>
<Divider {...args} align="center" direction="horizontal">Center</Divider>
<Divider {...args} align="end" direction="horizontal">End</Divider>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Divider {...args} align="start" direction="horizontal">
          Start
        </Divider>
        <Divider {...args} align="center" direction="horizontal">
          Center
        </Divider>
        <Divider {...args} align="end" direction="horizontal">
          End
        </Divider>
      </>;
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const _=["Default","Align","Type","Width","Vertical","Horizontal"];export{a as Align,t as Default,c as Horizontal,d as Type,o as Vertical,s as Width,_ as __namedExportsOrder,F as default};
