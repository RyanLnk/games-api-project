import React from 'react';
import { Route, Routes } from 'react-router';

import Games from './pages/Games';
import GamesForm from './pages/GamesForm';
import Categories from './pages/Categories';
import CategoriesForm from './pages/CategoriesForm';
import Developers from './pages/Developers';
import DevelopersForm from './pages/DevelopersForm';
import Platform from './pages/Platform';
import PlatformForm from './pages/PlatformForm';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas para jogos */}
      <Route path="/" element={<Games />} />
      <Route path="/gamesform" element={<GamesForm />} />
      <Route path="/gamesform/:id" element={<GamesForm />} />

      {/* Rotas para categorias */}
      <Route path="/categories" element={<Categories />} />
      <Route path="/categoriesform" element={<CategoriesForm />} />
      <Route path="/categoriesform/:id" element={<CategoriesForm />} />

      {/* Rotas para desenvolvedores */}
      <Route path="/developers" element={<Developers />} />
      <Route path="/developersform" element={<DevelopersForm />} />
      <Route path="/developersform/:id" element={<DevelopersForm />} />

      {/* Rotas para plataformas */}
      <Route path="/platforms" element={<Platform />} />
      <Route path="/platformsform" element={<PlatformForm />} />
      <Route path="/platformsform/:id" element={<PlatformForm />} />
    </Routes>
  );
};

export default AppRoutes;
