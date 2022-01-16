import type { FC } from 'react';
import React, { useCallback, useMemo, useState } from 'react';

export const MutexButtonsContext = React.createContext({
  activeId: null as string | null,
  onClick(this: void, id: string): void {
    //
  },
  onEnter(this: void, id: string): void {
    //
  },
  onLeave(this: void, id: string): void {
    //
  },
});

const MutexButtonsProvider: FC<{
  noDeselect?: boolean;
}> = ({ noDeselect, children }) => {
  const allowsDeselect = noDeselect !== true;
  const [activeId, setActiveId] = useState<string | null>(null);
  const isActive = activeId !== null;
  const onClick = useCallback(
    (newId: string) => {
      if (allowsDeselect) {
        setActiveId((oldId) => (newId === oldId ? null : newId));
      } else {
        setActiveId(newId);
      }
    },
    [allowsDeselect],
  );
  const onEnter = useCallback(
    (newId: string) => {
      if (isActive) {
        setActiveId(newId);
      }
    },
    [isActive],
  );
  const onLeave = useCallback(() => {
    if (allowsDeselect) {
      setActiveId(null);
    }
  }, [allowsDeselect]);
  const ctx = useMemo(
    () => ({
      activeId,
      onClick,
      onEnter,
      onLeave,
    }),
    [activeId, onClick, onEnter, onLeave],
  );
  return <MutexButtonsContext.Provider value={ctx}>{children}</MutexButtonsContext.Provider>;
};

export default MutexButtonsProvider;
