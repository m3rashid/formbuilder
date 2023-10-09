import React, { FC } from 'react';
import FormRenderer from './renderer';
import { widgetMap } from './constants';
import { CurrentWidgetProp, FormRenderProps, SupportedWidget } from './types';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
} from 'antd';

type FormBuilder = FC<FormRenderProps> & {
  register: (
    widgetName: SupportedWidget
  ) => (
    widget: CurrentWidgetProp<typeof widgetName>,
    fieldTransformer?: (params?: any) => any
  ) => void;
  useForceUpdate: () => () => void;
};

const FormBuilder: FormBuilder = (props) => {
  return <FormRenderer meta={props.meta} />;
};

FormBuilder.register = (widgetName) => (Widget, fieldTransformer) => {
  widgetMap[widgetName] = {
    widget: (props: CurrentWidgetProp<typeof widgetName>) => (
      <Widget {...props} />
    ),
    fieldTransformer: fieldTransformer || undefined,
  };
};

FormBuilder.useForceUpdate = () => {
  const [, update] = React.useState<Record<any, any>>();
  const forceUpdate = React.useCallback(() => update({}), []);
  return forceUpdate;
};

FormBuilder.register('input')(Input);
FormBuilder.register('button')(Button);
FormBuilder.register('number')(InputNumber);
FormBuilder.register('password')(Input.Password);
FormBuilder.register('textarea')(Input.TextArea);

FormBuilder.register('checkbox')(Checkbox);
FormBuilder.register('checkbox-group')(Checkbox.Group);

FormBuilder.register('radio')(Radio);
FormBuilder.register('radio-group')(Radio.Group);

FormBuilder.register('month-picker')(DatePicker.MonthPicker as any);
FormBuilder.register('quarter-picker')(DatePicker.QuarterPicker as any);
FormBuilder.register('timerange-picker')(DatePicker.RangePicker as any);
FormBuilder.register('time-picker')(DatePicker.TimePicker as any);
FormBuilder.register('week-picker')(DatePicker.WeekPicker as any);
FormBuilder.register('year-picker')(DatePicker.YearPicker as any);

FormBuilder.register('switch')(Switch);
FormBuilder.register('select')(Select);

FormBuilder.register('form')(Form);
FormBuilder.register('form-item')(Form.Item);

FormBuilder.register('image')(Image);

FormBuilder.register('row')(Row);
FormBuilder.register('col')(Col);

export default FormBuilder;
