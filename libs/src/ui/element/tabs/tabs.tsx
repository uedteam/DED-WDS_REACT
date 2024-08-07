import React, { useState, MouseEvent } from 'react';
import { Button } from '../button/button';
import { getActiveClass, getDisableClass, getThemeClass } from '../tabs/styled';

interface Tab {
  title: string;
  content: string;
}

interface TabItemProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  type?: 'card' | 'default';
  title: string;
  index: number;
  isActive: boolean;
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const TabItem: React.FC<TabItemProps> = ({
  themeColor = '',
  type = 'default',
  title,
  index,
  isActive,
  isDisabled = false,
  onClick,
  className,
}) => (
  <Button
    className={`tab ${isActive ? getActiveClass(themeColor, type) : ''} ${
      isDisabled
        ? getDisableClass()
        : className || getThemeClass(themeColor, type)
    }`}
    variant="text"
    data-index={index}
    onClick={onClick}
  >
    {title}
  </Button>

  // 如果要使用原生 button，需要重新調樣式
  // <button
  //   className={`tab ${isActive ? getActiveClass(themeColor, type) : ''} ${
  //     isDisabled
  //       ? getDisableClass()
  //       : className || getThemeClass(themeColor, type)
  //   }`}
  //   data-index={index}
  //   onClick={onClick}
  // >
  //   {title}
  // </button>
);

interface TabsProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  type?: 'card' | 'default';
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const { tabs, themeColor, type, isDisabled, onClick } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const index = parseInt(event.currentTarget.dataset.index || '0', 10);
    setActiveTabIndex(index);
    event.currentTarget.blur();
    onClick && onClick(event);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            title={tab.title}
            themeColor={themeColor}
            type={type}
            isDisabled={isDisabled}
            index={index}
            isActive={index === activeTabIndex}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className={`tab-content ${isDisabled && 'tab-disable'}`}>
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
