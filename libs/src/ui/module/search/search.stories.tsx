import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Search } from './search';

export default {
  title: 'Design System/Module/Search',
  component: Search,
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
        type: 'select',
        options: ['small', 'medium', 'large'],
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
    buttonLabel: {
      description: '按鈕標籤',
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
    onSearch: {
      description: '搜尋事件',
      action: 'onSearch',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        component: '搜尋組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    className: '',
    placeholder: '請輸入搜尋關鍵字 ...',
    buttonLabel: '搜尋',
    isDisabled: false,
    onSearch: action('onSearch'),
  },
  render(args) {
    return <Search {...args} />;
  },
};
