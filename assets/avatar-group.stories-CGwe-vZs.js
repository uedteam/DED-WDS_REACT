import{j as o}from"./jsx-runtime-DEdD30eg.js";import{A as i}from"./tooltip-BfwZgyUh.js";import"./index-RYns6xqu.js";import"./title-D2ajyWBg.js";import"./lodash-CcdATr5u.js";import"./button-Cf2gEP8g.js";import"./input-S-auccUp.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-BBGzZRP6.js";import"./search-ze-2lSrK.js";import"./check-BnJBHFpS.js";import"./breadcrumb-BT2wGwTD.js";import"./avatar-BP0lXbZL.js";import"./offline-Ddz6ifNG.js";import"./menu-DNu1tztI.js";import"./lock-DKT4ZBgT.js";import"./index-sbqOYYIm.js";const b={title:"Design System/Module/AvatarGroup",component:i,tags:["autodocs"],argTypes:{users:{description:"使用者清單",control:{type:"object"}},limit:{description:"限制顯示數量",control:{type:"number",min:1}},className:{description:"標題樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},e={name:"搜尋輸入框",args:{users:[{userName:"eason",shape:"circle",size:"medium"},{userName:"KevinYang",shape:"circle",size:"medium"},{userName:"AmosLee",shape:"circle",size:"medium",imageSrc:"https://picsum.photos/320/240"},{userName:"JohnWu",shape:"circle",size:"medium",imageSrc:"https://picsum.photos/320/340"}],limit:1,className:""},render(m){return o.jsx(i,{...m})}};var s,r,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const f=["Primary"];export{e as Primary,f as __namedExportsOrder,b as default};
