import { Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { SupportedValues } from '../builder/exposedProps';
import _ from 'lodash-es';

const RenderProps = (props: { label: string; value: SupportedValues }) => {
  const labelToShow = _.startCase(props.label);

  if (Array.isArray(props.value)) {
    return (
      <Form.Item label={labelToShow} name={props.label}>
        <Select
          options={props.value.map((t) => ({ label: t, value: t }))}
          placeholder={`Select value for ${props.label}`}
        />
      </Form.Item>
    );
  }

  if (props.value === 'string') {
    return (
      <Form.Item name={props.label} label={labelToShow}>
        <Input placeholder={`Value for ${props.label}`} />
      </Form.Item>
    );
  }

  if (props.value === 'boolean') {
    return (
      <Form.Item name={props.label} label={labelToShow}>
        <Checkbox />
      </Form.Item>
    );
  }

  if (props.value === 'number') {
    return (
      <Form.Item name={props.label} label={labelToShow}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
    );
  }

  if (props.value === 'textarea') {
    return (
      <Form.Item name={props.label} label={labelToShow}>
        <Input.TextArea
          placeholder={`Value for ${props.label}`}
        ></Input.TextArea>
      </Form.Item>
    );
  }
};

export default RenderProps;
