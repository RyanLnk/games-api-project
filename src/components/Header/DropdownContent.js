import React from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = (props) => {
  return (
    <li>
      <Link to={props.to} className="blue-text">
        {props.title}
      </Link>
    </li>
  );
};

export default DropdownContent;
