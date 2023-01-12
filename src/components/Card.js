import React from "react";

const Card = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit!");
  };
  return (
    <div className='card'>
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input type='text' />
        <label>Age</label>
        <input type='number' />
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Card;
