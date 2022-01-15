import type { FC } from 'react';
import useMutexButton from '../hooks/useMutexButton';

const MenuButton: FC<{
  value: string;
}> = ({ value, children }) => {
  const { activeId, onClick, onPointerEnter, onPointerLeave } = useMutexButton();
  const isActive = value === activeId && children !== undefined;

  return (
    <button
      className={`relative px-2 cursor-default rounded-sm border border-transparent hover:bg-sky-700 hover:border-sky-600 ${
        isActive ? 'rounded-b-none' : ''
      }`}
      onClick={() => onClick(value)}
      onPointerEnter={() => onPointerEnter(value)}
      onPointerLeave={() => onPointerLeave(value)}
    >
      {value}
      {isActive && (
        <div className="primary-menu-popup" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      )}
    </button>
  );
};

export default MenuButton;
