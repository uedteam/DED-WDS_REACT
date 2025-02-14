import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./tooltip-dN799TBv.js";import"./badge-BPltvF_h.js";import"./breadcrumb-sFR7iUaW.js";import{B as n}from"./toast-DpHyutTk.js";import"./checkbox-BCNOGswC.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-Bwf7LxIR.js";import"./input-vPYCSIrt.js";import"./layout-DgebEeDV.js";import"./menu-DDWOBJ-U.js";import"./radio-CMOPLxLt.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-CoyRoRrM.js";import"./textarea-DPnzmyNM.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{b as l,d,e as m,f as p}from"./warning-tri-D1aSkfBJ.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const et={title:"Component/Button",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"外觀樣式",control:{type:"select",options:["filled","soft","ghost","text"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(l,{}),Search:r.jsx(d,{}),Visibility:r.jsx(m,{}),VisibilityOff:r.jsx(p,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(l,{}),Search:r.jsx(d,{}),Visibility:r.jsx(m,{}),VisibilityOff:r.jsx(p,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{type:"select",options:["fit","fluid"]},table:{category:"PROPS"}},borderWidth:{description:"按鈕邊框寬度",control:{type:"select",options:["none","1px","2px","3px","4px","5px"]},table:{category:"PROPS"}},radius:{description:"按鈕圓角大小",control:{type:"select",options:["none","2px","4px","8px","12px","16px","32px","full"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"primary",variant:"filled",prefix:null,suffix:null,size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",children:"Button",onClick:u("onClick")},decorators:[t=>r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:r.jsx(t,{})})],parameters:{docs:{title:"Button",description:{component:"按鈕組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(t){return r.jsx(n,{...t,children:t.children})}},s={name:"附加元素",argTypes:{prefix:{table:{disable:!0}},suffix:{table:{disable:!0}}},args:{variant:"ghost",onClick:()=>u("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,o){const{args:e}=o;return`
<Button {...args} prefix={<Account />}>${e.children}</Button>
<Button {...args} suffix={<Search />}>${e.children}</Button>
`}}}},render(t){return r.jsxs(r.Fragment,{children:[r.jsx(n,{...t,prefix:r.jsx(l,{}),children:t.children}),r.jsx(n,{...t,suffix:r.jsx(d,{}),children:t.children})]})}},a={name:"外觀樣式",argTypes:{variant:{table:{disable:!0}}},args:{variant:"ghost",suffix:null,onClick:()=>u("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,o){const{args:e}=o;return`
<Button {...args} variant="filled">${e.children}</Button>
<Button {...args} variant="ghost">${e.children}</Button>
<Button {...args} variant="text">${e.children}</Button>
<Button {...args} variant="soft">${e.children}</Button>
`}}}},render(t){return r.jsxs(r.Fragment,{children:[r.jsx(n,{...t,variant:"filled",children:t.children}),r.jsx(n,{...t,variant:"ghost",children:t.children}),r.jsx(n,{...t,variant:"text",children:t.children}),r.jsx(n,{...t,variant:"soft",children:t.children})]})}},c={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{variant:"filled",prefix:r.jsx(l,{}),suffix:null,onClick:()=>u("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,o){const{args:e}=o;return`
<Button { ...args } themeColor="primary">${e.children}</Button>
<Button { ...args } themeColor="secondary">${e.children}</Button>
<Button { ...args } themeColor="neutral">${e.children}</Button>
<Button { ...args } themeColor="info">${e.children}</Button>
<Button { ...args } themeColor="success">${e.children}</Button>
<Button { ...args } themeColor="warning">${e.children}</Button>
<Button { ...args } themeColor="error">${e.children}</Button>
`}}}},render(t){return r.jsxs(r.Fragment,{children:[r.jsx(n,{...t,themeColor:"primary",children:t.children}),r.jsx(n,{...t,themeColor:"secondary",children:t.children}),r.jsx(n,{...t,themeColor:"neutral",children:t.children}),r.jsx(n,{...t,themeColor:"info",children:t.children}),r.jsx(n,{...t,themeColor:"success",children:t.children}),r.jsx(n,{...t,themeColor:"warning",children:t.children}),r.jsx(n,{...t,themeColor:"error",children:t.children})]})}};var h,g,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var B,f,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '附加元素',
  argTypes: {
    prefix: {
      table: {
        disable: true
      }
    },
    suffix: {
      table: {
        disable: true
      }
    }
  },
  args: {
    variant: 'ghost',
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Button {...args} prefix={<Account />}>\${args.children}</Button>
<Button {...args} suffix={<Search />}>\${args.children}</Button>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Button {...args} prefix={<SvgAccount />}>
          {args.children}
        </Button>
        <Button {...args} suffix={<SvgSearch />}>
          {args.children}
        </Button>
      </>;
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,b,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '外觀樣式',
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  args: {
    variant: 'ghost',
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Button {...args} variant="filled">\${args.children}</Button>
<Button {...args} variant="ghost">\${args.children}</Button>
<Button {...args} variant="text">\${args.children}</Button>
<Button {...args} variant="soft">\${args.children}</Button>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Button {...args} variant="filled">
          {args.children}
        </Button>
        <Button {...args} variant="ghost">
          {args.children}
        </Button>
        <Button {...args} variant="text">
          {args.children}
        </Button>
        <Button {...args} variant="soft">
          {args.children}
        </Button>
      </>;
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,j,$;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '主題色彩',
  argTypes: {
    themeColor: {
      table: {
        disable: true
      }
    }
  },
  args: {
    variant: 'filled',
    prefix: <SvgAccount />,
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Button { ...args } themeColor="primary">\${args.children}</Button>
<Button { ...args } themeColor="secondary">\${args.children}</Button>
<Button { ...args } themeColor="neutral">\${args.children}</Button>
<Button { ...args } themeColor="info">\${args.children}</Button>
<Button { ...args } themeColor="success">\${args.children}</Button>
<Button { ...args } themeColor="warning">\${args.children}</Button>
<Button { ...args } themeColor="error">\${args.children}</Button>
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Button {...args} themeColor="primary">
          {args.children}
        </Button>
        <Button {...args} themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} themeColor="neutral">
          {args.children}
        </Button>
        <Button {...args} themeColor="info">
          {args.children}
        </Button>
        <Button {...args} themeColor="success">
          {args.children}
        </Button>
        <Button {...args} themeColor="warning">
          {args.children}
        </Button>
        <Button {...args} themeColor="error">
          {args.children}
        </Button>
      </>;
  }
}`,...($=(j=c.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};const nt=["Default","Additional","Shape","Theme"];export{s as Additional,i as Default,a as Shape,c as Theme,nt as __namedExportsOrder,et as default};
