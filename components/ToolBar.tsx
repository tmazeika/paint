import type { FC } from 'react';
import MutexButtonProvider from './MutexButtonProvider';

const ToolBar: FC = ({ children }) => (
  <div className="m-2 flex flex-col gap-1">
    <MutexButtonProvider noDeselect>{children}</MutexButtonProvider>
  </div>
);

export default ToolBar;
