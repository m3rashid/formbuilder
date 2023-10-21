import { useDesignerState } from './atom';
import { FormElementInstance } from '../builder/types';

const useDesigner = () => {
  const [designer, setDesigner] = useDesignerState();

  const addElement = (element: FormElementInstance) => {
    setDesigner((prev) => {
      const previousIndex = prev.elements.length;
      const elements = [...prev.elements];
      elements.splice(previousIndex - 1, 0, element);
      return {
        ...prev,
        elements,
        selectedElement: { element, index: previousIndex },
      };
    });
  };

  const updateElement = (index: number, element: FormElementInstance) => {
    setDesigner((prev) => {
      const newElements = [...prev.elements];
      newElements[index] = element;
      return { ...prev, elements: newElements };
    });
  };

  const removeElement = (index: number) => {
    setDesigner((prev) => {
      const elements = prev.elements.filter((_, idx) => idx !== index);
      return { ...prev, elements };
    });
  };

  const selectElement = (index: number) => {
    const selectedElement = designer.elements[index];
    setDesigner((prev) => ({
      ...prev,
      selectedElement: { element: selectedElement, index },
    }));
  };

  const setElements = (elements: FormElementInstance[]) => {
    setDesigner((prev) => ({ ...prev, elements }));
  };

  const setMode = (val: 'preview' | 'edit') =>
    setDesigner((p) => ({ ...p, mode: val }));

  return {
    setMode,
    addElement,
    setElements,
    selectElement,
    updateElement,
    removeElement,
    mode: designer.mode,
    elements: designer.elements,
    selectedElement: designer.selectedElement,
  };
};

export default useDesigner;
