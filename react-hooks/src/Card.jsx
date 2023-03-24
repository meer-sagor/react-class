import React, { useContext } from 'react';
import { sumContext } from './App';

export const Card = ({ children }) => {
  const sumProvider = useContext(sumContext);

  return (
    <div>
      {children}

      {sumProvider}
    </div>
  );
};
