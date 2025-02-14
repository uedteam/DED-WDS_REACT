import{j as e}from"./jsx-runtime-DEdD30eg.js";import{A as t}from"./tooltip-1nuqCrzD.js";import"./badge-BPltvF_h.js";import"./breadcrumb-3sy2rATM.js";import{B as f}from"./toast-R3o93egb.js";import"./checkbox-BCNOGswC.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-CtGKW3RO.js";import"./input-BOdpfLOv.js";import"./layout-DgebEeDV.js";import"./menu-DzsHQQB5.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BvQGxf36.js";import"./tag-CoyRoRrM.js";import"./textarea-DPnzmyNM.js";import{T as a}from"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{S as n,a as x}from"./warning-tri-D1aSkfBJ.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const y=[{id:"1",label:e.jsx(a,{themeColor:"primary",children:"What is React?"}),detail:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"React is a JavaScript library for building user interfaces."}),e.jsx(f,{themeColor:"primary",variant:"soft",onClick:()=>({}),size:"small",suffix:e.jsx(x,{width:20,height:20}),children:"Button"})]})},{id:"2",label:e.jsx(a,{themeColor:"primary",children:"What are the features of React ?"}),detail:e.jsx("p",{children:"The features of React include component-based architecture, unidirectional data flow, and virtual DOM."})},{id:"3",label:e.jsx(a,{themeColor:"primary",children:"What is included in the React ecosystem ?"}),detail:e.jsx("p",{children:"The React ecosystem includes React Router, Redux, and Axios."})},{id:"4",label:e.jsx(a,{themeColor:"primary",children:"What are the advantages of React ?"}),detail:e.jsx("p",{children:"The advantages of React include component-based architecture, unidirectional data flow, and virtual DThese features provide efficiency, reusability, and better performance."})}],b=[{id:"1",label:e.jsx(a,{themeColor:"primary",children:"What is React?"}),detail:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"React is a JavaScript library for building user interfaces."}),e.jsx(f,{themeColor:"primary",variant:"soft",onClick:()=>({}),size:"small",suffix:e.jsx(x,{width:20,height:20}),children:"Button"})]})}],V={title:"Component/Accordion",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Info"],mapping:{None:null,Info:e.jsx(n,{width:20,height:20})},table:{category:"PROPS"}},borderStyle:{description:"邊框樣式",control:{type:"select",options:["solid","highlight"]},table:{category:"PROPS"}},isSmallSize:{description:"是否為小尺寸",table:{category:"PROPS"}},isOpenAll:{description:"是否全部展開",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:y,prefix:e.jsx(n,{width:20,height:20}),borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},decorators:[r=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(r,{})})],parameters:{docs:{title:"Accordion",description:{component:"折疊選單組件的呈現及說明。"}}}},i={name:"預設項目",args:{borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1},render(r){return e.jsx(t,{...r})}},o={name:"邊框樣式",argTypes:{borderStyle:{table:{disable:!0}}},args:{dataSource:b},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...r}),e.jsx(t,{...r,borderStyle:"solid"})]})}},s={name:"元件尺寸",argTypes:{isSmallSize:{table:{disable:!0}}},args:{dataSource:b,borderStyle:"solid"},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(t,{...r}),e.jsx(t,{...r,isSmallSize:!0})]})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '邊框樣式',
  argTypes: {
    borderStyle: {
      table: {
        disable: true
      }
    }
  },
  args: {
    dataSource: oneRecord
  },
  render(args) {
    return <>
        <Accordion {...args} />
        <Accordion {...args} borderStyle="solid" />
      </>;
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '元件尺寸',
  argTypes: {
    isSmallSize: {
      table: {
        disable: true
      }
    }
  },
  args: {
    dataSource: oneRecord,
    borderStyle: 'solid'
  },
  render(args) {
    return <>
        <Accordion {...args} />
        <Accordion {...args} isSmallSize />
      </>;
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const X=["Default","Border","Small"];export{o as Border,i as Default,s as Small,X as __namedExportsOrder,V as default};
