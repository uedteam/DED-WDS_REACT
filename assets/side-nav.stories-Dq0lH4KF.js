import{j as e}from"./jsx-runtime-DEdD30eg.js";import{b as D,S as E,c as N,A as f}from"./auo-0es9FKg1.js";import{r as p,R as g}from"./index-RYns6xqu.js";import{a as A,b as x,S as B}from"./fan-PWz1bRrS.js";import{S as q}from"./home-49bMB0eq.js";import"./title-D2ajyWBg.js";import"./styled-Bq4E00aR.js";import{I as V}from"./input-Dm2PXP3R.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-Cxu-tw8b.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-DZcf6x5w.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import{a as O}from"./menu-DLa2x_C0.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const r={Blue:"#00467C",Yellow:"#F4E069",Grape:"#AB86D1",Black:"#000000",White:"#ffffff"},m=i=>{const{logo:S,themeColor:t,menuData:l,width:k,..._}=i,[o,a]=p.useState(r.White),[c,C]=p.useState(!1),I=g.cloneElement(S,{fill:o}),h=(d,u)=>{d.forEach(s=>{s.icon=g.cloneElement(s.icon,{fill:u}),s.children&&h(s.children,u)})};return p.useEffect(()=>{t?(t===r.Blue&&a("#ffffff"),t===r.Yellow&&a("#004E81"),t===r.Grape&&a("#004E81"),t===r.Black&&a("#cccccc")):a("#000000")},[o,l,t]),h(l,o),e.jsxs("div",{className:"side-nav",style:{backgroundColor:t},children:[e.jsxs("div",{className:"side-nav-header",children:[!c&&e.jsxs("div",{className:"side-nav-header-logo",children:[e.jsx("div",{children:I}),e.jsx("div",{style:{color:o},children:"DesignLogo"})]}),e.jsx(D,{onClick:()=>C(d=>!d),fill:o,width:24,height:24})]}),!c&&e.jsx("div",{children:e.jsx(V,{onChange:()=>({}),placeholder:"請輸項目...",prefix:e.jsx(E,{}),size:"medium",type:"text"})}),e.jsx(O,{..._,menuData:l,isCollapsed:c,color:o})]})},j=m;try{m.displayName="SideNav",m.__docgenInfo={description:"",displayName:"SideNav",props:{logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"ReactNode"}},menuData:{defaultValue:null,description:"",name:"menuData",required:!0,type:{name:"ItemProps[]"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{sidenav.displayName="sidenav",sidenav.__docgenInfo={description:"",displayName:"sidenav",props:{logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"ReactNode"}},menuData:{defaultValue:null,description:"",name:"menuData",required:!0,type:{name:"ItemProps[]"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ae={title:"Design System/Section/SideNav",component:j,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",mapping:{Blue:"#00467C",Yellow:"#F4E069",Grape:"#AB86D1",Black:"#000000"},options:["Blue","Yellow","Grape","Black"],control:{type:"select"}},logo:{description:"Logo",mapping:{AUOIcon:e.jsx(N,{width:90,height:30})},options:["AUOIcon"],control:{type:"select"}},menuData:{description:"選單資料"},width:{description:"寬度"},className:{description:"客製化樣式"}},parameters:{docs:{title:"搜尋",description:{component:"側邊導覽的呈現及說明。"}}}},P=[{title:"Dashboard",icon:e.jsx(q,{width:24,height:24}),path:"/dashboard"},{title:"Settings",icon:e.jsx(A,{width:24,height:24}),path:"/settings",children:[{title:"Profile",icon:e.jsx(x,{width:24,height:24}),path:"/settings/profile"},{title:"Account",icon:e.jsx(x,{width:24,height:24}),path:"/settings/account",children:[{title:"Profile",icon:e.jsx(f,{width:24,height:24}),path:"/settings/profile"},{title:"Account",icon:e.jsx(f,{width:24,height:24}),path:"/settings/account"}]}]},{title:"Help",icon:e.jsx(B,{width:24,height:24}),path:"/help"}],n={name:"搜尋輸入框",args:{themeColor:"Blue",logo:e.jsx(N,{width:90,height:30}),menuData:P,width:"240px",className:""},render(i){return e.jsx(j,{...i})}};var y,w,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    themeColor: 'Blue',
    logo: <AUOIcon width={90} height={30} />,
    menuData,
    width: '240px',
    className: ''
  },
  render(args) {
    return <SideNav {...args} />;
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const re=["Primary"];export{n as Primary,re as __namedExportsOrder,ae as default};