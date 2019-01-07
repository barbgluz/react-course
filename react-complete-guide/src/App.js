import React, { Component } from 'react';
import Person from './Person/Person';
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
        let btnClass= '';
        if(this.state.showPersons) {

            persons = (
                    <div>
                        {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                        })}
                    </div>
                    );
            btnClass = classes.Red;
        }

        let assignedClasses = [''];
        if(this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a react app</h1>
                <p className={assignedClasses.join(' ')}>Another heading</p>

                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler}>Switch name</button>

                {persons}

            </div>

        );

        //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
    }
}

export default App;
