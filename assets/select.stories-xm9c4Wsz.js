import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{S as s}from"./tooltip-BG4rQdXm.js";import"./badge-BPltvF_h.js";import"./breadcrumb-3sy2rATM.js";import"./toast-R3o93egb.js";import"./checkbox-Cq4ng9DF.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-CtGKW3RO.js";import"./input-Dy9zdBm8.js";import"./layout-DgebEeDV.js";import"./menu-DzsHQQB5.js";import"./radio-DmdC9FLH.js";import"./status-indicator-BvQGxf36.js";import"./tag-gKTSkn4a.js";import"./textarea-r7CXvhUd.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{g as i}from"./warning-tri-D1aSkfBJ.js";import{r as d}from"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const g=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],S={SvgArrowDropDown:t.jsx(i,{})},M={title:"Component/Select",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{category:"PROPS",type:{detail:`
            interface Option {
              label: string;
              value: string | number;
            }
          `}}},suffix:{description:"後綴圖示",options:["SvgArrowDropDown"],mapping:S,table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},value:{description:"值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選擇變更事件",table:{category:"EVENTS"}}},args:{dataSource:g,placeholder:"Select",value:"",suffix:t.jsx(i,{width:18,height:18}),isDisabled:!1,className:""},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render:function(p){const[l,c]=d.useState(""),m=o=>{u("onChange")(o),c(o)};return t.jsx(s,{...p,value:l,onChange:m})}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function (args) {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const handleChange = (value: string | number) => {
      action('onChange')(value);
      setSelectedValue(value);
    };
    return <Select {...args} value={selectedValue} onChange={handleChange} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["Default"];export{e as Default,Q as __namedExportsOrder,M as default};
