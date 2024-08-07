// 根據參數開發組件對應樣式
export const getBorderClass = (borderStyle: string) => {
  if (borderStyle === 'line') {
    return 'line-border';
  }
  return 'shadow-border';
};
