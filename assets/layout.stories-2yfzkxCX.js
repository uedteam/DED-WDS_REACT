import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const a=n=>{const{children:t,className:b,...V}=n;return e.jsx("div",{className:"ded-layout",...V,children:t})},l=n=>{const{children:t}=n;return e.jsx("header",{className:"ded-header",children:t})},L=n=>{const{children:t}=n;return e.jsx("footer",{className:"ded-footer",children:t})},m=n=>{const{children:t}=n;return e.jsx("main",{className:"ded-content",children:t})},$=n=>{const{children:t}=n;return e.jsx("aside",{className:"ded-side",children:t})};a.Header=l;a.Footer=L;a.Content=m;a.Side=$;const r=a;try{a.displayName="Layout",a.__docgenInfo={description:"",displayName:"Layout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="header",l.__docgenInfo={description:"",displayName:"header",props:{}}}catch{}try{L.displayName="footer",L.__docgenInfo={description:"",displayName:"footer",props:{}}}catch{}try{m.displayName="content",m.__docgenInfo={description:"",displayName:"content",props:{}}}catch{}const z={title:"Design System/Layout",component:r,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},o={name:"預設項目",args:{className:""},render(n){return e.jsx(r,{...n,children:e.jsx(r.Content,{children:"content"})})}},s={name:"三段式佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]})}},d={name:"左側欄三段式佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Side,{children:"side"}),e.jsx(r.Content,{children:"content"})]}),e.jsx(r.Footer,{children:"footer"})]})}},c={name:"右側欄三段式佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Content,{children:"content"}),e.jsx(r.Side,{children:"side"})]}),e.jsx(r.Footer,{children:"footer"})]})}},i={name:"左側欄固定佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Side,{children:"side"}),e.jsxs(r,{children:[e.jsx(r.Header,{children:"header"}),e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]})]})}},u={name:"標準左側佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Side,{children:"side"}),e.jsxs(r,{children:[e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]})]})]})}},y={name:"官網佈局",args:{className:""},render(n){return e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"header"}),e.jsxs(r,{children:[e.jsx(r.Side,{children:"side"}),e.jsxs(r,{children:[e.jsx(r.Content,{children:"content"}),e.jsx(r.Footer,{children:"footer"})]}),e.jsx(r.Side,{children:"side"})]})]})}};var p,h,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: ''
  },
  render(args) {
    return <Layout {...args}>
        <Layout.Content>content</Layout.Content>
      </Layout>;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,j,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(j=s.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var N,S,f;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,F,H;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var I,T,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,q,v;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(v=(q=u.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var D,O,R;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const A=["Primary","Third","I1","I2","L","L2","L3"];export{d as I1,c as I2,i as L,u as L2,y as L3,o as Primary,s as Third,A as __namedExportsOrder,z as default};
