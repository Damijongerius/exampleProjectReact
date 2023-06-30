import React from 'react';
import MoneyLeaderBoard from './components/MoneyLeaderboard';
import PlayTimeLeaderBoard from './components/PlayTimeLeaderBoard';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <h1>factory leaderboards</h1>
      <div className='leaderboard-container'>
      <MoneyLeaderBoard />
      <PlayTimeLeaderBoard />
      </div>
    </div>
  );
}

export default App;
