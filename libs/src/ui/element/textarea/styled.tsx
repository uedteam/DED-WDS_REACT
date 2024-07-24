export const getBorderClass = (error: string) => {
  if (error.length <= 0) return;
  return 'textarea-border-error';
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

export const getCountClass = (value: string) => {
  if (value.length > 0) {
    return 'textarea-hint-count';
  }
};
