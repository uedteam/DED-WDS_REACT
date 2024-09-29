import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as g}from"./chunk-454WOBUV-ChHd1ABr.js";import{T as a}from"./title-D2ajyWBg.js";import{a as i,B as C,L as j}from"./button-slider-CZZHkijY.js";import"./input-DHzgqC97.js";import"./textarea-BpCh69JH.js";import"./toggle-B5WExjql.js";import"./radio-Be0wYeYE.js";import"./breadcrumb-CrM4Rt7n.js";import"./avatar-oC7HqxiX.js";import"./circle-progress-CPe7smUW.js";import{L as b}from"./line-progress-DCY5z2ah.js";import"./styled-CaWuYePh.js";import"./slider-D6GsoAjM.js";import{L as w,M as N,P as D}from"./plus-BZrTI8CW.js";import"./index-RYns6xqu.js";import{S as c,a as k,b as B}from"./fan-BGmE_5tb.js";import"./lodash-CcdATr5u.js";import"./usePosition-CMmoxCjh.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Bm72BRFT.js";const d=t=>{const{width:u,cardHeader:n,hasHeaderDivider:x,children:h,cardFooter:o,onClick:s,className:y}=t,v=()=>{console.log("click"),s&&s()};return e.jsxs("div",{style:{width:u},className:`card card-container ${y}`,onClick:v,children:[n&&e.jsx("div",{className:`card-header ${x?"card-header-divider":""}`,children:n}),e.jsx("div",{className:"card-body",children:h}),o&&e.jsx("div",{className:"card-footer",children:o})]})},l=d;try{d.displayName="Card",d.__docgenInfo={description:"",displayName:"Card",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},hasHeaderDivider:{defaultValue:null,description:"",name:"hasHeaderDivider",required:!1,type:{name:"boolean"}},cardHeader:{defaultValue:null,description:"",name:"cardHeader",required:!1,type:{name:"ReactNode"}},cardFooter:{defaultValue:null,description:"",name:"cardFooter",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},hasHeaderDivider:{defaultValue:null,description:"",name:"hasHeaderDivider",required:!1,type:{name:"boolean"}},cardHeader:{defaultValue:null,description:"",name:"cardHeader",required:!1,type:{name:"ReactNode"}},cardFooter:{defaultValue:null,description:"",name:"cardFooter",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Design System/Section/Card",component:l,tags:["autodocs"],argTypes:{cardHeader:{description:"卡片標題"},children:{description:"卡片內容"},cardFooter:{description:"卡片底部"},className:{description:"客製化樣式"},onClick:{action:"clicked",description:"點擊事件"}},parameters:{docs:{title:"搜尋",description:{component:"卡片的呈現及說明。"}}}},r={name:"搜尋輸入框",args:{className:"",onClick:g("onClick")},render(t){return e.jsxs("div",{style:{display:"flex",gap:"16px",backgroundColor:"#E9E9E9",padding:"32px"},children:[e.jsx(l,{...t,width:"240px",cardHeader:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(a,{className:"card-title",themeColor:"primary",children:"門鎖"}),e.jsx(i,{variant:"text",themeColor:"primary",children:e.jsx("div",{style:{display:"flex",padding:"8px",borderRadius:"18px",backgroundColor:"#ffffff"},children:e.jsx(c,{fill:"#4d4d4d",width:18,height:18})})})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",color:"#533bd4",gap:"8px"},children:[e.jsx(w,{fill:"#ffffff",width:64,height:64}),e.jsx(a,{className:"card-feature",children:"已上鎖"})]})}),e.jsx(l,{...t,cardHeader:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(a,{className:"card-title",themeColor:"primary",children:"空調"}),e.jsx(i,{variant:"text",children:e.jsx("div",{style:{display:"flex",padding:"8px",borderRadius:"18px",backgroundColor:"#4D4D4D"},children:e.jsx(c,{fill:"#ffffff",width:18,height:18})})})]}),cardFooter:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{className:"card-button card-button-active",variant:"contained",themeColor:"warning",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(k,{fill:"#ffffff",width:42,height:42}),e.jsx("div",{children:"冷氣"})]})}),e.jsx(i,{className:"card-button",variant:"contained",themeColor:"warning",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(B,{fill:"#ffffff",width:42,height:42}),e.jsx("div",{children:"送風"})]})}),e.jsx(i,{className:"card-button card-button-active",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"自動"})}),e.jsx(i,{className:"card-button",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"強"})}),e.jsx(i,{className:"card-button",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"中"})}),e.jsx(i,{className:"card-button",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"弱"})})]}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",color:"#533bd4",gap:"8px"},children:e.jsx(C,{themeColor:"warning",unit:"℃",prefix:e.jsx(N,{fill:"#fff",width:24,height:24}),suffix:e.jsx(D,{fill:"#fff",width:24,height:24})})})}),e.jsx(l,{...t,width:"240px",hasHeaderDivider:!0,cardHeader:e.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:e.jsx(a,{themeColor:"info",level:4,children:"KKA0954"})}),children:e.jsxs("div",{style:{paddingInline:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",justifyContent:"flex-end"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"20px",backgroundColor:"#28c76f"}}),e.jsx(a,{themeColor:"success",level:6,children:"進度條"})]}),e.jsx(b,{themeColor:"success",percent:50,height:8}),e.jsx(j,{options:[{content:{label:"abc",value:"123"}},{content:{label:"abc",value:"123"}},{content:{label:"abc",value:"123"}}]})]})})]})}};var f,p,m;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '16px',
      backgroundColor: '#E9E9E9',
      padding: '32px'
    }}>
        {/* 門鎖卡片 */}
        <Card {...args} width="240px" cardHeader={<div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              <Title className="card-title" themeColor="primary">
                門鎖
              </Title>
              <Button variant="text" themeColor="primary">
                <div style={{
            display: 'flex',
            padding: '8px',
            borderRadius: '18px',
            backgroundColor: '#ffffff'
          }}>
                  {<PowerIcon fill="#4d4d4d" width={18} height={18} />}
                </div>
              </Button>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#533bd4',
          gap: '8px'
        }}>
            <LockIcon fill="#ffffff" width={64} height={64} />
            <Title className="card-feature">已上鎖</Title>
          </div>
        </Card>

        {/* 空調卡片 */}
        <Card {...args} cardHeader={<div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              <Title className="card-title" themeColor="primary">
                空調
              </Title>
              <Button variant="text">
                <div style={{
            display: 'flex',
            padding: '8px',
            borderRadius: '18px',
            backgroundColor: '#4D4D4D'
          }}>
                  {<PowerIcon fill="#ffffff" width={18} height={18} />}
                </div>
              </Button>
            </div>} cardFooter={<div style={{
        display: 'flex',
        gap: '8px'
      }}>
              <Button className="card-button card-button-active" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  <AirIcon fill="#ffffff" width={42} height={42} />
                  <div>冷氣</div>
                </div>
              </Button>
              <Button className="card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  <FanIcon fill="#ffffff" width={42} height={42} />
                  <div>送風</div>
                </div>
              </Button>

              <Button className="card-button card-button-active" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  自動
                </div>
              </Button>
              <Button className="card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  強
                </div>
              </Button>
              <Button className="card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  中
                </div>
              </Button>
              <Button className="card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  弱
                </div>
              </Button>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#533bd4',
          gap: '8px'
        }}>
            <ButtonSlider themeColor="warning" unit="℃" prefix={<MinusIcon fill="#fff" width={24} height={24} />} suffix={<PlusIcon fill="#fff" width={24} height={24} />} />
          </div>
        </Card>

        <Card {...args} width="240px" hasHeaderDivider cardHeader={<div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              <Title themeColor="info" level={4}>
                KKA0954
              </Title>
            </div>}>
          <div style={{
          paddingInline: '16px'
        }}>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            justifyContent: 'flex-end'
          }}>
              <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '20px',
              backgroundColor: '#28c76f'
            }}></div>
              <Title themeColor="success" level={6}>
                進度條
              </Title>
            </div>
            <LineProgress themeColor="success" percent={50} height={8} />
            <List options={[{
            content: {
              label: 'abc',
              value: '123'
            }
          }, {
            content: {
              label: 'abc',
              value: '123'
            }
          }, {
            content: {
              label: 'abc',
              value: '123'
            }
          }]} />
          </div>
        </Card>
      </div>;
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const X=["Primary"];export{r as Primary,X as __namedExportsOrder,W as default};
