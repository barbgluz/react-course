import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.module.css';

class App extends Component {

    state = {
        persons: [
            { id: 'shfs', name : "Max", age: 28 },
            { id: 'asf', name : "Gabi", age: 20 },
            { id: 'avvd', name : "Stephanie", age: 26 }
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

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return (p.id === id);
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    togglePersonsHandler = () => {
        let doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {

        let persons = null;
        if(this.state.showPersons) {

            persons = (
                <div>
                    <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler} />
                </div>
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}/>
                {persons}
            </div>

        );

        //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
    }
}

export default App;
