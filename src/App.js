import React, { Component } from 'react'
import './App.css';

const driver = {
  name: 'Lewis',
  team: 'Mercedes',
};

const payload = [
  {
    name: 'Driver 2',
    team: 'Team 2',
  },
  {
    name: 'Driver 3',
    team: 'Team 3',
  },
  {
    name: 'Driver 4',
    team: 'Team 4',
  },
  {
    name: 'Driver 5',
    team: 'Team 5',
  },
];

const displayDrivers = payload.map((driver, idx) => {
  return (
    <div key={idx}>
      <h1>Name {driver.name}</h1>
      <p> Team {driver.team}</p>
    </div>
  );
});

// Basketball
const basketPlayer = {
  name: 'Steph Curry',
  team: 'Warriors',
};

const bballPayload = [
  {
    name: 'Basketball Player 2',
    team: 'Team 2',
  },
  {
    name: 'Basketball Player 3',
    team: 'Team 3',
  },
  {
    name: 'Basketball Player 4',
    team: 'Team 4',
  },
  {
    name: 'Basketball Player 5',
    team: 'Team 5',
  },
];

const displayBasketballPlayers = payload.map((player, idx) => {
  return (
    <div key={idx}>
      <h1>Name {player.name}</h1>
      <p> Team {player.team}</p>
    </div>
  );
});

// will be an array of all players on Team 4
const searchTeam4 = bballPayload.filter((player, idx) => {
  if (player.team === 'Team 4') {
    return true;
  } else {
    return false;
  }
});

const displayTeam4 = searchTeam4.map((player, idx) => {
  return (
    <div key={idx}>
      <h1>Player {player.name}</h1>
      <p>Team {player.team}</p>
    </div>
  )
});

console.log(searchTeam4);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Driver {driver.name}</h1>
        <p>Team {driver.team}</p>
        <div>
          {displayDrivers}
        </div>
        <div>
          <h1>Basketball</h1>
          <div>
            {displayBasketballPlayers}
            {displayTeam4}
          </div>
        </div>
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component --> made out of a function
// class component --> is made out of a class