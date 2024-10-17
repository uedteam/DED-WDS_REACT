import{j as a}from"./jsx-runtime-DEdD30eg.js";import{B as s}from"./breadcrumb-CrM4Rt7n.js";import"./index-RYns6xqu.js";import"./usePosition-CMmoxCjh.js";import"./index-sbqOYYIm.js";const p={title:"Design System/Breadcrumb",component:s,tags:["autodocs"],argTypes:{breadcrumbItems:{description:"麵包屑項目"},placement:{description:"麵包屑位置",control:{type:"select",options:["top","bottom"]}},className:{description:"客製化樣式",control:{type:"text"}}},args:{},parameters:{docs:{title:"麵包屑",description:{component:"麵包屑組件的呈現及說明。"}}}},e={name:"主要項目",args:{breadcrumbItems:[{label:"首頁",href:"/"},{label:"第一層",href:"/first"},{label:"第二層",href:"https://tw.yahoo.com"},{label:"第三層",href:"/first/second/third"},{label:"第n層",href:"/first/second/third/n"},{label:"當前頁"}],placement:"bottom"},render(o){return a.jsx(s,{...o})}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '主要項目',
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
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,p as default};
