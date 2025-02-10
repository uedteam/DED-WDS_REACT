import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as o,c as s}from"./warning-tri-BY3sPlw-.js";import"./index-RYns6xqu.js";import{S as p,a as c,b as n,c as g,d}from"./user-CenQ4Y4F.js";import{S as m}from"./calendar-BCgxDPts.js";import{S as u}from"./home-49bMB0eq.js";import{i as h}from"./tooltip-B_DZq3RC.js";import{G as b,R as f,C as S}from"./grid-D9dEAlnk.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-CWp9P8za.js";import"./breadcrumb-C_ScorbY.js";import"./toast-CQAvvoEV.js";import"./title-CZRmBG9s.js";import"./index-sbqOYYIm.js";import"./checkbox-BnGhXkr7.js";import"./check-BnJBHFpS.js";import"./progress-circle-CiUtLNSM.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-ERJUwswR.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./input-BZz4m9yz.js";import"./layout-DgebEeDV.js";import"./menu-Cukdm8XK.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BREqtsMD.js";import"./tag-DMgBs9DA.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Co0kfaDY.js";const x=[{label:"Home",prefix:t.jsx(u,{width:24,height:24}),path:"/Home",order:1},{label:"User",prefix:t.jsx(p,{width:24,height:24}),path:"/User",order:2,children:[{label:"Profile",path:"/settings/profile",order:1},{label:"Account",path:"/settings/account",order:2}]},{label:"Chart",prefix:t.jsx(c,{width:24,height:24}),path:"/Chart",order:3,children:[{label:"Profile",path:"/settings/profile",order:1},{label:"Account",path:"/settings/account",order:2},{label:"Account",path:"/settings/account",order:3},{label:"Account",path:"/settings/account",order:4}]},{label:"Database",prefix:t.jsx(n,{width:24,height:24}),path:"/dashboard",order:4},{label:"Favorite",prefix:t.jsx(g,{width:24,height:24}),path:"/Favorite",order:5},{label:"Calendar",prefix:t.jsx(m,{width:24,height:24}),path:"/Calendar",order:6},{label:"Notification",prefix:t.jsx(s,{width:24,height:24}),path:"/Notification",order:7},{label:"Language",prefix:t.jsx(d,{width:24,height:24}),path:"/Language",order:8}],X={title:"Component/SideNav",component:h,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",mapping:{Blue:"#00467C",Yellow:"#F4E069",Grape:"#AB86D1",Black:"#000000"},options:["Blue","Yellow","Grape","Black"],control:{type:"select"},table:{category:"PROPS"}},logo:{description:"Logo 圖示",mapping:{SvgAuo:t.jsx(o,{width:90,height:30})},options:["SvgAuo"],control:{type:"select"},table:{category:"PROPS"}},logoSrc:{description:"Logo 圖片",table:{category:"PROPS"}},hasRWD:{description:"是否有側邊導覽",table:{category:"PROPS"}},logoLink:{description:"Logo 連結",table:{category:"PROPS"}},hasLogo:{description:"是否有 Logo",table:{category:"PROPS"}},hasSearch:{description:"是否有搜尋欄",table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"Blue",logoSrc:"",logo:t.jsx(o,{width:90,height:30}),logoLink:"https://www.auo.com",hasRWD:!1,hasLogo:!1,hasSearch:!0,dataSource:x,className:""},parameters:{docs:{label:"Side Nav",description:{component:"側邊導覽組件的呈現及說明。"}}}},e={name:"預設項目",args:{},parameters:{docs:{source:{transform(a,v){return`
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
`}}}},render(a){return t.jsx(b,{fluid:!0,children:t.jsx(f,{children:t.jsx(S,{xs:12,sm:4,md:4,children:t.jsx(h,{...a})})})})}};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const Z=["Default"];export{e as Default,Z as __namedExportsOrder,X as default};
