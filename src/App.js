import React from "react";
import Card from "./components/Card";
import UsersList from "./components/UsersList";

function App() {
  const usersList = [{ name: "Ira", age: "30" }];
  return (
    <div>
      <Card></Card>
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
