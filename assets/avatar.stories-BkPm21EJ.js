import{j as s}from"./jsx-runtime-DEdD30eg.js";import{A as a}from"./avatar-DLZ89yyf.js";import"./index-RYns6xqu.js";import"./auo-TMZ-BSoc.js";import"./offline-Bm72BRFT.js";const z={title:"Design System/Avatar",component:a,tags:["autodocs"],argTypes:{size:{description:"頭像尺寸",control:{type:"select",options:["xsmall","small","medium","large"]}},shape:{description:"頭像形狀",control:{type:"select",options:["circle","square"]}},userName:{description:"登入者名稱"},status:{description:"登入者狀態",control:{type:"select",options:["none","online","idle","busy","offline"]}},imgSrc:{description:"圖片連結"},alt:{description:"圖片描述"},className:{description:"客製化樣式"}},parameters:{docs:{title:"Avatar",description:{component:"個人頭像的呈現及說明。"}}}},r={name:"預設項目",args:{size:"medium",shape:"circle",userName:"default",status:"none",imgSrc:"",alt:"無圖顯示"},render(e){return s.jsx(a,{...e})}},t={name:"頭像形狀",args:{userName:"Kevin",imgSrc:"https://picsum.photos/320/240",className:""},render(e){return s.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[s.jsx(a,{...e,size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,size:"large",shape:"square",status:"idle"})]})}},i={name:"頭像狀態",args:{userName:"Kevin",imgSrc:"https://picsum.photos/320/240",className:""},render(e){return s.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-end"},children:[s.jsx(a,{...e,size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,size:"large",shape:"circle",status:"idle"}),s.jsx(a,{...e,size:"large",shape:"circle",status:"busy"}),s.jsx(a,{...e,size:"large",shape:"circle",status:"offline"})]})}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    size: 'medium',
    shape: 'circle',
    userName: 'default',
    status: 'none',
    imgSrc: '',
    alt: '無圖顯示'
  },
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '頭像形狀',
  args: {
    userName: 'Kevin',
    imgSrc: 'https://picsum.photos/320/240',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-end'
    }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="square" status="idle" />
      </div>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '頭像狀態',
  args: {
    userName: 'Kevin',
    imgSrc: 'https://picsum.photos/320/240',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-end'
    }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="circle" status="idle" />
        <Avatar {...args} size="large" shape="circle" status="busy" />
        <Avatar {...args} size="large" shape="circle" status="offline" />
      </div>;
  }
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const A=["Primary","AvatarShape","AvatarStatus"];export{t as AvatarShape,i as AvatarStatus,r as Primary,A as __namedExportsOrder,z as default};
