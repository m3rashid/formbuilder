import React from 'react'
import { Layout, Menu } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { formsAtom } from 'atoms/forms'
import { sidebarAtom } from 'atoms/sidebar'

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const forms = useRecoilValue(formsAtom)
	const setCurrentForm = useSetRecoilState(sidebarAtom)

	return (
		<Layout>
			<Layout.Content className='p-4 flex justify-center gap-4 overflow-hidden'>
				<div className='shadow-md rounded-md bg-white w-44 p-2 h-full'>
					<Menu mode='inline' defaultSelectedKeys={['thisIs']}>
						{forms.length !== 0 ? (
							forms.map(form => {
								return (
									<Menu.Item
										key={form.id}
										onClick={() => setCurrentForm(prev => ({ ...prev, current: form.id }))}
									>
										{form.name}
									</Menu.Item>
								)
							})
						) : (
							<Menu.Item key='some random'>No Forms Found</Menu.Item>
						)}
					</Menu>
				</div>

				<div
					className='bg-white rounded-md shadow-md p-6 max-w-[650px] overflow-y-auto'
					style={{ height: 'calc(100vh - 32px)', maxHeight: 'calc(100vh - 32px)' }}
				>
					{children}
				</div>
			</Layout.Content>
		</Layout>
	)
}

export default AppLayout
