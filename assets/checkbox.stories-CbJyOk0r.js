import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-ChHd1ABr.js";import{C as o}from"./checkbox-BCNOGswC.js";import"./index-RYns6xqu.js";import"./warning-tri-D1aSkfBJ.js";import"./check-BnJBHFpS.js";import"./string-BqrfsRv8.js";const S=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],T={title:"Component/Checkbox",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},initValue:{description:"選中的項目",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選中選項改變時的回調函數",action:"onChange",table:{category:"EVENTS"}}},args:{dataSource:S,initValue:["option1","option3"],direction:"row",size:"medium",className:"",onChange:e=>h("onChange")(e)},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},z=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],t={name:"預設項目",args:{dataSource:z},render(e){return r.jsx(o,{...e})}},s={name:"垂直排列",argTypes:{direction:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,i){return`
<Radio {...args} direction="column"/>
`}}}},render(e){return r.jsx(o,{...e,direction:"column"})}},a={name:"水平排列",argTypes:{direction:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(e,i){return`
<Radio {...args} direction="row"/>
`}}}},render(e){return r.jsx(o,{...e,direction:"row"})}},n={name:"元件尺寸",argTypes:{size:{table:{disable:!0}}},args:{},decorators:[e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.jsx(e,{})})],parameters:{docs:{source:{transform(e,i){return`
<Checkbox {...args} size="large" />
<Checkbox {...args} size="medium" />
<Checkbox {...args} size="small" />
`}}}},render(e){return r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,size:"large"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"small"})]})}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,C,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
<Checkbox {...args} size="large" />
<Checkbox {...args} size="medium" />
<Checkbox {...args} size="small" />
\`;
        }
      }
    }
  },
  render(args) {
    return <>
        <Checkbox {...args} size="large" />
        <Checkbox {...args} size="medium" />
        <Checkbox {...args} size="small" />
      </>;
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const w=["Default","Horizontal","Vertical","Size"];export{t as Default,s as Horizontal,n as Size,a as Vertical,w as __namedExportsOrder,T as default};
