export const getStyle = (themeColor: string) => {
  return `input-${themeColor}`;
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
