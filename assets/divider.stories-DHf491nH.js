import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as i}from"./divider-DxMrCkxg.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const N={title:"Component/Divider",component:i,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["1px","2px","3px","4px","5px"],table:{category:"PROPS"}},type:{description:"線條樣式",control:{type:"select"},options:["solid","dashed","dotted"],table:{category:"PROPS"}},direction:{description:"線條方向",control:{type:"select"},options:["horizontal","vertical"],table:{category:"PROPS"}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},children:{description:"分隔線內容",table:{category:"SLOTS"}}},args:{width:"1px",type:"solid",direction:"horizontal",align:"center",className:"",children:"Divider"},decorators:[r=>e.jsx("div",{style:{display:"flex",height:"100px"},children:e.jsx(r,{})})],parameters:{docs:{title:"分隔線",description:{component:"分隔線組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(r){return e.jsx(i,{...r})}},a={name:"文字對齊",argTypes:{direction:{table:{disable:!0}},align:{table:{disable:!0}}},args:{width:"1px",type:"solid",direction:"horizontal",className:""},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,align:"start",children:"Start"}),e.jsx(i,{...r,align:"center",children:"Center"}),e.jsx(i,{...r,align:"end",children:"End"})]})}},n={name:"線條粗細",args:{width:"1px",type:"solid",direction:"horizontal",align:"center",className:""},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,width:"1px",children:"1px"}),e.jsx(i,{...r,width:"2px",children:"2px"}),e.jsx(i,{...r,width:"3px",children:"3px"}),e.jsx(i,{...r,width:"4px",children:"4px"}),e.jsx(i,{...r,width:"5px",children:"5px"})]})}},d={name:"線條類型",argTypes:{type:{table:{disable:!0}}},args:{},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,type:"solid",children:"Solid"}),e.jsx(i,{...r,type:"dotted",children:"Dotted"}),e.jsx(i,{...r,type:"dashed",children:"Dashed"})]})}},s={name:"線條方向-垂直",argTypes:{direction:{table:{disable:!0}},align:{table:{disable:!0}}},args:{},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,align:"start",direction:"vertical",children:"Start"}),e.jsx(i,{...r,align:"center",direction:"vertical",children:"Center"}),e.jsx(i,{...r,align:"end",direction:"vertical",children:"End"})]})}},o={name:"線條方向-垂直",argTypes:{direction:{table:{disable:!0}},align:{table:{disable:!0}}},args:{},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(i,{...r,align:"start",direction:"horizontal",children:"Start"}),e.jsx(i,{...r,align:"center",direction:"horizontal",children:"Center"}),e.jsx(i,{...r,align:"end",direction:"horizontal",children:"End"})]})}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '文字對齊',
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {
    width: '1px',
    type: 'solid',
    direction: 'horizontal',
    className: ''
  },
  render(args) {
    return <>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '線條粗細',
  args: {
    width: '1px',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: ''
  },
  render(args) {
    return <>
        <Divider {...args} width="1px">
          1px
        </Divider>
        <Divider {...args} width="2px">
          2px
        </Divider>
        <Divider {...args} width="3px">
          3px
        </Divider>
        <Divider {...args} width="4px">
          4px
        </Divider>
        <Divider {...args} width="5px">
          5px
        </Divider>
      </>;
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var D,y,b;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '線條類型',
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render(args) {
    return <>
        <Divider {...args} type="solid">
          Solid
        </Divider>
        <Divider {...args} type="dotted">
          Dotted
        </Divider>
        <Divider {...args} type="dashed">
          Dashed
        </Divider>
      </>;
  }
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,S,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '線條方向-垂直',
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render(args) {
    return <>
        <Divider {...args} align="start" direction="vertical">
          Start
        </Divider>
        <Divider {...args} align="center" direction="vertical">
          Center
        </Divider>
        <Divider {...args} align="end" direction="vertical">
          End
        </Divider>
      </>;
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,T,P;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '線條方向-垂直',
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render(args) {
    return <>
        <Divider {...args} align="start" direction="horizontal">
          Start
        </Divider>
        <Divider {...args} align="center" direction="horizontal">
          Center
        </Divider>
        <Divider {...args} align="end" direction="horizontal">
          End
        </Divider>
      </>;
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const R=["Default","Align","Type","Width","Vertical","Horizontal"];export{a as Align,t as Default,o as Horizontal,n as Type,s as Vertical,d as Width,R as __namedExportsOrder,N as default};
