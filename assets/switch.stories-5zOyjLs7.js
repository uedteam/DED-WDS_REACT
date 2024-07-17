import{j as a}from"./jsx-dev-runtime-uiaR1PCM.js";import{r as N}from"./index-CZo2m81c.js";const o=e=>`switch-${e} `,n=e=>e?"switch-on":"switch-off",l=e=>e?"switch-label-on":"switch-label-off";try{o.displayName="getThemeClass",o.__docgenInfo={description:"",displayName:"getThemeClass",props:{}}}catch{}try{n.displayName="getPositionClass",n.__docgenInfo={description:"",displayName:"getPositionClass",props:{}}}catch{}try{l.displayName="getLabelPositionClass",l.__docgenInfo={description:"",displayName:"getLabelPositionClass",props:{}}}catch{}function i(e){const{themeColor:h="",isChecked:p=!1,isDisabled:s=!1,checkChildren:C="on",unCheckChildren:f="off",onChange:c,className:y,..._}=e,[r,b]=N.useState(p);return a.jsxDEV("div",{..._,className:`switch ${y||o(h)} ${n(r)} ${s?"switch-disable":""}`,onClick:k=>{b(g=>!g),c&&c(!r)},children:[a.jsxDEV("div",{className:`switch-thumb ${s?"switch-label-disable":""}`},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.tsx",lineNumber:50,columnNumber:7},this),a.jsxDEV("label",{className:`switch-label ${l(r)} ${s?"switch-label-disable":""}`,children:s?"":r?C:f},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.tsx",lineNumber:53,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.tsx",lineNumber:40,columnNumber:5},this)}try{i.displayName="Switch",i.__docgenInfo={description:"",displayName:"Switch",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},checkChildren:{defaultValue:null,description:"",name:"checkChildren",required:!1,type:{name:"ReactNode"}},unCheckChildren:{defaultValue:null,description:"",name:"unCheckChildren",required:!1,type:{name:"ReactNode"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Design System/Atoms/Switch",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},checkChildren:{description:"開啟文字",control:{type:"text"}},unCheckChildren:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onChange:{description:"開關事件",action:"onChange"},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},t={name:"標題",args:{themeColor:"primary",isChecked:!1,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},render(e){return a.jsxDEV(i,{...e},void 0,!1,{fileName:"/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.stories.tsx",lineNumber:88,columnNumber:12},this)}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '標題',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: ''
  },
  render(args) {
    return <Switch {...args} />;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Primary"];export{t as Primary,x as __namedExportsOrder,v as default};
