import { nanoid } from 'nanoid';

import { useDesignerState } from './atom';
import { FormElementInstance } from '../builder/types';

const findElementById = (
  key: string,
  searchSpace: FormElementInstance[]
): FormElementInstance | undefined => {
  return searchSpace
    .map((element) => {
      return element.key === key
        ? element
        : findElementById(key, element.children || []);
    })
    .filter((t) => !!t)[0];
};

const updateElementById = (
  updatedElement: FormElementInstance,
  searchSpace: FormElementInstance[]
): FormElementInstance[] => {
  return searchSpace.reduce<FormElementInstance[]>((acc, element) => {
    return [
      ...acc,
      ...(element.key === updatedElement.key
        ? [{ ...element, ...updatedElement }]
        : [
            {
              ...element,
              children: updateElementById(
                updatedElement,
                element.children || []
              ),
            },
          ]),
    ];
  }, []);
};

const removeElementById = (
  key: string,
  searchSpace: FormElementInstance[]
): FormElementInstance[] => {
  return searchSpace.reduce<FormElementInstance[]>((acc, element) => {
    return [
      ...acc,
      ...(element.key === key
        ? []
        : [
            {
              ...element,
              children: removeElementById(key, element.children || []),
            },
          ]),
    ];
  }, []);
};

const useDesigner = () => {
  const [designer, setDesigner] = useDesignerState();

  const onDragEnd = (e: any) => {
    console.log('onDragEnd', e);
  };

  const addElement = (element: Omit<FormElementInstance, 'key'>) => {
    setDesigner((prev) => {
      const newElement = { ...element, key: nanoid() };
      return {
        ...prev,
        selectedElement: newElement,
        elements: [...prev.elements, newElement],
      };
    });
  };

  const updateElement = (updatedElement: FormElementInstance) => {
    setDesigner((prev) => ({
      ...prev,
      elements: updateElementById(updatedElement, prev.elements),
    }));
  };

  const removeElement = (key: string) => {
    setDesigner((prev) => ({
      ...prev,
      selectedElement: null,
      elements: removeElementById(key, prev.elements),
    }));
  };

  const selectElement = (key: string) => {
    setDesigner((prev) => ({
      ...prev,
      selectedElement:
        findElementById(key, prev.elements) || prev.selectedElement,
    }));
  };

  const setElements = (elements: FormElementInstance[]) => {
    setDesigner((prev) => ({ ...prev, elements }));
  };

  const setMode = (val: 'preview' | 'edit') => {
    setDesigner((p) => ({ ...p, mode: val }));
  };

  const showFormParentProps = () => {
    setDesigner((prev) => ({ ...prev, selectedElement: null }));
  };

  return {
    setMode,
    onDragEnd,
    addElement,
    setElements,
    selectElement,
    updateElement,
    removeElement,
    showFormParentProps,
    mode: designer.mode,
    elements: designer.elements,
    selectedElement: designer.selectedElement,
  };
};

export default useDesigner;
