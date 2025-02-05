import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a}from"./tooltip-DyQCFUU7.js";import"./index-RYns6xqu.js";import"./warning-tri-Y1-2BlEi.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-DfiO5r2s.js";import"./toast-1erkFIb6.js";import"./title-Cw6Qriwq.js";import"./index-sbqOYYIm.js";import"./checkbox-wrczPlMV.js";import"./check-BnJBHFpS.js";import"./progress-circle-xnhIhzfk.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-D6T-BqbL.js";import"./layout-ZjbFUAzr.js";import"./menu-uNoR_NkF.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./notification-NM2mg_B2.js";const K={title:"Component/Avatar",component:a,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},decorators:[s=>e.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:e.jsx(s,{})})],parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},t={name:"預設項目",args:{},render(s){return e.jsx(a,{...s})}},r={name:"頭像形狀",argTypes:{shape:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `}}},render(s){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",shape:"circle"}),e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/tigger.png",shape:"square"})]})}},o={name:"頭像狀態",argTypes:{status:{table:{disable:!0}},alt:{table:{disable:!0}},src:{table:{disable:!0}}},args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `}}},render(s){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png"}),e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",status:"online"}),e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/koala.png",status:"idle"}),e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/dog.png",status:"busy"}),e.jsx(a,{...s,src:"https://storage.googleapis.com/ded-wds-bucket/pig.png",status:"offline"})]})}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var n,l,g;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
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
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const L=["Default","AvatarShape","AvatarStatus"];export{r as AvatarShape,o as AvatarStatus,t as Default,L as __namedExportsOrder,K as default};
