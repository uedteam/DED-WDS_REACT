import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
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
      description: '主題顏色',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
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
    className: {
      description: '標題樣式',
      control: {
        type: 'text',
      },
    },
    options: {
      description: '選項',
      control: {
        type: 'object',
      },
    },
    direction: {
      description: '方向',
      options: ['row', 'column'],
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
    },
    value: {
      description: '選中的選項',
      control: {
        type: 'object',
      },
    },
    onChange: {
      description: '選擇選項後的事件',
      action: 'onChange',
    },
  },
  args: {
    direction: 'row',
    themeColor: 'primary',
    value: '',
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
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  name: '標準 checkbox',
  args: {
    className: '',
    options: [
      { label: '選項一', value: 'option1' },
      { label: '選項二', value: 'option2' },
      { label: '選項三', value: 'option3' },
    ],
    value: ['option2'],
  },
  render(args) {
    return <Checkbox {...args} onChange={(value) => console.log(value)} />;
  },
};
