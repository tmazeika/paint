import type { FC } from 'react';
import React, { useState } from 'react';

const MenuItem: FC<{
  image?: React.ReactNode;
  value: React.ReactNode;
  hotkey?: React.ReactNode;
  onClick?(this: void): void;
}> = ({ image, value, hotkey, onClick, children }) => {
  const [isActive, setIsActive] = useState(false);
  const hasImage = image !== undefined;
  const hasHotkey = hotkey !== undefined;
  const hasChildren = children !== undefined;

  return (
    <div
      className="menu-item-row"
      onClick={(e) => {
        e.stopPropagation();
        if (onClick !== undefined) {
          onClick();
          setIsActive(false);
        }
      }}
      onPointerEnter={hasChildren ? () => setIsActive(true) : undefined}
      onPointerLeave={hasChildren ? () => setIsActive(false) : undefined}
    >
      <div className={`menu-item-col ml-0.5 rounded-l-sm ${hasImage ? 'px-1.5' : 'pl-1.5'}`}>{image}</div>
      <div className="menu-item-col">{value}</div>
      <div className={`menu-item-col menu-item-col-r ${hasHotkey ? 'pl-1.5' : ''}`}>{hotkey}</div>
      <div
        className={`menu-item-col menu-item-col-r mr-0.5 rounded-r-sm ${
          hasChildren ? (hasHotkey ? 'pl-0.5 pr-1.5' : 'px-1.5') : 'pr-1.5'
        }`}
      >
        {hasChildren && <span className="inline-block rotate-90">&#9650;</span>}
      </div>
      <div className="relative">{isActive && <div className="secondary-menu-popup">{children}</div>}</div>
    </div>
  );
};

export default MenuItem;
