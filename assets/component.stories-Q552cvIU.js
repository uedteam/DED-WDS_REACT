import{j as s}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-454WOBUV-ChHd1ABr.js";import"./index-RYns6xqu.js";const o=e=>{const{onClick:p,className:d,...i}=e,l=()=>{console.log("click")};return s.jsx("button",{...i,onClick:l,children:"搜尋"})},c=o;try{o.displayName="Component",o.__docgenInfo={description:"",displayName:"Component",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{component.displayName="component",component.__docgenInfo={description:"",displayName:"component",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Design System/Element/Component",component:c,tags:["autodocs"],argTypes:{className:{description:"標題樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},n={name:"搜尋輸入框",args:{className:"",onClick:m("onClick")},render(e){return s.jsx(c,{...e})}};var a,t,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    // 設定參數預設值
    // size: 'medium',
    // isDisabled: false,
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <Component {...args} />;
  }
}`,...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const g=["Primary"];export{n as Primary,g as __namedExportsOrder,y as default};
