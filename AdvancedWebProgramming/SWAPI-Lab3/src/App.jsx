import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table";
import hoverSound from "./assets/ui_planetzoom.wav";
import tickSound from "./assets/Tick.mp3";
import resetSoundEffect from "./assets/ResetSound.mp3";
import backgroundImage from './assets/BackgroundPhoto.png';

function App() {
  const endpoint = `https://swapi.dev/api/people`;
  const [characterTable, setCharacterTable] = useState([]);
  const [hasData, setHasData] = useState(false);
  const hover = new Audio(hoverSound);
  const tick = new Audio(tickSound);
  const resetSound = new Audio(resetSoundEffect);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }, []);


  const getCharacter = (num) => {
    axios
      .get(`${endpoint}/${num}`)
      .then((response) => {
        console.log(response);
        setCharacterTable((prevCharacters) => [
          ...prevCharacters,
          response.data,
        ]);
      })
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  };

  const playHover = () => {
    hover.currentTime = 0;
    hover.play();
  };
  const playTick = () => {
    tick.currentTime = 0;
    tick.play();
  };
  const playReset = () => {
    resetSound.currentTime = 0;
    resetSound.play();
  };

  const handleSubmit = () => {
    playHover();
    if (hasData == false) {
      playHover();
      console.log("Submit");
      for (let i = 1; i <= 10; i++) {
        getCharacter(i);
      }
      setHasData(true);
    }
  };

  const handleReset = () => {
    console.log("Reset");
    playReset();
    setCharacterTable([]);
    setHasData(false);
  };

  return (
    <>
      <div>
        <h1>SWAPI</h1>
      </div>
      <div className="row" id="buttonRow">
        <button onMouseEnter={playTick} onClick={handleSubmit}>
          Get Info
        </button>
        <button onMouseEnter={playTick} onClick={handleReset}>
          Reset
        </button>
      </div>

      {hasData && <Table id="characterTable" character={characterTable} visibility="hidden"/>}
    </>
  );
}

export default App;
