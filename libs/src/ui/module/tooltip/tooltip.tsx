import React, { useState, useRef, useEffect } from 'react';
import Portal from './portal';
import { getTargetPosition } from '@src/utils/position';
import { getArrowPositionClass } from './styled';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  showArrow?: boolean;
  placement:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left-bottom'
    | 'left'
    | 'left-top';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const { children, content, placement, showArrow, className } = props;

  const [isVisible, setIsVisible] = useState(false);
  const childrenRef = useRef<HTMLSpanElement>(null);
  const [childrenSize, setChildrenSize] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  /* 事件控制 */
  const handleOnResize = () => {
    setChildrenSize({
      width: childrenRef.current ? childrenRef.current.offsetWidth : 0,
      height: childrenRef.current ? childrenRef.current.offsetHeight : 0,
    });

    setPosition({
      top: childrenRef.current
        ? childrenRef.current.getBoundingClientRect().top
        : 0,
      left: childrenRef.current
        ? childrenRef.current.getBoundingClientRect().left
        : 0,
    });
  };

  useEffect(() => {
    handleOnResize();
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);

  return (
    <>
      <span
        ref={childrenRef}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="tooltip-container"
      >
        {children}
      </span>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(position, childrenSize, placement, '6px')}
            className={`tooltip ${className}`}
          >
            <div className="tooltip-content">
              {content}
              {showArrow && (
                <div
                  className={`tooltip-arrow ${getArrowPositionClass(
                    placement
                  )}`}
                >
                  <div className="tooltip-arrow-shape" />
                </div>
              )}
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};
export default Tooltip;
