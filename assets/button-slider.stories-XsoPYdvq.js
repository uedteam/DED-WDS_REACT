import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as n}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{a as i}from"./card-DK7fbpbo.js";import"./input-Dm2PXP3R.js";import"./textarea-BigHPPl8.js";import"./toggle-CJHXWvBg.js";import"./radio-DJzB3WN5.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-CGlRGtsX.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-CjyTQx-3.js";import{P as s,M as a}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const M={title:"Design System/Button-Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用"},min:{description:"最小值"},max:{description:"最大值"},step:{description:"步進值"},unit:{description:"單位"},prefix:{description:"前置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:e.jsx(s,{width:32,height:32}),Decrease:e.jsx(a,{width:32,height:32})}},suffix:{description:"後置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:e.jsx(s,{width:32,height:32}),Decrease:e.jsx(a,{width:32,height:32})}},className:{description:"客製化樣式"},initValue:{description:"初始值"},onChange:{description:"變更事件"},onClick:{description:"點擊事件",action:"onClick"}},parameters:{docs:{title:"按鈕滑桿",description:{component:"按鈕滑桿輸入的呈現及說明。"}}},args:{themeColor:"primary",isDisabled:!1,onChange:n("onChange"),onClick:n("onClick"),className:""}},t={name:"主要項目",args:{prefix:"Decrease",suffix:"Increase",min:0,max:100,step:1,unit:"℃",initValue:50,onClick:n("onClick")},render(r){return e.jsx(i,{...r})}},o={name:"主題色按鈕滑桿",args:{prefix:"Decrease",suffix:"Increase",min:0,max:100,step:1,unit:"%",initValue:50,onClick:n("onClick")},render(r){return e.jsxs("div",{children:[e.jsx(i,{...r,initValue:40,themeColor:"primary"}),e.jsx(i,{...r,initValue:50,themeColor:"secondary"}),e.jsx(i,{...r,initValue:60,themeColor:"tertiary"}),e.jsx(i,{...r,initValue:70,themeColor:"success"}),e.jsx(i,{...r,initValue:80,themeColor:"info"}),e.jsx(i,{...r,initValue:90,themeColor:"warning"}),e.jsx(i,{...r,initValue:100,themeColor:"error"})]})}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    prefix: 'Decrease',
    suffix: 'Increase',
    min: 0,
    max: 100,
    step: 1,
    unit: '℃',
    initValue: 50,
    onClick: action('onClick')
  },
  render(args) {
    return <ButtonSlider {...args} />;
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '主題色按鈕滑桿',
  args: {
    prefix: 'Decrease',
    suffix: 'Increase',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    initValue: 50,
    onClick: action('onClick')
  },
  render(args) {
    return <div>
        <ButtonSlider {...args} initValue={40} themeColor="primary" />
        <ButtonSlider {...args} initValue={50} themeColor="secondary" />
        <ButtonSlider {...args} initValue={60} themeColor="tertiary" />
        <ButtonSlider {...args} initValue={70} themeColor="success" />
        <ButtonSlider {...args} initValue={80} themeColor="info" />
        <ButtonSlider {...args} initValue={90} themeColor="warning" />
        <ButtonSlider {...args} initValue={100} themeColor="error" />
      </div>;
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const O=["Primary","ThemeColor"];export{t as Primary,o as ThemeColor,O as __namedExportsOrder,M as default};
