import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>This is what you get when you get output</p>
      <p>and then you get this user: {props.username}</p>
    </div>
  );
};

export default UserOutput;
