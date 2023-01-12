import React, { useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameValue = useRef();
  const userAgeValue = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = userNameValue.current.value;
    const enteredAge = userAgeValue.current.value;

    props.onEnteredUser({
      name: userNameValue.current.value,
      age: userAgeValue.current.value
    });

    if (enteredName.trim().length === 0 
      || enteredAge.length ===0
      || +enteredAge < 0) {
        return;
    }
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
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
