import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const numberGenerator = () => {
    return Math.floor(Math.random() * 10) + 1;
  }; //returns number from 1-10
  const [number, setNumber] = useState(0);
  const winRef = useRef(null);
  const buttonRef = useRef(null);

  const clickHandler = () => {
    setNumber(numberGenerator());
  };

  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://static.vecteezy.com/system/resources/thumbnails/021/156/395/small_2x/gambling-table-in-luxury-casino-abstract-blur-background-in-casino-photo.jpg')";
    document.body.style.backgroundSize= "contain";
    document.body.style.backgroundPosition="center";
    document.body.style.backgroundRepeat="no-repeat";
      if (number === 7) {
      if (winRef.current && buttonRef.current) {  //if you want to change components inside useEffect, you must use reference
        winRef.current.style.visibility = "visible";
        buttonRef.current.style.visibility = "hidden";
      }
    }
  }, [number]);

  return (
    <div>
      <div className="row">
        <h1>Casino Clicker</h1>
      </div>

      <div className="row" id="number">
        {number}
      </div>

      <div className="row" id="win" ref={winRef}>
        <h1>You win!</h1>
      </div>

      <div className="row">
        <button type="button" ref={buttonRef} onClick={clickHandler}>
          Click here to roll
        </button>
      </div>
    </div>
  );
}

export default App;
