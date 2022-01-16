import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
import MenuContext from './MenuContext';

export interface MenuController {
  isOpen: boolean;
  MenuProvider: FC;

  onOpen(this: void): void;

  onClose(this: void): void;
}

const useMenuController = (): MenuController => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const controller = useMemo(
    () => ({
      isOpen,
      onOpen,
      onClose,
    }),
    [isOpen, onOpen, onClose],
  );

  const MenuProvider: FC = useCallback(
    ({ children }) => <MenuContext.Provider value={controller}>{children}</MenuContext.Provider>,
    [controller],
  );

  return {
    ...controller,
    MenuProvider,
  };
};

export default useMenuController;
