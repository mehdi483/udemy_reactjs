import styles from "./UsersList.module.css";
import User from "./User";
import Card from "../UI/Card";

function UsersList(props) {
  if (props.users.length > 0)
    return (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <User
              username={user.username}
              age={user.age}
              key={user.id}
            />
          ))}
        </ul>
      </Card>
    );

  return null;
}

export default UsersList;
