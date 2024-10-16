import{j as s}from"./jsx-runtime-DEdD30eg.js";import{A as a}from"./avatar-CGlRGtsX.js";import"./index-RYns6xqu.js";import"./auo-0es9FKg1.js";import"./offline-Bm72BRFT.js";const A={title:"Design System/Avatar",component:a,tags:["autodocs"],argTypes:{size:{description:"Avatar 尺寸",control:{type:"select",options:["small","medium","large"]}},shape:{description:"形狀",control:{type:"select",options:["circle","square"]}},userName:{description:"使用者名稱"},status:{description:"狀態",control:{type:"select",options:["online","idle","busy","offline"]}},imgSrc:{description:"圖片連結"},alt:{description:"圖片描述"},className:{description:"客製化樣式"}},parameters:{docs:{title:"Avatar",description:{component:"個人頭像的呈現及說明。"}}}},r={name:"主要項目",args:{shape:"circle",size:"large",userName:"Kevin",status:"online",imgSrc:"https://picsum.photos/320/240",alt:"Kevin's avatar",className:""},render(e){return s.jsx(a,{...e})}},t={name:"頭像形狀",args:{userName:"Kevin",imgSrc:"https://picsum.photos/320/240",className:""},render(e){return s.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[s.jsx(a,{...e,size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,size:"large",shape:"square",status:"idle"})]})}},i={name:"頭像狀態",args:{userName:"Kevin",imgSrc:"https://picsum.photos/320/240",className:""},render(e){return s.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-end"},children:[s.jsx(a,{...e,size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,size:"large",shape:"circle",status:"idle"}),s.jsx(a,{...e,size:"large",shape:"circle",status:"busy"}),s.jsx(a,{...e,size:"large",shape:"circle",status:"offline"})]})}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    shape: 'circle',
    size: 'large',
    userName: 'Kevin',
    status: 'online',
    imgSrc: 'https://picsum.photos/320/240',
    alt: \`Kevin's avatar\`,
    className: ''
  },
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const z=["Primary","AvatarShape","AvatarStatus"];export{t as AvatarShape,i as AvatarStatus,r as Primary,z as __namedExportsOrder,A as default};
