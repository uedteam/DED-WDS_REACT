import { Meta, StoryObj } from '@storybook/react';
import { Title } from './title';

export default {
  title: 'Design System/Atoms/Title',
  component: Title,
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
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  name: '標題',
  args: {
    themeColor: 'primary',
    children: '標題',
    className: '',
  },
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  },
};
