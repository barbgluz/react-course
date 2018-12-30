import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';
import './UserOutput/UserOutput.css';

class App extends Component {
  state = {
    username: "barbgluz"
  }

  updateUsername = (event) => {
    this.setState({ username: event.target.value})
  }

  render() {
    const style = {
        textTransform: 'uppercase'
    }

    return (
      <div className="App">
          <h1 style={style}>Stuff</h1>
          <UserInput changed={this.updateUsername} currentName={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
