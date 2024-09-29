import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import{B as a}from"./button-slider-CZZHkijY.js";import{P as r,M as t}from"./plus-BZrTI8CW.js";import"./index-RYns6xqu.js";import"./title-D2ajyWBg.js";import"./lodash-CcdATr5u.js";import"./input-DHzgqC97.js";import"./usePosition-CMmoxCjh.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-Be0wYeYE.js";import"./check-BnJBHFpS.js";import"./breadcrumb-CrM4Rt7n.js";import"./index-sbqOYYIm.js";import"./avatar-oC7HqxiX.js";import"./offline-Bm72BRFT.js";import"./circle-progress-CPe7smUW.js";import"./styled-CaWuYePh.js";import"./line-progress-DCY5z2ah.js";import"./slider-D6GsoAjM.js";const _={title:"Design System/Module/ButtonSlider",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用"},min:{description:"最小值"},max:{description:"最大值"},step:{description:"步進值"},unit:{description:"單位"},prefix:{description:"前置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:i.jsx(r,{width:32,height:32}),Decrease:i.jsx(t,{width:32,height:32})}},suffix:{description:"後置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:i.jsx(r,{width:32,height:32}),Decrease:i.jsx(t,{width:32,height:32})}},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},e={name:"搜尋輸入框",args:{prefix:i.jsx(t,{width:32,height:32}),suffix:i.jsx(r,{width:32,height:32}),unit:"℃",className:"",onClick:c("onClick")},render(p){return i.jsx(a,{...p})}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    prefix: <MinusIcon width={32} height={32} />,
    suffix: <PlusIcon width={32} height={32} />,
    unit: '℃',
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <ButtonSlider {...args} />;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const E=["Primary"];export{e as Primary,E as __namedExportsOrder,_ as default};
