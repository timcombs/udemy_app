import React from 'react';

const UserInput = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '0.2rem solid blue',
    padding: '0.5rem',
    cursor: 'pointer',
    margin: '0.5rem',
  };

  console.log('props', props);

  return (
    <div>
      <input style={style} type='text' value={props.username}></input>
    </div>
  );
};

export default UserInput;
