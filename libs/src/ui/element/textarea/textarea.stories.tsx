import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

export default {
  title: 'Design System/Element/Textarea',
  component: Textarea,
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
    value: {
      description: '輸入值',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: '文字輸入框',
      description: {
        component: '文字輸入框組件的呈現及說明。',
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

export const TextareaWithStatus: Story = {
  name: '文字輸入框狀態',
  args: {
    className: '',
    label: '內文描述',
    total: 10,
    placeholder: '請輸入描述 ...',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Textarea {...args} />
        <Textarea
          {...args}
          hint={{ error: 'Error Message', description: '' }}
        />
        <Textarea
          {...args}
          hint={{ error: '', description: 'Something Description' }}
        />
      </div>
    );
  },
};
