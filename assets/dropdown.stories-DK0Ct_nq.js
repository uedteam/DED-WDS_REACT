import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-ChHd1ABr.js";import"./index-RYns6xqu.js";const o=e=>{const{onClick:p,className:m,...i}=e,l=()=>{console.log("click")};return t.jsx("button",{...i,onClick:l,children:"搜尋"})},c=o;try{o.displayName="Component",o.__docgenInfo={description:"",displayName:"Component",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C={title:"Design System/Module/Dropdown",component:c,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},n={name:"搜尋輸入框",args:{className:"",onClick:d("onClick")},render(e){return t.jsx(c,{...e})}};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <Component {...args} />;
  }
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const g=["Primary"];export{n as Primary,g as __namedExportsOrder,C as default};
