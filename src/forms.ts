import { FormBuilderMeta } from './builder/types';

export const form1: FormBuilderMeta = [
  {
    key: 'sad',
    widgetName: 'form',
    widgetProps: {
      size: 'large',
      layout: 'vertical',
    },
    children: [
      {
        key: 'sss',
        formItemProps: {
          name: 'username',
          rules: [{ required: true, message: 'Username is required' }],
        },
        widgetName: 'text-input',
        widgetProps: {
          placeholder: 'Username',
        },
      },
    ],
  },
  {
    widgetName: 'button',
    widgetProps: {
      htmlType: 'submit',
      children: 'Submit',
      type: 'primary',
    },
    key: 's',
  },
];
