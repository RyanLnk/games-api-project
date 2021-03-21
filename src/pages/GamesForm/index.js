import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ButtonSave from '../../components/ButtonSave';
import Input from '../../components/Input';

const GamesForm = () => {
  const M = window.M;
  const navigate = useNavigate();
  const params = useParams();

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

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }, [categories, developers, platforms, M.FormSelect]);

  useEffect(() => {
    if (params.id) {
      async function getGames() {
        const response = await axios.get(
          `http://localhost:3000/games/${params.id}`,
        );
        setName(response.data.name);
        setRelease(response.data.release);
        setSynopsis(response.data.synopsis);
        setMetascore(response.data.metascore);
        setCategoryId(response.data.categoryId);
        setDeveloperId(response.data.developerId);
        setPlatformId(response.data.platformId);
        M.updateTextFields();
      }
      getGames();
    }
  }, [params.id, M]);

  async function createGame(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/games', {
          name,
          release,
          synopsis,
          metascore,
          categoryId: Number(categoryId),
          developerId: Number(developerId),
          platformId: Number(platformId),
        });
      } else {
        await axios.put(`http://localhost:3000/games/${params.id}`, {
          name,
          release,
          synopsis,
          metascore,
          categoryId: Number(categoryId),
          developerId: Number(developerId),
          platformId: Number(platformId),
        });
      }
      navigate('/');
    } catch (error) {
      //alert('Error saving data!');
      console.log(error);
    }
  }

  return (
    <div className="row">
      <h1>Games Form</h1>
      <form className="col s12" onSubmit={createGame}>
        <div className="row">
          <div className="input-field col s12">
            <Input name="name" id="name" value={name} function={setName} />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-field col s12">
            <Input
              name="release"
              id="release"
              value={release}
              function={setRelease}
            />
            <label htmlFor="release">Release</label>
          </div>

          <div className="input-field col s12">
            <Input
              name="synopsis"
              id="synopsis"
              value={synopsis}
              function={setSynopsis}
            />
            <label htmlFor="synopsis">Synopsis</label>
          </div>

          <div className="input-field col s12">
            <Input
              name="metascore"
              id="metascore"
              value={metascore}
              function={setMetascore}
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
