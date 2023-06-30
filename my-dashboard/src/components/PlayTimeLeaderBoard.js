import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlayTimeLeaderBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Leaderboard/Playtime');
        console.log(response);
        setLeaderboardData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
<div className="leaderboard">
      <h1 className="leaderboard-title">playTime</h1>
      <table className="leaderboard-table">  
        <thead>
          <tr>
            <th>Username</th>
            <th>Save Name</th>
            <th>playtime</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.userName}</td>
              <td>{entry.saveName}</td>
              <td>{entry.playtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayTimeLeaderBoard;