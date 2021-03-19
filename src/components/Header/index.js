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
            HOME
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <DropdownTrigger data_target="id_games" title="Games" />
              
              <ul id="id_games" className="dropdown-content">
                <DropdownContent to="/" title="Lista" />
                <DropdownContent to="/gamesform" title="Formulário" />
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <DropdownTrigger data_target="id_categories" title="Categories" />

              <ul id="id_categories" className="dropdown-content">
                <DropdownContent to="/categories" title="Lista" />
                <DropdownContent to="/categoriesform" title="Formulário" />
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <DropdownTrigger data_target="id_developers" title="Developers" />

              <ul id="id_developers" className="dropdown-content">
                <DropdownContent to="/developers" title="Lista" />
                <DropdownContent to="/developersform" title="Formulário" />
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <DropdownTrigger data_target="id_platfomrs" title="Platforms" />

              <ul id="id_platfomrs" className="dropdown-content">
                <DropdownContent to="/platforms" title="Lista" />
                <DropdownContent to="/platformsform" title="Formulário" />
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
