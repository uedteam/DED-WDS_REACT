import { Meta, StoryObj } from '@storybook/react';
import { CircleProgress } from './circle-progress';

export default {
  title: 'Design System/Atoms/Circle-Progress',
  component: CircleProgress,
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
      description: '主題顏色',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
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
    className: {
      description: '標題樣式',
      control: {
        type: 'text',
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
    size: {
      description: '直徑',
      control: {
        type: 'range',
        min: 24,
        max: 200,
        step: 1,
      },
    },
    strokeWidth: {
      description: '線條寬度',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
  args: {
    percent: 0,
    size: 100,
    strokeWidth: 10,
  },
  parameters: {
    docs: {
      title: 'Radio Button',
      description: {
        component: 'Radio Button 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof CircleProgress>;

export const Primary: Story = {
  name: '圓形進度指示',
  args: {
    className: '',
  },
  render(args) {
    return <CircleProgress {...args} />;
  },
};
