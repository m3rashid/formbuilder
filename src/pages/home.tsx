import React from 'react'
import { Button, Result } from 'antd'
import { formsAtom } from 'atoms/forms'
import { sidebarAtom } from 'atoms/sidebar'
import SchemaForm from 'components/form'
import useAddForm from 'hooks/useAddForm'
import { useRecoilValue } from 'recoil'

const Home = () => {
	const forms = useRecoilValue(formsAtom)
	const { open, AddFormModal } = useAddForm()
	const currentSidebarItem = useRecoilValue(sidebarAtom)
	const form = forms.find(f => f.id === currentSidebarItem.current)

	console.log({ forms })

	return (
		<>
			<AddFormModal />
			{forms.length === 0 || !form ? (
				<div className='md:w-[500px] w-screen flex items-center justify-center h-full'>
					<Result
						status='404'
						title='404'
						subTitle='No forms Found, create one'
						extra={<Button onClick={open}>Add Form</Button>}
					/>
				</div>
			) : (
				<div className='flex flex-col gap-10'>
					<div className='flex items-end'>
						<Button onClick={open}>Add New Form</Button>
					</div>
					<SchemaForm
						key={form.id}
						{...{
							...form,
							formSchema: JSON.parse(form.formSchema),
							...(form.formUiSchema ? JSON.parse(form.formUiSchema) : {}),
							...(form.formProps ? JSON.parse(form.formProps) : {}),
						}}
					/>
				</div>
			)}
		</>
	)
}

export default Home
