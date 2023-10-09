import { FC } from 'react';
import { SupportedWidget } from './types';

export const widgetMap: Record<
  SupportedWidget & Omit<string, SupportedWidget>,
  { widget: FC; fieldTransformer?: (field: any) => FC }
> = {};

export const widgetKeys = Object.keys(widgetMap);
