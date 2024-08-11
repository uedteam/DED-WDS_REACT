import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Menu from './menu';
import { Avatar } from '../../element/avatar';
import ArrowDownIcon from '../../../assets/arrow_down.svg?react';

export default {
  title: 'Design System/Module/Menu',
  component: Menu,
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
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    onClick: {
      description: '點擊事件',
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
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    options: [
      {
        prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
        content: '選項一',
        suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
      },
      {
        prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
        content: '選項二',
        suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
      },
      {
        prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
        content: '選項三',
        suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
      },
    ],
    className: '',
    onClick: action('onClick'),
  },
  render(args) {
    return <Menu {...args} />;
  },
};
