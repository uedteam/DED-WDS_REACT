import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as u,r as V}from"./index-RYns6xqu.js";import{a as f}from"./avatar-Cag5b3-h.js";import"./title-DrQUsPis.js";import{B as j}from"./button-DpmRqYRM.js";import{I as z}from"./input-D6oNhTLV.js";import"./textarea-CUj1LfcX.js";import"./toggle-D9OGgwI9.js";import"./radio-CW7ydt8x.js";import"./breadcrumb-BT2wGwTD.js";import{a as q}from"./menu-DNu1tztI.js";import{S as A,a as b,b as L}from"./lock-BX1EjnP_.js";const P=(e,t)=>{const s=e.slice(0,t),i=e.slice(t);return{currList:s,restList:i}},h=e=>e==="small"?"input-group-small":e==="large"?"input-group-large":"input-group-medium";try{h.displayName="getSizeClass",h.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const v=e=>e==="small"?"input-group-small":e==="large"?"input-group-large":"input-group-medium";try{v.displayName="getSizeClass",v.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const N=e=>{const{className:t,...s}=e,[i,l]=u.useState(""),[c,o]=u.useState("password"),m=n=>{l(n)},d=()=>{o(n=>n==="text"?"password":"text")};return r.jsx(z,{value:i,type:c,onChange:m,prefix:r.jsx(A,{className:"password-icon"}),suffix:i&&r.jsx(j,{variant:"text",onClick:d,children:c==="text"?r.jsx(b,{className:"password-icon"}):r.jsx(L,{className:"password-icon"})}),...s})},F=N;try{N.displayName="Password",N.__docgenInfo={description:"",displayName:"Password",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{password.displayName="password",password.__docgenInfo={description:"",displayName:"password",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S=e=>e==="small"?"input-group-small":e==="large"?"input-group-large":"input-group-medium";try{S.displayName="getSizeClass",S.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const x=e=>{const{users:t,limit:s,className:i,...l}=e,c=t.length-s,o=P(t,s),[m,d]=u.useState(!1),[n,w]=u.useState([]);if(s<1)throw new Error("Limit must be at least 1");return V.useEffect(()=>w(o.restList.map(a=>({prefix:r.jsx(f,{size:"xsmall",shape:"circle",userName:a.userName,imageSrc:a.imageSrc||""}),content:a.userName}))),[]),r.jsxs("div",{className:"avatar-group",children:[o.currList.map((a,p)=>{const{shape:g,size:_,userName:y,status:C,imageSrc:I}=a;return r.jsx(f,{shape:g,size:_,userName:y,status:C,imageSrc:I||"",...l},p)}),o.restList.map((a,p)=>{if(p!==0)return;const{shape:g,size:_}=a;return r.jsxs("div",{className:"rest-container",children:[r.jsx(j,{variant:"text",size:"large",onClick:()=>d(y=>!y),children:r.jsx(f,{shape:g,size:_,userName:`+${c}`,...l})}),m&&r.jsx("div",{className:"rest-container-menu",children:r.jsx(q,{options:n},p)})]},p)})]})},J=x;try{x.displayName="AvatarGroup",x.__docgenInfo={description:"",displayName:"AvatarGroup",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"AvatarProps[]"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{avatargroup.displayName="avatargroup",avatargroup.__docgenInfo={description:"",displayName:"avatargroup",props:{users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"AvatarProps[]"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{J as A,F as P};
