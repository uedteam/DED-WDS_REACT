import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-ChHd1ABr.js";import{M as n}from"./menu-DNu1tztI.js";import{a as r}from"./avatar-B7gRq6pi.js";import{S as t}from"./arrow_down-DA-sWbvp.js";import"./index-RYns6xqu.js";import"./search-l0LQI2PU.js";import"./offline-Bm72BRFT.js";const w={title:"Design System/Module/Menu",component:n,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},s={name:"搜尋輸入框",args:{options:[{prefix:e.jsx(r,{size:"xsmall",shape:"circle",userName:"test"}),content:"選項一",suffix:e.jsx(t,{width:"24px",height:"24px"})},{prefix:e.jsx(r,{size:"xsmall",shape:"circle",userName:"test"}),content:"選項二",suffix:e.jsx(t,{width:"24px",height:"24px"})},{prefix:e.jsx(r,{size:"xsmall",shape:"circle",userName:"test"}),content:"選項三",suffix:e.jsx(t,{width:"24px",height:"24px"})}],className:"",onClick:c("onClick")},render(p){return e.jsx(n,{...p})}};var i,a,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    options: [{
      prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
      content: '選項一',
      suffix: <ArrowDownIcon width={'24px'} height={'24px'} />
    }, {
      prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
      content: '選項二',
      suffix: <ArrowDownIcon width={'24px'} height={'24px'} />
    }, {
      prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
      content: '選項三',
      suffix: <ArrowDownIcon width={'24px'} height={'24px'} />
    }],
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <Menu {...args} />;
  }
}`,...(o=(a=s.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const j=["Primary"];export{s as Primary,j as __namedExportsOrder,w as default};
