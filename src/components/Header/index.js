import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="#!" className="dropdown-trigger" data-target="id_games">
                Games<i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_games" className="dropdown-content">
                <li>
                  <Link to="/" className="blue-text">
                    Lista
                  </Link>
                </li>
                <li>
                  <Link to="/gamesform" className="blue-text">
                    Formulário
                  </Link>
                </li>
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <Link
                to="#!"
                className="dropdown-trigger"
                data-target="id_categories"
              >
                Categories
                <i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_categories" className="dropdown-content">
                <li>
                  <Link to="/categories" className="blue-text">
                    Lista
                  </Link>
                </li>
                <li>
                  <Link to="/categoriesform" className="blue-text">
                    Formulário
                  </Link>
                </li>
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <Link
                to="#!"
                className="dropdown-trigger"
                data-target="id_developers"
              >
                Developers
                <i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_developers" className="dropdown-content">
                <li>
                  <Link to="/developers" className="blue-text">
                    Lista
                  </Link>
                </li>
                <li>
                  <Link to="/developersform" className="blue-text">
                    Formulário
                  </Link>
                </li>
                <li className="divider"></li>
              </ul>
            </li>

            <li>
              <Link
                to="#!"
                className="dropdown-trigger"
                data-target="id_platfomrs"
              >
                Platforms<i className="material-icons right">arrow_drop_down</i>
              </Link>

              <ul id="id_platfomrs" className="dropdown-content">
                <li>
                  <Link to="/platforms" className="blue-text">
                    Lista
                  </Link>
                </li>
                <li>
                  <Link to="/platformsform" className="blue-text">
                    Formulário
                  </Link>
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
