import React, { useState, useRef, useEffect } from 'react';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import { List, Input } from '@src/ui';
import { ItemProps } from '@src/ui/module/list';

interface DropdownProps {
  dataSource: ItemProps[];
  placeholder?: string;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  currItem?: ItemProps;
  onSelect?: (item: ItemProps) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder = 'Placeholder',
  label = '',
  size = 'medium',
  currItem,
  className = '',
  onSelect,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(dropdownRef);
  const [item, setItem] = useState({ label: '', value: '' });

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSelected = (item: ItemProps) => {
    setItem(item);
    onSelect && onSelect(item);
    setIsVisible(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !document.getElementById('portal-root')?.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (currItem) {
      setItem(currItem);
    }
  }, [currItem]);

  return (
    <>
      {label && <label className="ded-input-label">{label}</label>}
      <div
        id="dropdownRef"
        className="ded-dropdown"
        ref={dropdownRef}
        onClick={handleClick}
      >
        <Input
          placeholder={placeholder}
          size={size}
          currValue={item.label}
          hasClear={false}
          isOpen={isVisible}
          type="text"
          prefix=""
          className="ded-dropdown-input"
        />
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(
              position,
              childrenSize,
              'bottom',
              '8px',
              true
            )}
            className={`ded-tooltip ${className}`}
          >
            <List {...rest} hasOutline onSelect={handleSelected} />
          </div>
        )}
      </Portal>
    </>
  );
};
export default Dropdown;
