import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as m}from"./index-RYns6xqu.js";const u=({min:e,max:a,step:l,onChange:o})=>{const[n,h]=m.useState(e),[t,y]=m.useState(a),x=d=>{const s=Math.min(Number(d.target.value),t-l);h(s),o(s,t)},b=d=>{const s=Math.max(Number(d.target.value),n+l);y(s),o(n,s)};return r.jsxs("div",{className:"range",children:[r.jsx("input",{type:"range",min:e,max:a,step:l,value:n,onChange:x,className:"thumb thumb-left"}),r.jsx("input",{type:"range",min:e,max:a,step:l,value:t,onChange:b,className:"thumb thumb-right"}),r.jsxs("div",{className:"slider",children:[r.jsx("div",{className:"slider-track",style:{left:`${(n-e)/(a-e)*100}%`,right:`${100-(t-e)/(a-e)*100}%`}}),r.jsx("div",{className:"slider-range",style:{left:`${(n-e)/(a-e)*100}%`,right:`${100-(t-e)/(a-e)*100}%`}}),r.jsx("div",{className:"slider-left-value",children:n}),r.jsx("div",{className:"slider-right-value",children:t})]})]})};try{u.displayName="Slider",u.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(minValue: number, maxValue: number) => void"}}}}}catch{}try{slider.displayName="slider",slider.__docgenInfo={description:"",displayName:"slider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(minValue: number, maxValue: number) => void"}}}}}catch{}const v={title:"Design System/Module/Slider",component:u,tags:["autodocs"],argTypes:{min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},onChange:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},i={name:"搜尋輸入框",args:{min:0,max:100,step:1},render(e){return r.jsx(u,{...e})}};var c,p,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    // 設定參數預設值
    // size: 'medium',
    // isDisabled: false,
    // className: '',
    min: 0,
    max: 100,
    step: 1
    // onChange: action('onChange'),
  },
  render(args) {
    return <Slider {...args} />;
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const V=["Primary"];export{i as Primary,V as __namedExportsOrder,v as default};
