import React, { useState, MouseEvent } from 'react';
import Add from '@assets/add.svg?react';
import ArrowDown from '@assets/arrow_down.svg?react';
// import { Button } from '../button/button';
// import {
//   getActiveClass,
//   getDisableClass,
//   getThemeClass,
// } from '../accordion/styled';

interface AccordionItemProps {
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
  content: string;
  isActive: boolean;
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  themeColor = '',
  type = 'default',
  title,
  content,
  isActive,
  isDisabled = false,
  onClick,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  // <Button
  //   className={`accordion-item ${
  //     isActive ? getActiveClass(themeColor, type) : ''
  //   } ${
  //     isDisabled
  //       ? getDisableClass()
  //       : className || getThemeClass(themeColor, type)
  //   }`}
  //   variant="text"
  //   onClick={onClick}
  // >
  //   {title}
  // </Button>

  return (
    <div className="accordion-item">
      <div className="accordion-item-header" onClick={toggleOpen}>
        <Add className="accordion-item-icon" />
        <div>{title}</div>
        <ArrowDown className="accordion-item-icon" />
      </div>
      {isOpen && <div className="accordion-item-content">{content}</div>}
    </div>
  );
};

interface AccordionProps {
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
  accordionItems: {
    title: string;
    content: string;
  }[];
}

export const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  const { accordionItems, themeColor, type, isDisabled, onClick } = props;
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<number>(0);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const index = parseInt(event.currentTarget.dataset.index || '0', 10);
    setActiveAccordionIndex(index);
    event.currentTarget.blur();
    onClick && onClick(event);
  };

  return (
    <div className="accordion-container">
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            themeColor={themeColor}
            type={type}
            isDisabled={isDisabled}
            isActive={index === activeAccordionIndex}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
