import React, { Component } from 'react'
// import './App.css';

// Components
import Racing from './Racing';
import Basketball from './Basketball';
import Bowling from './Bowling';
import Running from './Running';
import Shooting from './Shooting';
import Cover from './Cover';
import Login from './Login';
import Admin from './Admin';
import Kanban from './Kanban';
import Hero from './Hero';
import Forum from './Forum';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Racing />
        <Basketball />
        <Bowling />
        <Running />
        <Shooting />
        <Cover />
        <Login /> */}
        <Admin />
        {/* <Kanban /> */}
        {/* <Hero /> */}
        {/* <Forum /> */}
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component --> made out of a function
// class component --> is made out of a class