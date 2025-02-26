import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{B as s,u as v}from"./toast-BhiYnD6v.js";import"./index-sbqOYYIm.js";import{D as y}from"./tooltip-BzHvdmNN.js";import"./badge-BPltvF_h.js";import"./breadcrumb-BT-H3bo-.js";import"./checkbox-Cq4ng9DF.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import{G as f,R as x,C as l}from"./grid-D9dEAlnk.js";import"./image-Bwf7LxIR.js";import"./input-CMbRWpBm.js";import"./layout-DgebEeDV.js";import"./menu-Bywynte6.js";import"./radio-DmdC9FLH.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-gKTSkn4a.js";import"./textarea-r7CXvhUd.js";import{T as w}from"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./warning-tri-D1aSkfBJ.js";import{S as O}from"./close-o-4V2u0k.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const Z={title:"Component/Dialog",component:y,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟",table:{category:"PROPS"}},hasClose:{description:"是否有關閉按鈕",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},header:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"附註",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{isOpen:!1,hasClose:!0,className:""},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"},source:{transform(t,i){const{args:o}=i;return`
const { isOpen, header, content, openDialog, closeDialog } = useDialog({
isOpen: ${(o==null?void 0:o.isOpen)||!1},
header: (
  <Title themeColor="primary" level={2}>
    Title
  </Title>
),
content: (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is
    simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard
  </p>
),
});

<Button onClick={openDialog} variant="filled">
  Open Dialog
</Button>
<Dialog
  isOpen={isOpen}
  hasClose={${(o==null?void 0:o.hasClose)||!1}}
  onClose={closeDialog}
  header={header}
  content={content}
  footer={
    <Grid fluid>
      <Row>
        <Column sm={4}>
          <Button
            onClick={() => {
              window.alert('ok')
              closeDialog()
            }}
            variant="filled"
            width="fluid"
          >
            OK
          </Button>
        </Column>
        <Column sm={4}>
          <Button
            onClick={() => {
              window.alert('cancel')
              closeDialog()
            }}
            themeColor="primary"
            variant="soft"
            width="fluid"
          >
            Cancel
          </Button>
        </Column>
      </Row>
    </Grid>
  }
/>
`}}}}},D=t=>{const{isOpen:i,header:o,content:d,openDialog:n,closeDialog:m}=v({isOpen:(t==null?void 0:t.isOpen)||!1,header:e.jsx(w,{themeColor:"primary",level:2,children:"Title"}),content:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"})});return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:n,variant:"filled",children:"Open Dialog"}),e.jsx(y,{isOpen:i,hasClose:(t==null?void 0:t.hasClose)||!1,onClose:m,header:o,content:d,footer:e.jsx(f,{fluid:!0,children:e.jsxs(x,{children:[e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("ok"),variant:"filled",width:"fluid",children:"OK"})}),e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("cancel"),themeColor:"primary",variant:"soft",width:"fluid",children:"Cancel"})})]})})})]})},r={name:"預設項目",args:{isOpen:!0,hasClose:!0,header:e.jsx(w,{themeColor:"primary",level:2,children:"Title"}),content:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"}),onClose:()=>window.alert("close")},render(t){const{hasClose:i,header:o,content:d,onClose:n,className:m}=t;return e.jsxs("div",{className:`dialog-content ${m}`,onClick:j=>j.stopPropagation(),children:[n&&i&&e.jsx("button",{className:"dialog-close-btn",onClick:n,children:e.jsx(O,{width:20,height:20})}),e.jsx("div",{className:"dialog-header",children:o}),e.jsx("div",{className:"dialog-body",children:d}),e.jsx("div",{className:"dialog-footer",children:e.jsx(f,{fluid:!0,children:e.jsxs(x,{children:[e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("ok"),variant:"filled",width:"fluid",children:"OK"})}),e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("cancel"),themeColor:"primary",variant:"soft",width:"fluid",children:"Cancel"})})]})})})]})}},a={name:"互動模式",args:{},render(t){return e.jsx(D,{...t})}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    isOpen: true,
    hasClose: true,
    header: <Title themeColor="primary" level={2}>
        Title
      </Title>,
    content: <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard
      </p>,
    onClose: () => window.alert('close')
  },
  render(args) {
    const {
      hasClose,
      header,
      content,
      onClose,
      className
    } = args;
    return <div className={\`dialog-content \${className}\`} onClick={e => e.stopPropagation()}>
        {onClose && hasClose && <button className="dialog-close-btn" onClick={onClose}>
            <SvgClose width={20} height={20} />
          </button>}
        <div className="dialog-header">{header}</div>
        <div className="dialog-body">{content}</div>
        <div className="dialog-footer">
          <Grid fluid>
            <Row>
              <Column sm={4}>
                <Button onClick={() => window.alert('ok')} variant="filled" width="fluid">
                  OK
                </Button>
              </Column>
              <Column sm={4}>
                <Button onClick={() => window.alert('cancel')} themeColor="primary" variant="soft" width="fluid">
                  Cancel
                </Button>
              </Column>
            </Row>
          </Grid>
        </div>
      </div>;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,C,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '互動模式',
  args: {},
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const ee=["Default","Demo"];export{r as Default,a as Demo,ee as __namedExportsOrder,Z as default};
