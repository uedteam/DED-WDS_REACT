import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const o=n=>{const{children:t,className:R,...D}=n;return e.jsx("div",{style:{width:"100%",display:"flex",flexWrap:"wrap",flex:"1",color:"#fff"},...D,children:t})},l=n=>{const{children:t}=n;return e.jsx("header",{style:{width:"100%",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#4096ff"},children:t})},L=n=>{const{children:t}=n;return e.jsx("footer",{style:{width:"100%",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#4096ff"},children:t})},m=n=>{const{children:t}=n;return e.jsx("main",{style:{flex:"1",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#0958d9"},children:t})},O=n=>{const{children:t}=n;return e.jsx("aside",{style:{width:"80px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#1677ff"},children:t})};o.Header=l;o.Footer=L;o.Content=m;o.Side=O;const r=o;try{o.displayName="Layout",o.__docgenInfo={description:"",displayName:"Layout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="header",l.__docgenInfo={description:"",displayName:"header",props:{}}}catch{}try{L.displayName="footer",L.__docgenInfo={description:"",displayName:"footer",props:{}}}catch{}try{m.displayName="content",m.__docgenInfo={description:"",displayName:"content",props:{}}}catch{}const $={title:"Design System/Layout",component:r,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},a={name:"預設項目",args:{className:""},render(n){return e.jsx(r,{...n,children:e.jsx(r.Content,{children:"content"})})}},s={name:"三段式佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]})}},d={name:"左側欄三段式佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Side,{children:"side"}),e.jsx(r.Content,{children:"content"})]}),e.jsx(r.Footer,{children:"footer"})]})}},c={name:"右側欄三段式佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Content,{children:"content"}),e.jsx(r.Side,{children:"side"})]}),e.jsx(r.Footer,{children:"footer"})]})}},i={name:"左側欄固定佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Side,{children:"side"}),e.jsxs(r,{children:[e.jsx(r.Header,{children:"header"}),e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]})]})}},u={name:"標準左側佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Side,{children:"side"}),e.jsxs(r,{children:[e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]})]})]})}},y={name:"官網佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Side,{children:"side"}),e.jsxs(r,{children:[e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]}),e.jsx(r.Side,{children:"side"})]})]})}};var p,h,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Content>content</Layout.Content>
      </Layout>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,j,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '三段式佈局',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout.Content>content</Layout.Content>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>;
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var _,C,S;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '左側欄三段式佈局',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Side>side</Layout.Side>
          <Layout.Content>content</Layout.Content>
        </Layout>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>;
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,F,H;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '右側欄三段式佈局',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Content>content</Layout.Content>
          <Layout.Side>side</Layout.Side>
        </Layout>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>;
  }
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var I,w,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '左側欄固定佈局',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Side>side</Layout.Side>
        <Layout>
          <Layout.Header>header</Layout.Header>
          <Layout.Content>content</Layout.Content>
          <Layout.Footer>footer</Layout.Footer>
        </Layout>
      </Layout>;
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var k,T,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '標準左側佈局',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Side>side</Layout.Side>
          <Layout>
            <Layout.Content>content</Layout.Content>
            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Layout>
      </Layout>;
  }
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,q,v;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '官網佈局',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Side>side</Layout.Side>
          <Layout>
            <Layout.Content>content</Layout.Content>
            <Layout.Footer>footer</Layout.Footer>
          </Layout>
          <Layout.Side>side</Layout.Side>
        </Layout>
      </Layout>;
  }
}`,...(v=(q=y.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const z=["Primary","Third","I1","I2","L","L2","L3"];export{d as I1,c as I2,i as L,u as L2,y as L3,a as Primary,s as Third,z as __namedExportsOrder,$ as default};
