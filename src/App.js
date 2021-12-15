import React, { Component } from 'react'
import './App.css';

// Components
import Racing from './Racing';
import Basketball from './Basketball';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Racing />
        <Basketball />
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component --> made out of a function
// class component --> is made out of a class