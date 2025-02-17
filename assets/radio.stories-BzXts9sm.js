import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as S}from"./chunk-454WOBUV-ChHd1ABr.js";import{R as o}from"./radio-DmdC9FLH.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const z=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],h={title:"Component/Radio",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},currValue:{description:"預設值",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},onChange:{description:"選擇選項後的事件",action:"onChange",table:{category:"EVENTS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:z,direction:"row",currValue:"option1",size:"medium",className:"",onChange:S("onChange")},parameters:{docs:{title:"Radio Button",description:{component:"單選按鈕組件的呈現及說明。"}}}},C=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],a={name:"預設項目",args:{dataSource:C},render(e){return r.jsx(o,{...e})}},s={name:"垂直排列",argTypes:{direction:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,i){return`
<Radio {...args} direction="column"/>
`}}}},render(e){return r.jsx(o,{...e,direction:"column"})}},t={name:"水平排列",args:{},parameters:{docs:{source:{transform(e,i){return`
<Radio {...args} direction="row"/>
`}}}},render(e){return r.jsx(o,{...e,direction:"row"})}},n={name:"元件尺寸",argTypes:{size:{table:{disable:!0}}},args:{},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.jsx(e,{})})],parameters:{docs:{source:{transform(e,i){return`
<Radio {...args} size="large" />
<Radio {...args} size="medium" />
<Radio {...args} size="small" />
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,size:"large"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"small"})]})}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Radio {...args} />;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,R,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '元件尺寸',
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  decorators: [Story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
        <Story />
      </div>],
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Radio {...args} size="large" />
<Radio {...args} size="medium" />
<Radio {...args} size="small" />
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Radio {...args} size="large" />
        <Radio {...args} size="medium" />
        <Radio {...args} size="small" />
      </>;
  }
}`,...(f=(R=n.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const w=["Default","Vertical","Horizontal","Size"];export{a as Default,t as Horizontal,n as Size,s as Vertical,w as __namedExportsOrder,h as default};
