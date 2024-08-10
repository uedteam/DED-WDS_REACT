// 根據參數開發組件對應樣式
export const getSizeClass = (prefix: string, size: string) => {
  return `${prefix}-${size}`;
};

export const getStatusClass = (prefix: string, status: string) => {
  return `${prefix}-${status}`;
};

export const getPositionClass = (prefix: string, position: string) => {
  return `${prefix}-${position}`;
};

export const getShapeClass = (prefix: string, shape: string) => {
  return `${prefix}-${shape}`;
};
