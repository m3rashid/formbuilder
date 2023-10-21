export const buttonProps = {
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
};

export const textInputProps = {
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

export const passwordInputProps = {
  ...textInputProps,
  visibilityToggle: 'boolean',
};

export const numberInputProps = {
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

export const textAreaInputProps = {
  allowClear: 'boolean',
  bordered: 'boolean',
  defaultValue: 'string',
  maxLength: 'number',
  showCount: 'boolean',
  onResize: 'textarea',
  onPressEnter: 'textarea',
  value: 'string',
};
