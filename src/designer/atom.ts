import { atom, useRecoilState } from 'recoil';
import { FormElementInstance } from '../builder/types';

export type DesignerAtom = {
  elements: FormElementInstance[];
  selectedElement: FormElementInstance | null;
};

export const designerAtom = atom<DesignerAtom>({
  key: 'designerAtom',
  default: {
    elements: [],
    selectedElement: null,
  },
});

export const useDesignerState = () => useRecoilState(designerAtom);

export const designerSidebarOpen = atom<boolean>({
  key: 'designerSidebarOpen',
  default: true,
});

export const useDesignerSidebarOpen = () => useRecoilState(designerSidebarOpen);
