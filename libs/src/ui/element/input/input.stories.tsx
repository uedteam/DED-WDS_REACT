import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Search from '@assets/search.svg?react';
import { Input } from './input';

export default {
  title: 'Design System/Element/Input',
  component: Input,
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '輸入框尺寸',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    children: {
      description: '標題內容',
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
    prefix: {
      description: '前置元素',
      control: {
        type: 'text',
      },
    },
    suffix: {
      description: '後置元素',
      control: {
        type: 'text',
      },
    },
    label: {
      description: '標題',
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
    onChange: {
      description: '輸入事件',
      action: 'changed',
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
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...',
    hint: { error: '', description: '' },
    onChange: (e) => action('onChange')(e),
  },
  render(args) {
    return <Input {...args} />;
  },
};

export const InputWithIcon: Story = {
  name: '搜尋',
  args: {
    className: '',
    prefix: <Search />,
    placeholder: '請輸入帳號 ...',
    hint: { error: '', description: '' },
  },
  render(args) {
    return <Input {...args} />;
  },
};
