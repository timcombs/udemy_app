import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'tim', age: 13 },
      { name: 'sally', age: 33 },
      { name: 'lakesha', age: 23 },
    ],
  };

  switchNameHandler = (newName) => {
    console.log('was clicked!');
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

  render() {
    // use .bind(this, newSomething) syntax is possible rather than the
    // () => this.someHandler(newSomething) syntax to reduce overrendering

    return (
      <div className='App'>
        <h1>Hi, I'm a React application</h1>
        <button onClick={() => this.switchNameHandler('timotayo')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'timothy!!!!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Fortnite
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
