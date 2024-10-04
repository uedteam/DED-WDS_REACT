import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as y}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{B as b}from"./styled-Bq4E00aR.js";import"./input-Dm2PXP3R.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-Cxu-tw8b.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-DZcf6x5w.js";import"./circle-progress-CPe7smUW.js";import"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./menu-DLa2x_C0.js";import{C as _,A as N,S as x,V,a as C}from"./auo-0es9FKg1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const l=a=>`tag-${a}-disabled`;try{l.displayName="getDisableClass",l.__docgenInfo={description:"根據按鈕的變體返回禁用類。",displayName:"getDisableClass",props:{}}}catch{}const n=a=>{const{isDisabled:s,icon:i,closeIcon:t,onClose:m,closable:u,className:f,children:g}=a;return e.jsxs("div",{className:`tag ${f} ${s?l("outlined"):""}`,children:[i&&e.jsx("div",{className:"tag-icon",children:i}),e.jsx("span",{className:"tag-text",children:g}),u&&e.jsx(b,{variant:"text",onClick:m,children:t||e.jsx(_,{className:`tag-close ${s?"tag-close-disabled":""}`})})]})},p=n;try{n.displayName="Tag",n.__docgenInfo={description:"",displayName:"Tag",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{tag.displayName="tag",tag.__docgenInfo={description:"",displayName:"tag",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Design System/Element/Tag",component:p,tags:["autodocs"],argTypes:{isDisabled:{description:"是否禁用"},icon:{description:"圖式",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:e.jsx(N,{}),Search:e.jsx(x,{}),Visibility:e.jsx(V,{}),VisibilityOff:e.jsx(C,{})}},closable:{description:"是否可關閉"},closeIcon:{description:"關閉圖式"},className:{description:"客製化樣式"},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"標籤的呈現及說明。"}}}},o={name:"搜尋輸入框",args:{closable:!0,isDisabled:!1,className:"",onClose:y("onClick")},render(a){const s=[111,222,333,444,555];return e.jsx("div",{style:{display:"flex",gap:"8px"},children:s.map(i=>e.jsx(p,{...a,children:i}))})}};var r,c,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    closable: true,
    isDisabled: false,
    className: '',
    onClose: action('onClick')
  },
  render(args) {
    const forMap = [111, 222, 333, 444, 555];
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        {forMap.map(item => <Tag {...args}>{item}</Tag>)}
      </div>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const J=["Primary"];export{o as Primary,J as __namedExportsOrder,H as default};