import { omit } from 'lodash';

interface BaseTheme {
  primary: {
    default: string;
    hover: string;
  };
  secondary: {
    default: string;
    hover: string;
  };
  tertiary: {
    default: string;
    hover: string;
  };
  disabled: string;
  black: string;
  white: string;
}

interface Theme {
  colors: {
    layout: {
      header: string;
      background: string;
      sidebar: string;
    };

    border: {
      default: string;
      selected: string;
      disabled: string;
    };

    button: {
      primary: {
        default: string;
        hover: string;
      };
      secondary: {
        default: string;
        hover: string;
      };
      tertiary: {
        default: string;
        hover: string;
      };
      disabled: string;
    };

    text: {
      primary: string;
      secondary: string;
      helper: string;
      placeholder: string;
    };

    support: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };

    skeleton: {
      element: string;
      background: string;
    };
  };
  shadow: {
    light1: string;
    light2: string;
    light3: string;
    light4: string;
    light5: string;

    dark1: string;
    dark2: string;
    dark3: string;
    dark4: string;
    dark5: string;
  };
  radius: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    circle: string;
  };
  border: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  space: {
    gap1: string;
    gap2: string;
    gap3: string;
    gap4: string;
    gap5: string;
    gap6: string;
    gap7: string;
    gap8: string;
  };
  breakpoint: {
    mobile: string;
    desktop: string;
    largeDesktop: string;
  };
  text: {
    cn: string;
    en: string;

    regular: string;
    bold: string;
    italic: string;

    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    heading5: string;
    heading6: string;

    body1: string;
    body2: string;

    caption1: string;
    caption2: string;
  };
}

export const BaseTheme: BaseTheme = {
  primary: { default: '#533BD4', hover: '#3F2A9E' },
  secondary: { default: '#68E1FE', hover: '#4DC8E4' },
  tertiary: { default: '#EF68FF', hover: '#D94DE4' },
  disabled: '#EEEEEE',
  black: '#000000',
  white: '#ffffff',
};

export const Theme: Theme = {
  // 色彩設定
  colors: {
    // 佈局位置: 依照需求填入色票
    // e.g. header: '#5F6873'
    layout: {
      header: '#5F6873',
      background: '#5F6873',
      sidebar: '#5F6873',
    },

    // 邊框狀態: 依照需求填入色票
    // e.g. default: '#D9D9D9'
    border: {
      default: '#D9D9D9',
      selected: '#FF6B00',
      disabled: '#D9D9D9',
    },

    // link: {
    //   primary: {
    //     default: Base.primary.default,
    //     hover: Base.primary.hover,
    //   },
    // },

    button: omit(BaseTheme, ['black', 'white']),

    // 文字: 依照需求填入色票
    // e.g. primary: '#1C1C1C'
    text: {
      primary: '#1C1C1C',
      secondary: '#4D4D4D',
      helper: '#808080',
      placeholder: '#CCCCCC',
    },

    // 支援狀態: 依照需求填入色票
    // e.g. success: '#B1F04C'
    support: {
      success: '#B1F04C',
      warning: '#FFBE77',
      error: '#FF5E5E',
      info: '#68C6F2',
    },

    // 骨架屏: 依照需求填入色票
    // e.g. element: '#E0E0E0'
    skeleton: {
      element: '#E0E0E0',
      background: '#F0F0F0',
    },
  },

  // 陰影設定
  shadow: {
    // 亮版: 依照需求填入樣式參數
    // e.g. light1: '0px 1px 2px #0000001a'
    light1: '0px 1px 2px #0000001a',
    light2: '0px 1px 2px #00000026, 0px 1px 4px #0000001a',
    light3: '0px 4px 6px -1px #0000001a, 0px 2px 4px -1px #00000026',
    light4: '0px 4px 6px -2px #00000026, 0px 3px 20px -5px #0000001a',
    light5: '0px 10px 25px -5px #00000026, 0px 2px 6px -2px #0000001a',

    // 暗版: 依照需求填入樣式參數
    // e.g. dark1: '0px 1px 2px #0000004d'
    dark1: '0px 1px 2px #0000004d',
    dark2: '0px 1px 2px #00000033, 0px 1px 4px #00000066',
    dark3: '0px 4px 6px -1px #0000001a, 0px 2px 4px -1px #0000004d',
    dark4: '0px 4px 6px -2px #00000033, 0px 3px 20px -5px #00000033',
    dark5: '0px 10px 25px -5px #0000004d, 0px 2px 6px -2px #00000040',
  },
  // 圓角設定
  radius: {
    // 尺寸: 依照需求填入樣式參數
    // e.g. xsmall: '4px'
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    circle: '50%',
  },

  // 邊框設定
  border: {
    // 尺寸: 依照需求填入樣式參數
    // e.g. xsmall: '1px'
    xsmall: '1px',
    small: '2px',
    medium: '4px',
    large: '6px',
    xlarge: '8px',
  },

  // 間距設定
  space: {
    // 尺寸: 依照需求填入樣式參數
    // e.g. gap1: '8px'
    gap1: '8px',
    gap2: '16px',
    gap3: '24px',
    gap4: '32px',
    gap5: '40px',
    gap6: '48px',
    gap7: '56px',
    gap8: '64px',
  },

  // 斷點設定
  breakpoint: {
    // 裝置: 依照需求填入樣式參數
    // e.g. mobile: '375px'
    mobile: '375px',
    desktop: '1440px',
    largeDesktop: '1920px',
  },

  // 文字設定
  text: {
    // 語系: 依照需求填入字型
    // e.g. cn: 'Noto Sans, sans-serif'
    cn: 'Noto Sans, sans-serif',
    en: 'Arial, sans-serif',

    // 字重: 依照需求填入字重
    // e.g. regular: '400/regular', bold: '700/bold'
    regular: 'regular',
    bold: 'bold',

    // 斜體: 依照需求填入字型樣式
    // e.g. italic: 'italic'
    italic: 'italic',

    // 標題: 依照需求填入字型大小
    // e.g. heading1: '40px'
    heading1: '40px',
    heading2: '30px',
    heading3: '24px',
    heading4: '20px',
    heading5: '18px',
    heading6: '16px',

    // 內文: 依照需求填入字型大小
    // e.g. body1: '16px'
    body1: '16px',
    body2: '15px',

    // 註解: 依照需求填入字型大小
    // e.g. caption1: '14px'
    caption1: '14px',
    caption2: '13px',
  },
};

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
