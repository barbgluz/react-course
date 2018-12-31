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


    deletePersonHandler = (personsIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1);
        this.setState({persons: persons});
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

        let persons = null;
        if(this.state.showPersons) {

            persons = (
                    <div>
                        {this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age} />
                        })}
                    </div>
                    )
        }

        return (
                <div className="App">
                    <h1>Hi, I'm a react app</h1>
                    <p>Another heading</p>

                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Switch name</button>

                    {persons}

                </div>

                );

        //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
    }
}

export default App;
