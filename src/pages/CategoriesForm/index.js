import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const Categories = () => {
  const M = window.M;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function getCategories() {
        const response = await axios.get(
          `http://localhost:3000/categories/${params.id}`,
        );
        setName(response.data.name);
        M.updateTextFields();
      }
      getCategories();
    }
  }, [params.id, M]);

  async function createCategory(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/categories', {
          name,
        });
      } else {
        await axios.put(`http://localhost:3000/categories/${params.id}`, {
          name,
        });
      }
      setName('');
      navigate('/categories');
    } catch (error) {
      alert('Error saving data!');
    }
  }

  return (
    <div className="row">
      <h1>Category form</h1>
      <form className="col s12" onSubmit={createCategory}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              name="name"
              id="name"
              className="validate"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit">
          Save
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Categories;
