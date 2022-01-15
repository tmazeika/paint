import type { FC } from 'react';
import React, { useCallback, useMemo, useState } from 'react';

export const MutexButtonContext = React.createContext({
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

const MutexButtonProvider: FC<{
  noDeselect?: boolean;
}> = ({ noDeselect, children }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const hasActiveId = activeId !== null;
  const onClick = useCallback(
    (newId: string) => {
      if (noDeselect === true) {
        setActiveId(newId);
      } else {
        setActiveId((oldId) => (newId === oldId ? null : newId));
      }
    },
    [noDeselect],
  );
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

  return <MutexButtonContext.Provider value={ctx}>{children}</MutexButtonContext.Provider>;
};

export default MutexButtonProvider;
