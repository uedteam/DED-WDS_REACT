import{j as t}from"./jsx-runtime-DEdD30eg.js";import{A as i}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import{S as s}from"./home-49bMB0eq.js";import{M as o}from"./menu-DLa2x_C0.js";import"./usePosition-CMmoxCjh.js";const x={title:"Design System/Menu",component:o,tags:["autodocs"],argTypes:{className:{description:"客製化樣式"},menuData:{description:"選單資料"},isCollapsed:{description:"是否收合"},width:{description:"寬度"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},p=[{title:"Dashboard",icon:t.jsx(s,{width:24,height:24}),path:"/dashboard"},{title:"Settings",icon:t.jsx(s,{width:24,height:24}),path:"/settings",children:[{title:"Profile",icon:t.jsx(i,{width:24,height:24}),path:"/settings/profile"},{title:"Account",icon:t.jsx(i,{width:24,height:24}),path:"/settings/account"}]},{title:"Help",icon:t.jsx(s,{width:24,height:24}),path:"/help"}],e={name:"搜尋輸入框",args:{className:"",menuData:p,isCollapsed:!1,width:"300px"},render(c){return t.jsx(o,{...c})}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    className: '',
    menuData,
    isCollapsed: false,
    width: '300px'
  },
  render(args) {
    return <Menu {...args} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const f=["Primary"];export{e as Primary,f as __namedExportsOrder,x as default};
