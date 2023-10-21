import { SupportedWidget } from './types';

export type SupportedValues =
  | 'string'
  | 'textarea'
  | 'number'
  | 'boolean'
  | Array<string>;
export type Props = Record<string, SupportedValues>;

const textInputProps: Props = {
  bordered: 'boolean',
  defaultValue: 'string',
  disabled: 'boolean',
  maxLength: 'number',
  showCount: 'boolean',
  status: ['status', 'warning'],
  size: ['large', 'middle', 'small'],
  onChange: 'textarea',
  value: 'string',
};

const passwordInputProps: Props = {
  ...textInputProps,
  visibilityToggle: 'boolean',
};

const numberInputProps: Props = {
  bordered: 'boolean',
  controls: 'boolean',
  defaultValue: 'number',
  disabled: 'boolean',
  max: 'number',
  min: 'number',
  readOnly: 'boolean',
  status: ['error', 'warning'],
  size: ['large', 'middle', 'small'],
  step: 'number',
  onChange: 'textarea',
  value: 'string',
};

const buttonProps: Props = {
  block: 'boolean',
  danger: 'boolean',
  disabled: 'boolean',
  ghost: 'boolean',
  htmlType: 'string',
  className: 'string',
  style: 'textarea',
  icon: 'string',
  shape: ['default', 'circle', 'round'],
  size: ['large', 'middle', 'small'],
  type: ['primary', 'dashed', 'link', 'text', 'default'],
  onClick: 'textarea',
  children: 'string',
};

const textAreaProps: Props = {
  allowClear: 'boolean',
  bordered: 'boolean',
  defaultValue: 'string',
  maxLength: 'number',
  showCount: 'boolean',
  onResize: 'textarea',
  onPressEnter: 'textarea',
  value: 'string',
};

const checkboxProps = {};

const checkboxGroupProps = {};

const radioProps = {};

const radioGroupProps = {};

const monthPickerProps = {};

const quarterPickerProps = {};

const timerangePickerProps = {};

const timePickerProps = {};

const weekPickerProps = {};

const yearPickerProps = {};

const switchProps = {};

const selectProps = {};

const imageProps = {};

const rowProps = {};

const colProps = {};

const formItemProps = {};

const formProps = {};

const elementProps: Record<SupportedWidget, Props> = {
  'text-input': textInputProps,
  'password-input': passwordInputProps,
  'number-input': numberInputProps,
  button: buttonProps,
  textarea: textAreaProps,
  checkbox: checkboxProps,
  'checkbox-group': checkboxGroupProps,
  radio: radioProps,
  'radio-group': radioGroupProps,
  'month-picker': monthPickerProps,
  'quarter-picker': quarterPickerProps,
  'timerange-picker': timerangePickerProps,
  'time-picker': timePickerProps,
  'week-picker': weekPickerProps,
  'year-picker': yearPickerProps,
  switch: switchProps,
  select: selectProps,
  image: imageProps,
  row: rowProps,
  col: colProps,
  'form-item': formItemProps,
  form: formProps,
};

export default elementProps;
