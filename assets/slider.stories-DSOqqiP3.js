import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as N}from"./chunk-454WOBUV-ChHd1ABr.js";import{r as u}from"./index-RYns6xqu.js";const m=({min:e,max:n,step:i,onChange:p})=>{const[r,h]=u.useState(e),[a,x]=u.useState(n),c=u.useRef(null),d=u.useRef(null);u.useEffect(()=>{if(c.current&&d.current){const s=(r-e)/(n-e)*100,l=(a-e)/(n-e)*100;c.current.style.left=`${s}%`,d.current.style.left=`${l}%`}p(r,a)},[r,a,e,n,p]);const b=s=>{const l=Math.min(Number(s.target.value),a-i);h(l)},_=s=>{const l=Math.max(Number(s.target.value),r+i);x(l)};return t.jsxs("div",{className:"slider-container",children:[t.jsx("input",{type:"range",min:e,max:n,step:i,value:r,onChange:b,ref:c,className:"thumb thumb-min"}),t.jsx("input",{type:"range",min:e,max:n,step:i,value:a,onChange:_,ref:d,className:"thumb thumb-max"}),t.jsx("div",{className:"slider-track"}),t.jsx("div",{className:"slider-range",style:{left:`${(r-e)/(n-e)*100}%`,width:`${(a-r)/(n-e)*100}%`}})]})};try{m.displayName="Slider",m.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(minValue: number, maxValue: number) => void"}}}}}catch{}try{slider.displayName="slider",slider.__docgenInfo={description:"",displayName:"slider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(minValue: number, maxValue: number) => void"}}}}}catch{}const q={title:"Design System/Module/Slider",component:m,tags:["autodocs"],argTypes:{min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},className:{description:"標題樣式",control:{type:"text"}},onChange:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},o={name:"搜尋輸入框",args:{className:"",min:0,max:100,step:1,onChange:N("onChange")},render(e){return t.jsx(m,{...e})}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    // 設定參數預設值
    // size: 'medium',
    // isDisabled: false,
    className: '',
    min: 0,
    max: 100,
    step: 1,
    onChange: action('onChange')
  },
  render(args) {
    return <Slider {...args} />;
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const S=["Primary"];export{o as Primary,S as __namedExportsOrder,q as default};
