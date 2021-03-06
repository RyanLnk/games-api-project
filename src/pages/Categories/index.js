import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import ButtonAdd from '../../components/ButtonAdd';
import ButtonRemove from '../../components/ButtonRemove';
import EmptyTable from '../../components/EmptyTable';
import LinkEdit from '../../components/LinkEdit';
import Thead from '../../components/Thead';

import '../../assets/styles/index.css';

const Categories = () => {
  const M = window.M;
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
        toast.dark('Category deleted successfully!');
        setCategories(categories.filter((category) => category.id !== id));
      }
    } catch (error) {
      toast.error(`Couldn't delete category`);
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
            <Thead />
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td className="right-align">
                    <LinkEdit to={`/categoriesform/${category.id}`} />

                    <ButtonRemove
                      deleteFunction={deleteCategory}
                      parameter={category.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ButtonAdd add={add} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Categories</h1>
        <EmptyTable />
        <ButtonAdd add={add} />
      </div>
    );
  }
};

export default Categories;
