import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { SearchIcon, CloseIcon } from '../../../assets';
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
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    prefix: {
      description: '前置元素',
    },
    suffix: {
      description: '後置元素',
    },
    label: {
      description: '標題',
      control: {
        type: 'text',
      },
    },
    type: {
      description: '輸入類型',
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
  args: {
    size: 'medium',
    isDisabled: false,
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
  name: '輸入框包含圖示',
  args: {
    className: '',
    prefix: <SearchIcon />,
    placeholder: '請輸入帳號 ...',
    hint: { error: '', description: '' },
    suffix: <CloseIcon />,
  },
  render(args) {
    return <Input {...args} />;
  },
};
