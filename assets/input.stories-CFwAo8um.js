import{j as r}from"./jsx-dev-runtime-uiaR1PCM.js";import{S as x}from"./account_circle-YEmkOz1r.js";import"./index-CZo2m81c.js";const i=e=>`input-${e}`,n=e=>e==="small"?"input-small":e==="large"?"input-large":"input-medium";try{i.displayName="getStyle",i.__docgenInfo={description:"",displayName:"getStyle",props:{}}}catch{}try{n.displayName="getSizeClass",n.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}function t(e){const{className:d,placeholder:f="請輸入...",size:g="medium",prefix:N,suffix:_,...y}=e;return r.jsxDEV("div",{className:`input ${n(g)} ${d} `,children:[N,r.jsxDEV("input",{...y,placeholder:f},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.tsx",lineNumber:25,columnNumber:7},this),_]},void 0,!0,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.tsx",lineNumber:23,columnNumber:5},this)}try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const b={title:"Design System/Atoms/Input",component:t,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},children:{description:"標題內容",control:{type:"text"}},className:{description:"標題樣式",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},s={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ..."},render(e){return r.jsxDEV(t,{...e},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.stories.tsx",lineNumber:73,columnNumber:12},this)}},a={name:"帳號",args:{className:"",prefix:r.jsxDEV(x,{width:24,height:24},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.stories.tsx",lineNumber:81,columnNumber:13},void 0),placeholder:"請輸入帳號 ..."},render(e){return r.jsxDEV(t,{...e},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.stories.tsx",lineNumber:85,columnNumber:12},this)}};var o,u,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '帳號',
  args: {
    className: '',
    prefix: <Account width={24} height={24} />,
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const E=["Primary","InputWithIcon"];export{a as InputWithIcon,s as Primary,E as __namedExportsOrder,b as default};
