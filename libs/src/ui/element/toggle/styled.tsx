export const getThemeClass = (themeColor: string) => {
  return `toggle-${themeColor}`;
};

export const getPositionClass = (checked: boolean) => {
  return checked ? 'toggle-on' : 'toggle-off';
};

export const getLabelPositionClass = (checked: boolean) => {
  return checked ? 'toggle-label-on' : 'toggle-label-off';
};

export const getThumbPositionClass = (checked: boolean) => {
  return checked ? 'toggle-thumb-on' : 'toggle-thumb-off';
};
