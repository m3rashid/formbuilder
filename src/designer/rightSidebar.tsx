import React from 'react';
import RenderProps from './getProps';
import SidebarContainer from './sidebarContainer';
import { designerRightSidebarOpen } from './atom';
import elementProps from '../builder/exposedProps';

export type RightHelperSidebarProps = {
  //
};

const RightHelperSidebar: React.FC<RightHelperSidebarProps> = () => {
  return (
    <SidebarContainer
      position='right'
      title='Element Props'
      sidebarOpenAtom={designerRightSidebarOpen}
    >
      {/* {Object.entries(elementProps[]).map(([key, value]) => (
        <RenderProps label={key} value={value} key={key} />
      ))} */}
    </SidebarContainer>
  );
};

export default RightHelperSidebar;
