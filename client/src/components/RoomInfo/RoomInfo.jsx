import React from 'react';

const RoomInfo = ({ users }) => {
  return (
    <div>
      <h2>People on the room.</h2>
      {users.map((user, i) => (
        <h4 key={i}>{user.name}</h4>
      ))}
    </div>
  );
};

export default RoomInfo;
