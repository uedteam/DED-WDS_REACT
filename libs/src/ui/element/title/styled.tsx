import { isEmpty } from 'lodash';
export const getTitleClass = (themeColor: string, level: number) => {
  if (!isEmpty(level)) return '';
  return `title-${themeColor} title-level-${level}`;
};
