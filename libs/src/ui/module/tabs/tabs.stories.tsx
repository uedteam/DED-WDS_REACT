import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

export default {
  title: 'Design System/Tabs',
  component: Tabs,
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
    activeIndex: {
      description: '活動頁籤索引',
      control: {
        type: 'number',
        min: 0,
        max: 2,
      },
    },
    onClick: {
      description: '點擊事件',
      action: 'clicked',
    },
    className: {
      description: '客製化樣式',
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

export const PrimaryWithCard: Story = {
  name: '卡片式頁籤',
  args: {
    type: 'card',
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
