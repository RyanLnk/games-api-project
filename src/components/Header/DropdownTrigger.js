import React from 'react';
import { Link } from 'react-router-dom';

const DropdownTrigger = (props) => {
  return (
    <Link to="#!" className="dropdown-trigger" data-target={props.data_target}>
      {props.title}
      <i className="material-icons right">arrow_drop_down</i>
    </Link>
  );
};

export default DropdownTrigger;
