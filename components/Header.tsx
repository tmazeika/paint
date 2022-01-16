import { faCoffee, faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import type { FC } from 'react';
import { MenuBar, MenuButton, MenuDivider, MenuItem } from './features/menu';

const Header: FC = () => (
  <header className="bg-gray-900 border-b border-gray-800">
    <MenuBar>
      <MenuButton value="File">
        <MenuItem icon={faFile} value="New" hotkey="Ctrl N" />
        <MenuItem icon={faFolderOpen} value="Open..." hotkey="Ctrl O" />
        <MenuDivider />
        <MenuItem value="Open Recent">
          <MenuItem value="Submenu 1" />
          <MenuItem icon={faCoffee} value="Submenu 2" hotkey="Ctrl N">
            <MenuItem value="Submenu 3">
              <MenuItem value="Submenu 7" hotkey="F9" />
              <MenuItem value="Submenu 8" hotkey="F10" />
            </MenuItem>
            <MenuItem value="Submenu 4">
              <MenuItem value="Submenu 5" />
              <MenuItem value="Submenu 6" />
            </MenuItem>
          </MenuItem>
          <MenuItem value="Submenu 3" hotkey="C" />
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
