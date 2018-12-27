import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: "barbgluz"
  }

  updateUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
          <h1>Stuff</h1>
          <UserInput changed={this.updateUsername} />
          <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
