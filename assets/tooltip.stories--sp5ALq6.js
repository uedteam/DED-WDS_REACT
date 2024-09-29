import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./title-D2ajyWBg.js";import{T as o,a as n}from"./button-slider-CZZHkijY.js";import"./input-DHzgqC97.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-Be0wYeYE.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-oC7HqxiX.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./slider-D6GsoAjM.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./plus-BZrTI8CW.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const D={title:"Design System/Module/Tooltip",component:o,tags:["autodocs"],argTypes:{children:{description:"顯示內容",control:{type:"text"}},content:{description:"提示內容",control:{type:"text"}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},placement:{description:"提示框位置",control:{type:"select",options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]}},className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},r={name:"搜尋輸入框",args:{content:"請設定參數",children:"可操作參數",placement:"top",className:""},render(e){return t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"32px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"top-left",children:t.jsx(n,{variant:"outlined",children:"送出"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"top",children:t.jsx(n,{variant:"outlined",children:"提交"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"top-right",children:t.jsx(n,{variant:"outlined",children:"刪除"})})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"left",children:t.jsx(n,{variant:"outlined",children:"確認"})}),t.jsx(o,{...e,children:t.jsx(n,{variant:"contained",children:e.children||"可操作參數"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"right",children:t.jsx(n,{variant:"outlined",children:"取消"})})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"},children:[t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"bottom-left",children:t.jsx(n,{variant:"outlined",children:"驗證"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"bottom",children:t.jsx(n,{variant:"outlined",children:"關閉"})}),t.jsx(o,{...e,showArrow:!0,content:"提示內容",placement:"bottom-right",children:t.jsx(n,{variant:"outlined",children:"提示"})})]})]})}};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '搜尋輸入框',
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
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const N=["Primary"];export{r as Primary,N as __namedExportsOrder,D as default};
