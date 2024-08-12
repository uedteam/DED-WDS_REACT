// 根據參數開發組件對應樣式
export const getBorderClass = (borderStyle: string) => {
  if (borderStyle === 'line') {
    return 'line-border';
  }
  return 'shadow-border';
};

export const getRadioClass = (ratio: string) => {
  if (ratio === '1:1') {
    return 'card-pic-11';
  }
  if (ratio === '4:3') {
    return 'card-pic-43';
  }
  if (ratio === '5:4') {
    return 'card-pic-54';
  }
  if (ratio === '16:9') {
    return 'card-pic-169';
  }
  return 'card-pic-1-1';
};
