import{j as n}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-454WOBUV-ChHd1ABr.js";import{S as i}from"./tooltip-De9V9jL4.js";import"./badge-dQZV2GFR.js";import"./breadcrumb-CLxKWEQG.js";import"./toast-B1v6Pb6a.js";import"./checkbox-v5UYg36H.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-BBo0NhWK.js";import"./layout-DgebEeDV.js";import"./menu-CmEmp1uq.js";import"./radio-CMOPLxLt.js";import"./status-indicator-CzwH5rqC.js";import"./tag-Citp8NFt.js";import"./textarea-DPnzmyNM.js";import"./title-Cl2MDiva.js";import"./toggle-Co0kfaDY.js";import{g as u}from"./warning-tri-BJ-xvgh8.js";import{r as d}from"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./close-o-4V2u0k.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const g=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],K={title:"Component/Select",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{category:"PROPS",type:{detail:`
            interface Option {
              label: string;
              value: string | number;
            }
          `}}},suffix:{description:"後綴圖示",table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},value:{description:"值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選擇變更事件",table:{category:"EVENTS"}}},args:{dataSource:g,placeholder:"Select",value:"",suffix:n.jsx(u,{width:18,height:18}),isDisabled:!1,className:""},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render:function(s){const[l,p]=d.useState(""),c=t=>{m("onChange")(t),p(t)};return n.jsx(i,{...s,value:l,onChange:c})}};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,K as default};
