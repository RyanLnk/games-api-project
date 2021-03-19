import React from 'react';

const ButtonAdd = ({ add }) => {
  return (
    <div className="row">
      <button
        className="btn-floating btn-large waves-effect waves-light"
        type="submit"
        onClick={add}
      >
        <i className="material-icons">add</i>
      </button>
    </div>
  );
};

export default ButtonAdd;
