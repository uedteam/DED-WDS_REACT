import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-BeUUUaOK.js";import{S as i}from"./card-CJ_QUIpD.js";import"./checkbox-DKKX1wwo.js";import"./input-Bcx9qKJo.js";import"./textarea-C1_2O7ml.js";import"./toggle-xIt_69v7.js";import"./radio-D2b4GCX4.js";import"./breadcrumb-C1pwdv1X.js";import"./avatar-BfuDsxqz.js";import"./progress-circle-CwKMVC63.js";import"./progress-line-BtL8AAbK.js";import"./styled-CaWuYePh.js";import"./menu-DgvEGrP7.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";import"./arrow_down-DA-sWbvp.js";const z={title:"Design System/Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},isDisabled:{description:"是否禁用"},max:{description:"最大值"},min:{description:"最小值"},unit:{description:"顯示單位"},step:{description:"步進值"},initValue:{description:"初始值"},className:{description:"客製化樣式"},onChange:{description:"值改變事件",action:"onChange"}},parameters:{docs:{title:"滑桿",description:{component:"滑桿的呈現及說明。"}}},args:{themeColor:"primary",isDisabled:!1,min:-100,max:100,step:1,initValue:0,unit:"℃",onChange:c("onChange"),className:""}},t={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},o={name:"主題色彩",args:{min:0,max:100,step:1,initValue:10,unit:"%"},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,initValue:40,themeColor:"primary"}),r.jsx(i,{...e,initValue:50,themeColor:"secondary"}),r.jsx(i,{...e,initValue:60,themeColor:"tertiary"}),r.jsx(i,{...e,initValue:70,themeColor:"info"}),r.jsx(i,{...e,initValue:80,themeColor:"success"}),r.jsx(i,{...e,initValue:90,themeColor:"warning"}),r.jsx(i,{...e,initValue:100,themeColor:"error"})]})}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Slider {...args} />;
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '主題色彩',
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const A=["Default","ThemeColor"];export{t as Default,o as ThemeColor,A as __namedExportsOrder,z as default};
