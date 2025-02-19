import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as P}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as T}from"./index-RYns6xqu.js";import"./tooltip-hPA9s87_.js";import"./badge-BPltvF_h.js";import"./breadcrumb-DirWTnUB.js";import{B as x}from"./toast-wB9SHawu.js";import"./checkbox-Cq4ng9DF.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-CtGKW3RO.js";import"./input-cGQzhBRy.js";import"./layout-DgebEeDV.js";import"./menu-DXHyMavF.js";import"./radio-DmdC9FLH.js";import"./status-indicator-BvQGxf36.js";import"./tag-gKTSkn4a.js";import"./textarea-r7CXvhUd.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{a as h}from"./warning-tri-D1aSkfBJ.js";import"./v4-CQkTLCs1.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const y=(e,t)=>t==="basic"?`ded-tab-${e}`:`ded-tab-${t}-${e}`,g=(e,t)=>t==="basic"?`ded-tab-${e}-active`:`ded-tab-${t}-${e}-active`;try{y.displayName="getThemeClass",y.__docgenInfo={description:"根據主題顏色和類型獲取對應的樣式類別。",displayName:"getThemeClass",props:{}}}catch{}try{g.displayName="getActiveClass",g.__docgenInfo={description:"根據主題顏色和類型返回活動類名。",displayName:"getActiveClass",props:{}}}catch{}const v=({themeColor:e="primary",type:t="basic",title:n="",prefix:s="",isActive:l,isDisabled:o=!1,className:c="",onClick:u})=>t==="button"?a.jsxs(x,{className:`
      ${l?g(e,t):"ded-tab-button"}
      ${o?"ded-tab-button-disable":c||y(e,t)}`,variant:"filled",onClick:u,children:[s&&a.jsx("span",{className:"ded-icon",children:s}),a.jsx("span",{children:n})]}):a.jsxs(x,{className:`ded-tab ${l?g(e,t):""} 
      ${o?"ded-tab-disable":c||y(e,t)}`,variant:"text",onClick:u,children:[s&&a.jsx("span",{className:"ded-icon",children:s}),a.jsx("span",{children:n})]});try{v.displayName="TabItem",v.__docgenInfo={description:"TabItem 組件代表標籤組中的單個標籤項目。",displayName:"TabItem",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},type:{defaultValue:{value:"basic"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"outline"'},{value:'"button"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const r=({themeColor:e="primary",dataSource:t,activeIndex:n=0,type:s="basic",prefix:l="",isDisabled:o=!1,className:c="",onClick:u})=>{const[f,C]=T.useState(0),A=(d,i)=>{C(i),d.currentTarget.blur(),u&&u(d)};return T.useEffect(()=>{C(n||0)},[n]),a.jsxs("div",{className:`ded-tabs-container ${c}`,children:[a.jsx("div",{className:`ded-tabs ${s==="button"?"ded-tabs-button":""}`,children:t.map((d,i)=>a.jsx(v,{title:d.title,themeColor:e,type:s,prefix:l,isDisabled:o,isActive:i===f,onClick:B=>A(B,i)},i))}),a.jsx("div",{className:`ded-tab-content ${o&&"ded-tab-disable"}`,children:t[f].content})]})};try{r.displayName="Tabs",r.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"Tabs",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ title: string; content: string; }[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},type:{defaultValue:{value:"basic"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"outline"'},{value:'"button"'}]}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"tabs",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ title: string; content: string; }[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},type:{defaultValue:{value:"basic"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"outline"'},{value:'"button"'}]}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const w=[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],me={title:"Component/Tabs",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2},table:{category:"PROPS"}},type:{description:"頁籤樣式",control:{type:"select",options:["basic","outline","button"]},table:{category:"PROPS"}},prefix:{description:"前綴元素",options:["none","SvgArrowDown"],mapping:{none:null,SvgArrowDown:a.jsx(h,{})},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"}}},args:{themeColor:"primary",dataSource:w,activeIndex:0,type:"basic",prefix:a.jsx(h,{}),isDisabled:!1,className:"",onClick:P("onClick")},decorators:[e=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:a.jsx(e,{})})],parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},m={name:"預設項目",args:{},render(e){return a.jsx(r,{...e})}},p={name:"頁籤類型",argTypes:{type:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,t){return`
<Tabs {...args} type="basic" />
<Tabs {...args} type="outline" />
<Tabs {...args} type="button" />
`}}}},render(e){return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,type:"basic"}),a.jsx(r,{...e,type:"outline"}),a.jsx(r,{...e,type:"button"})]})}},b={name:"主題色彩",args:{type:"button",activeIndex:2},parameters:{docs:{source:{transform(e,t){return`
<Tabs {...args} themeColor="primary" />
<Tabs {...args} themeColor="secondary" />
<Tabs {...args} themeColor="neutral" />
<Tabs {...args} themeColor="info" />
<Tabs {...args} themeColor="success" />
<Tabs {...args} themeColor="warning" />
<Tabs {...args} themeColor="error" />
`}}}},render(e){return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,themeColor:"primary"}),a.jsx(r,{...e,themeColor:"secondary"}),a.jsx(r,{...e,themeColor:"neutral"}),a.jsx(r,{...e,themeColor:"info"}),a.jsx(r,{...e,themeColor:"success"}),a.jsx(r,{...e,themeColor:"warning"}),a.jsx(r,{...e,themeColor:"error"})]})}};var _,E,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var j,N,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '頁籤類型',
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tabs {...args} type="basic" />
<Tabs {...args} type="outline" />
<Tabs {...args} type="button" />
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Tabs {...args} type="basic" />
        <Tabs {...args} type="outline" />
        <Tabs {...args} type="button" />
      </>;
  }
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,S,I;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    type: 'button',
    activeIndex: 2
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tabs {...args} themeColor="primary" />
<Tabs {...args} themeColor="secondary" />
<Tabs {...args} themeColor="neutral" />
<Tabs {...args} themeColor="info" />
<Tabs {...args} themeColor="success" />
<Tabs {...args} themeColor="warning" />
<Tabs {...args} themeColor="error" />
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Tabs {...args} themeColor="primary" />
        <Tabs {...args} themeColor="secondary" />
        <Tabs {...args} themeColor="neutral" />
        <Tabs {...args} themeColor="info" />
        <Tabs {...args} themeColor="success" />
        <Tabs {...args} themeColor="warning" />
        <Tabs {...args} themeColor="error" />
      </>;
  }
}`,...(I=(S=b.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const pe=["Default","Type","PrimaryWithButton"];export{m as Default,b as PrimaryWithButton,p as Type,pe as __namedExportsOrder,me as default};
