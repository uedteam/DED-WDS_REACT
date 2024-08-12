import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as b}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as g}from"./index-RYns6xqu.js";import{B as o}from"./button-DB97ykB_.js";import{I as S}from"./input-D6oNhTLV.js";import{S as _}from"./search-l0LQI2PU.js";import{S as x}from"./close-o-4V2u0k.js";import"./style-BG61KOMt.js";import"./lodash-CcdATr5u.js";const n=a=>{const{onSearch:u,buttonLabel:p="搜尋",...s}=a,[t,l]=g.useState(""),m=y=>{l(y)},h=()=>{u(t)},f=()=>{l("")};return e.jsxs("div",{className:"search",children:[e.jsx(S,{value:t,onChange:m,prefix:e.jsx(_,{}),suffix:t&&e.jsx(o,{variant:"text",onClick:f,children:e.jsx(x,{className:"search-icon"})}),...s}),e.jsx(o,{variant:"contained",onClick:h,...s,children:p})]})};try{n.displayName="Search",n.__docgenInfo={description:"",displayName:"Search",props:{onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Design System/Module/Search",component:n,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]}},className:{description:"標題樣式",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},buttonLabel:{description:"按鈕標籤",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onSearch:{description:"搜尋事件",action:"onSearch"}},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},r={name:"搜尋輸入框",args:{className:"",placeholder:"請輸入搜尋關鍵字 ...",buttonLabel:"搜尋",isDisabled:!1,onSearch:b("onSearch")},render(a){return e.jsx(n,{...a})}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    className: '',
    placeholder: '請輸入搜尋關鍵字 ...',
    buttonLabel: '搜尋',
    isDisabled: false,
    onSearch: action('onSearch')
  },
  render(args) {
    return <Search {...args} />;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Primary"];export{r as Primary,k as __namedExportsOrder,z as default};
