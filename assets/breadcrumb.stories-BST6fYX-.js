import{j as s}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import{B as a}from"./breadcrumb-CrM4Rt7n.js";import"./index-RYns6xqu.js";import"./usePosition-CMmoxCjh.js";import"./index-sbqOYYIm.js";const f={title:"Design System/Breadcrumb",component:a,tags:["autodocs"],argTypes:{onClick:{description:"點擊事件",action:"clicked"},className:{description:"客製化樣式",control:{type:"text"}}},args:{onClick:()=>{c("onClick")()}},parameters:{docs:{title:"麵包屑",description:{component:"麵包屑組件的呈現及說明。"}}}},r={name:"標準麵包屑",args:{breadcrumbItems:[{label:"首頁",href:"/"},{label:"第一層",href:"/first"},{label:"第二層",href:"https://tw.yahoo.com"},{label:"第三層",href:"/first/second/third"},{label:"第n層",href:"/first/second/third/n"},{label:"當前頁"}],placement:"bottom"},render(o){return s.jsx(a,{...o})}};var e,t,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
    }],
    placement: 'bottom'
  },
  render(args) {
    return <Breadcrumb {...args} />;
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const h=["Primary"];export{r as Primary,h as __namedExportsOrder,f as default};
