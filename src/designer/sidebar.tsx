import React from 'react';
import useDesigner from './useDesigner';
import { Button, Card, Typography } from 'antd';
import { useDesignerSidebarOpen } from './atom';
import { CloseOutlined, FolderOpenOutlined } from '@ant-design/icons';

const HelperSidebar: React.FC = () => {
  const {} = useDesigner();
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
    <Card style={{ height: '100%' }} bodyStyle={{ padding: 5 }}>
      <div className='flex '>
        <Typography.Title
          level={4}
          style={{ margin: 0, padding: 0, flexGrow: 1 }}
        >
          Select
        </Typography.Title>

        <Button
          type='text'
          icon={<CloseOutlined />}
          onClick={() => setOpen((p) => !p)}
        />
      </div>
    </Card>
  );
};

export default HelperSidebar;
