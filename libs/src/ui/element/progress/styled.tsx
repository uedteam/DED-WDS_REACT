export const getThemeClass = (type: string, themeColor: string) => {
  return `progress-${type}-percent-${themeColor}`;
};

export const getSizeClass = (size: string) => {
  if (size === 'small') {
    return 'input-small';
  }
  if (size === 'large') {
    return 'input-large';
  }
  return 'input-medium';
};
