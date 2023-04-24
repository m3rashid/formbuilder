import { atom } from 'recoil'

interface ISidebar {
	current: string
}

export const defaultSidebarState: ISidebar = {
	current: '',
}

export const sidebarAtom = atom<ISidebar>({
	key: 'sidebarAtom',
	default: defaultSidebarState,
})
