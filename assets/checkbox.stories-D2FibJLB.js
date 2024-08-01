import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{S as _}from"./check-BnJBHFpS.js";const d=(e,n)=>`checkbox-${e}-${n} `,m=e=>e==="small"?"input-small":e==="large"?"input-large":"input-medium";try{m.displayName="getSizeClass",m.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const s=e=>{const{themeColor:n="primary",className:y,options:f=[],direction:x="row",value:u=[],onChange:l,...b}=e,[o,c]=p.useState([]);return p.useEffect(()=>{c(u||[])},[u]),r.jsx("div",{className:`checkbox-container ${x==="row"?"checkbox-container-row":"checkbox-container-column"}`,children:f.map(a=>r.jsxs("label",{htmlFor:a.value,className:`checkbox ${y}`,children:[r.jsx("input",{...b,className:"checkbox-input",id:a.value,value:a.value,onChange:C=>C.target.checked?(c([...o,a.value]),l&&l([...o,a.value])):(c(o.filter(i=>i!==a.value)),l&&l(o.filter(i=>i!==a.value))),name:"option",type:"checkbox"}),o.includes(a.value)?r.jsx("div",{className:`checkbox-icon ${d("checked",n)}`,children:r.jsx(_,{})}):r.jsx("div",{className:`checkbox-icon ${d("unchecked",n)}`}),r.jsx("span",{className:"checkbox-text",children:a.label})]},a.value))})};try{s.displayName="Checkbox",s.__docgenInfo={description:"",displayName:"Checkbox",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; }[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}}}catch{}try{checkbox.displayName="checkbox",checkbox.__docgenInfo={description:"",displayName:"checkbox",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; }[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}}}catch{}const q={title:"Design System/Atoms/Checkbox",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},className:{description:"標題樣式",control:{type:"text"}},options:{description:"選項",control:{type:"object"}},direction:{description:"方向",options:["row","column"],control:{type:"radio",options:["row","column"]}},value:{description:"選中的選項",control:{type:"object"}},onChange:{description:"選擇選項後的事件",action:"onChange"}},args:{direction:"row",themeColor:"primary",value:""},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},t={name:"標準 checkbox",args:{className:"",options:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],value:["option2"]},render(e){return r.jsx(s,{...e,onChange:n=>console.log(n)})}};var v,h,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '標準 checkbox',
  args: {
    className: '',
    options: [{
      label: '選項一',
      value: 'option1'
    }, {
      label: '選項二',
      value: 'option2'
    }, {
      label: '選項三',
      value: 'option3'
    }],
    value: ['option2']
  },
  render(args) {
    return <Checkbox {...args} onChange={value => console.log(value)} />;
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const w=["Primary"];export{t as Primary,w as __namedExportsOrder,q as default};