import React from 'react';

import { designerLeftSidebarOpen } from './atom';
import SidebarContainer from './sidebarContainer';
import elements from './elements';
import { Card, Typography } from 'antd';
import useDesigner from './useDesigner';

const LeftSidebar: React.FC = () => {
  const { addElement } = useDesigner();

  return (
    <SidebarContainer
      position='left'
      title='Select Elements'
      sidebarOpenAtom={designerLeftSidebarOpen}
    >
      {elements.map((element) => (
        <Card
          key={element.widgetName}
          onClick={() => addElement(element)}
          bodyStyle={{
            padding: 10,
            height: '100%',
            paddingLeft: 20,
            paddingRight: 20,
          }}
          className='cursor-pointer hover:bg-gray-100 hover:shadow-md '
        >
          <div className='flex items-center justify-start gap-4'>
            <element.Icon />

            <Typography.Text className='m-0'>
              {element.widgetName.toUpperCase()}
            </Typography.Text>
          </div>
        </Card>
      ))}
    </SidebarContainer>
  );
};

export default LeftSidebar;
