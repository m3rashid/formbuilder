import React from 'react';
import useDesigner from './useDesigner';
import FormBuilder from '../builder';
import HelperSidebar from './sidebar';
import { useDesignerSidebarOpen } from './atom';

const Designer: React.FC = () => {
  const { elements } = useDesigner();
  const [open, setOpen] = useDesignerSidebarOpen();

  return (
    <>
      <div className='flex h-screen'>
        <div className={`h-screen ${open ? 'w-80' : ''}`}>
          <HelperSidebar />
        </div>

        <div className='h-screen'>
          <FormBuilder meta={elements} />
        </div>
      </div>
    </>
  );
};

export default Designer;
