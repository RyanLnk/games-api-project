import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import ButtonAdd from '../../components/ButtonAdd';
import ButtonRemove from '../../components/ButtonRemove';
import EmptyTable from '../../components/EmptyTable';
import LinkEdit from '../../components/LinkEdit';
import Thead from '../../components/Thead';

import '../../assets/styles/index.css';

const Developers = () => {
  const M = window.M;
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function getDevelopers() {
      const response = await axios.get('http://localhost:3000/developers');
      setDevelopers(response.data);
    }
    getDevelopers();
  }, []);

  async function deleteDeveloper(id) {
    try {
      if (window.confirm('Are you sure you want to delete the developer?')) {
        await axios.delete(`http://localhost:3000/developers/${id}`);
        toast.dark('Developer deleted successfully!');
        setDevelopers(developers.filter((developer) => developer.id !== id));
      }
    } catch (error) {
      toast.error(`Couldn't delete developer`);
    }
  }

  function add() {
    navigate('/developersform');
  }

  if (developers.length !== 0) {
    return (
      <div>
        <h1>Developers</h1>
        <div className="row">
          <table className="highlight">
            <Thead />
            <tbody>
              {developers.map((developer) => (
                <tr key={developer.id}>
                  <td>{developer.name}</td>
                  <td className="right-align">
                    <LinkEdit to={`/developersform/${developer.id}`} />

                    <ButtonRemove
                      deleteFunction={deleteDeveloper}
                      parameter={developer.id}
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
        <h1>Developers</h1>
        <EmptyTable />
        <ButtonAdd add={add} />
      </div>
    );
  }
};

export default Developers;
