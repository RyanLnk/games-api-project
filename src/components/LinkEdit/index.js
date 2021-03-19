import React from 'react';
import { Link } from 'react-router-dom';

const LinkEdit = (props) => {
  return (
    <Link to={props.to}>
      <span>
        <i className="material-icons blue-text text-accent-2">edit</i>
      </span>
    </Link>
  );
};

export default LinkEdit;
