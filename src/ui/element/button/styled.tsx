export const getStyle = (variant: string) => {
  return variant === 'contained'
    ? 'button-contained-primary'
    : 'button-outline-primary';
};
