export const getThemeClass = (themeColor: string, type: string) => {
  if (type === 'card') {
    return `accordion-${type}-${themeColor}`;
  }
  return `accordion-${themeColor}`;
};

export const getActiveClass = (themeColor: string, type: string) => {
  if (type === 'card') {
    return `accordion-${type}-${themeColor}-active`;
  }
  return `accordion-${themeColor}-active`;
};

export const getDisableClass = () => {
  return 'accordion-disable';
};
