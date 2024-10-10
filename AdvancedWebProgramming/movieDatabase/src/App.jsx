import { useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import "./App.css";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import * as React from 'react';
import axios from "axios"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MovieCard from "./components/MovieCard";

function App() {
  const { VITE_TMDB_API_TOKEN } = process.env
  const baseURL = `https://api.themoviedb.org/3`
  const [movies,setMovies] = useState([]);

  const handelClick = () => {
    console.log("Clicked")
    //Scaffolding
    let route = "movie/now_playing"
    let endpoint = `${baseURL}/${route}`

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
      }
    };
    
    axios(options)
    .then(response => {
      console.log(response)
      //response.data.results => array of movie objects
      let movieArray = response.data.results.map((movie) => {
        return <MovieCard film={movie} />
      })
      setMovies(movieArray);
    })
    .catch(error => console.log(error))
  }


  return (
    <>
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to ="/home">Home</Link></li>
              <li><Link to ="/about">About</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
            </ul>
            <hr />
            <Routes>
              {/* <Route exact path="/" component={<LandingPage/>} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
      <button variant="contained" onClick={handelClick}>Handel this you Scoundrel</button>
      
      {movies}

    </>
  );
}

export default App;