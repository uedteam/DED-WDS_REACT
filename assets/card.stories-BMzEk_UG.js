import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as T}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as j}from"./title-DrQUsPis.js";import{B as p}from"./button-DpmRqYRM.js";import{S as k}from"./more_vert-CkVmk7-g.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./style-BG61KOMt.js";const l=r=>r==="line"?"line-border":"shadow-border";try{l.displayName="getBorderClass",l.__docgenInfo={description:"",displayName:"getBorderClass",props:{}}}catch{}const d=r=>{const{onMoreClick:o,cardTitle:c,subTitle:m,imageSrc:u,isFullImage:i,borderStyle:N="line",className:I,..._}=r;return e.jsxs("div",{className:`card ${l(N)} ${i?"":"card-full-image"}`,children:[c&&e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"card-header-title",children:[e.jsx(j,{level:2,children:c}),e.jsx(p,{variant:"text",children:e.jsx(k,{className:"card-icon"})})]}),m&&e.jsx("div",{className:"subtitle",children:m})]}),u&&e.jsx("div",{className:`card-pic ${i?"":"card-pic-padding"}`,children:e.jsx("img",{className:`${i?"":"image-rounded"}`,src:u,alt:""})}),e.jsx("div",{className:"card-body",children:e.jsx("p",{className:"card-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})}),o&&e.jsx("div",{className:"card-footer",children:e.jsx(p,{..._,onClick:o,variant:"contained",themeColor:"primary",children:"Learn More"})})]})},n=d;try{d.displayName="Component",d.__docgenInfo={description:"",displayName:"Component",props:{onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"(() => void)"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"(() => void)"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const $={title:"Design System/Section/Card",component:n,tags:["autodocs"],argTypes:{cardTitle:{description:"標題",control:{type:"text"}},subTitle:{description:"副標題",control:{type:"text"}},imageSrc:{description:"圖片連結",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"radio",options:["line","shadow"]}},className:{description:"標題樣式",control:{type:"text"}},onMoreClick:{description:"更多按鈕事件",action:"clicked"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},a={name:"標準卡片",args:{borderStyle:"line",cardTitle:"Card Title",subTitle:"Card SubTitle",imageSrc:"https://picsum.photos/320/240",isFullImage:!1,className:"",onMoreClick:T("onClick")},render(r){return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{...r})})}},s={name:"滿版圖示卡片",args:{borderStyle:"shadow",imageSrc:"https://picsum.photos/320/240",isFullImage:!0,className:"",onMoreClick:T("onClick")},render(r){return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{...r})})}},t={name:"文字卡片",args:{cardTitle:"Card Title",borderStyle:"shadow",className:""},render(r){return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{...r})})}};var g,y,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '標準卡片',
  args: {
    // 設定參數預設值
    // size: 'medium',
    borderStyle: 'line',
    cardTitle: 'Card Title',
    subTitle: 'Card SubTitle',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: false,
    className: '',
    onMoreClick: action('onClick')
  },
  render(args) {
    return <div style={{
      maxWidth: '350px'
    }}>
        <Card {...args} />
      </div>;
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,f,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '滿版圖示卡片',
  args: {
    // 設定參數預設值
    borderStyle: 'shadow',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    className: '',
    onMoreClick: action('onClick')
  },
  render(args) {
    return <div style={{
      maxWidth: '350px'
    }}>
        <Card {...args} />
      </div>;
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,b,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '文字卡片',
  args: {
    // 設定參數預設值
    cardTitle: 'Card Title',
    borderStyle: 'shadow',
    className: ''
  },
  render(args) {
    return <div style={{
      maxWidth: '350px'
    }}>
        <Card {...args} />
      </div>;
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const L=["Primary","PrimaryWithFullImage","TextCard"];export{a as Primary,s as PrimaryWithFullImage,t as TextCard,L as __namedExportsOrder,$ as default};
