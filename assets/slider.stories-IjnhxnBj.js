import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{S as i}from"./card-DK7fbpbo.js";import"./input-Dm2PXP3R.js";import"./textarea-BigHPPl8.js";import"./toggle-CJHXWvBg.js";import"./radio-DJzB3WN5.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-CGlRGtsX.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-CjyTQx-3.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./auo-0es9FKg1.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const R={title:"Design System/Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用"},max:{description:"最大值"},min:{description:"最小值"},unit:{description:"單位"},step:{description:"步進值"},initValue:{description:"初始值"},className:{description:"客製化樣式"},onChange:{description:"值改變事件",action:"onChange"}},parameters:{docs:{title:"滑桿",description:{component:"滑桿的呈現及說明。"}}},args:{themeColor:"primary",isDisabled:!1,onChange:c("onChange"),className:""}},t={name:"主要項目",args:{min:-100,max:100,step:1,initValue:50,unit:"℃"},render(e){return r.jsx(i,{...e})}},o={name:"主題色滑桿",args:{min:0,max:100,step:1,initValue:10,unit:"%"},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,initValue:40,themeColor:"primary"}),r.jsx(i,{...e,initValue:50,themeColor:"secondary"}),r.jsx(i,{...e,initValue:60,themeColor:"tertiary"}),r.jsx(i,{...e,initValue:70,themeColor:"info"}),r.jsx(i,{...e,initValue:80,themeColor:"success"}),r.jsx(i,{...e,initValue:90,themeColor:"warning"}),r.jsx(i,{...e,initValue:100,themeColor:"error"})]})}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    min: -100,
    max: 100,
    step: 1,
    initValue: 50,
    unit: '℃'
  },
  render(args) {
    return <Slider {...args} />;
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '主題色滑桿',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: 10,
    unit: '%'
  },
  render(args) {
    return <div>
        <Slider {...args} initValue={40} themeColor="primary" />
        <Slider {...args} initValue={50} themeColor="secondary" />
        <Slider {...args} initValue={60} themeColor="tertiary" />
        <Slider {...args} initValue={70} themeColor="info" />
        <Slider {...args} initValue={80} themeColor="success" />
        <Slider {...args} initValue={90} themeColor="warning" />
        <Slider {...args} initValue={100} themeColor="error" />
      </div>;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const k=["Primary","ThemeColor"];export{t as Primary,o as ThemeColor,k as __namedExportsOrder,R as default};
