import{j as t}from"./jsx-runtime-DEdD30eg.js";import{c as l}from"./warning-tri-D1aSkfBJ.js";import"./index-RYns6xqu.js";import{S as h,a as p,b as c,c as g,d as n}from"./user-CenQ4Y4F.js";import{S as d}from"./calendar-BCgxDPts.js";import{S as m}from"./home-49bMB0eq.js";import{i as s}from"./tooltip-Df09q_W1.js";import{G as u,R as b,C as f}from"./grid-D9dEAlnk.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-BPltvF_h.js";import"./breadcrumb-BdVqNg6a.js";import"./toast-CGCUuF-E.js";import"./close-o-4V2u0k.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-BCNOGswC.js";import"./check-BnJBHFpS.js";import"./progress-circle-E3pfpkaU.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./input-ByamwSew.js";import"./layout-DgebEeDV.js";import"./menu-Be5adDqx.js";import"./radio-CMOPLxLt.js";import"./status-indicator-Cbvkr_-o.js";import"./tag-CoyRoRrM.js";import"./textarea-DPnzmyNM.js";import"./toggle-Ck5Sa1oo.js";const S=[{label:"Home",prefix:t.jsx(m,{width:24,height:24}),path:"/Home",order:1},{label:"User",prefix:t.jsx(h,{width:24,height:24}),path:"/User",order:2,children:[{label:"Profile",path:"/settings/profile",order:1},{label:"Account",path:"/settings/account",order:2}]},{label:"Chart",prefix:t.jsx(p,{width:24,height:24}),path:"/Chart",order:3,children:[{label:"Profile",path:"/settings/profile",order:1},{label:"Account",path:"/settings/account",order:2},{label:"Account",path:"/settings/account",order:3},{label:"Account",path:"/settings/account",order:4}]},{label:"Database",prefix:t.jsx(c,{width:24,height:24}),path:"/dashboard",order:4},{label:"Favorite",prefix:t.jsx(g,{width:24,height:24}),path:"/Favorite",order:5},{label:"Calendar",prefix:t.jsx(d,{width:24,height:24}),path:"/Calendar",order:6},{label:"Notification",prefix:t.jsx(l,{width:24,height:24}),path:"/Notification",order:7},{label:"Language",prefix:t.jsx(n,{width:24,height:24}),path:"/Language",order:8}],X={title:"Component/SideNav",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",mapping:{Blue:"#00467C",Yellow:"#F4E069",Grape:"#AB86D1",Black:"#000000"},options:["Blue","Yellow","Grape","Black"],control:{type:"select"},table:{category:"PROPS"}},mobileLogoSrc:{description:"手機 Logo 圖片",table:{category:"PROPS"}},desktopLogoSrc:{description:"桌機 Logo 圖片",table:{category:"PROPS"}},hasRWD:{description:"是否有側邊導覽",table:{category:"PROPS"}},logoLink:{description:"Logo 連結",table:{category:"PROPS"}},hasLogo:{description:"是否有 Logo",table:{category:"PROPS"}},hasSearch:{description:"是否有搜尋欄",table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"Blue",mobileLogoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",desktopLogoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",logoLink:"https://www.auo.com",hasLogo:!1,hasRWD:!0,hasSearch:!0,dataSource:S,className:""},parameters:{docs:{label:"Side Nav",description:{component:"側邊導覽組件的呈現及說明。"}}}},e={name:"預設項目",args:{},parameters:{docs:{source:{transform(a,x){return`
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
  logo={<SvgAuo height={30} width={90}/>}
  logoLink="https://www.auo.com"
  themeColor="#00467C"/>
`}}}},render(a){return t.jsx(u,{fluid:!0,children:t.jsx(b,{children:t.jsx(f,{xs:12,sm:4,md:4,children:t.jsx(s,{...a})})})})}};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  logo={<SvgAuo height={30} width={90}/>}
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Z=["Default"];export{e as Default,Z as __namedExportsOrder,X as default};
