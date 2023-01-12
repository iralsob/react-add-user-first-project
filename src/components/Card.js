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

    userNameValue.current.value = '';
    userAgeValue.current.value = '';
  };
  const changeHandler = () => {
    props.onStartEntering();
  }
  return (
    <div className='card'>
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input 
            type='text' 
            ref={userNameValue} 
            onChange={changeHandler}/>
        <label>Age</label>
        <input 
            type='number' 
            ref={userAgeValue}
            onChange={changeHandler}/>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Card;
