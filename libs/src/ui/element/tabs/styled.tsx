export const getThemeClass = (themeColor: string, type: string) => {
  if (type === 'card') {
    return `tab-${type}-${themeColor}`;
  }
  return `tab-${themeColor}`;
};

export const getActiveClass = (themeColor: string, type: string) => {
  if (type === 'card') {
    return `tab-${type}-${themeColor}-active`;
  }
  return `tab-${themeColor}-active`;
};

export const getDisableClass = () => {
  return 'tab-disable';
};
