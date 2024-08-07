import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Title } from '../title';
import { Button } from './button';
import Account from '@assets/account_circle.svg?react';

export default {
  title: 'Design System/Element/Button',
  component: Button,
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '按鈕樣式',
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    themeColor: {
      description: '按鈕顏色',
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
    isDisabled: {
      description: '是否禁用',
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: '按鈕內容',
      control: {
        type: 'text',
      },
    },
    size: {
      description: '按鈕尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
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
    onClick: {
      description: '點擊事件',
      action: 'clicked',
    },
    className: {
      description: '按鈕客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    variant: 'contained',
    themeColor: 'primary',
    isDisabled: false,
    children: '按鈕',
    onClick: action('onClick'),
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: '標準按鈕',
  args: {
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    size: 'large',
    prefix: <Account />,
    onClick: (e) => action('onClick')(e),
    className: '',
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  },
};

export const Multiple: Story = {
  name: '多個按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    prefix: <Account />,
    onClick: () => action('onClick')('點擊事件'),
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button {...args} variant="contained">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="error">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="tertiary">
          {args.children}
        </Button>
      </div>
    );
  },
};

// export const Disabled: Story = {
//   name: '禁用按鈕',
//   args: {
//     prefix: <Account />,
//   },
//   render(args) {
//     return <Button {...args}>{args.children}</Button>;
//   },
// };

// export const Text: Story = {
//   name: '文字按鈕',
//   args: {
//     variant: 'text',
//     children: '文字按鈕',
//   },
//   render(args) {
//     return <Button {...args}>{args.children}</Button>;
//   },
// };

// export const Icon: Story = {
//   name: 'Icon 按鈕',
//   args: {
//     variant: 'text',
//     suffix: <Account />,
//   },
//   render(args) {
//     return <Button {...args}>{args.children}</Button>;
//   },
// };
