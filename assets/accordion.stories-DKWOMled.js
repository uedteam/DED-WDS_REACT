import{j as e}from"./jsx-runtime-DEdD30eg.js";import{A as o}from"./tooltip-BrGw3Wfv.js";import"./badge-BPltvF_h.js";import"./breadcrumb-SH1svpeS.js";import{B as S}from"./toast-D3nkt7Y2.js";import"./checkbox-BnGhXkr7.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-BURSIgt3.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-DY3gpVGE.js";import"./layout-ZjbFUAzr.js";import"./menu--aCQtLhl.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-W9QNdB38.js";import"./textarea-CO8Z8fZG.js";import{T as r}from"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{S as n,a as b}from"./warning-tri-BY3sPlw-.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const y=[{id:"1",label:e.jsx(r,{themeColor:"primary",children:"What is React?"}),detail:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"React is a JavaScript library for building user interfaces."}),e.jsx(S,{themeColor:"primary",variant:"soft",onClick:()=>({}),size:"small",suffix:e.jsx(b,{width:20,height:20}),children:"Button"})]})},{id:"2",label:e.jsx(r,{themeColor:"primary",children:"What are the features of React ?"}),detail:e.jsx("p",{children:"The features of React include component-based architecture, unidirectional data flow, and virtual DOM."})},{id:"3",label:e.jsx(r,{themeColor:"primary",children:"What is included in the React ecosystem ?"}),detail:e.jsx("p",{children:"The React ecosystem includes React Router, Redux, and Axios."})},{id:"4",label:e.jsx(r,{themeColor:"primary",children:"What are the advantages of React ?"}),detail:e.jsx("p",{children:"The advantages of React include component-based architecture, unidirectional data flow, and virtual DThese features provide efficiency, reusability, and better performance."})}],x=[{id:"1",label:e.jsx(r,{themeColor:"primary",children:"What is React?"}),detail:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"React is a JavaScript library for building user interfaces."}),e.jsx(S,{themeColor:"primary",variant:"soft",onClick:()=>({}),size:"small",suffix:e.jsx(b,{width:20,height:20}),children:"Button"})]})},{id:"2",label:e.jsx(r,{themeColor:"primary",children:"What are the features of React ?"}),detail:e.jsx("p",{children:"The features of React include component-based architecture, unidirectional data flow, and virtual DOM."})},{id:"3",label:e.jsx(r,{themeColor:"primary",children:"What is included in the React ecosystem ?"}),detail:e.jsx("p",{children:"The React ecosystem includes React Router, Redux, and Axios."})},{id:"4",label:e.jsx(r,{themeColor:"primary",children:"What are the advantages of React ?"}),detail:e.jsx("p",{children:"The advantages of React include component-based architecture, unidirectional data flow, and virtual DThese features provide efficiency, reusability, and better performance."})}],U={title:"Component/Accordion",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Info"],mapping:{None:null,Info:e.jsx(n,{width:20,height:20})},table:{category:"PROPS"}},borderStyle:{description:"邊框樣式",control:{type:"select",options:["solid","highlight"]},table:{category:"PROPS"}},isSmallSize:{description:"是否為小尺寸",table:{category:"PROPS"}},isOpenAll:{description:"是否全部展開",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:y,prefix:e.jsx(n,{width:20,height:20}),borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},parameters:{docs:{title:"Accordion",description:{component:"折疊選單組件的呈現及說明。"}}}},t={name:"預設項目",args:{borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1},render(a){return e.jsx(o,{...a})}},i={name:"邊框樣式",argTypes:{borderStyle:{table:{disable:!0}}},args:{borderStyle:"solid",isOpenAll:!1},render(a){return e.jsx(o,{...a})}},s={name:"小尺寸",argTypes:{isSmallSize:{table:{disable:!0}}},args:{dataSource:x,borderStyle:"solid",isSmallSize:!0,isOpenAll:!1,className:""},render(a){return e.jsx(o,{...a})}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '邊框樣式',
  argTypes: {
    borderStyle: {
      table: {
        disable: true
      }
    }
  },
  args: {
    borderStyle: 'solid',
    isOpenAll: false
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,f,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '小尺寸',
  argTypes: {
    isSmallSize: {
      table: {
        disable: true
      }
    }
  },
  args: {
    dataSource: smallQaList,
    borderStyle: 'solid',
    isSmallSize: true,
    isOpenAll: false,
    className: ''
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const V=["Default","Border","Small"];export{i as Border,t as Default,s as Small,V as __namedExportsOrder,U as default};
