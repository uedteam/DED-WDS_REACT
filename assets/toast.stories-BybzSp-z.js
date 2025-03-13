import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./dashboard-Tdo9JwBb.js";import"./badge-CWp9P8za.js";import"./breadcrumb-CYcF5gjr.js";import{T as B,B as c}from"./toast-Dm8UHK9O.js";import"./checkbox-D6RDPsQd.js";import"./divider-DxMrCkxg.js";import"./image-B9gne3T0.js";import"./auth-flow-DfX0azyS.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./radio-BM17rGMH.js";import"./tag-Bus3m9Ej.js";import{T as h}from"./title-CZRmBG9s.js";import"./toggle-Co0kfaDY.js";import"./menu-DTWCQBFx.js";import"./grid-D9dEAlnk.js";import"./layout-DgebEeDV.js";import{g as m}from"./string-BqrfsRv8.js";import{k as P,l as x,m as O,g as N,o as E}from"./warning-tri-BnRwNKC6.js";import{r as C}from"./index-RYns6xqu.js";import{S as p}from"./close-o-4V2u0k.js";import{R as D}from"./index-sbqOYYIm.js";import"./user-HcVXg3Zw.js";import"./home-49bMB0eq.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const A=()=>{const[i,t]=C.useState([]);C.useEffect(()=>{if(i.length===0)return;const s=[...i].sort((r,R)=>r.createdAt-R.createdAt)[0],d=setTimeout(()=>{s.duration!==0&&n(s.id)},s.duration);return()=>clearTimeout(d)},[i]);const a=C.useCallback(o=>{const s=Date.now();return t(d=>[...d,{...o,id:s,createdAt:s,themeColor:o.themeColor||"primary",prefix:o.prefix||null,title:o.title,content:o.content,duration:o.duration,position:o.position||"top-right"}]),s},[]),n=C.useCallback(o=>{t(s=>s.filter(d=>d.id!==o))},[]),l=C.useCallback(()=>{if(i.length===0)return null;const o=i.reduce((s,d)=>{const r=d.position;return s[r]||(s[r]=[]),s[r].push(d),s},{});return D.createPortal(e.jsx(e.Fragment,{children:Object.entries(o).map(([s,d])=>e.jsx("div",{className:`ded-toast-container ded-toast-${s}`,children:d.map(r=>e.jsx(B,{...r,onClose:()=>n(r.id)},r.id))},s))}),document.body)},[i,n]);return{addToast:a,ToastContainer:l}},le={title:"Component/Toast",component:B,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},position:{description:"位置",control:{type:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},action:{description:"操作",table:{category:"SLOTS"}},prefix:{description:"前綴",options:["SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle"],mapping:{SvgInfoCircle:e.jsx(P,{}),SvgSuccessCircle:e.jsx(x,{}),SvgWarningTri:e.jsx(O,{}),SvgErrorCircle:e.jsx(N,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",position:"top-right",onClose:()=>window.alert("close"),title:"Notification Title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(x,{width:18,height:18}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(i,t){const{args:a}=t;return`
const { addToast, ToastContainer } = useToast();

const handleShowToast = () => {
  addToast({
    themeColor: '${a.themeColor}',
    title: '${a.title}',
    content: '${a.content}',
    action: <div onClick={() => window.alert('action')}>Action</div>,
    prefix: <SvgSuccessCircle width={18} height={18} />,
    duration: ${a.duration},
    position: '${a.position}',
  });
};

<Button onClick={handleShowToast} variant="filled">
  Open Toast
</Button>
<ToastContainer />
`}}}}},v={name:"預設項目",args:{},render(i){const{themeColor:t,title:a,content:n,action:l,prefix:o,onClose:s=()=>({}),className:d}=i;return e.jsxs("div",{className:`ded-toast 
        ${m("ded-toast",`border-${t}`)} 
        ${d}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(p,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:`ded-toast-header-message 
          ${m("ded-toast-header-message",t||"primary")}
        `,children:[o,e.jsx(h,{level:5,themeColor:t,children:a})]}),l&&e.jsx("div",{className:"ded-toast-header-action",children:l})]}),e.jsx("p",{className:"ded-description",children:n})]})}},u={name:"訊息類型",argTypes:{themeColor:{table:{disable:!0}},prefix:{table:{disable:!0}}},args:{},render(i){const{title:t,content:a,action:n,prefix:l,onClose:o=()=>({}),className:s}=i;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast 
        ${m("ded-toast","border-success")} 
        ${s}`,children:[e.jsx(c,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(p,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-success",children:[e.jsx(x,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"success",children:t})]}),n&&e.jsx("div",{className:"ded-toast-header-action",children:n})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast 
            ${m("ded-toast","border-warning")}  
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(p,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-warning",children:[e.jsx(O,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"warning",children:t})]}),n&&e.jsx("div",{className:"ded-toast-header-action",children:n})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${m("ded-toast","border-error")}  
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(p,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-error",children:[e.jsx(N,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"error",children:t})]}),n&&e.jsx("div",{className:"ded-toast-header-action",children:n})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${m("ded-toast","border-info")}
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(p,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-info",children:[e.jsx(P,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"info",children:t})]}),n&&e.jsx("div",{className:"ded-toast-header-action",children:n})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${m("ded-toast","border-neutral")}
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(p,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-neutral",children:[e.jsx(E,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"neutral",children:t})]}),n&&e.jsx("div",{className:"ded-toast-header-action",children:n})]}),e.jsx("p",{className:"ded-description",children:a})]})]})}},g={name:"互動模式",argTypes:{themeColor:{table:{disable:!0}},prefix:{table:{disable:!0}}},args:{},render:function(t){const{addToast:a,ToastContainer:n}=A(),l=()=>{a({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",action:(t==null?void 0:t.action)||e.jsx("div",{children:"Action"}),prefix:(t==null?void 0:t.prefix)||e.jsx(N,{width:18,height:18}),duration:t==null?void 0:t.duration,position:t==null?void 0:t.position})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:l,variant:"filled",children:"Open Toast"}),e.jsx(n,{})]})}};var j,b,T;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    const {
      themeColor,
      title,
      content,
      action,
      prefix,
      onClose = () => ({}),
      className
    } = args;
    return <div className={\`ded-toast 
        \${getCombinedClassName('ded-toast', \`border-\${themeColor}\`)} 
        \${className}\`}>
        <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
          <SvgClose width={18} height={18} onClick={onClose} />
        </Button>

        <div className={\`ded-toast-header\`}>
          <div className={\`ded-toast-header-message 
          \${getCombinedClassName('ded-toast-header-message', themeColor || 'primary')}
        \`}>
            {prefix}
            <Title level={5} themeColor={themeColor}>
              {title}
            </Title>
          </div>
          {action && <div className="ded-toast-header-action">{action}</div>}
        </div>
        <p className="ded-description">{content}</p>
      </div>;
  }
}`,...(T=(b=v.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,S,w;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '訊息類型',
  argTypes: {
    themeColor: {
      table: {
        disable: true
      }
    },
    prefix: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render(args) {
    const {
      title,
      content,
      action,
      prefix,
      onClose = () => ({}),
      className
    } = args;
    return <>
        <div className={\`ded-toast 
        \${getCombinedClassName('ded-toast', \`border-success\`)} 
        \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-success">
              <SvgSuccessCircle width={18} height={18} />
              <Title level={5} themeColor="success">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast 
            \${getCombinedClassName('ded-toast', \`border-warning\`)}  
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-warning">
              <SvgWarningTri width={18} height={18} />
              <Title level={5} themeColor="warning">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-error\`)}  
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-error">
              <SvgErrorCircle width={18} height={18} />
              <Title level={5} themeColor="error">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-info\`)}
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-info">
              <SvgInfoCircle width={18} height={18} />
              <Title level={5} themeColor="info">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-neutral\`)}
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-neutral">
              <SvgDisableCircle width={18} height={18} />
              <Title level={5} themeColor="neutral">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>
      </>;
  }
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var $,k,y;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '互動模式',
  argTypes: {
    themeColor: {
      table: {
        disable: true
      }
    },
    prefix: {
      table: {
        disable: true
      }
    }
  },
  args: {},
  render: function Render(args) {
    const {
      addToast,
      ToastContainer
    } = useToast();
    const handleShowToast = () => {
      addToast({
        themeColor: args?.themeColor || 'success',
        title: args?.title || 'Title',
        content: args?.content || 'Content',
        action: args?.action || <div>Action</div>,
        prefix: args?.prefix || <SvgErrorCircle width={18} height={18} />,
        duration: args?.duration,
        position: args?.position
      });
    };
    return <>
        <Button onClick={handleShowToast} variant="filled">
          Open Toast
        </Button>
        <ToastContainer />
      </>;
  }
}`,...(y=(k=g.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const ce=["Default","Type","Demo"];export{v as Default,g as Demo,u as Type,ce as __namedExportsOrder,le as default};
