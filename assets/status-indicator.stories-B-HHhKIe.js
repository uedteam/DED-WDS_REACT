import{j as t}from"./jsx-runtime-DEdD30eg.js";import{i as n}from"./dashboard-COVMMoRo.js";import"./badge-CWp9P8za.js";import"./breadcrumb-TCnn8lMP.js";import"./toast-C2hixRTe.js";import"./checkbox-BmwS-2If.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-BM3BOMDl.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-DJ6IV6nG.js";import"./textarea-B3sPnM2u.js";import"./title-CZRmBG9s.js";import"./toggle-Co0kfaDY.js";import"./menu-D4zb9J0r.js";import{G as f,R as e,C as a}from"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./auth-flow-ByVP1aHn.js";import{j as s,k as l,l as c,m as d,n as C,o as h}from"./warning-tri-aIaTAFys.js";import"./index-RYns6xqu.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const X={title:"Component/Status-Indicator",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"樣式變體",control:{type:"select",options:["filled","soft","text"]},table:{category:"PROPS"}},isShowDot:{description:"是否顯示圓點",table:{category:"PROPS"}},prefix:{description:"前綴元素",options:["None","InfoCircle","SuccessCircle","WarningCircle","ErrorCircle","QuestionCircle","DisableCircle"],mapping:{None:null,InfoCircle:t.jsx(s,{width:20,height:20}),SuccessCircle:t.jsx(l,{width:20,height:20}),WarningCircle:t.jsx(c,{width:20,height:20}),ErrorCircle:t.jsx(d,{width:20,height:20}),QuestionCircle:t.jsx(C,{width:20,height:20}),DisableCircle:t.jsx(h,{width:20,height:20})},control:{type:"select"},table:{category:"PROPS"}},children:{description:"內容",table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"success",variant:"filled",isShowDot:!1,children:"Success",prefix:"None",size:"medium",className:""},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(r){return t.jsx(n,{...r,children:r.children})}},o={name:"主題色彩",argTypes:{themeColor:{table:{disable:!0}},variant:{table:{disable:!0}},children:{table:{disable:!0}},prefix:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,v){return`
<StatusIndicator {...args} variant="filled" themeColor="info">
  Information
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="success">
  Success
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="warning">
  Warning
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="error">
  Error
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="neutral">
  Disable
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="info">
  Information
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="success">
  Success
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="warning">
  Warning
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="error">
  Error
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="neutral">
  Disable
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="info"
  prefix={<SvgInfoCircle width={20} height={20} />}
>
  Information
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="success"
  prefix={<SvgSuccessCircle width={20} height={20} />}
>
  Success
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="warning"
  prefix={<SvgWarningTri width={20} height={20} />}
>
  Warning
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="error"
  prefix={<SvgErrorCircle width={20} height={20} />}
>
  Error
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="neutral"
  prefix={<SvgDisableCircle width={20} height={20} />}
>
  Disable
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="info"
  prefix={<SvgInfoCircle width={20} height={20} />}
>
  Information
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="success"
  prefix={<SvgSuccessCircle width={20} height={20} />}
>
  Success
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="warning"
  prefix={<SvgWarningTri width={20} height={20} />}
>
  Warning
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="error"
  prefix={<SvgErrorCircle width={20} height={20} />}
>
  Error
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="neutral"
  prefix={<SvgDisableCircle width={20} height={20} />}
>
  Disable
</StatusIndicator>
`}}}},render(r){return t.jsxs(f,{children:[t.jsx(e,{children:t.jsx(a,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(n,{...r,variant:"filled",themeColor:"info",children:"Information"}),t.jsx(n,{...r,variant:"filled",themeColor:"success",children:"Success"}),t.jsx(n,{...r,variant:"filled",themeColor:"warning",children:"Warning"}),t.jsx(n,{...r,variant:"filled",themeColor:"error",children:"Error"}),t.jsx(n,{...r,variant:"filled",themeColor:"neutral",children:"Disable"})]})})}),t.jsx(e,{children:t.jsx(a,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(n,{...r,variant:"text",themeColor:"info",children:"Information"}),t.jsx(n,{...r,variant:"text",themeColor:"success",children:"Success"}),t.jsx(n,{...r,variant:"text",themeColor:"warning",children:"Warning"}),t.jsx(n,{...r,variant:"text",themeColor:"error",children:"Error"}),t.jsx(n,{...r,variant:"text",themeColor:"neutral",children:"Disable"})]})})}),t.jsx(e,{children:t.jsx(a,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(n,{...r,variant:"filled",themeColor:"info",prefix:t.jsx(s,{width:20,height:20}),children:"Information"}),t.jsx(n,{...r,variant:"filled",themeColor:"success",prefix:t.jsx(l,{width:20,height:20}),children:"Success"}),t.jsx(n,{...r,variant:"filled",themeColor:"warning",prefix:t.jsx(c,{width:20,height:20}),children:"Warning"}),t.jsx(n,{...r,variant:"filled",themeColor:"error",prefix:t.jsx(d,{width:20,height:20}),children:"Error"}),t.jsx(n,{...r,variant:"filled",themeColor:"neutral",prefix:t.jsx(h,{width:20,height:20}),children:"Disable"})]})})}),t.jsx(e,{children:t.jsx(a,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(n,{...r,variant:"text",themeColor:"info",prefix:t.jsx(s,{width:20,height:20}),children:"Information"}),t.jsx(n,{...r,variant:"text",themeColor:"success",prefix:t.jsx(l,{width:20,height:20}),children:"Success"}),t.jsx(n,{...r,variant:"text",themeColor:"warning",prefix:t.jsx(c,{width:20,height:20}),children:"Warning"}),t.jsx(n,{...r,variant:"text",themeColor:"error",prefix:t.jsx(d,{width:20,height:20}),children:"Error"}),t.jsx(n,{...r,variant:"text",themeColor:"neutral",prefix:t.jsx(h,{width:20,height:20}),children:"Disable"})]})})})]})}};var u,S,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <StatusIndicator {...args}>{args.children}</StatusIndicator>;
  }
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var m,x,I;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '主題色彩',
  argTypes: {
    themeColor: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    prefix: {
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
<StatusIndicator {...args} variant="filled" themeColor="info">
  Information
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="success">
  Success
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="warning">
  Warning
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="error">
  Error
</StatusIndicator>
<StatusIndicator {...args} variant="filled" themeColor="neutral">
  Disable
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="info">
  Information
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="success">
  Success
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="warning">
  Warning
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="error">
  Error
</StatusIndicator>
<StatusIndicator {...args} variant="text" themeColor="neutral">
  Disable
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="info"
  prefix={<SvgInfoCircle width={20} height={20} />}
>
  Information
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="success"
  prefix={<SvgSuccessCircle width={20} height={20} />}
>
  Success
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="warning"
  prefix={<SvgWarningTri width={20} height={20} />}
>
  Warning
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="error"
  prefix={<SvgErrorCircle width={20} height={20} />}
>
  Error
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="filled"
  themeColor="neutral"
  prefix={<SvgDisableCircle width={20} height={20} />}
>
  Disable
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="info"
  prefix={<SvgInfoCircle width={20} height={20} />}
>
  Information
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="success"
  prefix={<SvgSuccessCircle width={20} height={20} />}
>
  Success
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="warning"
  prefix={<SvgWarningTri width={20} height={20} />}
>
  Warning
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="error"
  prefix={<SvgErrorCircle width={20} height={20} />}
>
  Error
</StatusIndicator>
<StatusIndicator
  {...args}
  variant="text"
  themeColor="neutral"
  prefix={<SvgDisableCircle width={20} height={20} />}
>
  Disable
</StatusIndicator>
\`;
        }
      }
    }
  },
  render(args) {
    return <Grid>
        <Row>
          <Column>
            <div className="flex gap-2">
              <StatusIndicator {...args} variant="filled" themeColor="info">
                Information
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="success">
                Success
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="warning">
                Warning
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="error">
                Error
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="neutral">
                Disable
              </StatusIndicator>
            </div>
          </Column>
        </Row>

        <Row>
          <Column>
            <div className="flex gap-2">
              <StatusIndicator {...args} variant="text" themeColor="info">
                Information
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="success">
                Success
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="warning">
                Warning
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="error">
                Error
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="neutral">
                Disable
              </StatusIndicator>
            </div>
          </Column>
        </Row>

        <Row>
          <Column>
            <div className="flex gap-2">
              <StatusIndicator {...args} variant="filled" themeColor="info" prefix={<SvgInfoCircle width={20} height={20} />}>
                Information
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="success" prefix={<SvgSuccessCircle width={20} height={20} />}>
                Success
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="warning" prefix={<SvgWarningTri width={20} height={20} />}>
                Warning
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="error" prefix={<SvgErrorCircle width={20} height={20} />}>
                Error
              </StatusIndicator>
              <StatusIndicator {...args} variant="filled" themeColor="neutral" prefix={<SvgDisableCircle width={20} height={20} />}>
                Disable
              </StatusIndicator>
            </div>
          </Column>
        </Row>

        <Row>
          <Column>
            <div className="flex gap-2">
              <StatusIndicator {...args} variant="text" themeColor="info" prefix={<SvgInfoCircle width={20} height={20} />}>
                Information
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="success" prefix={<SvgSuccessCircle width={20} height={20} />}>
                Success
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="warning" prefix={<SvgWarningTri width={20} height={20} />}>
                Warning
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="error" prefix={<SvgErrorCircle width={20} height={20} />}>
                Error
              </StatusIndicator>
              <StatusIndicator {...args} variant="text" themeColor="neutral" prefix={<SvgDisableCircle width={20} height={20} />}>
                Disable
              </StatusIndicator>
            </div>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const Y=["Default","Theme"];export{i as Default,o as Theme,Y as __namedExportsOrder,X as default};
