import React, {useState} from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import EmptyInputMsg from "./components/Errors/EmptyInputMsg";
import WrongNumberMsg from "./components/Errors/WrongNumberMsg";

function App() {
  const [usersList, setUsersList] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const enteredUserHandler = (user) => {

    const enteredName = user.name;
    const enteredAge = user.age;
    
    if (enteredAge < 0){
      setIsWrong(true);
    } else if (enteredName.length === 0 ||
        enteredAge.toString().length === 0) {
          setIsEmpty(true);
    } else {
      setUsersList((prevState) => {
        return([user, ...prevState]);
      });
    }
    
  }

  const startEnterigHandler = () => {
    setIsEmpty(false);
    setIsWrong(false);
  }
  

  return (
    <div>
      {isEmpty && <EmptyInputMsg/>}
      {isWrong && <WrongNumberMsg/>}
      <AddUser onEnteredUser={enteredUserHandler}
        onStartEntering = {startEnterigHandler}
        ></AddUser>
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
