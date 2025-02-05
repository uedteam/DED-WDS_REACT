import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-ChHd1ABr.js";import{L as a}from"./tooltip-GfprZ0Z4.js";import"./badge-vsbKzH_B.js";import"./checkbox-wrczPlMV.js";import"./progress-circle-xnhIhzfk.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./layout-ZjbFUAzr.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./title-BBnafEgB.js";import"./toggle-Ck5Sa1oo.js";import{b as s}from"./warning-tri-Y1-2BlEi.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./notification-NM2mg_B2.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const d=[{content:{label:"Option1",value:"option1",prefix:e.jsx(s,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(s,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(s,{})}}],z={title:"Component/List",component:a,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},hasDivider:{description:"是否有分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:d,hasOutline:!1,hasDivider:!1,className:"",onSelect:u("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},r={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(o){return e.jsx(a,{...o})}},t={name:"選單樣式",args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(o){return e.jsx(a,{...o,hasOutline:!0})}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} />\`
      }
    }
  },
  render(args) {
    return <List {...args} />;
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '選單樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} hasOutline />\`
      }
    }
  },
  render(args) {
    return <List {...args} hasOutline />;
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const B=["Default","Menu"];export{r as Default,t as Menu,B as __namedExportsOrder,z as default};
