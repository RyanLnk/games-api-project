import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import ButtonSave from '../../components/ButtonSave';

const PlatformsForm = () => {
  const M = window.M;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function getPlatforms() {
        const response = await axios.get(
          `http://localhost:3000/platforms/${params.id}`,
        );
        setName(response.data.name);
        M.updateTextFields();
      }
      getPlatforms();
    }
  }, [params.id, M]);

  async function createPlatform(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/platforms', {
          name,
        });
        toast.dark('Platform successfully registered!');
      } else {
        await axios.put(`http://localhost:3000/platforms/${params.id}`, {
          name,
        });
        toast.dark('Platform updated successfully!');
      }
      setName('');
      navigate('/platforms');
    } catch (error) {
      toast.error('Error saving data!');
    }
  }

  return (
    <div className="row">
      <h1>Platforms Form</h1>
      <form className="col s12" onSubmit={createPlatform}>
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

export default PlatformsForm;
