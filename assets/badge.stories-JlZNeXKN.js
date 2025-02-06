import{j as r}from"./jsx-runtime-DEdD30eg.js";import{B as n}from"./badge-BPltvF_h.js";import{b as x,c as d}from"./warning-tri-BY3sPlw-.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const T={title:"Component/Badge",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["none","primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},isShowDot:{description:"是否顯示圓點",table:{category:"PROPS"}},value:{description:"徽章數值",table:{category:"PROPS"}},limit:{description:"限制數值",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{description:"子元件",options:["Account","Notification"],mapping:{Account:r.jsx(x,{width:26,height:26}),Notification:r.jsx(d,{width:26,height:26})},table:{category:"SLOTS"}}},decorators:[e=>r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:r.jsx(e,{})})],parameters:{docs:{title:"徽章",description:{component:"徽章組件的呈現及說明。"}}},args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:"",children:r.jsx(d,{width:26,height:26})}},t={name:"預設項目",args:{},render(e){return r.jsx(n,{...e,children:e.children})}},a={name:"類型選擇",argTypes:{isShowDot:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,s){return`
<Badge {...args} isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args}>
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,isShowDot:!0,children:e.children}),r.jsx(n,{...e,children:e.children})]})}},o={name:"最大值設定",argTypes:{limit:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,s){return`
<Badge {...args} limit={50}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} limit={99}>
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,limit:50,children:e.children}),r.jsx(n,{...e,limit:99,children:e.children})]})}},i={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,s){return`
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
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,themeColor:"primary",children:e.children}),r.jsx(n,{...e,themeColor:"secondary",children:e.children}),r.jsx(n,{...e,themeColor:"neutral",children:e.children}),r.jsx(n,{...e,themeColor:"info",children:e.children}),r.jsx(n,{...e,themeColor:"success",children:e.children}),r.jsx(n,{...e,themeColor:"warning",children:e.children}),r.jsx(n,{...e,themeColor:"error",children:e.children})]})}};var g,c,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Badge {...args}>{args.children}</Badge>;
  }
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var l,m,B;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '類型選擇',
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
}`,...(B=(m=a.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var p,u,S;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '最大值設定',
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
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var f,C,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <>
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
      </>;
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const D=["Default","Type","Max","Theme"];export{t as Default,o as Max,i as Theme,a as Type,D as __namedExportsOrder,T as default};
