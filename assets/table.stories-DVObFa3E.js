import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as i}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as t,c as o}from"./dashboard-DSqKga5j.js";import"./badge-BPltvF_h.js";import"./breadcrumb-DT1IYLpb.js";import{B as S}from"./toast-D6kQ9exv.js";import"./checkbox-B0KnDoZ3.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-DBe718N7.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-CT__RalH.js";import"./textarea-B3sPnM2u.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-BqglSu1j.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./auth-flow-J6yiVpO1.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-aIaTAFys.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const C=[{key:"head",title:"TH",width:"100px"},{key:"column1",title:"TH",width:"180px"},{key:"column2",title:"TH",width:"180px"},{key:"column3",title:"TH",width:"180px"},{key:"column4",title:"TH",width:"120px"},{key:"column5",title:"TH",width:"120px",align:"center"}],H=[{key:"head",title:"TH",width:"10vw"},{key:"column1",title:"TH",width:"20vw",render:e=>r.jsx(o,{content:e.column1,placement:"top",children:e.column1})},{key:"column2",title:"TH",width:"20vw",render:e=>r.jsx(o,{content:e.column2,placement:"top",children:e.column2})},{key:"column3",title:"TH",width:"20vw",render:e=>r.jsx(o,{content:e.column3,placement:"top",children:e.column3})},{key:"column4",title:"TH",width:"15vw",render:e=>r.jsx(o,{content:e.column4,placement:"top",children:e.column4})},{key:"column5",title:"TH",width:"15vw",align:"center",render:e=>r.jsx(S,{themeColor:"primary",variant:"filled",size:"small",onClick:()=>alert(e.column5),children:"View"})}],P=Array(4).fill(null).map((e,y)=>({head:`Head-${y+1}`,column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"})),oe={title:"Component/Table",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},columns:{description:"欄位",table:{category:"PROPS"}},showCheckbox:{description:"是否顯示 checkbox",table:{category:"PROPS"}},showVerticalBorders:{description:"是否顯示垂直邊框",table:{category:"PROPS"}},isSprite:{description:"是否顯示條紋背景",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onRowClick:{description:"點擊事件",table:{category:"EVENTS"}},onSelect:{description:"選取事件",table:{category:"EVENTS"}}},args:{dataSource:P,columns:C,showCheckbox:!1,showVerticalBorders:!1,isSprite:!0,className:"",onRowClick:i("onRowClick"),onSelect:i("onSelect")},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}}}},n={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},a={name:"框線表格",args:{},render(e){return r.jsx(t,{...e,showVerticalBorders:!0,showCheckbox:!0})}},s={name:"客製化欄位",args:{columns:H},render(e){return r.jsx(t,{...e})}},c={name:"可勾選資料列",args:{},render(e){return r.jsx(t,{...e,showCheckbox:!0})}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Table {...args} />;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '框線表格',
  args: {},
  render(args) {
    return <Table {...args} showVerticalBorders showCheckbox />;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,w,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '客製化欄位',
  args: {
    columns: customColumns
  },
  render(args) {
    return <Table {...args} />;
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,k,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '可勾選資料列',
  args: {},
  render(args) {
    return <Table {...args} showCheckbox />;
  }
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ne=["Default","Border","Custom","Checkbox"];export{a as Border,c as Checkbox,s as Custom,n as Default,ne as __namedExportsOrder,oe as default};
