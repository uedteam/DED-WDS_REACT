import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import{a as g}from"./avatar-DPk7YKY4.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const t=a=>{const{users:l,onClick:N,className:v,...m}=a,u=()=>{console.log("click")};return e.jsx("div",{style:{display:"flex",gap:"8px"},children:l.map((r,p)=>e.jsx(g,{userName:r.userName,status:r.status,imageSrc:r.imageSrc||"",onClick:u,...m},p))})},c=t;try{t.displayName="AvatarGroup",t.__docgenInfo={description:"",displayName:"AvatarGroup",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"{ userName: string; imageSrc?: string | undefined; status: ReactNode; }[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{avatargroup.displayName="avatargroup",avatargroup.__docgenInfo={description:"",displayName:"avatargroup",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"{ userName: string; imageSrc?: string | undefined; status: ReactNode; }[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const x={title:"Design System/Module/AvatarGroup",component:c,tags:["autodocs"],argTypes:{users:{description:"使用者清單",control:{type:"object"}},className:{description:"標題樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},s={name:"搜尋輸入框",args:{users:[{userName:"Kevin Yang",status:e.jsx("div",{className:"online"})},{userName:"Amos Lee",status:e.jsx("div",{className:"online"})},{userName:"John Smith",status:e.jsx("div",{className:"online"}),imageSrc:"https://picsum.photos/320/240"}],className:"",onClick:d("onClick")},render(a){return e.jsx(c,{...a})}};var i,o,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    // 設定參數預設值
    // size: 'medium',
    // isDisabled: false,
    users: [{
      userName: 'Kevin Yang',
      status: <div className="online"></div>
      // imageSrc: 'https://randomuser.me/api/port ...',
    }, {
      userName: 'Amos Lee',
      status: <div className="online"></div>
      // imageSrc: 'https://randomuser.me/api/port ...',
    }, {
      userName: 'John Smith',
      status: <div className="online"></div>,
      imageSrc: 'https://picsum.photos/320/240'
    }],
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <AvatarGroup {...args} />;
  }
}`,...(n=(o=s.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const C=["Primary"];export{s as Primary,C as __namedExportsOrder,x as default};
