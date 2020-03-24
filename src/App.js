import React from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = {
    persons: [
      { name: 'tim', age: 13 },
      { name: 'sally', age: 33 },
      { name: 'lakesha', age: 23 },
    ],
    username: 'someone',
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 13 },
        { name: 'sally', age: 33 },
        { name: 'lakesha', age: 53 },
      ],
    });
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

  changeUsernameHandler = (newUser) => {
    this.setState({
      username: newUser,
    });
  };

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

    return (
      <div className='App'>
        <h1>Hi, I'm a React application</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('timotayo')}
        >
          Switch Names
        </button>

        <UserInput
          username={this.state.username}
          changeUser={this.changeUsernameHandler.bind(this, 'test')}
        />

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <UserOutput
          username={this.state.username}
          changedUser={this.changeUsernameHandler}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'timothy!!!!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Fortnite
        </Person>
        <UserOutput username={this.state.username} />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
