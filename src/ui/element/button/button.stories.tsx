import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import Account from '@assets/account_circle.svg?react';

export default {
  title: 'Design System/Atoms/Button',
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
        options: ['primary', 'secondary', 'alert'],
      },
    },
    children: {
      description: '按鈕內容',
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
    onClick: {
      description: '點擊事件',
      action: 'clicked',
    },
  },
  args: {
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
    variant: 'contained',
    children: '標準按鈕',
    suffix: <Account />,
    onClick: () => action('onClick')('點擊事件'),
    className: 'btn-contained',
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  },
};

// export const Light: Story = {
//   name: '淺色按鈕',
//   args: {
//     variant: 'outlined',
//     width: '200px',
//     children: <Title level={3}>淺色按鈕</Title>,
//     suffix: <Account width={36} height={36} />,
//     onClick: () => action('onClick')('點擊事件'),
//   },
//   render(args) {
//     return <Button {...args}>{args.children}</Button>;
//   },
// };

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
