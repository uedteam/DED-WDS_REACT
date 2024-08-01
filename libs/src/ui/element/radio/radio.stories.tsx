import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

export default {
  title: 'Design System/Atoms/Radio',
  component: Radio,
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
      description: '值',
      control: {
        type: 'text',
      },
    },
    onChange: {
      description: '選擇選項後的事件',
      action: 'onChange',
    },
  },
  args: {
    direction: 'row',
  },
  parameters: {
    docs: {
      title: 'Radio Button',
      description: {
        component: 'Radio Button 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  name: '標準 radio button',
  args: {
    className: '',
    options: [
      { label: '選項一', value: 'option1' },
      { label: '選項二', value: 'option2' },
      { label: '選項三', value: 'option3' },
    ],
    value: 'option3',
  },
  render(args) {
    return <Radio {...args} onChange={(value) => console.log(value)} />;
  },
};
