import{j as t}from"./jsx-runtime-DEdD30eg.js";import{A as e}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import{S as i}from"./home-49bMB0eq.js";import{M as a}from"./menu-HNbPKVat.js";import"./usePosition-CMmoxCjh.js";const x={title:"Design System/Module/Menu",component:a,tags:["autodocs"],argTypes:{className:{description:"客製化樣式"},menuData:{description:"選單資料"},isCollapsed:{description:"是否收合"},width:{description:"寬度"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},p=[{title:"Dashboard",icon:t.jsx(i,{width:24,height:24}),path:"/dashboard"},{title:"Settings",icon:t.jsx(i,{width:24,height:24}),children:[{title:"Profile",icon:t.jsx(e,{width:24,height:24}),path:"/settings/profile"},{title:"Account",icon:t.jsx(e,{width:24,height:24}),children:[{title:"Profile",icon:t.jsx(e,{width:24,height:24}),path:"/settings/profile"},{title:"Account",icon:t.jsx(e,{width:24,height:24}),path:"/settings/account"}]}]},{title:"Help",icon:t.jsx(i,{width:24,height:24}),path:"/help"}],s={name:"搜尋輸入框",args:{className:"",menuData:p,isCollapsed:!1,width:"300px"},render(c){return t.jsx(a,{...c})}};var o,r,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(r=s.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const f=["Primary"];export{s as Primary,f as __namedExportsOrder,x as default};
