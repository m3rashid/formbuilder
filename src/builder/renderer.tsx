import { FC, Fragment } from 'react';
import { Form } from 'antd';
import { widgetMap } from './constants';
import { FormRenderProps } from './types';

const FormRenderer: FC<FormRenderProps> = ({ meta }) => {
  return (
    <Fragment>
      {meta.map(
        ({
          key,
          children,
          widgetName,
          widgetProps,
          render = undefined,
          formItemProps = {},
          renderChildren = undefined,
        }) => {
          // @ts-ignore
          const Widget = widgetMap[widgetName];
          let WidgetField = Widget.fieldTransformer
            ? Widget.fieldTransformer(Widget)
            : Widget?.widget;

          if (render) {
            WidgetField = render(WidgetField);
          }

          if (children && children.length > 0) {
            return (
              <WidgetField key={key} {...widgetProps}>
                <FormRenderer meta={children} />
              </WidgetField>
            );
          } else if (formItemProps) {
            return (
              <Form.Item key={key} {...formItemProps}>
                <WidgetField {...widgetProps} />
              </Form.Item>
            );
          } else {
            return (
              <WidgetField key={key} {...widgetProps}>
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
