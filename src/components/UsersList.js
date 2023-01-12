import React from "react";
import User from "./User";
import Card from "./UI/Card";

import style from './UsersList.module.css'

const UsersList = (props) => {

  return (
    <Card className={style.users}>
      <ul>
        {props.data.map((user) => (
          <User key={Math.random()} 
              name={user.name} 
              age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
