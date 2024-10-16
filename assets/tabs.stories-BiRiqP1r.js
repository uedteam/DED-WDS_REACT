import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as I}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as g}from"./index-RYns6xqu.js";import"./title-D2ajyWBg.js";import{B as N}from"./styled-G6O7V1Ob.js";import"./input-Dm2PXP3R.js";import"./textarea-BigHPPl8.js";import"./toggle-CJHXWvBg.js";import"./radio-Cxu-tw8b.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-CGlRGtsX.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-DLa2x_C0.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./auo-0es9FKg1.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const v=(e,t)=>t==="card"?`tab-${t}-${e}`:`tab-${e}`,y=(e,t)=>t==="card"?`tab-${t}-${e}-active`:`tab-${e}-active`;try{v.displayName="getThemeClass",v.__docgenInfo={description:"根據主題顏色和類型獲取對應的樣式類別。",displayName:"getThemeClass",props:{}}}catch{}try{y.displayName="getActiveClass",y.__docgenInfo={description:"根據主題顏色和類型返回活動類名。",displayName:"getActiveClass",props:{}}}catch{}const q=({themeColor:e="",type:t="default",title:d,index:p,isActive:i,isDisabled:u=!1,onClick:l,className:m})=>a.jsx(N,{className:`tab ${i?y(e,t):""} ${u?"tab-disable":m||v(e,t)}`,variant:"text","data-index":p,onClick:l,children:d}),s=e=>{const{tabs:t,themeColor:d,type:p,activeIndex:i,isDisabled:u,onClick:l,className:m}=e,[f,b]=g.useState(0),h=r=>{const n=parseInt(r.currentTarget.dataset.index||"0",10);b(n),r.currentTarget.blur(),l&&l(r)};return g.useEffect(()=>{b(i||0)},[i]),a.jsxs("div",{className:`tabs-container ${m}`,children:[a.jsx("div",{className:"tabs",children:t.map((r,n)=>a.jsx(q,{title:r.title,themeColor:d,type:p,isDisabled:u,index:n,isActive:n===f,onClick:h},n))}),a.jsx("div",{className:`tab-content ${u&&"tab-disable"}`,children:t[f].content})]})};try{s.displayName="Tabs",s.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"Tabs",props:{themeColor:{defaultValue:{value:""},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"default"'}]}},activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!1,type:{name:"number"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"tabs",props:{themeColor:{defaultValue:{value:""},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"default"'}]}},activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!1,type:{name:"number"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Design System/Tabs",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"頁籤顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},type:{description:"頁籤樣式",control:{type:"select",options:["card","default"]}},isDisabled:{description:"是否禁用"},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2}},tabs:{description:"頁籤列表"},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式"}},args:{themeColor:"primary",type:"default",isDisabled:!1,onClick:I("onClick")},parameters:{docs:{title:"頁籤",description:{component:"頁籤組件的呈現及說明。"}}}},o={name:"主要項目",args:{tabs:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}],activeIndex:0},render(e){return a.jsx(s,{...e})}},c={name:"卡片式頁籤",args:{type:"card",tabs:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}],activeIndex:1},render(e){return a.jsx(s,{...e})}};var _,C,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    tabs: [{
      title: '頁籤 1',
      content: '內容一'
    }, {
      title: '頁籤 2',
      content: '內容二'
    }, {
      title: '頁籤 3',
      content: '內容三'
    }],
    activeIndex: 0
  },
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var D,E,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '卡片式頁籤',
  args: {
    type: 'card',
    tabs: [{
      title: '頁籤 1',
      content: '內容一'
    }, {
      title: '頁籤 2',
      content: '內容二'
    }, {
      title: '頁籤 3',
      content: '內容三'
    }],
    activeIndex: 1
  },
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const X=["Primary","PrimaryWithCard"];export{o as Primary,c as PrimaryWithCard,X as __namedExportsOrder,U as default};
