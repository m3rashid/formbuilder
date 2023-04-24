// import { FormProps } from 'antd'
import { atom } from 'recoil'
// import { RJSFSchema, UiSchema } from '@rjsf/utils'
// import { FormProps as RJSFFormProps } from '@rjsf/core'

export interface IForm {
	id: string
	name: string
	formSchema: string // RJSFSchema
	description?: string
	formProps?: string // RJSFFormProps['formContext']
	formUiSchema?: string // UiSchema
	cancelText?: string
	submitText?: string
	onCancel?: () => void
	onFinishFormValues?: (formValues: any) => void
}

export const defaultFormState: IForm[] = [
	{
		id: 'thisIs',
		name: 'Default Form',
		formSchema: JSON.stringify({
			type: 'object',
			required: ['name', 'schema'],
			properties: {
				name: {
					type: 'string',
					title: 'Name',
				},
				description: {
					type: 'string',
					format: 'textbox',
					title: 'Description',
				},
				schema: {
					type: 'string',
					format: 'textarea',
					description: 'Write your Form JSON Schema here',
					title: 'Form JSON Schema',
				},
				uiSchema: {
					type: 'string',
					format: 'textarea',
					description: 'Write your Ui JSON Schema here',
					title: 'Ui Schema',
				},
			},
		}),
	},
]

export const formsAtom = atom<IForm[]>({
	key: 'forms',
	default: defaultFormState,
})
