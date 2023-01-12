import React from "react";
import User from "./User";

const UsersList = (props) => {
  console.log(props.data);

  return (
    <ul>
      {props.data.map((user) => (
        <User key={Math.random()} 
            name={user.name} 
            age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
