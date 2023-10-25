import React from 'react';
import { Radio } from 'antd';
import { DndContext, closestCenter } from '@dnd-kit/core';

import FormBuilder from '../builder';
import useDesigner from './useDesigner';
import LeftSidebar from './leftSidebar';
import ElementWrapper from './elementWrapper';
import RightHelperSidebar from './rightSidebar';

const Designer: React.FC = () => {
  const { elements, mode, setMode, onDragEnd } = useDesigner();

  return (
    <>
      <div className='flex h-screen bg-slate-200'>
        <LeftSidebar />

        <div className='h-[calc(h-screen - m-3)] m-3 w-full overflow-auto'>
          <div className='bg-white rounded-md mb-3 px-4 py-2'>
            <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
              <Radio.Button value='edit'>Edit</Radio.Button>
              <Radio.Button value='preview'>Preview</Radio.Button>
            </Radio.Group>
          </div>

          {elements.length > 0 ? (
            mode === 'preview' ? (
              <div className='h-[calc(h-screen - 90px)] bg-white rounded-md'>
                <FormBuilder meta={elements} />
              </div>
            ) : (
              <DndContext
                onDragEnd={onDragEnd}
                collisionDetection={closestCenter}
              >
                <div className='h-[calc(h-screen - 90px)] p-2 bg-white rounded-md'>
                  <FormBuilder
                    meta={elements.map((el) => ({
                      ...el,
                      render: (WidgetField: any) => (props: any) => {
                        return (
                          <ElementWrapper id={el.key} key={el.key}>
                            <WidgetField {...props} />
                          </ElementWrapper>
                        );
                      },
                    }))}
                  />
                </div>
              </DndContext>
            )
          ) : null}
        </div>

        <RightHelperSidebar />
      </div>
    </>
  );
};

export default Designer;
