import React from "react";

const User = (props) => {
  return (
    <li>
      {props.name} ({props.age} Jears old)
    </li>
  );
};

export default User;
