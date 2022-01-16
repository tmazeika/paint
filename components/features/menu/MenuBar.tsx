import type { FC } from 'react';
import React from 'react';
import MutexButtonsProvider from '../../MutexButtonsProvider';

const MenuBar: FC = ({ children }) => (
  <div className="p-1">
    <MutexButtonsProvider>{children}</MutexButtonsProvider>
  </div>
);

export default MenuBar;
