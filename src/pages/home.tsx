import { Button, Result } from 'antd'
import { formsAtom } from 'atoms/forms'
import SchemaForm from 'components/form'
import useAddForm from 'hooks/useAddForm'
import React from 'react'
import { useRecoilValue } from 'recoil'

const Home = () => {
	const forms = useRecoilValue(formsAtom)
	const { open, AddFormModal } = useAddForm()

	if (forms.length === 0) {
		return (
			<div className='md:w-[500px] w-screen'>
				<AddFormModal />
				<Result
					status='404'
					title='404'
					subTitle='No forms Found, create one'
					extra={<Button onClick={open}>Add Form</Button>}
				/>
			</div>
		)
	}

	return (
		<div>
			{forms.map(form => {
				return <SchemaForm key={form.id} {...form} />
			})}
		</div>
	)
}

export default Home
