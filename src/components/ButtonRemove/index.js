import React from 'react';

const ButtonRemove = (props) => {
  return (
    <button className="button-delete" onClick={() => props.deleteFunction(props.parameter)}>
      <span className="button-delete-span">
        <i className="material-icons red-text text-accent-3">delete_forever</i>
      </span>
    </button>
  );
};

export default ButtonRemove;
