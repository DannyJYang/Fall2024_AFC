import * as React from 'react';
import axios from "axios"
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import backgroundImage from './assets/DolbyCinema.png';
import Navbar from './components/Navbar'


function App() {
  // const { VITE_TMDB_API_TOKEN } = process.env


  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";


  const [movies,setMovies] = useState([]);


  return (
    <>
      <Navbar />
     
    </>
  )
}

export default App
