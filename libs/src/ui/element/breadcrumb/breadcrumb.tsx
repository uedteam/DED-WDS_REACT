import React, { useState, useEffect, useRef } from 'react';

interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
  href,
  isCurrentPage,
}) => {
  if (isCurrentPage) {
    return <span className="breadcrumb-item-label">{label}</span>;
  }
  return (
    <a className="breadcrumb-item-link" href={href}>
      {label}
    </a>
  );
};

interface BreadcrumbProps {
  className?: string;
  breadcrumbItems: { label: string; href?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (
  props: BreadcrumbProps
) => {
  const { breadcrumbItems, className } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const breadcrumbRef = useRef<HTMLUListElement>(null);

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      breadcrumbRef.current &&
      !breadcrumbRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const itemsToShow =
    breadcrumbItems.length > 3
      ? [
          breadcrumbItems[0],
          { label: '...', href: '#' },
          ...breadcrumbItems.slice(-2),
        ]
      : breadcrumbItems;

  return (
    <nav className={`breadcrumb-container ${className}`}>
      <ol className="breadcrumb">
        {itemsToShow.map((item, index) => (
          <li className="breadcrumb-item" key={index}>
            {item.label === '...' ? (
              <div className="rest">
                <span onClick={handleToggle} className="rest-label">
                  {item.label}
                </span>
                {showDropdown && (
                  <ul ref={breadcrumbRef} className="rest-dropdown-menu">
                    {breadcrumbItems
                      .slice(1, -2)
                      .map((dropdownItem, dropdownIndex) => (
                        <li className="drop-item" key={dropdownIndex}>
                          <a
                            className="drop-item-link"
                            href={dropdownItem.href}
                          >
                            {dropdownItem.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ) : (
              <BreadcrumbItem
                label={item.label}
                href={item.href === '#' ? undefined : item.href}
                isCurrentPage={index === itemsToShow.length - 1}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
