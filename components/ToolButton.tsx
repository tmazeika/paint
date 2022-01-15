import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import React from 'react';
import useMutexButton from '../hooks/useMutexButton';

const ToolButton: FC<{
  id: string;
  icon: IconDefinition;
  onClick?(this: void): void;
}> = ({ id, icon, ...props }) => {
  const { activeId, onClick } = useMutexButton();
  const isActive = id === activeId;

  return (
    <div
      className={`w-9 h-9 flex items-center justify-center border border-b-0 border-slate-800 bg-slate-900
        first-of-type:rounded-t last-of-type:border-b last-of-type:rounded-b ${
          isActive ? 'bg-sky-700' : 'hover:bg-[rgb(23,31,50)]'
        }`}
      onClick={() => {
        onClick(id);
        props.onClick?.();
      }}
    >
      <FontAwesomeIcon className="text-slate-200" icon={icon} size="lg" />
    </div>
  );
};

export default ToolButton;
