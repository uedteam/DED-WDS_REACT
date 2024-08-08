import React from 'react';
import { IdleIcon, OnlineIcon, BusyIcon, OfflineIcon } from '../../../assets';
import {
  getSizeClass,
  getStatusClass,
  // getPositionClass,
  getShapeClass,
} from './styled';
import { getAbbrFullName } from '../../../utils';

const getStatusIcon = (size: string, status: string) => {
  const sizeClass = getSizeClass('avatar-icon', size);
  const statusClass = getStatusClass('avatar-icon', status);
  // const positionClass = getPositionClass('avatar-icon', position);

  const statusIcons: {
    [key: string]: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
  } = {
    online: OnlineIcon,
    idle: IdleIcon,
    busy: BusyIcon,
    offline: OfflineIcon,
  };
  const StatusIcon = statusIcons[status];

  return StatusIcon ? (
    <StatusIcon className={`avatar-icon ${sizeClass} ${statusClass}`} />
  ) : null;
};

// 組件介面參數 props
interface AvatarProps {
  size: 'small' | 'medium' | 'large';
  shape: 'circle' | 'square';
  // iconPos: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  userName: string;
  status: 'online' | 'busy' | 'idle' | 'offline' | 'default';
  imageSrc: string;
  alt?: string;
  className?: string;
}

// 定義組件
export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  // 解構組件參數
  const { size, shape, userName, status, imageSrc, alt } = props;

  return (
    <div
      className={`avatar-container 
        ${getSizeClass('avatar-container', size)}`}
    >
      <div className={`avatar ${getShapeClass('avatar', shape)}`}>
        {imageSrc ? (
          <img className="avatar-pic" src={imageSrc} alt={alt} />
        ) : (
          <span className={`avatar-text ${getSizeClass('text', size)}`}>
            {getAbbrFullName(userName, 2)}
          </span>
        )}
      </div>
      {status === 'online' && getStatusIcon(size, 'online')}
      {status === 'idle' && getStatusIcon(size, 'idle')}
      {status === 'busy' && getStatusIcon(size, 'busy')}
      {status === 'offline' && getStatusIcon(size, 'offline')}
    </div>
  );
};
export default Avatar;
