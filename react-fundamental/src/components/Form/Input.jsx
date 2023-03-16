import React from 'react';

export const Input = ({ type, label, required, onChange, value }) => {
  return (
    <div>
      <label htmlFor={label}>{label} </label>
      <input
        id={label}
        type={type ? type : 'text'}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
