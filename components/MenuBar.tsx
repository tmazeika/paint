import type { FC, PropsWithChildren } from 'react';
import React, { useCallback, useMemo, useState } from 'react';

export const MenuBarContext = React.createContext({
  activeId: null as string | null,
  onClick(this: void, id: string): void {
    //
  },
  onPointerEnter(this: void, id: string): void {
    //
  },
  onPointerLeave(this: void, id: string): void {
    //
  },
});

const MenuBar: FC<
  PropsWithChildren<{
    className?: string | undefined;
  }>
> = ({ className, children }): JSX.Element => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const hasActiveId = activeId !== null;
  const onClick = useCallback((newId: string) => {
    setActiveId((oldId) => (newId === oldId ? null : newId));
  }, []);
  const onPointerEnter = useCallback(
    (newId: string) => {
      if (hasActiveId) {
        setActiveId(newId);
      }
    },
    [hasActiveId],
  );
  const onPointerLeave = useCallback(() => {
    setActiveId(null);
  }, []);
  const ctx = useMemo(
    () => ({
      activeId,
      onClick,
      onPointerEnter,
      onPointerLeave,
    }),
    [activeId, onClick, onPointerEnter, onPointerLeave],
  );

  return (
    <div className={className}>
      <MenuBarContext.Provider value={ctx}>{children}</MenuBarContext.Provider>
    </div>
  );
};

export default MenuBar;
