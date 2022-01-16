import clsx from 'clsx';
import type { FC } from 'react';
import { useEffect } from 'react';
import useMutexButtons from '../../../hooks/useMutexButtons';
import MenuPopup from './MenuPopup';
import useMenuController from './useMenuController';

const MenuButton: FC<{
  value: string;
}> = ({ value, children }) => {
  const { activeId, onClick, onEnter, onLeave } = useMutexButtons();
  const { isOpen, onOpen, onClose, MenuProvider } = useMenuController();
  const isActive = value === activeId;

  useEffect(() => {
    if (isActive) {
      onOpen();
    } else {
      onClose();
    }
  }, [isActive, onOpen, onClose]);

  return (
    <button
      className={clsx(
        'relative px-2 cursor-default rounded-sm border border-transparent hover:border-sky-600 hover:bg-sky-700',
        isOpen && 'rounded-b-none',
      )}
      onMouseDown={() => onClick(value)}
      onMouseEnter={() => onEnter(value)}
      onMouseLeave={() => onLeave(value)}
    >
      {value}
      {isOpen && (
        <MenuProvider>
          <MenuPopup position="below" noTopPad>
            {children}
          </MenuPopup>
        </MenuProvider>
      )}
    </button>
  );
};

export default MenuButton;
