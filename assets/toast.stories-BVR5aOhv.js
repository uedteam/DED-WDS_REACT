import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./tooltip-CYZ0GTsP.js";import"./badge-BPltvF_h.js";import"./breadcrumb-sosi0bwx.js";import{T as y,B as l}from"./toast-DS4VvDdf.js";import"./checkbox-v5UYg36H.js";import"./progress-circle-E3pfpkaU.js";import"./progress-line-DvRcyvhi.js";import"./divider-DxMrCkxg.js";import"./grid-D9dEAlnk.js";import"./image-B9gne3T0.js";import"./input-1jSIhlxa.js";import"./layout-DgebEeDV.js";import"./menu-CcvxqKZd.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BvQGxf36.js";import"./tag-DmMlLLwm.js";import"./textarea-DPnzmyNM.js";import{T as m}from"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{g as c}from"./string-BqrfsRv8.js";import{j as B,k as g,l as P,m as x,o as R}from"./warning-tri-BJ-xvgh8.js";import{r as C}from"./index-RYns6xqu.js";import{S as h}from"./close-o-4V2u0k.js";import{R as D}from"./index-sbqOYYIm.js";import"./online-EmbACc0H.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const A=()=>{const[d,t]=C.useState([]);C.useEffect(()=>{if(d.length===0)return;const o=[...d].sort((E,O)=>E.createdAt-O.createdAt)[0],r=setTimeout(()=>{o.duration!==0&&a(o.id)},o.duration);return()=>clearTimeout(r)},[d]);const n=C.useCallback(s=>{const o=Date.now();return t(r=>[...r,{...s,id:o,createdAt:o,themeColor:s.themeColor||"primary",prefix:s.prefix||null,title:s.title,content:s.content,duration:s.duration}]),o},[]),a=C.useCallback(s=>{t(o=>o.filter(r=>r.id!==s))},[]),i=C.useCallback(()=>d.length===0?null:D.createPortal(e.jsx("div",{className:"ded-toast-container",children:d.map(s=>e.jsx(y,{...s,onClose:()=>a(s.id)},s.id))}),document.body),[d,a]);return{addToast:n,ToastContainer:i}},ce={title:"Component/Toast",component:y,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},action:{description:"操作",table:{category:"SLOTS"}},prefix:{description:"前綴",options:["SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle"],mapping:{SvgInfoCircle:e.jsx(B,{}),SvgSuccessCircle:e.jsx(g,{}),SvgWarningTri:e.jsx(P,{}),SvgErrorCircle:e.jsx(x,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification Title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(g,{width:18,height:18}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(d,t){const{args:n}=t;return`
<Toast themeColor=${n.themeColor} title=${n.title} content=${n.content} prefix=${n.prefix} />
`}}}}},v={name:"預設項目",args:{},render(d){const{themeColor:t,title:n,content:a,action:i,prefix:s,onClose:o=()=>({}),className:r}=d;return e.jsxs("div",{className:`ded-toast 
        ${c("ded-toast",`border-${t}`)} 
        ${r}`,children:[e.jsx(l,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:`ded-toast-header-message 
          ${c("ded-toast-header-message",t||"primary")}
        `,children:[s,e.jsx(m,{level:5,themeColor:t,children:n})]}),i&&e.jsx("div",{className:"ded-toast-header-action",children:i})]}),e.jsx("p",{className:"ded-description",children:a})]})}},p={name:"訊息類型",argTypes:{themeColor:{table:{disable:!0}},prefix:{table:{disable:!0}}},args:{},render(d){const{title:t,content:n,action:a,prefix:i,onClose:s=()=>({}),className:o}=d;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast 
        ${c("ded-toast","border-success")} 
        ${o}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-success",children:[e.jsx(g,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"success",children:t})]}),a&&e.jsx("div",{className:"ded-toast-header-action",children:a})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast 
            ${c("ded-toast","border-warning")}  
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-warning",children:[e.jsx(P,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"warning",children:t})]}),a&&e.jsx("div",{className:"ded-toast-header-action",children:a})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast
            ${c("ded-toast","border-error")}  
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-error",children:[e.jsx(x,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"error",children:t})]}),a&&e.jsx("div",{className:"ded-toast-header-action",children:a})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast
            ${c("ded-toast","border-info")}
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-info",children:[e.jsx(B,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"info",children:t})]}),a&&e.jsx("div",{className:"ded-toast-header-action",children:a})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast
            ${c("ded-toast","border-neutral")}
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-neutral",children:[e.jsx(R,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"info",children:t})]}),a&&e.jsx("div",{className:"ded-toast-header-action",children:a})]}),e.jsx("p",{className:"ded-description",children:n})]})]})}},u={name:"互動模式",argTypes:{themeColor:{table:{disable:!0}},prefix:{table:{disable:!0}}},args:{},render:function(t){const{addToast:n,ToastContainer:a}=A(),i=()=>{n({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",action:(t==null?void 0:t.action)||e.jsx("div",{children:"Action"}),prefix:(t==null?void 0:t.prefix)||e.jsx(x,{width:18,height:18}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:i,variant:"filled",children:"Open Dialog"}),e.jsx(a,{})]})}};var N,j,b;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(b=(j=v.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,T,S;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
              <Title level={5} themeColor="info">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>
      </>;
  }
}`,...(S=(T=p.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,$,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        duration: args?.duration
      });
    };
    return <>
        <Button onClick={handleShowToast} variant="filled">
          Open Dialog
        </Button>
        <ToastContainer />
      </>;
  }
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const me=["Default","Type","Demo"];export{v as Default,u as Demo,p as Type,me as __namedExportsOrder,ce as default};
