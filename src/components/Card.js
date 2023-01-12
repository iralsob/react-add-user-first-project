import React, {useRef} from "react";

const Card = (props) => {

  const userNameValue = useRef();
  const userAgeValue = useRef();
    
  const submitHandler = (event) => {
    event.preventDefault();
    props.onEnteredUser({
        name: userNameValue.current.value, 
        age:userAgeValue.current.value
    });
  };

  return (
    <div className='card'>
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input type='text' ref={userNameValue}/>
        <label>Age</label>
        <input type='number' ref={userAgeValue}/>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Card;
