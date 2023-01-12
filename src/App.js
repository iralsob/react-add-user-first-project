import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const enteredUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [user, ...prevUsersList];
    });
  };

  return (
    <div>
      <AddUser onEnteredUser={enteredUserHandler}></AddUser>
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
