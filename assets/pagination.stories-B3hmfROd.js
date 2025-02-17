import{j as g}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import{P as o}from"./tooltip-D0sesp37.js";import"./index-RYns6xqu.js";import"./warning-tri-D1aSkfBJ.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-BPltvF_h.js";import"./breadcrumb-CejQTDj4.js";import"./toast-DROsf-Rd.js";import"./close-o-4V2u0k.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-Cq4ng9DF.js";import"./check-BnJBHFpS.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-CBKQd-QM.js";import"./layout-DgebEeDV.js";import"./menu-DKPIbTp-.js";import"./radio-DmdC9FLH.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-CoyRoRrM.js";import"./textarea-r7CXvhUd.js";import"./toggle-Ck5Sa1oo.js";const H={title:"Component/Pagination",component:o,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",table:{category:"PROPS"}},currentPage:{description:"目前頁數",control:{type:"number",min:1,max:100,step:1},table:{category:"PROPS"}},itemsPerPageOptions:{description:"每頁顯示筆數選項",table:{category:"PROPS"}},defaultItemsPerPage:{description:"預設每頁顯示筆數",table:{category:"PROPS"}},isShowPageInfo:{description:"是否顯示頁數資訊",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onPageChange:{description:"頁碼變更事件",table:{category:"EVENTS"}}},args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:"",onPageChange:c("onPageChange")},parameters:{docs:{title:"頁碼",description:{component:"頁碼組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render(r){return g.jsx(o,{...r})}},t={name:"顯示資訊",argTypes:{isShowPageInfo:{table:{disable:!0}}},args:{},parameters:{docs:{source:{transform(r,P){return"<Pagination {...args} isShowPageInfo />"}}}},render(r){return g.jsx(o,{...r,isShowPageInfo:!0})}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const J=["Default","Info"];export{e as Default,t as Info,J as __namedExportsOrder,H as default};
