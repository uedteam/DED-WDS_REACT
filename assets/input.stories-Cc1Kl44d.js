import{j as c}from"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";const a=e=>`input-${e}`;try{a.displayName="getStyle",a.__docgenInfo={description:"",displayName:"getStyle",props:{}}}catch{}function t(e){const{themeColor:i="",className:p,...l}=e;return c.jsx("input",{...l,className:`input ${p||a(i)}`})}try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const d={title:"Design System/Atoms/Input",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},r={name:"標題",args:{themeColor:"primary",className:""},render(e){return c.jsx(t,{...e})}};var s,n,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '標題',
  args: {
    themeColor: 'primary',
    className: ''
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const y=["Primary"];export{r as Primary,y as __namedExportsOrder,d as default};
