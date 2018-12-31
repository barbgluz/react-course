import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';

class App extends Component {

    state = {
        persons: [
        { name : "Max", age: 28 },
        { name : "Gabi", age: 20 },
        { name : "Stephanie", age: 26 }
        ],
        otherState: "some other value",
        showPersons: false,
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
            { name : newName, age: 28 },
            { name : "Gabriele", age: 20 },
            { name : "Stephanie", age: 27 }
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
            { name : "Max", age: 28 },
            { name : "Gabriele", age: 20 },
            { name : event.target.value, age: 27 }
            ]
        })
    }

    togglePersonsHandler = () => {
        let doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid #EAF400",
            padding: "8px",
            cursor: "pointer",
            boxShaddow: "none",
            borderRadius: "8px"
        };

        return (
                <div className="App">
                    <h1>Hi, I'm a react app</h1>
                    <p>Another heading</p>

                    <button
                        style={style}
                        onClick={() => this.togglePersonsHandler}>Switch name</button>

                    {
                        (this.state.showPersons === true) ?
                            <div>
                                <Person
                                    name={this.state.persons[0].name}
                                    age={this.state.persons[0].age} />

                                <Person
                                    name={this.state.persons[1].name}
                                    age={this.state.persons[1].age}
                                    click={this.switchNameHandler.bind(this, "Max!")}> My Hobbies: Racing </Person>

                                <Person
                                    name={this.state.persons[2].name}
                                    age={this.state.persons[2].age}
                                    changed={this.nameChangeHandler}
                               />
                            </div> : null
                    }

            </div>

            );

            //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
    }
}

export default App;
