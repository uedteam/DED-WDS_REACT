import{j as t}from"./jsx-runtime-DEdD30eg.js";import{A as o}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import{S as s}from"./home-49bMB0eq.js";import{M as a}from"./menu-DgvEGrP7.js";import"./arrow_down-DA-sWbvp.js";import"./usePosition-CMmoxCjh.js";const f={title:"Design System/Menu",component:a,tags:["autodocs"],argTypes:{className:{description:"客製化樣式"},menuData:{description:"選單資料"},isCollapsed:{description:"是否收合"},width:{description:"寬度"},color:{description:"顏色",control:{type:"color"}}},parameters:{docs:{title:"選單",description:{component:"選單的呈現及說明。"}}}},p=[{title:"Dashboard",icon:t.jsx(s,{width:24,height:24}),path:"/dashboard"},{title:"Settings",icon:t.jsx(s,{width:24,height:24}),path:"/settings",children:[{title:"Profile",icon:t.jsx(o,{width:24,height:24}),path:"/settings/profile"},{title:"Account",icon:t.jsx(o,{width:24,height:24}),path:"/settings/account"}]},{title:"Help",icon:t.jsx(s,{width:24,height:24}),path:"/help"}],e={name:"主要項目",args:{className:"",menuData:p,isCollapsed:!1,width:"300px"},render(c){return t.jsx(a,{...c})}};var r,i,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    className: '',
    menuData,
    isCollapsed: false,
    width: '300px'
  },
  render(args) {
    return <Menu {...args} />;
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const j=["Primary"];export{e as Primary,j as __namedExportsOrder,f as default};
