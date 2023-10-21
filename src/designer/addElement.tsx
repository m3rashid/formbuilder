import React from 'react';
import { Card, Typography } from 'antd';

import useDesigner from './useDesigner';
import { FormElementInstance } from '../builder/types';

export type AddElementProps = FormElementInstance & {
  Icon: any;
};

const AddElement: React.FC<AddElementProps> = (props) => {
  const { addElement } = useDesigner();

  const handleClick = () => {
    //
  };

  return (
    <div onClick={handleClick}>
      <Card
        onClick={() => addElement(props)}
        bodyStyle={{
          padding: 10,
          height: '100%',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div className='flex items-center justify-start gap-4'>
          <props.Icon style={{ fontSize: 20 }} />

          <Typography.Text className='m-0'>
            {props.widgetName.toUpperCase()}
          </Typography.Text>
        </div>
      </Card>
    </div>
  );
};

export default AddElement;
