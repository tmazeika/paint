import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import useMutexButtons from '../hooks/useMutexButtons';
import { MenuPopup, useMenuController } from './features/menu';
import MutexButtonsProvider from './MutexButtonsProvider';

const ToolButton: FC<{
  id: string;
  icon: IconDefinition;
  onClick?(this: void): void;
}> = ({ id, icon, children, ...props }) => {
  const { activeId, onClick } = useMutexButtons();
  const isActive = id === activeId;
  const { isOpen, onOpen, onClose, MenuProvider } = useMenuController();
  const hasChildren = children !== undefined;

  return (
    <div
      className={clsx(
        'w-9 h-9 relative flex items-center justify-center border border-b-0 border-slate-800 first-of-type:rounded-t last-of-type:border-b last-of-type:rounded-b',
        'peer-0:before:absolute peer-0:before:-inset-[1px] peer-0:before:bottom-0 peer-0:before:block peer-0:before:border-t peer-0:before:border-t-sky-600',
        isActive ? 'peer border-sky-600 bg-sky-700' : 'bg-slate-900 hover:bg-[rgb(23,31,50)]',
      )}
      onMouseDown={() => {
        onClick(id);
        props.onClick?.();
        onOpen();
      }}
      onMouseLeave={() => onClose()}
    >
      <FontAwesomeIcon className="text-slate-200" icon={icon} size="lg" />
      {hasChildren && (
        <MutexButtonsProvider noDeselect>
          {isOpen && (
            <MenuProvider>
              <MenuPopup position="right" noLeftPad>
                {children}
              </MenuPopup>
            </MenuProvider>
          )}
        </MutexButtonsProvider>
      )}
    </div>
  );
};

export default ToolButton;
