import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import ButtonSave from '../../components/ButtonSave';

const DevelopersForm = () => {
  const M = window.M;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function getDevelopers() {
        const response = await axios.get(
          `http://localhost:3000/developers/${params.id}`,
        );
        setName(response.data.name);
        M.updateTextFields();
      }
      getDevelopers();
    }
  }, [params.id, M]);

  async function createDeveloper(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/developers', {
          name,
        });
        toast.dark('Developer successfully registered!');
      } else {
        await axios.put(`http://localhost:3000/developers/${params.id}`, {
          name,
        });
        toast.dark('Developer updated successfully!');
      }
      setName('');
      navigate('/developers');
    } catch (error) {
      toast.error('Error saving data!');
    }
  }

  return (
    <div className="row">
      <h1>Developers Form</h1>
      <form className="col s12" onSubmit={createDeveloper}>
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
        <ButtonSave />
      </form>
    </div>
  );
};

export default DevelopersForm;
