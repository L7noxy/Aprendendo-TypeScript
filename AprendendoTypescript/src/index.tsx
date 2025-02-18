import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/Router';  // Importando o Router
import './index.css';  // O seu CSS

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppRouter />  {/* Usando o Router */}
  </React.StrictMode>
);