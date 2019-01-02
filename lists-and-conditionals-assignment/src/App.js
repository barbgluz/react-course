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

    deleteCharHandler = (index) => {
        const charL = this.state.userInput.split('');
        charL.splice(index, 1);
        const text = charL.join('');
        this.setState({ userInput: text })
    }

    render() {

        const charList = this.state.userInput.split('').map((c, index) => {
            return <CharComponent
                clicked={ () => this.deleteCharHandler(index) }
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
