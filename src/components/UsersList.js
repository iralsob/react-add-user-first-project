import React from "react";
import User from "./User";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";

import style from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div>
      <ErrorModal title='Error' message='Something go wrong' />
      <Card className={style.users}>
        <ul>
          {props.data.map((user) => (
            <User key={Math.random()} name={user.name} age={user.age} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UsersList;
