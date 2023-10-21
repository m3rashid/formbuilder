import React from 'react';

import FormBuilder from '../builder';
import useDesigner from './useDesigner';
import HelperSidebar from './leftSidebar';
import RightHelperSidebar from './rightSidebar';
import ElementWrapper from './elementWrapper';

const Designer: React.FC = () => {
  const { elements, selectedElement } = useDesigner();
  console.log(selectedElement);

  return (
    <>
      <div className='flex h-screen bg-slate-200'>
        <HelperSidebar />

        <div className='h-[calc(h-screen - m-3)] m-3 w-full bg-white overflow-auto'>
          <FormBuilder
            meta={elements.map((el) => ({
              ...el,
              render: (WidgetField: any) => (props: any) => {
                return (
                  <ElementWrapper>
                    <WidgetField {...props} />
                  </ElementWrapper>
                );
              },
            }))}
          />
        </div>

        <RightHelperSidebar />
      </div>
    </>
  );
};

export default Designer;
