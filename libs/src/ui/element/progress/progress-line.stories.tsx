import { Meta, StoryObj } from '@storybook/react';
import { LineProgress } from './progress-line';

export default {
  title: 'Design System/Progress-Line',
  component: LineProgress,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
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
    percent: {
      description: '進度',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    height: {
      description: '線條寬度',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    label: {
      description: '進度指示標籤',
    },
    className: {
      description: '客製化樣式',
    },
  },
  args: {
    themeColor: 'primary',
    percent: 50,
    height: 10,
    label: '',
    className: '',
  },
  parameters: {
    docs: {
      title: '長條進度指示',
      description: {
        component: '長條進度指示組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof LineProgress>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <LineProgress {...args} />;
  },
};

export const Label: Story = {
  name: '顯示標籤',
  args: {},
  render(args) {
    return <LineProgress {...args} label="測試" />;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {},
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <LineProgress {...args} percent={40} themeColor="primary" />
        <LineProgress {...args} percent={50} themeColor="secondary" />
        <LineProgress {...args} percent={60} themeColor="tertiary" />
        <LineProgress {...args} percent={70} themeColor="info" />
        <LineProgress {...args} percent={80} themeColor="success" />
        <LineProgress {...args} percent={90} themeColor="warning" />
        <LineProgress {...args} percent={100} themeColor="error" />
      </div>
    );
  },
};
