import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import type { FC } from 'react';
import React, { useState } from 'react';
import useSize from '../../hooks/useSize';
import MenuPopup from './MenuPopup';

const MenuItem: FC<{
  icon?: IconDefinition;
  value: React.ReactNode;
  hotkey?: React.ReactNode;
  onClick?(this: void): void;
}> = ({ icon, value, hotkey, onClick, children }) => {
  const [isHover, setIsHover] = useState(false);
  const isLarge = useSize() === 'large';
  const hasIcon = icon !== undefined;
  const hasChildren = children !== undefined;

  const Col: FC<{
    className?: string;
    extra?: boolean;
  }> = ({ className, extra, children }) => {
    const isExtra = extra === true;
    return (
      <div
        className={clsx(
          'z-10 text-left',
          isLarge ? 'pl-3 py-2' : 'pl-1.5 py-0.5',
          isExtra && 'text-right text-gray-600',
          isHover && 'bg-sky-700',
          isHover && isExtra && 'text-sky-300',
          className,
        )}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      className="contents"
      onMouseUp={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Col className="ml-0.5 rounded-l-sm">{hasIcon && <FontAwesomeIcon className="text-slate-200" icon={icon} />}</Col>
      <Col>{value}</Col>
      <Col extra>{hotkey}</Col>
      <Col className={clsx('mr-0.5 rounded-r-sm', isLarge ? 'pr-3' : 'pr-1.5')} extra>
        {hasChildren && <FontAwesomeIcon icon={faCaretRight} />}
      </Col>
      <div className="relative">{isHover && hasChildren && <MenuPopup position="right">{children}</MenuPopup>}</div>
    </div>
  );
};

export default MenuItem;
