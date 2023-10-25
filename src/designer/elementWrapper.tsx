import React from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import useDesigner from './useDesigner';

export type ElementWrapperProps = React.PropsWithChildren & {
  id: string;
};

const ElementWrapper: React.FC<ElementWrapperProps> = (props) => {
  const { selectElement, removeElement } = useDesigner();

  return (
    <div
      className='p-2 border-2 flex cursor-pointer'
      onClick={() => selectElement(props.id)}
    >
      {props.children}

      <div className='flex-shrink'>
        <Button
          icon={<CloseOutlined />}
          onClick={() => removeElement(props.id)}
        />
      </div>
    </div>
  );
};

export default ElementWrapper;
