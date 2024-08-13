import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Password, PasswordProps } from './password';

export default {
  title: 'Design System/Module/Password',
  component: Password,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    // size: {
    //   description: '輸入框尺寸',
    //   control: {
    //     type: 'select',
    //     options: ['small', 'medium', 'large'],
    //   },
    // },
    // isDisabled: {
    //   description: '是否禁用',
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    value: {
      description: '輸入框值',
      control: {
        type: 'text',
      },
    },
    onChange: {
      description: '輸入框變更事件',
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
      title: '搜尋',
      description: {
        /* 組件描述 */
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Password>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    onChange: (e) => {
      action('onChange')(e);
    },
    className: '',
  },
  render(args) {
    return <Password {...args} />;
  },
};
