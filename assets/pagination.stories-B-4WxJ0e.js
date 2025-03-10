import{j as g}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-CM0pFb8Z.js";import{P as o}from"./dashboard-BN7uNLRv.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-aIaTAFys.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./string-BqrfsRv8.js";import"./badge-dQZV2GFR.js";import"./breadcrumb-C-FBoaba.js";import"./toast-jwbKr4Oe.js";import"./close-o-4V2u0k.js";import"./title-Cl2MDiva.js";import"./index-sbqOYYIm.js";import"./checkbox-B0KnDoZ3.js";import"./check-BnJBHFpS.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-xlCgWV6E.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-DJ6IV6nG.js";import"./textarea-B3sPnM2u.js";import"./toggle-Co0kfaDY.js";import"./menu-kGy3ruG_.js";import"./auth-flow-B5dvVafu.js";const K={title:"Component/Pagination",component:o,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",table:{category:"PROPS"}},currentPage:{description:"目前頁數",control:{type:"number",min:1,max:100,step:1},table:{category:"PROPS"}},itemsPerPageOptions:{description:"每頁顯示筆數選項",table:{category:"PROPS"}},defaultItemsPerPage:{description:"預設每頁顯示筆數",table:{category:"PROPS"}},isShowPageInfo:{description:"是否顯示頁數資訊",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onPageChange:{description:"頁碼變更事件",table:{category:"EVENTS"}}},args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:"",onPageChange:c("onPageChange")},parameters:{docs:{title:"頁碼",description:{component:"頁碼組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render(r){return g.jsx(o,{...r})}},t={name:"顯示資訊",argTypes:{isShowPageInfo:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,P){return"<Pagination {...args} isShowPageInfo />"}}}},render(r){return g.jsx(o,{...r,isShowPageInfo:!0})}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Pagination {...args} />;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '顯示資訊',
  argTypes: {
    isShowPageInfo: {
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
          return \`<Pagination {...args} isShowPageInfo />\`;
        }
      }
    }
  },
  render(args) {
    return <Pagination {...args} isShowPageInfo />;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["Default","Info"];export{e as Default,t as Info,L as __namedExportsOrder,K as default};
