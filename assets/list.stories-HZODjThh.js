import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-BeUUUaOK.js";import{L as s}from"./card-CJ_QUIpD.js";import"./checkbox-DKKX1wwo.js";import"./input-Bcx9qKJo.js";import"./textarea-C1_2O7ml.js";import"./toggle-xIt_69v7.js";import"./radio-D2b4GCX4.js";import"./breadcrumb-C1pwdv1X.js";import"./avatar-BfuDsxqz.js";import"./progress-circle-CwKMVC63.js";import"./progress-line-BtL8AAbK.js";import"./styled-CaWuYePh.js";import"./menu-DgvEGrP7.js";import{A as n}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";import"./arrow_down-DA-sWbvp.js";const z={title:"Design System/List",component:s,tags:["autodocs"],argTypes:{options:{description:"選項清單"},isMenu:{description:"是否為選單",control:{type:"boolean"}},onSelect:{description:"選擇事件"},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"清單",description:{component:"清單的呈現及說明。"}}}},l=[{content:{label:"選項一",value:"option1",prefix:t.jsx(n,{})}},{content:{label:"選項二",value:"option2",prefix:t.jsx(n,{})}},{content:{label:"選項三",value:"option3",prefix:t.jsx(n,{})}}],e={name:"預設項目",args:{options:l},render(r){return t.jsx("div",{style:{width:"200px"},children:t.jsx(s,{...r})})}},o={name:"選單樣式",args:{isMenu:!0,options:l,onSelect:u("onSelect")},render(r){return t.jsx("div",{style:{width:"200px"},children:t.jsx(s,{...r})})}};var i,p,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    options: options
  },
  render(args) {
    return <div style={{
      width: '200px'
    }}>
        <List {...args} />
      </div>;
  }
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '選單樣式',
  args: {
    isMenu: true,
    options: options,
    onSelect: action('onSelect')
  },
  render(args) {
    return <div style={{
      width: '200px'
    }}>
        <List {...args} />
      </div>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const B=["Default","Menu"];export{e as Default,o as Menu,B as __namedExportsOrder,z as default};
