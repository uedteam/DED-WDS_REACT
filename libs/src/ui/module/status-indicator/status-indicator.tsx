import React, { ReactNode } from 'react';
import { getCombinedClassName } from '@src/utils/string';

interface StatusIndicatorProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variant: 'filled' | 'soft' | 'text';
  prefix: ReactNode;
  isShowDot?: boolean;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  themeColor = 'primary',
  variant = 'text',
  prefix,
  isShowDot = true,
  children,
  size = 'medium',
  className = '',
}) => {
  return (
    <div
      className={`status-indicator 
        ${getCombinedClassName(
          'status-indicator',
          `${variant}-${themeColor}`
        )}       
        ${className}
      `}
      role="status"
    >
      <div className="status-indicator-content">
        {prefix ? (
          <div
            className={`status-indicator-prefix 
              ${getCombinedClassName('ded-icon', size)}`}
          >
            {prefix}
          </div>
        ) : (
          isShowDot && (
            <div
              className={`${!prefix ? 'status-indicator-dot' : ''}
            ${
              !prefix && variant === 'filled'
                ? 'status-indicator-dot-white'
                : getCombinedClassName('status-indicator-dot', themeColor)
            }`}
            ></div>
          )
        )}
        {children && (
          <div className={`${getCombinedClassName('ded-text', size)}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default StatusIndicator;
