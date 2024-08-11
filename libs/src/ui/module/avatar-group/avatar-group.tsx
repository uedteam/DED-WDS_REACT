import React, { useEffect } from 'react';
import { Avatar, AvatarProps } from '../../element/avatar';
import { Button, Menu } from '../../../ui';
import { splitArray } from '../../../utils';

// 組件介面參數 props
interface AvatarGroupProps {
  users: AvatarProps[];
  limit: number;
  className?: string;
}

// 定義組件
export const AvatarGroup: React.FC<AvatarGroupProps> = (
  props: AvatarGroupProps
) => {
  // 解構組件參數
  const { users, limit, className, ...rest } = props;
  const restCount = users.length - limit;
  const result = splitArray(users, limit);

  const [isOpen, setIsOpen] = React.useState(false);
  const [menu, setMenu] = React.useState<
    {
      prefix?: React.ReactNode;
      content: string;
      suffix?: React.ReactNode;
    }[]
  >([]);

  if (limit < 1) {
    throw new Error('Limit must be at least 1');
  }

  useEffect(() => {
    return setMenu(
      result.restList.map((user) => {
        return {
          prefix: (
            <Avatar
              size="xsmall"
              shape="circle"
              userName={user.userName}
              imageSrc={user.imageSrc || ''}
            />
          ),
          content: user.userName,
        };
      })
    );
  }, []);

  return (
    <div className="avatar-group">
      {result.currList.map((user, index) => {
        const { shape, size, userName, status, imageSrc } = user;
        return (
          <Avatar
            key={index}
            shape={shape}
            size={size}
            userName={userName}
            status={status}
            imageSrc={imageSrc || ''}
            {...rest}
          />
        );
      })}

      {result.restList.map((user, index) => {
        // eslint-disable-next-line array-callback-return
        if (index !== 0) return;
        const { shape, size } = user;
        return (
          <div key={index} className="rest-container">
            <Button
              variant="text"
              size="large"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <Avatar
                shape={shape}
                size={size}
                userName={`+${restCount}`}
                {...rest}
              ></Avatar>
            </Button>
            {isOpen && (
              <div className="rest-container-menu">
                <Menu key={index} options={menu} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default AvatarGroup;
