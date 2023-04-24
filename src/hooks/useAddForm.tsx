import { Modal } from 'antd'
import { IForm, formsAtom } from 'atoms/forms'
import SchemaForm from 'components/form'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

const useAddForm = () => {
	const [isOpen, setIsOpen] = useState(false)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)
	const setForms = useSetRecoilState(formsAtom)

	const handleAddNewForm = (form: any) => {
		const { errors, formData } = form
		if (errors.length > 0) return
		setForms(prev => [
			...prev,
			{
				id: new Date().toISOString(),
				name: formData.name,
				formSchema: formData.schema,
				...(formData.uiSchema
					? { formUiSchema: JSON.stringify(formData.uiSchema.trim().split(/ +/).join(' ')) }
					: {}),
			} as IForm,
		])
		close()
	}

	const AddFormModal = () => (
		<Modal title='Add Form' open={isOpen} onCancel={close} footer={null} className='min-w-[700px]'>
			<SchemaForm
				id='addForm'
				name='Add Form'
				submitText='Add Form'
				description='Add a new Form'
				cancelText='Cancel'
				onCancel={close}
				onFinishFormValues={handleAddNewForm}
				formProps={JSON.stringify({
					style: {
						border: 0,
						borderColor: 'white',
					},
				})}
				formSchema={JSON.stringify({
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
				})}
			/>
		</Modal>
	)

	return {
		open,
		close,
		isOpen,
		AddFormModal,
	}
}

export default useAddForm
