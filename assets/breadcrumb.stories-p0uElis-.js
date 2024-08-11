import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import{B as a}from"./breadcrumb-BT2wGwTD.js";import"./index-RYns6xqu.js";const b={title:"Design System/Element/Breadcrumb",component:a,tags:["autodocs"],argTypes:{onClick:{description:"點擊事件",action:"clicked"},className:{description:"麵包屑客製化樣式",control:{type:"text"}}},args:{onClick:c("onClick")},parameters:{docs:{title:"麵包屑",description:{component:"麵包屑組件的呈現及說明。"}}}},r={name:"標準麵包屑",args:{breadcrumbItems:[{label:"首頁",href:"/"},{label:"第一層",href:"/first"},{label:"第二層",href:"https://tw.yahoo.com"},{label:"第三層",href:"/first/second/third"},{label:"第n層",href:"/first/second/third/n"},{label:"當前頁"}]},render(s){return o.jsx(a,{...s})}};var e,n,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const p=["Primary"];export{r as Primary,p as __namedExportsOrder,b as default};
