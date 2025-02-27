import{j as r}from"./jsx-runtime-DEdD30eg.js";import{C as t}from"./tooltip-DQ5RkWsa.js";import{G as l,R as m,C as n}from"./grid-D9dEAlnk.js";import"./index-RYns6xqu.js";import"./warning-tri-D1aSkfBJ.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-BPltvF_h.js";import"./breadcrumb-BT-H3bo-.js";import"./toast-BhiYnD6v.js";import"./close-o-4V2u0k.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-BHasAwS-.js";import"./check-BnJBHFpS.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./input-CMbRWpBm.js";import"./layout-DgebEeDV.js";import"./menu-Bywynte6.js";import"./radio-CfSeqhQ5.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-gKTSkn4a.js";import"./textarea-r7CXvhUd.js";import"./toggle-Ck5Sa1oo.js";const X={title:"Component/Card-Simple",component:t,tags:["autodocs"],argTypes:{layout:{description:"佈局",control:{type:"select",options:["vertical","horizontal"]},table:{category:"PROPS"}},hasBorder:{description:"是否有邊框",table:{category:"PROPS"}},imgSrc:{description:"圖片來源",table:{category:"PROPS"}},buttonName:{description:"按鈕名稱",table:{category:"PROPS"}},align:{description:"對齊方式",control:{type:"select",options:["center","left","right"]},table:{category:"PROPS"}},title:{description:"卡片標題",table:{category:"PROPS"}},subtitle:{description:"副標題",table:{category:"PROPS"}},description:{description:"描述",table:{category:"PROPS"}}},parameters:{docs:{title:"Card",description:{component:"卡片組件的呈現及說明。"}}},args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."}},a={name:"預設項目",args:{},render:function(e){return r.jsx(l,{children:r.jsx(m,{hasGap:!0,children:r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e})})})})}},o={name:"按鈕對齊方式",argTypes:{align:{table:{disable:!0}}},args:{},render:function(e){return r.jsx(l,{children:r.jsxs(m,{children:[r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e,align:"left"})}),r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e,align:"center"})}),r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e,align:"right"})})]})})}},s={name:"垂直佈局",argTypes:{layout:{table:{disable:!0}}},args:{},render:function(e){return r.jsx(l,{children:r.jsxs(m,{hasGap:!0,children:[r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})}),r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})}),r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})}),r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})})]})})}},i={name:"水平佈局",argTypes:{layout:{table:{disable:!0}}},args:{},render:function(e){return r.jsx(l,{children:r.jsxs(m,{children:[r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})}),r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})}),r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})}),r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})})]})})}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function (args) {
    return <Grid>
        <Row hasGap>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args}></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '按鈕對齊方式',
  argTypes: {
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render: function (args) {
    return <Grid>
        <Row>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="left"></CardSimple>
          </Column>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="center"></CardSimple>
          </Column>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="right"></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,h,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '垂直佈局',
  argTypes: {
    layout: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render: function (args) {
    return <Grid>
        <Row hasGap>
          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,j,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '水平佈局',
  argTypes: {
    layout: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render: function (args) {
    return <Grid>
        <Row>
          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const Y=["Default","Align","Horizontal","Vertical"];export{o as Align,a as Default,s as Horizontal,i as Vertical,Y as __namedExportsOrder,X as default};
