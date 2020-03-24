import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'tim', age: 13 },
      { name: 'sally', age: 33 },
      { name: 'lakesha', age: 23 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'timotayo', age: 13 },
        { name: 'sally', age: 33 },
        { name: 'lakesha', age: 43 },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hi, I'm a React application</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Fortnite
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
