import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonSlider } from './button-slider';
import { PlusIcon, MinusIcon } from '@src/assets';

export default {
  title: 'Design System/Module/ButtonSlider',
  component: ButtonSlider,
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
    isDisabled: {
      description: '是否禁用',
    },
    min: {
      description: '最小值',
    },
    max: {
      description: '最大值',
    },
    step: {
      description: '步進值',
    },
    unit: {
      description: '單位',
    },
    prefix: {
      description: '前置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <PlusIcon width={32} height={32} />,
        Decrease: <MinusIcon width={32} height={32} />,
      },
    },
    suffix: {
      description: '後置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <PlusIcon width={32} height={32} />,
        Decrease: <MinusIcon width={32} height={32} />,
      },
    },
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
type Story = StoryObj<typeof ButtonSlider>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    prefix: <MinusIcon width={32} height={32} />,
    suffix: <PlusIcon width={32} height={32} />,
    unit: '℃',
    className: '',
    onClick: action('onClick'),
  },
  render(args) {
    return <ButtonSlider {...args} />;
  },
};
