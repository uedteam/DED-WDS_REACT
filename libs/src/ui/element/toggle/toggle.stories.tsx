import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

export default {
  title: 'Design System/Element/Toggle',
  component: Toggle,
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
    checkChildren: {
      description: '開啟文字',
      control: {
        type: 'text',
      },
    },
    unCheckChildren: {
      description: '關閉文字',
      control: {
        type: 'text',
      },
    },
    isChecked: {
      description: '是否開啟',
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      description: '是否禁用',
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      description: '開關事件',
      action: 'onChange',
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: '開關按鈕',
      description: {
        component: '開關按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  name: '切換按鈕',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: '',
  },
  render(args) {
    return <Toggle {...args} />;
  },
};
