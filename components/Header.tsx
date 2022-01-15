import { faCoffee, faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import type { FC } from 'react';
import MenuBar from './MenuBar';
import MenuButton from './MenuButton';
import MenuDivider from './MenuDivider';
import MenuItem from './MenuItem';

const Header: FC = () => (
  <header className="bg-gray-900 border-b border-gray-800">
    <MenuBar>
      <MenuButton value="File">
        <MenuItem icon={faFile} value="New" hotkey="Ctrl N" />
        <MenuItem icon={faFolderOpen} value="Open..." hotkey="Ctrl O" />
        <MenuDivider />
        <MenuItem value="Open Recent">
          <MenuItem value="Submenu 1" />
          <MenuItem value="Submenu 2" hotkey="Ctrl N">
            <MenuItem value="Submenu 3" />
            <MenuItem value="Submenu 4" />
          </MenuItem>
          <MenuItem icon={faCoffee} value="Submenu 3" hotkey="C" />
        </MenuItem>
        <MenuItem value="Open 2" />
      </MenuButton>
      <MenuButton value="Edit">
        <MenuItem value="Undo" hotkey="Ctrl Z" />
        <MenuItem value="Redo" hotkey="Shift Ctrl Z" />
      </MenuButton>
      <MenuButton value="Window" />
      <MenuButton value="Help" />
    </MenuBar>
  </header>
);

export default Header;
