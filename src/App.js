import React, {useState} from "react";
import Card from "./components/Card";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const enteredUserHandler = (user) => {
    setUsersList((prevState) => {
      return([user, ...prevState]);
    });
  }
  return (
    <div>
      <Card onEnteredUser={enteredUserHandler}></Card>
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
