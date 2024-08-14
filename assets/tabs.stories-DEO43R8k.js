import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as f}from"./index-RYns6xqu.js";import"./title-D2ajyWBg.js";import{B as I}from"./button-Cf2gEP8g.js";import"./input-S-auccUp.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-BBGzZRP6.js";import"./tooltip-VGBaOEtQ.js";import"./breadcrumb-BT2wGwTD.js";import"./avatar-MMQN_22F.js";import"./menu-DNu1tztI.js";import"./lodash-CcdATr5u.js";import"./search-ze-2lSrK.js";import"./check-BnJBHFpS.js";import"./lock-DKT4ZBgT.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const y=(e,t)=>t==="card"?`tab-${t}-${e}`:`tab-${e}`,v=(e,t)=>t==="card"?`tab-${t}-${e}-active`:`tab-${e}-active`;try{y.displayName="getThemeClass",y.__docgenInfo={description:"根據主題顏色和類型獲取對應的樣式類別。",displayName:"getThemeClass",props:{}}}catch{}try{v.displayName="getActiveClass",v.__docgenInfo={description:"根據主題顏色和類型返回活動類名。",displayName:"getActiveClass",props:{}}}catch{}const B=({themeColor:e="",type:t="default",title:p,index:m,isActive:i,isDisabled:o=!1,onClick:u,className:l})=>a.jsx(I,{className:`tab ${i?v(e,t):""} ${o?"tab-disable":l||y(e,t)}`,variant:"text","data-index":m,onClick:u,children:p}),s=e=>{const{tabs:t,themeColor:p,type:m,activeIndex:i,isDisabled:o,onClick:u}=e,[l,b]=f.useState(0),T=r=>{const n=parseInt(r.currentTarget.dataset.index||"0",10);b(n),r.currentTarget.blur(),u&&u(r)};return f.useEffect(()=>{b(i||0)},[i]),a.jsxs("div",{className:"tabs-container",children:[a.jsx("div",{className:"tabs",children:t.map((r,n)=>a.jsx(B,{title:r.title,themeColor:p,type:m,isDisabled:o,index:n,isActive:n===l,onClick:T},n))}),a.jsx("div",{className:`tab-content ${o&&"tab-disable"}`,children:t[l].content})]})};try{s.displayName="Tabs",s.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"Tabs",props:{themeColor:{defaultValue:{value:""},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"default"'}]}},activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!1,type:{name:"number"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"tabs",props:{themeColor:{defaultValue:{value:""},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"default"'}]}},activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!1,type:{name:"number"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}}}}}catch{}const J={title:"Design System/Module/Tabs",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"頁籤顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},type:{description:"頁籤樣式",control:{type:"radio",options:["card","default"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式",control:{type:"text"}}},args:{themeColor:"primary",type:"default",isDisabled:!1,onClick:h("onClick")},parameters:{docs:{title:"頁籤",description:{component:"頁籤組件的呈現及說明。"}}}},c={name:"標準頁籤",args:{tabs:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}]},render(e){return a.jsx(s,{...e})}},d={name:"卡片式頁籤",args:{type:"card",tabs:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}]},render(e){return a.jsx(s,{...e})}};var _,g,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '標準頁籤',
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
    }]
  },
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var x,D,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    }]
  },
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const K=["Primary","PrimaryWithCard"];export{c as Primary,d as PrimaryWithCard,K as __namedExportsOrder,J as default};
