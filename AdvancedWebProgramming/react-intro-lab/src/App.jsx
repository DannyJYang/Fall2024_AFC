import React from "react";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import CardContainer from "./components/CardContainer"

const App = () => {
  let info = [
    {name: "Bob", age: "30"},
    {name: "Charlie", age: "35"},
    {name: "Alice", age:"25"}
  ];
  let userCards = info.map((user, i) => {
    return <UserCrard key={index} name={user.name} age={user.age}/>;
  });


  return (
    <div>
      <Greeting name="Danny" />
      <CardContainer children={userCards}/>
    </div>
  );

};

export default App;
