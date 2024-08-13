import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  CloseIcon,
} from '@src/assets';

export default {
  title: 'Design System/Element/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '輸入框尺寸',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    prefix: {
      description: '前置元素',
      options: [
        'None',
        'Account',
        'Search',
        'Visibility',
        'VisibilityOff',
        'Close',
      ],
      mapping: {
        None: null,
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
        Close: <CloseIcon />,
      },
    },
    suffix: {
      description: '後置元素',
      options: [
        'None',
        'Account',
        'Search',
        'Visibility',
        'VisibilityOff',
        'Close',
      ],
      mapping: {
        None: null,
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
        Close: <CloseIcon />,
      },
    },
    label: {
      description: '標題',
      control: {
        type: 'text',
      },
    },
    type: {
      description: '輸入類型',
      control: {
        type: 'select',
        options: ['text', 'password', 'number', 'email'],
      },
    },
    placeholder: {
      description: '輸入提示',
      control: {
        type: 'text',
      },
    },
    hint: {
      description: '提示訊息',
      control: {
        type: 'object',
      },
    },
    value: {
      description: '輸入值',
      control: {
        type: 'text',
      },
    },
    onChange: {
      description: '輸入事件',
      action: 'changed',
    },
  },
  parameters: {
    docs: {
      title: '輸入框',
      description: {
        component: '輸入框組件的呈現及說明。',
      },
    },
  },
  args: {
    size: 'medium',
    isDisabled: false,
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  name: '文字輸入框',
  args: {
    className: '',
    placeholder: '請輸入帳號 ...',
    hint: { error: '', description: '' },
    type: 'text',
    onChange: (e) => action('onChange')(e),
  },
  render(args) {
    return <Input {...args} />;
  },
};

export const InputWithStatus: Story = {
  name: '輸入框狀態',
  args: {
    className: '',
    prefix: <AccountIcon />,
    label: '帳號',
    type: 'text',
    placeholder: '請輸入帳號 ...',
    suffix: <CloseIcon />,
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Input {...args} />
        <Input {...args} hint={{ error: 'Error Message', description: '' }} />
        <Input
          {...args}
          hint={{ error: '', description: 'Something Description' }}
        />
      </div>
    );
  },
};
