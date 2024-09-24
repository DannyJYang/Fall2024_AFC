import React from "react";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

const App = () => {



  return (
    <div>
      <Greeting name="Danny" />
      <UserCard name="Bob" age="30"/>
      <UserCard name="Charlie" age="35"/>
      <UserCard name="Alice" age="25"/>
    </div>
  );

};

export default App;
