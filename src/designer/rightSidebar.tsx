import React from 'react';
import { designerRightSidebarOpen } from './atom';
import RenderProps from './getProps';
import { buttonProps } from '../builder/exposedProps';
import SidebarContainer from './sidebarContainer';

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
      {Object.entries(buttonProps).map(([key, value]) => (
        <RenderProps label={key} value={value} key={key} />
      ))}
    </SidebarContainer>
  );
};

export default RightHelperSidebar;
