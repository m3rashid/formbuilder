import React from 'react';

export type ElementWrapperProps = React.PropsWithChildren & {
  //
};

const ElementWrapper: React.FC<ElementWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default ElementWrapper;
