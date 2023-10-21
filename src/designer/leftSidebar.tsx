import React from 'react';

import { designerLeftSidebarOpen } from './atom';
import SidebarContainer from './sidebarContainer';
import AddElement from './addElement';
import elements from './elements';

const HelperSidebar: React.FC = () => {
  return (
    <SidebarContainer
      position='left'
      title='Select Elements'
      sidebarOpenAtom={designerLeftSidebarOpen}
    >
      {elements.map((element) => (
        <AddElement key={element.widgetName} {...element} />
      ))}
    </SidebarContainer>
  );
};

export default HelperSidebar;
