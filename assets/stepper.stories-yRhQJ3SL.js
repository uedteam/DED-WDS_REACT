import{j as t}from"./jsx-runtime-DEdD30eg.js";import{g as c}from"./tooltip-Df09q_W1.js";import"./badge-BPltvF_h.js";import"./breadcrumb-BdVqNg6a.js";import{B as p}from"./toast-CGCUuF-E.js";import"./checkbox-BCNOGswC.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-ByamwSew.js";import"./layout-DgebEeDV.js";import"./menu-Be5adDqx.js";import"./radio-CMOPLxLt.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-CoyRoRrM.js";import"./textarea-DPnzmyNM.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./warning-tri-D1aSkfBJ.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,r=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],J={title:"Component/Stepper",component:c,tags:["autodocs"],argTypes:{dataSource:{description:"步驟列表",table:{category:"PROPS"}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:r.length-1},table:{category:"PROPS"}},direction:{description:"方向",control:{type:"select",options:["horizontal","vertical"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:r,currentStep:1,direction:"horizontal",className:""},parameters:{docs:{title:"Stepper",description:{component:"步驟導航組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render:function(e){return t.jsx(c,{...e,dataSource:e.dataSource||[],currentStep:e.currentStep??0})}},i={name:"橫向互動模式",args:{className:""},render:function(e){const[{currentStep:n},a]=y();return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,dataSource:e.dataSource||[],currentStep:e.currentStep??0,direction:"horizontal"}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[t.jsx(p,{onClick:()=>{a({currentStep:Math.max(0,(n||0)-1)})},variant:"filled",isDisabled:n<=0,children:"Previous"}),t.jsx(p,{onClick:()=>{a({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"filled",isDisabled:n>=r.length-1,children:"Next"})]})]})}},s={name:"直向互動模式",args:{},render:function(e){const[{currentStep:n},a]=y();return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,dataSource:e.dataSource||[],currentStep:e.currentStep??0,direction:"vertical"}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[t.jsx(p,{onClick:()=>{a({currentStep:Math.max(0,(n||0)-1)})},variant:"filled",isDisabled:n<=0,children:"Previous"}),t.jsx(p,{onClick:()=>{a({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"filled",isDisabled:n>=r.length-1,children:"Next"})]})]})}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function Render(args) {
    return <Stepper {...args} dataSource={args.dataSource || []} currentStep={args.currentStep ?? 0} />;
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,g,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '橫向互動模式',
  args: {
    className: ''
  },
  render: function Render(args) {
    const [{
      currentStep
    }, updateArgs] = useArgs();
    return <>
        <Stepper {...args} dataSource={args.dataSource || []} currentStep={args.currentStep ?? 0} direction="horizontal" />
        <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '8px',
        marginTop: '16px'
      }}>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.max(0, (currentStep || 0) - 1)
          });
        }} variant="filled" isDisabled={currentStep <= 0}>
            Previous
          </Button>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.min((steps?.length || 0) - 1, (currentStep || 0) + 1)
          });
        }} variant="filled" isDisabled={currentStep >= steps.length - 1}>
            Next
          </Button>
        </div>
      </>;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '直向互動模式',
  args: {},
  render: function Render(args) {
    const [{
      currentStep
    }, updateArgs] = useArgs();
    return <>
        <Stepper {...args} dataSource={args.dataSource || []} currentStep={args.currentStep ?? 0} direction="vertical" />
        <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '8px',
        marginTop: '16px'
      }}>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.max(0, (currentStep || 0) - 1)
          });
        }} variant="filled" isDisabled={currentStep <= 0}>
            Previous
          </Button>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.min((steps?.length || 0) - 1, (currentStep || 0) + 1)
          });
        }} variant="filled" isDisabled={currentStep >= steps.length - 1}>
            Next
          </Button>
        </div>
      </>;
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Q=["Default","HorizontalDemo","VerticalDemo"];export{o as Default,i as HorizontalDemo,s as VerticalDemo,Q as __namedExportsOrder,J as default};
