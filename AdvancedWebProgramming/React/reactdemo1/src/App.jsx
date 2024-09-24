//foundation

import React from "react";
import Child from "./components/Child";

const App = () => {
  let children = ["Henry IV", "Henry V", "Henry VI"];
  let newArray = children.map((kid, index) => {
    return <Child key={index} fname={kid} />;
  });

  //anything above return is Javascript. Anything on return and below is JSX
  return (
    <>
      <h1>My kids are:</h1>
      {newArray}
    </> //contains no default styling
  );
};

export default App;
