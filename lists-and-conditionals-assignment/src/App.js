import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {


    state = {
        userInput: '',
        length: 0
    }

    validateInputHandler = (event) => {
        let value = event.target.value;
        let len = event.target.value.length;
        this.setState({ length: len });
        this.setState({ userInput: value });
    }

    render() {

        const charList = this.state.userInput.split('').map((c, index) => {
            return <CharComponent
                char={c}
                key={index} />;
        });

        return (
                <div className="App">
                    <input type="text" onChange={this.validateInputHandler} />
                    <p>{this.state.userInput} [{this.state.length}]</p>
                    <ValidationComponent length={this.state.length}/>
                    {charList}
                </div>
                );
    }
}

export default App;
