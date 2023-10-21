import React from 'react';
import RenderProps from './getProps';
import SidebarContainer from './sidebarContainer';
import { designerRightSidebarOpen } from './atom';
import elementProps from '../builder/exposedProps';
import useDesigner from './useDesigner';
import { Form } from 'antd';

export type RightHelperSidebarProps = {
  //
};

const RightHelperSidebar: React.FC<RightHelperSidebarProps> = () => {
  const { selectedElement } = useDesigner();

  return (
    <SidebarContainer
      position='right'
      title='Element Props'
      sidebarOpenAtom={designerRightSidebarOpen}
    >
      <Form layout='vertical'>
        {selectedElement
          ? Object.entries(elementProps[selectedElement.widgetName]).map(
              ([key, value]) => (
                <RenderProps label={key} value={value} key={key} />
              )
            )
          : null}
      </Form>
    </SidebarContainer>
  );
};

export default RightHelperSidebar;
