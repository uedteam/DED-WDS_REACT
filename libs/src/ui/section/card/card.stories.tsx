import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Card from './card';

export default {
  title: 'Design System/Section/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    // 設定參數
    cardTitle: {
      description: '標題',
      control: {
        type: 'text',
      },
    },
    subTitle: {
      description: '副標題',
      control: {
        type: 'text',
      },
    },
    imageSrc: {
      description: '圖片連結',
      control: {
        type: 'text',
      },
    },
    borderStyle: {
      description: '邊框樣式',
      control: {
        type: 'radio',
        options: ['line', 'shadow'],
      },
    },
    className: {
      description: '標題樣式',
      control: {
        type: 'text',
      },
    },
    onMoreClick: {
      description: '更多按鈕事件',
      action: 'clicked',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        // 組件描述
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  name: '標準卡片',
  args: {
    // 設定參數預設值
    // size: 'medium',
    borderStyle: 'line',
    cardTitle: 'Card Title',
    subTitle: 'Card SubTitle',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: false,
    className: '',
    onMoreClick: action('onClick'),
  },
  render(args) {
    return (
      <div style={{ maxWidth: '350px' }}>
        <Card {...args} />
      </div>
    );
  },
};

export const PrimaryWithFullImage: Story = {
  name: '滿版圖示卡片',
  args: {
    // 設定參數預設值
    borderStyle: 'shadow',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    className: '',
    onMoreClick: action('onClick'),
  },
  render(args) {
    return (
      <div style={{ maxWidth: '350px' }}>
        <Card {...args} />
      </div>
    );
  },
};

export const TextCard: Story = {
  name: '文字卡片',
  args: {
    // 設定參數預設值
    cardTitle: 'Card Title',
    borderStyle: 'shadow',
    className: '',
  },
  render(args) {
    return (
      <div style={{ maxWidth: '350px' }}>
        <Card {...args} />
      </div>
    );
  },
};
