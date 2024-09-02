import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as s}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{D as i}from"./styled-D1uTOmsp.js";import"./input-vZVoMv7z.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-CILhnVxj.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-ZhERyiQI.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./search-ze-2lSrK.js";import"./arrow_down-CDz-ClYA.js";import"./lock-DKT4ZBgT.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const k={title:"Design System/Module/Dropdown",component:i,tags:["autodocs"],argTypes:{placement:{description:"下拉選單位置",control:{type:"select",options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]}},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},t={name:"搜尋輸入框",args:{options:[{content:{label:"選項一",value:"option1"}},{content:{label:"選項二",value:"option2"}},{content:{label:"選項三",value:"option3"}}],placement:"bottom",className:"",onSelect:s("onClick")},render(p){return o.jsx("div",{style:{width:"300px"},children:o.jsx(i,{...p})})}};var n,e,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    options: [{
      content: {
        label: '選項一',
        value: 'option1'
        // href: 'https://google.com',
      }
    }, {
      content: {
        label: '選項二',
        value: 'option2'
        // href: 'https://google.com',
      }
    }, {
      content: {
        label: '選項三',
        value: 'option3'
        // href: 'https://google.com',
      }
    }],
    placement: 'bottom',
    /* 設定參數預設值 */
    // isDisabled: false,
    className: '',
    onSelect: action('onClick')
  },
  render(args) {
    return <div style={{
      width: '300px'
    }}>
        <Dropdown {...args} />
      </div>;
  }
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const C=["Primary"];export{t as Primary,C as __namedExportsOrder,k as default};
