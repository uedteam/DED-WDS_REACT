import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@src/ui';

export default {
  title: 'Design System/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
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
    max: {
      description: '最大值',
    },
    min: {
      description: '最小值',
    },
    unit: {
      description: '單位',
    },
    step: {
      description: '步進值',
    },
    initValue: {
      description: '初始值',
    },
    className: {
      description: '客製化樣式',
    },
    onChange: {
      description: '值改變事件',
      action: 'onChange',
    },
    onClick: {
      description: '點擊事件',
      action: 'onClick',
    },
  },
  parameters: {
    docs: {
      title: '滑桿',
      description: {
        component: '滑桿的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: 50,
    themeColor: 'primary',
    isDisabled: false,
    unit: '℃',
    onChange: action('onChange'),
  },
  render(args) {
    return <Slider {...args} />;
  },
};

export const ThemeColor: Story = {
  name: '主題色滑桿',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: 10,
    themeColor: 'primary',
    isDisabled: false,
    unit: '℃',
    onChange: action('onChange'),
  },
  render(args) {
    return (
      <div>
        <Slider {...args} initValue={40} unit="%" themeColor="primary" />
        <Slider {...args} initValue={50} unit="%" themeColor="secondary" />
        <Slider {...args} initValue={60} unit="%" themeColor="tertiary" />
        <Slider {...args} initValue={70} unit="%" themeColor="info" />
        <Slider {...args} initValue={80} unit="%" themeColor="success" />
        <Slider {...args} initValue={90} unit="%" themeColor="warning" />
        <Slider {...args} initValue={100} unit="%" themeColor="error" />
      </div>
    );
  },
};
