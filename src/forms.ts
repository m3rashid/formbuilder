import { FormBuilderMeta } from './builder/types';

export const form1: FormBuilderMeta = [
  {
    widgetName: 'form',
    widgetProps: {
      size: 'large',
      layout: 'vertical',
    },
    children: [
      {
        formItemProps: {
          name: 'username',
          rules: [{ required: true, message: 'Username is required' }],
        },
        widgetName: 'input',
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
  },
];
