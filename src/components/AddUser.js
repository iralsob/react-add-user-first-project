import React, { useRef } from "react";
import Card from "./UI/Card";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameValue = useRef();
  const userAgeValue = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    props.onEnteredUser({
      name: userNameValue.current.value,
      age: userAgeValue.current.value,
    });

    userNameValue.current.value = "";
    userAgeValue.current.value = "";
  };
  const changeHandler = () => {
    props.onStartEntering();
  };
  return (
    <Card className={style.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>User Name</label>
        <input
          id='username'
          type='text'
          ref={userNameValue}
          onChange={changeHandler}
        />
        <label htmlFor='userage'>Age</label>
        <input
          id='userage'
          type='number'
          ref={userAgeValue}
          onChange={changeHandler}
        />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
