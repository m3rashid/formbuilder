import { Button, Form } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';

import RenderProps from './getProps';
import useDesigner from './useDesigner';
import SidebarContainer from './sidebarContainer';
import { designerRightSidebarOpen } from './atom';
import elementProps from '../builder/exposedProps';
import { FormElementInstance } from '../builder/types';

export type RightHelperSidebarProps = {
  //
};

const RightHelperSidebar: React.FC<RightHelperSidebarProps> = () => {
  const { selectedElement, updateElement } = useDesigner();
  const [form] = useForm();

  useEffect(() => {
    form.resetFields();
    form.setFields(
      Object.entries(selectedElement?.element.widgetProps || {}).map(
        ([key, value]) => ({ name: key, value })
      )
    );
  }, [selectedElement, form]);

  const onSaveHandler = () => {
    const formValues = form.getFieldsValue();

    //@ts-ignore
    const updatedElement: FormElementInstance = {
      ...selectedElement?.element,
      widgetProps: Object.entries(formValues).reduce(
        (acc, [key, val]) => (val ? { ...acc, [key]: val } : acc),
        {}
      ),
    };

    updateElement(selectedElement?.index || 0, updatedElement); // NOTE: should not be zero if no index!!!!
  };

  const onResetProps = () => {
    const updatedElement = {
      ...selectedElement?.element,
      widgetProps: form.resetFields(),
    };

    // @ts-ignore
    // bhai type error dekh liyo you are better at typescript ;)
    // I am just introducing new bugs for your coding adventure.
    updateElement(selectedElement?.index || 0, updatedElement);
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
            {Object.entries(
              elementProps[selectedElement.element.widgetName]
            ).map(([key, value]) => (
              <RenderProps label={key} value={value} key={key} />
            ))}
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
