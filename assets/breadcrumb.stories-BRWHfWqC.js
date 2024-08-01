import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as _}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as d}from"./index-RYns6xqu.js";const x=({label:r,href:a,isCurrentPage:l})=>l?e.jsx("span",{className:"breadcrumb-item-label",children:r}):e.jsx("a",{className:"breadcrumb-item-link",href:a,children:r}),t=r=>{const{breadcrumbItems:a,className:l}=r,[o,i]=d.useState(!1),c=d.useRef(null),N=()=>{i(!o)},m=s=>{c.current&&!c.current.contains(s.target)&&i(!1)};d.useEffect(()=>(document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[]);const u=a.length>3?[a[0],{label:"...",href:"#"},...a.slice(-2)]:a;return e.jsx("nav",{className:`breadcrumb-container ${l}`,children:e.jsx("ol",{className:"breadcrumb",children:u.map((s,b)=>e.jsx("li",{className:"breadcrumb-item",children:s.label==="..."?e.jsxs("div",{className:"rest",children:[e.jsx("span",{onClick:N,className:"rest-label",children:s.label}),o&&e.jsx("ul",{ref:c,className:"rest-dropdown-menu",children:a.slice(1,-2).map((p,y)=>e.jsx("li",{className:"drop-item",children:e.jsx("a",{className:"drop-item-link",href:p.href,children:p.label})},y))})]}):e.jsx(x,{label:s.label,href:s.href==="#"?void 0:s.href,isCurrentPage:b===u.length-1})},b))})})};try{t.displayName="Breadcrumb",t.__docgenInfo={description:"",displayName:"Breadcrumb",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},breadcrumbItems:{defaultValue:null,description:"",name:"breadcrumbItems",required:!0,type:{name:"{ label: string; href?: string | undefined; }[]"}}}}}catch{}try{breadcrumb.displayName="breadcrumb",breadcrumb.__docgenInfo={description:"",displayName:"breadcrumb",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},breadcrumbItems:{defaultValue:null,description:"",name:"breadcrumbItems",required:!0,type:{name:"{ label: string; href?: string | undefined; }[]"}}}}}catch{}const k={title:"Design System/Element/Breadcrumb",component:t,tags:["autodocs"],argTypes:{onClick:{description:"點擊事件",action:"clicked"},className:{description:"麵包屑客製化樣式",control:{type:"text"}}},args:{onClick:_("onClick")},parameters:{docs:{title:"麵包屑",description:{component:"麵包屑組件的呈現及說明。"}}}},n={name:"標準麵包屑",args:{breadcrumbItems:[{label:"首頁",href:"/"},{label:"第一層",href:"/first"},{label:"第二層",href:"https://tw.yahoo.com"},{label:"第三層",href:"/first/second/third"},{label:"第n層",href:"/first/second/third/n"},{label:"當前頁"}]},render(r){return e.jsx(t,{...r})}};var f,h,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '標準麵包屑',
  args: {
    breadcrumbItems: [{
      label: '首頁',
      href: '/'
    }, {
      label: '第一層',
      href: '/first'
    }, {
      label: '第二層',
      href: 'https://tw.yahoo.com'
    }, {
      label: '第三層',
      href: '/first/second/third'
    }, {
      label: '第n層',
      href: '/first/second/third/n'
    }, {
      label: '當前頁'
    }]
  },
  render(args) {
    return <Breadcrumb {...args} />;
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const E=["Primary"];export{n as Primary,E as __namedExportsOrder,k as default};
