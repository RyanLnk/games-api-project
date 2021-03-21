import React from 'react';

const Input = (props) => {
  return (
    <input
      type="text"
      name={props.name}
      id={props.id}
      className="validate"
      value={props.value}
      onChange={({ target }) => props.function(target.value)}
    />
  );
};

export default Input;
