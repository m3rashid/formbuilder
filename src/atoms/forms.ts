// import { FormProps } from 'antd'
import { atom } from 'recoil'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { FormProps as RJSFFormProps } from '@rjsf/core'

export interface IForm {
	id: string
	name: string
	description?: string
	formProps?: RJSFFormProps['formContext']
	formUiSchema?: UiSchema
	formSchema?: RJSFSchema
	cancelText?: string
	submitText?: string
	onCancel?: () => void
	onFinishFormValues?: (formValues: any) => void
}

export const defaultFormState: IForm[] = []

export const formsAtom = atom<IForm[]>({
	key: 'forms',
	default: defaultFormState,
})
