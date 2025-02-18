import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';  // Página inicial
import Perfil from '../pages/Perfil';  // Página de perfil

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial */}
        <Route path="/perfil" element={<Perfil />} />  {/* Página do perfil */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
