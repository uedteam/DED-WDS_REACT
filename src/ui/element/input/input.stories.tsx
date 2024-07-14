import { Meta, StoryObj } from '@storybook/react';
import Account from '@assets/account_circle.svg?react';
import { Input } from './input';

export default {
  title: 'Design System/Atoms/Input',
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
    themeColor: {
      description: '標題顏色',
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
    placeholder: {
      description: '輸入提示',
      control: {
        type: 'text',
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
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  name: '標題',
  args: {
    themeColor: 'primary',
    className: '',
    prefix: <Account width={24} height={24} />,
    placeholder: '請輸入帳號 ...',
  },
  render(args) {
    return <Input {...args} />;
  },
};

export const InputWithIcon: Story = {
  name: '標題',
  args: {
    themeColor: 'primary',
    className: '',
    prefix: <Account />,
    placeholder: '請輸入帳號 ...',
  },
  render(args) {
    return <Input {...args} />;
  },
};
