import React from 'react';
import { Button, Card, Typography } from 'antd';
import { useDesignerSidebarOpen } from './atom';
import { CloseOutlined, FolderOpenOutlined } from '@ant-design/icons';
import AddElement, { AddElementProps } from './addElement';

const elements: Array<AddElementProps> = [
  { id: 'button', widgetName: 'button', Icon: CloseOutlined },
  { id: 'checkbox', widgetName: 'checkbox', Icon: CloseOutlined },
  { id: 'col', widgetName: 'col', Icon: CloseOutlined },
  { id: 'row', widgetName: 'row', Icon: CloseOutlined },
  { id: 'radio', widgetName: 'radio', Icon: CloseOutlined },
  { id: 'number-input', widgetName: 'number-input', Icon: CloseOutlined },
  { id: 'password-input', widgetName: 'password-input', Icon: CloseOutlined },
  { id: 'textarea', widgetName: 'textarea', Icon: CloseOutlined },
  { id: 'text-input', widgetName: 'text-input', Icon: CloseOutlined },
  { id: 'select', widgetName: 'select', Icon: CloseOutlined },
  { id: 'year-picker', widgetName: 'year-picker', Icon: CloseOutlined },
];

const HelperSidebar: React.FC = () => {
  const [open, setOpen] = useDesignerSidebarOpen();

  if (!open) {
    return (
      <Button
        className='rounded-l-none '
        icon={<FolderOpenOutlined />}
        onClick={() => setOpen((p) => !p)}
      />
    );
  }

  return (
    <Card style={{ height: '100%' }} bodyStyle={{ padding: 10 }}>
      <div className='flex '>
        <Typography.Title
          level={4}
          style={{ margin: 0, padding: 0, flexGrow: 1 }}
        >
          Select Elements
        </Typography.Title>

        <Button
          type='text'
          icon={<CloseOutlined />}
          onClick={() => setOpen((p) => !p)}
        />
      </div>

      <div className='flex w-full flex-wrap gap-4 mt-4'>
        {elements.map((element) => (
          <AddElement key={element.id} {...element} />
        ))}
      </div>
    </Card>
  );
};

export default HelperSidebar;
