import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import useMenu from './useMenu';

const MenuPopup: FC<{
  position: 'below' | 'right';
  noTopPad?: boolean;
  noLeftPad?: boolean;
}> = ({ position, noTopPad, noLeftPad, children }) => {
  const { onClose } = useMenu();
  const isTopPad = noTopPad !== true;
  const isLeftPad = noLeftPad !== true;

  return (
    <div
      className={clsx(
        'absolute z-20 py-0.5 select-none rounded border border-slate-800 bg-slate-900 grid grid-cols-[repeat(4,max-content)_0] before:absolute before:-inset-6',
        position === 'right' && 'left-full -top-0.5-1px',
        position === 'below' && '-left-[1px] rounded-tl-none',
        !isTopPad && 'before:top-0',
        !isLeftPad && 'before:left-0',
      )}
      onMouseDown={(e) => {
        e.stopPropagation();
        const x = e.clientX,
          y = e.clientY;
        const { top, right, bottom, left } = e.currentTarget.getBoundingClientRect();
        if (x < left || x > right || y < top || y > bottom) {
          onClose();
        }
      }}
    >
      {children}
    </div>
  );
};

export default MenuPopup;
