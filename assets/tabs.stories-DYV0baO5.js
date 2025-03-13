import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as C}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{l as t}from"./dashboard-Tdo9JwBb.js";import{a as n}from"./warning-tri-BnRwNKC6.js";import"./index-RYns6xqu.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./string-BqrfsRv8.js";import"./badge-CWp9P8za.js";import"./breadcrumb-CYcF5gjr.js";import"./toast-Dm8UHK9O.js";import"./close-o-4V2u0k.js";import"./title-CZRmBG9s.js";import"./index-sbqOYYIm.js";import"./checkbox-D6RDPsQd.js";import"./check-BnJBHFpS.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./auth-flow-DfX0azyS.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-Bus3m9Ej.js";import"./toggle-Co0kfaDY.js";import"./menu-DTWCQBFx.js";const T=[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],M={title:"Component/Tabs",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2},table:{category:"PROPS"}},type:{description:"頁籤樣式",control:{type:"select",options:["basic","outline","button"]},table:{category:"PROPS"}},prefix:{description:"前綴元素",options:["none","SvgArrowDown"],mapping:{none:null,SvgArrowDown:r.jsx(n,{})},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"}}},args:{themeColor:"primary",dataSource:T,activeIndex:0,type:"basic",prefix:r.jsx(n,{}),isDisabled:!1,className:"",onClick:C("onClick")},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:r.jsx(e,{})})],parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},s={name:"頁籤類型",argTypes:{type:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,y){return`
<Tabs {...args} type="basic" />
<Tabs {...args} type="outline" />
<Tabs {...args} type="button" />
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,type:"basic"}),r.jsx(t,{...e,type:"outline"}),r.jsx(t,{...e,type:"button"})]})}},a={name:"主題色彩",args:{type:"button",activeIndex:2},parameters:{docs:{source:{transform(e,y){return`
<Tabs {...args} themeColor="primary" />
<Tabs {...args} themeColor="secondary" />
<Tabs {...args} themeColor="neutral" />
<Tabs {...args} themeColor="info" />
<Tabs {...args} themeColor="success" />
<Tabs {...args} themeColor="warning" />
<Tabs {...args} themeColor="error" />
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,themeColor:"primary"}),r.jsx(t,{...e,themeColor:"secondary"}),r.jsx(t,{...e,themeColor:"neutral"}),r.jsx(t,{...e,themeColor:"info"}),r.jsx(t,{...e,themeColor:"success"}),r.jsx(t,{...e,themeColor:"warning"}),r.jsx(t,{...e,themeColor:"error"})]})}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '頁籤類型',
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
          return \`
<Tabs {...args} type="basic" />
<Tabs {...args} type="outline" />
<Tabs {...args} type="button" />
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Tabs {...args} type="basic" />
        <Tabs {...args} type="outline" />
        <Tabs {...args} type="button" />
      </>;
  }
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var g,d,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    type: 'button',
    activeIndex: 2
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tabs {...args} themeColor="primary" />
<Tabs {...args} themeColor="secondary" />
<Tabs {...args} themeColor="neutral" />
<Tabs {...args} themeColor="info" />
<Tabs {...args} themeColor="success" />
<Tabs {...args} themeColor="warning" />
<Tabs {...args} themeColor="error" />
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Tabs {...args} themeColor="primary" />
        <Tabs {...args} themeColor="secondary" />
        <Tabs {...args} themeColor="neutral" />
        <Tabs {...args} themeColor="info" />
        <Tabs {...args} themeColor="success" />
        <Tabs {...args} themeColor="warning" />
        <Tabs {...args} themeColor="error" />
      </>;
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Q=["Default","Type","PrimaryWithButton"];export{o as Default,a as PrimaryWithButton,s as Type,Q as __namedExportsOrder,M as default};
