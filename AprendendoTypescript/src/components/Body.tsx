import React from 'react';
import './Body.css';

const suggestions = [
  { id: 1, username: 'dev_master', avatar: 'https://via.placeholder.com/40' },
  { id: 2, username: 'code_ninja', avatar: 'https://via.placeholder.com/40' },
  { id: 3, username: 'react_wizard', avatar: 'https://via.placeholder.com/40' }
];

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src="https://via.placeholder.com/50" alt="Profile" />
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
    </div>
  );
};

export default Sidebar;
