import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-CM0pFb8Z.js";import{e as t,S as i}from"./dashboard-CS11yVxt.js";import"./badge-BPltvF_h.js";import"./breadcrumb-CPMUpcum.js";import"./toast-DpTAaaGy.js";import"./checkbox-D6RDPsQd.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./auth-flow-DDng6RJs.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-Biwxsj_U.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-B_exsVsy.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import{g as b}from"./warning-tri-BnRwNKC6.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const Q={title:"Component/Textarea",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},limit:{description:"字數限制",table:{category:"PROPS"}},currValue:{description:"輸入值",table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"onChange",table:{category:"EVENTS"}}},args:{label:"Label",placeholder:"Placeholder",limit:0,currValue:"Type something",hint:{error:"",description:""},isDisabled:!1,className:"",onChange:h("onChange")},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.jsx(e,{})})],parameters:{docs:{title:"Textarea",description:{component:"文字輸入框組件的呈現及說明。"}}}},a={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},s={name:"字數限制",args:{limit:30},render(e){return r.jsx(t,{...e})}},o={name:"輸入框狀態",argTypes:{isDisabled:{table:{disable:!0}},hint:{table:{disable:!0}}},args:{limit:30},parameters:{docs:{source:{code:`
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} isDisabled />
`}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,hint:{error:"",description:r.jsx(i,{themeColor:"neutral",variant:"text",prefix:"",isShowDot:!1,children:"Prompt message"})}}),r.jsx(t,{...e,hint:{error:r.jsx(i,{themeColor:"error",variant:"text",prefix:r.jsx(b,{}),children:"Error message"}),description:""}}),r.jsx(t,{...e,isDisabled:!0})]})}};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '字數限制',
  args: {
    limit: 30
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,x,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '輸入框狀態',
  argTypes: {
    isDisabled: {
      table: {
        disable: true
      }
    },
    hint: {
      table: {
        disable: true
      }
    }
  },
  args: {
    limit: 30
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} isDisabled />
\`
      }
    }
  },
  render(args) {
    return <>
        <Textarea {...args} hint={{
        error: '',
        description: <StatusIndicator themeColor="neutral" variant="text" prefix="" isShowDot={false}>
                Prompt message
              </StatusIndicator>
      }} />
        <Textarea {...args} hint={{
        error: <StatusIndicator themeColor="error" variant="text" prefix={<SvgErrorCircle />}>
                Error message
              </StatusIndicator>,
        description: ''
      }} />
        <Textarea {...args} isDisabled />
      </>;
  }
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const U=["Default","Limit","TextareaStatus"];export{a as Default,s as Limit,o as TextareaStatus,U as __namedExportsOrder,Q as default};
