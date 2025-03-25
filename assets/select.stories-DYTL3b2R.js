import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{b as s}from"./dashboard-CS11yVxt.js";import"./badge-BPltvF_h.js";import"./breadcrumb-CPMUpcum.js";import"./toast-DpTAaaGy.js";import"./checkbox-D6RDPsQd.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./auth-flow-DDng6RJs.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-Biwxsj_U.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-B_exsVsy.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import{h as i}from"./warning-tri-BnRwNKC6.js";import{r as g}from"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./string-BqrfsRv8.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const d=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],S={SvgArrowDropDown:t.jsx(i,{})},J={title:"Component/Select",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{category:"PROPS",type:{detail:`
            interface Option {
              label: string;
              value: string | number;
            }
          `}}},suffix:{description:"後綴圖示",options:["SvgArrowDropDown"],mapping:S,table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},value:{description:"值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選擇變更事件",table:{category:"EVENTS"}}},args:{dataSource:d,placeholder:"Select",value:"",suffix:t.jsx(i,{width:18,height:18}),isDisabled:!1,className:""},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render:function(l){const[p,c]=g.useState(""),m=o=>{u("onChange")(o.target.value),c(o.target.value)};return t.jsx(s,{...l,value:p,onChange:m})}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function (args) {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      action('onChange')(e.target.value);
      setSelectedValue(e.target.value);
    };
    return <Select {...args} value={selectedValue} onChange={handleChange} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const K=["Default"];export{e as Default,K as __namedExportsOrder,J as default};
