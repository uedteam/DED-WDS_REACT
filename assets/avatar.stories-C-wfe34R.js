import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as r}from"./dashboard-BN7uNLRv.js";import"./index-RYns6xqu.js";import"./warning-tri-aIaTAFys.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./string-BqrfsRv8.js";import"./badge-dQZV2GFR.js";import"./breadcrumb-C-FBoaba.js";import"./toast-jwbKr4Oe.js";import"./close-o-4V2u0k.js";import"./title-Cl2MDiva.js";import"./index-sbqOYYIm.js";import"./checkbox-B0KnDoZ3.js";import"./check-BnJBHFpS.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-xlCgWV6E.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-DJ6IV6nG.js";import"./textarea-B3sPnM2u.js";import"./toggle-Co0kfaDY.js";import"./menu-kGy3ruG_.js";import"./auth-flow-B5dvVafu.js";const L={title:"Component/Avatar",component:r,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},decorators:[e=>a.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:a.jsx(e,{})})],parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},t={name:"預設項目",args:{},render(e){return a.jsx(r,{...e})}},s={name:"頭像形狀",argTypes:{shape:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{src:"https://storage.googleapis.com/ded-wds-bucket/fox.png"},parameters:{docs:{source:{code:`
        <Avatar {...args} shape="circle" />
<Avatar {...args} shape="square" />
        `}}},render(e){return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,shape:"circle"}),a.jsx(r,{...e,shape:"square"})]})}},o={name:"頭像狀態",argTypes:{status:{table:{disable:!0}}},args:{shape:"circle",size:"large",src:"https://storage.googleapis.com/ded-wds-bucket/tigger.png"},parameters:{docs:{source:{code:`
<Avatar {...args} status="online" />
<Avatar {...args} status="idle" />
<Avatar {...args} status="busy" />
<Avatar {...args} status="offline" />
        `}}},render(e){return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e}),a.jsx(r,{...e,status:"online"}),a.jsx(r,{...e,status:"idle"}),a.jsx(r,{...e,status:"busy"}),a.jsx(r,{...e,status:"offline"})]})}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,l,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '頭像形狀',
  argTypes: {
    shape: {
      table: {
        disable: true
      }
    },
    alt: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    }
  },
  args: {
    src: 'https://storage.googleapis.com/ded-wds-bucket/fox.png'
  },
  parameters: {
    docs: {
      source: {
        code: \`
        <Avatar {...args} shape="circle" />
<Avatar {...args} shape="square" />
        \`
      }
    }
  },
  render(args) {
    return <>
        <Avatar {...args} shape="circle" />
        <Avatar {...args} shape="square" />
      </>;
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,d,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '頭像狀態',
  argTypes: {
    status: {
      table: {
        disable: true
      }
    }
  },
  args: {
    shape: 'circle',
    size: 'large',
    src: 'https://storage.googleapis.com/ded-wds-bucket/tigger.png'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Avatar {...args} status="online" />
<Avatar {...args} status="idle" />
<Avatar {...args} status="busy" />
<Avatar {...args} status="offline" />
        \`
      }
    }
  },
  render(args) {
    return <>
        <Avatar {...args} />
        <Avatar {...args} status="online" />
        <Avatar {...args} status="idle" />
        <Avatar {...args} status="busy" />
        <Avatar {...args} status="offline" />
      </>;
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const M=["Default","AvatarShape","AvatarStatus"];export{s as AvatarShape,o as AvatarStatus,t as Default,M as __namedExportsOrder,L as default};
