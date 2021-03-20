import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ButtonSave from '../../components/ButtonSave';

const GamesForm = () => {
  const M = window.M;

  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  });

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [release, setRelease] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [metascore, setMetascore] = useState('');

  const [categoryId, setCategoryId] = useState('DEFAULT');
  const [developerId, setDeveloperId] = useState('DEFAULT');
  const [platformId, setPlatformId] = useState('DEFAULT');

  const [categories, setCategories] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    async function getTables() {
      const responseCategories = await axios.get(
        'http://localhost:3000/categories',
      );
      const responseDevelopers = await axios.get(
        'http://localhost:3000/developers',
      );
      const responsePlatforms = await axios.get(
        'http://localhost:3000/platforms',
      );

      setCategories(responseCategories.data);
      setDevelopers(responseDevelopers.data);
      setPlatforms(responsePlatforms.data);
    }
    getTables();
  }, []);

  return (
    <div className="row">
      <h1>Games Form</h1>
      <form className="col s12">
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

          <div className="input-field col s12">
            <input
              type="text"
              name="release"
              id="release"
              className="validate"
              value={release}
              onChange={({ target }) => setRelease(target.value)}
            />
            <label htmlFor="release">Release</label>
          </div>

          <div className="input-field col s12">
            <input
              type="text"
              name="synopsis"
              id="synopsis"
              className="validate"
              value={synopsis}
              onChange={({ target }) => setSynopsis(target.value)}
            />
            <label htmlFor="synopsis">Synopsis</label>
          </div>

          <div className="input-field col s12">
            <input
              type="text"
              name="metascore"
              id="metascore"
              className="validate"
              value={metascore}
              onChange={({ target }) => setMetascore(target.value)}
            />
            <label htmlFor="metascore">Metascore</label>
          </div>

          <div className="input-field col s12">
            <select
              value={categoryId}
              onChange={({ target }) => setCategoryId(target.value)}
            >
              <option value="DEFAULT" disabled>
                Choose your option
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <label>Category</label>
          </div>

          <div className="input-field col s12">
            <select
              value={developerId}
              onChange={({ target }) => setDeveloperId(target.value)}
            >
              <option value="DEFAULT" disabled>
                Choose your option
              </option>
              {developers.map((developer) => (
                <option key={developer.id} value={developer.id}>
                  {developer.name}
                </option>
              ))}
            </select>
            <label>Developer</label>
          </div>

          <div className="input-field col s12">
            <select
              value={platformId}
              onChange={({ target }) => setPlatformId(target.value)}
            >
              <option value="DEFAULT" disabled>
                Choose your option
              </option>
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.name}
                </option>
              ))}
            </select>
            <label>Platform</label>
          </div>
        </div>
        <ButtonSave />
      </form>
    </div>
  );
};

export default GamesForm;
