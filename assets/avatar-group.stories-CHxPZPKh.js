import{j as o}from"./jsx-runtime-DEdD30eg.js";import{A as i}from"./avatar-group-0IEVTNp7.js";import"./index-RYns6xqu.js";import"./avatar-Cag5b3-h.js";import"./offline-Ddz6ifNG.js";import"./title-DrQUsPis.js";import"./lodash-CcdATr5u.js";import"./button-DpmRqYRM.js";import"./style-BG61KOMt.js";import"./input-D6oNhTLV.js";import"./textarea-CUj1LfcX.js";import"./toggle-D9OGgwI9.js";import"./radio-CW7ydt8x.js";import"./check-BnJBHFpS.js";import"./breadcrumb-BT2wGwTD.js";import"./menu-DNu1tztI.js";import"./lock-BX1EjnP_.js";const G={title:"Design System/Module/AvatarGroup",component:i,tags:["autodocs"],argTypes:{users:{description:"使用者清單",control:{type:"object"}},limit:{description:"限制顯示數量",control:{type:"number",min:1}},className:{description:"標題樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},e={name:"搜尋輸入框",args:{users:[{userName:"eason",shape:"circle",size:"medium"},{userName:"KevinYang",shape:"circle",size:"medium"},{userName:"AmosLee",shape:"circle",size:"medium",imageSrc:"https://picsum.photos/320/240"},{userName:"JohnWu",shape:"circle",size:"medium",imageSrc:"https://picsum.photos/320/340"}],limit:1,className:""},render(m){return o.jsx(i,{...m})}};var s,r,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    // 設定參數預設值
    users: [{
      userName: 'eason',
      // status: 'online',
      shape: 'circle',
      size: 'medium'
      // imageSrc: 'https://picsum.photos/320/240',
    }, {
      userName: 'KevinYang',
      // status: 'busy',
      shape: 'circle',
      size: 'medium'
      // imageSrc: 'https://picsum.photos/320/240',
    }, {
      userName: 'AmosLee',
      // status: 'idle',
      shape: 'circle',
      size: 'medium',
      imageSrc: 'https://picsum.photos/320/240'
    }, {
      userName: 'JohnWu',
      // status: 'idle',
      shape: 'circle',
      size: 'medium',
      imageSrc: 'https://picsum.photos/320/340'
    }],
    limit: 1,
    className: ''
  },
  render(args) {
    return <AvatarGroup {...args} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,G as default};
