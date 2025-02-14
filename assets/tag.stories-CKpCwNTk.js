import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as T}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as a}from"./tag-Csy5cwmK.js";import{b as x,d as S,e as v,f as P}from"./warning-tri-D1aSkfBJ.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./close-o-4V2u0k.js";const E={title:"Component/Tag",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","neutral","info","success","warning","error"],control:{type:"select"},table:{category:"PROPS"}},variable:{description:"外觀樣式",options:["filled","ghost"],control:{type:"select"},table:{category:"PROPS"}},label:{description:"標籤文字",table:{category:"PROPS"}},href:{description:"超連結",table:{category:"PROPS"}},prefix:{description:"圖示",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(x,{}),Search:e.jsx(S,{}),Visibility:e.jsx(v,{}),VisibilityOff:e.jsx(P,{})},table:{category:"PROPS"}},closable:{description:"摸到時顯示關閉圖示",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",action:"closed",table:{category:"EVENTS"}}},args:{themeColor:"primary",variable:"filled",label:"Tag",href:"",prefix:"None",closable:!0,isDisabled:!1,className:"",onClose:T("closed")},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(r){return e.jsx(a,{...r})}},s={name:"附加元素",argTypes:{prefix:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,n){return`
<Tag {...args} prefix={<SvgAccount></SvgAccount>} />
          `}}}},render(r){return e.jsx(a,{...r,prefix:e.jsx(x,{})})}},t={name:"外觀樣式",argTypes:{variable:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,n){return`
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
`}}}},render(r){return e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a,{...r,variable:"filled",themeColor:"primary",label:"Primary"}),e.jsx(a,{...r,variable:"ghost",themeColor:"primary",label:"Primary"})]})}},l={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,n){return`
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
`}}}},render(r){return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{...r,themeColor:"primary",label:"Primary"}),e.jsx(a,{...r,themeColor:"secondary",label:"Secondary"}),e.jsx(a,{...r,themeColor:"neutral",label:"Neutral"}),e.jsx(a,{...r,themeColor:"info",label:"Info"}),e.jsx(a,{...r,themeColor:"success",label:"Success"}),e.jsx(a,{...r,themeColor:"warning",label:"Warning"}),e.jsx(a,{...r,themeColor:"error",label:"Error"})]})}};var i,c,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tag {...args} />;
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '附加元素',
  argTypes: {
    prefix: {
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
<Tag {...args} prefix={<SvgAccount></SvgAccount>} />
          \`;
        }
      }
    }
  },
  render(args) {
    return <Tag {...args} prefix={<SvgAccount />} />;
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,b,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '外觀樣式',
  argTypes: {
    variable: {
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
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Tag {...args} variable="filled" themeColor="primary" label="Primary" />
        <Tag {...args} variable="ghost" themeColor="primary" label="Primary" />
      </div>;
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,h,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="neutral" label="Neutral" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>;
  }
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const D=["Default","Additional","Variable","ThemeColor"];export{s as Additional,o as Default,l as ThemeColor,t as Variable,D as __namedExportsOrder,E as default};
