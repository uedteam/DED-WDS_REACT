import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as d}from"./index-RYns6xqu.js";const y=({label:r,href:a,isCurrentPage:n,className:l})=>n?e.jsx("span",{className:"breadcrumb-item-label",children:r}):e.jsx("a",{className:"breadcrumb-item-link",href:a,children:r}),c=r=>{const{breadcrumbItems:a}=r,[n,l]=d.useState(!1),o=d.useRef(null),g=()=>{l(!n)},i=s=>{o.current&&!o.current.contains(s.target)&&l(!1)};d.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]);const m=a.length>3?[a[0],{label:"...",href:"#"},...a.slice(-2)]:a;return e.jsx("nav",{className:"breadcrumb-container",children:e.jsx("ol",{className:"breadcrumb",children:m.map((s,b)=>e.jsx("li",{className:"breadcrumb-item",children:s.label==="..."?e.jsxs("div",{className:"rest",children:[e.jsx("span",{onClick:g,className:"rest-label",children:s.label}),n&&e.jsx("ul",{ref:o,className:"rest-dropdown-menu",children:a.slice(1,-2).map((u,_)=>e.jsx("li",{className:"drop-item",children:e.jsx("a",{className:"drop-item-link",href:u.href,children:u.label})},_))})]}):e.jsx(y,{label:s.label,href:s.href==="#"?void 0:s.href,isCurrentPage:b===m.length-1})},b))})})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{breadcrumbItems:{defaultValue:null,description:"",name:"breadcrumbItems",required:!0,type:{name:"{ label: string; href?: string | undefined; }[]"}}}}}catch{}try{breadcrumb.displayName="breadcrumb",breadcrumb.__docgenInfo={description:"",displayName:"breadcrumb",props:{breadcrumbItems:{defaultValue:null,description:"",name:"breadcrumbItems",required:!0,type:{name:"{ label: string; href?: string | undefined; }[]"}}}}}catch{}const I={title:"Design System/Atoms/Breadcrumb",component:c,tags:["autodocs"],argTypes:{onClick:{description:"點擊事件",action:"clicked"},className:{description:"手風琴客製化樣式",control:{type:"text"}}},args:{onClick:x("onClick")},parameters:{docs:{title:"麵包屑",description:{component:"麵包屑組件的呈現及說明。"}}}},t={name:"標準麵包屑",args:{breadcrumbItems:[{label:"首頁",href:"/"},{label:"第一層",href:"/first"},{label:"第二層",href:"https://tw.yahoo.com"},{label:"第三層",href:"/first/second/third"},{label:"第n層",href:"/first/second/third/n"},{label:"當前頁"}]},render(r){return e.jsx(c,{...r})}};var p,h,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const k=["Primary"];export{t as Primary,k as __namedExportsOrder,I as default};
