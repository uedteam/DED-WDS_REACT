import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as r}from"./tooltip-BzHvdmNN.js";import"./index-RYns6xqu.js";import"./warning-tri-D1aSkfBJ.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-BPltvF_h.js";import"./breadcrumb-BT-H3bo-.js";import"./toast-BhiYnD6v.js";import"./close-o-4V2u0k.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-Cq4ng9DF.js";import"./check-BnJBHFpS.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-Bwf7LxIR.js";import"./input-CMbRWpBm.js";import"./layout-DgebEeDV.js";import"./menu-Bywynte6.js";import"./radio-DmdC9FLH.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-gKTSkn4a.js";import"./textarea-r7CXvhUd.js";import"./toggle-Ck5Sa1oo.js";const K={title:"Component/Avatar",component:r,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},decorators:[e=>a.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:a.jsx(e,{})})],parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},t={name:"預設項目",args:{},render(e){return a.jsx(r,{...e})}},s={name:"頭像形狀",argTypes:{shape:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{src:"https://storage.googleapis.com/ded-wds-bucket/fox.png"},parameters:{docs:{source:{code:`
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,l,g;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const L=["Default","AvatarShape","AvatarStatus"];export{s as AvatarShape,o as AvatarStatus,t as Default,L as __namedExportsOrder,K as default};
