import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as S}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as x}from"./title-DUk0UITg.js";import{B as u}from"./button-DpmRqYRM.js";import"./index-RYns6xqu.js";import"./style-BG61KOMt.js";const s=e=>e==="line"?"line-border":"shadow-border",p=e=>e==="small"?"input-group-small":e==="large"?"input-group-large":"input-group-medium";try{s.displayName="getBorderClass",s.__docgenInfo={description:"",displayName:"getBorderClass",props:{}}}catch{}try{p.displayName="getSizeClass",p.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const i=e=>{const{onMoreClick:n,cardTitle:o,subTitle:d,imageSrc:c,isFullImage:m,borderStyle:b="line",className:T,...N}=e;return r.jsxs("div",{className:`card ${s(b)}`,children:[o&&r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"card-title",children:[r.jsx(x,{level:2,children:o}),r.jsx(u,{variant:"text",size:"large",children:"..."})]}),d&&r.jsx("div",{className:"subtitle",children:d})]}),r.jsxs("div",{className:"card-body",children:[c&&r.jsx("div",{className:`card-pic ${m?"":"card-pic-padding"}`,children:r.jsx("img",{className:`${m?"":"image-rounded"}`,src:c,alt:""})}),r.jsx("p",{className:"card-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]}),n&&r.jsx("div",{className:"card-footer",children:r.jsx(u,{...N,onClick:n,variant:"contained",themeColor:"primary",children:"Learn More"})})]})},l=i;try{i.displayName="Component",i.__docgenInfo={description:"",displayName:"Component",props:{onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"(() => void)"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"(() => void)"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Design System/Section/Card",component:l,tags:["autodocs"],argTypes:{cardTitle:{description:"標題",control:{type:"text"}},subTitle:{description:"副標題",control:{type:"text"}},imageSrc:{description:"圖片連結",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"radio",options:["line","shadow"]}},className:{description:"標題樣式",control:{type:"text"}},onMoreClick:{description:"更多按鈕事件",action:"clicked"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},a={name:"標準卡片",args:{borderStyle:"line",cardTitle:"Card Title",subTitle:"Card SubTitle",imageSrc:"https://picsum.photos/320/240",isFullImage:!1,className:"",onMoreClick:S("onClick")},render(e){return r.jsx(l,{...e})}},t={name:"滿版圖式卡片",args:{borderStyle:"shadow",imageSrc:"https://picsum.photos/320/240",isFullImage:!0,className:"",onMoreClick:S("onClick")},render(e){return r.jsx(l,{...e})}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    return <Card {...args} />;
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,_,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '滿版圖式卡片',
  args: {
    // 設定參數預設值
    borderStyle: 'shadow',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    className: '',
    onMoreClick: action('onClick')
  },
  render(args) {
    return <Card {...args} />;
  }
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const M=["Primary","PrimaryWithFullImage"];export{a as Primary,t as PrimaryWithFullImage,M as __namedExportsOrder,F as default};
