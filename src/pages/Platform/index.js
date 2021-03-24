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

const PlatformsForm = () => {
  const M = window.M;
  const navigate = useNavigate();
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    async function getPlatforms() {
      const response = await axios.get('http://localhost:3000/platforms');
      setPlatforms(response.data);
    }
    getPlatforms();
  }, []);

  async function deletePlatforms(id) {
    try {
      if (window.confirm('Are you sure you want to delete the platform?')) {
        await axios.delete(`http://localhost:3000/platforms/${id}`);
        toast.dark('Platform deleted successfully!');
        setPlatforms(platforms.filter((platform) => platform.id !== id));
      }
    } catch (error) {
      toast.error(`Couldn't delete platform`);
    }
  }

  function add() {
    navigate('/platformsform');
  }

  if (platforms.length !== 0) {
    return (
      <div>
        <h1>Platforms</h1>
        <div className="row">
          <table className="highlight">
            <Thead />
            <tbody>
              {platforms.map((platform) => (
                <tr key={platform.id}>
                  <td>{platform.name}</td>
                  <td className="right-align">
                    <LinkEdit to={`/platformsform/${platform.id}`} />

                    <ButtonRemove
                      deleteFunction={deletePlatforms}
                      parameter={platform.id}
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
        <h1>Platforms</h1>
        <EmptyTable />
        <ButtonAdd add={add} />
      </div>
    );
  }
};

export default PlatformsForm;
