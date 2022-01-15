import type { FC } from 'react';
import React from 'react';
import MutexButtonProvider from './MutexButtonProvider';

const MenuBar: FC = ({ children }) => (
  <div className="p-1">
    <MutexButtonProvider>{children}</MutexButtonProvider>
  </div>
);

export default MenuBar;
