import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as i}from"./index-l2PZgWEW.js";import{B as N}from"./button-BQyVEUIv.js";const T=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#e8eaed",...e},i.createElement("path",{d:"M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"})),o=e=>`input-${e}`,n=e=>e==="small"?"input-small":e==="large"?"input-large":"input-medium";try{o.displayName="getStyle",o.__docgenInfo={description:"",displayName:"getStyle",props:{}}}catch{}try{n.displayName="getSizeClass",n.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}function r(e){const{className:f,type:g="text",placeholder:y="請輸入...",size:x="medium",prefix:_,suffix:q,...h}=e;return t.jsxs("div",{className:"input-group",children:[_,t.jsx("input",{...h,type:g,className:`input ${n(x)} ${f}`,placeholder:y}),q]})}try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const j={title:"Design System/Atoms/Input",component:r,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"radio",options:["small","medium","large"]}},className:{description:"標題樣式",control:{type:"text"}},type:{description:"輸入框類型",control:{type:"radio",options:["text","password","number"]}},prefix:{description:"前置元素",control:{type:"text"}},suffix:{description:"後置元素",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},a={name:"文字輸入框",args:{className:"",placeholder:"請輸入帳號 ..."},render(e){return t.jsx(r,{...e})}},s={name:"帳號",args:{className:"",placeholder:"請輸入帳號 ...",suffix:t.jsx(N,{variant:"text",suffix:t.jsx(T,{})})},render(e){return t.jsx(r,{...e})}};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...'
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '帳號',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...',
    suffix: <Button variant="text" suffix={<Visibility />} />
  },
  render(args) {
    return <Input {...args} />;
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const w=["Primary","InputWithIcon"];export{s as InputWithIcon,a as Primary,w as __namedExportsOrder,j as default};
