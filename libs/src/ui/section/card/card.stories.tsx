import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Card from './card';
import { has } from 'lodash';

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
    isFullImage: {
      description: '是否滿版圖片',
      control: {
        type: 'boolean',
      },
    },
    aspectRatio: {
      description: '圖片比例',
      control: {
        type: 'radio',
        options: ['11', '43', '54', '169'],
      },
    },
    className: {
      description: '標題樣式',
      control: {
        type: 'text',
      },
    },
    hasMore: {
      description: '是否有更多內容按鈕',
      control: {
        type: 'boolean',
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
    aspectRatio: '1:1',
    className: '',
    hasMore: true,
    onMoreClick: (e) => {
      action('onClick')(e);
    },
  },
  render(args) {
    return (
      <div style={{ width: 'auto' }}>
        <Card {...args} />
      </div>
    );
  },
};

export const PrimaryWithRow: Story = {
  name: '滿版圖示橫排卡片',
  args: {
    // 設定參數預設值
    borderStyle: 'shadow',
    cardTitle: 'Card Title',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    aspectRatio: '4:3',
    className: '',
    hasMore: true,
    onMoreClick: action('onClick'),
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
      </div>
    );
  },
};

export const PrimaryWithColumn: Story = {
  name: '滿版圖示直排卡片',
  args: {
    // 設定參數預設值
    borderStyle: 'shadow',
    cardTitle: 'Card Title',
    imageSrc: 'https://picsum.photos/320/240',
    isFullImage: true,
    aspectRatio: '4:3',
    className: '',
    hasMore: true,
    onMoreClick: action('onClick'),
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Card {...args} />
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
    aspectRatio: '1:1',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
      </div>
    );
  },
};
