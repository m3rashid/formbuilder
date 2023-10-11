import React from 'react';
import { Card, Typography } from 'antd';

import useDesigner from './useDesigner';
import { FormElementInstance } from './atom';

export type AddElementProps = FormElementInstance & {
  Icon: any;
};

const AddElement: React.FC<AddElementProps> = (props) => {
  const { addElement } = useDesigner();

  return (
    <>
      <Card
        style={{
          width: 140,
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        bodyStyle={{ height: '100%' }}
        onClick={() => addElement(0, props)}
      >
        <props.Icon style={{ fontSize: 30 }} />
        <br />
        <Typography.Text>{props.widgetName.toUpperCase()}</Typography.Text>
      </Card>
    </>
  );
};

export default AddElement;
