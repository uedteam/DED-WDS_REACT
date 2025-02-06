import { qaList, smallQaList } from './test-data';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@src/ui';
import { SvgInfo } from '@src/assets/icons';

export default {
  title: 'Component/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前置元素',
      options: ['None', 'Info'],
      mapping: {
        None: null,
        Info: <SvgInfo width={20} height={20} />,
      },
      table: {
        category: 'PROPS',
      },
    },
    borderStyle: {
      description: '邊框樣式',
      control: {
        type: 'select',
        options: ['solid', 'highlight'],
      },
      table: {
        category: 'PROPS',
      },
    },
    isSmallSize: {
      description: '是否為小尺寸',
      table: {
        category: 'PROPS',
      },
    },
    isOpenAll: {
      description: '是否全部展開',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      table: {
        category: 'PROPS',
      },
    },
  },
  args: {
    dataSource: qaList,
    prefix: <SvgInfo width={20} height={20} />,
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Accordion',
      description: {
        component: '折疊選單組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: '預設項目',
  args: {
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false,
  },
  render(args) {
    return <Accordion {...args} />;
  },
};

export const Border: Story = {
  name: '邊框樣式',
  argTypes: {
    borderStyle: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    borderStyle: 'solid',
    isOpenAll: false,
  },
  render(args) {
    return <Accordion {...args} />;
  },
};

export const Small: Story = {
  name: '小尺寸',
  argTypes: {
    isSmallSize: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    dataSource: smallQaList,
    borderStyle: 'solid',
    isSmallSize: true,
    isOpenAll: false,
    className: '',
  },
  render(args) {
    return <Accordion {...args} />;
  },
};
