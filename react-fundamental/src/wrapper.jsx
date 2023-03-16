import React, {useState} from 'react';

import { Button } from './components/Button';


const Wrapper = () => {
  return (
    <div>
      i {50 + 2} am wrapper component
      <Button btnText="Button text here" type="primary"/>
    </div>
  );
};

export default Wrapper;
