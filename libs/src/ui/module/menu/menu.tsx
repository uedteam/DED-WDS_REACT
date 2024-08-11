import React from 'react';

/* 組件介面參數 props */
export interface MenuProps {
  // size?: 'small' | 'medium' | 'large';
  // isDisabled?: boolean;
  options: Array<{
    prefix?: React.ReactNode;
    content: string;
    suffix?: React.ReactNode;
  }>;
  onClick?: () => void;
  className?: string;
}

/* 定義組件 */
/* 修改組件定義名稱 Component */
export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  /* 解構組件參數 */
  const {
    // size,
    // isDisabled,
    options,
    className,
  } = props;

  return (
    <ul className="menu">
      {options.map((option, index) => {
        const { prefix, content, suffix } = option;
        return (
          <li key={index} className="menu-item">
            {prefix && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {prefix}
              </div>
            )}
            <div style={{ marginRight: 'auto' }}>{content}</div>
            {suffix && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {suffix}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
/* 修改匯出組件定義名稱 Component */
export default Menu;
