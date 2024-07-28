import{j as r}from"./jsx-runtime-DEdD30eg.js";import{S as h}from"./account_circle-VVf7P708.js";import"./index-RYns6xqu.js";const l=e=>`input-${e}`,s=e=>e==="small"?"input-small":e==="large"?"input-large":"input-medium";try{l.displayName="getStyle",l.__docgenInfo={description:"",displayName:"getStyle",props:{}}}catch{}try{s.displayName="getSizeClass",s.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const a=e=>{const{className:m,placeholder:f="請輸入...",size:g="medium",prefix:y,suffix:_,...x}=e;return r.jsxs("div",{className:`input ${s(g)} ${m} `,children:[y,r.jsx("input",{...x,placeholder:f}),_]})};try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}try{input.displayName="input",input.__docgenInfo={description:"",displayName:"input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const q={title:"Design System/Atoms/Input",component:a,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},t={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ..."},render(e){return r.jsx(a,{...e})}},n={name:"帳號",args:{className:"",prefix:r.jsx(h,{width:24,height:24}),placeholder:"請輸入帳號 ..."},render(e){return r.jsx(a,{...e})}};var i,o,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '帳號',
  args: {
    className: '',
    prefix: <Account width={24} height={24} />,
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const v=["Primary","InputWithIcon"];export{n as InputWithIcon,t as Primary,v as __namedExportsOrder,q as default};
