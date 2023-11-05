import { Button, Divider, Form, Typography } from 'antd';
import React, { useEffect } from 'react';

import RenderProps from './getProps';
import useDesigner from './useDesigner';
import SidebarContainer from './sidebarContainer';
import { designerRightSidebarOpen } from './atom';
import elementProps, {
  FORM_ITEM_PROPS_FIELD_NAME,
} from '../builder/exposedProps';
import { FormElementInstance } from '../builder/types';

const RightHelperSidebar: React.FC = () => {
  const { selectedElement, updateElement } = useDesigner();
  const [form] = Form.useForm();

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
    const transformedObject = Object.entries(formValues || {}).reduce<
      Record<string, string | number>
    >((acc, [key, value]) => {
      if (!key || !value) return acc;

      const [topLevelKey, innerKey] = key.split('.');
      if (!innerKey) return { ...acc, [key]: value };
      return {
        ...acc,
        [topLevelKey]: {
          ...(acc[topLevelKey] || ({} as any)),
          [innerKey]: value,
        },
      };
    }, {});

    const updatedElement: FormElementInstance = {
      ...selectedElement,
      ...transformedObject,
    };

    updateElement(updatedElement);
  };

  const onResetProps = () => {
    form.resetFields();
    if (!selectedElement) return;
    updateElement({ ...selectedElement, widgetProps: undefined });
  };

  const onResetFormProps = () => {
    form.resetFields();
  };

  const onSaveFormPropsHandler = () => {
    if (selectedElement) return null;
    const formValues = form.getFieldsValue();
    const transformedObject = Object.entries(formValues || {}).reduce(
      (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
      {}
    );
    console.log(transformedObject);
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
              ([key, value]) => {
                if (key === FORM_ITEM_PROPS_FIELD_NAME) {
                  return (
                    <div key={key}>
                      <Typography.Title type='secondary' level={4}>
                        Form Props
                      </Typography.Title>
                      {Object.entries(value).map(([innerKey, innerValue]) => {
                        return (
                          <RenderProps
                            {...{
                              name: `${key}.${innerKey}`,
                              key: `${key}.${innerKey}`,
                              label: innerKey,
                              value: innerValue as any,
                            }}
                          />
                        );
                      })}

                      <Divider className='mt-8' />
                    </div>
                  );
                }
                return (
                  <RenderProps {...{ value, key, name: key, label: key }} />
                );
              }
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
      ) : (
        <Form form={form} layout='vertical' onFinish={onSaveFormPropsHandler}>
          <div>
            {Object.entries(elementProps.form).map(([key, value]) => (
              <RenderProps {...{ key, value, name: key, label: key }} />
            ))}
          </div>

          <div className='flex items-center flex-shrink gap-2'>
            <Button onClick={onResetFormProps} className='flex-grow'>
              Reset
            </Button>
            <Button htmlType='submit' className='flex-grow'>
              Save
            </Button>
          </div>
        </Form>
      )}
    </SidebarContainer>
  );
};

export default RightHelperSidebar;
