import type { FC, PropsWithChildren } from 'react';
import { useContext } from 'react';
import { MenuBarContext } from './MenuBar';

const MenuButton: FC<
  PropsWithChildren<{
    value: string;
  }>
> = ({ value, children }): JSX.Element => {
  const { activeId, onClick, onPointerEnter, onPointerLeave } = useContext(MenuBarContext);
  const isActive = value === activeId && children !== undefined;

  return (
    <button
      className={`relative px-2 rounded-sm border border-transparent hover:bg-sky-700 hover:border-sky-600 ${
        isActive ? 'rounded-b-none' : ''
      }`}
      onClick={() => onClick(value)}
      onPointerEnter={() => onPointerEnter(value)}
      onPointerLeave={() => onPointerLeave(value)}
    >
      {value}
      {isActive && <div className="primary-menu-popup">{children}</div>}
    </button>
  );
};

export default MenuButton;
