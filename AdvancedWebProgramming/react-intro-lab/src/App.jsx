import React from "react";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import CardContainer from "./components/CardContainer"
import { sort } from "./helper";

const App = () => {
  let users = [
    {name: "Bob", age: "30"},
    {name: "Charlie", age: "35"},
    {name: "Alice", age:"25"}
  ];
  sort(users);
  let userCards = users.map((user, index) => {
    return <UserCard key={index} name={user.name} age={user.age}/>;
  });


  return (
    <div>
      <Greeting name="Danny" />
      <CardContainer children={userCards}/>
    </div>
  );

};

export default App;
