import type { FC } from 'react';
import MenuBar from './MenuBar';
import MenuButton from './MenuButton';
import MenuDivider from './MenuDivider';
import MenuItem from './MenuItem';

const Header: FC = () => (
  <MenuBar className="p-1 bg-gray-900">
    <MenuButton value="File">
      <MenuItem image="N" value="New" hotkey="Ctrl N" />
      <MenuItem value="Open" />
      <MenuDivider />
      <MenuItem value="Open Recent">
        <MenuItem value="Submenu 1" />
        <MenuItem value="Submenu 2" hotkey="Ctrl N">
          <MenuItem value="Submenu 3" />
          <MenuItem value="Submenu 4" />
        </MenuItem>
        <MenuItem image="X" value="Submenu 3" hotkey="C" />
      </MenuItem>
      <MenuItem value="Open 2" />
    </MenuButton>
    <MenuButton value="Edit">
      <MenuItem value="Undo" hotkey="Ctrl Z" />
      <MenuItem value="Redo" hotkey="Ctrl Y" />
    </MenuButton>
    <MenuButton value="Window" />
    <MenuButton value="Help" />
  </MenuBar>
);

export default Header;
