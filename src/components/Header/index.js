import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const M = window.M;
  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {});
  });

  return (
    <div>
      <nav className="blue">
        <div className="nav-wrapper container">
          <ul className="right">
            <li>
              <Link to="/" className="dropdown-trigger" data-target="id_games">
                Games<i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_games" className="dropdown-content">
                <li>
                  <Link to="/">Lista</Link>
                </li>
                <li>
                  <Link to="/gamesform">Formulário</Link>
                </li>
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <Link
                to="/categories"
                className="dropdown-trigger"
                data-target="id_categories"
              >
                Categories
                <i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_categories" className="dropdown-content">
                <li>
                  <Link to="/categories">Lista</Link>
                </li>
                <li>
                  <Link to="/categoriesform">Formulário</Link>
                </li>
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <Link
                to="/developers"
                className="dropdown-trigger"
                data-target="id_developers"
              >
                Developers
                <i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_developers" className="dropdown-content">
                <li>
                  <Link to="/developers">Lista</Link>
                </li>
                <li>
                  <Link to="/developersform">Formulário</Link>
                </li>
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <Link
                to="/platforms"
                className="dropdown-trigger"
                data-target="id_platfomrs"
              >
                Platforms<i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_platfomrs" className="dropdown-content">
                <li>
                  <Link to="/platforms">Lista</Link>
                </li>
                <li>
                  <Link to="/platformsform">Formulário</Link>
                </li>
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
