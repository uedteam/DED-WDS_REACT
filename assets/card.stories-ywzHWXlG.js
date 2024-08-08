import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as N}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as j}from"./title-DUk0UITg.js";import{B as u}from"./button-DpmRqYRM.js";import{r as g}from"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./style-BG61KOMt.js";const l=r=>r==="line"?"line-border":"shadow-border";try{l.displayName="getBorderClass",l.__docgenInfo={description:"",displayName:"getBorderClass",props:{}}}catch{}const k=r=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...r},g.createElement("path",{d:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"})),d=r=>{const{onMoreClick:o,cardTitle:c,subTitle:m,imageSrc:p,isFullImage:i,borderStyle:_="line",className:I,...q}=r;return e.jsxs("div",{className:`card ${l(_)} ${i?"":"card-full-image"}`,children:[c&&e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"card-header-title",children:[e.jsx(j,{level:2,children:c}),e.jsx(u,{variant:"text",children:e.jsx(k,{className:"card-icon"})})]}),m&&e.jsx("div",{className:"subtitle",children:m})]}),p&&e.jsx("div",{className:`card-pic ${i?"":"card-pic-padding"}`,children:e.jsx("img",{className:`${i?"":"image-rounded"}`,src:p,alt:""})}),e.jsx("div",{className:"card-body",children:e.jsx("p",{className:"card-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})}),o&&e.jsx("div",{className:"card-footer",children:e.jsx(u,{...q,onClick:o,variant:"contained",themeColor:"primary",children:"Learn More"})})]})},n=d;try{d.displayName="Component",d.__docgenInfo={description:"",displayName:"Component",props:{onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"(() => void)"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"(() => void)"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Design System/Section/Card",component:n,tags:["autodocs"],argTypes:{cardTitle:{description:"標題",control:{type:"text"}},subTitle:{description:"副標題",control:{type:"text"}},imageSrc:{description:"圖片連結",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"radio",options:["line","shadow"]}},className:{description:"標題樣式",control:{type:"text"}},onMoreClick:{description:"更多按鈕事件",action:"clicked"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},a={name:"標準卡片",args:{borderStyle:"line",cardTitle:"Card Title",subTitle:"Card SubTitle",imageSrc:"https://picsum.photos/320/240",isFullImage:!1,className:"",onMoreClick:N("onClick")},render(r){return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{...r})})}},t={name:"滿版圖示卡片",args:{borderStyle:"shadow",imageSrc:"https://picsum.photos/320/240",isFullImage:!0,className:"",onMoreClick:N("onClick")},render(r){return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{...r})})}},s={name:"文字卡片",args:{cardTitle:"Card Title",borderStyle:"shadow",className:""},render(r){return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{...r})})}};var y,h,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,T,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var v,S,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const $=["Primary","PrimaryWithFullImage","TextCard"];export{a as Primary,t as PrimaryWithFullImage,s as TextCard,$ as __namedExportsOrder,P as default};
