import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./title-BeUUUaOK.js";import{T as o,B as n}from"./card-CJ_QUIpD.js";import"./checkbox-DKKX1wwo.js";import"./input-Bcx9qKJo.js";import"./textarea-C1_2O7ml.js";import"./toggle-xIt_69v7.js";import"./radio-D2b4GCX4.js";import"./breadcrumb-C1pwdv1X.js";import"./avatar-BfuDsxqz.js";import"./progress-circle-CwKMVC63.js";import"./progress-line-BtL8AAbK.js";import"./styled-CaWuYePh.js";import"./menu-DgvEGrP7.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";import"./arrow_down-DA-sWbvp.js";const _={title:"Design System/Tooltip",component:o,tags:["autodocs"],argTypes:{children:{description:"顯示內容"},content:{description:"提示內容"},showArrow:{description:"是否顯示箭頭"},placement:{description:"提示框位置",control:{type:"select",options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]}},className:{description:"客製化樣式"}},parameters:{docs:{title:"提示工具",description:{component:"提示工具的呈現及說明。"}}}},r={name:"主要項目",args:{content:"請設定參數",children:"可操作參數",placement:"top",className:""},render(e){return t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"32px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"top-left",children:t.jsx(n,{variant:"outlined",children:"送出"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"top",children:t.jsx(n,{variant:"outlined",children:"提交"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"top-right",children:t.jsx(n,{variant:"outlined",children:"刪除"})})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"left",children:t.jsx(n,{variant:"outlined",children:"確認"})}),t.jsx(o,{...e,children:t.jsx(n,{variant:"contained",children:e.children||"可操作參數"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"right",children:t.jsx(n,{variant:"outlined",children:"取消"})})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"bottom-left",children:t.jsx(n,{variant:"outlined",children:"驗證"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"bottom",children:t.jsx(n,{variant:"outlined",children:"關閉"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"bottom-right",children:t.jsx(n,{variant:"outlined",children:"提示"})})]})]})}};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    content: '請設定參數',
    children: '可操作參數',
    placement: 'top',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px'
      }}>
          <Tooltip {...args} showArrow content="提示內容" placement="top-left">
            <Button variant="outlined">送出</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="top">
            <Button variant="outlined">提交</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="top-right">
            <Button variant="outlined">刪除</Button>
          </Tooltip>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px'
      }}>
          <Tooltip {...args} showArrow content="提示內容" placement="left">
            <Button variant="outlined">確認</Button>
          </Tooltip>
          <Tooltip {...args}>
            <Button variant="contained">{args.children || '可操作參數'}</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="right">
            <Button variant="outlined">取消</Button>
          </Tooltip>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px'
      }}>
          <Tooltip {...args} showArrow content="提示內容" placement="bottom-left">
            <Button variant="outlined">驗證</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="bottom">
            <Button variant="outlined">關閉</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="bottom-right">
            <Button variant="outlined">提示</Button>
          </Tooltip>
        </div>
      </div>;
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const E=["Primary"];export{r as Primary,E as __namedExportsOrder,_ as default};
