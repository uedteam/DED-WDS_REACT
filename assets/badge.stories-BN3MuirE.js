import{j as r}from"./jsx-runtime-DEdD30eg.js";import{B as t}from"./badge-BPltvF_h.js";import{b as x,c as s}from"./warning-tri-BnRwNKC6.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const b={title:"Component/Badge",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["none","primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},isShowDot:{description:"是否顯示圓點",table:{category:"PROPS"}},value:{description:"徽章數值",table:{category:"PROPS"}},limit:{description:"數值顯示上限",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{description:"子元件",options:["Account","Notification"],mapping:{Account:r.jsx(x,{width:26,height:26}),Notification:r.jsx(s,{width:26,height:26})},table:{category:"SLOTS"}}},decorators:[e=>r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:r.jsx(e,{})})],parameters:{docs:{title:"徽章",description:{component:"徽章組件的呈現及說明。"}}},args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:"",children:r.jsx(s,{width:26,height:26})}},o={name:"預設項目",args:{},render(e){return r.jsx(t,{...e,children:e.children})}},i={name:"外觀類型",argTypes:{isShowDot:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,d){return`
<Badge {...args} isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args}>
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,isShowDot:!0,children:e.children}),r.jsx(t,{...e,children:e.children})]})}},a={name:"數值顯示上限",argTypes:{limit:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,d){return`
<Badge {...args} limit={50}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} limit={99}>
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,limit:50,children:e.children}),r.jsx(t,{...e,limit:99,children:e.children})]})}},n={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,d){return`
<Badge {...args} themeColor="primary" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{style:{display:"flex",gap:"32px"},children:[r.jsx(t,{...e,themeColor:"primary",isShowDot:!0,children:e.children}),r.jsx(t,{...e,themeColor:"secondary",isShowDot:!0,children:e.children}),r.jsx(t,{...e,themeColor:"neutral",isShowDot:!0,children:e.children}),r.jsx(t,{...e,themeColor:"info",isShowDot:!0,children:e.children}),r.jsx(t,{...e,themeColor:"success",isShowDot:!0,children:e.children}),r.jsx(t,{...e,themeColor:"warning",isShowDot:!0,children:e.children}),r.jsx(t,{...e,themeColor:"error",isShowDot:!0,children:e.children})]}),r.jsxs("div",{style:{display:"flex",gap:"32px"},children:[r.jsx(t,{...e,themeColor:"primary",children:e.children}),r.jsx(t,{...e,themeColor:"secondary",children:e.children}),r.jsx(t,{...e,themeColor:"neutral",children:e.children}),r.jsx(t,{...e,themeColor:"info",children:e.children}),r.jsx(t,{...e,themeColor:"success",children:e.children}),r.jsx(t,{...e,themeColor:"warning",children:e.children}),r.jsx(t,{...e,themeColor:"error",children:e.children})]})]})}};var g,h,c;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Badge {...args}>{args.children}</Badge>;
  }
}`,...(c=(h=o.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var l,m,B;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '外觀類型',
  argTypes: {
    isShowDot: {
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
          return \`
<Badge {...args} isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args}>
  <SvgNotification width={26} height={26} />
</Badge>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Badge {...args} isShowDot>
          {args.children}
        </Badge>
        <Badge {...args}>{args.children}</Badge>
      </>;
  }
}`,...(B=(m=i.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var S,p,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '數值顯示上限',
  argTypes: {
    limit: {
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
          return \`
<Badge {...args} limit={50}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} limit={99}>
  <SvgNotification width={26} height={26} />
</Badge>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Badge {...args} limit={50}>
          {args.children}
        </Badge>
        <Badge {...args} limit={99}>
          {args.children}
        </Badge>
      </>;
  }
}`,...(w=(p=a.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var u,f,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        transform(code: string, storyContext: StoryContext) {
          return \`
<Badge {...args} themeColor="primary" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error" isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div style={{
        display: 'flex',
        gap: '32px'
      }}>
          <Badge {...args} themeColor="primary" isShowDot>
            {args.children}
          </Badge>
          <Badge {...args} themeColor="secondary" isShowDot>
            {args.children}
          </Badge>
          <Badge {...args} themeColor="neutral" isShowDot>
            {args.children}
          </Badge>
          <Badge {...args} themeColor="info" isShowDot>
            {args.children}
          </Badge>
          <Badge {...args} themeColor="success" isShowDot>
            {args.children}
          </Badge>
          <Badge {...args} themeColor="warning" isShowDot>
            {args.children}
          </Badge>
          <Badge {...args} themeColor="error" isShowDot>
            {args.children}
          </Badge>
        </div>
        <div style={{
        display: 'flex',
        gap: '32px'
      }}>
          <Badge {...args} themeColor="primary">
            {args.children}
          </Badge>
          <Badge {...args} themeColor="secondary">
            {args.children}
          </Badge>
          <Badge {...args} themeColor="neutral">
            {args.children}
          </Badge>
          <Badge {...args} themeColor="info">
            {args.children}
          </Badge>
          <Badge {...args} themeColor="success">
            {args.children}
          </Badge>
          <Badge {...args} themeColor="warning">
            {args.children}
          </Badge>
          <Badge {...args} themeColor="error">
            {args.children}
          </Badge>
        </div>
      </div>;
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const T=["Default","Type","Max","Theme"];export{o as Default,a as Max,n as Theme,i as Type,T as __namedExportsOrder,b as default};
