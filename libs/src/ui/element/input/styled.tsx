import { isEmpty } from 'lodash';

export const getBorderClass = ({
  error,
  description,
}: {
  error: string;
  description: string;
}) => {
  if (isEmpty(error) || isEmpty(description)) return;
  return error.length > 0 ? 'textarea-border-error' : 'textarea-border-desc';
};

export const getHintClass = ({
  error,
  description,
}: {
  error: string;
  description: string;
}) => {
  if (error.length > 0) {
    return 'textarea-hint-error';
  }

  if (description.length > 0) {
    return 'textarea-hint-desc';
  }
};

export const getSizeClass = (size: string) => {
  if (size === 'small') {
    return 'input-group-small';
  }
  if (size === 'large') {
    return 'input-group-large';
  }
  return 'input-group-medium';
};
