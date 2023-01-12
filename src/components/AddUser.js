import React, { useState, useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState(false);

  const userNameValue = useRef();
  const userAgeValue = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = userNameValue.current.value;
    const enteredAge = userAgeValue.current.value;

    

    if (
      enteredName.trim().length === 0 ||
      enteredAge.length === 0 ||
      +enteredAge < 0
    ) {
      setError(true);
      return;
    }

    props.onEnteredUser({
      name: userNameValue.current.value,
      age: userAgeValue.current.value,
    });

    userNameValue.current.value = "";
    userAgeValue.current.value = "";
  };
 
  const closeModalHandler = () => {
    setError(false);
  }
  return (
    <div>
      {error && <ErrorModal onCloseModal={closeModalHandler} title='Error' message='Something go wrong' />}
      <Card className={style.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>User Name</label>
          <input
            id='username'
            type='text'
            ref={userNameValue}
          />
          <label htmlFor='userage'>Age</label>
          <input
            id='userage'
            type='number'
            ref={userAgeValue}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
