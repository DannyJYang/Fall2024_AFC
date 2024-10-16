import * as React from "react";
import axios from "axios";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import backgroundImage from "./assets/DolbyCinema.png";
import Navbar from "./components/Navbar";
import NowPlaying from "./components/NowPlaying";
import Landing from "./components/Landing";
import Results from "./components/Results";
import Error from "./components/Error"

function App() {
  // const { VITE_TMDB_API_TOKEN } = process.env
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  const [movies, setMovies] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/NowPlaying" element={<NowPlaying />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
