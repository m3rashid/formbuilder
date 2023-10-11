import { FC, Fragment } from 'react';
import { Form } from 'antd';
import { widgetMap } from './constants';
import { FormRenderProps } from './types';

const FormRenderer: FC<FormRenderProps> = ({ meta }) => {
  return (
    <Fragment>
      {meta.map(
        ({
          children,
          widgetName,
          widgetProps,
          render = undefined,
          formItemProps = {},
          renderChildren = undefined,
        }) => {
          const Widget = widgetMap[widgetName];
          let WidgetField = Widget.fieldTransformer
            ? Widget.fieldTransformer(Widget)
            : Widget?.widget;

          if (render) {
            WidgetField = render;
          }

          if (children) {
            return (
              <WidgetField {...widgetProps}>
                <FormRenderer meta={children} />
              </WidgetField>
            );
          } else if (formItemProps) {
            return (
              <Form.Item {...formItemProps}>
                <WidgetField {...widgetProps} />
              </Form.Item>
            );
          } else {
            return (
              <WidgetField {...widgetProps}>
                {renderChildren ? renderChildren : undefined}
              </WidgetField>
            );
          }
        }
      )}
    </Fragment>
  );
};

export default FormRenderer;
