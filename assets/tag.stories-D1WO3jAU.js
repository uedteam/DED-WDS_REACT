import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as T}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{T as a}from"./tag-gKTSkn4a.js";import{b as x,d as S,e as v,f as P}from"./warning-tri-D1aSkfBJ.js";import"./index-RYns6xqu.js";import"./close-o-4V2u0k.js";const w={title:"Component/Tag",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","neutral","info","success","warning","error"],control:{type:"select"},table:{category:"PROPS"}},variant:{description:"外觀樣式",options:["filled","ghost"],control:{type:"select"},table:{category:"PROPS"}},label:{description:"標籤文字",table:{category:"PROPS"}},href:{description:"超連結",table:{category:"PROPS"}},prefix:{description:"圖示",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(x,{}),Search:r.jsx(S,{}),Visibility:r.jsx(v,{}),VisibilityOff:r.jsx(P,{})},table:{category:"PROPS"}},closable:{description:"摸到時顯示關閉圖示",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",action:"closed",table:{category:"EVENTS"}}},args:{themeColor:"primary",variant:"filled",label:"Tag",href:"",prefix:"None",closable:!0,isDisabled:!1,className:"",onClose:T("closed")},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(a,{...e})}},t={name:"附加元素",argTypes:{prefix:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,l){return`
<Tag {...args} prefix={<SvgAccount></SvgAccount>} />
          `}}}},render(e){return r.jsx(a,{...e,prefix:r.jsx(x,{})})}},s={name:"外觀樣式",argTypes:{variant:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,l){return`
<Tag {...args} variant="filled" />
<Tag {...args} variant="ghost" />
`}}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(a,{...e,variant:"filled",themeColor:"primary",label:"Primary"}),r.jsx(a,{...e,variant:"ghost",themeColor:"primary",label:"Primary"})]})}},n={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,l){return`
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
`}}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[r.jsx(a,{...e,themeColor:"primary",label:"Primary"}),r.jsx(a,{...e,themeColor:"secondary",label:"Secondary"}),r.jsx(a,{...e,themeColor:"neutral",label:"Neutral"}),r.jsx(a,{...e,themeColor:"info",label:"Info"}),r.jsx(a,{...e,themeColor:"success",label:"Success"}),r.jsx(a,{...e,themeColor:"warning",label:"Warning"}),r.jsx(a,{...e,themeColor:"error",label:"Error"})]})}};var i,c,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tag {...args} />;
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,y,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '外觀樣式',
  argTypes: {
    variant: {
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
<Tag {...args} variant="filled" />
<Tag {...args} variant="ghost" />
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
        <Tag {...args} variant="filled" themeColor="primary" label="Primary" />
        <Tag {...args} variant="ghost" themeColor="primary" label="Primary" />
      </div>;
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,h,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const E=["Default","Additional","Variant","ThemeColor"];export{t as Additional,o as Default,n as ThemeColor,s as Variant,E as __namedExportsOrder,w as default};
