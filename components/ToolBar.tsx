import type { FC } from 'react';
import MutexButtonsProvider from './MutexButtonsProvider';
import SizeProvider from './SizeProvider';

const ToolBar: FC = ({ children }) => (
  <div className="m-2 flex flex-col gap-1">
    <SizeProvider size="large">
      <MutexButtonsProvider noDeselect>{children}</MutexButtonsProvider>
    </SizeProvider>
  </div>
);

export default ToolBar;
