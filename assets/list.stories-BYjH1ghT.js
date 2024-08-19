import{j as c}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import"./button-BjY3L4Jk.js";import"./input-Cj6cyhAG.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-CILhnVxj.js";import{L as n}from"./styled-DydUh5ud.js";import"./breadcrumb-BT2wGwTD.js";import"./avatar-ZhERyiQI.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./search-ze-2lSrK.js";import"./arrow_down-CDz-ClYA.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./lock-DKT4ZBgT.js";import"./offline-Ddz6ifNG.js";const _={title:"Design System/Module/List",component:n,tags:["autodocs"],argTypes:{isMenu:{description:"是否為選單",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},e={name:"列表清單",args:{options:[{content:{label:"選項一",value:"option1"}},{content:{label:"選項二",value:"option2"}},{content:{label:"選項三",value:"option3"}}],className:"",onSelect:m("onSelect")},render(o){return c.jsx(n,{...o})}},t={name:"功能選單",args:{isMenu:!0,options:[{content:{label:"選項一",value:"option1"}},{content:{label:"選項二",value:"option2"}},{content:{label:"選項三",value:"option3"}}],className:"",onSelect:m("onSelect")},render(o){return c.jsx(n,{...o})}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '列表清單',
  args: {
    /* 設定參數預設值 */
    // isDisabled: false,
    options: [{
      content: {
        label: '選項一',
        value: 'option1'
      }
    }, {
      content: {
        label: '選項二',
        value: 'option2'
      }
    }, {
      content: {
        label: '選項三',
        value: 'option3'
      }
    }],
    className: '',
    onSelect: action('onSelect')
  },
  render(args) {
    return <List {...args} />;
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '功能選單',
  args: {
    /* 設定參數預設值 */
    // isDisabled: false,
    isMenu: true,
    options: [{
      // prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
      content: {
        label: '選項一',
        value: 'option1'
        // href: 'https://google.com',
      }
      // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
    }, {
      // prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
      content: {
        label: '選項二',
        value: 'option2'
        // href: 'https://google.com',
      }
      // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
    }, {
      // prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
      content: {
        label: '選項三',
        value: 'option3'
        // href: 'https://google.com',
      }
      // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
    }],
    className: '',
    onSelect: action('onSelect')
  },
  render(args) {
    return <List {...args} />;
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const E=["Primary","Menu"];export{t as Menu,e as Primary,E as __namedExportsOrder,_ as default};
