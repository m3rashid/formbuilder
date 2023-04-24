import { Modal } from 'antd'
import SchemaForm from 'components/form'
import React, { useState } from 'react'

interface IProps {}

const useAddForm = () => {
	const [isOpen, setIsOpen] = useState(false)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)

	const AddFormModal = () => {
		return (
			<Modal title='Add Form' open={isOpen} onCancel={close} footer={null}>
				<SchemaForm
					id='addForm'
					name='Add Form'
					submitText='Add Form'
					cancelText='Cancel'
					onCancel={close}
					formProps={{
						style: {
							border: 0,
							borderColor: 'white',
						},
					}}
					formSchema={{
						type: 'object',
						required: [],
						properties: {
							name: {
								type: 'string',
								title: 'Name',
							},
							description: {
								type: 'string',
								format: 'textbox',
								contentMediaType: 'code',
								title: 'Description',
							},
							formUiSchema: {
								type: 'string',
								format: 'textarea',
								description: 'Write your JSON Schema here',
								title: 'Form Ui Schema',
							},
						},
					}}
				/>
			</Modal>
		)
	}

	return {
		open,
		close,
		isOpen,
		AddFormModal,
	}
}

export default useAddForm
