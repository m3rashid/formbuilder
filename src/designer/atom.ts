import { atom, useRecoilState } from 'recoil';
import { FormElementInstance } from '../builder/types';

export type DesignerAtom = {
  mode: 'edit' | 'preview';
  elements: FormElementInstance[];
  selectedElement: FormElementInstance | null;
};

export const designerLeftAtom = atom<DesignerAtom>({
  key: 'designerAtom',
  default: {
    elements: [],
    mode: 'edit',
    selectedElement: null,
  },
});

export const useDesignerState = () => useRecoilState(designerLeftAtom);

export const designerLeftSidebarOpen = atom<boolean>({
  key: 'designerLeftSidebarOpen',
  default: true,
});

export const useDesignerLeftSidebarOpen = () => {
  return useRecoilState(designerLeftSidebarOpen);
};

export const designerRightSidebarOpen = atom<boolean>({
  key: 'designerRightSidebarOpen',
  default: true,
});

export const useDesignerRightSidebarOpen = () => {
  return useRecoilState(designerRightSidebarOpen);
};
