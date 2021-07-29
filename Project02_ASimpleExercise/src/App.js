import React from "react";
import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersState, setUsersState] = useState([]);

  const userAddedHandler = (newUser) => {
    setUsersState((prevState) => [newUser, ...prevState]);
  };

  return (
    <div>
      <AddUser onUserAdded={userAddedHandler} />
      <UsersList users={usersState} />
    </div>
  );
}

export default App;
