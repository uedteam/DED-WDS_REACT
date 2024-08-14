import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as w}from"./title-D2ajyWBg.js";import{B as g}from"./button-Cf2gEP8g.js";import"./input-S-auccUp.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-BBGzZRP6.js";import"./tooltip-BFWVOBy5.js";import"./breadcrumb-BT2wGwTD.js";import"./avatar-MMQN_22F.js";import"./menu-DNu1tztI.js";import"./search-ze-2lSrK.js";import"./index-RYns6xqu.js";import{S as E}from"./more_vert-CkVmk7-g.js";import"./lodash-CcdATr5u.js";import"./check-BnJBHFpS.js";import"./lock-DKT4ZBgT.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const o=e=>e==="line"?"line-border":"shadow-border",d=e=>e==="1:1"?"card-pic-11":e==="4:3"?"card-pic-43":e==="5:4"?"card-pic-54":e==="16:9"?"card-pic-169":"card-pic-1-1";try{o.displayName="getBorderClass",o.__docgenInfo={description:"",displayName:"getBorderClass",props:{}}}catch{}try{d.displayName="getRadioClass",d.__docgenInfo={description:"",displayName:"getRadioClass",props:{}}}catch{}const c=e=>{const{hasMoreBtn:F,onMoreClick:j,hasFuncBtn:k,onFuncClick:V,cardTitle:p,subTitle:m,imageSrc:y,isFullImage:l,aspectRatio:q,borderStyle:R="line",className:H,...I}=e;return a.jsxs("div",{className:`card ${o(R)} ${l?"":"card-full-image"}`,children:[y&&a.jsx("div",{className:`card-pic ${l?"":"card-pic-padding"} ${d(q)}`,children:a.jsx("img",{className:`${l?"":"image-rounded"}`,src:y,alt:""})}),a.jsxs("div",{className:"card-container",children:[p&&a.jsxs("div",{className:"card-header",children:[a.jsxs("div",{className:"card-header-title",children:[a.jsx(w,{level:2,children:p}),k&&a.jsx(g,{variant:"text",onClick:V,children:a.jsx(E,{className:"card-icon"})})]}),m&&a.jsx("div",{className:"subtitle",children:m})]}),a.jsx("div",{className:"card-body",children:a.jsx("p",{className:"card-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})}),F&&a.jsx("div",{className:"card-footer",children:a.jsx(g,{...I,onClick:j,variant:"contained",themeColor:"primary",children:"Learn More"})})]})]})},r=c;try{c.displayName="Card",c.__docgenInfo={description:"卡片組件",displayName:"Card",props:{hasMoreBtn:{defaultValue:null,description:"",name:"hasMoreBtn",required:!1,type:{name:"boolean"}},onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},hasFuncBtn:{defaultValue:null,description:"",name:"hasFuncBtn",required:!1,type:{name:"boolean"}},onFuncClick:{defaultValue:null,description:"",name:"onFuncClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!0,type:{name:"enum",value:[{value:'"1:1"'},{value:'"4:3"'},{value:'"5:4"'},{value:'"16:9"'}]}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{card.displayName="card",card.__docgenInfo={description:"卡片組件",displayName:"card",props:{hasMoreBtn:{defaultValue:null,description:"",name:"hasMoreBtn",required:!1,type:{name:"boolean"}},onMoreClick:{defaultValue:null,description:"",name:"onMoreClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},hasFuncBtn:{defaultValue:null,description:"",name:"hasFuncBtn",required:!1,type:{name:"boolean"}},onFuncClick:{defaultValue:null,description:"",name:"onFuncClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},cardTitle:{defaultValue:null,description:"",name:"cardTitle",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isFullImage:{defaultValue:null,description:"",name:"isFullImage",required:!1,type:{name:"boolean"}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!0,type:{name:"enum",value:[{value:'"1:1"'},{value:'"4:3"'},{value:'"5:4"'},{value:'"16:9"'}]}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"shadow"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Design System/Section/Card",component:r,tags:["autodocs"],argTypes:{cardTitle:{description:"標題",control:{type:"text"}},subTitle:{description:"副標題",control:{type:"text"}},imageSrc:{description:"圖片連結",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"radio",options:["line","shadow"]}},isFullImage:{description:"是否滿版圖片",control:{type:"boolean"}},aspectRatio:{description:"圖片比例",control:{type:"select",options:["11","43","54","169"]}},className:{description:"客製化樣式",control:{type:"text"}},hasMoreBtn:{description:"是否有更多內容按鈕",control:{type:"boolean"}},onMoreClick:{description:"更多按鈕事件",action:"clicked"},hasFuncBtn:{description:"是否有功能按鈕",control:{type:"boolean"}},onFuncClick:{description:"功能按鈕事件",action:"clicked"}},parameters:{docs:{title:"卡片組件",description:{component:"卡片的呈現及說明。"}}}},t={name:"標準卡片",args:{borderStyle:"line",cardTitle:"Card Title",subTitle:"Card SubTitle",imageSrc:"https://picsum.photos/320/240",isFullImage:!1,aspectRatio:"1:1",className:"",hasMoreBtn:!0,onMoreClick:e=>{u("onClick")(e)}},render(e){return a.jsx("div",{style:{width:"auto"},children:a.jsx(r,{...e})})}},n={name:"滿版圖示橫排卡片",args:{borderStyle:"shadow",cardTitle:"Card Title",imageSrc:"https://picsum.photos/320/240",isFullImage:!0,aspectRatio:"4:3",className:"",hasFuncBtn:!0,hasMoreBtn:!0,onMoreClick:u("onClick")},render(e){return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(r,{...e}),a.jsx(r,{...e}),a.jsx(r,{...e})]})}},s={name:"滿版圖示直排卡片",args:{borderStyle:"shadow",cardTitle:"Card Title",imageSrc:"https://picsum.photos/320/240",isFullImage:!0,aspectRatio:"4:3",className:"",hasFuncBtn:!0,hasMoreBtn:!0,onMoreClick:u("onClick")},render(e){return a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[a.jsx(r,{...e}),a.jsx(r,{...e})]})}},i={name:"文字卡片",args:{cardTitle:"Card Title",borderStyle:"shadow",aspectRatio:"1:1",className:""},render(e){return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(r,{...e}),a.jsx(r,{...e}),a.jsx(r,{...e})]})}};var h,f,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '標準卡片',
  args: {
    borderStyle: 'line',
    cardTitle: 'Card Title',
    subTitle: 'Card SubTitle',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: false,
    aspectRatio: '1:1',
    className: '',
    hasMoreBtn: true,
    onMoreClick: e => {
      action('onClick')(e);
    }
  },
  render(args) {
    return <div style={{
      width: 'auto'
    }}>
        <Card {...args} />
      </div>;
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,v,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '滿版圖示橫排卡片',
  args: {
    borderStyle: 'shadow',
    cardTitle: 'Card Title',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    aspectRatio: '4:3',
    className: '',
    hasFuncBtn: true,
    hasMoreBtn: true,
    onMoreClick: action('onClick')
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
      </div>;
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var b,S,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '滿版圖示直排卡片',
  args: {
    borderStyle: 'shadow',
    cardTitle: 'Card Title',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    aspectRatio: '4:3',
    className: '',
    hasFuncBtn: true,
    hasMoreBtn: true,
    onMoreClick: action('onClick')
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Card {...args} />
        <Card {...args} />
      </div>;
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var M,N,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '文字卡片',
  args: {
    // 設定參數預設值
    cardTitle: 'Card Title',
    borderStyle: 'shadow',
    aspectRatio: '1:1',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
      </div>;
  }
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const se=["Primary","PrimaryWithRow","PrimaryWithColumn","TextCard"];export{t as Primary,s as PrimaryWithColumn,n as PrimaryWithRow,i as TextCard,se as __namedExportsOrder,ne as default};
