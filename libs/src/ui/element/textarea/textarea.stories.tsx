import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

export default {
  title: 'Design System/Element/Textarea',
  component: Textarea,
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '標題',
      control: {
        type: 'text',
      },
    },
    className: {
      description: '標題樣式',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      description: '輸入提示',
      control: {
        type: 'text',
      },
    },
    isDisabled: {
      description: '是否禁用',
      control: {
        type: 'boolean',
      },
    },
    hint: {
      description: '提示訊息',
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    docs: {
      title: '按鈕',
      description: {
        component: '按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  name: '文字輸入框',
  args: {
    label: '留下你的想法',
    placeholder: '請輸入 ...',
    total: 10,
    hint: { error: '', description: '' },
  },
  render(args) {
    return <Textarea {...args} />;
  },
};
