import {
  RowProps as NativeRowProps,
  ColProps as NativeColProps,
  FormProps as NativeFormProps,
  ImageProps as NativeImageProps,
  InputProps as NativeInputProps,
  SelectProps as NativeSelectProps,
  SwitchProps as NativeSwitchProps,
  ButtonProps as NativeButtonProps,
  CheckboxProps as NativeCheckboxProps,
  FormItemProps as NativeFormItemProps,
  RadioGroupProps as NativeRadioGroupProps,
  TimePickerProps as NativeTimePickerProps,
  InputNumberProps as NativeInputNumberProps,
  RadioProps as NativeRadioProps,
} from 'antd';
import {
  WeekPickerProps as NativeWeekPickerProps,
  MonthPickerProps as NativeMonthPickerProps,
  RangePickerProps as NativeRangePickerProps,
} from 'antd/es/date-picker';
import { CheckboxGroupProps as NativeCheckboxGroupProps } from 'antd/es/checkbox';
import {
  PasswordProps as NativePasswordProps,
  TextAreaProps as NativeTextAreaProps,
} from 'antd/es/input';

// Filter out what values to be allowed in the form schema
export type RowProps = Pick<NativeRowProps, 'className'>;

export type ColProps = Pick<NativeColProps, 'className'>;

export type FormProps<T> = Pick<NativeFormProps<T>, 'className'>;

export type ImageProps = Pick<NativeImageProps, 'className'>;

export type InputProps = Pick<NativeInputProps, 'className'>;

export type SelectProps = Pick<NativeSelectProps, 'className'>;

export type SwitchProps = Pick<NativeSwitchProps, 'className'>;

export type ButtonProps = Pick<NativeButtonProps, 'className'>;

export type CheckboxProps = Pick<NativeCheckboxProps, 'className'>;

export type FormItemProps = Pick<NativeFormItemProps, 'className'>;

export type RadioGroupProps = Pick<NativeRadioGroupProps, 'className'>;

export type TimePickerProps = Pick<NativeTimePickerProps, 'className'>;

export type InputNumberProps = Pick<NativeInputNumberProps, 'className'>;

export type RadioProps = Pick<NativeRadioProps, 'className'>;

export type WeekPickerProps = Pick<NativeWeekPickerProps, 'className'>;

export type MonthPickerProps = Pick<NativeMonthPickerProps, 'className'>;

export type RangePickerProps = Pick<NativeRangePickerProps, 'className'>;

export type PasswordProps = Pick<NativePasswordProps, 'className'>;

export type TextAreaProps = Pick<NativeTextAreaProps, 'className'>;

export type CheckboxGroupProps = Pick<NativeCheckboxGroupProps, 'className'>;
