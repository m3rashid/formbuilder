import { FormElementInstance, useDesignerState } from './atom';

const useDesigner = () => {
  const [designer, setDesigner] = useDesignerState();

  const addElement = (index: number, element: FormElementInstance) => {
    setDesigner((prev) => {
      const elements = [...prev.elements];
      elements.splice(index, 0, element);
      return { ...prev, elements };
    });
  };

  const updateElement = (id: string, element: FormElementInstance) => {
    setDesigner((prev) => {
      const newElements = [...prev.elements];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return { ...prev, elements: newElements };
    });
  };

  const removeElement = (id: string) => {
    setDesigner((prev) => {
      const elements = prev.elements.filter((el) => el.id !== id);
      return { ...prev, elements };
    });
  };

  const setSelectedElement = (selectedElement: FormElementInstance) => {
    setDesigner((prev) => ({ ...prev, selectedElement }));
  };

  const setElements = (elements: FormElementInstance[]) => {
    setDesigner((prev) => ({ ...prev, elements }));
  };

  return {
    addElement,
    setElements,
    updateElement,
    removeElement,
    setSelectedElement,
    elements: designer.elements,
    selectedElement: designer.selectedElement,
  };
};

export default useDesigner;
