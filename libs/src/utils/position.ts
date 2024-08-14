export const getTargetPosition = (
  position: { top: number; left: number },
  childrenSize: { width: number; height: number },
  placement: string,
  gap: string
) => {
  if (placement === 'top') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(calc(${
        childrenSize.width / 2
      }px - 50%), calc(-100% - ${gap}))`,
    };
  }

  if (placement === 'bottom') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left}px`,
      transform: `translate(calc(${childrenSize.width / 2}px - 50%), ${gap})`,
    };
  }

  if (placement === 'left') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(calc(-100% - ${gap}), calc(${
        childrenSize.height / 2
      }px - 50%))`,
    };
  }

  if (placement === 'right') {
    return {
      top: `${position.top}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(${gap}, calc(${childrenSize.height / 2}px - 50%))`,
    };
  }

  if (placement === 'top-left') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(0, calc(-100% - ${gap}))`,
    };
  }

  if (placement === 'top-right') {
    return {
      top: `${position.top}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(calc(-100%), calc(-100% - ${gap}))`,
    };
  }

  if (placement === 'bottom-left') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left}px`,
      transform: `translate(0, ${gap})`,
    };
  }

  if (placement === 'bottom-right') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(calc(-100%), ${gap})`,
    };
  }

  if (placement === 'left-top') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(calc(-100% - ${gap}), 0)`,
    };
  }

  if (placement === 'left-bottom') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left}px`,
      transform: `translate(calc(-100% - ${gap}), -100%)`,
    };
  }

  if (placement === 'right-top') {
    return {
      top: `${position.top}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(${gap}, 0)`,
    };
  }

  if (placement === 'right-bottom') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(${gap}, -100%)`,
    };
  }
};
