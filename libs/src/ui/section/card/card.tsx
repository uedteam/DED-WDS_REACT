import React from 'react';
import { Title } from '../../element/title';
import { Button } from '../../element/button';
import { getBorderClass } from './styled';
import MoreIcon from '@assets/more_vert.svg?react';

// 組件介面參數 props
interface CardProps {
  onMoreClick?: () => void;
  cardTitle?: string;
  subTitle?: string;
  imageSrc?: string;
  isFullImage?: boolean;
  borderStyle?: 'line' | 'shadow';
  className?: string;
}

// 定義組件
// 修改組件定義名稱 Component
export const Component: React.FC<CardProps> = (props: CardProps) => {
  // 解構組件參數
  const {
    onMoreClick,
    cardTitle,
    subTitle,
    imageSrc,
    isFullImage,
    borderStyle = 'line',
    className,
    ...rest
  } = props;

  // 事件控制
  // const handleClick = () => {
  //   console.log('click');
  // };

  return (
    <div
      className={`card ${getBorderClass(borderStyle)} ${
        !isFullImage ? 'card-full-image' : ''
      }`}
    >
      {cardTitle && (
        <div className="card-header">
          <div className="card-header-title">
            <Title level={2}>{cardTitle}</Title>
            <Button variant="text">
              <MoreIcon className="card-icon"></MoreIcon>
            </Button>
          </div>
          {subTitle && <div className="subtitle">{subTitle}</div>}
        </div>
      )}

      {imageSrc && (
        <div className={`card-pic ${!isFullImage ? 'card-pic-padding' : ''}`}>
          <img
            className={`${!isFullImage ? 'image-rounded' : ''}`}
            src={imageSrc}
            alt=""
          />
        </div>
      )}

      <div className="card-body">
        <p className="card-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      {onMoreClick && (
        <div className="card-footer">
          <Button
            {...rest}
            onClick={onMoreClick}
            variant="contained"
            themeColor="primary"
          >
            Learn More
          </Button>
        </div>
      )}
    </div>
  );
};
// 修改匯出組件定義名稱 Component
export default Component;
