import React, { MouseEventHandler } from 'react';
import { getBorderClass, getRadioClass } from './styled';
import { Title, Button } from '@src/ui';
import { MoreIcon } from '@src/assets';

export interface CardProps {
  hasMoreBtn?: boolean;
  onMoreClick?: MouseEventHandler<HTMLButtonElement>;
  hasFuncBtn?: boolean;
  onFuncClick?: MouseEventHandler<HTMLButtonElement>;
  cardTitle?: string;
  subTitle?: string;
  imageSrc?: string;
  isFullImage?: boolean;
  aspectRatio: '1:1' | '4:3' | '5:4' | '16:9';
  borderStyle?: 'line' | 'shadow';
  className?: string;
}

/**
 * 卡片組件
 *
 * @component
 * @param {Object} props - 組件屬性
 * @param {boolean} props.hasMoreBtn - 是否顯示更多按鈕
 * @param {function} props.onMoreClick - 更多按鈕的點擊事件處理函數
 * @param {boolean} props.hasFuncBtn - 是否顯示功能按鈕
 * @param {function} props.onFuncClick - 功能按鈕的點擊事件處理函數
 * @param {string} props.cardTitle - 卡片標題
 * @param {string} props.subTitle - 卡片副標題
 * @param {string} props.imageSrc - 圖片來源
 * @param {boolean} props.isFullImage - 是否顯示完整圖片
 * @param {string} props.aspectRatio - 圖片的長寬比
 * @param {string} [props.borderStyle='line'] - 邊框樣式
 * @param {string} props.className - 自定義樣式類名
 * @param {Object} rest - 其他屬性
 *
 * @returns {JSX.Element} 卡片組件
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    hasMoreBtn,
    onMoreClick,
    hasFuncBtn,
    onFuncClick,
    cardTitle,
    subTitle,
    imageSrc,
    isFullImage,
    aspectRatio,
    borderStyle = 'line',
    className,
    ...rest
  } = props;

  return (
    <div
      className={`card ${getBorderClass(borderStyle)} ${
        !isFullImage ? 'card-full-image' : ''
      }`}
    >
      {imageSrc && (
        <div
          className={`card-pic ${
            !isFullImage ? 'card-pic-padding' : ''
          } ${getRadioClass(aspectRatio)}`}
        >
          <img
            className={`${!isFullImage ? 'image-rounded' : ''}`}
            src={imageSrc}
            alt=""
          />
        </div>
      )}

      <div className="card-container">
        {cardTitle && (
          <div className="card-header">
            <div className="card-header-title">
              <Title level={2}>{cardTitle}</Title>
              {hasFuncBtn && (
                <Button variant="text" onClick={onFuncClick}>
                  <MoreIcon className="card-icon"></MoreIcon>
                </Button>
              )}
            </div>
            {subTitle && <div className="subtitle">{subTitle}</div>}
          </div>
        )}

        <div className="card-body">
          <p className="card-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        {hasMoreBtn && (
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
    </div>
  );
};
export default Card;
