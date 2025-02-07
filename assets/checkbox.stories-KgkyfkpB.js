import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as x}from"./chunk-454WOBUV-ChHd1ABr.js";import{C as t}from"./checkbox-BnGhXkr7.js";import"./index-RYns6xqu.js";import"./warning-tri-BY3sPlw-.js";import"./check-BnJBHFpS.js";import"./string-BqrfsRv8.js";const y=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],k={title:"Component/Checkbox",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},initValue:{description:"選中的項目",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選中選項改變時的回調函數",action:"onChange",table:{category:"EVENTS"}}},args:{dataSource:y,initValue:["option1","option3"],direction:"row",size:"medium",className:"",onChange:e=>x("onChange")(e)},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},C=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],r={name:"預設項目",args:{dataSource:C},render(e){return a.jsx(t,{...e})}},o={name:"垂直排列",argTypes:{direction:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,b){return`
<Radio {...args} direction="column"/>
`}}}},render(e){return a.jsx(t,{...e,direction:"column"})}},n={name:"水平排列",argTypes:{direction:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,b){return`
<Radio {...args} direction="row"/>
`}}}},render(e){return a.jsx(t,{...e,direction:"row"})}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    return <Checkbox {...args} direction="column" />;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '水平排列',
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
<Radio {...args} direction="row"/>
\`;
        }
      }
    }
  },
  render(args) {
    return <Checkbox {...args} direction="row" />;
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const v=["Default","Horizontal","Vertical"];export{r as Default,o as Horizontal,n as Vertical,v as __namedExportsOrder,k as default};
