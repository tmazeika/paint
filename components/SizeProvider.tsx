import type { FC } from 'react';
import React from 'react';

export type Size = 'large' | 'normal';

export const SizeContext = React.createContext('normal' as Size);

const SizeProvider: FC<{
  size: Size;
}> = ({ size, children }) => <SizeContext.Provider value={size}>{children}</SizeContext.Provider>;

export default SizeProvider;
