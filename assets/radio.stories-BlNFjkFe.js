import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-ChHd1ABr.js";import{R as r}from"./radio-D2b4GCX4.js";import"./index-RYns6xqu.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";const R={title:"Design System/Radio",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},options:{description:"選項"},direction:{description:"方向",control:{type:"select",options:["row","column"]}},initValue:{description:"預設值"},onChange:{description:"選擇選項後的事件",action:"onChange"},className:{description:"客製化樣式"}},args:{themeColor:"primary",direction:"row",className:""},parameters:{docs:{title:"Radio Button",description:{component:"Radio Button 組件的呈現及說明。"}}}},m=[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],t={name:"預設項目",args:{options:m,initValue:"option1",onChange:o=>{d("onChange")(o)}},render(o){return e.jsx(r,{...o})}},n={name:"主題色彩",args:{options:m,initValue:"option1"},render(o){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{...o,themeColor:"primary"}),e.jsx(r,{...o,themeColor:"secondary"}),e.jsx(r,{...o,themeColor:"tertiary"}),e.jsx(r,{...o,themeColor:"info"}),e.jsx(r,{...o,themeColor:"success"}),e.jsx(r,{...o,themeColor:"warning"}),e.jsx(r,{...o,themeColor:"error"})]})}};var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    options: options,
    initValue: 'option1',
    onChange: e => {
      action('onChange')(e);
    }
  },
  render(args) {
    return <Radio {...args} />;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    options: options,
    initValue: 'option1'
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...args} themeColor="primary" />
        <Radio {...args} themeColor="secondary" />
        <Radio {...args} themeColor="tertiary" />
        <Radio {...args} themeColor="info" />
        <Radio {...args} themeColor="success" />
        <Radio {...args} themeColor="warning" />
        <Radio {...args} themeColor="error" />
      </div>;
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const f=["Default","Theme"];export{t as Default,n as Theme,f as __namedExportsOrder,R as default};
