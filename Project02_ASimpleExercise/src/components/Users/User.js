function User(props) {
   const userValue = `${props.username} (${props.age} ${props.age === "1" ? "year" : "years"} old)`;
   
   return <li>{userValue}</li>

}

export default User;