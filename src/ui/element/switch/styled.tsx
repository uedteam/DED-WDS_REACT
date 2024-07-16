export const getThemeClass = (themeColor: string) => {
  return `switch-${themeColor} `;
};

export const getPositionClass = (checked: boolean) => {
  return checked ? 'switch-on' : 'switch-off';
};

export const getLabelPositionClass = (checked: boolean) => {
  return checked ? 'switch-label-on' : 'switch-label-off';
};
