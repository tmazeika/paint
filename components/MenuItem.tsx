import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import React, { useState } from 'react';

const MenuItem: FC<{
  icon?: IconDefinition;
  value: React.ReactNode;
  hotkey?: React.ReactNode;
  onClick?(this: void): void;
}> = ({ icon, value, hotkey, onClick, children }) => {
  const [isActive, setIsActive] = useState(false);
  const hasIcon = icon !== undefined;
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
      <div className={`menu-item-col ml-0.5 rounded-l-sm text-center ${hasIcon ? 'px-1.5' : 'pl-1.5'}`}>
        {hasIcon && <FontAwesomeIcon className="text-slate-200" icon={icon} />}
      </div>
      <div className="menu-item-col">{value}</div>
      <div className={`menu-item-col menu-item-col-r ${hasHotkey ? 'pl-1.5' : ''}`}>{hotkey}</div>
      <div
        className={`menu-item-col menu-item-col-r mr-0.5 rounded-r-sm ${
          hasChildren ? (hasHotkey ? 'pl-0.5 pr-1.5' : 'px-1.5') : 'pr-1.5'
        }`}
      >
        {hasChildren && <FontAwesomeIcon icon={faCaretRight} />}
      </div>
      <div className="relative">{isActive && <div className="secondary-menu-popup">{children}</div>}</div>
    </div>
  );
};

export default MenuItem;
