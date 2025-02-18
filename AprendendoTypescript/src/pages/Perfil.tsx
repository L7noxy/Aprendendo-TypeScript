import React from 'react';
import './Perfil.css';
import { Link } from 'react-router-dom';

const suggestions = [
  { id: 1, username: 'dev_master', avatar: './img/foto4.jpg' },
  { id: 2, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 3, username: 'react_wizard', avatar: './img/foto2.jpg' },
  { id: 4, username: 'dev_master', avatar: './img/foto4.jpg' },
  { id: 5, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 6, username: 'dev_master', avatar: './img/foto4.jpg' },
  { id: 7, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 8, username: 'dev_master', avatar: './img/foto4.jpg' },
  { id: 9, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 10, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 11, username: 'dev_master', avatar: './img/foto4.jpg' },
  { id: 12, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 13, username: 'dev_master', avatar: './img/foto4.jpg' },
  { id: 14, username: 'code_ninja', avatar: './img/foto1.jpg' },
  { id: 15, username: 'dev_master', avatar: './img/foto4.jpg' }
];

const Perfil: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src='./img/foto3.jpg' alt="Profile" />
        <span className="username">gabriel_dev</span>
      </div>
      
      <div className="sidebar-suggestions">
        <h4>Sugestões para você</h4>
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="suggestion">
            <img src={suggestion.avatar} alt={suggestion.username} />
            <span className="username">{suggestion.username}</span>
            <span className="follow">Seguir</span>
          </div>
        ))}
      </div>
      <Link to='/'>voltar</Link>
    </div>
  );
};

export default Perfil;