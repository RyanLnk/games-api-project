import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import ButtonAdd from '../../components/ButtonAdd';
import ButtonRemove from '../../components/ButtonRemove';
import EmptyTable from '../../components/EmptyTable';
import LinkEdit from '../../components/LinkEdit';

const Games = () => {
  const M = window.M;
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      const response = await axios.get(
        'http://localhost:3000/games?_expand=category&_expand=developer&_expand=platform',
      );
      setGames(response.data);
    }
    getGames();
  }, []);

  async function deleteGame(id) {
    if (window.confirm('Are you sure you want to delete the game?')) {
      try {
        await axios.delete(`http://localhost:3000/games/${id}`);
        setGames(games.filter((game) => game.id !== id));
        M.toast({
          html: 'Game deleted successfully!',
          displayLength: 1500,
        });
      } catch (error) {
        alert(`Couldn't delete game`);
      }
    }
  }

  function add() {
    navigate('/gamesform');
  }

  if (games.length !== 0) {
    return (
      <div>
        <h1>Games</h1>
        <div className="row">
          <table className="highlight">
            <thead>
              <tr>
                <th>Name</th>
                <th>Release</th>
                <th>Synopsis</th>
                <th>Metascore</th>
                <th>Category</th>
                <th>Developer</th>
                <th>Platform</th>
                <th className="right-align">Options</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.name}</td>
                  <td>{game.release}</td>
                  <td>{game.synopsis}</td>
                  <td>{game.metascore}</td>
                  <td>{game.category.name}</td>
                  <td>{game.developer.name}</td>
                  <td>{game.platform.name}</td>
                  <td>
                    <LinkEdit to={`/gamesform/${game.id}`} />

                    <ButtonRemove
                      deleteFunction={deleteGame}
                      parameter={game.id}
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
        <h1>Games</h1>
        <EmptyTable />
        <ButtonAdd add={add} />
      </div>
    );
  }
};

export default Games;
