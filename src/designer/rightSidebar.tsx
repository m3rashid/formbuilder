import { Button, Form } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';

import RenderProps from './getProps';
import useDesigner from './useDesigner';
import SidebarContainer from './sidebarContainer';
import { designerRightSidebarOpen } from './atom';
import elementProps from '../builder/exposedProps';
import { FormElementInstance } from '../builder/types';

const RightHelperSidebar: React.FC = () => {
  const { selectedElement, updateElement } = useDesigner();
  const [form] = useForm();

  useEffect(() => {
    form.resetFields();
    if (!selectedElement) return;
    form.setFields(
      Object.entries(selectedElement?.widgetProps || {}).map(
        ([key, value]) => ({ name: key, value })
      )
    );
  }, [selectedElement, form]);

  const onSaveHandler = () => {
    if (!selectedElement) return;

    const formValues = form.getFieldsValue();
    const updatedElement: FormElementInstance = {
      ...selectedElement,
      widgetProps: Object.entries(formValues).reduce(
        (acc, [key, val]) => (val ? { ...acc, [key]: val } : acc),
        {}
      ),
    };

    updateElement(updatedElement);
  };

  const onResetProps = () => {
    if (!selectedElement) return;
    updateElement({ ...selectedElement, widgetProps: undefined });
  };

  return (
    <SidebarContainer
      position='right'
      title='Element Props'
      sidebarOpenAtom={designerRightSidebarOpen}
    >
      {selectedElement ? (
        <Form form={form} layout='vertical' onFinish={onSaveHandler}>
          <div>
            {Object.entries(elementProps[selectedElement.widgetName]).map(
              ([key, value]) => (
                <RenderProps label={key} value={value} key={key} />
              )
            )}
          </div>

          <div className='flex items-center flex-shrink gap-2'>
            <Button onClick={onResetProps} className='flex-grow'>
              Reset
            </Button>
            <Button htmlType='submit' className='flex-grow'>
              Save
            </Button>
          </div>
        </Form>
      ) : null}
    </SidebarContainer>
  );
};

export default RightHelperSidebar;
