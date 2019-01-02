import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import './Person/Person.css';

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
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "1px solid #EAF400",
            padding: "8px",
            cursor: "pointer",
            boxShaddow: "none",
            borderRadius: "8px",
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
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
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black',
            }
        }

        let classes = [''];
        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
        <StyleRoot>
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <p className={classes.join(' ')}>Another heading</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch name</button>

                {persons}

            </div>
        </StyleRoot>

        );

        //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  "Does this work now?"));
    }
}

export default Radium(App);
