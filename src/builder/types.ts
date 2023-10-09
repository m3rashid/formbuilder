import { FC, Key } from 'react';
import {
  RowProps,
  ColProps,
  FormProps,
  ImageProps,
  InputProps,
  SelectProps,
  SwitchProps,
  ButtonProps,
  CheckboxProps,
  FormItemProps,
  RadioGroupProps,
  TimePickerProps,
  InputNumberProps,
  RadioProps,
} from 'antd';
import {
  WeekPickerProps,
  MonthPickerProps,
  RangePickerProps,
} from 'antd/es/date-picker';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { PasswordProps, TextAreaProps } from 'antd/es/input';

export type WidgetNameWithProps =
  | { widgetName: 'input'; widgetProps?: InputProps }
  | { widgetName: 'button'; widgetProps?: ButtonProps }
  | { widgetName: 'password'; widgetProps?: PasswordProps }
  | { widgetName: 'textarea'; widgetProps?: TextAreaProps }
  | { widgetName: 'number'; widgetProps?: InputNumberProps }
  | { widgetName: 'checkbox'; widgetProps?: CheckboxProps }
  | { widgetName: 'checkbox-group'; widgetProps?: CheckboxGroupProps }
  | { widgetName: 'radio'; widgetProps?: RadioProps }
  | { widgetName: 'radio-group'; widgetProps?: RadioGroupProps }
  | { widgetName: 'month-picker'; widgetProps?: MonthPickerProps }
  | { widgetName: 'quarter-picker'; widgetProps?: any }
  | { widgetName: 'timerange-picker'; widgetProps?: RangePickerProps }
  | { widgetName: 'time-picker'; widgetProps?: TimePickerProps }
  | { widgetName: 'week-picker'; widgetProps?: WeekPickerProps }
  | { widgetName: 'year-picker'; widgetProps?: any }
  | { widgetName: 'switch'; widgetProps?: SwitchProps }
  | { widgetName: 'select'; widgetProps?: SelectProps }
  | { widgetName: 'image'; widgetProps?: ImageProps }
  | { widgetName: 'row'; widgetProps?: RowProps }
  | { widgetName: 'col'; widgetProps?: ColProps }
  | { widgetName: 'form-item'; widgetProps?: FormItemProps }
  | { widgetName: 'form'; widgetProps?: FormProps<any> & { children?: any } };

export type SupportedWidget = WidgetNameWithProps['widgetName'];

export type CurrentWidgetProp<T extends SupportedWidget> = FC<
  Extract<WidgetNameWithProps, { widgetName: T }>['widgetProps'] | any
>;

export type FormBuilderMetaProps = WidgetNameWithProps & {
  children?: Array<FormBuilderMetaProps & { key?: Key }>;
  renderChildren?: any;
  formItemProps?: FormItemProps;
  render?: FC;
  key?: Key;
};

export type FormBuilderMeta = FormBuilderMetaProps[];

export interface FormRenderProps {
  meta: FormBuilderMeta;
}
