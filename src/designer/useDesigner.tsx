import { useDesignerState } from './atom';
import { FormElementInstance } from '../builder/types';

const useDesigner = () => {
  const [designer, setDesigner] = useDesignerState();

  const addElement = (index: number, element: FormElementInstance) => {
    setDesigner((prev) => {
      const elements = [...prev.elements];
      elements.splice(index, 0, element);
      return { elements, selectedElement: element };
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
    setDesigner((prev) => ({ ...prev, selectedElement }));
  };

  const setElements = (elements: FormElementInstance[]) => {
    setDesigner((prev) => ({ ...prev, elements }));
  };

  return {
    addElement,
    setElements,
    selectElement,
    updateElement,
    removeElement,
    elements: designer.elements,
    selectedElement: designer.selectedElement,
  };
};

export default useDesigner;
