import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as C}from"./chunk-454WOBUV-ChHd1ABr.js";import{C as c}from"./checkbox-DKKX1wwo.js";import{r as x}from"./index-RYns6xqu.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";const V={title:"Design System/Checkbox",component:c,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"客製化樣式"},options:{description:"選項"},direction:{description:"方向",control:{type:"select",options:["row","column"]}},initValue:{description:"選中的選項"},onChange:{description:"選中選項改變時的回調函數",action:"onChange"}},args:{},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},s=[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],y=()=>{const[o,a]=x.useState(["option1"]),i=l=>{console.log(l),a(l)};return e.jsx(c,{options:s,initValue:o,onChange:i})},t={name:"預設項目",args:{options:s,initValue:[],onChange:o=>C("onChange")(o),className:""},render(o){return e.jsx(y,{})}},r=({themeColor:o})=>{const[a,i]=x.useState(["option1"]);return e.jsx(c,{themeColor:o,options:s,initValue:a,onChange:i})},n={name:"主題色彩",args:{options:s,initValue:["option1"],onChange:o=>C("onChange")(o),className:""},render(o){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{themeColor:"primary"}),e.jsx(r,{themeColor:"secondary"}),e.jsx(r,{themeColor:"tertiary"}),e.jsx(r,{themeColor:"info"}),e.jsx(r,{themeColor:"success"}),e.jsx(r,{themeColor:"warning"}),e.jsx(r,{themeColor:"error"})]})}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    options: options,
    initValue: [],
    onChange: e => action('onChange')(e),
    className: ''
  },
  render(args) {
    return <DefaultWithHooks />;
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,d,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    options: options,
    initValue: ['option1'],
    onChange: e => action('onChange')(e),
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ThemeWithHooks themeColor="primary" />
        <ThemeWithHooks themeColor="secondary" />
        <ThemeWithHooks themeColor="tertiary" />
        <ThemeWithHooks themeColor="info" />
        <ThemeWithHooks themeColor="success" />
        <ThemeWithHooks themeColor="warning" />
        <ThemeWithHooks themeColor="error" />
      </div>;
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const b=["Default","Theme"];export{t as Default,n as Theme,b as __namedExportsOrder,V as default};
