import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as C}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as g}from"./index-RYns6xqu.js";import{S as x}from"./add-EXsptaC9.js";import{S as _}from"./arrow_down-DA-sWbvp.js";const h=({themeColor:a="",type:d="default",title:c,content:s,isActive:u,isDisabled:l=!1,onClick:m,className:p})=>{const[o,t]=g.useState(!1),n=()=>{t(!o)};return e.jsxs("div",{className:"accordion-item",children:[e.jsxs("div",{className:"accordion-item-header",onClick:n,children:[e.jsx(x,{className:"accordion-item-icon"}),e.jsx("div",{children:c}),e.jsx(_,{className:"accordion-item-icon"})]}),o&&e.jsx("div",{className:"accordion-item-content",children:s})]})},i=a=>{const{accordionItems:d,themeColor:c,type:s,isDisabled:u,onClick:l}=a,[m,p]=g.useState(0),o=t=>{const n=parseInt(t.currentTarget.dataset.index||"0",10);p(n),t.currentTarget.blur(),l&&l(t)};return e.jsx("div",{className:"accordion-container",children:e.jsx("div",{className:"accordion",children:d.map((t,n)=>e.jsx(h,{title:t.title,content:t.content,themeColor:c,type:s,isDisabled:u,isActive:n===m,onClick:o},n))})})};try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{themeColor:{defaultValue:{value:""},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"default"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},accordionItems:{defaultValue:null,description:"",name:"accordionItems",required:!0,type:{name:"{ title: string; content: string; }[]"}}}}}catch{}try{accordion.displayName="accordion",accordion.__docgenInfo={description:"",displayName:"accordion",props:{themeColor:{defaultValue:{value:""},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"default"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},accordionItems:{defaultValue:null,description:"",name:"accordionItems",required:!0,type:{name:"{ title: string; content: string; }[]"}}}}}catch{}const j={title:"Design System/Element/Accordion",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"頁籤顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},type:{description:"頁籤樣式",control:{type:"radio",options:["card","default"]}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onClick:{description:"點擊事件",action:"clicked"},className:{description:"手風琴客製化樣式",control:{type:"text"}}},args:{themeColor:"primary",type:"default",isDisabled:!1,onClick:C("onClick")},parameters:{docs:{title:"手風琴",description:{component:"手風琴組件的呈現及說明。"}}}},r={name:"標準手風琴",args:{accordionItems:[{title:"項目 1",content:"內容一"},{title:"項目 2",content:"內容二"},{title:"項目 3",content:"內容三"}]},render(a){return e.jsx(i,{...a})}};var v,y,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '標準手風琴',
  args: {
    accordionItems: [{
      title: '項目 1',
      content: '內容一'
    }, {
      title: '項目 2',
      content: '內容二'
    }, {
      title: '項目 3',
      content: '內容三'
    }]
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Primary"];export{r as Primary,q as __namedExportsOrder,j as default};
