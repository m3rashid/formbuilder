import React from 'react';
import { Button, Card, Typography } from 'antd';
import { RecoilState, useRecoilState } from 'recoil';
import { CloseOutlined, FolderOpenOutlined } from '@ant-design/icons';

export type SidebarContainerProps = React.PropsWithChildren & {
  title: string;
  sidebarOpenAtom: RecoilState<boolean>;
  position: 'left' | 'right';
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({
  title,
  sidebarOpenAtom,
  children,
  position,
}) => {
  const [open, setOpen] = useRecoilState(sidebarOpenAtom);

  if (!open) {
    return (
      <Button
        className={position === 'left' ? 'rounded-l-none' : 'rounded-r-none'}
        icon={<FolderOpenOutlined />}
        onClick={() => setOpen((p) => !p)}
      />
    );
  }

  return (
    <Card
      style={{
        height: '100vh',
        overflow: 'hidden',
        minWidth: 320,
        maxWidth: 320,
      }}
      bodyStyle={{ padding: 10 }}
    >
      <div className='flex '>
        <Typography.Title
          level={4}
          style={{ margin: 0, padding: 0, flexGrow: 1 }}
        >
          {title}
        </Typography.Title>

        <Button
          type='text'
          icon={<CloseOutlined />}
          onClick={() => setOpen((p) => !p)}
        />
      </div>

      <div
        className='flex w-full py-4 pb-8 flex-col gap-4 mt-4 scrollbar-hidden'
        style={{ height: 'calc(100vh - 42px)', overflowY: 'auto' }}
      >
        {children}
      </div>
    </Card>
  );
};

export default SidebarContainer;
