import React from 'react'
import RJSFForm from '@rjsf/antd'
import validator from '@rjsf/validator-ajv8'
import { Alert, Button } from 'antd'
import { IForm } from 'atoms/forms'

const SchemaForm: React.FC<IForm> = props => {
	return (
		<RJSFForm
			focusOnFirstError
			schema={JSON.parse(props.formSchema)}
			uiSchema={{
				'ui:ErrorListTemplate': props => {
					const { errors } = props
					return (
						<div className='mb-6 flex flex-col gap-2'>
							{errors.map((e, i) => {
								return <Alert message={e.stack as string} key={i} type='error' showIcon closable />
							})}
						</div>
					)
				},
				...(props.formUiSchema ? JSON.parse(props.formUiSchema) : {}),
			}}
			validator={validator}
			onSubmit={props.onFinishFormValues}
			formContext={{
				layout: 'horizontal',
				size: 'middle',
				labelAlign: 'left',
				labelCol: { xs: { span: 24 }, sm: { span: 6 } },
				wrapperCol: { xs: { span: 24 }, sm: { span: 18 } },
				style: {
					border: 0,
					...(props.formProps ? JSON.parse(props.formProps)?.style : {}),
				},
				...(props.formProps ? JSON.parse(props.formProps) : {}),
			}}
		>
			<div className='w-full flex flex-row items-center justify-end gap-3'>
				<Button onClick={props.onCancel}>{props.cancelText ?? 'Cancel'}</Button>
				<Button type='primary' htmlType='submit'>
					{props.submitText ?? 'Submit'}
				</Button>
			</div>
		</RJSFForm>
	)
}

export default SchemaForm
