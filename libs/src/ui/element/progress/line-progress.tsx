import React from 'react';
import { getThemeClass } from './styled';

interface LineProgressProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  className?: string;
  label?: string;
  percent: number; // 0 to 100
  height?: number; // default size is 100
}

export const LineProgress: React.FC<LineProgressProps> = ({
  themeColor = 'primary',
  label = '',
  // 進度
  percent,
  // 線條寬度
  height = 10,
}) => {
  // 確保進度在0到100之間
  const normalizedProgress = Math.min(Math.max(percent, 0), 100);

  return (
    <div>
      {label && <div className="progress-line-label">{label}</div>}
      <div className="progress-line">
        <div className="progress-line-track" style={{ height }}>
          <div
            className={`${getThemeClass('line', themeColor)}`}
            style={{ width: `${normalizedProgress}%` }}
          />
        </div>
        <div
          className="progress-line-percent"
          // style={{ textAlign: 'right', marginTop: '5px' }}
        >{`${normalizedProgress}%`}</div>
      </div>
    </div>
  );
};

export default LineProgress;
