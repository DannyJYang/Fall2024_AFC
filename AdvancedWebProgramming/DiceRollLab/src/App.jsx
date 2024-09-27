import { useEffect, useState, useRef } from "react";
import "./App.css";
import "./components/Helper";
import { numberGenerator } from "./components/Helper";
import Dice from "./components/Dice";

function App() {
  const [dice1, setDice1] = useState(numberGenerator());
  const [dice2, setDice2] = useState(numberGenerator());
  const [dice3, setDice3] = useState(numberGenerator());
  const [backgroundImage, setBackgroundImage] = useState("");

  const audioRef = useRef(null);

  useEffect(() => {
    if (dice1 === 5 && dice2 === 5 && dice3 === 5) {
      document.body.style.backgroundImage = "url('/assets/Background.png')";
      document.body.style.backgroundSize = "contain";
      document.body.style.backgroundPosition = "center";
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    } else {
      document.body.style.backgroundImage = "none";
    }

    if (sum != 18 && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [dice1, dice2, dice3]);

  const rollDice = () => {
    // setDice1(numberGenerator());
    // setDice2(numberGenerator());
    // setDice3(numberGenerator());
    setDice1(5);
    setDice2(5);
    setDice3(5);
    if (dice1 === 5 && dice2 === 5 && dice3 === 5) {
      document.body.style.backgroundImage = "url('/assets/Background.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    } else {
      document.body.style.backgroundImage = "none";
    }
  };
  const sum = dice1 + dice2 + dice3 + 3;

  return (
    <>
      <audio ref={audioRef} src="/assets/Reborn.mp3" loop />
      <div className="row">
        <h1>Roll dice</h1>
      </div>

      <div className="row">
        <Dice roll={dice1} />
        <Dice roll={dice2} />
        <Dice roll={dice3} />
      </div>

      <div className="row">
        <h2>You rolled: {sum}</h2>
      </div>

      <button type="button" onClick={rollDice}>
        Dice Roll!
      </button>
    </>
  );
}

export default App;
