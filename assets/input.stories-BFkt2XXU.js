import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{S as h}from"./account_circle-BbbNuNZY.js";import"./index-l2PZgWEW.js";const i=e=>`input-${e}`,n=e=>e==="small"?"input-small":e==="large"?"input-large":"input-medium";try{i.displayName="getStyle",i.__docgenInfo={description:"",displayName:"getStyle",props:{}}}catch{}try{n.displayName="getSizeClass",n.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}function t(e){const{className:m,placeholder:g="請輸入...",size:f="medium",prefix:y,suffix:_,...x}=e;return r.jsxs("div",{className:`input ${n(f)} ${m} `,children:[y,r.jsx("input",{...x,placeholder:g}),_]})}try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const j={title:"Design System/Atoms/Input",component:t,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},a={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ..."},render(e){return r.jsx(t,{...e})}},s={name:"帳號",args:{className:"",prefix:r.jsx(h,{width:24,height:24}),placeholder:"請輸入帳號 ..."},render(e){return r.jsx(t,{...e})}};var o,l,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '帳號',
  args: {
    className: '',
    prefix: <Account width={24} height={24} />,
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const v=["Primary","InputWithIcon"];export{s as InputWithIcon,a as Primary,v as __namedExportsOrder,j as default};
