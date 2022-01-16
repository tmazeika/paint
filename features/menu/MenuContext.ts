import React from 'react';

const MenuContext = React.createContext({
  isOpen: false,
  onOpen(this: void): void {
    //
  },
  onClose(this: void): void {
    //
  },
});

export default MenuContext;
