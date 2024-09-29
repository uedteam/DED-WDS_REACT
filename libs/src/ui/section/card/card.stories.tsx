import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Card from './card';
import { Title, Button, LineProgress, List, ButtonSlider } from '@src/ui';
import {
  LockIcon,
  PlusIcon,
  MinusIcon,
  PowerIcon,
  AirIcon,
  FanIcon,
} from '@src/assets';

export default {
  title: 'Design System/Section/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    cardHeader: {
      description: '卡片標題',
    },
    children: {
      description: '卡片內容',
    },
    cardFooter: {
      description: '卡片底部',
    },
    className: {
      description: '客製化樣式',
    },
    onClick: {
      action: 'clicked',
      description: '點擊事件',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        component: '卡片的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    className: '',
    onClick: action('onClick'),
  },
  render(args) {
    return (
      <div
        style={{
          display: 'flex',
          gap: '16px',
          backgroundColor: '#E9E9E9',
          padding: '32px',
        }}
      >
        {/* 門鎖卡片 */}
        <Card
          {...args}
          width="240px"
          cardHeader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Title className="card-title" themeColor="primary">
                門鎖
              </Title>
              <Button variant="text" themeColor="primary">
                <div
                  style={{
                    display: 'flex',
                    padding: '8px',
                    borderRadius: '18px',
                    backgroundColor: '#ffffff',
                  }}
                >
                  {<PowerIcon fill="#4d4d4d" width={18} height={18} />}
                </div>
              </Button>
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#533bd4',
              gap: '8px',
            }}
          >
            <LockIcon fill="#ffffff" width={64} height={64} />
            <Title className="card-feature">已上鎖</Title>
          </div>
        </Card>

        {/* 空調卡片 */}
        <Card
          {...args}
          cardHeader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Title className="card-title" themeColor="primary">
                空調
              </Title>
              <Button variant="text">
                <div
                  style={{
                    display: 'flex',
                    padding: '8px',
                    borderRadius: '18px',
                    backgroundColor: '#4D4D4D',
                  }}
                >
                  {<PowerIcon fill="#ffffff" width={18} height={18} />}
                </div>
              </Button>
            </div>
          }
          cardFooter={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                className="card-button card-button-active"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <AirIcon fill="#ffffff" width={42} height={42} />
                  <div>冷氣</div>
                </div>
              </Button>
              <Button
                className="card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <FanIcon fill="#ffffff" width={42} height={42} />
                  <div>送風</div>
                </div>
              </Button>

              <Button
                className="card-button card-button-active"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  自動
                </div>
              </Button>
              <Button
                className="card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  強
                </div>
              </Button>
              <Button
                className="card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  中
                </div>
              </Button>
              <Button
                className="card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  弱
                </div>
              </Button>
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#533bd4',
              gap: '8px',
            }}
          >
            <ButtonSlider
              themeColor="warning"
              unit="℃"
              prefix={<MinusIcon fill="#fff" width={24} height={24} />}
              suffix={<PlusIcon fill="#fff" width={24} height={24} />}
            />
          </div>
        </Card>

        <Card
          {...args}
          width="240px"
          hasHeaderDivider
          cardHeader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Title themeColor="info" level={4}>
                KKA0954
              </Title>
            </div>
          }
        >
          <div
            style={{
              paddingInline: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '20px',
                  backgroundColor: '#28c76f',
                }}
              ></div>
              <Title themeColor="success" level={6}>
                進度條
              </Title>
            </div>
            <LineProgress themeColor="success" percent={50} height={8} />
            <List
              options={[
                { content: { label: 'abc', value: '123' } },
                { content: { label: 'abc', value: '123' } },
                { content: { label: 'abc', value: '123' } },
              ]}
            />
          </div>
        </Card>
      </div>
    );
  },
};
