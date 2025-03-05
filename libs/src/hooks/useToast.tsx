import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Toast, ToastProps } from '@src/ui/module/toast';

interface ToastItem extends ToastProps {
  id: number;
  createdAt: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    if (toasts.length === 0) return;

    const sortedToasts = [...toasts].sort((a, b) => a.createdAt - b.createdAt);
    const oldestToast = sortedToasts[0];

    const timer = setTimeout(() => {
      if (oldestToast.duration === 0) return;
      removeToast(oldestToast.id);
    }, oldestToast.duration);

    return () => clearTimeout(timer);
  }, [toasts]);

  /**
   * 新增一個 toast 通知到 toasts 狀態中
   *
   * @param {ToastProps} toast - 要新增的 toast 物件
   * @returns {number} 新創建的 toast 唯一識別 ID
   *
   * @description
   * 此函數將接收一個 toast 物件，生成一個唯一 ID，並將此 toast 與預設值一起添加到狀態中。
   * 若未提供 themeColor 或 prefix，則會分別使用 'primary' 和 null 作為預設值。
   *
   * @example
   * const id = addToast({
   *   title: '成功',
   *   content: '操作已完成',
   *   duration: 3000,
   * });
   */
  const addToast = useCallback((toast: ToastProps) => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      {
        ...toast,
        id,
        createdAt: id,
        themeColor: toast.themeColor || 'primary',
        prefix: toast.prefix || null,
        title: toast.title,
        content: toast.content,
        duration: toast.duration,
        position: toast.position || 'top-right',
      },
    ]);
    return id;
  }, []);

  /**
   * 從 toast 列表中移除指定 ID 的 toast
   *
   * @param id - 要移除的 toast 的唯一識別碼
   * @returns {void}
   *
   * @remarks
   * 此函數使用 React 的 useCallback 鉤子進行記憶化，
   * 並透過 filter 方法從現有的 toasts 中過濾掉指定 ID 的 toast。
   */
  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const ToastContainer = useCallback(() => {
    if (toasts.length === 0) return null;

    /**
     * @description 將通知訊息 (toasts) 依據其位置進行分組
     * @param {Array<ToastItem>} toasts - 要進行分組的通知訊息陣列
     * @returns {Record<string, ToastItem[]>} 一個物件，其中鍵為位置字串，值為該位置的通知訊息陣列
     * @remarks
     * 此函數使用 reduce 方法將通知訊息依據其 position 屬性進行分組。
     * 若通知訊息沒有指定位置，則預設為 'top-right'。
     * 回傳的物件結構為 { [position: string]: ToastItem[] }
     */
    const toastsByPosition = toasts.reduce<Record<string, ToastItem[]>>(
      (groups, toast) => {
        const position = toast.position;
        if (!groups[position]) {
          groups[position] = [];
        }
        groups[position].push(toast);
        return groups;
      },
      {}
    );

    return ReactDOM.createPortal(
      <>
        {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
          <div
            key={position}
            className={`ded-toast-container ded-toast-${position}`}
          >
            {positionToasts.map((toast) => (
              <Toast
                key={toast.id}
                {...toast}
                onClose={() => removeToast(toast.id)}
              />
            ))}
          </div>
        ))}
      </>,
      document.body
    );
  }, [toasts, removeToast]);

  return { addToast, ToastContainer };
};
