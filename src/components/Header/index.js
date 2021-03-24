import React from 'react';
import { Link } from 'react-router-dom';

import DropdownContent from './DropdownContent';
import DropdownTrigger from './DropdownTrigger';

const Header = () => {
  const M = window.M;

  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      coverTrigger: false,
    });
  });

  return (
    <div className="navbar-fixed">
      <nav className="blue">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Games.com
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <DropdownTrigger data_target="id_games" title="Games" />

              <ul id="id_games" className="dropdown-content">
                <DropdownContent to="/" title="List" />
                <DropdownContent to="/gamesform" title="Sign Up" />
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <DropdownTrigger data_target="id_categories" title="Categories" />

              <ul id="id_categories" className="dropdown-content">
                <DropdownContent to="/categories" title="List" />
                <DropdownContent to="/categoriesform" title="Sign Up" />
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <DropdownTrigger data_target="id_developers" title="Developers" />

              <ul id="id_developers" className="dropdown-content">
                <DropdownContent to="/developers" title="List" />
                <DropdownContent to="/developersform" title="Sign Up" />
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <DropdownTrigger data_target="id_platfomrs" title="Platforms" />

              <ul id="id_platfomrs" className="dropdown-content">
                <DropdownContent to="/platforms" title="List" />
                <DropdownContent to="/platformsform" title="Sign Up" />
                <li className="divider"></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
