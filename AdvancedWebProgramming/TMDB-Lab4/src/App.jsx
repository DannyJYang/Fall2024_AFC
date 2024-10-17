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
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <Router>
        <Navbar searchData={searchData} setSearchData={setSearchData}/>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/NowPlaying" element={<NowPlaying />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Results" element={<Results searchData={searchData} setErrorMessage={setErrorMessage} />} />
          <Route path="/Error" element={<Error errorMessage={errorMessage} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
