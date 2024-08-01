import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './accordion';

export default {
  title: 'Design System/Atoms/Accordion',
  component: Accordion,
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
      description: '手風琴客製化樣式',
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
      title: '手風琴',
      description: {
        component: '手風琴組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  name: '標準手風琴',
  args: {
    accordionItems: [
      { title: '項目 1', content: '內容一' },
      { title: '項目 2', content: '內容二' },
      { title: '項目 3', content: '內容三' },
    ],
  },
  render(args) {
    return <Accordion {...args} />;
  },
};
