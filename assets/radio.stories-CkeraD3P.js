import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as y}from"./chunk-454WOBUV-ChHd1ABr.js";import{R as t}from"./radio-CMOPLxLt.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const R=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],D={title:"Component/Radio",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},initValue:{description:"預設值",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},onChange:{description:"選擇選項後的事件",action:"onChange",table:{category:"EVENTS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:R,direction:"row",initValue:"option1",size:"medium",className:"",onChange:y("onChange")},parameters:{docs:{title:"Radio Button",description:{component:"單選按鈕組件的呈現及說明。"}}}},f=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],r={name:"預設項目",args:{dataSource:f},render(e){return a.jsx(t,{...e})}},o={name:"垂直排列",argTypes:{direction:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,b){return`
<Radio {...args} direction="column"/>
`}}}},render(e){return a.jsx(t,{...e,direction:"column"})}},n={name:"水平排列",args:{},parameters:{docs:{source:{transform(e,b){return`
<Radio {...args} direction="row"/>
`}}}},render(e){return a.jsx(t,{...e,direction:"row"})}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Radio {...args} />;
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '垂直排列',
  argTypes: {
    direction: {
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
          const {
            args
          } = storyContext;
          return \`
<Radio {...args} direction="column"/>
\`;
        }
      }
    }
  },
  render(args) {
    return <Radio {...args} direction="column" />;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '水平排列',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Radio {...args} direction="row"/>
\`;
        }
      }
    }
  },
  render(args) {
    return <Radio {...args} direction="row" />;
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const v=["Default","Vertical","Horizontal"];export{r as Default,n as Horizontal,o as Vertical,v as __namedExportsOrder,D as default};
