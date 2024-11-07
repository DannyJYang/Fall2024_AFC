// import React, {useState} from 'react'
import * as React from 'react';
import './App.css'
import Navbar from "./components/Navbar.tsx"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.tsx"
import SearchPage from "./components/pages/SearchPage.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import FavoritePage from "./components/pages/FavoritePage.tsx";
import {useEffect, useRef, useState} from "react";
import theme from "./components/ui/theme.tsx"
import {Button, ThemeProvider} from "@mui/material";
import backgroundMusic from "./assets/BackgroundMusic.mp3"


function App() {

    const [searchInput, setSearchInput] = useState("")
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.log('Playback prevented:', error);
                });
            }
        }
    }, [isPlaying, volume]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
    };

    return (
        <>

            <ThemeProvider theme={theme}>
                <Navbar searchInput={searchInput} setSearchInput={setSearchInput} position="fixed"/>
                <Routes>
                    <Route index element={<LandingPage/>}/>
                    <Route path="/SearchPage"
                           element={<SearchPage searchInput={searchInput} setSearchInput={setSearchInput}/>}/>
                    <Route path="/LandingPage" element={<LandingPage/>}/>
                    <Route path="/ErrorPage" element={<ErrorPage/>}/>
                    <Route path="/FavoritePage"
                           element={<FavoritePage setSearchInput={setSearchInput}/>}/>
                </Routes>
            </ThemeProvider>
            <div className="App">
                <audio ref={audioRef} loop autoPlay>
                    <source src={backgroundMusic} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <div>
                    <Button onClick={togglePlay}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>
            </div>

        </>

    )
}

export default App
