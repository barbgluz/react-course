import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.module.css';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside constructor', props);
        this.state = {
            persons: [
            { id: 'shfs', name : "Max", age: 28 },
            { id: 'asf', name : "Gabi", age: 20 },
            { id: 'avvd', name : "Stephanie", age: 26 }
            ],
            otherState: "some other value",
            showPersons: false,
        }

    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate');
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
        console.log('[App.js] Inside render');

        let persons = null;
        if(this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler} />;
        }

        return (
                <div className={classes.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler} />
                    {persons}
                </div>

                );

        //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
    }
}

export default App;
