import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import EmptyTable from '../../components/EmptyTable';

import './index.css';

const Categories = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await axios.get('http://localhost:3000/categories');
      setCategories(response.data);
    }
    getCategories();
  }, []);

  async function deleteCategory(id) {
    try {
      if (window.confirm('Are you sure you want to delete the category?')) {
        await axios.delete(`http://localhost:3000/categories/${id}`);
        setCategories(categories.filter((category) => category.id !== id));
      }
    } catch (error) {
      alert(`Couldn't delete category`);
    }
  }

  function add() {
    navigate('/categoriesform');
  }

  if (categories.length !== 0) {
    return (
      <div>
        <h1>Categories</h1>
        <div className="row">
          <table className="highlight">
            <thead>
              <tr>
                <th>Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`/categoriesform/${category.id}`}>
                      <span>
                        <i className="material-icons blue-text text-accent-2">
                          edit
                        </i>
                      </span>
                    </Link>

                    <button
                      className="button-delete"
                      onClick={() => deleteCategory(category.id)}
                    >
                      <span className="button-delete-span">
                        <i className="material-icons red-text text-accent-3">
                          delete_forever
                        </i>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="row">
          <button
            className="btn-floating btn-large waves-effect waves-light"
            type="submit"
            onClick={add}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Categories</h1>
        <EmptyTable />
      </div>
    );
  }
};

export default Categories;
