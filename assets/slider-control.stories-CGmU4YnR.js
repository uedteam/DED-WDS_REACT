import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as n}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-BeUUUaOK.js";import{a as i}from"./card-CJ_QUIpD.js";import"./checkbox-DKKX1wwo.js";import"./input-Bcx9qKJo.js";import"./textarea-C1_2O7ml.js";import"./toggle-xIt_69v7.js";import"./radio-D2b4GCX4.js";import"./breadcrumb-C1pwdv1X.js";import"./avatar-BfuDsxqz.js";import"./progress-circle-CwKMVC63.js";import"./progress-line-BtL8AAbK.js";import"./styled-CaWuYePh.js";import"./menu-DgvEGrP7.js";import{P as s,M as a}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";import"./arrow_down-DA-sWbvp.js";const R={title:"Design System/Slider-Control",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用"},min:{description:"最小值"},max:{description:"最大值"},step:{description:"步進值"},unit:{description:"單位"},prefix:{description:"前置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:e.jsx(s,{width:32,height:32}),Decrease:e.jsx(a,{width:32,height:32})}},suffix:{description:"後置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:e.jsx(s,{width:32,height:32}),Decrease:e.jsx(a,{width:32,height:32})}},className:{description:"客製化樣式"},initValue:{description:"初始值"},onChange:{description:"變更事件"},onClick:{description:"點擊事件",action:"onClick"}},parameters:{docs:{title:"按鈕滑桿",description:{component:"按鈕滑桿輸入的呈現及說明。"}}},args:{themeColor:"primary",isDisabled:!1,onChange:n("onChange"),onClick:n("onClick"),className:""}},o={name:"主要項目",args:{prefix:"Decrease",suffix:"Increase",min:0,max:100,step:1,unit:"℃",initValue:50,onClick:n("onClick")},render(r){return e.jsx(i,{...r})}},t={name:"主題色按鈕滑桿",args:{prefix:"Decrease",suffix:"Increase",min:0,max:100,step:1,unit:"%",initValue:50,onClick:n("onClick")},render(r){return e.jsxs("div",{children:[e.jsx(i,{...r,initValue:40,themeColor:"primary"}),e.jsx(i,{...r,initValue:50,themeColor:"secondary"}),e.jsx(i,{...r,initValue:60,themeColor:"tertiary"}),e.jsx(i,{...r,initValue:70,themeColor:"success"}),e.jsx(i,{...r,initValue:80,themeColor:"info"}),e.jsx(i,{...r,initValue:90,themeColor:"warning"}),e.jsx(i,{...r,initValue:100,themeColor:"error"})]})}};var m,c,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const q=["Primary","ThemeColor"];export{o as Primary,t as ThemeColor,q as __namedExportsOrder,R as default};
