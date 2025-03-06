import{j as e}from"./jsx-runtime-DEdD30eg.js";import{c as l}from"./warning-tri-aIaTAFys.js";import"./index-RYns6xqu.js";import{S as h,a as p,b as c,c as g,d as n,e as d}from"./user-HcVXg3Zw.js";import{S as m}from"./home-49bMB0eq.js";import{m as s}from"./dashboard-kgFD7tFH.js";import{G as b,R as u,C as f}from"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import"./string-BqrfsRv8.js";import"./badge-BPltvF_h.js";import"./breadcrumb-CEZkuNAx.js";import"./toast-CZM79-c6.js";import"./close-o-4V2u0k.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-BmwS-2If.js";import"./check-BnJBHFpS.js";import"./divider-DxMrCkxg.js";import"./image-CtGKW3RO.js";import"./input-CzHjBFtL.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-CT__RalH.js";import"./textarea-B3sPnM2u.js";import"./toggle-Ck5Sa1oo.js";import"./menu-DHam_mh4.js";import"./auth-flow-J6yiVpO1.js";const S=[{label:"Home",prefix:e.jsx(m,{width:24,height:24}),path:"/Home",order:1},{label:"User",prefix:e.jsx(h,{width:24,height:24}),path:"/User",order:2,children:[{label:"Profile",path:"/settings/profile",order:1},{label:"Account",path:"/settings/account",order:2}]},{label:"Chart",prefix:e.jsx(p,{width:24,height:24}),path:"/Chart",order:3,children:[{label:"Profile",path:"/settings/profile",order:1},{label:"Account",path:"/settings/account",order:2},{label:"Account",path:"/settings/account",order:3},{label:"Account",path:"/settings/account",order:4}]},{label:"Database",prefix:e.jsx(c,{width:24,height:24}),path:"/dashboard",order:4},{label:"Favorite",prefix:e.jsx(g,{width:24,height:24}),path:"/Favorite",order:5},{label:"Calendar",prefix:e.jsx(n,{width:24,height:24}),path:"/Calendar",order:6},{label:"Notification",prefix:e.jsx(l,{width:24,height:24}),path:"/Notification",order:7},{label:"Language",prefix:e.jsx(d,{width:24,height:24}),path:"/Language",order:8}],Q={title:"Component/SideNav",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",mapping:{Blue:"#00467C",Yellow:"#F4E069",Grape:"#AB86D1",Black:"#000000"},options:["Blue","Yellow","Grape","Black"],control:{type:"select"},table:{category:"PROPS"}},mobileLogoSrc:{description:"手機 Logo 圖片",table:{category:"PROPS"}},desktopLogoSrc:{description:"桌機 Logo 圖片",table:{category:"PROPS"}},hasRWD:{description:"是否有側邊導覽",table:{category:"PROPS"}},logoLink:{description:"Logo 連結",table:{category:"PROPS"}},hasLogo:{description:"是否有 Logo",table:{category:"PROPS"}},hasSearch:{description:"是否有搜尋欄",table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"Blue",mobileLogoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",desktopLogoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",logoLink:"https://www.auo.com",hasLogo:!1,hasRWD:!0,hasSearch:!0,dataSource:S,className:""},parameters:{docs:{label:"Side Nav",description:{component:"側邊導覽組件的呈現及說明。"}}}},t={name:"預設項目",args:{},parameters:{docs:{source:{transform(a,v){return`
<SideNav className="" 
dataSource={[
    {
      path: '/Home',
      prefix: <SvgHome height={24} width={24}/>,
      label: 'Home'
    },
    {
      children: [
        {
          path: '/settings/profile',
          label: 'Profile'
        },
        {
          path: '/settings/account',
          label: 'Account'
        }
      ],
      path: '/User',
      prefix: <SvgUser height={24} width={24}/>,
      label: 'User'
    },
    {
      children: [
        {
          path: '/settings/profile',
          label: 'Profile'
        },
        {
          path: '/settings/account',
          label: 'Account'
        },
        {
          path: '/settings/account',
          label: 'Account'
        },
        {
          path: '/settings/account',
          label: 'Account'
        }
      ],
      path: '/Chart',
      prefix: <SvgBarChart height={24} width={24}/>,
      label: 'Chart'
    },
    {
      path: '/dashboard',
      prefix: <SvgDatabase height={24} width={24}/>,
      label: 'Database'
    },
    {
      path: '/Favorite',
      prefix: <SvgFavorite height={24} width={24}/>,
      label: 'Favorite'
    },
    {
      path: '/Calendar',
      prefix: <SvgCalendar height={24} width={24}/>,
      label: 'Calendar'
    },
    {
      path: '/Notification',
      prefix: <SvgNotification height={24} width={24}/>,
      label: 'Notification'
    },
    {
      path: '/Language',
      prefix: <SvgLanguage height={24} width={24}/>,
      label: 'Language'
    }
  ]}
  hasSearch
  desktopLogoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg"
  mobileLogoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
  logoLink="https://www.auo.com"
  themeColor="#00467C"/>
`}}}},render(a){return e.jsx(b,{fluid:!0,children:e.jsx(u,{children:e.jsx(f,{xs:12,sm:4,md:4,children:e.jsx(s,{...a})})})})}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<SideNav className="" 
dataSource={[
    {
      path: '/Home',
      prefix: <SvgHome height={24} width={24}/>,
      label: 'Home'
    },
    {
      children: [
        {
          path: '/settings/profile',
          label: 'Profile'
        },
        {
          path: '/settings/account',
          label: 'Account'
        }
      ],
      path: '/User',
      prefix: <SvgUser height={24} width={24}/>,
      label: 'User'
    },
    {
      children: [
        {
          path: '/settings/profile',
          label: 'Profile'
        },
        {
          path: '/settings/account',
          label: 'Account'
        },
        {
          path: '/settings/account',
          label: 'Account'
        },
        {
          path: '/settings/account',
          label: 'Account'
        }
      ],
      path: '/Chart',
      prefix: <SvgBarChart height={24} width={24}/>,
      label: 'Chart'
    },
    {
      path: '/dashboard',
      prefix: <SvgDatabase height={24} width={24}/>,
      label: 'Database'
    },
    {
      path: '/Favorite',
      prefix: <SvgFavorite height={24} width={24}/>,
      label: 'Favorite'
    },
    {
      path: '/Calendar',
      prefix: <SvgCalendar height={24} width={24}/>,
      label: 'Calendar'
    },
    {
      path: '/Notification',
      prefix: <SvgNotification height={24} width={24}/>,
      label: 'Notification'
    },
    {
      path: '/Language',
      prefix: <SvgLanguage height={24} width={24}/>,
      label: 'Language'
    }
  ]}
  hasSearch
  desktopLogoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg"
  mobileLogoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
  logoLink="https://www.auo.com"
  themeColor="#00467C"/>
\`;
        }
      }
    }
  },
  render(args) {
    return <Grid fluid>
        <Row>
          <Column xs={12} sm={4} md={4}>
            <SideNav {...args} />
          </Column>
        </Row>
      </Grid>;
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,Q as default};
