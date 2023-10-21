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
export type RowProps = NativeRowProps;

export type ColProps = NativeColProps;

export type FormProps<T> = NativeFormProps<T>;

export type ImageProps = NativeImageProps;

export type InputProps = NativeInputProps;

export type SelectProps = NativeSelectProps;

export type SwitchProps = NativeSwitchProps;

export type ButtonProps = NativeButtonProps;

export type CheckboxProps = NativeCheckboxProps;

export type FormItemProps = NativeFormItemProps;

export type RadioGroupProps = NativeRadioGroupProps;

export type TimePickerProps = NativeTimePickerProps;

export type InputNumberProps = NativeInputNumberProps;

export type RadioProps = NativeRadioProps;

export type WeekPickerProps = NativeWeekPickerProps;

export type MonthPickerProps = NativeMonthPickerProps;

export type RangePickerProps = NativeRangePickerProps;

export type PasswordProps = NativePasswordProps;

export type TextAreaProps = NativeTextAreaProps;

export type CheckboxGroupProps = NativeCheckboxGroupProps;
