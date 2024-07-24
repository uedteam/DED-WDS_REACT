import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Title } from '../title';

export default {
  title: 'Design System/Atoms/Switch',
  component: Switch,
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
      description: '標題樣式',
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
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  name: '標題',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: '',
  },
  render(args) {
    return <Switch {...args} />;
  },
};
