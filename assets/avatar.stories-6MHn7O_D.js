import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as t}from"./tooltip-BkWWl-FY.js";import"./index-RYns6xqu.js";import"./warning-tri-BY3sPlw-.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-BPltvF_h.js";import"./breadcrumb-DSLqi4-x.js";import"./toast-DwcNDvV5.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-BnGhXkr7.js";import"./check-BnJBHFpS.js";import"./progress-circle-5ZOi_8dX.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-BURSIgt3.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-D3ifh5CR.js";import"./layout-ZjbFUAzr.js";import"./menu-DNbdc4Xz.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-W9QNdB38.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";const J={title:"Component/Avatar",component:t,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},decorators:[s=>e.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:e.jsx(s,{})})],parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},a={name:"預設項目",args:{},render(s){return e.jsx(t,{...s})}},r={name:"頭像形狀",argTypes:{shape:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
        <Avatar {...args} shape="circle" />
<Avatar {...args} shape="square" />
        `}}},render(s){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",shape:"circle"}),e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/tigger.png",shape:"square"})]})}},o={name:"頭像狀態",argTypes:{status:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} status="online" />
<Avatar {...args} status="idle" />
<Avatar {...args} status="busy" />
<Avatar {...args} status="offline" />
        `}}},render(s){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png"}),e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",status:"online"}),e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/koala.png",status:"idle"}),e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/dog.png",status:"busy"}),e.jsx(t,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/pig.png",status:"offline"})]})}};var p,c,n;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,g,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  args: {},
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
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/fox.png" shape="circle" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/tigger.png" shape="square" />
      </>;
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '頭像狀態',
  argTypes: {
    status: {
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
    shape: 'circle',
    size: 'large',
    src: 'https://picsum.photos/320/240'
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
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/fox.png" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/lion.png" status="online" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/koala.png" status="idle" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/dog.png" status="busy" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/pig.png" status="offline" />
      </>;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const K=["Default","AvatarShape","AvatarStatus"];export{r as AvatarShape,o as AvatarStatus,a as Default,K as __namedExportsOrder,J as default};
