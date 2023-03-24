import React, {useContext} from 'react';

import { userContext } from './App';

export const Button = () => {
    const userProvider = useContext(userContext)
  return (
    <>
      <button>Button Component</button>
      <pre>{userProvider.age}</pre>
    </>
  );
};
