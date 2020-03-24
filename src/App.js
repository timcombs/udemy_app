import React from 'react';
import './App.css';

import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = {
    persons: [
      { name: 'tim', age: 13 },
      { name: 'sally', age: 33 },
      { name: 'lakesha', age: 23 },
    ],
    showPersons: false,
    // username: 'someone',
  };

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'tim', age: 13 },
        { name: event.target.value, age: 33 },
        { name: 'lakesha', age: 53 },
      ],
    });
  };

  togglePersonsHandler = (idx) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // changeUsernameHandler = (event) => {
  //   this.setState({
  //     username: event.target.value,
  //   });
  // };

  render() {
    // use .bind(this, newSomething) syntax is possible rather than the
    // () => this.someHandler(newSomething) syntax to reduce overrendering

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '0.2rem solid blue',
      padding: '0.5rem',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                click={() => this.deletePersonHandler(idx)}
                name={person.name}
                age={person.age}
              />
              /* <UserInput
                currentName={this.state.username}
                changedUser={this.changeUsernameHandler}
              /> */
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React application</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
