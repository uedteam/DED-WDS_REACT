import{j as s}from"./jsx-runtime-DEdD30eg.js";import{A as a}from"./avatar-DahGnILO.js";import"./index-RYns6xqu.js";const g={title:"Design System/Element/Avatar",component:a,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},shape:{description:"形狀",control:{type:"radio",options:["circle","square"]}},status:{description:"狀態",control:{type:"select",options:["default","online","idle","busy","offline"]}},imageSrc:{description:"圖片連結",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},r={name:"線上頭像",args:{shape:"circle",size:"medium",userName:"Kevin",status:"online",imageSrc:"https://picsum.photos/320/240",className:""},render(e){return s.jsx(a,{...e})}},t={name:"忙碌頭像",args:{userName:"Kevin",imageSrc:"https://picsum.photos/320/240",className:""},render(e){return s.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-end"},children:[s.jsx(a,{...e,size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,size:"large",shape:"square",status:"idle"}),s.jsx(a,{...e,size:"medium",shape:"circle",status:"busy"}),s.jsx(a,{...e,size:"medium",shape:"square",status:"offline"})]})}};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '線上頭像',
  args: {
    shape: 'circle',
    size: 'medium',
    userName: 'Kevin',
    status: 'online',
    imageSrc: 'https://picsum.photos/320/240',
    className: ''
  },
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '忙碌頭像',
  args: {
    // 設定參數預設值
    userName: 'Kevin',
    imageSrc: 'https://picsum.photos/320/240',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-end'
    }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="square" status="idle" />
        <Avatar {...args} size="medium" shape="circle" status="busy" />
        <Avatar {...args} size="medium" shape="square" status="offline" />
      </div>;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const h=["Primary","Multiple"];export{t as Multiple,r as Primary,h as __namedExportsOrder,g as default};
