import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

export default {
  title: 'Design System/Element/Tabs',
  component: Tabs,
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '頁籤顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
        ],
      },
    },
    type: {
      description: '頁籤樣式',
      control: {
        type: 'radio',
        options: ['card', 'default'],
      },
    },
    isDisabled: {
      description: '是否禁用',
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      description: '點擊事件',
      action: 'clicked',
    },
    className: {
      description: '頁籤客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    themeColor: 'primary',
    type: 'default',
    isDisabled: false,
    onClick: action('onClick'),
  },
  parameters: {
    docs: {
      title: '頁籤',
      description: {
        component: '頁籤組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  name: '標準頁籤',
  args: {
    tabs: [
      { title: '頁籤 1', content: '內容一' },
      { title: '頁籤 2', content: '內容二' },
      { title: '頁籤 3', content: '內容三' },
    ],
  },
  render(args) {
    return <Tabs {...args} />;
  },
};
