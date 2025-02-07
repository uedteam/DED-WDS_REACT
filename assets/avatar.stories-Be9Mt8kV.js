import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as r}from"./tooltip-BeYe04Nk.js";import"./index-RYns6xqu.js";import"./warning-tri-BY3sPlw-.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-BPltvF_h.js";import"./breadcrumb-DSLqi4-x.js";import"./toast-DwcNDvV5.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-BnGhXkr7.js";import"./check-BnJBHFpS.js";import"./progress-circle-5ZOi_8dX.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-BURSIgt3.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-D3ifh5CR.js";import"./layout-ZjbFUAzr.js";import"./menu-DNbdc4Xz.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-W9QNdB38.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";const J={title:"Component/Avatar",component:r,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},decorators:[e=>a.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:a.jsx(e,{})})],parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},s={name:"預設項目",args:{},render(e){return a.jsx(r,{...e})}},t={name:"頭像形狀",argTypes:{shape:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{src:"https://storage.googleapis.com/ded-wds-bucket/fox.png"},parameters:{docs:{source:{code:`
        <Avatar {...args} shape="circle" />
<Avatar {...args} shape="square" />
        `}}},render(e){return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,shape:"circle"}),a.jsx(r,{...e,shape:"square"})]})}},o={name:"頭像狀態",argTypes:{status:{table:{disable:!0}}},args:{shape:"circle",size:"large",src:"https://storage.googleapis.com/ded-wds-bucket/tigger.png"},parameters:{docs:{source:{code:`
<Avatar {...args} status="online" />
<Avatar {...args} status="idle" />
<Avatar {...args} status="busy" />
<Avatar {...args} status="offline" />
        `}}},render(e){return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e}),a.jsx(r,{...e,status:"online"}),a.jsx(r,{...e,status:"idle"}),a.jsx(r,{...e,status:"busy"}),a.jsx(r,{...e,status:"offline"})]})}};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,l,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const K=["Default","AvatarShape","AvatarStatus"];export{t as AvatarShape,o as AvatarStatus,s as Default,K as __namedExportsOrder,J as default};
