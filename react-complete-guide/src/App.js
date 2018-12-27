import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
        return (
          <div className="App">
              <h1>Hi, I'm a react app</h1>
              <p>Another heading</p>

              <Person />
          </div>
    );

    //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
  }
}

export default App;
