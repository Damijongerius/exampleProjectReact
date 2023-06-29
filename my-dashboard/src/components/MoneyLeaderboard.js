import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function getMoneyLeaderBoard() {
  const response = await axios.post('http://localhost:8080/Leaderboard/Money');
  console.log(response.data);
  return response.data;
}

function MoneyLeaderBoard() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaderboardData = await getMoneyLeaderBoard();
        setResult(leaderboardData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="moneyLeaderBoard">
      <h1>Results</h1>
      {result ? <p>{result}</p> : <p>Loading...</p>}
    </div>
  );
}

export default MoneyLeaderBoard;