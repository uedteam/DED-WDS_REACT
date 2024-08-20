import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as S}from"./index-RYns6xqu.js";import"./title-D2ajyWBg.js";import{B as d}from"./styled-DzJQOY1U.js";import{I as x}from"./input-Bsv9jzlY.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-CILhnVxj.js";import"./breadcrumb-BT2wGwTD.js";import"./avatar-ZhERyiQI.js";import{S as _,C as q}from"./search-ze-2lSrK.js";import"./arrow_down-CDz-ClYA.js";import"./lodash-CcdATr5u.js";import"./index-sbqOYYIm.js";import"./lock-DKT4ZBgT.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";const t=e=>{const{value:f,onChange:n,onSearch:l,buttonLabel:g="搜尋",...s}=e,[i,o]=S.useState(""),y=c=>{n&&n(c),o(c)},b=()=>{l&&l(i)},v=()=>{n&&n(""),o("")};return a.jsxs("div",{className:"search",children:[a.jsx(x,{value:f,onChange:y,prefix:a.jsx(_,{}),suffix:i&&a.jsx(d,{variant:"text",onClick:v,children:a.jsx(q,{className:"search-icon"})}),...s}),a.jsx(d,{variant:"contained",onClick:b,...s,children:g})]})};try{t.displayName="Search",t.__docgenInfo={description:"",displayName:"Search",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Design System/Module/Search",component:t,tags:["autodocs"],argTypes:{size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]}},className:{description:"標題樣式",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},buttonLabel:{description:"按鈕標籤",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onSearch:{description:"搜尋事件",action:"onSearch"}},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},r={name:"搜尋輸入框",args:{className:"",placeholder:"請輸入搜尋關鍵字 ...",buttonLabel:"搜尋",isDisabled:!1,onSearch:e=>{u("onSearch")(e)},onChange:e=>{u("onChange")(e)}},render(e){return a.jsx("div",{style:{width:"300px"},children:a.jsx(t,{...e})})}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    className: '',
    placeholder: '請輸入搜尋關鍵字 ...',
    buttonLabel: '搜尋',
    isDisabled: false,
    onSearch: e => {
      action('onSearch')(e);
    },
    onChange: e => {
      action('onChange')(e);
    }
  },
  render(args) {
    return <div style={{
      width: '300px'
    }}>
        <Search {...args} />
      </div>;
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const G=["Primary"];export{r as Primary,G as __namedExportsOrder,F as default};
