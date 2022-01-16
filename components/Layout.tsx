import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faAdjust, faCropAlt, faFillDrip, faMousePointer, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';
import { MenuItem } from './features/menu';
import Header from './Header';
import ToolBar from './ToolBar';
import ToolButton from './ToolButton';

const Layout: FC = () => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Paint</title>
    </Head>
    <div className="w-[100vw] h-[100vh] grid grid-rows-[min-content_auto] grid-cols-[min-content_auto_min-content] font-sans text-white text-tiny">
      <div className="row-start-1 col-span-full">
        <Header />
      </div>
      <main className="row-start-2 col-span-full h-36" />
      <div className="row-start-2 col-start-1">
        <ToolBar>
          <div>
            <ToolButton id="mouse-pointer" icon={faMousePointer}>
              <MenuItem value="Tweak" />
              <MenuItem value="Twerk" />
            </ToolButton>
            <ToolButton id="square" icon={faSquare} />
            <ToolButton id="adjust" icon={faAdjust} />
          </div>
          <div>
            <ToolButton id="crop-alt" icon={faCropAlt} />
          </div>
          <div>
            <ToolButton id="fill-drip" icon={faFillDrip} />
            <ToolButton id="paint-brush" icon={faPaintBrush} />
          </div>
        </ToolBar>
      </div>
      <div className="row-start-2 col-start-3">
        <ToolBar />
      </div>
    </div>
    {/*{children}*/}
  </>
);

export default Layout;
