import * as React from 'react';
import axios from "axios"
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import backgroundImage from './assets/DolbyCinema.png';
import NavBar from './components/Navbar'


function App() {
  // const { VITE_TMDB_API_TOKEN } = process.env

  useEffect(() => {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  }, []);

  const [movies,setMovies] = useState([]);


  return (
    <>
      <NavBar />
      {/* <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to ="/home">Home</Link></li>
              <li><Link to ="/about">About</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
            </ul>
            <hr />
            <Routes> */}
              {/* <Route exact path="/" component={<LandingPage/>} /> */}
              {/* <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
      <button variant="contained" onClick={handelClick}>Handel this you Scoundrel</button> */}
    </>
  )
}

export default App
