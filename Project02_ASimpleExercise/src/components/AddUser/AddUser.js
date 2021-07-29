import styles from "./AddUser.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../Shared/ErrorModal";

function AddUser(props) {
  const [usernameState, setUsernameState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [errorState, setErrorState] = useState();

  const usernameChangeHandler = (event) => setUsernameState(event.target.value);

  const ageChangeHandler = (event) => setAgeState(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (usernameState.trim().length === 0 || ageState.trim().length === 0) {
      setErrorState({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (Number(ageState) < 1 || Number(ageState) % 1 !== 0) {
      setErrorState({
        title: "Invalid age",
        message: "Please enter a valid age (integer greater than 0).",
      });
      return;
    }

    props.onUserAdded({
      username: usernameState.trim(),
      age: Math.trunc(Number(ageState)).toString(),
      id: Math.random().toString(),
    });
    setUsernameState("");
    setAgeState("");
  };

  const errorAcceptHandler = () => setErrorState();

  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onAcceptError={errorAcceptHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={usernameState}
            onChange={usernameChangeHandler}
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="username"
            type="number"
            value={ageState}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
