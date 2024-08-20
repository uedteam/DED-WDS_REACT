import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-454WOBUV-ChHd1ABr.js";import"./title-D2ajyWBg.js";import{L as r}from"./styled-DzJQOY1U.js";import"./input-Bsv9jzlY.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-CILhnVxj.js";import"./breadcrumb-BT2wGwTD.js";import"./avatar-ZhERyiQI.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./index-sbqOYYIm.js";import"./search-ze-2lSrK.js";import"./arrow_down-CDz-ClYA.js";import"./lock-DKT4ZBgT.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";const I={title:"Design System/Module/List",component:r,tags:["autodocs"],argTypes:{isMenu:{description:"是否為選單",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},e={name:"列表清單",args:{options:[{content:{label:"選項一",value:"option1"}},{content:{label:"選項二",value:"option2"}},{content:{label:"選項三",value:"option3"}}],className:"",onSelect:m("onSelect")},render(n){return o.jsx("div",{style:{width:"200px"},children:o.jsx(r,{...n})})}},t={name:"功能選單",args:{isMenu:!0,options:[{content:{label:"選項一",value:"option1"}},{content:{label:"選項二",value:"option2"}},{content:{label:"選項三",value:"option3"}}],className:"",onSelect:m("onSelect")},render(n){return o.jsx("div",{style:{width:"200px"},children:o.jsx(r,{...n})})}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    return <div style={{
      width: '200px'
    }}>
        <List {...args} />
      </div>;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    return <div style={{
      width: '200px'
    }}>
        <List {...args} />
      </div>;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const _=["Primary","Menu"];export{t as Menu,e as Primary,_ as __namedExportsOrder,I as default};
